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
    component: BoardListView,
  },
  {
    path: '/board/create',
    component: BoardCreateView,
  },
  {
    path: '/board/:id',
    component: BoardDetailView,
  },
  {
    path: '/board/:id/edit',
    component: BoardEditView,
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

export default router
