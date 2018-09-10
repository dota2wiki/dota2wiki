/**
 * Database base on DOTA2 built-in data, for dota2wiki
 */

export * from './models/hero';
export * from './models/ability';

import { Hero, HeroGroup, Attribute } from './models/hero';
import { Ability } from './models/ability';

import heroes from './db/heroes';
import abilities from './db/abilities';

export interface Database {
  readonly heroMap: Readonly<Record<string, Hero>>;
  readonly heroList: ReadonlyArray<Hero>;
  readonly heroNames: ReadonlyArray<string>;
  readonly heroGroups: ReadonlyArray<HeroGroup>;

  readonly abilityMap: Readonly<Record<string, Ability>>;
  readonly abilityList: ReadonlyArray<Ability>;
  readonly abilityNames: ReadonlyArray<string>;
}

const compareId: (a: { id: number }, b: { id: number }) => number = (a, b) => a.id - b.id;

export const heroMap: Readonly<Record<string, Hero>> = heroes;
export const heroList: Hero[] = Object.values(heroMap).sort(compareId);
export const heroNames: string[] = heroList.map(h => h.name);
export const heroGroups: HeroGroup[] = [
  Attribute.strength,
  Attribute.agility,
  Attribute.intelligence,
].map(primary => ({
  primary: Attribute[primary],
  heroes: heroList.filter(h => h.attributes.primary === primary),
}));

export const abilityMap: Readonly<Record<string, Ability>> = abilities;
export const abilityList: Ability[] = Object.values(abilityMap).sort(compareId);
export const abilityNames: string[] = abilityList.map(a => a.name);

const db: Database = {
  heroMap,
  heroList,
  heroNames,
  heroGroups,

  abilityMap,
  abilityList,
  abilityNames,
};

import Vue, { PluginFunction } from 'vue';

declare module 'vue/types/vue' {
  interface Vue {
    $db: Database;
  }
}

let $$Vue: typeof Vue | undefined;

const install: PluginFunction<undefined> = $Vue => {
  if ($$Vue && $$Vue === $Vue) {
    return;
  }

  $$Vue = $Vue;

  $Vue.prototype.$db = db;
};

export default install;
