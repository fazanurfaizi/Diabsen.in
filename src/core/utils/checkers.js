/**
 * Indicates if the variables is null, undefined, or empty string
 * @param {any} variable
 * @returns {Boolean}
 */
export function isNullable(variable) {
	return variable === null || variable === '' || variable === undefined
}
