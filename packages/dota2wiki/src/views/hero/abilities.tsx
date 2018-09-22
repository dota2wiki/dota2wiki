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
 * Component: Abilities
 */
@Component
export default class VAbilities extends Vue {
  private render(h: CreateElement): VNode {
    return <div staticClass="v-abilities">{this.$slots.default}</div>;
  }
}
