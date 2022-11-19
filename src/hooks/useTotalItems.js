import { getItemValue } from "@/core/utils"
import { computed, watch } from "vue"

/**
 * use total items hook
 * @param {import("vue").Ref} clientSortOptions
 * @param {import("vue").Ref<Array>} filterOptions
 * @param {import("vue").ComputedRef<boolean>} isServerSideMode
 * @param {import("vue").Ref<Array>} headers
 * @param {import("vue").Ref<Array>} items
 * @param {import("vue").Ref<Array} itemsSelected
 * @param {import("vue").Ref<string>} searchValue
 * @param {import("vue").Ref<number>} serverItemsLength
 * @param {import("vue").Ref<boolean>} multiSort
 * @param {void} emits
 */
export default function useTotalItems(
	clientSortOptions,
	filterOptions,
	isServerSideMode,
	headers,
	items,
	itemsSelected,
	searchValue,
	serverItemsLength,
	multiSort,
	emits,
) {

	const searchableHeaders = computed(() => headers.value.filter((header) => header.searchable))

	const generateSearchingTarget = (item) => {
		if(searchableHeaders.value.length) {
			let searchString = ''
			searchableHeaders.value.forEach((field) => {
				searchString += getItemValue(field['value'], item)
			})
			return searchString
		}

		return Object.values(item).join(' ')
	}

	// items searching
	const itemsSearching = computed(() => {
		if(!isServerSideMode.value && searchValue.value !== '') {
			const regex = new RegExp(searchValue.value, 'i')
			return items.value.filter((item) => regex.test(generateSearchingTarget(item)))
		}
		return items.value
	})

	// items filtering
	const itemsFiltering = computed(() => {
		let itemsFiltered = [...itemsSearching.value]
		if(filterOptions.value) {
			filterOptions.value.forEach((option) => {
				itemsFiltered = itemsFiltered.filter((item) => {
					const { field, comparison, criteria } = option
					if(typeof comparison === 'function') {
						return comparison(getItemValue(field, item), criteria)
					}
					const itemValue = getItemValue(field, item)
					switch (comparison) {
						case '=':
							return itemValue === criteria
						case '!=':
							return itemValue !== criteria
						case '>':
							return itemValue > criteria
						case '<':
							return itemValue < criteria
						case '<=':
							return itemValue <= criteria
						case '>=':
							return itemValue >= criteria
						case 'between':
							return itemValue >= Math.min(...criteria) && itemValue <= Math.max(...criteria)
						default:
							return itemValue === criteria
					}
				})
			})
			return itemsFiltered
		}
		return itemsSearching.value
	})

	watch(itemsFiltering, (newVal) => {
		if(filterOptions.value) {
			emits('updateFilter', newVal)
		}
	}, { immediate: true, deep: true })

	function recursionMuiltSort(sortByArr, sortDescArr, itemsToSort, index) {
		const sortBy = sortByArr[index];
		const sortDesc = sortDescArr[index];
		const sorted = (index === 0 ? itemsToSort : recursionMuiltSort(sortByArr, sortDescArr, itemsToSort, index - 1)).sort((a, b) => {
			let isAllSame = true;
			for (let i = 0; i < index; i += 1) {
				if (getItemValue(sortByArr[i], a) !== getItemValue(sortByArr[i], b)) {
					isAllSame = false;
					break;
				}
			}
			if (isAllSame) {
				if (getItemValue(sortBy, a) < getItemValue(sortBy, b))
					return sortDesc ? 1 : -1;
				if (getItemValue(sortBy, a) > getItemValue(sortBy, b))
					return sortDesc ? -1 : 1;
				return 0;
			}
			return 0;
		});
		return sorted;
	}

	// flow: searching => filtering => sorting
	// (last step: sorting)
	const totalItems = computed(() => {
		if(isServerSideMode.value) return items.value
		if(clientSortOptions.value === null) return itemsFiltering.value
		const { sortBy, sortDesc } = clientSortOptions.value
		const itemsFilteringSorted = [...itemsFiltering.value]

		// multi sort
		if(multiSort && Array.isArray(sortBy) && Array.isArray(sortDesc)) {
			if(sortBy.length === 0)
				return itemsFilteringSorted
			return recursionMuiltSort(sortBy, sortDesc, itemsFilteringSorted, sortBy.length - 1)
		}

		return itemsFilteringSorted.sort((a, b) => {
			if (getItemValue(sortBy, a) < getItemValue(sortBy, b))
				return sortDesc ? 1 : -1;
			if (getItemValue(sortBy, a) > getItemValue(sortBy, b))
				return sortDesc ? -1 : 1;
			return 0;
		})
	})

	const totalItemsLength = computed(() => (isServerSideMode.value ? serverItemsLength.value : totalItems.value.length))

	// multiple selecting
	const selectItemsComputed = computed({
		get: () => itemsSelected.value ?? [],
		set: (value) => {
			emits('update:itemsSelected', value)
		}
	})

	const toggleSelectAll = (isChecked) => {
		selectItemsComputed.value = isChecked ? totalItems.value : []
	}

	const toggleSelectItem = (item) => {
		const isAlreadyChecked = item.checkbox
		delete item.checkbox
		delete item.index

		if(!isAlreadyChecked) {
			const selectItemsArr = selectItemsComputed.value
			selectItemsArr.unshift(item)
			selectItemsComputed.value = selectItemsArr
		} else {
			selectItemsComputed.value = selectItemsComputed.value.filter((selectedItem) =>
				JSON.stringify(selectedItem) !== JSON.stringify(item)
			)
		}
	}

	return {
		totalItems,
		selectItemsComputed,
		totalItemsLength,
		toggleSelectAll,
		toggleSelectItem
	}
}
