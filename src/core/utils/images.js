/**
 * Get image source
 * @param {string} name image filename
 * @returns string
 */
export function getImageSrc(name) {
	const path = `/src/assets/images/${name}.png`
	const modules = import.meta.globEager(`/src/assets/images/*.png`)
	return modules[path].default
}
