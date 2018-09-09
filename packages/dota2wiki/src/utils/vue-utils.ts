// tslint:disable:callable-types
import Vue, { VueConstructor } from 'vue';

export interface InstallComponents {
  <VC extends VueConstructor>($Vue: typeof Vue, constructors: Record<string, VC>): void;
}

/**
 * Install components
 */
export const installComponents: InstallComponents = ($Vue, components) => {
  Object.entries(components).forEach(([name, comp]) => $Vue.component(name, comp));
};
