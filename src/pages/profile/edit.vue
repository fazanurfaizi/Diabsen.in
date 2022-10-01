<template>
  <v-container>
    <template #title>Profile</template>
    <template #content>
      <div class="block md:flex">
        <div class="w-full md:w-3/12 h-screen p-4 sm:p-6 lg:p-4 bg-white rounded-2xl border-2">
          <ProfilePanel :user="user">
            <ProfileNav />
          </ProfilePanel>
        </div>

        <div class="w-full md:w-9/12 p-8 h-fit bg-white lg:ml-4 rounded-2xl border-2">
          <form>
            <div class="grid gap-[24px] lg:grid-cols-2">
              <div>
                <VLabel id="name" label="Nama Lengkap" required />
                <VInput
                  id="name"
                  name="name"
                  placeholder="Nama Lengkap"
                  type="text"
                  v-model="user.name"
                  required
                />
              </div>

              <div>                
                <VLabel id="gender" label="Jenis Kelamin" required />
                <VSelect 
                  v-model="user.gender"
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
                  v-model="user.phone"
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
                  v-model="user.birthdate"
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
                  v-model="user.email"
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
                  v-model="user.role"
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
        </div>
      </div>      
    </template>
  </v-container>
</template>

<script>
import { defineComponent, onMounted, reactive, ref } from "vue";
import ProfilePanel from "@/pages/profile/layouts/ProfilePanel.vue";
import ProfileNav from "./layouts/ProfileNav.vue";
import VInput from "@/components/form/input.vue";
import VLabel from '@/components/form/label.vue'
import VSelect from '@/components/form/select.vue'
import VButton from '@/components/ui/button/index.vue'
import axios from "axios";
import { useStore } from 'vuex'
import { useRouter } from "vue-router";

export default defineComponent({
  name: 'ProfileEdit',
  components: {    
    ProfilePanel,
    ProfileNav,
    VInput,
    VLabel,  
    VSelect,  
    VButton,
  },
  setup() {
    const store = useStore()
    const router = useRouter()

    const user = reactive({
      name: null,
      email: null,
      phone: null,
      gender: null,
      birthdate: null,
      role: null,
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

    const getProfile = () => {
      const token = store.getters['auth/getToken'];
      axios
        .get(`${process.env.VUE_APP_API_URL_AUTH}/user/profile`, {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        })
        .then((response) => {
          const { name, email, phone, gender, birthdate, role } = response.data;
          
          user.name = name;
          user.email = email;
          user.phone = phone;
          user.gender = gender;
          user.birthdate = birthdate;
          user.role = role;

          user.profile = name
            .split(" ")
            .map((word) => word[0])
            .join("");
        });
    }

    const updateProfile = () => {
      const token = store.getters['auth/getToken'];

      let params = {
        name: user.name,
        phone_num: user.phone,
        gender: user.gender,
        birthdate: user.birthdate,
        email: user.email,
      };

      axios
        .put(process.env.VUE_APP_API_URL_AUTH + "/user/profile", params, {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        })
        .catch((e) => {
          if (e.response.status === 422) {
            let errors = e.response.data.errors;
            for (let field of Object.keys(errors)) {
              const element = document.querySelector(".errors_" + field);
              const id = document.querySelector("#" + field);

              element.innerHTML = errors[field][0];
              id.classList.remove("border-gray-300");
              id.classList.add("bg-[#E53E3E1A]", "border-red-500");
            }
          } else {
            console.error(e.message);
          }
        });      
    }

    const handleOnBack = () => {
      router.back()
    }

    onMounted(() => {
      getProfile()
    })

    return {
      user,
      genderOptions,
      updateProfile,
      handleOnBack      
    }
  }
})
</script>