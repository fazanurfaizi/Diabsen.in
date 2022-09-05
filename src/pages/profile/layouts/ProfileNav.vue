<template>
    <nav>
        <ul class="flex flex-col w-full gap-[8px]">
            <li class="my-px">
                <router-link to="/profile/edit" active-class="active"
                    class="flex flex-row items-center h-[30px] rounded-[4px] py-[10px] pl-[12px] pr-[2px] gap-[8px] text-gray-600 hover:bg-[#E3E6EA] hover:text-gray-700">
                    <span class="link flex items-center justify-center text-lg text-gray-500">
                        <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            viewBox="0 0 24 24" stroke="currentColor" class="h-[20px] w-[20px]">
                            <path
                                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                        </svg>
                    </span>
                    <span class="text-[13px]">Profile Saya</span>
                </router-link>
            </li>
            <li class="my-px">
                <router-link to="/profile/change-password"
                    class="flex flex-row items-center h-[30px] rounded-[4px] py-[10px] pl-[12px] pr-[2px] gap-[8px] text-gray-600 hover:bg-[#E3E6EA] hover:text-gray-700">
                    <span class="link flex items-center justify-center text-lg text-gray-500">
                        <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            viewBox="0 0 24 24" stroke="currentColor" class="h-[20px] w-[20px]">
                            <path
                                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                        </svg>
                    </span>
                    <span class="text-[13px]">Ubah Kata Sandi</span>
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'ProfileNav'
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
</style>