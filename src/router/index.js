import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Placeholder from '../components/Placeholder.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Home
  },
  {
    path: '/components/buttons',
    name: 'Buttons',
    component: ()=>import('../views/pages/Buttons.vue'),
    meta: {group: 'components'}
  },
  {
    path: '/components/forms',
    name: 'Forms',
    component: ()=>import('../views/pages/Forms.vue'),
    meta: {group: 'components'}
  },
  {
    path: '/components/tables',
    name: 'Tables',
    component: ()=>import('../views/pages/Tables.vue'),
    meta: {group: 'components'}
  },
  {
    path: '/components/tabs',
    name: 'Tabs',
    component: ()=>import('../views/pages/TabsPage.vue'),
    meta: {group: 'components'}
  },
  {
    path: '/components/notifications',
    name: 'Notifications',
    component: Placeholder,
    meta: {group: 'components'}
  },
  {
    path: '/pages/login',
    name: 'Login',
    component: Placeholder,
    meta: {group: 'pages'}
  },
  {
    path: '/pages/unauthorized',
    name: 'Unauthorized Access',
    component: Placeholder,
    meta: {group: 'pages'}
  },
  {
    path: '/pages/404',
    name: 'Not Found',
    component: Placeholder,
    meta: {group: 'pages'}
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
