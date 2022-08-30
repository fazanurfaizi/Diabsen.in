<template>
  <div>
      <SidebarMobile />
      <SideBar />
      <div class="md:pl-64 flex flex-col flex-1">
        <HeaderComponent />
        <main class="flex-1">
          <div class="py-10 bg-gray-50">
            <div class="md:mx-8">
              <BreadCrumb />
              <slot />
            </div>
          </div>
        </main>
      </div>
  </div>
</template>

<script>
import BreadCrumb from './BreadCrumb.vue';
import SideBar from './Sidebar.vue';
import HeaderComponent from './HeaderComponent.vue';
import SidebarMobile from './SidebarMobile.vue';

export default {
  name: 'BaseLayout',
  components: {
    BreadCrumb,
    SideBar,
    HeaderComponent,
    SidebarMobile
  }
}
</script>