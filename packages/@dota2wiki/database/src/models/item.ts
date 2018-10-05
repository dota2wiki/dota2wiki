import { Ability } from './ability';

export enum ItemShareability {
  ITEM_NOT_SHAREABLE,
  ITEM_PARTIALLY_SHAREABLE,
  ITEM_FULLY_SHAREABLE,
  ITEM_FULLY_SHAREABLE_STACKING,
}

export interface ItemInfo {
  cost: number;
  initialCharges: number;
  // combinable: boolean;
  permanent: boolean;
  stackable: boolean;
  recipe: boolean;
  droppable: boolean;
  purchasable: boolean;
  sellable: boolean;
  requiresCharges: boolean;
  killable: boolean;
  disassemblable: boolean;
  shareability: 'ITEM_NOT_SHAREABLE';
  declaresPurchase: '0';
  shopTags: string[];
  quality: string;
  aliases: string[];
}

/**
 * Data structure for items.
 */
export interface Item extends Ability {}
