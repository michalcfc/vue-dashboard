import { createWebHistory, createRouter } from 'vue-router';

import Login from '@/views/Login.vue';

import Home from '@/views/Home.vue';
import Chat from '@/views/Chat.vue';
import Blog from '@/views/Blog.vue';
import Pricing from '@/views/Pricing.vue';
import ComponentsUI from '@/views/ComponentsUI.vue';

import LayoutB from '@/layouts/LayoutB/LayoutB.vue';
import LayoutDefault from '@/layouts/LayoutDefault/LayoutDefault.vue';

const routes = [
  {
    path: '/',
    component: LayoutDefault,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home,
      },
      {
        path: 'chat',
        name: 'Chat',
        component: Chat,
      },
      {
        path: 'components-ui',
        name: 'Components',
        component: ComponentsUI,
      },
      {
        path: 'pricing',
        name: 'Pricing',
        component: Pricing,
      },
      {
        path: 'blog',
        name: 'Blog',
        component: Blog,
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { layout: LayoutB },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
