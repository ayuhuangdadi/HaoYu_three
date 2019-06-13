import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import top from '@/project/Head-navigation'
import client from '@/project/client'
import clientcss from '@/project/client.css'
import lxtwocss from '@/project/lxtwo.css'
import indexcss from '@/project/index.css'
import lxtwo from '@/project/lxtwo'
import index from '@/project/index'
import indcss from '@/project/index.css'
import lxone from '@/project/lxone.vue'
import lxonecss from '@/project/lxone.css'
import app from '@/project/app'
import qianzhuleft from '@/project/read/qianzhuleft'
import qzbody from '@/project/read/qzbody'
import error from '@/project/error/error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'qianzhuleft',
      component: qianzhuleft
    },
    {
      path: '/error',
      name: 'error',
      component: error
    },
    {
      path: '/',
      name: 'lxtwo',
      component: lxtwo
    },
    {
      path: '/client',
      name: 'client',
      component: client
    },
    {
      path: '/lxone',
      name: 'lxone',
      component: lxone
    },
    {
      path: '/qzbody',
      name: 'qzbody',
      component: qzbody
    },
    {
      path: '/index',
      name: 'index',
      component: index
    }
  ]
})
