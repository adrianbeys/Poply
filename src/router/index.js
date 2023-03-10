import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateAccountView from '../views/CreateAccountView.vue'
import ChatView from '../views/ChatView.vue'
import PostRegisterRedirect from '../views/PostRegisterRedirect.vue'

const routes = [
  {
    path: '/',
    alias: "/home",
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/create-account',
    name: 'create-account',
    component: CreateAccountView
  },
  {
    path: '/chat',
    name: 'chat',
    component: ChatView
  },
  {
    path: '/post-register',
    name: 'post-register',
    component: PostRegisterRedirect,
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
