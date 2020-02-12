import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../pages/home/Home')
const Profile = () => import('../pages/Profile/Profile')
const Category = () => import('../pages/Category/Category')
const Cart = () => import('../pages/Cart/Cart')

Vue.use(Router)

const routes = [
  { path: '/home',
    component: Home
  },
  { path: '/profile',
    component: Profile
  },
  { path: '/category',
    component: Category
  },
  { path: '/cart',
    component: Cart
  }
]

export default new Router({
    routes,
    mode: 'history'
})
