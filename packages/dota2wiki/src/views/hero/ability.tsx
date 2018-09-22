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
import { CHeroAbility } from '@src/components/hero/ability/hero-ability';

/**
 * Component: Abilities
 */
@Component({
  components: {
    CHeroAbility,
  },
})
export default class VAbility extends Vue {
  public get heroName(): string {
    return this.$route.params.heroName;
  }
  public get abilityName(): string {
    return this.$route.params.abilityName;
  }

  private render(h: CreateElement): VNode {
    return (
      <c-hero-ability
        key={this.heroName}
        hero-name={this.heroName}
        ability-name={this.abilityName}
      />
    );
  }
}
