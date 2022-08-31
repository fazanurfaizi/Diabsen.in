<template>
  <Layout>
    <base-content>
      <template #title>Profile</template>
      <template #content>Hello</template>
    </base-content>
  </Layout>
</template>

<script>
import BaseContent from '@/layouts/BaseContent.vue';
export default {
    name: "ProfilePage",
    components: { BaseContent }
}
</script>