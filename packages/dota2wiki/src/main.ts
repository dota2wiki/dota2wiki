// tslint:disable:no-import-side-effect
import '@src/main.scss';
import '@src/register-hooks';

import Vue from 'vue';

import VoidUI from 'void-ui';
Vue.use(VoidUI, {
  defaultTheme: 'dark',
});

import { installComponents } from '@src/utils/vue-utils';
import * as controls from '@src/controls/all';
import * as dataComponents from '@src/components/data/all';

import createLocale from '@src/locale';
import createRouter from '@src/router';
import createStore from '@src/store';

import VApp from '@src/app';
import VueLocale from '@huiji/vue-locale';
import VueRouter from 'vue-router';
import { Store } from 'vuex';

Vue.config.productionTip = false;

export interface AppWrapper {
  locale: VueLocale;
  router: VueRouter;
  store: Store<{}>;
  app: Vue;
}

/**
 * App factory
 */
async function createApp(): Promise<AppWrapper> {
  const locale: VueLocale = createLocale();
  const router: VueRouter = createRouter();
  const store: Store<{}> = createStore();

  await Promise.all([
    import(/* webpackChunkName: "assets" */ '@src/assets').then(({ default: assets }) =>
      Vue.use(assets),
    ),
    import(/* webpackChunkName: "database" */ '@dota2wiki/database').then(
      ({ default: database }) => Vue.use(database),
    ),
  ]);
  installComponents(Vue, controls);
  installComponents(Vue, dataComponents);

  const app: Vue = new Vue({
    locale,
    router,
    store,
    render: h => h(VApp),
  });

  return {
    locale,
    router,
    store,
    app,
  };
}

(async () => {
  const { locale, router, store, app } = await createApp();

  router.onReady(async () => {
    await locale.selectLanguage(router.currentRoute.params.language);

    app.$mount('#app');
  });
})();
