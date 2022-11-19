import { isNullable } from "./checkers"

/**
 * Get an array with the numbers in the specified range
 * @param {Number} min
 * @param {Number} max
 * @param {Number} step=1
 * @returns {Array}
 */
export function range(min, max, step = 1) {
	var range = []
	for (let i = min; i <= max; i += step) {
		range.push(i)
	}
	return range
}

/**
 * Sort an array, but skip null values in the array
 * @param {Array} array
 * @param {Function} compareFunction
 * @returns {void}
 */
export function arraySafeSort(array, compareFunction) {
	array.sort((a, b) => isNullable(a) || isNullable(b) ? 0 : compareFunction(a, b))
}
