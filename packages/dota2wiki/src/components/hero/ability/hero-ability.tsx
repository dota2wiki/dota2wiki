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
import { CAbilityDetail } from './ability-detail';

/**
 * Component: HeroAbility
 */
@Component({
  components: {
    CAbilityDetail,
  },
})
export class CHeroAbility extends Vue {
  @Prop({ type: String, required: true })
  public readonly heroName!: string;

  @Prop({ type: String, required: true })
  public readonly abilityName!: string;

  public get abilities(): string[] {
    return this.$db.heroMap[this.heroName].abilities;
  }

  private render(h: CreateElement): VNode {
    return (
      <div staticClass="c-hero-ability">
        <vd-flexbox gap>
          <vd-flexbox flex="none">
            <vd-card bordered half-transparent>
              <vd-card-content>
                <vd-flexbox gap="small" direction="column">
                  {this.abilities.map(ability => (
                    <vd-flexbox
                      flex="none"
                      tag="a"
                      router-link
                      to={`/${this.$locale.language}/hero/${
                        this.heroName
                      }/ability/${ability}`}
                    >
                      <i
                        staticClass="dt-spell-icon c-hero-ability_icon"
                        class={[this.heroName, ability]}
                      />
                      <span />
                    </vd-flexbox>
                  ))}
                </vd-flexbox>
              </vd-card-content>
            </vd-card>
          </vd-flexbox>
          <vd-flexbox>
            <c-ability-detail
              key={this.abilityName}
              hero-name={this.heroName}
              ability-name={this.abilityName}
            />
          </vd-flexbox>
        </vd-flexbox>
      </div>
    );
  }
}
