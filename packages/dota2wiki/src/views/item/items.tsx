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
import { CItemWall } from '@src/components/item/item-wall';

/**
 * Component: Items
 */
@Component({
  components: {
    CItemWall,
  },
})
export default class VItems extends Vue {
  private mounted(): void {
    this.$dt_background.token = 'fall';
  }

  private render(h: CreateElement): VNode {
    return (
      <div staticClass="v-items">
        <c-item-wall />
      </div>
    );
  }
}
