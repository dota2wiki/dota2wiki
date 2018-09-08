// tslint:disable:no-reference no-relative-imports no-any no-unsafe-any no-reserved-keywords

import * as fs from 'fs';
import {
  load,
  save,
  ValveData,
  TypeMap,
  EnumSpider,
  toNumberArray,
  toBoolean,
} from '@dota2wiki/vdf';
import { Hero } from '../src/models/hero';
import {
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
  SpecialItem,
  SpecialBonusOperation,
} from '../src/models/ability';

//
// Aggregation
// ------------------------------------------------------------

/**
 * Generate abilities data
 */
// tslint:disable:max-func-body-length
export default async function getAbilities(
  path: string,
  heroes: Record<string, Hero>,
): Promise<Record<string, Ability>> {
  const DOTAAbilities: any = (await load(path)).DOTAAbilities;
  const allHeroAbilityNames: Set<string> = new Set(
    Object.values(heroes).reduce<string[]>((abilities, hero) => {
      abilities.push(...hero.abilities, ...hero.talents);

      return abilities;
    }, []),
  );

  const spider: EnumSpider = new EnumSpider(
    'AbilityType',
    'AbilityBehavior',
    'AbilityUnitTargetTeam',
    'AbilityUnitTargetType',
    'AbilityUnitTargetFlags',
    'SpellImmunityType',
    'SpellDispellableType',
    'AbilityUnitDamageType',
  );
  Object.values(DOTAAbilities).forEach(raw => spider.walk(raw));
  spider.print();

  const base: any = DOTAAbilities.ability_base;
  const result: Record<string, Ability> = {};

  Object.entries(DOTAAbilities).forEach(([name, raw]: [string, any]) => {
    if (!allHeroAbilityNames.has(name)) {
      return;
    }

    const data: ValveData = new ValveData({ ...base, ...raw });
    result[name] = data.mapGet<Ability>({
      id: ['number', 'ID'],
      name: () => name,

      type: ['enum', 'AbilityType', AbilityType],
      behavior: [
        'enum',
        'AbilityBehavior',
        {
          ...AbilityBehavior,
          DOTA_ABILITY_TYPE_ULTIMATE: AbilityType.DOTA_ABILITY_TYPE_ULTIMATE,
        },
      ],

      targetTeam: ['enum', 'AbilityUnitTargetTeam', AbilityUnitTargetTeam],
      targetType: ['enum', 'AbilityUnitTargetType', AbilityUnitTargetType],
      targetFlag: ['enum', 'AbilityUnitTargetFlags', AbilityUnitTargetFlag],

      spellImmunityType: ['enum', 'SpellImmunityType', SpellImmunityType],
      spellDispellableType: ['enum', 'SpellDispellableType', SpellDispellableType],

      damageType: ['enum', 'AbilityUnitDamageType', AbilityUnitDamageType],

      maxLevel: ['number', 'MaxLevel'],
      fightRecapLevel: ['number', 'FightRecapLevel'],

      isGrantedByScepter: ['boolean', 'HasScepterUpgrade'],
      hasScepterUpgrade: ['boolean', 'HasScepterUpgrade'],

      stats: () =>
        data.mapGet<StatsData>({
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
              let talentOperation: SpecialBonusOperation;
              Object.entries(itemRaw).forEach(([keyRaw, valueRaw]) => {
                switch (keyRaw) {
                  case 'var_type':
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
                      console.info(key, keyRaw);
                    }
                    key = keyRaw;
                    value = toNumberArray(valueRaw);
                }
              });
              if (key && value) {
                special.push({
                  key,
                  value,
                  talent,
                  talentField,
                });
              }
            });
        }

        return special;
      },
    });
  });

  return result;
}
