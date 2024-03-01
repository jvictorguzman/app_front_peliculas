import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import PaginaPrincipal from '../views/PaginaPrincipal.vue';

const routes: RouteRecordRaw[] = [{ path: '/', component: PaginaPrincipal }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
