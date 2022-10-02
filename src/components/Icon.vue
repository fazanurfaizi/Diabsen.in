<template>
  <hero-icons-solid v-if="iconSet === 'solid'" :name="name"></hero-icons-solid>
  <hero-icons-outline v-else-if="iconSet === 'outline'" :name="name"></hero-icons-outline>
  <zond-icons v-else-if="iconSet === 'zondicons'" :name="name"></zond-icons>
  <team-ui v-else-if="iconSet === 'teamui'" :name="name"></team-ui>
</template>
  
<script>
  import heroIconsOutline from './icons/heroicons-outline.vue';
  import heroIconsSolid from './icons/heroicons-solid.vue';
  import zondIcons from './icons/zondicons.vue';
  import teamUi from './icons/team-ui.vue';

export default {
  name: "IconItem",
  props: {
    name: {
      type: String,
      required: true,
    },

    set: {
      type: String,
      default: "outline"
    },
  },

  components: {
    heroIconsOutline,
    heroIconsSolid,
    zondIcons,
    teamUi
  },

  computed: {
    iconSet() {
      return this.set;
    },
  }
};
</script>