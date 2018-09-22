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
import { CHeroDashboard } from '@src/components/hero/dashboard/hero-dashboard';

/**
 * Component: HeroDashboard
 */
@Component({
  components: {
    CHeroDashboard,
  },
})
export default class VHeroDashboard extends Vue {
  public get heroName(): string {
    return this.$route.params.heroName;
  }

  private render(h: CreateElement): VNode {
    return <c-hero-dashboard name={this.heroName} />;
  }
}
