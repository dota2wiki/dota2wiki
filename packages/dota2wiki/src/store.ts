import Vue from 'vue';
import Vuex, { Store } from 'vuex';

Vue.use(Vuex);

/**
 * Store factory
 */
export default function createStore(): Store<{}> {
  return new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
  });
}
