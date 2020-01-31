import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Map from '../views/Map.vue'
import articleRoutes from './article-routes';
import countryRoutes from './country-routes';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/map',
    name: 'map',
    component: Map
  },
  ...countryRoutes,
  ...articleRoutes
];

const router = new VueRouter({
  routes
});

export default router
