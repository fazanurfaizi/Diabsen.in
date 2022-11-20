/**
 * Performs a case-insentive comparison of two strings
 * @param {String} a
 * @param {String} b
 * @returns {Boolean}
 */
export function compareStrings(a, b) {
	return a.toLowerCase().localeCompare(b.toLowerCase())
}

/**
 * Capitalize first letter and separate words by space
 * @param {String} str
 * @returns {String}
 */
export function toTitleCase(str) {
	return str.charAt(0).toUpperCase() + str.slice(1).replace(/[-_]/giu, ' ')
}

/**
 * Replace multiple substrings in the given string from the matching arrays
 * @param {String} target
 * @param {Array} searchValues
 * @param {Array} replacements
 * @returns {String}
 */
export function stringReplaceFromArray(target, searchValues, replacements) {
	for (let i = 0; i < searchValues.length; i++) {
		target = target.replace(searchValues[i], replacements[i])
	}
	return target
}

/**
 * create random id for component key
 * @returns {String}
 */
export function randomId() {
	return (Math.random() + 1).toString(36).substring(7)
}
