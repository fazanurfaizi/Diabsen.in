<template>
    <v-container>
        <template #title>Profile</template>
        <template #content>
            <profile-layout>
                <template #nav>
                    <ul class="flex flex-col w-full gap-2">
                        <li class="my-px">
                            <Link
                                title="Profile Saya"
                                path="profile-edit"
                                icon="user-circle"
                            />
                        </li>
                        <li class="my-px">
                            <Link
                                title="Ubah Kata Sandi"
                                path="profile-change-password"
                                icon="key"
                                iconSet="teamui"
                            />
                        </li>
                    </ul>
                </template>

                <form>
                    <v-form-control :model="v$.current_password">
                        <VLabel id="current_password" label="Kata Sandi Lama" required />
                        <VInput
                            id="current_password"
                            name="current_password"
                            placeholder="Kata Sandi Lama"
                            type="password"
                            v-model="formData.current_password"
                            required
                            @blur="v$.current_password.$touch"
                            :error="v$.current_password.$error"
                        />
                    </v-form-control>
                    <div class="grid gap-6 lg:grid-cols-2 my-4">
                        <v-form-control :model="v$.new_password">
                            <VLabel id="new_password" label="Kata Sandi Baru" required />
                            <VInput
                                id="new_password"
                                name="new_password"
                                placeholder="Kata Sandi Baru"
                                type="password"
                                v-model="formData.new_password"
                                required
                                @blur="v$.new_password.$touch"
                                :error="v$.new_password.$error"
                            />
                        </v-form-control>

                        <v-form-control :model="v$.confirm_password">
                            <VLabel id="confirm_password" label="Ketik Ulang Kata Sandi" required />
                            <VInput
                                id="confirm_password"
                                name="confirm_password"
                                placeholder="Ketik Ulang Kata Sandi"
                                type="password"
                                v-model="formData.confirm_password"
                                required
                                @blur="v$.confirm_password.$touch"
                                :error="v$.confirm_password.$error"
                            />
                        </v-form-control>
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
import { computed, defineComponent, onMounted, reactive } from "vue";
import { useStore } from 'vuex'
import { useRouter } from "vue-router";
import { useVuelidate } from '@vuelidate/core'
import { required, sameAs, helpers } from '@vuelidate/validators'
import VFormControl from '@/components/form/form-control/index.vue'
import VInput from "@/components/form/input/index.vue";
import VLabel from '@/components/form/label/index.vue'
import VButton from '@/components/ui/button/index.vue'
import ProfileLayout from "./layouts/ProfileLayout.vue";
import Link from '@/components/ui/link/index.vue'

export default defineComponent({
    name: 'ChangePassword',
    components: {
        ProfileLayout,
        VInput,
        VLabel,
        VButton,
        VFormControl,
        Link
    },
    setup() {
        const store = useStore()
        const router = useRouter()

        const formData = reactive({
            current_password: '',
            new_password: '',
            confirm_password: ''
        })

        const newPasswordRef = computed(() => formData.new_password);

        const rules = {
            current_password: {
                required: helpers.withMessage('Password tidak boleh kosong', required),
                containsPasswordRequirement: helpers.withMessage(
                    () => `The password requires an uppercase, lowercase, number and special character`,
                    (value) => /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#*])/.test(value)
                ),
            },
            new_password: {
                required: helpers.withMessage('Password baru tidak boleh kosong', required),
            },
            confirm_password: {
                required: helpers.withMessage('Konfirmasi password tidak boleh kosong', required),
                sameAs: helpers.withMessage('Konfirmasi password tidak sesuai', sameAs(newPasswordRef))
            },
        }

        const v$ = useVuelidate(rules, formData, { $lazy: true })

        const changePassword = () => {
            store.dispatch('profile/changePassword', formData)
                .then(() => Object.assign(formData, {
                    current_password: '',
                    new_password: '',
                    confirm_password: ''
                }))
        }

        const handleOnBack = () => {
            router.push({ name: 'profile-user' })
        }

        onMounted(() => {
            v$.value.$reset()
        })

        return {
            formData,
            changePassword,
            handleOnBack,
            v$
        }
    }
})
</script>
