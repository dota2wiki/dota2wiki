/**
 * Base data structure for database models.
 */
export interface ModelBase {
  id: number;
  name: string;
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

export interface ModifyLike {
  readonly special: SpecialItem[];
}
