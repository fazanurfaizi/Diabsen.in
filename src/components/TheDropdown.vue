<template>
  <button id="dropdownDefault" data-dropdown-toggle="dropdown" class="outline outline-1 outline-gray-200 rounded-sm px-4 py-2.5 text-center inline-flex items-center" type="button">
    Dropdown button 
    <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
  <!-- Dropdown menu -->
  <div id="dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(0px, 381px);">
      <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
        <li>
          <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
        </li>
      </ul>
  </div>

</template>
  
<script>
export default {
  name: "TheDropdown",
  props: {
    action: Boolean,
    setColor: {
      type: String,
      default: "primary"
    },
  },
  computed: {
    getAction () {
      return this.action ? 'py-1 px-1' : 'py-2 px-4'
    },
    getColor () {
      let result;
      switch (this.setColor) {
        case "primary":
          result = "bg-btn-primary"
          break;
        case "warning":
          result = "bg-btn-warning"
          break;
        case "error":
          result = "bg-btn-error"
          break;        
        default:
          result = "bg-btn-primary"
          break;
      }
      return result
    },
  }
};
</script>