import Vue from 'vue';
import router from './router';
import store from './store';
import VApp from '@src/views/app';

Vue.config.productionTip = false;

/**
 * App
 */
new Vue({
  router,
  store,
  render: h => h(VApp),
}).$mount('#app');
