<template>
  <ul class="relative" v-if="typeof data.child !== 'undefined'">
    <li class="relative" id="sidenavEx1">
      <a
        @click.prevent="open = !open"
        :class="
          isActive
            ? 'bg-secondary text-white hover:bg-secondary'
            : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
        "
        class="
          flex
          items-center
          text-md
          py-[10px]
          pl-[12px]
          pr-[2px]
          overflow-hidden
          text-ellipsis
          whitespace-nowrap
          rounded-md
          transition
          duration-300
          ease-in-out
          cursor-pointer
        "
        data-mdb-ripple="true"
        data-mdb-ripple-color="dark"
        data-bs-toggle="collapse"
        data-bs-target="#collapseSidenavEx1"
        aria-expanded="true"
        aria-controls="collapseSidenavEx1"
      >
        <Icon
          :name="data.icon"
          set="teamui"
          class="h-[20px] w-[20px] mr-[4px]"
        />
        <span>{{ data.name }}</span>
        <Icon
          :name="open ? 'chevron-down' : 'chevron-left'"
          class="h-4 w-4 ml-auto"
        />
      </a>

      <ul
        v-show="open"
        class="relative accordion-collapse collapse"
        id="collapseSidenavEx1"
        aria-labelledby="sidenavEx1"
        data-bs-parent="#sidenavExample"
      >
        <li class="relative" v-for="item in data.child" :key="item">
          <router-link
            :to="item.path"
            :class="item.path === link ? 'underline' : ''"
            class="
              flex
              items-center
              py-[10px]
              pl-[12px]
              pr-[2px]
              overflow-hidden
              text-gray-700 text-ellipsis
              whitespace-nowrap
              rounded-md
              hover:text-gray-900 hover:bg-gray-100
              transition
              duration-300
              ease-in-out
            "
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            <Icon
              name="circle"
              set="teamui"
              class="h-[10px] w-[10px] ml-[6px] mr-[8px]"
            />
            <span>
              {{ item.name }}
            </span>
          </router-link>
        </li>
      </ul>
    </li>
  </ul>
  <ul class="relative" v-else>
    <li class="relative" id="sidenavEx1">
      <router-link
        :to="data.path"
        class="
          flex
          items-center
          text-md
          py-[10px]
          pl-[12px]
          pr-[2px]
          overflow-hidden
          text-ellipsis
          whitespace-nowrap
          rounded-md
          transition
          duration-300
          ease-in-out
          cursor-pointer
        "
        data-mdb-ripple="true"
        data-mdb-ripple-color="dark"
        data-bs-toggle="collapse"
        data-bs-target="#collapseSidenavEx1"
        aria-expanded="true"
        aria-controls="collapseSidenavEx1"
      >
        <Icon
          :name="data.icon"
          set="teamui"
          class="h-[20px] w-[20px] mr-[4px]"
        />
        <span>{{ data.name }}</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "MenuComponent",
  data() {
    return {
      open: false,
      path: "",
      isActive: false,
      link: null,
    };
  },
  props: {
    data: {
      type: Object,
    },
  },
  methods: {
    setActive() {
      this.link = this.$route.path;
      if (typeof this.data.child !== "undefined") {
        const listLink = this.data.child.filter((item) => {
          if (item.path === this.$route.path) {
            return item;
          }
        });
        if (listLink.length > 0) {
          this.open = true;
          this.isActive = true;
        }
      } else {
        if (this.$route.path === this.data.path) {
          this.isActive = true;
        }
      }
    },
  },
  created() {
    this.setActive();
  },
};
</script>