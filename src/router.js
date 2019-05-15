import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/candidates',
      name: 'candidates',
      component: () => import('./views/Candidates.vue')
    },
    {
      path: '/candidates/:id',
      name: 'candidate',
      props: true,
      component: () => import('./views/Candidate.vue')
    },
    {
      path: '/interviewers',
      name: 'interviewers',
      component: () => import('./views/Interviewers.vue')
    },
    {
      path: '/interviewers/:id',
      name: 'interviewer',
      props: true,
      component: () => import('./views/Interviewer.vue')
    }
  ]
})
