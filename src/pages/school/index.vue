<template>
	<v-container>
		<template v-slot:title>Daftar Sekolah</template>
		<template v-slot:content>
			<div>
				<div class="flex items-center my-2">
					<!-- search -->
					<VSearchFilter
						v-model="searchValue"
					/>
					<!-- search -->
				</div>
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
					body-text-direction="left"
					header-text-direction="left"
					click-event-type="double"
					v-model:items-selected="itemsSelected"
				>
					<template #expand="item">
						<div style="padding: 15px">
							{{ item.name }} won championships
						</div>
					</template>

					<template #header-name="header">
						<div class="filter-column">
							<span
								class="filter-icon"
								@click.stop="showNameFilter=!showNameFilter"
							>
								icon
							</span>
							{{ header.text }}
							<div
								v-if="showNameFilter"
								class="filter-menu filter-age-menu"
							>
								<input v-model="nameCriteria">
							</div>
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
						<div class="operation-wrapper">
							<Icon
								name="pencil"
								class="operation-icon"
								@click="editItem(item)"
							/>
							<Icon
								name="trash"
								class="operation-icon"
								@click="deleteItem(item)"
							/>
						</div>
					</template>
				</VDatatable>
			</div>
		</template>
	</v-container>
</template>

<script setup>
import { defineComponent, computed, ref, onMounted } from 'vue'
import VDatatable from '@/components/datatable/index.vue'
import { mockClientItems, headersMocked } from '@/mock';
import VSearchFilter from '@/components/datatable/search-filter/index.vue'
import useDebounce from '@/hooks/useDebounce';
import Icon from '@/components/Icon.vue'

defineComponent({
	name: 'school-list',
	components: {
		VDatatable
	}
})

const searchValue = useDebounce('', 400)
const sortBy = ref(['indicator.weigth', 'number'])
const sortType = ref(['desc', 'asc'])

const itemsSelected = ref([])

const filterOptions = [
	{
		field: 'indicator.height',
		comparison: (value, criteria) => value === criteria,
		criteria: '6-9'
	}
]

const headers = [
	{ text: "NAME", value: "name", searchable: true },
	{ text: "ADDRESS", value: "address"},
	{ text: "HEIGHT", value: "height", sortable: true},
	{ text: "WEIGHT", value: "weight", sortable: true},
	{ text: "AGE", value: "age", sortable: true},
	{ text: "SPORT", value: "favouriteSport"},
	{ text: "FRUITS", value: "favouriteFruits"},
	{ text: "OPERATION", value: 'operation' }
]

const updateFilter = (items) => {
	console.log(JSON.stringify(items))
}

const items = ref([]);

const showItem = (item) => {
	alert(JSON.stringify(item))
}

const deleteItem = (item) => {
	alert('delete item')
}

const editItem = (item) => {
	alert('edit item')
}

const updateSort = (sortOption) => {
	console.log(sortOption)
}

const ageCriteria = ref([1, 15])

const favoriteSpotCriteria = ref('all')

const showNameFilter = ref(false)
const nameCriteria = ref('')

const bodyRowClassNameFunction = (item, index) => (index === 0 ? 'first-row test-row' : '')
const bodyExpandRowClassNameFunction = (item, index) => 'expand-row'

const headerItemClassNameFunction = (header, index) => (header.value === 'name' ? 'name-header' : '');
const bodyItemClassNameFunction = (column, index) => (column === 'name' ? 'name-item' : '');

const dataTable = ref()

const currentPageFirstIndex = computed(() => dataTable.value?.currentPageFirstIndex)
const currentPageLastIndex = computed(() => dataTable.value?.currentPageLastIndex)

const totalItemsLength = computed(() => dataTable.value?.totalItemsLength)

const maxPaginationNumber = computed(() => dataTable.value?.maxPaginationNumber)
const currentPaginationNumber = computed(() => dataTable.value?.currentPaginationNumber)

const isFirstPage = computed(() => dataTable.value?.isFirstPage)
const isLastPage = computed(() => dataTable.value?.isLastPage)

const nextPage = () => {
	dataTable.value.nextPage()
}

const prevPage = () => {
	dataTable.value.prevPage()
}

const updatePage = (paginationNumber) => {
	dataTable.value.updatePage(paginationNumber);
};

const isDataHeader = (header) => {
	return !(header.value === 'checkbox' || header.value === 'index' || header.value === 'expand')
}
// rows per page
const rowsPerPageOptions = computed(() => dataTable.value?.rowsPerPageOptions);
const rowsPerPageActiveOption = computed(() => dataTable.value?.rowsPerPageActiveOption);

const updateRowsPerPageSelect = (e) => {
	dataTable.value.updateRowsPerPageActiveOption(Number((e.target).value));
};

onMounted(() => {
	items.value = mockClientItems(10)
})
</script>

<style scoped>
.operation-wrapper .operation-icon {
	width: 20px;
	cursor: pointer;
}
</style>
