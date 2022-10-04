<template>
  <v-container>
    <template v-slot:title>Daftar Sekolah</template>
    <template v-slot:content>
      <TheTable 
        :rows="dataTable"
        :column="headerTable"
        ref="table"
        >
        <template #nav-right>
          <router-link to="/schools/create">
            <Button>Tambah Sekolah</Button>
          </router-link>
        </template>
        <template v-slot="slotProps">
          <Button @click="goTo('detail',slotProps.id)" class="mx-0.5" action>Detail</Button>
          <Button @click="goTo('edit',slotProps.id)" class="mx-0.5" set-color="warning" action>Edit</Button>
          <Button @click="goTo('delete',slotProps.id)" class="mx-0.5" set-color="error" action>Delete</Button>
        </template>
      </TheTable>
    </template>
  </v-container>
  <TheModal set-type="confirm" class="w-[425px]" @confirm="confirmHandle" v-show="isShowModal" />
</template>
<script>
import TheTable from '@/components/TheTable.vue';
import Button from '@/components/TheButton.vue';
import TheModal from '@/components/TheModal.vue';
export default {
  name: "SchoolList",
  data(){
    return {
      id: null,
      isShowModal: false,
      suffixURL: '/school',
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
          key: "npsn",
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
          key: "postal_code",
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
    TheTable, Button, TheModal
  },
  methods: {
    confirmHandle(conf){
      this.isShowModal = false
      if (conf === "yes") {
        const urlDelete = process.env.VUE_APP_API_URL_MASTER_DATA + this.suffixURL + '/' + this.id
        this.axios.delete(urlDelete).then((response) => {
          // this.$root.$refs.TheTable.getData('tes');
          this.$refs.table.getData()
          console.log(response); 
          console.log(this.$refs.table);
        }).catch(console.log)
        console.log(conf);
      }
    },
    goTo(type, item){
      switch (type) {
        case 'detail':
          this.$router.push('/schools/'+item+'/detail')
          break;
        case 'edit':
          this.$router.push('/schools/'+item+'/edit')
          break;
        case 'delete':
          this.isShowModal = true
          this.id = item
          break;
        
        default:
          break;
      }
      console.log(item);
    },
  },
}

</script>