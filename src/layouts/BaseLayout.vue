<template>
  <div>
      <SidebarMobile />
      <Sidebar />
      <div class="md:pl-[200px] flex flex-col flex-1">
        <Header />
        <main class="flex-1">
          <div class="py-10 md:mx-8">
            <BreadCrumb />
            <slot />
          </div>
        </main>
        <Footer color-text="footer" />
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