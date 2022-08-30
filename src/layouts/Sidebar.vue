<template>
  <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
    <div class="flex flex-col flex-grow shadow-xl pt-5 bg-white overflow-y-auto">
      <div class="flex items-center justify-center text-primary">
          <div class="text-3xl">
              LOGO
          </div>
      </div>
      
      <div class="mt-5 flex-grow flex flex-col">
        <nav class="flex-1 px-2 pb-4">
          <div v-for="item in menu" :key="item">
            <div v-if="typeof(item.title) !== 'undefined'">
              <div class=" text-black uppercase">
                {{item.title}}
              </div>
              <div v-for="element in item.items" :key="element" >
                <div v-if="typeof(element.child) !== 'undefined'">
                  <ul class="relative">
                    <li class="relative" id="sidenavEx1">
                      <router-link :to="element.path">
                        <a class="flex items-center text-md py-4 px-3 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="dark" data-bs-toggle="collapse" data-bs-target="#collapseSidenavEx1" aria-expanded="true" aria-controls="collapseSidenavEx1">
                          <Icon :name="element.icon" class="h-5 w-5 mr-2" />
                          
                          <span>{{element.name}} x</span>
                          <Icon name="chevron-down" class="h-4 w-4 ml-auto" />
                        </a>
                      </router-link>
                      <ul class="relative accordion-collapse collapse" id="collapseSidenavEx1" aria-labelledby="sidenavEx1" data-bs-parent="#sidenavExample">
                        <li class="relative" v-for="elm in element.child" :key="elm">
                          <a href="#!" class="flex items-center text-sm py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">{{ elm.name }}</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div v-else>
                  <ul class="relative">
                    <li class="relative" id="sidenavEx1">
                      <a class="flex items-center text-md py-4 px-3 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="dark" data-bs-toggle="collapse" data-bs-target="#collapseSidenavEx1" aria-expanded="true" aria-controls="collapseSidenavEx1">
                        <Icon :name="element.icon" class="h-5 w-5 mr-2" />
                        <span>{{element.name}}</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div v-else>
              <ul class="relative">
                <li class="relative" id="sidenavEx1">
                  <a class="flex items-center text-md py-4 px-3 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="dark" data-bs-toggle="collapse" data-bs-target="#collapseSidenavEx1" aria-expanded="true" aria-controls="collapseSidenavEx1">
                    <Icon :name="item.icon" class="h-5 w-5 mr-2" />
                    <span>{{item.name}}</span>
                  </a>
                </li>
              </ul>
            </div>
          
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SideBar',
  data(){
    return {
      menu: [
        {
          name: "Beranda",
          icon: "home",
          path: "dashboard"
        },
        {
          title: "Pengelolaan",
          items: [
            {
              name: "Menu",
              icon: "menu",
              path: "#",
              child: [
                {
                  name: "Sub Menu",
                  path: "sub-menu"
                },
                {
                  name: "Sub Menu",
                  path: "sub-menu"
                },
                {
                  name: "Sub Menu",
                  path: "sub-menu"
                },
              ]
            },
            {
              name: "Menu",
              icon: "menu",
              path: "#",
            }
          ]
        },
        {
          title: "Kategori",
          items: [
            {
              name: "Menu",
              icon: "menu",
              path: "#",
              child: [
                {
                  name: "Sub Menu",
                  path: "sub-menu"
                },
                {
                  name: "Sub Menu",
                  path: "sub-menu"
                },
                {
                  name: "Sub Menu",
                  path: "sub-menu"
                },
              ]
            },
            {
              name: "Menu",
              icon: "menu",
              path: "#",
            }
          ]
        },
        {
          title: "Kategori",
          items: [
            {
              name: "Menu",
              icon: "menu",
              path: "#",
              child: [
                {
                  name: "Sub Menu",
                  path: "sub-menu"
                },
                {
                  name: "Sub Menu",
                  path: "sub-menu"
                },
                {
                  name: "Sub Menu",
                  path: "sub-menu"
                },
              ]
            },
            {
              name: "Menu",
              icon: "menu",
              path: "#",
            }
          ]
        }
      ]
    }
  }
}
</script>