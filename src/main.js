// Bootstrap += icons
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons'
import 'bootstrap/dist/js/bootstrap.js'
import router from './router'
import globalDirectives from '@/plugins/global-directives'
// dayjs - 날짜 포매팅
import dayjs from '@/plugins/dayjs'
// import globalComponent from './plugins/global-component'
// import focus from '@/directives/focus'

import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.use(router).mount('#app')
app.use(globalDirectives)
app.use(dayjs)
// app.directive('focus', focus)
// app.use(globalComponent)

// console.log('MODE : ', import.meta.env.MODE)
// console.log('BASE_URL : ', import.meta.env.BASE_URL)
// console.log('PROD : ', import.meta.env.PROD)
// console.log('DEV  : ', import.meta.env.DEV)
// console.log('VITE_APP_API_URL : ', import.meta.env.VITE_APP_API_URL)
