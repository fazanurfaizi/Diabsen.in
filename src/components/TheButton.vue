<template>
  <button class="text-white rounded" :class="[getAction, getColor]">
    <slot>Button</slot>
  </button>
</template>
  
<script>
export default {
  name: "TheButton",
  props: {
    action: Boolean,
    setColor: {
      type: String,
      default: "primary"
    },
  },
  computed: {
    getAction () {
      return this.action ? 'py-1 px-1' : 'py-2 px-4'
    },
    getColor () {
      let result;
      switch (this.setColor) {
        case "primary":
          result = "bg-btn-primary"
          break;
        case "warning":
          result = "bg-btn-warning"
          break;
        case "error":
          result = "bg-btn-error"
          break;        
        default:
          result = "bg-btn-primary"
          break;
      }
      return result
    },
  }
};
</script>