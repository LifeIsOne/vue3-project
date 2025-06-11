// Bootstrap += icons
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons'
import 'bootstrap/dist/js/bootstrap.js'
import router from './router'

import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(router).mount('#app')

// console.log('MODE : ', import.meta.env.MODE)
// console.log('BASE_URL : ', import.meta.env.BASE_URL)
// console.log('PROD : ', import.meta.env.PROD)
// console.log('DEV  : ', import.meta.env.DEV)
// console.log('VITE_APP_API_URL : ', import.meta.env.VITE_APP_API_URL)
