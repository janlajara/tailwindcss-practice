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
    meta: {group: 'Components'}
  },
  {
    path: '/components/forms',
    name: 'Forms',
    component: ()=>import('../views/pages/Forms.vue'),
    meta: {group: 'Components'}
  },
  {
    path: '/components/tables',
    name: 'Tables',
    component: ()=>import('../views/pages/Tables.vue'),
    meta: {group: 'Components'}
  },
  {
    path: '/components/tabs',
    name: 'Tabs',
    component: ()=>import('../views/pages/TabsPage.vue'),
    meta: {group: 'Components'}
  },
  {
    path: '/components/overlays',
    name: 'Overlays',
    component: ()=>import('../views/pages/Overlays.vue'),
    meta: {group: 'Components'}
  },
  {
    path: '/pages/login',
    name: 'Login',
    component: Placeholder,
    meta: {group: 'Pages'}
  },
  {
    path: '/pages/unauthorized',
    name: 'Unauthorized Access',
    component: Placeholder,
    meta: {group: 'Pages'}
  },
  {
    path: '/pages/404',
    name: 'Not Found',
    component: Placeholder,
    meta: {group: 'Pages'}
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
