// tslint:disable-next-line:no-import-side-effect
import '@src/main.scss';

import Vue from 'vue';

import VoidUI from 'void-ui';
Vue.use(VoidUI, {
  defaultTheme: 'dark',
});

import { installComponents } from '@src/utils/vue-utils';

import * as components from '@src/controls/all';
installComponents(Vue, components);

import locale from '@src/locale';
import router from './router';
import store from './store';

import VApp from '@src/app';

Vue.config.productionTip = false;

/**
 * App
 */
Promise.all([
  locale.selectLanguage('schinese'),
  import(/* webpackChunkName: "assets" */ '@src/assets').then(({ default: assets }) =>
    Vue.use(assets),
  ),
  import(/* webpackChunkName: "database" */ '@dota2wiki/database').then(
    ({ default: database }) => Vue.use(database),
  ),
])
  .then(() => {
    new Vue({
      locale,
      router,
      store,
      render: h => h(VApp),
    }).$mount('#app');
  })
  .catch(console.error);
