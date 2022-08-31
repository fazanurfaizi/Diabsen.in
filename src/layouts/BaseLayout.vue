<template>
  <div>
      <SidebarMobile />
      <Sidebar />
      <div class="md:pl-64 flex flex-col flex-1">
        <Header />
        <main class="flex-1">
          <div class="py-10 bg-gray-50">
            <div class="md:mx-8">
              <BreadCrumb />
              <Footer color-text="black" />
              <slot />
            </div>
          </div>
          
        </main>
      </div>
  </div>
</template>

<script>
import BreadCrumb from './BreadCrumb.vue';
import Sidebar from './TheSidebar.vue';
import Header from './TheHeader.vue';
import SidebarMobile from './SidebarMobile.vue';
import Footer from './TheFooter.vue';

export default {
  name: 'BaseLayout',
  components: {
    BreadCrumb,
    Sidebar,
    Header,
    SidebarMobile,
    Footer
}
}
</script>