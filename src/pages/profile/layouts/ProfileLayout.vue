<template>
    <div class="lg:flex">
        <div class="m-4 flex-initial lg:h-[37rem]">
            <slot name="profile-side"></slot>


        </div>
        <div class="m-4 flex-auto lg:h-[37rem]">
            <!-- <h1 class="font-bold text-xl pb-3 text-gray-600">Profile</h1> -->
            <slot name="content-profile"></slot>

        </div>
    </div>
</template>

<script>
export default {
    name: 'ProfileLayout'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

body {
    font-family: 'Roboto', sans-serif;
}
</style>