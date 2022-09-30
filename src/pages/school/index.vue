<template>
  <v-container>
    <template v-slot:title>Daftar Sekolah</template>
    <template v-slot:content>
      <TheTable 
        :rows="dataTable"
        :column="headerTable"
        >
        <template #nav-right>
          <Button>Tambah Sekolah</Button>
        </template>
      </TheTable>
    </template>
  </v-container>
</template>
<script>
import TheTable from '@/components/TheTable.vue';
import Button from '@/components/TheButton.vue';
export default {
  name: "SchoolList",
  data(){
    return {
      dataTable: {
        perPage: 10,
        keyword: null,
        sort: "NPSN",
        sortOrder:"ASC",
        url: '/school/table',
        title: 'Sekolah',
      },
      headerTable:[
        {
          title: "NPSN",
          key: "NPSN",
          sort: "ASC",
        },
        {
          title: "Nama Sekolah",
          key: "name",
          sort: "ASC",
        },
        {
          title: "Kab/Kota",
          key: "city",
        },
        {
          title: "Provinsi",
          key: "province",
        },
        {
          title: "Kode Pos",
          key: "zip_code",
        },
        {
          title: "Alamat",
          key: "address",
        },
        {
          title: "Aksi",
          key: "action",
        },

      ]
    }
  },
  components: {
    TheTable, Button
  },
}

</script>