// tslint:disable:no-import-side-effect
import '@src/main.scss';
import '@src/register-hooks';

import Vue from 'vue';

import VoidUI from 'void-ui';
Vue.use(VoidUI, {
  defaultTheme: 'dark',
});

import { installComponents } from '@src/utils/vue-utils';

import * as components from '@src/controls/all';
installComponents(Vue, components);

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
  load(language: string): Promise<void>;
}

/**
 * App factory
 */
function createApp(): AppWrapper {
  const locale: VueLocale = createLocale();
  const router: VueRouter = createRouter();
  const store: Store<{}> = createStore();

  const app: Vue = new Vue({
    locale,
    router,
    store,
    render: h => h(VApp),
  });

  const load: (language: string) => Promise<void> = async language => {
    await Promise.all([
      locale.selectLanguage(language),
      import(/* webpackChunkName: "assets" */ '@src/assets').then(({ default: assets }) =>
        Vue.use(assets),
      ),
      import(/* webpackChunkName: "database" */ '@dota2wiki/database').then(
        ({ default: database }) => Vue.use(database),
      ),
    ]);
  };

  return {
    locale,
    router,
    store,
    app,
    load,
  };
}

{
  const { locale, router, store, app, load } = createApp();

  router.onReady(async () => {
    await load(router.currentRoute.params.language);

    app.$mount('#app');
  });
}
