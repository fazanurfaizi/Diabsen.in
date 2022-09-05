import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'; 
import router from './router'
import Icon from '@/components/Icon.vue'
import BaseLayout from '@/layouts/BaseLayout.vue'
import BaseContent from '@/layouts/BaseContent.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App)
    .use(router)
    .use(VueAxios, axios)
    .component('Icon', Icon)
    .component('Layout', BaseLayout)
    .component('Content', BaseContent)
    .mount('#app')