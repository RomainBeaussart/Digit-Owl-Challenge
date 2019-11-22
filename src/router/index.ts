import Vue from 'vue';
import Router from 'vue-router';
import Index from '../views/Index.vue'
import Home from '../views/Home.vue';
import Menu from '../views/Menu.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
        path: '/',
        component: Index,
        children: [
          { path: '/', name: 'home', component: Home },
          { path: '/menu/:id', name: 'menu', component: Menu }
        ]
    },
],
});

export default router;
