<template>
	<v-container>
		<template v-slot:title>
			<div class="flex justify-between mx-3">
				<span>Daftar Guru</span>
				<VButton size="sm">Tambah Guru</VButton>
			</div>
		</template>
		<template v-slot:content>
			<div>
				<VDatatable
					click-row-to-expand
					ref="dataTable"
					alternating
					border-cell
					no-hover
					show-index
					:headers="headers"
					:items="items"
					:search-value="searchValue"
					:rows-per-page="10"
					pagination-buttons
					:sort-by="sortBy"
					:sort-type="sortType"
					table-class-name="hc-table"
					header-class-name="hc-header"
					:body-row-class-name="bodyRowClassNameFunction"
					:header-item-class-name="headerItemClassNameFunction"
					:body-item-class-name="bodyItemClassNameFunction"
					:body-expand-row-class-name="bodyExpandRowClassNameFunction"
					@update-sort="updateSort"
					@update-filter="updateFilter"
					multi-sort
					header-text-direction="center"
					body-text-direction="center"
					click-event-type="double"
					v-model:items-selected="itemsSelected"
				>
					<template #search>
						<div class="flex items-center my-2">
							<!-- search -->
							<VSearchFilter
								v-model="searchValue"
								search-button-text="Cari"
								has-submit-button
							/>
							<!-- search -->
						</div>
					</template>

					<template #expand="item">
						<div style="padding: 15px">
							{{ item.name }} won championships
						</div>
					</template>

					<template #item-lastAttended="item">
						<div style="padding: 15px">
							{{ item.lastAttended }} camelCase
						</div>
					</template>

					<template #item-player="item">
						<div style="padding: 15px">
							{{ item.player }} player
						</div>
					</template>

					<template v-slot:[`body.append`]>
						<span>body.append</span>
					</template>

					<template #item-operation="item">
						<div class="flex text-center justify-evenly">
							<VButton variant="primary" size="xs"
								>Detail</VButton
							>
							<VButton
								variant="warning"
								size="xs"
								@click="editItem(item)"
								>Edit</VButton
							>
							<VButton
								variant="danger"
								size="xs"
								@click="deleteItem(item)"
								>Hapus</VButton
							>
						</div>
					</template>
				</VDatatable>
			</div>
		</template>
	</v-container>
</template>

<script>
	export default {
		name: 'teachers-index',
	}
</script>

<script setup>
	import { computed, ref, onMounted } from 'vue'
	import VDatatable from '@/components/datatable/index.vue'
	import { mockClientItems } from '@/mock'
	import VSearchFilter from '@/components/ui/search-filter/index.vue'
	import useDebounce from '@/hooks/useDebounce'
	import VButton from '@/components/ui/button/index.vue'
	import SvgIcon from '@/components/ui/svg-icon/index.vue'

	const searchValue = useDebounce('', 400)
	const sortBy = ref(['indicator.weigth', 'number'])
	const sortType = ref(['desc', 'asc'])

	const itemsSelected = ref([])

	const filterOptions = [
		{
			field: 'indicator.height',
			comparison: (value, criteria) => value === criteria,
			criteria: '6-9',
		},
	]

	const headers = [
		{ text: 'NAME', value: 'name', searchable: true },
		{ text: 'ADDRESS', value: 'address' },
		{ text: 'HEIGHT', value: 'height', sortable: true },
		{ text: 'WEIGHT', value: 'weight', sortable: true },
		{ text: 'AGE', value: 'age', sortable: true },
		{ text: 'SPORT', value: 'favouriteSport' },
		{ text: 'FRUITS', value: 'favouriteFruits' },
		{ text: 'OPERATION', value: 'operation' },
	]

	const updateFilter = (items) => {
		console.log(JSON.stringify(items))
	}

	const items = ref([])

	const deleteItem = (item) => {
		alert('delete item')
	}

	const editItem = (item) => {
		alert('edit item')
	}

	const updateSort = (sortOption) => {
		console.log(sortOption)
	}

	const bodyRowClassNameFunction = (item, index) =>
		index === 0 ? 'first-row test-row' : ''
	const bodyExpandRowClassNameFunction = (item, index) => 'expand-row'

	const headerItemClassNameFunction = (header, index) =>
		header.value === 'name' ? 'name-header' : ''
	const bodyItemClassNameFunction = (column, index) =>
		column === 'name' ? 'name-item' : ''

	const dataTable = ref()

	const currentPageFirstIndex = computed(
		() => dataTable.value?.currentPageFirstIndex
	)
	const currentPageLastIndex = computed(
		() => dataTable.value?.currentPageLastIndex
	)

	const totalItemsLength = computed(() => dataTable.value?.totalItemsLength)

	const maxPaginationNumber = computed(
		() => dataTable.value?.maxPaginationNumber
	)
	const currentPaginationNumber = computed(
		() => dataTable.value?.currentPaginationNumber
	)

	const isFirstPage = computed(() => dataTable.value?.isFirstPage)
	const isLastPage = computed(() => dataTable.value?.isLastPage)

	const nextPage = () => {
		dataTable.value.nextPage()
	}

	const prevPage = () => {
		dataTable.value.prevPage()
	}

	const updatePage = (paginationNumber) => {
		dataTable.value.updatePage(paginationNumber)
	}

	const isDataHeader = (header) => {
		return !(
			header.value === 'checkbox' ||
			header.value === 'index' ||
			header.value === 'expand'
		)
	}
	// rows per page
	const rowsPerPageOptions = computed(
		() => dataTable.value?.rowsPerPageOptions
	)
	const rowsPerPageActiveOption = computed(
		() => dataTable.value?.rowsPerPageActiveOption
	)

	const updateRowsPerPageSelect = (e) => {
		dataTable.value.updateRowsPerPageActiveOption(Number(e.target.value))
	}

	onMounted(() => {
		items.value = mockClientItems(100)
	})
</script>
