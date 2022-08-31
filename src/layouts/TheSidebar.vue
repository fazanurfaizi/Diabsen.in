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
                <Menu :data="element" />
              </div>
            </div>
            <div v-else>
              <Menu :data="item" />
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue';

export default {
    name: "TheSidebar",
    data() {
        return {
            menu: [
                {
                    name: "Beranda",
                    icon: "home",
                    path: "/dashboard"
                },
                {
                    title: "Pengelolaan",
                    items: [
                        {
                            name: "Foobar",
                            icon: "play",
                            path: "#",
                            child: [
                                {
                                    name: "Foobar List",
                                    path: "/foobar/list"
                                },
                                {
                                    name: "Foobar Create",
                                    path: "/foobar/create"
                                },
                            ]
                        },
                        {
                            name: "Menu",
                            icon: "menu",
                            path: "/forgot-password",
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
                                    path: "#"
                                },
                                {
                                    name: "Sub Menu",
                                    path: "#"
                                },
                                {
                                    name: "Sub Menu",
                                    path: "#"
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
                                    path: "#"
                                },
                                {
                                    name: "Sub Menu",
                                    path: "#"
                                },
                                {
                                    name: "Sub Menu",
                                    path: "#"
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
        };
    },
    components: { Menu }
}
</script>