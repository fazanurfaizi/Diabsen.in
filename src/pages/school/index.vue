<template>
  <v-container>
    <template v-slot:title>Daftar Sekolah</template>
    <template v-slot:content>
      <div class="flex items-center my-2">
        <div class="relative">
            <label for="search_school" class="hidden">Search School</label>
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Icon name="search" class="h-3.5 w-4 stroke-primary"></Icon>
            </div>
            <input v-model="params.keyword" class="w-['229px'] h-10 py-3 pl-9 pr-2 mr-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Cari sekolah" type="search">
        </div>
        <v-button variant="primary" size="sm">Cari</v-button>
      </div>

      <div class="sm:flex sm:items-center justify-between px-1">
        <per-page v-model="params.limit" class="my-3" />
        <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <v-button variant="primary">Tambah Sekolah</v-button>
        </div>
      </div>      

      <div class="mt-2 flex flex-col">
        <div class="">
          <div class="inline-block min-w-full py-2 align-middle md:px-1 lg:px-1">
            <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-sm">
              <table class="min-w-full divide-y divide-gray-300">
                <thead class="bg-gray-50">
                  <tr>
                    <template v-for="(header, index) in headers" :key="index">
                      <th scope="col" class="px-4 py-3.5 text-center text-sm font-semibold text-gray-900"> 
                        <div class="space-x-2 items-center bg-center">
                          <span>
                            {{ header.title }}
                          </span>
                        </div>
                      </th>
                    </template>
                  </tr>
                </thead>

                <tbody class="divide-y divide-gray-200 bg-white" v-if="items.length > 0">                
                  <template v-for="(item, index) in items" :key="index">
                    <tr>
                      <template v-for="(elm, i) in headers" :key="i">
                        <td class="px-4 py-3.5 text-center text-sm font-semibold text-gray-900" v-if="elm.key === 'city' || elm.key === 'province'">
                          {{item[elm.key]['name']}}
                        </td>
                        <td class="px-4 py-3.5 text-center text-sm font-semibold text-gray-900" v-else-if="elm.key === 'postal_code'">
                          {{item[elm.key]['code']}}
                        </td>
                        <td class="px-4 py-3.5 text-center text-sm font-semibold text-gray-900" v-else-if="elm.key !== 'actions'">
                          {{item[elm.key]}}
                        </td>
                        <td class="py-3.5 text-center text-sm font-medium text-gray-900" v-else>
                          <v-button class="mx-1" size="xs" variant="info" @click="handleDetail(item.id)">Detail</v-button>
                          <v-button class="mx-1" size="xs">Edit</v-button>
                          <v-button class="mx-1" size="xs" variant="danger">Delete</v-button>
                        </td>
                      </template>
                    </tr>
                  </template>
                </tbody>
                <tbody class="divide-y divide-gray-200 bg-white" v-else>
                  <tr>
                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 text-center" :colspan="headers.length-1">
                      No Data
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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
import { defineComponent, ref, reactive, computed, onMounted, watch } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
// import TheTable from '@/components/TheTable.vue';
// import TheButton from '@/components/TheButton.vue';
// import TheModal from '@/components/TheModal.vue';
import Icon from '@/components/Icon.vue'
import VButton from '@/components/ui/button/index.vue'
import PageInfo from '@/components/pagination/page-info.vue';
import PerPage from '@/components/pagination/per-page.vue'
import Pagination from '@/components/pagination/pagination.vue';

defineComponent({
  name: 'school-list',
  components: {
    PageInfo,
    PerPage,
    Pagination,
    Icon,
    VButton
  }
})

const store = useStore()

const router = useRouter()

let params = reactive({
  limit: 10,
  page: 1,
  keyword: '',
  sortBy: '',
  sortOrder: 'asc'
})

const headers = ref([
  {
    title: 'NPSN',
    key: 'npsn'
  },
  {
    title: 'Nama Sekolah',
    key: 'name'
  },
  {
    title: 'Kab/Kota',
    key: 'city'
  },
  {
    title: 'Provinsi',
    key: 'province'
  },
  {
    title: 'Kode Pos',
    key: 'postal_code'
  },
  {
    title: 'Aksi',
    key: 'actions'
  }
])

const items = computed(() => store.getters['school/getSchools'])

const meta = computed(() => store.getters['school/getPagination'])

const handleDetail = (id) => {
  router.push({ name: 'school-detail', params: { id } })
}

onMounted(() => {
  store.dispatch('school/getSchools', params)
})

watch(params, () => {
  store.dispatch('school/getSchools', params)
},{ immediate: true, deep: true })

</script>