<template>
    <form>
        <EditLayout>
            <div class="grid grid-cols-1 gap-[12px]">
                <div>
                    <label for="current_password" class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]">Kata Sandi
                        Lama
                        <Asterisk />
                    </label>
                    <input v-model="current_password" placeholder="Kata Sandi Lama" id="current_password"
                        name="current_password" type="password" required=""
                        class="appearance-none block w-full h-[44px] py-[14px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary text-[14px]" />
                    <div class="text-[12px] mt-[8px] text-[#F56565] errors_current_password"></div>
                </div>
    
                <div class="lg:flex gap-[8px] lg:flex-col-2">
                    <div class="lg:w-1/2">
                        <label for="new_password" class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]">Kata Sandi Baru
                            <Asterisk />
                        </label>
                        <input v-model="new_password" placeholder="Kata Sandi Baru" id="new_password" name="new_password"
                            type="password" required=""
                            class="appearance-none block w-full h-[44px] py-[14px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary text-[14px]" />
                        <div class="text-[12px] mt-[8px] text-[#F56565] errors_new_password"></div>
                    </div>
                    <div class="lg:flex-grow">
                        <label for="confirm_password" class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]">Ketik Ulang
                            Kata
                            Sandi
                            <Asterisk />
                        </label>
                        <input v-model="confirm_password" placeholder="Ketik Ulang Kata Sandi" id="confirm_password"
                            name="confirm_password" type="password" required=""
                            class="appearance-none block w-full h-[44px] py-[14px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary text-[14px]" />
                        <div class="text-[12px] mt-[8px] text-[#F56565] errors_confirm_password"></div>
                    </div>
                </div>
                <div class="flex flex-row-reverse items-end gap-[7px]">
                    <button @click.prevent="changePassword()"
                        class="bg-[#4299E1] hover:bg-blue-700 p-[4px] rounded-[4px] text-white w-[78px] h-[36px] text-[14px]">Simpan</button>
                    <!-- <TheBackButton /> -->
                </div>

            </div>
        </EditLayout>
    </form>
</template>

<script>
import EditLayout from '@/pages/profile/layouts/EditLayout.vue'
import Asterisk from '@/components/Asterisk.vue'
// import TheBackButton from './components/TheBackButton.vue'
export default {
    name: 'ChangePassword',
    components: { EditLayout, Asterisk },
    data() {
        return {
            current_password: null,
            new_password: null,
            confirm_password: null
        }
    },
    methods: {
        changePassword() {
            const token = this.$store.state.auth.token;

            let params = {
                current_password: this.current_password,
                new_password: this.new_password,
                confirm_password: this.confirm_password
            };

            this.axios.put(process.env.VUE_APP_API_URL_AUTH + '/user/change-password', params, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
            }).catch((e) => {
                if (e.response.status === 422) {
                    let errors = e.response.data.errors;
                    for (let field of Object.keys(errors)) {
                        const element = document.querySelector('.errors_' + field);
                        element.innerHTML = errors[field][0];
                    }
                } else {
                    console.error(e.message);
                }
            });
        },

    }
}
</script>