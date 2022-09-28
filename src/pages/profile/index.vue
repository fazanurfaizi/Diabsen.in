<template>
  <Layout>
    <base-content>
      <template #title>Profile</template>
      <template #content>
        <ProfileLayout>
          <template #profile-side>
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
                  <TheEditButton />
                </div>
              </div>
            </div>
          </template>

          <template #content-profile>
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
          </template>
        </ProfileLayout>
      </template>
    </base-content>
  </Layout>
</template>

<script>
import BaseContent from "@/layouts/BaseContent.vue";
import ProfileLayout from "@/pages/profile/layouts/ProfileLayout.vue";
import TheEditButton from "@/pages/profile/components/TheEditButton.vue";

export default {
  name: "ProfilePage",
  components: { BaseContent, ProfileLayout, TheEditButton },
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