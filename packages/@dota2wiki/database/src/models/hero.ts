// tslint:disable:no-reserved-keywords no-bitwise

/**
 * Team
 */
export enum Team {
  /**
   * Good
   */
  good,
  /**
   * Bad
   */
  bad,
}

export const enumMapTeam: Record<string, Team> = {
  Good: Team.good,
  Bad: Team.bad,
  good: Team.good,
  bad: Team.bad,
};

//
// Role
// ------------------------------------------------------------

/**
 * Role, including complexity.
 */
export interface RoleData {
  /**
   * 核心
   */
  readonly carry: number;
  /**
   * 辅助
   */
  readonly support: number;

  /**
   * 爆发
   */
  readonly nuker: number;
  /**
   * 控制
   */
  readonly disabler: number;
  /**
   * 打野
   */
  readonly jungler: number;
  /**
   * 耐久
   */
  readonly durable: number;
  /**
   * 逃生
   */
  readonly escape: number;
  /**
   * 推进
   */
  readonly pusher: number;
  /**
   * 先手
   */
  readonly initiator: number;

  /**
   * 复杂程度
   */
  readonly complexity: number;
}

//
// Armor
// ------------------------------------------------------------

/**
 * Armor data.
 */
export interface DefenseData {
  readonly armorPhysical: number;
  readonly magicalResistance: number;
}

//
// Attack
// ------------------------------------------------------------

/**
 * Categories for attack capability.
 */
export enum AttackCapability {
  DOTA_UNIT_CAP_MELEE_ATTACK,
  DOTA_UNIT_CAP_RANGED_ATTACK,
}

export enum AttackDamageType {
  DAMAGE_TYPE_ArmorPhysical,
}

/**
 * Attack data.
 */
export interface AttackData {
  readonly capability: AttackCapability;
  readonly damage: {
    readonly type: AttackDamageType;
    readonly min: number;
    readonly max: number;
  };
  readonly rate: number;
  readonly range: number;
  readonly animationPoint: number;
  readonly acquisitionRange: number;
  readonly projectileSpeed: number;
}

//
// Attribute
// ------------------------------------------------------------

/**
 * Categories for attribute.
 */
export enum Attribute {
  strength,
  agility,
  intelligence,
}

export const enumMapAttribute: Record<string, Attribute> = {
  DOTA_ATTRIBUTE_STRENGTH: Attribute.strength,
  DOTA_ATTRIBUTE_AGILITY: Attribute.agility,
  DOTA_ATTRIBUTE_INTELLECT: Attribute.intelligence,
};

/**
 * Attribute data.
 */
export interface AttributeData {
  readonly primary: Attribute;
  readonly strength: {
    readonly base: number;
    readonly gain: number;
  };
  readonly agility: {
    readonly base: number;
    readonly gain: number;
  };
  readonly intelligence: {
    readonly base: number;
    readonly gain: number;
  };
}

//
// Movement
// ------------------------------------------------------------

/**
 * Categories for movement capability.
 */
export enum MovementCapability {
  DOTA_UNIT_CAP_MOVE_NONE,
  DOTA_UNIT_CAP_MOVE_GROUND,
  DOTA_UNIT_CAP_MOVE_FLY,
}

/**
 * Movement data.
 */
export interface MobilityData {
  readonly capabilities: MovementCapability;
  readonly speed: number;
  readonly turnRate: number;
  readonly hasAggressiveStance: boolean;
}

//
// Status
// ------------------------------------------------------------

/**
 * Status data.
 */
export interface StatusData {
  readonly health: number;
  readonly healthRegen: number;
  readonly mana: number;
  readonly manaRegen: number;
}

//
// Vision
// ------------------------------------------------------------

/**
 * Vision data.
 */
export interface VisionData {
  readonly day: number;
  readonly night: number;
}

//
// Game Mode
// ------------------------------------------------------------

export interface GameModeData {
  readonly BotImplemented: boolean;
  readonly CMEnabled: boolean;
  readonly CMTournamentIgnore: boolean;
  readonly new_player_enable: boolean;
  readonly Legs: number;
  readonly AbilityDraftDisabled: boolean;
  readonly ARDMDisabled: boolean;
}

//
// Others
// ------------------------------------------------------------

export interface OtherData {
  readonly gibType: string;
  readonly gibTintColor?: string;
  readonly glowColor?: string;
}

//
// Aggregation
// ------------------------------------------------------------

import { ModelBase } from './base';

/**
 * Data structure for heroes.
 */
export interface Hero extends ModelBase {
  readonly team: Team;

  readonly alias: string[];

  readonly roles: RoleData;

  readonly abilities: string[];
  readonly talents: string[];

  readonly defense: DefenseData;
  readonly attack: AttackData;
  readonly attributes: AttributeData;
  readonly mobility: MobilityData;
  readonly status: StatusData;
  readonly vision: VisionData;

  readonly gameMode: GameModeData;
  readonly others: OtherData;
}

export interface HeroGroup {
  primary: string;
  heroes: ReadonlyArray<Hero>;
}
