/**
 * Database base on DOTA2 built-in data, for dota2wiki
 */

import Vue, { PluginFunction } from 'vue';

export * from './models/hero';
export * from './models/ability';
export * from './models/talent';
export * from './models/item';

import { Hero, HeroGroup, Attribute } from './models/hero';
import { Ability } from './models/ability';
import { Talent } from './models/talent';
import { Item, ItemGroup, ItemGroupMap } from './models/item';

import heroes from './db/heroes';
import abilities from './db/abilities';
import talents from './db/talents';
import items from './db/items';
import shops from './db/shops';

let $$Vue: typeof Vue | undefined;

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
export const abilityList: ReadonlyArray<Ability> = Object.values(abilityMap).sort(
  compareId,
);
export const abilityNames: ReadonlyArray<string> = abilityList.map(a => a.name);

export const talentMap: Readonly<Record<string, Talent>> = talents;
export const talentList: ReadonlyArray<Talent> = Object.values(talentMap).sort(compareId);
export const talentNames: ReadonlyArray<string> = talentList.map(t => t.name);

export const itemMap: Readonly<Record<string, Item>> = items;
export const itemList: ReadonlyArray<Item> = Object.values(itemMap).sort(compareId);
export const itemNames: ReadonlyArray<string> = itemList.map(t => t.name);

const categoriesBasics: (keyof typeof shops)[] = [
  'consumables',
  'attributes',
  'weapons_armor',
  'misc',
  'secretshop',
];
const categoriesUpgrades: (keyof typeof shops)[] = [
  'basics',
  'support',
  'defense',
  'magics',
  'weapons',
  'artifacts',
];

const itemsInShops: string[] = [];
function itemReduce(group: Item[], name: string): Item[] {
  if (!itemMap[name].info.isObsolete) {
    itemsInShops.push(name);
    group.push(itemMap[name]);
  }

  return group;
}

const basics: ItemGroup[] = categoriesBasics.map(category => ({
  category,
  items: shops[category].reduce<Item[]>(itemReduce, []),
}));
const upgrades: ItemGroup[] = categoriesUpgrades.map(category => ({
  category,
  items: shops[category].reduce<Item[]>(itemReduce, []),
}));
const recipes: Item[] = itemList.filter(
  item => item.info.isRecipe && !item.info.isObsolete,
);
const obsolete: Item[] = itemList.filter(item => item.info.isObsolete);

export const itemGroupMap: ItemGroupMap = {
  basics,
  upgrades,
  recipes,
  others: itemList.filter(
    item =>
      !itemsInShops.includes(item.name) && !item.info.isRecipe && !item.info.isObsolete,
  ),
  obsolete,
};

export const shopMap: Readonly<Record<string, ReadonlyArray<string>>> = shops;

// tslint:disable-next-line:typedef
export const db = {
  heroMap,
  heroList,
  heroNames,
  heroGroups,

  abilityMap,
  abilityList,
  abilityNames,

  talentMap,
  talentList,
  talentNames,

  itemMap,
  itemList,
  itemNames,
  itemGroupMap,

  shopMap,
};

export type Database = Readonly<typeof db>;

declare module 'vue/types/vue' {
  interface Vue {
    $db: Database;
  }
}

const install: PluginFunction<undefined> = $Vue => {
  if ($$Vue && $$Vue === $Vue) {
    return;
  }

  $$Vue = $Vue;

  $Vue.prototype.$db = db;
};

export default install;
