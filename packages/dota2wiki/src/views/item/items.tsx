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
      <div staticClass="v-items">
        <vd-swimlane>
          <vd-container>
            <vd-flexbox direction="column" gap>
              {this.$db.heroGroups.map(group => (
                <vd-flexbox gap="small">
                  {group.heroes.map(hero => (
                    <vd-flexbox flex="none">
                      <i
                        staticClass="dt-hero-avatar-h"
                        class={[group.primary, hero.name]}
                      />
                    </vd-flexbox>
                  ))}
                </vd-flexbox>
              ))}
            </vd-flexbox>
          </vd-container>
        </vd-swimlane>
      </div>
    );
  }
}
