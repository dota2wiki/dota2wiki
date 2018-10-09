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
import { CItem } from '@src/components/data/item';
import { formatValues } from '@src/locale';

/**
 * Component: ItemDetail
 */
@Component
export class CItemDetail extends CItem {
  private render(h: CreateElement): VNode {
    return (
      <div staticClass="c-item-detail" class={this.classes}>
        <vd-flexbox direction="column" align="stretch" gap>
          <vd-flexbox>
            <vd-card raise bordered>
              <vd-card-content>
                <vd-flexbox gap>
                  <vd-flexbox flex="none">
                    <c-item-icon staticClass="c-item-detail_icon" name={this.name} />
                  </vd-flexbox>
                  <vd-flexbox direction="column" align="stretch" gap="small">
                    <vd-flexbox tag="h1" staticClass="c-item-detail_label">
                      {this.label}
                    </vd-flexbox>
                    <vd-flexbox staticClass="c-item-detail_lore">{this.lore}</vd-flexbox>
                  </vd-flexbox>
                </vd-flexbox>
              </vd-card-content>
            </vd-card>
          </vd-flexbox>

          {this.description && (
            <vd-flexbox gap align="stretch">
              {this.renderDescription().map(section => (
                <vd-flexbox align="stretch" flex={{ ltMd: 100 }}>
                  {section}
                </vd-flexbox>
              ))}
            </vd-flexbox>
          )}

          {this.notes.length > 0 && (
            <vd-flexbox>
              <vd-note half-transparent raise bordered title={'提示'}>
                {this.notes.map(note => (
                  <p domPropsInnerHTML={note} />
                ))}
              </vd-note>
            </vd-flexbox>
          )}

          <vd-flexbox>
            <vd-card
              half-transparent
              raise
              bordered
              title={this.$locale.dict['DOTA_HeroLoadout_Stats']}
            >
              <vd-card-content>{this.renderSpecial()}</vd-card-content>
            </vd-card>
          </vd-flexbox>
        </vd-flexbox>
      </div>
    );
  }
}
