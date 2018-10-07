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
 * Component: ItemIcon
 */
@Component
export class CItemIcon extends Vue {
  @Prop({ type: String, required: true })
  public readonly name!: string;

  private render(h: CreateElement): VNode {
    return this.$db.itemMap[this.name].info.isRecipe ? (
      <div staticClass="c-item-icon is-recipe">
        <div staticClass="c-item-icon_recipe-mask">
          <div
            staticClass="c-item-icon_recipe-result dt-item-icon"
            class={this.$db.itemMap[this.name].info.result}
          />
        </div>
      </div>
    ) : (
      <div staticClass="c-item-icon is-item">
        <div staticClass="c-item-icon_icon dt-item-icon" class={this.name} />
      </div>
    );
  }
}
