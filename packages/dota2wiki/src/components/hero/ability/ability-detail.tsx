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
import { Style, ClassName, Theme, ThemeComponent } from 'void-ui';

/**
 * Component: AbilityDetail
 */
@Component
export class CAbilityDetail extends Vue implements ThemeComponent {
  @Prop({ type: String })
  public readonly theme?: Theme;
  public get themeValue(): Theme {
    return this.theme || this.$vd_theme.theme;
  }

  public get classes(): ClassName {
    return [`cp-theme_${this.themeValue}`];
  }

  @Prop({ type: String, required: true })
  public readonly heroName!: string;

  @Prop({ type: String, required: true })
  public readonly abilityName!: string;

  private render(h: CreateElement): VNode {
    return (
      <vd-card
        staticClass="c-ability-detail"
        class={this.classes}
        bordered
        half-transparent
      >
        <vd-card-content>
          <vd-flexbox align="end" gap>
            <vd-flexbox flex="none">
              <i staticClass="dt-spell-icon" class={[this.heroName, this.abilityName]} />
            </vd-flexbox>
            <vd-flexbox direction="column" gap>
              <vd-flexbox tag="h2" staticClass="c-ability-detail_name">
                {this.$locale.dict[`DOTA_Tooltip_ability_${this.abilityName}`]}
              </vd-flexbox>
              <vd-flexbox staticClass="c-ability-detail_lore">
                {this.$locale.dict[`DOTA_Tooltip_ability_${this.abilityName}_Lore`]}
              </vd-flexbox>
            </vd-flexbox>
          </vd-flexbox>
        </vd-card-content>
      </vd-card>
    );
  }
}
