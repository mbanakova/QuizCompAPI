import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'quizlist',
      component: () => import('../views/QuizList.vue')
    },
    {
      path: '/quiz/:id',
      name: 'quiz',
      component: () => import('../views/QuizView.vue'),
      children: [
        {
          path: 'result',
          component: () => import('../views/ResultView.vue')
        }
      ]
    },
    {
      path: '/results',
      name: 'results',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ResultsView.vue')
    },
    {
      path: '/:catchall(.*)*',
      name: 'Not found',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

export default router
