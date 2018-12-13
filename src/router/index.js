import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import Home from '../components/home'
import SignIn from '../components/auth/signin'
import SignUp from '../components/auth/signup'
import Products from '../components/products'
import ProductCreate from '../components/products/create'

Vue.use(Router);

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next();
    return
  }
  next('/')
};

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next();
    return
  }
  next('/signin')
};

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn,
      beforeEnter: ifNotAuthenticated,
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp,
      beforeEnter: ifNotAuthenticated,
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/products/create',
      name: 'ProductCreate',
      component: ProductCreate,
      beforeEnter: ifAuthenticated
    }
  ],
})
