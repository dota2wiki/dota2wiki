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
import { CHeroDetail } from '@src/components/hero/hero-detail';

/**
 * Component: Hero
 */
@Component({
  components: {
    CHeroDetail,
  },
})
export default class VHero extends Vue {
  private render(h: CreateElement): VNode {
    return (
      <div staticClass="v-hero">
        <c-hero-detail key={this.$route.params.name} name={this.$route.params.name} />
      </div>
    );
  }
}
