import { createRouter, createWebHistory } from 'vue-router';

const useModalComponent = () => import('../components/useModal.vue')
const useStateComponent = () => import('../components/useState.vue');
const useStringCaseComponent = () => import('../components/useStringCase.vue');

const routes = [
  {
      path: '/use-state-hook',
      name: 'useState',
      component: useStateComponent,
  },
    {
        path: '/use-modal-hook',
        name: 'useModal',
        component: useModalComponent,
    },
    {
      path: '/use-string-case-hook',
      name: 'useStringCase',
      component: useStringCaseComponent,
  },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router