import Vue from 'vue';
import VueRouter from 'vue-router';
import views from 'dota2wiki/src/views';
import { platform } from '@src/utils/env';

Vue.use(VueRouter);

/**
 * Router factory
 */
export default function createRouter(): VueRouter {
  return new VueRouter({
    mode: platform === 'huiji' ? 'hash' : 'history',
    base: platform === 'huiji' ? undefined : 'wiki',
    routes: [
      {
        path: '/:language',
        component: views,
        children: [
          {
            path: '',
            name: 'home',
            meta: {
              group: 'home',
            },
            component: async () =>
              import(/* webpackChunkName: "view-home" */ '@src/views/home'),
          },
          {
            path: 'heroes',
            name: 'heroes',
            meta: {
              group: 'heroes',
            },
            component: async () =>
              import(/* webpackChunkName: "view-heroes" */ '@src/views/hero/heroes'),
          },
          {
            path: 'hero/:heroName',
            meta: {
              group: 'hero',
            },
            component: async () =>
              import(/* webpackChunkName: "view-hero" */ '@src/views/hero/hero'),
            children: [
              {
                path: '',
                name: 'hero-dashboard',
                component: async () =>
                  import(/* webpackChunkName: "view-hero-dashboard" */ '@src/views/hero/dashboard'),
              },
              {
                path: 'ability/:abilityName',
                name: 'hero-ability',
                component: async () =>
                  import(/* webpackChunkName: "view-hero-ability" */ '@src/views/hero/ability'),
              },
            ],
          },
          {
            path: 'items',
            name: 'items',
            meta: {
              group: 'items',
            },
            component: async () =>
              import(/* webpackChunkName: "view-items" */ '@src/views/item/items'),
          },
          {
            path: 'item/:itemName',
            name: 'item',
            meta: {
              group: 'item',
            },
            component: async () =>
              import(/* webpackChunkName: "view-item" */ '@src/views/item/item'),
          },
        ],
      },
      {
        path: '*',
        redirect: '/schinese',
      },
    ],
  });
}
