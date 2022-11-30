import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/style.css'
import router from './router'
import Icon from '@/components/Icon.vue'
import Container from '@/components/layout/container/index.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store/index'
import { setupAxiosInterceptors } from './core/services/api.service'
import { nprogress } from './core/modules/nprogress'
import { setupPwa } from './core/modules/pwa'
import { chartjs } from './core/modules/chartjs'

setupPwa(router)
nprogress(router)
setupAxiosInterceptors(store)
chartjs()

createApp(App)
	.use(router)
	.use(store)
	.use(VueAxios, axios)
	.component('Icon', Icon)
	.component('v-container', Container)
	.mount('#app')
