import { Ability } from './ability';

export enum ItemShareability {
  ITEM_NOT_SHAREABLE,
  ITEM_PARTIALLY_SHAREABLE,
  ITEM_FULLY_SHAREABLE,
  ITEM_FULLY_SHAREABLE_STACKING,
}

export enum ItemDeclarations {
  DECLARE_PURCHASES_TO_TEAMMATES,
  DECLARE_PURCHASES_IN_SPEECH,
  DECLARE_PURCHASES_TO_SPECTATORS,
}

export enum ItemDisassembleRule {
  DOTA_ITEM_DISASSEMBLE_NEVER,
  DOTA_ITEM_DISASSEMBLE_ALWAYS,
}

export interface ShopsInfo {
  side: boolean;
  secret: boolean;
  global: boolean;
}

export interface ItemInfo {
  cost: number;
  shopTags: string[];
  quality: string;
  aliases: string[];

  permanent: boolean;
  purchasable: boolean;
  sellable: boolean;
  shops: ShopsInfo;
  disassemblable: boolean;
  stackable: boolean;
  droppable: boolean;
  killable: boolean;
  support: boolean;
  alertable: boolean;

  initialCharges: number;
  requiresCharges: boolean;
  displayCharges: boolean;
  hideCharges: boolean;

  shareability: ItemShareability;
  declarations: ItemDeclarations;

  maxUpgradeLevel: number;
  baseLevel: number;

  fightRecapLevel: number;

  isObsolete: boolean;

  upgradesItems?: string[];
  upgradeRecipe?: string;

  // recipe
  isRecipe: boolean;
  result?: string;
  requirements?: string[][];
}

/**
 * Data structure for items.
 */
export interface Item extends Ability {
  info: ItemInfo;
}
