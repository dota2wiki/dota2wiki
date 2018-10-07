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
  private render(h: CreateElement): VNode {
    return (
      <div staticClass="c-item-wall">
        <vd-container>
          <vd-flexbox direction="column" align="stretch" gap="xlarge">
            <vd-flexbox tag="h1">{this.$locale.dict['DOTA_SHOP_ITEMS']}</vd-flexbox>

            <vd-flexbox>
              <vd-flexbox gap="small">
                <vd-flexbox flex="none" wrap="nowrap" gap="small">
                  {this.$db.itemGroupMap.basics.map(group => (
                    <vd-flexbox flex="none" direction="column" gap="small">
                      {group.items.map(item => (
                        <vd-flexbox flex="none">
                          <c-item-tile key={item.name} name={item.name} />
                        </vd-flexbox>
                      ))}
                    </vd-flexbox>
                  ))}
                  <vd-flexbox flex="none" direction="column" gap="small">
                    <vd-flexbox flex="none">
                      <div staticClass="dt-item-icon" />
                    </vd-flexbox>
                  </vd-flexbox>
                </vd-flexbox>

                <vd-flexbox flex="none" wrap="nowrap" gap="small">
                  {this.$db.itemGroupMap.upgrades.map(group => (
                    <vd-flexbox flex="none" direction="column" gap="small">
                      {group.items.map(item => (
                        <vd-flexbox flex="none">
                          <c-item-tile key={item.name} name={item.name} />
                        </vd-flexbox>
                      ))}
                    </vd-flexbox>
                  ))}
                </vd-flexbox>
              </vd-flexbox>
            </vd-flexbox>

            <vd-flexbox>
              <vd-flexbox flex={100} gap="small">
                {this.$db.itemGroupMap.others.map(item => (
                  <vd-flexbox flex="none">
                    <c-item-tile key={item.name} name={item.name} />
                  </vd-flexbox>
                ))}
              </vd-flexbox>
            </vd-flexbox>

            <vd-flexbox>
              <vd-flexbox flex={100} gap="small">
                {this.$db.itemGroupMap.recipes.map(item => (
                  <vd-flexbox flex="none">
                    <c-item-tile key={item.name} name={item.name} />
                  </vd-flexbox>
                ))}
              </vd-flexbox>
            </vd-flexbox>

            <vd-flexbox>
              <vd-flexbox flex={100} gap="small">
                {this.$db.itemGroupMap.obsolete.map(item => (
                  <vd-flexbox flex="none">
                    <c-item-tile key={item.name} name={item.name} />
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
