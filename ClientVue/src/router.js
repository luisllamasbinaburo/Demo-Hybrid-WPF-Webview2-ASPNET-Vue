import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/home.vue';
import About from './views/about.vue';
import SignalR from './views/signalr.vue';
import Fetch from './views/fetch.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/fetch', component: Fetch },
  { path: '/signalr', component: SignalR },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;