import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import AdminView from '@/views/AdminView.vue';
import PartnerView from '@/views/PartnerView.vue';
import StudentView from '@/views/StudentView.vue';
import RegisterView from '@/views/RegisterView.vue';
import LoginView from '@/views/LoginView.vue';

import { firebaseAuth } from "../firebaseInit.js";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
    meta: {
      guest: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      guest: true
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView,
    meta: {
      auth: true
    }
  },
  {
    path: '/partner',
    name: 'partner',
    component: PartnerView,
    meta: {
      auth: true
    }
  },
  {
    path: '/student',
    name: 'student',
    component: StudentView,
    meta: {
      auth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach((to, from, next) => {
  firebaseAuth.onAuthStateChanged(userAuth => {
    if (userAuth) {
      firebaseAuth.currentUser.getIdTokenResult()
        .then(function ({ claims }) {
          if (claims.student) {
            if (to.path.includes('/student') == true) return next()
            else {
              return next({ path: '/student' })
            }
          } else if (claims.admin) {
            if (to.path.includes('/admin') == true) return next()
            else {
              return next({ path: '/admin' })
            }
          }
        })
    } else {
      if (to.matched.some(record => record.meta.auth)) {
        next({
          path: '/',
          query: {
            redirect: to.fullPath
          }
        })
      } else {
        next()
      }
    }
  })
})

export default router