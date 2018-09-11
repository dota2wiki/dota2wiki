import Vue from 'vue';
import VueLocale from '@huiji/vue-locale';
import { allLanguages } from '@dota2wiki/i18n';

Vue.use(VueLocale);

/**
 * The main localization for dota2wiki
 */
export const dotaLocale: VueLocale = new VueLocale({
  dicts: {
    en: async () => import('@dota2wiki/i18n/dist/esm/dota/english'),
    schinese: async () => import('@dota2wiki/i18n/dist/esm/dota/schinese'),
    tchinese: async () => import('@dota2wiki/i18n/dist/esm/dota/tchinese'),
    japanese: async () => import('@dota2wiki/i18n/dist/esm/dota/japanese'),
  },
});
