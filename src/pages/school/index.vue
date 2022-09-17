<template>
  <Layout>
    <Content>
      <template v-slot:title>Daftar Sekolah</template>
      <template v-slot:content>
        <form class="flex items-center my-2">
          <div class="relative">
              <label for="search_school" class="hidden">Search School</label>
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Icon name="search" class="h-3.5 w-4 stroke-primary"></Icon>
              </div>
              <input v-model="nameSchool" id="nameSchool" class="w-['229px'] h-[36px] py-2.5 pl-9 mr-[8px] bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Cari Sekolah" type="search" required="">
          </div>
          <div>
            <button @click.prevent="search()" class="font-bold bg-[#4299E1] hover:bg-blue-700 py-[0.5rem] px-[0.25rem] rounded-[4px] text-white w-[66px] h-[36px] text-[14px]">Cari</button>
          </div>
        </form>
        <div class="flex justify-between my-3.5 items-center">
          <form class="flex items-center" action="#" method="GET">
            <label for="paginator" class="block text-sm text-gray-900 mr-3">Show</label>
            <select id="paginator" @change="onChange()" v-model="perPage" class="block p-2 font-normal mr-3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                <option value=1>1</option>
                <option value=5>5</option>
                <option value=10 selected>10</option>
            </select>
            <span class="block text-sm">entries</span>
          </form>
          <div class="flex order-last">
            <input type="submit" value="Tambah Sekolah" class="font-bold bg-[#4299E1] hover:bg-blue-700 py-[0.5rem] px-[0.25rem] rounded-[4px] text-white w-[126px] h-[36px] text-[14px]" name="addSchool" id="addSchool">
          </div>
        </div>
        <div v-for="element in datas" :key="element" >
          <TableSchool :data="element"></TableSchool>
        </div>
        <div class="my-3.5">
          <MyPagination :total-pages="totalPages" :total="total" :per-page="perPage" :current-page="currentPage"
              @pagechanged="getResult">
          </MyPagination>
        </div>
      </template>
    </Content>
  </Layout>
</template>
<script>
  import TableSchool from '@/components/Tableschool.vue';
  import Cookies from 'js-cookie';
  import MyPagination from '@/pages/school/components/MyPagination.vue';
  
  export default {
    name: "SchoolList",
    data(){
      return {
        datas: {},
        sortOrder: "asc",
        sort: "NPSN",
        nameSchool: "",
        
        page: 1,
        perPage:10,
        total: 40,
        totalPages: 10,
        currentPage: 1
      }
    },
    mounted() { 
      this.$nextTick(()=> {
        this.getResult()
      })
    },
    methods: {
      getResult(page=1, sortOrder=this.sortOrder, sort=this.sort, limit=this.perPage, nameSchool=this.nameSchool){
        this.axios.get(process.env.VUE_APP_API_URL_MASTER_DATA +"/school/",{
          params: {
            'page' : page,
            'sortOrder' : sortOrder,
            'sort' : sort,
            'limit' : limit,
            'keyword' : nameSchool
          },
          headers: {
            'Authorization': 'Bearer '+ Cookies.get('access_token')
          }
        }).then((response) => {
          console.log(response.data);
          this.datas = [response.data['data']];
          if(this.data==""){
            this.datas = ["empty"];
          }
          this.page = response.data['current_page'];
          this.currentPage = page;
          this.perPage = parseInt(response.data['per_page']);
          this.total = response.data['total'];
          this.totalPages = response.data['last_page'];
        })
      },
      onChange() {
        console.log('The new value is: ', this.perPage);
        this.perPage=parseInt(this.perPage);
        this.getResult(1, "", "", this.perPage);
      },
      search(){
        console.log('masuk ke search '+ this.nameSchool);
        this.getResult(1, "", "", this.perPage, this.nameSchool);
      }
      // submitForm(){
      //   axios.post('/contact', this.form)
      //         .then((res) => {
      //             //Perform Success Action
      //         })
      //         .catch((error) => {
      //             // error.response.status Check status code
      //         }).finally(() => {
      //             //Perform action in always
      //         });
      // }
    },
    components: { 
      TableSchool, MyPagination
    }
  }
</script>