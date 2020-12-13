import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import MyOffers from '../views/MyOffers.vue'
import Contacts from '../views/Contacts.vue'
import GoogleAuth from '../views/GoogleAuth.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/my-offers',
    name: 'MyOffers',
    component: MyOffers,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  },
  {
    path: '/google-auth',
    name: 'GoogleAuth',
    component: GoogleAuth
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(routeModel => routeModel.meta.requiresAuth)
  const auth = store.getters.checkUser
  if (requiresAuth && !auth) {
    next({name: 'GoogleAuth'})
  } else {
    next()
  }
})

export default router
