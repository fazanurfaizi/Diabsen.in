<template>
	<div class="sm:flex sm:items-center justify-between px-1">
		<div class="flex justify-center items-center space-x-2">
			<span>{{rowsPerPageMessage}}</span>
			<VRowsSelector
				v-model="rowsPerPageRef"
				:rows-items="rowsItemsComputed"
			/>
			<span>{{rowsPerPageEndMessage}}</span>
		</div>
		<!-- Action button -->
		<div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none"></div>
		<!-- Action button -->
	</div>
	<div class="mt-2 flex flex-col">
		<div
			ref="dataTable"
			class="inline-block min-w-full py-2 align-middle md:px-1 lg:px-1"
			:class="[tableClassName]"
		>
			<div
				ref="tableBody"
				class="overflow-hidden ring-opacity-5 md:rounded-sm border"
				:class="{
					'fixed-header': fixedHeader,
					'fixed-height': tableHeight,
					'show-shadow': showShadow,
					'table-fixed': fixedHeaders.length,
					'hoverable': !noHover,
					'border-cell': borderCell,
				}"
			>
				<table class="min-w-full divide-y divide-gray-300">
					<colgroup>
						<col
							v-for="(header, index) in headersForRender"
							:key="index"
							:style="getColStype(header)"
						/>
					</colgroup>
					<thead
						v-if="headersForRender.length && !hideHeader"
						class="bg-gray-50"
						:class="[headerClassName]"
					>
						<tr>
							<th
								v-for="(header, index) in headersForRender"
								:key="index"
								class="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
								:class="[{
									sortable: header.sortable,
									'none': header.sortable && header.sortType === 'none',
									'desc': header.sortable && header.sortType === 'desc',
									'asc': header.sortable && header.sortType === 'asc',
									'shadow': header.value === lastFixedColumn,
								}, typeof headerItemClassName === 'string' ? headerItemClassName : headerItemClassName(header, index)]"
								:style="getFixedDistance(header.value)"
								@click.stop="(header.sortable && header.sortType) ? updateSortField(header.value, header.sortType) : null"
							>
								<VMultiCheckbox
									v-if="header.text === 'checkbox'"
									:key="multipleSelectStatus"
									:status="multipleSelectStatus"
									@change="toggleSelectAll"
								/>
								<span
									v-else
									class="flex space-x-2 items-center bg-center"
									:class="`direction-${headerTextDirection}`"
								>
									<slot
										v-if="slots[`header-${header.value}`]"
										:name="`header-${header.value}`"
										v-bind="header"
									/>
									<slot
										v-else-if="slots[`header-${header.value.toLowerCase()}`]"
										:name="`header-${header.value.toLowerCase()}`"
										v-bind:about="header"
									/>
									<span
										v-else
										class="header-text"
									>
										{{ header.text }}
									</span>
									<i
										v-if="header.sortable"
										:key="header.sortType ? header.sortType : 'none'"
										class="sortType-icon"
										:class="{
											'desc': header.sortType === 'desc'
										}"
									></i>
									<span
										v-if="multiSort && isMultiSorting(header.value)"
										class="multi-sort__number"
									>
										{{ getMultiSortNumber(header.value) }}
									</span>
								</span>
							</th>
						</tr>
					</thead>
					<slot
						v-if="ifHasBodySlot"
						name="body"
						v-bind="pageItems"
					></slot>
					<tbody
						v-else-if="headersColumns.length"
						class="divide-y divide-gray-200 bg-white"
						:class="{
							'row-alternation': alternating
						}"
					>
						<slot
							name="body-prepend"
							v-bind="{
								items: pageItems,
								pagination: {
									isFirstPage,
									isLastPage,
									currentPaginationNumber,
									maxPaginationNumber,
									nextPage,
									prevPage
								},
								headers: headersForRender
							}"
						></slot>
						<template
							v-for="(item, index) in pageItems" :key="index"
						>
							<tr
								:class="[{
									'even-row': (index + 1) % 2 === 0
								}, typeof bodyRowClassName === 'string' ? bodyRowClassName : bodyRowClassName(item, index)]"
								@click="($event) => {
									clickRow(item, 'single');
									clickRowToExpand && updateExpandingItemIndexList(index + prevPageEndIndex, item, $event);
								}"
								@dblclick="clickRow(item, 'double')"
							>
								<td
									v-for="(column, i) in headersColumns" :key="i"
									:style="getFixedDistance(column, 'td')"
									class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900"
									:class="[{
										'shadow': column === lastFixedColumn,
										'can-expand': column === 'expand'
									}, typeof bodyItemClassName === 'string' ? bodyItemClassName : bodyItemClassName(column, i), `direction-${bodyTextDirection}`]"
									@click="column === 'expand' ? updateExpandingItemIndexList(index + prevPageEndIndex, item, $event) : null"
								>
									<slot
										v-if="slots[`item-${column}`]"
										:name="`item-${column}`"
										v-bind="item"
									/>
									<slot
										v-else-if="slots[`item-${column.toLowerCase()}`]"
										:name="`item-${column.toLowerCase()}`"
										v-bind="item"
									/>
									<template v-else-if="column === 'expand'">
										<i
											class="expand-icon"
											:class="{
												'expanding': expandingItemIndexList.includes(prevPageEndIndex + index)
											}"
										></i>
									</template>
									<template v-else-if="column === 'checkbox'">
										<VSingleCheckbox
											:checked="item[column]"
											@change="toggleSelectItem(item)"
										/>
									</template>
									<template v-else>
										{{ generateColumnContent(column, item) }}
									</template>
								</td>
							</tr>
							<tr
								v-if="ifHasExpandSlot && expandingItemIndexList.includes(index + prevPageEndIndex)"
								:class="[{
									'even-row': (index + 1) % 2 === 0
								}, typeof bodyExpandRowClassName === 'string' ? bodyExpandRowClassName : bodyExpandRowClassName(item, index)]"
							>
								<td
									:colspan="headersForRender.length"
									class="expand"
								>
									<VLoadingLine
										v-if="item.expandLoading"
										class="expand-loading"
									/>
									<slot
										name="expand"
										v-bind="item"
									></slot>
								</td>
							</tr>
						</template>
						<slot
							name="body-append"
							v-bind="{
								items: pageItems,
								pagination: {
									isFirstPage,
									isLastPage,
									currentPaginationNumber,
									maxPaginationNumber,
									nextPage,
									prevPage,
									updatePage
								},
								headers: headersForRender
							}"
						/>
					</tbody>
				</table>
				<div
					v-if="loading"
					class="data-table__loading"
				>
					<div class="data-table__loading-mask"></div>
					<div class="loading-entity">
						<slot
							v-if="ifHasLoadingSlot"
							name="loading"
						></slot>
						<VLoadingCircle v-else />
					</div>
				</div>

				<div
					v-if="!pageItems.length && !loading"
					class="divide-y divide-gray-200 bg-white py-4 flex justify-center"
				>
					<span
						class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 text-center"
					>
						{{ emptyMessage }}
					</span>
				</div>
			</div>

			<div class="flex items-center justify-between bg-white py-3 px-1">
				<div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
					<p class="text-sm text-gray-700">
						Showing
						{{ `${currentPageFirstIndex} to ${currentPageLastIndex}` }}
						{{ rowsOfPageSeparatorMessage }} {{ totalItemsLength }}
						results
					</p>

					<slot
						v-if="ifHasPaginationSlot"
						name="pagination"
						v-bind="{
							isFirstPage,
							isLastPage,
							currentPaginationNumber,
							maxPaginationNumber,
							nextPage,
							prevPage,
						}"
					></slot>
					<VPaginationArrows
						v-else
						:is-first-page="isFirstPage"
						:is-last-page="isLastPage"
						:current-pagination-number="currentPaginationNumber"
						:max-pagination-number="maxPaginationNumber"
						@click-next-page="nextPage"
						@click-prev-page="prevPage"
					>
						<template
							v-if="paginationButtons"
							v-slot:[`paginationButtons`]
						>
							<VPaginationButtons
								:current-pagination-number="currentPaginationNumber"
								:max-pagination-number="maxPaginationNumber"
								@update-page="updatePage"
							/>
						</template>
					</VPaginationArrows>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'v-datatable',
	inheritAttrs: false,
	customOptions: {}
}
</script>

<script setup>
import { defineProps, defineEmits, defineExpose, useSlots, computed, toRefs, ref, watch, onMounted, provide } from "vue";

// Components
import VMultiCheckbox from './multi-checkbox/index.vue'
import VPaginationArrows from './pagination-arrows/index.vue'
import VPaginationButtons from './pagination-buttons/index.vue'
import VSingleCheckbox from './single-checkbox/index.vue'
import VRowsSelector from './rows-selector/index.vue'
import VLoadingCircle from '@/components/ui/loading-circle/index.vue'
import VLoadingLine from '@/components/ui/loading-line/index.vue'

// hooks
import useClickRow from '@/hooks/useClickRow';
import useExpandableRow from '@/hooks/useExpandableRow';
import useFixedColumn from '@/hooks/useFixedColumn';
import useHeaders from '@/hooks/useHeaders';
import usePageItems from '@/hooks/usePageItems';
import usePagination from '@/hooks/usePagination';
import useRows from '@/hooks/useRows';
import useServerOptions from '@/hooks/useServerOptions';
import useTotalItems from '@/hooks/useTotalItems';

// utils
import { generateColumnContent } from '@/core/utils'
import datatableProps from './props'

const props = defineProps({
	...datatableProps
})

const {
	clickEventType,
	bodyTextDirection,
	checkboxColumnWidth,
	currentPage,
	expandColumnWidth,
	filterOptions,
	fixedCheckbox,
	fixedExpand,
	fixedHeader,
	fixedIndex,
	headers,
	headerTextDirection,
	indexColumnWidth,
	items,
	itemsSelected,
	loading,
	mustSort,
	multiSort,
	rowsItems,
	rowsPerPage,
	searchValue,
	serverItemsLength,
	serverOptions,
	showIndex,
	sortBy,
	sortType,
	tableHeight,
	// tableMinHeight,
	// rowsOfPageSeparatorMessage,
} = toRefs(props)

const emits = defineEmits([
	'clickRow',
	'expandRow',
	'updateSort',
	'updateFilter',
	'update:itemsSelected',
	'update:serverOptions'
])

const slots = useSlots()
const ifHasPaginationSlot = computed(() => !!slots.pagination)
const ifHasLoadingSlot = computed(() => !!slots.loading)
const ifHasExpandSlot = computed(() => !!slots.expand)
const ifHasBodySlot = computed(() => !!slots.body)

// const tableHeightPx = computed(() => (tableHeight.value ? `${tableHeight.value}px` : null))
// const tableMinHeightPx = computed(() => `${tableMinHeight.value}px`)

const dataTable = ref()
const tableBody = ref()
provide('dataTable', dataTable)

const showShadow = ref(false)
onMounted(() => {
	tableBody.value.addEventListener('scroll', () => {
		showShadow.value = tableBody.value.scrollLeft > 0
	})
})

const isMultipleSelectable = computed(() => itemsSelected.value !== null)
const isServerSideMode = computed(() => serverOptions.value !== null)

const {
	serverOptionsComputed,
	updateServerOptionsPage,
	updateServerOptionsSort,
	updateServerOptionsRowsPerPage,
} = useServerOptions(serverOptions, multiSort, emits)

const {
	clientSortOptions,
	headersColumns,
	headersForRender,
	updateSortField,
	isMultiSorting,
	getMultiSortNumber
} = useHeaders(
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
	multiSort,
	updateServerOptionsSort,
	emits,
)

const {
	rowsItemsComputed,
	rowsPerPageRef,
	updateRowsPerPage
} = useRows(
	isServerSideMode,
	rowsItems,
	serverOptions,
	rowsPerPage,
)

const {
	totalItems,
	selectItemsComputed,
	totalItemsLength,
	toggleSelectAll,
	toggleSelectItem
} = useTotalItems(
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
)

const {
	currentPaginationNumber,
	maxPaginationNumber,
	isLastPage,
	isFirstPage,
	nextPage,
	prevPage,
	updatePage,
	updateCurrentPaginationNumber,
} = usePagination(
	currentPage,
	isServerSideMode,
	loading,
	totalItemsLength,
	rowsPerPageRef,
	serverOptions,
	updateServerOptionsPage,
)

const {
	currentPageFirstIndex,
	currentPageLastIndex,
	multipleSelectStatus,
	pageItems,
} = usePageItems(
	currentPaginationNumber,
	isMultipleSelectable,
	isServerSideMode,
	items,
	rowsPerPageRef,
	selectItemsComputed,
	showIndex,
	totalItems,
	totalItemsLength,
)

const prevPageEndIndex = computed(() => {
	if(currentPaginationNumber.value === 0) return 0
	return (currentPaginationNumber.value - 1) * rowsPerPageRef.value
})

const {
	expandingItemIndexList,
	updateExpandingItemIndexList,
	clearExpandingItemIndexList
} = useExpandableRow(
	pageItems,
	prevPageEndIndex,
	emits
)

const {
	fixedHeaders,
	lastFixedColumn,
	fixedColumnsInfos
} = useFixedColumn(headersForRender)

const { clickRow } = useClickRow(
	clickEventType,
	isMultipleSelectable,
	showIndex,
	emits
)

const getColStype = (header) => {
	const width = header.width ?? (fixedHeaders.value.length ? 100 : null)
	if(width)
		return `width: ${width}px; mix-wdith: ${width}px`

	return undefined
}

const getFixedDistance = (column, type) => {
	if(!fixedHeaders.value.length) return undefined

	const columnInfo = fixedColumnsInfos.value.find((info) => info.value === column)
	if(columnInfo) {
		return `left: ${columnInfo.distance}px; z-index: ${type === 'th' ? 3 : 1}; position: sticky`
	}

	return undefined
}

watch(loading, (newValue, oldValue) => {
	if(serverOptionsComputed.value) {
		if(newValue === false && oldValue === true) {
			updateCurrentPaginationNumber(serverOptionsComputed.value.page)
			clearExpandingItemIndexList()
		}
	}
})

watch(rowsPerPageRef, (value) => {
	if(!isServerSideMode.value) {
		updatePage(1)
	} else {
		updateServerOptionsRowsPerPage(value)
	}
})

watch(searchValue, () => {
	if(!isServerSideMode.value) {
		updatePage(1)
	}
})

watch([currentPaginationNumber, clientSortOptions, searchValue, filterOptions], () => {
	clearExpandingItemIndexList()
}, { deep: true })

defineExpose({
	currentPageFirstIndex,
	currentPageLastIndex,
	clientItemsLength: totalItemsLength,
	maxPaginationNumber,
	currentPaginationNumber,
	isLastPage,
	isFirstPage,
	nextPage,
	prevPage,
	updatePage,
	rowsPerPageOptions: rowsItemsComputed,
	rowsPerPageActiveOption: rowsPerPageRef,
	updateRowsPerPageActiveOption: updateRowsPerPage,
})

</script>
