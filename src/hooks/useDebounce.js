import { ref, customRef } from 'vue'
import { debounce } from '@/core/utils'

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
