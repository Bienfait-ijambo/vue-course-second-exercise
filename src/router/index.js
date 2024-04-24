import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/post/HomePage.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('../views/post/PostPage.vue')
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/post/AboutPage.vue')
        },
        {
          path: '/post/:id',
          name: 'single-post',
          component: () => import('../views/post/SinglePostPage.vue')
        }
      ]
    }
  ]
})

export default router
