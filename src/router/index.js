import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import BoardCreateView from '@/views/boards/BoardCreateView.vue'
import BoardDetailView from '@/views/boards/BoardDetailView.vue'
import BoardEditView from '@/views/boards/BoardEditView.vue'
import BoardListView from '@/views/boards/BoardListView.vue'
import NotFoundView from '@/views/errors/NotFoundView.vue'
import NestedView from '@/views/nested/NestedView.vue'
import NestedHomeView from '@/views/nested/NestedHomeView.vue'
import NestedOneView from '@/views/nested/NestedOneView.vue'
import NestedTwoView from '@/views/nested/NestedTwoView.vue'
// import LoginView from '@/views/boards/'

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
    props: true,
    // props: (route) => ({ boardId: parseInt(route.params.boardId) }),
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
        path: '',
        name: 'NestedHome',
        component: NestedHomeView,
      },
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
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: LoginView,
  // },
]

const router = createRouter({
  history: createWebHistory('/'),
  // history: createWebHashHistory('/'),
  routes,
})

export default router
