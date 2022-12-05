import { computed, ref } from 'vue'

/**
 * use pagination hook
 * @param {import("vue").Ref<number>} currentPage
 * @param {import("vue").ComputedRef<boolean} isServerSideMode
 * @param {import("vue").Ref<boolean>} loading
 * @param {import("vue").Ref<number>} totalItemsLength
 * @param {import("vue").Ref<number>} rowsPerPage
 * @param {import("vue").Ref} serverOptions
 * @param {void} updateServerOptionPage
 */
export default function usePagination(
	currentPage,
	isServerSideMode,
	loading,
	totalItemsLength,
	rowsPerPage,
	serverOptions,
	updateServerOptionPage
) {
	const currentPaginationNumber = ref(
		serverOptions.value ? serverOptions.value.page : currentPage.value
	)
	const maxPaginationNumber = computed(() =>
		Math.ceil(totalItemsLength.value / rowsPerPage.value)
	)

	const isLastPage = computed(
		() =>
			maxPaginationNumber.value === 0 ||
			currentPaginationNumber.value === maxPaginationNumber.value
	)
	const isFirstPage = computed(() => currentPaginationNumber.value === 1)

	const nextPage = () => {
		if (totalItemsLength.value === 0) return
		if (isLastPage.value) return
		if (loading.value) return
		if (isServerSideMode.value) {
			const nextPaginationNumber = currentPaginationNumber.value + 1
			updateServerOptionPage(nextPaginationNumber)
		} else {
			currentPaginationNumber.value += 1
		}
	}

	const prevPage = () => {
		if (totalItemsLength.value === 0) return
		if (isFirstPage.value) return
		if (loading.value) return
		if (isServerSideMode.value) {
			const prevPaginationNumber = currentPaginationNumber.value - 1
			updateServerOptionPage(prevPaginationNumber)
		} else {
			currentPaginationNumber.value -= 1
		}
	}

	const firstPage = () => {
		if (totalItemsLength.value === 0) return
		if (isFirstPage.value) return
		if (loading.value) return
		if (isServerSideMode.value) {
			updateServerOptionPage(1)
		} else {
			currentPaginationNumber.value = 1
		}
	}

	const lastPage = () => {
		if (totalItemsLength.value === 0) return
		if (isLastPage.value) return
		if (loading.value) return
		if (isServerSideMode.value) {
			updateServerOptionPage(maxPaginationNumber.value)
		} else {
			currentPaginationNumber.value = maxPaginationNumber.value
		}
	}

	const updatePage = (page) => {
		if (loading.value) return
		if (isServerSideMode.value) {
			updateServerOptionPage(page)
		} else {
			currentPaginationNumber.value = page
		}
	}

	const updateCurrentPaginationNumber = (page) => {
		currentPaginationNumber.value = page
	}

	return {
		currentPaginationNumber,
		maxPaginationNumber,
		isFirstPage,
		isLastPage,
		nextPage,
		prevPage,
		firstPage,
		lastPage,
		updatePage,
		updateCurrentPaginationNumber,
	}
}
