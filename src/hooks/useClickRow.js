/**
 * use click row hook
 * @param {import("vue").Ref} clickEventType
 * @param {import("vue").ComputedRef} isMultipleSelectable
 * @param {import("vue").Ref} showIndex
 * @param {import("vue").void} emits
 */
export default function useClickRow(
	clickEventType,
	isMultipleSelectable,
	showIndex,
	emits
) {
	const clickRow = (item, clickType) => {
		if(clickEventType.value !== clickType) return

		const clickRowArgs = { ...item }
		if(isMultipleSelectable.value) {
			const { checkbox } = item
			delete clickRowArgs.checkbox
			clickRowArgs.isSelected = checkbox
		}

		if(showIndex.value) {
			const { index } = item
			delete clickRowArgs.index
			clickRowArgs.indexInCurrentPage = index
		}

		emits('clickRow', clickRowArgs)
	}

	return {
		clickRow
	}
}
