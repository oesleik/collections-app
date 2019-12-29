import Vue from 'vue'
import VueRouter from 'vue-router'
import Collections from '../views/Collections.vue'
import PageNotFound from '../views/PageNotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/collections'
  },
  {
    path: '/collections',
    name: 'collections',
    component: Collections
  },
  {
    path: '/collections/:id',
    name: 'collection',
    component: () => import(/* webpackChunkName: "collection" */ '../views/Collection.vue')
  },
  {
    path: '/next',
    name: 'next',
    component: () => import(/* webpackChunkName: "next" */ '../views/Next.vue')
  },
  {
    path: '/recent',
    name: 'recent',
    component: () => import(/* webpackChunkName: "recent" */ '../views/Recent.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import(/* webpackChunkName: "settings" */ '../views/Settings.vue')
  },
  {
    path: '*',
    component: PageNotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
