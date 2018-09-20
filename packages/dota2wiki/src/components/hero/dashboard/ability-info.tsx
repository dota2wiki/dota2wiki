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
 * Component: AbilityInfo
 */
@Component
export class CAbilityInfo extends Vue implements ThemeComponent {
  @Prop({ type: String })
  public readonly theme!: Theme;
  public get themeValue(): Theme {
    return this.theme || this.$vd_theme.theme;
  }

  public get classes(): ClassName {
    return [`cp-theme_${this.themeValue}`];
  }

  @Prop({ type: String, required: true })
  public readonly name!: string;

  public get ability(): Ability {
    return this.$db.abilityMap[this.name];
  }

  public get notes(): string[] {
    const result: string[] = [];

    for (let index: number = 0; index < 10; index++) {
      const key: string = `DOTA_Tooltip_ability_${this.name}_Note${index}`;
      if (this.$locale.dict[key]) {
        result.push(key);
      }
    }

    return result;
  }

  private render(h: CreateElement): VNode {
    return (
      <div staticClass="c-ability-info" class={this.classes}>
        <vd-flexbox direction="column" align="stretch" gap>
          <vd-flexbox
            domPropsInnerHTML={
              this.$locale.dict[`DOTA_Tooltip_ability_${this.name}_Description`]
            }
          />

          <vd-flexbox>
            <vd-flexbox
              staticClass="c-ability-info_notes"
              direction="column"
              align="stretch"
            >
              {this.notes.map(key => (
                <vd-flexbox domPropsInnerHTML={this.$locale.dict[key]} />
              ))}
            </vd-flexbox>
          </vd-flexbox>

          <vd-flexbox>
            <vd-flexbox direction="column" align="stretch">
              {this.ability.special.map(item => {
                let label: string =
                  this.$locale.dict[`DOTA_Tooltip_ability_${this.name}_${item.key}`] ||
                  `${this.name}_${item.key} `;
                const unit: string = label.startsWith('%') ? '%' : '';
                if (unit) {
                  label = label.substring(1);
                }

                return (
                  <div>
                    <span staticClass="c-ability-info_label" domPropsInnerHTML={label} />
                    <span staticClass="c-ability-info_content">
                      {item.value.map(value => [
                        <span staticClass="c-ability-info_value">
                          {value}
                          {unit}
                        </span>,
                        <span staticClass="c-ability-info_divider">/</span>,
                      ])}
                    </span>
                  </div>
                );
              })}
            </vd-flexbox>
          </vd-flexbox>
        </vd-flexbox>
      </div>
    );
  }
}
