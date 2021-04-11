import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home.vue'
import AmenagementExterieur from '../views/amenagementExterieur.vue'
import Faience from '../views/faience.vue'
import AvisClients from '../views/avisClients.vue'
import IsolationPlatrerie from '../views/isolationPlatrerie.vue'
import Photos from '../views/photos.vue'
import SalleBains from '../views/salleBains.vue'
import BétonCire from '../views/solsDecoration/bétonCire.vue'
import BetonPoli from '../views/solsDecoration/betonPolie.vue'

import Appareil from '../views/appareil.vue'


Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/amenagementExterieur',
    name: 'amenagementExterieur',
    component:AmenagementExterieur
  },
  {
    path:'/faience',
    name:'faience',
    component:Faience
  },
  {
    path:'/avisClients',
    name:'avisClients',
    component:AvisClients
  },
  {
    path:'/isolationPlatrerie',
    name:'isolationPlatrerie',
    component:IsolationPlatrerie
  },
  {
    path:'/photos',
    name:'phoros',
    component:Photos
  },
  {
    path:'/salleBains',
    name:'salleBains',
    component:SalleBains
  },
  {
    path:'/betonPoli',
    name:'betonPoli',
    component:BetonPoli
  },
  {
    path:'/bétonCire',
    name:'bétonCire',
    component:  BétonCire

  },
  {
    path:'/appareil',
    name:'appareil',
    component:Appareil
  }
]

const router = new Router({
  routes
})

export default router
