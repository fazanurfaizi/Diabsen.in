<template>
  <div>
    <footer :class="`w-full h-16 left-0 bottom-0 flex justify-center items-center text-${colorText}`">
      Copyright © 2022 AttenDev Tim
    </footer>
  </div>
</template>

<script>
export default {
  name: 'TheFooter',
  props: {
    colorText: {
      type: String,
      default: 'white',
    }
  }
}
</script>