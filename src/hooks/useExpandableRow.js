import { Ref, ComputedRef, ref } from "vue";

/**
 * use expandable row hook
 * @param {Ref} items
 * @param {ComputedRef} prevPageEndIndex
 * @param {void} emits
 */
export default function useExpandableRow(
	items,
	prevPageEndIndex,
	emits
) {
	const expandingItemIndexList = ref([])

	const updateExpandingItemIndexList = (expandingItemIndex, expandingItem, event) => {
		event.stopPropagation();
		const index = expandingItemIndexList.value.indexOf(expandingItemIndex)
		if(index !== -1) {
			expandingItemIndexList.value.splice(index, 1)
		} else {
			const currentPageExpandIndex = items.value.findIndex((item) => JSON.stringify(item) === JSON.stringify(expandingItem))
			emits('expandRow', prevPageEndIndex.value + currentPageExpandIndex)
			expandingItemIndexList.value.push(prevPageEndIndex.value + currentPageExpandIndex)
		}
	}

	const clearExpandingItemIndexList = () => {
		expandingItemIndexList.value = []
	}

	return {
		expandingItemIndexList,
		updateExpandingItemIndexList,
		clearExpandingItemIndexList
	}
}
