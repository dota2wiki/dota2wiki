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
import { CItemDetail } from '@src/components/item/item-detail';

/**
 * Component: Items
 */
@Component({
  components: {
    CItemDetail,
  },
})
export default class VItem extends Vue {
  public get itemName(): string {
    return this.$route.params.itemName;
  }

  private mounted(): void {
    this.$dt_background.token = 'fall';
  }

  private render(h: CreateElement): VNode {
    return (
      <div staticClass="v-item">
        <vd-swimlane>
          <vd-container>
            <c-item-detail key={this.itemName} name={this.itemName} />
          </vd-container>
        </vd-swimlane>
      </div>
    );
  }
}
