<template>
  <div class="bg-white rounded-lg mt-2 p-[25px]">
    <h1 class="text-[20px] font-semibold">
      <slot name="title"></slot>
    </h1>
    <div class="text-[14px]">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'BaseContent'
}
</script>