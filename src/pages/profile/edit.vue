<template>
  <form>
    <EditLayout>
      <div class="grid grid-cols-1 gap-[20px]">
        <div class="grid gap-[24px] lg:grid-cols-2">
          <div>
            <label
              for="first_name"
              class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]"
              >Nama Lengkap
              <Asterisk />
            </label>
            <input
              placeholder="Nama Lengkap"
              type="text"
              required=""
              v-model="user.name"
              class="
                appearance-none
                block
                w-full
                h-[44px]
                py-[14px]
                px-[12px]
                border border-gray-300
                rounded-[4px]
                shadow-sm
                placeholder-gray-400
                focus:outline-none focus:ring-secondary focus:border-secondary
                sm:text-[14px]
              "
            />
            <div
              class="
                text-sm
                mt-2
                text-[12px]
                mt-[8px]
                text-[#F56565]
                errors_name
              "
            ></div>
          </div>
          <div>
            <label
              for="gender"
              class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]"
              >Jenis Kelamin
              <Asterisk />
            </label>
            <select
              v-model="user.gender"
              class="
                bg-white
                appearance-none
                block
                w-full
                h-[44px]
                py-[10px]
                px-[12px]
                border border-gray-300
                rounded-[4px]
                shadow-sm
                placeholder-gray-400
                focus:outline-none focus:ring-secondary focus:border-secondary
                sm:text-[14px]
              "
            >
              <option disabled>-- Pilih Jenis Kelamin --</option>
              <option
                v-for="gen in gender"
                :key="gen"
                :selected="gen[1] === user.gender"
                v-bind:value="gen[1]"
              >
                {{ gen[0] }}
              </option>
            </select>
            <div
              class="
                text-sm
                mt-2
                text-[12px]
                mt-[8px]
                text-[#F56565]
                errors_gender
              "
            ></div>
          </div>
          <div>
            <label
              for="first_name"
              class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]"
              >No. WhatsApps
              <Asterisk />
            </label>
            <input
              placeholder="No. WhatsApps"
              id="phone_num"
              type="text"
              required=""
              v-model="user.phone"
              class="
                appearance-none
                block
                w-full
                h-[44px]
                py-[14px]
                px-[12px]
                border border-gray-300
                rounded-[4px]
                shadow-sm
                placeholder-gray-400
                focus:outline-none focus:ring-secondary focus:border-secondary
                sm:text-[14px]
              "
            />
            <div
              class="
                text-sm
                mt-2
                text-[12px]
                mt-[8px]
                text-[#F56565]
                errors_phone_num
              "
            ></div>
          </div>
          <div>
            <label
              for="first_name"
              class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]"
              >Tanggal Lahir
              <Asterisk />
            </label>
            <input
              placeholder="Tanggal lahir"
              id="birthdate"
              type="date"
              required
              v-model="user.birthdate"
              class="
                bg-clip-padding
                appearance-none
                block
                w-full
                h-[44px]
                py-[14px]
                px-[12px]
                border border-gray-300
                rounded-[4px]
                shadow-sm
                placeholder-gray-400
                focus:outline-none focus:ring-secondary focus:border-secondary
                sm:text-[14px]
              "
            />
            <div
              class="
                text-sm
                mt-2
                text-[12px]
                mt-[8px]
                text-[#F56565]
                errors_birthdate
              "
            ></div>
          </div>
          <div>
            <label
              for="first_name"
              class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]"
              >E-Mail
              <Asterisk />
            </label>
            <input
              placeholder="E-Mail"
              id="email"
              type="text"
              required=""
              v-model="user.email"
              class="
                appearance-none
                block
                w-full
                h-[44px]
                py-[14px]
                px-[12px]
                border border-gray-300
                rounded-[4px]
                shadow-sm
                placeholder-gray-400
                focus:outline-none focus:ring-secondary focus:border-secondary
                sm:text-[14px]
              "
            />
            <div
              class="
                text-sm
                mt-2
                text-[12px]
                mt-[8px]
                text-[#F56565]
                errors_email
              "
            ></div>
          </div>
          <div>
            <label
              for="first_name"
              class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]"
              >Jabatan
              <Asterisk />
            </label>
            <input
              placeholder="Jabatan"
              type="text"
              readonly
              :value="user.role"
              class="
                bg-gray-100
                appearance-none
                block
                w-full
                h-[44px]
                py-[14px]
                px-[12px]
                border border-gray-300
                rounded-[4px]
                shadow-sm
                placeholder-gray-400
                focus:outline-none focus:ring-secondary focus:border-secondary
                sm:text-[14px]
              "
            />
          </div>
        </div>
        <div class="flex flex-row-reverse items-end gap-[7px]">
          <button
            @click.prevent="updateProfile()"
            class="
              bg-[#4299E1]
              hover:bg-blue-700
              p-[4px]
              rounded-[4px]
              text-white
              w-[78px]
              h-[36px]
              text-[14px]
            "
          >
            Simpan
          </button>
          <TheBackButton />
        </div>
      </div>
    </EditLayout>
  </form>
</template>

<script>
import EditLayout from "@/pages/profile/layouts/EditLayout.vue";
import TheBackButton from "./components/TheBackButton.vue";
import Asterisk from "@/components/Asterisk.vue";
import { DateTime } from "luxon";

export default {
  name: "ProfileEdit",
  components: {
    EditLayout,
    Asterisk,
    TheBackButton,
  },
  data() {
    return {
      user: {
        name: null,
        email: null,
        phone: null,
        gender: null,
        birthdate: null,
        role: null,
      },
      gender: [
        ["Pria", "m"],
        ["Perempuan", "f"],
      ],
    };
  },
  methods: {
    getProfile() {
      const token = this.$store.state.auth.token;
      this.axios
        .get(`${process.env.VUE_APP_API_URL_AUTH}/user/profile`, {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        })
        .then((response) => {
          const { name, email, phone, gender, birthdate, role } = response.data;

          this.user.name = name;
          this.user.email = email;
          this.user.phone = phone;
          this.user.gender = gender;
          this.user.birthdate = birthdate;
          this.user.role = role;

          this.user.profile = name
            .split(" ")
            .map((word) => word[0])
            .join("");
        });
    },

    updateProfile() {
      const token = this.$store.state.auth.token;

      let params = {
        name: this.user.name,
        phone_num: this.user.phone,
        gender: this.user.gender,
        birthdate: this.user.birthdate,
        email: this.user.email,
      };

      this.axios
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
    },
  },
  created() {
    this.getProfile();
  },
  mounted() {
    let today = DateTime.now().setLocale("id").toFormat("yyyy-LL-dd");

    document.getElementById("birthdate").max = today;
  },
};
</script>