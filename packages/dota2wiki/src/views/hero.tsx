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
 * Component: Hero
 */
@Component
export default class VHero extends Vue {
  private render(h: CreateElement): VNode {
    return <div staticClass="v-hero">{this.$slots.default}</div>;
  }
}
