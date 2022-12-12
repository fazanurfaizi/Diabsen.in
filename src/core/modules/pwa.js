import { clientsClaim, cacheNames } from 'workbox-core'
import {
	cleanupOutdatedCaches,
	createHandlerBoundToURL,
	precacheAndRoute,
} from 'workbox-precaching'
import {
	NavigationRoute,
	registerRoute,
	setDefaultHandler,
	setCatchHandler,
} from 'workbox-routing'
import { NetworkFirst, NetworkOnly, Strategy } from 'workbox-strategies'

export const setupPwa = (router) => {
	router.isReady().then(async () => {
		const { registerSW } = await import('virtual:pwa-register')
		registerSW()

		// this is necessary, since the new service worker will keep on skipWaiting state
		// and then, caches will not be cleared since it is not activated
		self.skipWaiting()
		clientsClaim()

		precacheAndRoute(self.__WB_MANIFEST)

		const backgroundSyncSupported =
			'sync' in self.registration ? true : false
		console.log('backgroundSyncSupported: ', backgroundSyncSupported)

		cleanupOutdatedCaches()

		// allow all pages work offline
		registerRoute(
			new NavigationRoute(createHandlerBoundToURL('index.html'), {
				denylist: [/sw\.js$/, /workbox-(.)*\.js$/],
			})
		)

		const data = {
			race: false,
			debug: false,
			credentials: 'same-origin',
			networkTimeoutSeconds: 0,
			fallback: 'index.html',
		}

		const cacheName = cacheNames.runtime

		const buildStrategy = () => {
			if (data.race) {
				class CacheNetworRace extends Strategy {
					_handle(request, handler) {
						const fetchAndCachePutDone =
							handler.fetchAndCachePut(request)
						const cacheMatchDone = handler.cacheMatch(request)

						return new Promise((resolve, reject) => {
							fetchAndCachePutDone.then(resolve).catch((e) => {
								if (data.debug) {
									console.warn(
										`Cannot fetch resource: ${request.url}`,
										e
									)
								}
							})
							cacheMatchDone.then(
								(response) => response && resolve(response)
							)

							// reject if both network and cache error or find no response.
							Promise.allSettled([
								fetchAndCachePutDone,
								cacheMatchDone,
							]).then((results) => {
								const [
									fetchAndCachePutResult,
									cacheMatchResult,
								] = results
								if (
									fetchAndCachePutResult.status ===
										'rejected' &&
									!cacheMatchResult.value
								) {
									reject(fetchAndCachePutResult.reason)
								}
							})
						})
					}
				}
				return new CacheNetworRace()
			} else {
				if (data.networkTimeoutSeconds > 0) {
					return new NetworkFirst({
						cacheName,
						networkTimeoutSeconds: data.networkTimeoutSeconds,
					})
				} else {
					return new NetworkFirst({ cacheName })
				}
			}
		}

		const manifest = self.__WB_MANIFEST

		const cacheEntries = []

		const manifestUrls = manifest.map((entry) => {
			const url = new URL(entry.url, self.location)
			cacheEntries.push(
				new Request(url.href, {
					credentials: data.credentials,
				})
			)

			return url.href
		})

		self.addEventListener('install', (event) => {
			event.waitUntil(
				caches.open(cacheName).then((cache) => {
					return cache.addAll(cacheEntries)
				})
			)
		})

		self.addEventListener('activate', (event) => {
			event.waitUntil(
				caches.open(cacheName).then((cache) => {
					cache.keys().then((keys) => {
						keys.forEach((request) => {
							data.debug &&
								console.info(
									`Checking cache entry to be removed: ${request.url}`
								)
							if (!manifestUrls.includes(request.url)) {
								cache.delete(request).then((deleted) => {
									if (data.debug) {
										if (deleted) {
											console.log(
												`Precached data removed: ${
													request.url || request
												}`
											)
										} else {
											console.log(
												`No Precache found: ${
													request.url || request
												}`
											)
										}
									}
								})
							}
						})
					})
				})
			)
		})

		registerRoute(
			({ url }) => manifestUrls.includes(url.href),
			buildStrategy()
		)

		setDefaultHandler(new NetworkOnly())

		// fallback to app-shel for document request
		setCatchHandler(async ({ event }) => {
			switch (event.request.destination) {
				case 'document':
					const response = await caches.match(fallback)
					return await (response
						? Promise.resolve(response)
						: Promise.resolve(Response.error()))
				default:
					return Promise.resolve(Response.error())
			}
		})
	})
}
