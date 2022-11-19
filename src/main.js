import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css';
import router from './router'
import Icon from '@/components/Icon.vue'
import Container from '@/components/layout/container/index.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store/index'
import { setupAxiosInterceptors } from './core/services/api.service';

setupAxiosInterceptors(store)

// axios config
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    return Promise.reject(error);
});

createApp(App)
    .use(router)
    .use(store)
    .use(VueAxios, axios)
    .component('Icon', Icon)    
    .component('v-container', Container)
    .mount('#app')