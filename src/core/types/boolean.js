import def from './default'

const boolean = Object.assign({}, def)

boolean.isRight = true

boolean.filterPredicate = function (rowVal, filter) {
	return boolean.compare(rowVal, filter) === 0
}

boolean.compare = function (x, y) {
	function cook(d) {
		if (typeof d === 'boolean') return d ? 1 : 0
		if (typeof d === 'string') return d === 'true' ? 1 : 0
		return -Infinity
	}

	x = cook(x)
	y = cook(y)

	if (x < y) return -1
	if (x > y) return 1

	return 0
}

export default boolean
