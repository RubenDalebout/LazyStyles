import { createRouter, createWebHistory } from 'vue-router'
import Frontpage from '../views/frontpage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Frontpage
    },
  ]
});

router.afterEach((to, from) => {
  document.title = 'LazyStyles · ' + to.name;
  // Use next tick to handle router history correctly
});
export default router
