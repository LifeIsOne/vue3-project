import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import BoardCreateView from '@/views/boards/BoardCreateView.vue'
import BoardDetailView from '@/views/boards/BoardDetailView.vue'
import BoardEditView from '@/views/boards/BoardEditView.vue'
import BoardListView from '@/views/boards/BoardListView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/boards',
    name: 'BoardList',
    component: BoardListView,
  },
  {
    path: '/boards/create',
    name: 'BoardCreate',
    component: BoardCreateView,
  },
  {
    path: '/boards/:id',
    name: 'BoardDetail',
    component: BoardDetailView,
  },
  {
    path: '/boards/:id/edit',
    naem: 'BoardEdit',
    component: BoardEditView,
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

export default router
