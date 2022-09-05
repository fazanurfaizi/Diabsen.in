<template>
    <svg v-if="name === 'show'" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.757 10.962C22.231 11.582 22.231 12.419 21.757 13.038C20.264 14.987 16.682 19 12.5 19C8.31801 19 4.73601 14.987 3.24301 13.038C3.01239 12.7411 2.88721 12.3759 2.88721 12C2.88721 11.6241 3.01239 11.2589 3.24301 10.962C4.73601 9.013 8.31801 5 12.5 5C16.682 5 20.264 9.013 21.757 10.962V10.962Z" stroke="#4A1DFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12.5 15C14.1569 15 15.5 13.6569 15.5 12C15.5 10.3431 14.1569 9 12.5 9C10.8431 9 9.5 10.3431 9.5 12C9.5 13.6569 10.8431 15 12.5 15Z" stroke="#4A1DFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <svg v-else-if="name === 'create'" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.49878 17.25V21H7.24878L18.3088 9.94L14.5588 6.19L3.49878 17.25ZM6.41878 19H5.49878V18.08L14.5588 9.02L15.4788 9.94L6.41878 19ZM21.2088 5.63L18.8688 3.29C18.6688 3.09 18.4188 3 18.1588 3C17.8988 3 17.6488 3.1 17.4588 3.29L15.6288 5.12L19.3788 8.87L21.2088 7.04C21.5988 6.65 21.5988 6.02 21.2088 5.63Z" fill="#4A1DFF"/>
    </svg>
    <svg v-else-if="name === 'delete'" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.5 9V19H8.5V9H16.5ZM15 3H10L9 4H5.5V6H19.5V4H16L15 3ZM18.5 7H6.5V19C6.5 20.1 7.4 21 8.5 21H16.5C17.6 21 18.5 20.1 18.5 19V7Z" fill="#D11A2A"/>
    </svg>
</template>
<script>
  export default {
    name: "teamUI",
    props: {
      name: {
        type: String,
        required: true
      },
    }
  };
</script>