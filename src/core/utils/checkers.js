import { unref } from "vue"

/**
 * Indicates if the variables is null, undefined, or empty string
 * @param {any} variable
 * @returns {Boolean}
 */
export function isNullable(variable) {
	return variable === null || variable === '' || variable === undefined
}

/**
 *
 * @param {import("vue").Ref} elRef
 * @returns {any}
 */
export function unrefElement(elRef) {
	return unref(elRef)?.$el ?? unref(elRef)
}
