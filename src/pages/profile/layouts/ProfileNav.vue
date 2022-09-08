<template>
    <nav>
        <ul class="flex flex-col w-full gap-[8px]">
            <li class="my-px">
                <router-link to="/profile/edit" active-class="active"
                    class="flex flex-row items-center h-[30px] rounded-[4px] py-[10px] pl-[12px] pr-[2px] gap-[8px] text-gray-600 hover:bg-[#E3E6EA] hover:text-gray-700">
                    <span class="link flex items-center justify-center text-lg text-[#6E6B7B]">
                        <Icon set="teamui" name="profile"></Icon>
                    </span>
                    <span class="text-[13px]">Profile Saya</span>
                </router-link>
            </li>
            <li class="my-px">
                <router-link to="/profile/change-password"
                    class="flex flex-row items-center h-[30px] rounded-[4px] py-[10px] pl-[12px] pr-[2px] gap-[8px] text-gray-600 hover:bg-[#E3E6EA] hover:text-gray-700">
                    <span class="link flex items-center justify-center text-lg text-[#6E6B7B]">
                        <Icon set="teamui" name="key"></Icon>
                    </span>
                    <span class="text-[13px]">Ubah Kata Sandi</span>
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    import Icon from '@/components/Icon.vue'
    export default {
        name: 'ProfileNav',
        components: { Icon }
    }
</script>

<style>
    a.router-link-exact-active {
        color: white !important;
        background-color: #EB7714 !important;
    }

    a.router-link-exact-active .link {
        color: white !important;
    }

    a.router-link-exact-active .link path {
        fill: white !important;
    }
</style>