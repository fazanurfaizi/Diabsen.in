<template>
  <v-container>
    <template v-slot:title>Daftar Sekolah</template>
    <template v-slot:content>
      <per-page v-model="perPage" />
      <page-info :current-page="currentPage" :total-records="100" :current-per-page="perPage" />
      <pagination v-model="currentPage" :current-per-page="perPage" :total-records="100" />
    </template>
  </v-container>
</template>

<script setup>
import { defineComponent, ref } from 'vue'
// import TheTable from '@/components/TheTable.vue';
// import Button from '@/components/TheButton.vue';
// import TheModal from '@/components/TheModal.vue';
import PageInfo from '@/components/pagination/page-info.vue';
import PerPage from '@/components/pagination/per-page.vue'
import Pagination from '@/components/pagination/pagination.vue';

defineComponent({
  name: 'school-list',
  components: {
    PageInfo,
    PerPage,
    Pagination
  }
})

const perPage = ref(10)

const currentPage = ref(1)

</script>