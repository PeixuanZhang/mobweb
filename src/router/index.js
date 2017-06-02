import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import internet from '@/components/internet'
import iso from '@/components/iso'
import test from '@/components/test'
import upload from '@/components/upload'
import setup from '@/components/setup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/internet',
      component: internet
    },
    {
      path: '/iso',
      component: iso
    },
    {
      path: '/test',
      component: test
    },
    {
      path: '/upload',
      component: upload
    },
    {
      path: '/setup',
      component: setup
    },
  ]
})
