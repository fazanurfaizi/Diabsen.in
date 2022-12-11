import { unrefElement } from "@/core/utils"
import { onUnmounted } from "vue";
import useEventListener from "./useEventListener";

const EVENTS = ['mousedown', 'touchstart', 'pointerdown'];

export default function useClickOutside() {
	function onClickOutside(target, callback) {
		const listener = event => {
			const el = unrefElement(target)
			if(!el) return

			if(el === event.target || event.composedPath().includes(el)) return

			callback(event)
		}

		let disposables = EVENTS.map(event =>
			useEventListener(window, event, listener, { passive: true })
		)

		const stop = () => {
			disposables.forEach(stop => stop())
			disposables = []
		}

		onUnmounted(stop)

		return stop
	}

	return {
		onClickOutside
	}
}
