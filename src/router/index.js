import { createRouter, createWebHashHistory } from 'vue-router'
import Admin from '../views/Admin.vue'

const routes = [
  {
    path: '/',
    name: 'Admin',
    component: Admin,
    children: [
      {
        path: '/',
        name: 'Home',
        component: ()=>import('../views/pages/Home.vue')
      },
      {
        path: 'components/buttons',
        name: 'Buttons',
        component: ()=>import('../views/pages/Buttons.vue'),
        meta: {group: 'Components'}
      },
      {
        path: 'components/forms',
        name: 'Forms',
        component: ()=>import('../views/pages/Forms.vue'),
        meta: {group: 'Components'}
      },
      {
        path: 'components/tables',
        name: 'Tables',
        component: ()=>import('../views/pages/Tables.vue'),
        meta: {group: 'Components'}
      },
      {
        path: 'components/tabs',
        name: 'Tabs',
        component: ()=>import('../views/pages/TabsPage.vue'),
        meta: {group: 'Components'}
      },
      {
        path: 'components/overlays',
        name: 'Overlays',
        component: ()=>import('../views/pages/Overlays.vue'),
        meta: {group: 'Components'}
      }
    ]
  },
  {
    path: '/pages/login',
    name: 'Login',
    component: ()=>import('../views/pages/Login.vue'),
    meta: {group: 'Pages'}
  },
  {
    path: '/pages/404',
    name: 'Not Found',
    component: ()=>import('../views/pages/NotFound.vue'),
    meta: {group: 'Pages'}
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
