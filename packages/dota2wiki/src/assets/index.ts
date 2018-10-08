import Vue, { PluginFunction } from 'vue';
import all from '@assets-all';

let $$Vue: typeof Vue | undefined;

declare module 'vue/types/vue' {
  interface Vue {
    $resources: Record<string, string>;
  }
}

/**
 * All assets
 */
const assets: Record<string, string> = all;

const install: PluginFunction<undefined> = $Vue => {
  if ($$Vue && $$Vue === $Vue) {
    return;
  }

  $$Vue = $Vue;

  $Vue.prototype.$resources = assets;
};

export default install;
