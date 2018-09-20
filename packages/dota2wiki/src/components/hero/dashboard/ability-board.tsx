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
import { CAbilityInfo } from './ability-info';

/**
 * Component: AbilityBoard
 */
@Component({
  components: {
    CAbilityInfo,
  },
})
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
      <vd-card staticClass="c-ability-board" raise bordered half-transparent>
        <vd-card-header>
          {this.$locale.dict['DOTA_HeroGuideViewer_Skill_Comments_Title']}
        </vd-card-header>
        <vd-card-content>
          <vd-flexbox direction="column" align="stretch" gap>
            {[this.defaultAbilities, this.hiddenAbilities].map(abilities => (
              <vd-flexbox gap>
                {abilities.map(ability => (
                  <vd-flexbox flex="none">
                    <vd-popover
                      trigger="click"
                      position="top"
                      align="start"
                      bordered
                      title={this.$locale.dict[`DOTA_Tooltip_ability_${ability.name}`]}
                    >
                      <div slot="trigger" staticClass="c-ability-board_icon-container">
                        <i
                          staticClass="c-ability-board_icon dt-spell-icon"
                          class={[this.name, ability.name]}
                        />
                      </div>
                      <c-ability-info key={this.name} name={ability.name} />
                    </vd-popover>
                  </vd-flexbox>
                ))}
              </vd-flexbox>
            ))}
          </vd-flexbox>
        </vd-card-content>
      </vd-card>
    );
  }
}
