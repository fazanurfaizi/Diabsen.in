import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'; 
import router from './router'
import Icon from '@/components/Icon.vue'
import BaseLayout from '@/layouts/BaseLayout.vue'

createApp(App)
    .use(router)
    .component('Icon', Icon)
    .component('Layout', BaseLayout)
    .mount('#app')