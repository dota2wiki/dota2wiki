import Vue, { CreateElement, VNode } from 'vue';
import {
  Component,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Watch,
} from 'vue-property-decorator';
import { CAbility } from './ability';
import { Item } from '@dota2wiki/database';
import { ClassName } from 'void-ui';

/**
 * Component: Item
 */
@Component
export class CItem extends CAbility {
  public get model(): Item {
    return this.$db.itemMap[this.name];
  }

  public get label(): string {
    // stupid case, stupid valve
    return this.$locale.dict[`DOTA_Tooltip_Ability_${this.name}`] || this.name;
  }
  public get notes(): string[] {
    const name: string = this.name;
    const result: string[] = [];
    for (let index: number = 0; index < 10; index++) {
      const text: string | undefined = this.$locale.dict[
        `DOTA_Tooltip_ability_${name}_Note${index}`
      ];
      if (text) {
        result.push(text);
      } else {
        break;
      }
    }

    return result;
  }

  public get classes(): ClassName {
    return [
      `cp-theme_${this.themeValue}`,
      {
        'is-level': !!this.model.info.baseLevel,
      },
    ];
  }
}
