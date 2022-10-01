<template>
  <v-container>
    <template #title>Profile</template>
    <template #content>
      <div class="lg:flex">
        <div class="m-4 flex-initial lg:h-[37rem]">
          <div
            class="
              py-[30px]
              px-[12px]
              bg-white
              rounded-[4px]
              border border-[#E3E6EA]
              lg:h-[17.688rem] lg:w-[12.5rem]
            "
          >
            <div class="grid grid-cols-1 gap-[1.25rem] h-full">
              <div class="flex flex-col items-center">
                <div
                  class="
                    max-w-xs
                    h-[5.75rem]
                    w-[5.75rem]
                    bg-secondary-light
                    text-white text-[30px]
                    flex
                    items-center
                    justify-center
                    text-2xl
                    font-bold
                    rounded-full
                  "
                >
                  {{ user.profile }}
                </div>
              </div>
              <div class="flex flex-col items-center text-[#6E6B7B]">
                <span class="font-bold text-[14px]">{{ user.name }}</span>
                <span class="text-[12px] font-normal">{{ user.role }}</span>
              </div>
              <div class="flex flex-col items-center">                
                <router-link 
                  :to="{ name: 'profile-edit' }"
                  class="bg-[#4299E1] hover:bg-blue-700 py-[0.5rem] px-[0.25rem] rounded text-white w-[78px] h-[36px] text-[14px]"
                >
                  Edit Profile
              </router-link>
              </div>
            </div>
          </div>
        </div>

        <div class="m-4 flex-auto lg:h-[37rem]">
          <div
            class="
              p-[20px]
              bg-white
              rounded-[4px]
              border border-[#E3E6EA]
              w-full
            "
          >
            <div class="grid lg:grid-cols-2 text-[#6E6B7B] text-[14px]">
              <div>
                <div class="flex flex-col py-1">
                  <span class="font-bold">Nama Lengkap :</span>
                  <span>{{ user.name }}</span>
                </div>

                <div class="flex flex-col py-1">
                  <span class="font-bold">E - Mail :</span>
                  <span>{{ user.email }}</span>
                </div>

                <div class="flex flex-col py-1">
                  <span class="font-bold">No. HP/WhatsApp :</span>
                  <span>{{ user.phone }}</span>
                </div>
              </div>

              <div>
                <div class="flex flex-col">
                  <span class="font-bold">Jenis Kelamin :</span>
                  <span>{{ user.gender }}</span>
                </div>

                <div class="flex flex-col py-1">
                  <span class="font-bold">Tanggal Lahir</span>
                  <span>{{ user.birthdate }}</span>
                </div>

                <div class="flex flex-col py-1">
                  <span class="font-bold">Jabatan : </span>
                  <span>{{ user.role }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </v-container>
</template>

<script>
export default {
  name: "ProfilePage",  
  data() {
    return {
      user: {
        profile: null,
        name: null,
        email: null,
        phone: null,
        gender: null,
        birthdate: null,
        role: null,
      },
    };
  },
  mounted() {
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
        this.user.gender = gender === "m" ? "Pria" : "Perempuan";
        this.user.birthdate = birthdate;
        this.user.role = role;

        this.user.profile = name
          .split(" ")
          .map((word) => word[0])
          .join("");
        // console.log(response.data)
      });
  },
};
</script>