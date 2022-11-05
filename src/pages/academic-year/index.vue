<template>
    <v-container>
      <template v-slot:title>Daftar Tahun Ajaran</template>
      <template v-slot:content>
        <div class="flex items-center my-2">
          <div class="relative">
              <label for="search_school" class="hidden">Search School</label>
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Icon name="search" class="h-3.5 w-4 stroke-primary"></Icon>
              </div>
              <input v-model="params.keyword" class="w-['229px'] h-10 py-3 pl-9 pr-2 mr-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Cari Tahun Ajaran" type="search">
          </div>
          <v-button variant="primary" size="sm">Cari</v-button>
        </div>
  
        <div class="sm:flex sm:items-center justify-between px-1">
          <per-page v-model="params.limit" class="my-3" />
          <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <v-button variant="primary">Tambah Tahun Ajaran</v-button>
          </div>
        </div>      
  
        <div class="mt-2 flex flex-col">
			<div class="inline-block min-w-full py-2 align-middle md:px-1 lg:px-1">
				<div class="overflow-hidden ring-opacity-5 md:rounded-sm">
					<data-table
						:is-loading="table.isLoading"
						:columns="table.columns"
						:rows="table.rows"
						:total="table.totalRecordCount"
						:sortable="table.sortable"
						:messages="table.messages"
						@do-search="doSearch"
						@is-finished="table.isLoading = false"
					></data-table>				
				</div>
			</div>
        </div>
  
        <div class="flex items-center justify-end bg-white py-3 px-1">
          <div class="flex">
            <page-info class="mr-2" :current-page="params.page" :total-records="meta.total" :current-per-page="params.limit" />      
            <pagination v-model="params.page" :current-per-page="params.limit" :total-records="meta.total" />
          </div>
        </div>      
      </template>
    </v-container>
</template>
  
<script setup>
import { defineComponent, reactive, onMounted, watch } from 'vue'
import Icon from '@/components/Icon.vue'
import DataTable from '@/components/table/datatable.vue'
import VButton from '@/components/ui/button/index.vue'
import PageInfo from '@/components/pagination/page-info.vue'
import PerPage from '@/components/pagination/per-page.vue'
import Pagination from '@/components/pagination/pagination.vue'
  
defineComponent({
    name: 'academic-year-list',
    components: {
        PageInfo,
        PerPage,
        Pagination,
        Icon,
        VButton,
        DataTable
    }
})

let params = reactive({
    limit: 5,
    page: 1,
    keyword: '',
    sortBy: '',
    sortOrder: 'asc'
})
  
// const headers = ref([
//     {
//         title: 'No',
//         key: 'no'
//     },
//     {
//         title: 'Nama Tahun Ajaran',
//         key: 'name'
//     },
//     {
//         title: 'Status',
//         key: 'status'
//     },
//     {
//         title: 'Aksi',
//         key: 'actions'
//     }
// ])
  
// const items = []

const meta = []
  
onMounted(() => {
    // store.dispatch('school/getSchools', params)
	doSearch(0, 5, 'id', 'asc');
})
  
watch(params, () => {
    // store.dispatch('school/getSchools', params)
},{ immediate: true, deep: true })

// Fake Data for 'asc' sortable
const sampleData1 = (offst, limit) => {
	offst = offst + 1;
	let data = [];
	for (let i = offst; i <= limit; i++) {
		data.push({
			id: i,
			name: "TEST" + i,
			email: "test" + i + "@example.com",
		});
	}
	return data;
};

// Fake Data for 'desc' sortable
const sampleData2 = (offst, limit) => {
	let data = [];
	for (let i = limit; i > offst; i--) {
		data.push({
			id: i,
			name: "TEST" + i,
			email: "test" + i + "@example.com",
		});
	}
	return data;
};

const table = reactive({
	isLoading: false,
		columns: [
		{
			label: "ID",
			field: "id",
			width: "3%",
			sortable: true,
			isKey: true,
		},
		{
			label: "Name",
			field: "name",
			width: "10%",
			sortable: true,
		},
		{
			label: "Email",
			field: "email",
			width: "15%",
			sortable: true,
		},
	],
	rows: [],
	totalRecordCount: 0,
	sortable: {
		order: "id",
		sort: "asc",
	},
});

/**
 * Search Event
 */
const doSearch = (offset, limit, order, sort) => {
	table.isLoading = true;
	setTimeout(() => {
		table.isReSearch = offset == undefined ? true : false;
		if (offset >= 5 || limit >= 5) {
			limit = 5;
		}
		if (sort == "asc") {
			table.rows = sampleData1(offset, limit);
		} else {
			table.rows = sampleData2(offset, limit);
		}
		table.totalRecordCount = 20;
		table.sortable.order = order;
		table.sortable.sort = sort;
	}, 600);
};

</script>