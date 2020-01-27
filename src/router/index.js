import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Countries from '../views/countries/Countries.vue'
import CreateCountry from '../views/countries/CreateCountry.vue'
import EditCountry from '../views/countries/EditCountry.vue'
import CountryLayout from '../views/countries/CountryLayout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/countries/:id',
    name: 'country-layout',
    component: CountryLayout,
    children: [
      {
        path: 'edit',
        name: 'edit-country',
        component: EditCountry
      }
    ]
  },
  {
    path: '/countries/create',
    name: 'create-country',
    component: CreateCountry
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
