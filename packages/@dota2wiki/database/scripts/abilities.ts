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
} from '@dota2wiki/vdf';
import { Hero } from '../src/models/hero';
import { Talent } from '../src/models/talent';
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
export default async function genAbilities(
  path: string,
  heroes: Record<string, Hero>,
): Promise<[Record<string, Ability>, Record<string, Talent>]> {
  const DOTAAbilities: any = (await load(path)).DOTAAbilities;
  const allHeroAbilityNames: Set<string> = new Set(
    Object.values(heroes).reduce<string[]>((abilities, hero) => {
      abilities.push(...hero.abilities);

      return abilities;
    }, []),
  );
  const allHeroTalentNames: Set<string> = new Set(
    Object.values(heroes).reduce<string[]>((abilities, hero) => {
      abilities.push(...hero.talents);

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

  const abilities: Record<string, Ability> = {};
  const talents: Record<string, Talent> = {};

  Object.entries(DOTAAbilities).forEach(([name, raw]: [string, any]) => {
    if (!allHeroAbilityNames.has(name) && !allHeroTalentNames.has(name)) {
      return;
    }

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
                  talent,
                  talentField,
                });
              }
            });
        }

        return special;
      },
    });

    if (allHeroAbilityNames.has(name)) {
      abilities[name] = data;
    }
    if (allHeroTalentNames.has(name)) {
      talents[name] = {
        id: data.id,
        name: data.name,
        special: data.special,
      };
    }
  });

  return [abilities, talents];
}
