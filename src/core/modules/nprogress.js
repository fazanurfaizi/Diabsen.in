import NProgress from 'nprogress'

export const nprogress = (router) => {
	router.beforeEach(() => {
		NProgress.start()
	})
	router.afterEach(() => {
		NProgress.done()
	})
}
