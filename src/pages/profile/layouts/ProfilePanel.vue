<template>
    <div class="grid grid-cols-1 gap-[1.25rem]">
        <div class="flex flex-col items-center">
            <div
                class="max-w-xs h-[5.75rem] w-[5.75rem] bg-secondary-light text-white text-[30px] flex items-center justify-center text-2xl font-bold rounded-full ">
                {{ user.profile }}
            </div>

        </div>
        <div class="">
            <div class="flex flex-col items-center text-gray-500">
                <span class="font-bold text-[14px] ">{{ user.name }}</span>
                <span class="text-[12px] font-normal">{{ user.role }}</span>
            </div>
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ProfilePanel',
    props: ['user'],
}
</script>

