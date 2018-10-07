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
      <div staticClass="c-item-tile" data-name={this.name}>
        <c-item-icon name={this.name} />
        <div>{this.name}</div>
        <div>{this.label}</div>
      </div>
    );
  }
}
