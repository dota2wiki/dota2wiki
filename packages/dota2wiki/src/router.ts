import Vue from 'vue';
import VueRouter from 'vue-router';
import views from 'dota2wiki/src/views';

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
      component: views,
      children: [
        {
          path: '',
          name: 'home',
          component: async () =>
            import(/* webpackChunkName: "view-home" */ '@src/views/home'),
        },
        {
          path: 'heroes',
          name: 'heroes',
          component: async () =>
            import(/* webpackChunkName: "view-heroes" */ '@src/views/hero/heroes'),
        },
        {
          path: 'hero/:heroName',
          name: 'hero',
          component: async () =>
            import(/* webpackChunkName: "view-hero" */ '@src/views/hero/hero'),
        },
        {
          path: 'hero/:heroName/ability/:abilityName',
          name: 'hero',
          component: async () =>
            import(/* webpackChunkName: "view-ability" */ '@src/views/hero/ability'),
        },
        {
          path: 'items',
          name: 'items',
          component: async () =>
            import(/* webpackChunkName: "view-items" */ '@src/views/item/items'),
        },
        {
          path: 'item/:name',
          name: 'item',
          component: async () =>
            import(/* webpackChunkName: "view-item" */ '@src/views/item/item'),
        },
      ],
    },
  ],
});
