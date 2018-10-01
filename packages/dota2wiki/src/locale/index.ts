import Vue from 'vue';
import VueLocale, { AsyncDict } from '@huiji/vue-locale';
import axios from 'axios';
import JSON5 from 'json5';
import { dota } from '@dota2wiki/i18n';
import { isProduction, baseUrl } from '../utils/env';

function transformResponse(raw: string): Record<string, string> {
  return JSON5.parse(raw);
}

const dicts: Record<string, AsyncDict> = {};
Object.entries(dota).forEach(([language, hash]) => {
  dicts[language] = async () => {
    const url: string = `${baseUrl}static/i18n/dota/${language}${
      isProduction ? `.${hash}` : ''
    }.json`;
    const { data: dict } = await axios.get<Record<string, string>>(url, {
      timeout: 5000,
      transformResponse,
    });

    return dict;
  };
});

Vue.use(VueLocale);

/**
 * Locale factory
 * The main localization for dota2wiki
 */
export default function createLocale(): VueLocale {
  return new VueLocale({
    dicts,
  });
}
