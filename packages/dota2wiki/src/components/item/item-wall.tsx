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
import { CItemTile } from './item-tile';
import { Item } from '@dota2wiki/database';

/**
 * Component: ItemWall
 */
@Component({
  components: {
    CItemTile,
  },
})
export class CItemWall extends Vue {
  private mounted(): void {
    let count: number = 0;
    this.$db.itemGroupMap.basics.forEach(g => (count += g.items.length));
    this.$db.itemGroupMap.upgrades.forEach(g => (count += g.items.length));
    count += this.$db.itemGroupMap.recipes.length;
    count += this.$db.itemGroupMap.others.length;
    count += this.$db.itemGroupMap.obsolete.length;

    console.log(this.$db.itemList.length, count);
  }

  private render(h: CreateElement): VNode {
    return (
      <div staticClass="c-item-wall">
        <vd-container>
          <vd-flexbox gap="xlarge">
            <vd-flexbox tag="h1" flex={100} justify="center">
              {this.$locale.dict['DOTA_SHOP_ITEMS']}
            </vd-flexbox>

            <vd-flexbox flex="none">
              <vd-flexbox flex="none" wrap="nowrap" gap="small">
                {this.$db.itemGroupMap.basics.map(group => (
                  <vd-flexbox direction="column" gap="small">
                    {group.items.map(item => (
                      <vd-flexbox flex="none">
                        <c-item-tile name={item.name} />
                      </vd-flexbox>
                    ))}
                  </vd-flexbox>
                ))}
              </vd-flexbox>
            </vd-flexbox>

            <vd-flexbox flex="none">
              <vd-flexbox flex="none" wrap="nowrap" gap="small">
                {this.$db.itemGroupMap.upgrades.map(group => (
                  <vd-flexbox direction="column" gap="small">
                    {group.items.map(item => (
                      <vd-flexbox flex="none">
                        <c-item-tile name={item.name} />
                      </vd-flexbox>
                    ))}
                  </vd-flexbox>
                ))}
              </vd-flexbox>
            </vd-flexbox>

            <vd-flexbox flex={100}>
              <vd-flexbox flex={100} gap="small">
                {this.$db.itemGroupMap.others.map(item => (
                  <vd-flexbox flex="none">
                    <c-item-tile name={item.name} />
                  </vd-flexbox>
                ))}
              </vd-flexbox>
            </vd-flexbox>

            <vd-flexbox flex={100}>
              <vd-flexbox flex={100} gap="small">
                {this.$db.itemGroupMap.recipes.map(item => (
                  <vd-flexbox flex="none">
                    <c-item-tile name={item.name} />
                  </vd-flexbox>
                ))}
              </vd-flexbox>
            </vd-flexbox>

            <vd-flexbox flex={100}>
              <vd-flexbox flex={100} gap="small">
                {this.$db.itemGroupMap.obsolete.map(item => (
                  <vd-flexbox flex="none">
                    <c-item-tile name={item.name} />
                  </vd-flexbox>
                ))}
              </vd-flexbox>
            </vd-flexbox>
          </vd-flexbox>
        </vd-container>
      </div>
    );
  }
}
