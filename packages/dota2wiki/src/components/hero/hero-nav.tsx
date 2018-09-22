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

/**
 * Component: HeroNav
 */
@Component
export class CHeroNav extends Vue {
  @Prop({ type: String, required: true })
  public readonly name!: string;

  private render(h: CreateElement): VNode {
    return (
      <div staticClass="c-hero-nav">
        <vd-flexbox gap="small">
          <vd-flexbox
            flex="none"
            tag="a"
            router-link
            to={`/${this.$locale.language}/hero/${this.name}`}
          >
            {this.$locale.dict['DOTA_HeroLoadout_Stats']}
          </vd-flexbox>
          <vd-flexbox flex="none">/</vd-flexbox>
          <vd-flexbox
            flex="none"
            tag="a"
            router-link
            to={`/${this.$locale.language}/hero/${this.name}/ability/${
              this.$db.heroMap[this.name].abilities[0]
            }`}
          >
            {this.$locale.dict['DOTA_Abilities']}
          </vd-flexbox>
        </vd-flexbox>
      </div>
    );
  }
}
