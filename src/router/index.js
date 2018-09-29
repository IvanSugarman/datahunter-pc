import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Works from '@/views/works'
import Sign from '@/views/sign'
import Share from '@/views/share'
import SubmitSuccess from '@/views/submit-success'
import Submit from '@/views/submit'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/dataHunterPc/',
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
      path: '/share/:id',
      component: Share
    },
    {
      path: '/submit-success/:id',
      component: SubmitSuccess
    },
    {
      path: '/submit',
      name: 'submit',
      component: Submit
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }

    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
