<template>
  <div class="hidden md:flex md:w-[200px] md:flex-col md:fixed md:inset-y-0 text-[13px]">
    <div class="flex flex-col flex-grow shadow-xl bg-white overflow-y-auto">
      <div class="flex items-center justify-center py-[20px] text-primary">
          <div class="text-3xl font-extrabold">
              LOGO
          </div>
      </div>
      <div class="flex-grow flex flex-col">
        <nav class="flex-1 px-[12px] pb-4">
          <div v-for="item in menu" :key="item">
            <div v-if="typeof(item.title) !== 'undefined'">
              <div class=" text-text-navbar uppercase mb-[4px]">
                {{item.title}}
              </div>
              <template v-for="element in item.items" :key="element" >
                <Menu :data="element" class="mb-[4px]" />
              </template>
            </div>
            <template v-else>
              <Menu :data="item" class="mb-[20px]" />
            </template>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue';
import menu from '../menu'
export default {
    name: "TheSidebar",
    data() {
        return {
            menu: []
        };
    },
    components: { Menu },
    created() {
        this.menu = menu;
    },
}
</script>