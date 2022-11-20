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
