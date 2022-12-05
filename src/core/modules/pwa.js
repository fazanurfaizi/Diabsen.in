export const setupPwa = (router) => {
	router.isReady().then(async () => {
		const { registerSW } = await import('virtual:pwa-register')
		registerSW()
	})
}
