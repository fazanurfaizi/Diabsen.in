<template>
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
          <div>
            <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full">
              <slot name="icon">
                <Icon name="exclamation-circle" class="h-24 w-24 text-orange-300" />
              </slot>
            </div>
            <div class="mt-3 text-center sm:mt-5">
              <h3 class="text-lg font-medium leading-6 text-gray-900" id="modal-title">
                <slot name="title">Are you sure?</slot>
              </h3>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  <slot name="description">You won’t be able to revert this!</slot>
                </p>
              </div>
            </div>
          </div>
          <div class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
            <TheButton outline set-color="error" @click="$emit('confirm', 'no')">No</TheButton>
            <TheButton set-color="primary"  @click="$emit('confirm', 'yes')">Yes</TheButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import Icon from './Icon.vue';
import TheButton from './TheButton.vue';
export default {
    name: "TheModal",
    components: { Icon, TheButton }
};
</script>