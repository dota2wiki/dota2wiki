// tslint:disable-next-line:no-import-side-effect
import '@src/main.scss';

import Vue from 'vue';

import VoidUI from 'void-ui';
Vue.use(VoidUI, {
  defaultTheme: 'dark',
});

import Resources from '@src/assets';
Vue.use(Resources);

import { installComponents } from '@src/utils/vue-utils';

import * as components from '@src/controls/all';
installComponents(Vue, components);

import { dotaLocale } from '@src/locale';
import router from './router';
import store from './store';
import VApp from '@src/views/app';

Vue.config.productionTip = false;

/**
 * App
 */
Promise.all([
  dotaLocale.selectLanguage('schinese'),
  import('@dota2wiki/database').then(({ default: database }) => Vue.use(database)),
])
  .then(() => {
    new Vue({
      locale: dotaLocale,
      router,
      store,
      render: h => h(VApp),
    }).$mount('#app');
  })
  .catch(console.error);
