import Vue from 'vue';
import VueRouter from 'vue-router';
import VIndex from 'dota2wiki/src/views';

Vue.use(VueRouter);

/**
 * Router
 */
export default new VueRouter({
  mode: 'history',
  base: 'wiki',
  routes: [
    {
      path: '/',
      redirect: '/schinese',
    },
    {
      path: '/:language',
      component: VIndex,
      children: [
        {
          path: '',
          name: 'home',
          component: async () => import('@src/views/home'),
        },
        {
          path: 'heroes',
          name: 'heroes',
          component: async () => import('@src/views/heroes'),
        },
        {
          path: 'hero/:name',
          name: 'hero',
          component: async () => import('@src/views/hero'),
        },
        {
          path: 'items',
          name: 'items',
          component: async () => import('@src/views/items'),
        },
        {
          path: 'item/:name',
          name: 'item',
          component: async () => import('@src/views/item'),
        },
      ],
    },
  ],
});
