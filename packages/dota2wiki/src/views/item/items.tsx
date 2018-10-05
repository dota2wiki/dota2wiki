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
  private mounted(): void {
    this.$dt_background.token = 'fall';
  }

  private render(h: CreateElement): VNode {
    return (
      <div staticClass="v-items" style="font-size: 12px">
        <vd-swimlane>
          <vd-container>
            <vd-flexbox gap="small">
              {this.$db.itemNames
                .filter(item => !item.startsWith('item_recipe'))
                .map(item => (
                  <vd-flexbox flex="none" direction="column">
                    <i staticClass="dt-item-icon" class={item} />
                    <span>{this.$locale.dict[`DOTA_Tooltip_Ability_${item}`]}</span>
                  </vd-flexbox>
                ))}
            </vd-flexbox>
          </vd-container>
        </vd-swimlane>
      </div>
    );
  }
}
