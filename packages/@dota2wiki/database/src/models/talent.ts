import { ModelBase } from './base';
import { SpecialItem } from './ability';

/**
 * Data structure for talent.
 */
export interface Talent extends ModelBase {
  readonly special: SpecialItem[];
}
