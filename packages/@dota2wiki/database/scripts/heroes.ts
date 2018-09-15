// tslint:disable:no-reference no-relative-imports no-any no-unsafe-any no-reserved-keywords

import { load, save, ValveData, TypeMap, EnumSpider } from '@dota2wiki/vdf';
import {
  Hero,
  Team,
  enumMapTeam,
  RoleData,
  DefenseData,
  AttackDamageType,
  AttackCapability,
  AttackData,
  Attribute,
  enumMapAttribute,
  AttributeData,
  MovementCapability,
  MobilityData,
  StatusData,
  VisionData,
  GameModeData,
  OtherData,
} from '../src/models/hero';

//
// Role
// ------------------------------------------------------------

function getRoleData(data: ValveData): RoleData {
  const result: RoleData = {
    carry: 0,
    support: 0,
    nuker: 0,
    disabler: 0,
    jungler: 0,
    durable: 0,
    escape: 0,
    pusher: 0,
    initiator: 0,
    complexity: data.get('number', 'Complexity'),
  };

  const roles: string[] = data.get('string[]', 'Role').map(r => r.toLocaleLowerCase());
  const roleLevels: number[] = data.get('number[]', 'Rolelevels');
  roles.forEach((name, i) => ((result as any)[name] = roleLevels[i]));

  return result;
}

//
// Abilities & Talents
// ------------------------------------------------------------

function getAbilities(data: ValveData): string[] {
  const talentStart: number = data.get('number', 'AbilityTalentStart');
  const result: string[] = [];

  for (let i: number = 0; i < talentStart; i++) {
    const field: string = `Ability${i}`;
    if (data.has(field)) {
      const ability: string = data.get('string', field);

      if (ability && ability !== '0' && ability !== 'generic_hidden') {
        result.push(ability);
      }
    }
  }

  return result;
}

function getTalents(data: ValveData): string[] {
  const talentStart: number = data.get('number', 'AbilityTalentStart');
  const result: string[] = [];

  for (let i: number = talentStart; i < talentStart + 8; i++) {
    const field: string = `Ability${i}`;
    if (data.has(field)) {
      result.push(data.get('string', field));
    }
  }

  return result;
}

//
// Armor
// ------------------------------------------------------------

function getDefenseData(data: ValveData): DefenseData {
  return data.mapGet<DefenseData>({
    armorPhysical: {
      type: 'number',
      field: 'ArmorPhysical',
    },
    magicalResistance: {
      type: 'number',
      field: 'MagicalResistance',
    },
  });
}

//
// Attack
// ------------------------------------------------------------

function getAttackData(data: ValveData): AttackData {
  return data.mapGet<AttackData>({
    capability: {
      type: 'enum',
      field: 'AttackCapabilities',
      enumMap: AttackCapability,
    },
    damage: () =>
      data.mapGet<{
        type: AttackDamageType;
        min: number;
        max: number;
      }>({
        type: {
          type: 'enum',
          field: 'AttackDamageType',
          enumMap: AttackDamageType,
        },
        min: {
          type: 'number',
          field: 'AttackDamageMin',
        },
        max: {
          type: 'number',
          field: 'AttackDamageMax',
        },
      }),
    rate: {
      type: 'number',
      field: 'AttackRate',
    },
    range: {
      type: 'number',
      field: 'AttackRange',
    },
    animationPoint: {
      type: 'number',
      field: 'AttackAnimationPoint',
    },
    acquisitionRange: {
      type: 'number',
      field: 'AttackAcquisitionRange',
    },
    projectileSpeed: {
      type: 'number',
      field: 'ProjectileSpeed',
    },
  });
}

//
// Attribute
// ------------------------------------------------------------

function getAttributeData(data: ValveData): AttributeData {
  const result: AttributeData = {
    primary: data.getEnum('AttributePrimary', enumMapAttribute),
    strength: {
      base: 0,
      gain: 0,
    },
    agility: {
      base: 0,
      gain: 0,
    },
    intelligence: {
      base: 0,
      gain: 0,
    },
  };

  data
    .mapInject(result.strength, {
      base: {
        type: 'number',
        field: 'AttributeBaseStrength',
      },
      gain: {
        type: 'number',
        field: 'AttributeStrengthGain',
      },
    })
    .mapInject(result.agility, {
      base: {
        type: 'number',
        field: 'AttributeBaseAgility',
      },
      gain: {
        type: 'number',
        field: 'AttributeAgilityGain',
      },
    })
    .mapInject(result.intelligence, {
      base: {
        type: 'number',
        field: 'AttributeBaseIntelligence',
      },
      gain: {
        type: 'number',
        field: 'AttributeIntelligenceGain',
      },
    });

  return result;
}

//
// Movement
// ------------------------------------------------------------

function getMobilityData(data: ValveData): MobilityData {
  const result: MobilityData = {
    capabilities: MovementCapability.DOTA_UNIT_CAP_MOVE_GROUND,
    speed: 300,
    turnRate: 0.5,
    hasAggressiveStance: false,
  };

  data.mapInject<MobilityData>(result, {
    capabilities: {
      type: 'enum',
      field: 'MovementCapabilities',
      enumMap: MovementCapability,
    },
    speed: {
      type: 'number',
      field: 'MovementSpeed',
    },
    turnRate: {
      type: 'number',
      field: 'MovementTurnRate',
    },
    hasAggressiveStance: {
      type: 'boolean',
      field: 'HasAggressiveStance',
    },
  });

  return result;
}

//
// Status
// ------------------------------------------------------------

function getStatusData(data: ValveData): StatusData {
  return data.mapGet<StatusData>({
    health: {
      type: 'number',
      field: 'StatusHealth',
    },
    healthRegen: {
      type: 'number',
      field: 'StatusHealthRegen',
    },
    mana: {
      type: 'number',
      field: 'StatusMana',
    },
    manaRegen: {
      type: 'number',
      field: 'StatusManaRegen',
    },
  });
}

//
// Vision
// ------------------------------------------------------------

function getVisionData(data: ValveData): VisionData {
  return data.mapGet<VisionData>({
    day: {
      type: 'number',
      field: 'VisionDaytimeRange',
    },
    night: {
      type: 'number',
      field: 'VisionNighttimeRange',
    },
  });
}

//
// Game Mode
// ------------------------------------------------------------

function getGameModeData(data: ValveData): GameModeData {
  return data.mapGet<GameModeData>({
    BotImplemented: 'boolean',
    CMEnabled: 'boolean',
    CMTournamentIgnore: 'boolean',
    new_player_enable: 'boolean',
    Legs: 'number',
    AbilityDraftDisabled: 'boolean',
    ARDMDisabled: 'boolean',
  });
}

function getOtherData(data: ValveData): OtherData {
  return {
    gibType: data.has('GibType') ? data.get('string', 'GibType') : 'default',
    gibTintColor: data.has('GibTintColor')
      ? data.get('color', 'GibTintColor')
      : undefined,
    glowColor: data.has('HeroGlowColor') ? data.get('color', 'HeroGlowColor') : undefined,
  };
}

//
// Aggregation
// ------------------------------------------------------------

/**
 * Build hero data.
 */
export default async function genHeros(path: string): Promise<Record<string, Hero>> {
  const DOTAHeroes: any = (await load(path)).DOTAHeroes;

  const spider: EnumSpider = new EnumSpider(
    'Team',
    'AttackCapabilities',
    'AttributePrimary',
    'MovementCapabilities',
  );
  Object.values(DOTAHeroes).forEach(raw => spider.walk(raw));
  spider.print();

  const base: any = DOTAHeroes.npc_dota_hero_base;
  const result: Record<string, Hero> = {};

  Object.entries(DOTAHeroes).forEach(([name, raw]) => {
    if (
      name === 'Version' ||
      name === 'npc_dota_hero_base' ||
      name === 'npc_dota_hero_target_dummy'
    ) {
      return;
    }

    const data: ValveData = new ValveData({ ...base, ...raw });
    result[name] = data.mapGet<Hero>({
      id: ['number', 'HeroID'],
      name: () => name,
      team: ['enum', 'Team', enumMapTeam],
      alias: ['string[]', 'NameAliases'],

      roles: () => getRoleData(data),

      abilities: () => getAbilities(data),
      talents: () => getTalents(data),

      defense: () => getDefenseData(data),
      attack: () => getAttackData(data),
      attributes: () => getAttributeData(data),
      mobility: () => getMobilityData(data),
      status: () => getStatusData(data),
      vision: () => getVisionData(data),

      gameMode: () => getGameModeData(data),
      others: () => getOtherData(data),
    });
  });

  return result;
}
