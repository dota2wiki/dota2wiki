import Vue, { CreateElement, VNode } from 'vue';
import { Ability } from '@dota2wiki/database';
import {
  Component,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Watch,
} from 'vue-property-decorator';
import { ClassName, Theme, ThemeComponent } from 'void-ui';

/**
 * Component: Ability
 */
@Component
export class CAbility extends Vue implements ThemeComponent {
  @Prop({ type: String })
  public readonly theme?: Theme;
  public get themeValue(): Theme {
    return this.theme || this.$vd_theme.theme || 'lite';
  }
  public get classes(): ClassName {
    return [`cp-theme_${this.themeValue}`];
  }

  @Prop({ type: String, required: true })
  public readonly name!: string;

  public get model(): Ability {
    return this.$db.abilityMap[this.name];
  }

  public get label(): string {
    return this.$locale.dict[`DOTA_Tooltip_ability_${this.name}`] || this.name;
  }
  public get lore(): string {
    return this.$locale.dict[`DOTA_Tooltip_ability_${this.name}_Lore`];
  }
  public get description(): string {
    return this.$locale.dict[`DOTA_Tooltip_ability_${this.name}_Description`];
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
}
