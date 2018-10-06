// tslint:disable:no-reference no-relative-imports no-any no-unsafe-any no-reserved-keywords

import chalk from 'chalk';
import {
  load,
  save,
  ValveData,
  TypeMap,
  EnumSpider,
  toNumberArray,
  toBoolean,
  toStringArray,
} from '@dota2wiki/vdf';
import { Hero } from '../src/models/hero';
import {
  SpecialItem,
  SpecialBonusOperation,
  Ability,
  AbilityType,
  AbilityBehavior,
  AbilityUnitTargetTeam,
  AbilityUnitTargetType,
  AbilityUnitTargetFlag,
  SpellDispellableType,
  AbilityUnitDamageType,
  SpellImmunityType,
  StatsData,
} from '../src/models/ability';
import { Talent } from '../src/models/talent';
import {
  Item,
  ItemInfo,
  ShopsInfo,
  ItemShareability,
  ItemDeclarations,
} from '../src/models/item';

//
// Aggregation
// ------------------------------------------------------------

/**
 * Generate abilities data
 */
// tslint:disable:max-func-body-length
export default async function genAbilities(
  heroes: Record<string, Hero>,
  pathAbilities: string,
  pathItems: string,
): Promise<[Record<string, Ability>, Record<string, Talent>, Record<string, Item>]> {
  const [
    { DOTAAbilities: rawAbilities },
    { DOTAAbilities: rawItems },
  ] = await Promise.all([load(pathAbilities), load(pathItems)]);

  const allHeroAbilityNames: Set<string> = new Set(
    Object.values(heroes).reduce<string[]>((abilityNames, hero) => {
      abilityNames.push(...hero.abilities);

      return abilityNames;
    }, []),
  );
  const allHeroTalentNames: Set<string> = new Set(
    Object.values(heroes).reduce<string[]>((result, hero) => {
      result.push(...hero.talents);

      return result;
    }, []),
  );

  // const spider: EnumSpider = new EnumSpider(
  //   'AbilityType',
  //   'AbilityBehavior',
  //   'AbilityUnitTargetTeam',
  //   'AbilityUnitTargetType',
  //   'AbilityUnitTargetFlags',
  //   'SpellImmunityType',
  //   'SpellDispellableType',
  //   'AbilityUnitDamageType',
  // );
  // Object.values(DOTAAbilities).forEach(raw => spider.walk(raw));
  // spider.print();

  const base: any = rawAbilities.ability_base;

  const abilities: Record<string, Ability> = {};
  const talents: Record<string, Talent> = {};
  const items: Record<string, Item> = {};

  [...Object.entries(rawAbilities), ...Object.entries(rawItems)].forEach(
    ([name, raw]: [string, any]) => {
      const valveData: ValveData = new ValveData({ ...base, ...raw });

      const data: Ability = valveData.mapGet<Ability>({
        id: ['number', 'ID'],
        name: () => name,

        linkedAbility: valveData.has('LinkedAbility')
          ? ['string', 'LinkedAbility']
          : 'skip',

        type: ['enum', 'AbilityType', AbilityType],
        behavior: [
          'enum',
          'AbilityBehavior',
          {
            ...AbilityBehavior,
            DOTA_ABILITY_TYPE_ULTIMATE: AbilityType.DOTA_ABILITY_TYPE_ULTIMATE,
          },
        ],
        hotKeyOverride: valveData.has('HotKeyOverride')
          ? ['string', 'HotKeyOverride']
          : 'skip',

        targetTeam: ['enum', 'AbilityUnitTargetTeam', AbilityUnitTargetTeam],
        targetType: ['enum', 'AbilityUnitTargetType', AbilityUnitTargetType],
        targetFlag: ['enum', 'AbilityUnitTargetFlags', AbilityUnitTargetFlag],

        spellImmunityType: ['enum', 'SpellImmunityType', SpellImmunityType],
        spellDispellableType: ['enum', 'SpellDispellableType', SpellDispellableType],

        damageType: ['enum', 'AbilityUnitDamageType', AbilityUnitDamageType],

        maxLevel: ['number', 'MaxLevel'],
        levelsBetweenUpgrades: valveData.has('LevelsBetweenUpgrades')
          ? ['number', 'LevelsBetweenUpgrades']
          : 'skip',
        requiredLevel: valveData.has('RequiredLevel')
          ? ['number', 'RequiredLevel']
          : 'skip',
        fightRecapLevel: ['number', 'FightRecapLevel'],

        isGrantedByScepter: ['boolean', 'HasScepterUpgrade'],
        hasScepterUpgrade: ['boolean', 'HasScepterUpgrade'],

        stats: () =>
          valveData.mapGet<StatsData>({
            castRange: ['number[]', 'AbilityCastRange'],
            castRangeBuffer: ['number', 'AbilityCastRangeBuffer'],
            castPoint: ['number[]', 'AbilityCastPoint'],

            channelTime: ['number[]', 'AbilityChannelTime'],
            coolDown: ['number[]', 'AbilityCooldown'],
            duration: ['number[]', 'AbilityDuration'],
            sharedCooldown: ['string', 'AbilitySharedCooldown'],

            damage: ['number[]', 'AbilityDamage'],
            manaCost: ['number[]', 'AbilityManaCost'],

            modifierSupportValue: ['number', 'AbilityModifierSupportValue'],
            modifierSupportBonus: ['number', 'AbilityModifierSupportBonus'],
          }),

        special: () => {
          const special: SpecialItem[] = [];

          if (raw.AbilitySpecial) {
            Object.entries(raw.AbilitySpecial)
              .sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0))
              .forEach(([index, itemRaw]) => {
                let key: string | undefined;
                let value: number[] | undefined;
                let levelKey: string | undefined;
                let talent: string | undefined;
                let talentField: string | undefined;
                let talentOperation: SpecialBonusOperation | undefined;
                Object.entries(itemRaw).forEach(([keyRaw, valueRaw]) => {
                  switch (keyRaw) {
                    case 'var_type':
                    case 'var_Type':
                      return;
                    case 'levelkey':
                      return (levelKey = valueRaw);
                    case 'LinkedSpecialBonus':
                      return (talent = valueRaw);
                    case 'LinkedSpecialBonusField':
                      return (talentField = valueRaw);
                    case 'LinkedSpecialBonusOperation':
                      return (talentOperation = (SpecialBonusOperation as any)[valueRaw]);
                    case 'CalculateSpellDamageTooltip':
                      return toBoolean(valueRaw);
                    default:
                      if (key) {
                        // this means that there are multi key value pair in special
                        console.info(
                          chalk.yellowBright(`Unknown key in ability special: ${keyRaw}`),
                        );
                      }
                      key = keyRaw;
                      value = toNumberArray(valueRaw);
                  }
                });
                if (key && value) {
                  special.push({
                    key,
                    value,
                    levelKey,
                    talent,
                    talentField,
                    talentOperation,
                  });
                } else {
                  console.info(
                    chalk.yellowBright(
                      `Invalid special item key:${key} or value:${value}`,
                    ),
                  );
                }
              });
          }

          return special;
        },
      });

      if (allHeroAbilityNames.has(name)) {
        return (abilities[name] = data);
      }
      if (allHeroTalentNames.has(name)) {
        return (talents[name] = {
          id: data.id,
          name: data.name,
          special: data.special,
        });
      }
      if (name.startsWith('item_')) {
        return (items[name] = {
          ...data,
          info: valveData.mapGet<ItemInfo>({
            cost: ['number', 'ItemCost'],
            shopTags: ['string[]', 'ItemShopTags'],
            quality: ['string', ''],
            aliases: ['string[]', ''],

            permanent: ['boolean', 'ItemPermanent'],
            purchasable: ['boolean', 'ItemPurchasable'],
            sellable: ['boolean', 'ItemSellable'],
            shops: () =>
              valveData.mapGet<ShopsInfo>({
                side: ['boolean', 'SideShop'],
                secret: ['boolean', 'SecretShop'],
                global: ['boolean', 'GlobalShop'],
              }),
            disassemblable: ['boolean', 'ItemDisassemblable'],
            stackable: ['boolean', 'ItemStackable'],
            droppable: ['boolean', 'ItemDroppable'],
            killable: ['boolean', 'ItemKillable'],
            support: ['boolean', ''],
            alertable: ['boolean', ''],

            initialCharges: ['number', 'ItemInitialCharges'],
            requiresCharges: ['boolean', 'ItemRequiresCharges'],
            displayCharges: ['boolean', 'ItemDisplayCharges'],
            hideCharges: ['boolean', 'ItemHideCharges'],

            shareability: ['enum', 'ItemShareability', ItemShareability],
            declarations: ['enum', 'ItemDeclarations', ItemDeclarations],

            maxUpgradeLevel: ['number', 'MaxUpgradeLevel'],
            baseLevel: ['number', 'ItemBaseLevel'],

            fightRecapLevel: ['number', 'FightRecapLevel'],

            isObsolete: ['boolean', 'IsObsolete'],

            upgradesItems: valveData.has('UpgradesItems')
              ? ['string[]', 'UpgradesItems']
              : 'skip',
            upgradeRecipe: valveData.has('UpgradeRecipe')
              ? ['string', 'UpgradeRecipe']
              : 'skip',

            // recipe
            isRecipe: ['boolean', 'ItemRecipe'],
            result: valveData.has('ItemResult') ? ['string', 'ItemResult'] : 'skip',
            requirements: valveData.has('ItemRequirements')
              ? () => {
                  if (valveData.has('ItemRequirements')) {
                    const result: string[][] = [];
                    Object.entries(valveData.data.ItemRequirements).forEach(
                      ([key, value]) => {
                        const index: number = Number.parseInt(key, 10);
                        const array: string[] = toStringArray(value);
                        result[index] = array;
                      },
                    );

                    return result;
                  }

                  return undefined;
                }
              : 'skip',
          }),
        });
      }
    },
  );

  return [abilities, talents, items];
}
