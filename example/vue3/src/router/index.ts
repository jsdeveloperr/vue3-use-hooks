import { createRouter, createWebHistory } from 'vue-router';

const useModalComponent = () => import('../components/useModal.vue');
const useStateComponent = () => import('../components/useState.vue');
const useEmbedComponent = () => import('../components/useEmbed.vue');
const useStringCaseComponent = () => import('../components/useStringCase.vue');
const useLocalStorageComponent = () => import('../components/useLocalStorage.vue');

const routes = [
  {
    path: '/',
    name: 'useStringCase',
    component: useStringCaseComponent
  },
  {
    path: '/use-local-storage-hook',
    name: 'useLocalStorage',
    component: useLocalStorageComponent
  },
  {
    path: '/use-state-hook',
    name: 'useState',
    component: useStateComponent
  },
  {
    path: '/use-modal-hook',
    name: 'useModal',
    component: useModalComponent
  },
  {
    path: '/use-embed-hook',
    name: 'useEmbed',
    component: useEmbedComponent
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
