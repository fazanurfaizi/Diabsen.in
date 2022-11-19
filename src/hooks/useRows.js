import { computed, ref } from "vue";

/**
 * use rows hook
 * @param {import("vue").Ref<boolean>} isServerSideMode
 * @param {import("vue").Ref<number[]>} rowsItems
 * @param {import("vue").Ref} serverOptions
 * @param {import("vue").Ref<number>} rowsPerPage
 */
export default function useRows(
	isServerSideMode,
	rowsItems,
	serverOptions,
	rowsPerPage
) {
	const rowsItemsComputed = computed(() => {
		if(!isServerSideMode.value && rowsItems.value.findIndex((item) => item === rowsPerPage.value) === -1) {
			return [rowsPerPage.value, ...rowsItems.value]
		}
		return rowsItems.value
	})

	const rowsPerPageRef = ref(serverOptions.value ? serverOptions.value.rowsPerPage : rowsPerPage.value)

	const updateRowsPerPage = (option) => {
		rowsPerPageRef.value = option
	}

	return {
		rowsItemsComputed,
		rowsPerPageRef,
		updateRowsPerPage
	}
}
