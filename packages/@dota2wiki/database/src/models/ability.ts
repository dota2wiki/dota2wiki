// tslint:disable:no-reserved-keywords no-bitwise

export enum AbilityType {
  DOTA_ABILITY_TYPE_BASIC,
  DOTA_ABILITY_TYPE_ULTIMATE,
  DOTA_ABILITY_TYPE_ATTRIBUTES,
}

// prettier-ignore
export enum AbilityBehavior {
  DOTA_ABILITY_BEHAVIOR_NONE                  = 0,
  DOTA_ABILITY_BEHAVIOR_HIDDEN                = 1 << 0,
  DOTA_ABILITY_BEHAVIOR_PASSIVE               = 1 << 1,
  DOTA_ABILITY_BEHAVIOR_NO_TARGET             = 1 << 2,
  DOTA_ABILITY_BEHAVIOR_UNIT_TARGET           = 1 << 3,
  DOTA_ABILITY_BEHAVIOR_POINT                 = 1 << 4,
  DOTA_ABILITY_BEHAVIOR_AOE                   = 1 << 5,
  DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE         = 1 << 6,
  DOTA_ABILITY_BEHAVIOR_CHANNELLED            = 1 << 7,
  DOTA_ABILITY_BEHAVIOR_ITEM                  = 1 << 8,
  DOTA_ABILITY_BEHAVIOR_TOGGLE                = 1 << 9,
  DOTA_ABILITY_BEHAVIOR_DIRECTIONAL           = 1 << 10,
  DOTA_ABILITY_BEHAVIOR_IMMEDIATE             = 1 << 11,
  DOTA_ABILITY_BEHAVIOR_AUTOCAST              = 1 << 12,
  DOTA_ABILITY_BEHAVIOR_NOASSIST              = 1 << 13,
  DOTA_ABILITY_BEHAVIOR_AURA                  = 1 << 14,
  DOTA_ABILITY_BEHAVIOR_ATTACK                = 1 << 15,
  DOTA_ABILITY_BEHAVIOR_DONT_RESUME_MOVEMENT  = 1 << 16,
  DOTA_ABILITY_BEHAVIOR_ROOT_DISABLES         = 1 << 17,
  DOTA_ABILITY_BEHAVIOR_UNRESTRICTED          = 1 << 18,
  DOTA_ABILITY_BEHAVIOR_IGNORE_PSEUDO_QUEUE   = 1 << 19,
  DOTA_ABILITY_BEHAVIOR_IGNORE_CHANNEL        = 1 << 20,
  DOTA_ABILITY_BEHAVIOR_DONT_CANCEL_MOVEMENT  = 1 << 21,
  DOTA_ABILITY_BEHAVIOR_DONT_ALERT_TARGET     = 1 << 22,
  DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK    = 1 << 23,
  DOTA_ABILITY_BEHAVIOR_NORMAL_WHEN_STOLEN    = 1 << 24,
  DOTA_ABILITY_BEHAVIOR_IGNORE_BACKSWING      = 1 << 25,
  DOTA_ABILITY_BEHAVIOR_RUNE_TARGET           = 1 << 26,
  DOTA_ABILITY_BEHAVIOR_DONT_CANCEL_CHANNEL   = 1 << 27, // NOTE: no found in doc
  DOTA_ABILITY_BEHAVIOR_SHOW_IN_GUIDES        = 1 << 28, // NOTE: no found in doc
  DOTA_ABILITY_BEHAVIOR_OPTIONAL_UNIT_TARGET  = 1 << 29, // NOTE: no found in doc
}

// prettier-ignore
export enum AbilityUnitTargetTeam {
  DOTA_UNIT_TARGET_TEAM_NONE      = 0,
  DOTA_UNIT_TARGET_TEAM_FRIENDLY  = 1 << 0,
  DOTA_UNIT_TARGET_TEAM_ENEMY     = 1 << 1,
  DOTA_UNIT_TARGET_TEAM_BOTH      = 1 << 2,
  DOTA_UNIT_TARGET_TEAM_CUSTOM    = 1 << 3,
}

// prettier-ignore
export enum AbilityUnitTargetType {
  DOTA_UNIT_TARGET_NONE           = 0,
  DOTA_UNIT_TARGET_BASIC          = 1 << 0,
  DOTA_UNIT_TARGET_ALL            = 1 << 1,
  DOTA_UNIT_TARGET_BUILDING       = 1 << 2,
  DOTA_UNIT_TARGET_COURIER        = 1 << 3,
  DOTA_UNIT_TARGET_CREEP          = 1 << 4,
  DOTA_UNIT_TARGET_CUSTOM         = 1 << 5,
  DOTA_UNIT_TARGET_HERO           = 1 << 6,
  DOTA_UNIT_TARGET_MECHANICAL     = 1 << 7,
  DOTA_UNIT_TARGET_OTHER          = 1 << 8,
  DOTA_UNIT_TARGET_TREE           = 1 << 9,
}

// prettier-ignore
export enum AbilityUnitTargetFlag {
  DOTA_UNIT_TARGET_FLAG_NONE                      = 0,
  DOTA_UNIT_TARGET_FLAG_CHECK_DISABLE_HELP        = 1 << 0,
  DOTA_UNIT_TARGET_FLAG_DEAD                      = 1 << 1,
  DOTA_UNIT_TARGET_FLAG_FOW_VISIBLE               = 1 << 2,
  DOTA_UNIT_TARGET_FLAG_INVULNERABLE              = 1 << 3,
  DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES      = 1 << 4,
  DOTA_UNIT_TARGET_FLAG_MANA_ONLY                 = 1 << 5,
  DOTA_UNIT_TARGET_FLAG_MELEE_ONLY                = 1 << 6,
  DOTA_UNIT_TARGET_FLAG_NO_INVIS                  = 1 << 7,
  DOTA_UNIT_TARGET_FLAG_NOT_ANCIENTS              = 1 << 8,
  DOTA_UNIT_TARGET_FLAG_NOT_ATTACK_IMMUNE         = 1 << 9,
  DOTA_UNIT_TARGET_FLAG_NOT_CREEP_HERO            = 1 << 10,
  DOTA_UNIT_TARGET_FLAG_NOT_DOMINATED             = 1 << 11,
  DOTA_UNIT_TARGET_FLAG_NOT_ILLUSIONS             = 1 << 12,
  DOTA_UNIT_TARGET_FLAG_NOT_MAGIC_IMMUNE_ALLIES   = 1 << 13,
  DOTA_UNIT_TARGET_FLAG_NOT_NIGHTMARED            = 1 << 14,
  DOTA_UNIT_TARGET_FLAG_NOT_SUMMONED              = 1 << 15,
  DOTA_UNIT_TARGET_FLAG_OUT_OF_WORLD              = 1 << 16,
  DOTA_UNIT_TARGET_FLAG_PLAYER_CONTROLLED         = 1 << 17,
  DOTA_UNIT_TARGET_FLAG_RANGED_ONLY               = 1 << 18,
}

export enum SpellImmunityType {
  SPELL_IMMUNITY_ENEMIES_NO,
  SPELL_IMMUNITY_ENEMIES_YES,
  SPELL_IMMUNITY_ALLIES_NO,
  SPELL_IMMUNITY_ALLIES_YES,
}

export enum SpellDispellableType {
  SPELL_DISPELLABLE_NO,
  SPELL_DISPELLABLE_YES,
  SPELL_DISPELLABLE_YES_STRONG,
}

/**
 * Ability Damage Type
 */
export enum AbilityUnitDamageType {
  DAMAGE_TYPE_NONE,
  DAMAGE_TYPE_PURE,
  DAMAGE_TYPE_PHYSICAL,
  DAMAGE_TYPE_MAGICAL,
}

//
// Stats
// ------------------------------------------------------------

/**
 * Ability Stats
 */
export interface StatsData {
  // casting
  readonly castRange: number[];
  readonly castRangeBuffer: number;
  readonly castPoint: number[];

  // time
  readonly channelTime: number[];
  readonly coolDown: number[];
  readonly duration: number[];
  readonly sharedCooldown: string;

  readonly damage: number[];
  readonly manaCost: number[];
  readonly modifierSupportValue: number;
  readonly modifierSupportBonus: number;
}

//
// Special
// ------------------------------------------------------------

export enum SpecialBonusOperation {
  SPECIAL_BONUS_SUBTRACT,
  SPECIAL_BONUS_MULTIPLY,
}

export interface SpecialItem {
  readonly key: string;
  readonly value: number[];
  readonly levelKey?: string;
  readonly talent?: string;
  readonly talentField?: string;
  readonly talentOperation?: SpecialBonusOperation;
}

//
// Aggregation
// ------------------------------------------------------------

import { ModelBase } from './base';

/**
 * Data structure for abilities.
 */
export interface Ability extends ModelBase {
  readonly type: AbilityType;
  readonly behavior: AbilityBehavior;

  readonly targetTeam: AbilityUnitTargetTeam;
  readonly targetType: AbilityUnitTargetType;
  readonly targetFlag: AbilityUnitTargetFlag;

  readonly spellImmunityType: SpellImmunityType;
  readonly spellDispellableType: SpellDispellableType;

  readonly damageType: AbilityUnitDamageType;

  readonly maxLevel: number;
  readonly fightRecapLevel: number;

  readonly isGrantedByScepter: boolean;
  readonly hasScepterUpgrade: boolean;

  readonly stats: StatsData;
  readonly special: SpecialItem[];
}
