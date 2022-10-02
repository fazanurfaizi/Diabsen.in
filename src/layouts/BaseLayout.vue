<template>
  <div>
    <slot />
  </div>
</template>

<script>
import BreadCrumb from "./BreadCrumb.vue";
import Sidebar from "./TheSidebar.vue";
import Header from "./TheHeader.vue";
import SidebarMobile from "./SidebarMobile.vue";
import Footer from "./TheFooter.vue";

export default {
  name: "BaseLayout",
  components: {
    BreadCrumb,
    Sidebar,
    Header,
    SidebarMobile,
    Footer,
  },
};
</script>