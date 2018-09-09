import Vue from 'vue';
import VueLocale from '@huiji/vue-locale';
import { allLanguages } from '@dota2wiki/i18n';

Vue.use(VueLocale);

/**
 * The main localization for dota2wiki
 */
export const dotaLocale: VueLocale = new VueLocale({
  dicts: {
    en: async () => import('@dota2wiki/i18n/dist/dota/english'),
    schinese: async () => import('@dota2wiki/i18n/dist/dota/schinese'),
    tchinese: async () => import('@dota2wiki/i18n/dist/dota/tchinese'),
  },
});
