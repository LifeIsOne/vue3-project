// Bootstrap += icons
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons'
import 'bootstrap/dist/js/bootstrap.js'
import router from './router'

import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(router).mount('#app')
