// tslint:disable:max-func-body-length

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
import { Ability, AbilityType } from '@dota2wiki/database';

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

  public get ability(): Ability {
    return this.$db.abilityMap[this.abilityName];
  }

  private renderNotes(): VNode[] {
    const keys: string[] = [];

    for (let index: number = 0; index < 10; index++) {
      const key: string = `DOTA_Tooltip_ability_${this.abilityName}_Note${index}`;
      if (this.$locale.dict[key]) {
        keys.push(key);
      }
    }

    return keys.map(key => (
      <div staticClass="c-ability-detail_note">{this.$locale.dict[key]}</div>
    ));
  }

  private renderLevels(): VNode[] {
    return [
      <vd-flexbox>
        <span staticClass="c-ability-detail_label" domPropsInnerHTML={`maxLevel`} />
        <span staticClass="c-ability-detail_content">
          <span staticClass="c-ability-detail_value">{this.ability.maxLevel}</span>
        </span>
      </vd-flexbox>,

      <vd-flexbox>
        <span staticClass="c-ability-detail_label" domPropsInnerHTML={`requiredLevel`} />
        <span staticClass="c-ability-detail_content">
          <span staticClass="c-ability-detail_value">{this.ability.requiredLevel}</span>
        </span>
      </vd-flexbox>,

      <vd-flexbox>
        <span
          staticClass="c-ability-detail_label"
          domPropsInnerHTML={`levelsBetweenUpgrades`}
        />
        <span staticClass="c-ability-detail_content">
          <span staticClass="c-ability-detail_value">
            {this.ability.levelsBetweenUpgrades}
          </span>
        </span>
      </vd-flexbox>,

      <vd-flexbox>
        <span
          staticClass="c-ability-detail_label"
          domPropsInnerHTML={`fightRecapLevel`}
        />
        <span staticClass="c-ability-detail_content">
          <span staticClass="c-ability-detail_value">{this.ability.fightRecapLevel}</span>
        </span>
      </vd-flexbox>,
    ];
  }

  private renderStats(): VNode[] {
    return [
      // casting

      <vd-flexbox>
        <span staticClass="c-ability-detail_label" domPropsInnerHTML={`castRange`} />
        <span staticClass="c-ability-detail_content">
          {this.ability.stats.castRange.map(value => [
            <span staticClass="c-ability-detail_value">{value}</span>,
            <span staticClass="c-ability-detail_divider">/</span>,
          ])}
        </span>
      </vd-flexbox>,

      <vd-flexbox>
        <span
          staticClass="c-ability-detail_label"
          domPropsInnerHTML={`castRangeBuffer`}
        />
        <span staticClass="c-ability-detail_content">
          <span staticClass="c-ability-detail_value">
            {this.ability.stats.castRangeBuffer}
          </span>
        </span>
      </vd-flexbox>,

      <vd-flexbox>
        <span staticClass="c-ability-detail_label" domPropsInnerHTML={`castPoint`} />
        <span staticClass="c-ability-detail_content">
          {this.ability.stats.castPoint.map(value => [
            <span staticClass="c-ability-detail_value">{value}</span>,
            <span staticClass="c-ability-detail_divider">/</span>,
          ])}
        </span>
      </vd-flexbox>,

      // time

      <vd-flexbox>
        <span staticClass="c-ability-detail_label" domPropsInnerHTML={`channelTime`} />
        <span staticClass="c-ability-detail_content">
          {this.ability.stats.channelTime.map(value => [
            <span staticClass="c-ability-detail_value">{value}</span>,
            <span staticClass="c-ability-detail_divider">/</span>,
          ])}
        </span>
      </vd-flexbox>,

      <vd-flexbox>
        <span staticClass="c-ability-detail_label" domPropsInnerHTML={`coolDown`} />
        <span staticClass="c-ability-detail_content">
          {this.ability.stats.coolDown.map(value => [
            <span staticClass="c-ability-detail_value">{value}</span>,
            <span staticClass="c-ability-detail_divider">/</span>,
          ])}
        </span>
      </vd-flexbox>,

      <vd-flexbox>
        <span staticClass="c-ability-detail_label" domPropsInnerHTML={`duration`} />
        <span staticClass="c-ability-detail_content">
          {this.ability.stats.duration.map(value => [
            <span staticClass="c-ability-detail_value">{value}</span>,
            <span staticClass="c-ability-detail_divider">/</span>,
          ])}
        </span>
      </vd-flexbox>,

      <vd-flexbox>
        <span staticClass="c-ability-detail_label" domPropsInnerHTML={`sharedCooldown`} />
        <span staticClass="c-ability-detail_content">
          <span staticClass="c-ability-detail_value">
            {this.$locale.dict[this.ability.stats.sharedCooldown]}
          </span>
        </span>
      </vd-flexbox>,

      // values

      <vd-flexbox>
        <span staticClass="c-ability-detail_label" domPropsInnerHTML={`damage`} />
        <span staticClass="c-ability-detail_content">
          {this.ability.stats.damage.map(value => [
            <span staticClass="c-ability-detail_value">{value}</span>,
            <span staticClass="c-ability-detail_divider">/</span>,
          ])}
        </span>
      </vd-flexbox>,

      <vd-flexbox>
        <span staticClass="c-ability-detail_label" domPropsInnerHTML={`manaCost`} />
        <span staticClass="c-ability-detail_content">
          {this.ability.stats.manaCost.map(value => [
            <span staticClass="c-ability-detail_value">{value}</span>,
            <span staticClass="c-ability-detail_divider">/</span>,
          ])}
        </span>
      </vd-flexbox>,

      <vd-flexbox>
        <span
          staticClass="c-ability-detail_label"
          domPropsInnerHTML={`modifierSupportValue`}
        />
        <span staticClass="c-ability-detail_content">
          <span staticClass="c-ability-detail_value">
            {this.ability.stats.modifierSupportValue}
          </span>
        </span>
      </vd-flexbox>,

      <vd-flexbox>
        <span
          staticClass="c-ability-detail_label"
          domPropsInnerHTML={`modifierSupportBonus`}
        />
        <span staticClass="c-ability-detail_content">
          <span staticClass="c-ability-detail_value">
            {this.ability.stats.modifierSupportBonus}
          </span>
        </span>
      </vd-flexbox>,
    ];
  }

  private renderSpecial(): VNode[] {
    return this.ability.special.map(item => {
      let label: string =
        this.$locale.dict[`DOTA_Tooltip_ability_${this.abilityName}_${item.key}`] ||
        `${this.abilityName}_${item.key} `;
      const unit: string = label.startsWith('%') ? '%' : '';
      if (unit) {
        label = label.substring(1);
      }

      return (
        <vd-flexbox>
          <span staticClass="c-ability-detail_label" domPropsInnerHTML={label} />
          <span staticClass="c-ability-detail_content">
            {item.value.map(value => [
              <span staticClass="c-ability-detail_value">
                {value}
                {unit}
              </span>,
              <span staticClass="c-ability-detail_divider">/</span>,
            ])}
          </span>
        </vd-flexbox>
      );
    });
  }

  private render(h: CreateElement): VNode {
    return (
      <vd-card
        staticClass="c-ability-detail"
        class={this.classes}
        bordered
        half-transparent
      >
        <vd-card-content>
          <vd-flexbox direction="column" gap>
            <vd-flexbox align="end" gap>
              <vd-flexbox flex="none">
                <i
                  staticClass="dt-spell-icon"
                  class={[this.heroName, this.abilityName]}
                />
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

            <vd-flexbox>
              <div
                staticClass="c-ability-detail_description"
                domPropsInnerHTML={
                  this.$locale.dict[
                    `DOTA_Tooltip_ability_${this.abilityName}_Description`
                  ]
                }
              />
            </vd-flexbox>
            <vd-flexbox>{this.renderNotes()}</vd-flexbox>

            <vd-flexbox direction="column" gap>
              <vd-flexbox direction="column" gap="xsmall">
                {this.renderLevels()}
              </vd-flexbox>

              <vd-flexbox direction="column" gap="xsmall">
                {this.renderStats()}
              </vd-flexbox>

              <vd-flexbox direction="column" gap="xsmall">
                {this.renderSpecial()}
              </vd-flexbox>
            </vd-flexbox>
          </vd-flexbox>
        </vd-card-content>
      </vd-card>
    );
  }
}
