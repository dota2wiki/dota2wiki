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
import { CItem } from '../data/item';
import { Item } from '@dota2wiki/database';

/**
 * Component: ItemTile
 */
@Component
export class CItemTile extends CItem {
  private render(h: CreateElement): VNode {
    return (
      <router-link
        staticClass="c-item-tile"
        data-name={this.name}
        to={`/${this.$locale.language}/item/${this.name}`}
        title={this.label}
      >
        <c-item-icon name={this.name} />
        <span staticClass="c-item-tile_label">{this.label}</span>
      </router-link>
    );
  }
}
