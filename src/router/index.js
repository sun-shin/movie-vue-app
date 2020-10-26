import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import MoviesIndex from '../views/MoviesIndex.vue';
import MoviesNew from '../views/MoviesNew.vue';
import MoviesShow from '../views/MoviesShow.vue';
import MoviesEdit from '../views/MoviesEdit.vue';
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  },
  {
    path: '/movies',
    name: 'movies-index',
    component: MoviesIndex
  },
  {
    path: '/movies/new',
    name: 'movies-new',
    component: MoviesNew
  },
  {
    path: '/movies/:id',
    name: 'movies-show',
    component: MoviesShow
  },
  {
    path: '/movies/:id',
    name: 'movies-edit',
    component: MoviesEdit
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
