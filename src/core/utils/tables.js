/**
 * get item value on row
 * @param {string} column
 * @param {any} item
 */
export function getItemValue(column, item) {
	if (column.includes('.')) {
		let content = ''
		const keys = column.split('.')
		const { length } = keys
		let i = 0
		while (i < length) {
			content = i === 0 ? item[keys[i]] : content[keys[i]]
			i += 1
			if (content === undefined) break
		}
		return content
	}
	return item[column]
}

/**
 * generate column content
 * @param {string} column
 * @param {any} item
 */
export function generateColumnContent(column, item) {
	const content = getItemValue(column, item)
	return Array.isArray(content) ? content.join(',') : content
}
