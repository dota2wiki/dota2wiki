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
import { CHeroTile } from './hero-tile';

/**
 * Component: HeroesWall
 */
@Component({
  components: {
    CHeroTile,
  },
})
export class CHeroesWall extends Vue {
  private render(h: CreateElement): VNode {
    return (
      <div staticClass="c-heroes-wall">
        <div staticClass="c-heroes-wall_container">
          <vd-flexbox gap="large">
            {this.$db.heroGroups.map(group => (
              <vd-flexbox flex={100}>
                <vd-flexbox gap="small">
                  {group.heroes.map(hero => (
                    <vd-flexbox flex="none">
                      <c-hero-tile name={hero.name} />
                    </vd-flexbox>
                  ))}
                </vd-flexbox>
              </vd-flexbox>
            ))}
          </vd-flexbox>
        </div>
      </div>
    );
  }
}
