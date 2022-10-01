<template>
    <v-container>
        <template #title>Profile</template>
        <template #content>
            <profile-layout>
                <form>
                    <div>
                        <VLabel id="current_password" label="Kata Sandi Lama" required />
                        <VInput
                            id="current_password"
                            name="current_password"
                            placeholder="Kata Sandi Lama"
                            type="password"
                            v-model="formData.current_password"
                            required
                        />
                    </div>
                    <div class="grid gap-6 lg:grid-cols-2 my-4">
                        <div>
                            <VLabel id="new_password" label="Kata Sandi Baru" required />
                            <VInput
                                id="new_password"
                                name="new_password"
                                placeholder="Kata Sandi Baru"
                                type="password"
                                v-model="formData.new_password"
                                required
                            />
                        </div>

                        <div>
                            <VLabel id="confirm_password" label="Ketik Ulang Kata Sandi" required />
                            <VInput
                                id="confirm_password"
                                name="confirm_password"
                                placeholder="Ketik Ulang Kata Sandi"
                                type="password"
                                v-model="formData.confirm_password"
                                required
                            />
                        </div>
                    </div>
                    <div class="flex flex-row-reverse items-end gap-2 mt-2">             
                        <v-button size="md" color="primary" @click.prevent="changePassword">
                            Simpan
                        </v-button>
                        <v-button size="md" color="info" outline @click="handleOnBack">
                            Batal
                        </v-button>
                    </div>
                </form>
            </profile-layout> 
        </template>
    </v-container>
</template>

<script>
import { defineComponent, reactive } from "vue";
import VInput from "@/components/form/input.vue";
import VLabel from '@/components/form/label.vue'
import VButton from '@/components/ui/button/index.vue'
import ProfileLayout from "./layouts/ProfileLayout.vue";
import { useStore } from 'vuex'
import { useRouter } from "vue-router";

export default defineComponent({
    name: 'ChangePassword',
    components: {    
        ProfileLayout,
        VInput,
        VLabel,          
        VButton,
    },
    setup() {
        const store = useStore()
        const router = useRouter()

        const formData = reactive({
            current_password: '',
            new_password: '',
            confirm_password: ''
        })

        const changePassword = () => {            
            store.dispatch('profile/changePassword', formData)
                .then(() => Object.assign(formData, {
                    current_password: '',
                    new_password: '',
                    confirm_password: ''
                }))
        }

        const handleOnBack = () => {
            router.back()
        }

        return {
            formData,
            changePassword,
            handleOnBack
        }
    }
})
</script>