<template>
  <v-container>
    <template v-slot:title>Daftar Sekolah</template>
    <template v-slot:content>
      <page-info :current-page="currentPage" :total-records="100" />
      <pagination v-model="currentPage" :current-per-page="10" :total-records="100" />
    </template>
  </v-container>
</template>

<script setup>
import { defineComponent, ref } from 'vue'
// import TheTable from '@/components/TheTable.vue';
// import Button from '@/components/TheButton.vue';
// import TheModal from '@/components/TheModal.vue';
import PageInfo from '@/components/pagination/page-info.vue';
import Pagination from '@/components/pagination/pagination.vue';

defineComponent({
  name: 'school-list',
  components: {
    PageInfo,
    Pagination
  }
})

const currentPage = ref(1)

</script>