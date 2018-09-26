import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Works from '@/views/works'
import Sign from '@/views/sign'
import Share from '@/views/share'
import SubmitSuccess from '@/views/submit-success'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/works',
      name: 'works',
      component: Works
    },
    {
      path: '/sign',
      name: 'sign',
      component: Sign
    },
    {
      path: '/share',
      name: 'share',
      component: Share
    },
    {
      path: '/submit-success',
      name: 'submit-success',
      component: SubmitSuccess
    }
  ]
})
