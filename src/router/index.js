import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import BoardCreateView from '@/views/boards/BoardCreateView.vue'
import BoardDetailView from '@/views/boards/BoardDetailView.vue'
import BoardEditView from '@/views/boards/BoardEditView.vue'
import BoardListView from '@/views/boards/BoardListView.vue'
import NotFoundView from '@/views/errors/NotFoundView.vue'
import NestedView from '@/views/nested/NestedView.vue'
import NestedOneView from '@/views/nested/NestedOneView.vue'
import NestedTwoView from '@/views/nested/NestedTwoView.vue'

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
    path: '/boards/:boardId',
    name: 'BoardDetail',
    component: BoardDetailView,
  },
  {
    path: '/boards/:boardId/edit',
    name: 'BoardEdit',
    component: BoardEditView,
  },
  // Error Page Route
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFont',
    component: NotFoundView,
  },
  // 중첩 컴포넌트
  {
    path: '/nested',
    name: 'Nested',
    component: NestedView,
    children: [
      {
        path: 'one',
        name: 'NestedOne',
        component: NestedOneView,
      },
      {
        path: 'two',
        name: 'NestedTwo',
        component: NestedTwoView,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

export default router
