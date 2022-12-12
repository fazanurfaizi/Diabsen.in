import { onUnmounted, unref, watch } from 'vue'

export default function useEventListener(...args) {
	let target
	let event
	let listener
	let options
	;[target, event, listener, options] = args

	if (!target) return

	let cleanup = () => {}

	watch(
		() => unref(target),
		(el) => {
			cleanup()
			if (!el) return

			el.addEventListener(event, listener, options)

			cleanup = () => {
				el.removeEventListener(event, listener, options)
				cleanup = () => {}
			}
		},
		{
			immediate: true,
		}
	)

	onUnmounted(stop)

	return stop
}
