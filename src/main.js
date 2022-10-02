import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'; 
import router from './router'
import Icon from '@/components/Icon.vue'
import BaseLayout from '@/layouts/BaseLayout.vue'
import BaseContent from '@/layouts/BaseContent.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store/index'

// axios config
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.interceptors.request.use(function (config) {
    console.log("kalau sukses");
    console.log(config);
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    console.log("kalau error");
    return Promise.reject(error);
});

createApp(App)
    .use(router)
    .use(store)
    .use(VueAxios, axios)
    .component('Icon', Icon)
    .component('Layout', BaseLayout)
    .component('Content', BaseContent)
    .mount('#app')