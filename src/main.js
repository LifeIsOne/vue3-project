// Bootstrap += icons
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons'
import 'bootstrap/dist/js/bootstrap.js'
import router from './router'
import globalDirectives from '@/plugins/global-directives'
import dayjs from '@/plugins/dayjs' // dayjs - 날짜 포매팅
import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(router).mount('#app')
app.use(globalDirectives)
app.use(dayjs)
app.use(createPinia())
