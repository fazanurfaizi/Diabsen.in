<template>
  <div class="bg-white rounded-lg mt-2 pb-5">
    <div class="sm:pl-4 md:pl-8 pt-4">
      <h1 class="text-2xl font-semibold text-gray-900">
        <slot name="title"></slot>
      </h1>
    </div>
    <div class="sm:px-4 md:px-8">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'BaseContent'
}
</script>