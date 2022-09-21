<template>
  <layout>
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
                border border-[#CBD5E0]
                lg:h-[515px] lg:w-[12.5rem]
              "
            >
              <ProfilePanel :user="user">
                <ProfileNav />
              </ProfilePanel>
            </div>
          </template>

          <template #content-profile>
            <div
              class="
                gap-[12px]
                p-[20px]
                bg-white
                rounded-[4px]
                border border-[#CBD5E0]
                w-full
              "
            >
              <slot></slot>
            </div>
          </template>
        </ProfileLayout>
      </template>
    </base-content>
  </layout>
</template>

<script>
import BaseContent from "@/layouts/BaseContent.vue";
import ProfileLayout from "@/pages/profile/layouts/ProfileLayout.vue";
import ProfilePanel from "@/pages/profile/layouts/ProfilePanel.vue";
import ProfileNav from "./ProfileNav.vue";
import Cookies from "js-cookie";

export default {
  name: "EditLayout",
  components: { BaseContent, ProfileLayout, ProfilePanel, ProfileNav },
  data() {
    return {
      user: {
        name: null,
        role: null,
      },
    };
  },
  methods: {
    getProfile() {
      const token = Cookies.get("access_token");
      this.axios
        .get(`${process.env.VUE_APP_API_URL_AUTH}/user/profile`, {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        })
        .then((response) => {
          const { name, role } = response.data;

          this.user.name = name;
          this.user.role = role;

          this.user.profile = name
            .split(" ")
            .map((word) => word[0])
            .join("");
        });
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.getProfile();
    });
  },
};
</script>