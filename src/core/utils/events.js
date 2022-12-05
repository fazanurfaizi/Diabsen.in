/**
 * Cross-browser utility to get the event target value
 * @param {any} event
 * @returns {any}
 */
export function getEventTargetValue(event) {
	event = event || window.event
	var target
	if (event !== undefined) {
		target = event.target || event.srcElement
	}
	if (target !== undefined) {
		return target.value
	}
	return null
}

/**
 * debounce
 * @param {void} cb callback function
 * @param {Number} delay time deplay before executing callback
 * @param {Boolean} immediate force running while app mounted
 */
export const debounce = (cb, delay = 0, immediate = false) => {
	let timeout
	return (...args) => {
		if (immediate && !timeout) cb(...args)
		clearTimeout(timeout)

		timeout = setTimeout(() => {
			cb(...args)
		}, delay)
	}
}
