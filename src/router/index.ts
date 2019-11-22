import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Menu from '../views/Menu.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/menu/:id', name: 'menu', component: Menu },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
