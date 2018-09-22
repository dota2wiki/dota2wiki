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
 * Component: Ability
 */
@Component
export default class VAbility extends Vue {
  private render(h: CreateElement): VNode {
    return <div staticClass="v-ability">{this.$slots.default}</div>;
  }
}
