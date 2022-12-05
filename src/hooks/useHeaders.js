import { computed, ref } from 'vue'
import { SORT_TYPES } from '@/core/utils'

/**
 * use headers hook
 * @param {import("vue").Ref} checkboxColumnWidth
 * @param {import("vue").Ref} expandColumnWidth
 * @param {import("vue").Ref} fixedCheckbox
 * @param {import("vue").Ref} fixedExpand
 * @param {import("vue").Ref} fixedIndex
 * @param {import("vue").Ref} headers
 * @param {import("vue").ComputedRef} ifHasExpandSlot
 * @param {import("vue").Ref} indexColumnWidth
 * @param {import("vue").ComputedRef} isMultipleSelectable
 * @param {import("vue").ComputedRef} isServerSideMode
 * @param {import("vue").Ref} mustSort
 * @param {import("vue").WritableComputedRef} serverOptionsComputed
 * @param {import("vue").Ref} showIndex
 * @param {import("vue").Ref} sortBy
 * @param {import("vue").Ref} sortType
 * @param {import("vue").Ref} multiSort
 * @param {import("vue").void} updateServerOptionsSort
 * @param {import("vue").void} emits
 */
export default function useHeaders(
	checkboxColumnWidth,
	expandColumnWidth,
	fixedCheckbox,
	fixedExpand,
	fixedIndex,
	headers,
	ifHasExpandSlot,
	indexColumnWidth,
	isMultipleSelectable,
	isServerSideMode,
	mustSort,
	serverOptionsComputed,
	showIndex,
	sortBy,
	sortType,
	updateServerOptionsSort,
	emits
) {
	const hasFixedColumnsFromUser = computed(
		() => headers.value.findIndex((header) => header.fixed) !== -1
	)
	const fixedHeadersFromUser = computed(() => {
		if (hasFixedColumnsFromUser.value)
			return headers.value.filter((header) => header.fixed)

		return []
	})
	const unFixedHeaders = computed(() =>
		headers.value.filter((header) => !header.fixed)
	)

	const generateClientSortOptions = (sortByValue, sortTypeValue) => {
		// multi sort
		if (Array.isArray(sortByValue) && Array.isArray(sortTypeValue)) {
			return {
				sortBy: sortByValue,
				sortDesc: sortTypeValue.map(
					(val) => val === SORT_TYPES['Descending']
				),
			}
		}

		// single sort
		if (sortByValue !== '') {
			return {
				sortBy: sortBy.value,
				sortDesc: sortType.value === SORT_TYPES['Descending'],
			}
		}

		return null
	}

	const clientSortOptions = ref(
		generateClientSortOptions(sortBy.value, sortType.value)
	)

	const headersForRender = computed(() => {
		// fixed order
		const fixedHeaders = [
			...fixedHeadersFromUser.value,
			...unFixedHeaders.value,
		]

		// sorting
		const headersSorting = fixedHeaders.map((header) => {
			const headerSorting = Object.assign(header)

			if (headerSorting.sortable)
				headerSorting.sortType = SORT_TYPES['None']

			// server mode
			if (serverOptionsComputed.value) {
				if (
					Array.isArray(serverOptionsComputed.value.sortBy) &&
					Array.isArray(serverOptionsComputed.value.sortType) &&
					serverOptionsComputed.value.sortBy.includes(
						headerSorting.value
					)
				) {
					// multi sort
					const index = serverOptionsComputed.value.sortBy.indexOf(
						headerSorting.value
					)
					headerSorting.sortType =
						serverOptionsComputed.value.sortType[index]
				} else if (
					headerSorting.value ===
						serverOptionsComputed.value.sortBy &&
					serverOptionsComputed.value.sortType
				) {
					// single sort
					headerSorting.sortType =
						serverOptionsComputed.value.sortType
				}
			}

			// client mode
			if (
				clientSortOptions.value &&
				Array.isArray(clientSortOptions.value.sortBy) &&
				Array.isArray(clientSortOptions.value.sortDesc)
			) {
				// multi sort
				const index = clientSortOptions.value.sortBy.indexOf(
					headerSorting.value
				)
				headerSorting.sortType = clientSortOptions.value.sortDesc[index]
					? SORT_TYPES['Descending']
					: SORT_TYPES['Ascending']
			} else if (
				clientSortOptions.value &&
				headerSorting.value === clientSortOptions.value.sortBy
			) {
				// single sort
				headerSorting.sortType = clientSortOptions.value.sortDesc
					? SORT_TYPES['Descending']
					: SORT_TYPES['Ascending']
			}

			return headerSorting
		})

		// expand icon
		let headersWithExpand = []
		if (!ifHasExpandSlot.value) {
			headersWithExpand = headersSorting
		} else {
			const headerExpand =
				fixedExpand.value || hasFixedColumnsFromUser.value
					? {
							text: '',
							value: 'expand',
							fixed: true,
							width: expandColumnWidth.value,
					  }
					: {
							text: '',
							value: 'expand',
					  }

			headersWithExpand = [headerExpand, ...headersSorting]
		}

		// show index
		let headersWithIndex = []
		if (!showIndex.value) {
			headersWithIndex = headersWithExpand
		} else {
			const headerIndex =
				fixedIndex.value || hasFixedColumnsFromUser.value
					? {
							text: '#',
							value: 'index',
							fixed: true,
							width: indexColumnWidth.value,
					  }
					: {
							text: '#',
							value: 'index',
					  }
			headersWithIndex = [headerIndex, ...headersWithExpand]
		}

		// checkbox
		let headersWithCheckbox = []
		if (!isMultipleSelectable.value) {
			headersWithCheckbox = headersWithIndex
		} else {
			const headerCheckbox =
				fixedCheckbox.value || hasFixedColumnsFromUser.value
					? {
							text: 'checkbox',
							value: 'checkbox',
							fixed: true,
							width: checkboxColumnWidth.value ?? 36,
					  }
					: {
							text: 'checkbox',
							value: 'checkbox',
					  }

			headersWithCheckbox = [headerCheckbox, ...headersWithIndex]
		}
		return headersWithCheckbox
	})

	const headersColumns = computed(() =>
		headersForRender.value.map((header) => header.value)
	)

	const updateSortField = (newSortBy, oldSortType) => {
		let newSortType = null
		if (oldSortType === SORT_TYPES['None']) {
			newSortType = SORT_TYPES['Ascending']
		} else if (oldSortType === SORT_TYPES['Ascending']) {
			newSortType = SORT_TYPES['Descending']
		} else {
			newSortType = mustSort.value ? SORT_TYPES['Ascending'] : null
		}

		if (isServerSideMode.value) {
			updateServerOptionsSort(newSortBy, newSortType)
		}

		// multi sort
		if (
			clientSortOptions.value &&
			Array.isArray(clientSortOptions.value.sortBy) &&
			Array.isArray(clientSortOptions.value.sortBy.indexOf(newSortBy))
		) {
			const index = clientSortOptions.value.sortBy.index(newSortBy)
			if (index === -1) {
				if (newSortType !== null) {
					clientSortOptions.value.sortBy.push(newSortBy)
					clientSortOptions.value.sortDesc.push(
						newSortType === SORT_TYPES['Descending']
					)
				}
			} else if (newSortType === null) {
				clientSortOptions.value.sortDesc.splice(index, 1)
				clientSortOptions.value.sortBy.splice(index, 1)
			} else {
				clientSortOptions.value.sortDesc[index] =
					newSortType === SORT_TYPES['Descending']
			}
		} else if (newSortType === null) {
			clientSortOptions.value = null
		} else {
			clientSortOptions.value = {
				sortBy: newSortBy,
				sortDesc: newSortType === SORT_TYPES['Descending'],
			}
		}

		emits('updateSort', {
			sortType: newSortType,
			sortBy: newSortBy,
		})
	}

	const isMultiSorting = (headerText) => {
		if (serverOptionsComputed.value) {
			if (Array.isArray(serverOptionsComputed.value.sortBy))
				return serverOptionsComputed.value.sortBy.includes(headerText)
		}
		if (
			clientSortOptions.value &&
			Array.isArray(clientSortOptions.value.sortBy)
		) {
			return clientSortOptions.value.sortBy.includes(headerText)
		}

		return false
	}

	const getMultiSortNumber = (headerText) => {
		if (serverOptionsComputed.value) {
			if (Array.isArray(serverOptionsComputed.value.sortBy))
				return (
					serverOptionsComputed.value.sortBy.indexOf(headerText) + 1
				)
		}
		if (
			clientSortOptions.value &&
			Array.isArray(clientSortOptions.value.sortBy)
		) {
			return clientSortOptions.value.sortBy.indexOf(headerText) + 1
		}

		return false
	}

	return {
		clientSortOptions,
		headersColumns,
		headersForRender,
		updateSortField,
		isMultiSorting,
		getMultiSortNumber,
	}
}
