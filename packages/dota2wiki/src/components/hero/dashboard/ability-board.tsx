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
import { Ability, AbilityBehavior } from '@dota2wiki/database';

/**
 * Component: AbilityBoard
 */
@Component
export class CAbilityBoard extends Vue {
  @Prop({ type: String, required: true })
  public readonly name!: string;

  public get abilities(): Ability[] {
    return this.$db.heroMap[this.name].abilities.map(a => this.$db.abilityMap[a]);
  }
  public get defaultAbilities(): Ability[] {
    return this.abilities.filter(
      a => !(a.behavior & AbilityBehavior.DOTA_ABILITY_BEHAVIOR_HIDDEN),
    );
  }
  public get hiddenAbilities(): Ability[] {
    return this.abilities.filter(
      a => a.behavior & AbilityBehavior.DOTA_ABILITY_BEHAVIOR_HIDDEN,
    );
  }

  private render(h: CreateElement): VNode {
    return (
      <vd-card staticClass="c-ability-board" half-transparent>
        <vd-card-header>
          {this.$locale.dict['DOTA_HeroGuideViewer_Skill_Comments_Title']}
        </vd-card-header>
        <vd-card-content>
          <vd-flexbox direction="column" align="stretch" gap>
            <vd-flexbox gap>
              {this.defaultAbilities.map(ability => (
                <vd-flexbox flex="none">
                  <div staticClass="c-ability-board_icon-container">
                    <i
                      staticClass="c-ability-board_icon dt-spell-icon"
                      class={[this.name, ability.name]}
                    />
                  </div>
                </vd-flexbox>
              ))}
            </vd-flexbox>
            <vd-flexbox gap justify="end">
              <vd-flexbox flex="none">
                <vd-popover
                  title={
                    this.$locale.dict[
                      `DOTA_Tooltip_ability_${this.defaultAbilities[0].name}`
                    ]
                  }
                >
                  <div slot="trigger" staticClass="c-ability-board_icon-container">
                    <i
                      staticClass="c-ability-board_icon dt-spell-icon"
                      class={[this.name, this.defaultAbilities[0].name]}
                    />
                  </div>
                  <div
                    domPropsInnerHTML={
                      this.$locale.dict[
                        `DOTA_Tooltip_ability_${
                          this.defaultAbilities[0].name
                        }_Description`
                      ]
                    }
                  />
                </vd-popover>
              </vd-flexbox>
            </vd-flexbox>
            <vd-flexbox gap>
              {this.hiddenAbilities.map(ability => (
                <vd-flexbox flex="none">
                  <i
                    staticClass="c-ability-board_icon dt-spell-icon"
                    class={[this.name, ability.name]}
                  />
                </vd-flexbox>
              ))}
            </vd-flexbox>
          </vd-flexbox>
        </vd-card-content>
      </vd-card>
    );
  }
}
