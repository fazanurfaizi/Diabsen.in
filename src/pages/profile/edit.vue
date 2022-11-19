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
          <div class="grid gap-6 lg:grid-cols-2">
            <v-form-control :model="v$.name">
              <VLabel id="name" label="Nama Lengkap" required />
              <VInput
                id="name"
                name="name"
                placeholder="Nama Lengkap"
                type="text"
                v-model="formData.name"
                required
                @blur="v$.name.$touch"
                :error="v$.name.$error"
              />
            </v-form-control>

            <v-form-control :model="v$.gender">
              <VLabel id="gender" label="Jenis Kelamin" required />
              <VSelect
                v-model="formData.gender"
                :options="genderOptions"
                optionValue="value"
                optionLabel="text"
                label="Pilih Jenis Kelamin"
              />
            </v-form-control>

            <v-form-control :model="v$.phone">
              <VLabel id="phone" label="No. WhatsApps" required />
              <VInput
                id="phone"
                name="phone"
                placeholder="No. WhatsApps"
                type="text"
                v-model="formData.phone"
                required
                @blur="v$.phone.$touch"
                :error="v$.phone.$error"
              />
            </v-form-control>

            <v-form-control :model="v$.birthdate">
              <VLabel id="birthday" label="Tanggal Lahir" required />
              <VInput
                id="birthday"
                name="birthday"
                placeholder="Tanggal Lahir"
                type="date"
                v-model="formData.birthdate"
                required
              />
            </v-form-control>

            <v-form-control :model="v$.email">
              <VLabel id="email" label="E-Mail" required />
              <VInput
                id="email"
                name="email"
                placeholder="E-Mail"
                type="email"
                v-model="formData.email"
                required
                @blur="v$.email.$touch"
                :error="v$.email.$error"
              />
            </v-form-control>

            <div>
              <VLabel id="role" label="Jabatan" required />
              <VInput
                id="role"
                name="role"
                placeholder="Jabatan"
                type="text"
                v-model="formData.role"
                required
                readonly
                />
                <!-- class="bg-[#E53E3E1A] border-red-500" -->
            </div>
          </div>
          <div class="flex flex-row-reverse items-end gap-2 mt-2">
            <v-button size="md" color="danger" @click="updateProfile">
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
import { defineComponent, onMounted, reactive, ref, computed } from "vue";
import { useStore } from 'vuex'
import { useRouter } from "vue-router";
import { useVuelidate } from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'
import VFormControl from '@/components/form/form-control.vue'
import VInput from "@/components/form/input.vue";
import VLabel from '@/components/form/label.vue'
import VSelect from '@/components/form/select.vue'
import VButton from '@/components/ui/button/index.vue'
import ProfileLayout from "./layouts/ProfileLayout.vue";
import Link from '@/components/ui/link/index.vue'

export default defineComponent({
  name: 'ProfileEdit',
  components: {
    VFormControl,
    VInput,
    VLabel,
    VSelect,
    VButton,
    Link,
    ProfileLayout
},
  setup() {
    const store = useStore()
    const router = useRouter()

    const user = computed(
      () => store.getters['profile/getUserProfile']
    )

    const formData = reactive({
      name: user.value.name,
      email: user.value.email,
      phone: user.value.phone,
      gender: user.value.gender,
      birthdate: user.value.birthdate,
      role: user.value.role,
    })

    const rules = {
      name: {
        required: helpers.withMessage('Nama tidak boleh kosong', required)
      },
      email: {
        required: helpers.withMessage('E-Mail tidak boleh kosong', required),
        email: helpers.withMessage('E-Mail tidak valid', email)
      },
      phone: {
        required: helpers.withMessage('No. WhatsApps tidak boleh kosong', required)
      },
      gender: {
        required: helpers.withMessage('Jenis kelamin tidak boleh kosong', required)
      },
      birthdate: {
        required: helpers.withMessage('Tanggal lahir tidak boleh kosong', required)
      },
    }

    const v$ = useVuelidate(rules, formData)

    const genderOptions = ref([
      {
        text: 'Pria',
        value: 'm'
      },
      {
        text: 'Perempuan',
        value: 'f'
      }
    ])

    const updateProfile = () => {
      store.dispatch('profile/updateProfile', formData)
    }

    const handleOnBack = () => {
      router.push({ name: 'profile-user' })
    }

    onMounted(() => {
      store.dispatch('profile/getProfile')
    })

    return {
      formData,
      genderOptions,
      updateProfile,
      handleOnBack,
      v$
    }
  }
})
</script>
