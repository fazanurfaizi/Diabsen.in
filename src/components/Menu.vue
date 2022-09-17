<template>
  <ul class="relative"  v-if="typeof(data.child) !== 'undefined'">
    <li class="relative" id="sidenavEx1">
      <a @click.prevent="open = !open" :class="isActive ? 'bg-secondary text-white hover:bg-secondary' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'" class="flex items-center text-md py-4 px-3 h-12 overflow-hidden  text-ellipsis whitespace-nowrap rounded transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="dark" data-bs-toggle="collapse" data-bs-target="#collapseSidenavEx1" aria-expanded="true" aria-controls="collapseSidenavEx1">
        <Icon :name="data.icon" class="h-5 w-5 mr-2" />
        <span>{{data.name}}</span>
        <Icon :name="open ? 'chevron-down' : 'chevron-left'" class="h-4 w-4 ml-auto" />
      </a>
      
      <ul v-show="open" class="relative accordion-collapse collapse" id="collapseSidenavEx1" aria-labelledby="sidenavEx1" data-bs-parent="#sidenavExample">
        <li class="relative" v-for="item in data.child" :key="item">
          <router-link :to="item.path">
            <a href="#!" class="flex items-center text-sm py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">
              {{ item.name }}
            </a>
          </router-link>
          </li>
      </ul>
    </li>
  </ul>
  <ul class="relative" v-else>
    <router-link :to="data.path">
      <li class="relative" id="sidenavEx1">
        <a :class="isActive ? 'bg-secondary text-white hover:bg-secondary' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'" class="flex items-center text-md py-4 px-3 h-12 overflow-hidden  text-ellipsis whitespace-nowrap rounded transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="dark" data-bs-toggle="collapse" data-bs-target="#collapseSidenavEx1" aria-expanded="true" aria-controls="collapseSidenavEx1">
          <Icon :name="data.icon" class="h-5 w-5 mr-2" />
          <span>{{data.name}}</span>
        </a>
      </li>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: "MenuComponent",
  data(){
    return {
      open: false,
      path: "",
      isActive: false,
    }
  },
  props: {
    data: {
      type: Object
    }
  },
  methods: {
    setActive(){
      if(typeof(this.data.child) !== 'undefined'){
        const listLink = this.data.child.filter((item) => {
          if(item.path === this.$route.path){
            return item
          }
        })
        if(listLink.length > 0){
          this.open = true
          this.isActive = true
        }
      }else{
        if(this.$route.path === this.data.path){
          this.isActive = true
        }
      }
    }
  },
  created() {
    this.setActive();
  },
}
</script>