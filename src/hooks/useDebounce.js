import { ref, customRef } from 'vue'

/**
 * debounce
 * @param {void} cb callback function
 * @param {Number} delay time deplay before executing callback
 * @param {Boolean} immediate force running while app mounted
 */
const debounce = (cb, delay = 0, immediate = false) => {
	let timeout
	return (...args) => {
		if (immediate && !timeout) cb(...args)
		clearTimeout(timeout)

		timeout = setTimeout(() => {
			cb(...args)
		}, delay)
	}
}

/**
 * Use debounce hook
 * @param {String} initialValue debounce initial value
 * @param {Number} delay time deplay before executing callback
 * @param {Boolean} immediate force running while app mounted
 */
export default function useDebounce(initialValue, delay, immediate) {
	const state = ref(initialValue)
	const debouncedRef = customRef((track, trigger) => ({
		get() {
			track()
			return state.value
		},
		set: debounce(
			(value) => {
				state.value = value
				trigger()
			},
			delay,
			immediate
		),
	}))
	return debouncedRef
}
