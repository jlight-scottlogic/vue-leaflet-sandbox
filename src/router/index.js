import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Countries from '../views/countries/Countries.vue'
import CreateCountry from '../views/countries/CreateCountry.vue'
import EditCountry from '../views/countries/EditCountry.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/countries/create',
    name: 'create-country',
    component: CreateCountry
  },
  {
    path: '/countries/edit/:id',
    name: 'edit-country',
    component: EditCountry
  },
  {
    path: '/countries',
    name: 'countries',
    component: Countries
  }
]

const router = new VueRouter({
  routes
})

export default router
