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
              />
            </li>                        
          </ul>
        </template>

        <form>
          <div class="grid gap-6 lg:grid-cols-2">
            <div>
              <VLabel id="name" label="Nama Lengkap" required />
              <VInput
                id="name"
                name="name"
                placeholder="Nama Lengkap"
                type="text"
                v-model="formData.name"
                required
              />
            </div>

            <div>                
              <VLabel id="gender" label="Jenis Kelamin" required />
              <VSelect 
                v-model="formData.gender"
                :options="genderOptions"
                optionValue="value"
                optionLabel="text"
                label="Pilih Jenis Kelamin"
              />
            </div>

            <div>
              <VLabel id="phone" label="No. WhatsApps" required />
              <VInput
                id="phone"
                name="phone"
                placeholder="No. WhatsApps"
                type="text"
                v-model="formData.phone"
                required
              />               
            </div>

            <div>
              <VLabel id="birthday" label="Tanggal Lahir" required />
              <VInput
                id="birthday"
                name="birthday"
                placeholder="Tanggal Lahir"
                type="date"
                v-model="formData.birthdate"
                required
              />
            </div>

            <div>
              <VLabel id="email" label="E-Mail" required />
              <VInput
                id="email"
                name="email"
                placeholder="E-Mail"
                type="email"
                v-model="formData.email"
                required
              />                
            </div>

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
            <v-button size="md" color="primary" @click="updateProfile">
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
import VInput from "@/components/form/input.vue";
import VLabel from '@/components/form/label.vue'
import VSelect from '@/components/form/select.vue'
import VButton from '@/components/ui/button/index.vue'
import { useStore } from 'vuex'
import { useRouter } from "vue-router";
import ProfileLayout from "./layouts/ProfileLayout.vue";
import Link from '@/components/ui/link/index.vue'

export default defineComponent({
  name: 'ProfileEdit',
  components: {
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
      () => store.getters['profile/getUser']
    )
    
    const formData = reactive({
      name: user.value.name,
      email: user.value.email,
      phone: user.value.phone,
      gender: user.value.gender,
      birthdate: user.value.birthdate,
      role: user.value.role,      
    })    

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
    }
  }
})
</script>