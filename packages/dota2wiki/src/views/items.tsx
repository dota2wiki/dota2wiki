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
 * Component: Items
 */
@Component
export default class VItems extends Vue {
  private render(h: CreateElement): VNode {
    return <div staticClass="v-items">{this.$slots.default}</div>;
  }
}
