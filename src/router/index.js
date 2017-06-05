import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import internet from '@/components/internet'
import iso from '@/components/iso'
import test from '@/components/test'
import upload from '@/components/upload'
import setup from '@/components/setup'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      meta: {title: ' '},
      component: index
    },
    {
      path: '/internet',
      meta: {title: 'shangwangfs'},
      name:'internet',
      component: internet
    },
    {
      path: '/iso',
      meta: {title: 'xxxx'},
      component: iso
    },
    {
      path: '/test',
      meta: {title: 'xxxx'},
      component: test
    },
    {
      path: '/upload',
      meta: {title: 'xxxx'},
      component: upload
    },
    {
      path: '/setup',
      meta: {title: 'xxxx'},
      component: setup
    },
  ]
})

export default router
