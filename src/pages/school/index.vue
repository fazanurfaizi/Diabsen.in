<template>
  <Layout>
    <Content>
      <template v-slot:title>Daftar Sekolah</template>
      <template v-slot:content>
        <form class="flex items-center my-2" action="#" method="GET">
          <div class="relative">
              <label for="search_school" class="hidden">Search School</label>
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Icon name="search" class="h-3.5 w-4 stroke-primary"></Icon>
              </div>
              <input class="w-['229px'] h-9 py-2.5 pl-9 mr-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Cari Sekolah" type="search" name="search_school" id="search_school" required="">
          </div>
          <div>
              <input type="submit" value="Cari" class="bg-[#4299E1] hover:bg-blue-700 p-[4px] rounded-[4px] text-white w-[78px] h-[36px] text-[14px]" name="member[subscribe]" id="member_submit">
          </div>
        </form>
        <div class="flex justify-between my-3.5 items-center">
          <form class="flex items-center" action="#" method="GET">
            <label for="paginator" class="block text-sm text-gray-900 mr-3">Show</label>
            <select id="paginator" @change="onChange()" v-model="perPage" class="block p-2 font-normal mr-3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                <option value=1>1</option>
                <option value=5>5</option>
                <option value=10>10</option>
            </select>
            <span class="block text-sm">entries</span>
          </form>
          <div class="flex order-last">
            <input type="submit" value="Tambah Sekolah" class="h-9 cursor-pointer text-white bg-button hover:bg-button/80 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-2.5 py-2.5 text-center" name="member[subscribe]" id="member_submit">
          </div>
        </div>
        <div v-for="element in datas" :key="element" >
          <TableSchool :data="element"></TableSchool>
        </div>
      </template>
    </Content>
  </Layout>
</template>
<script>
  import TableSchool from '@/components/Tableschool.vue';
  import Cookies from 'js-cookie';
 
  export default {
    name: "SchoolList",
    data(){
      return {
        datas: {},
        currentPage: 1,
        perPage: 10,
        total: 25,
        sortOrder: "asc",
        sort: "NPSN"
      }
    },
    mounted() {  
      this.$nextTick(()=> {
        this.getResult()
      })
    },
    methods: {
      getResult(page=1, sortOrder=this.sortOrder, sort=this.sort, limit=this.perPage, name=""){
        this.axios.get("http://localhost:9000"+"/school/?page="+page+"&sortOrder="+sortOrder+
        "&sort="+sort+"&limit="+limit+"&name="+name, {
          headers: {
            'Authorization': 'Bearer '+ Cookies.get('access_token')
          }
        }).then((response) => {
          console.log(response.data.data);
          this.datas = [response.data['data']];
          this.currentPage = response.data['current_page'];
          this.perPage = parseInt(response.data['per_page']);
          this.total = response.data['total'];
        })
      },
      onChange() {
        console.log('The new value is: ', this.perPage);
        this.perPage=parseInt(this.perPage);
        this.getResult(1, "", "", this.perPage);
      },
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
      TableSchool
    }
  }

</script>