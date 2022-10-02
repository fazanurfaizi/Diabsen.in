<template>
  <div v-if="!$route.meta.isLogin">
    <SidebarMobile />
    <Sidebar />
    <div class="md:pl-[200px] flex flex-col flex-1">
      <Header />
      <main class="flex-1">
        <div class="py-10 md:mx-8">
          <BreadCrumb />
          <router-view></router-view>
        </div>
      </main>
      <Footer color-text="footer" />
    </div>
  </div>
  <div v-else>
    <router-view></router-view>
  </div>
</template>

<script>
import BreadCrumb from "@/layouts/BreadCrumb.vue";
import Sidebar from "@/layouts/TheSidebar.vue";
import Header from "@/layouts/TheHeader.vue";
import SidebarMobile from "@/layouts/SidebarMobile.vue";
import Footer from "@/layouts/TheFooter.vue";
export default {
  name: "App",
  components: {
    BreadCrumb,
    Sidebar,
    Header,
    SidebarMobile,
    Footer,
  },
};
</script>