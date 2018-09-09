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
import { Style } from 'void-ui';
import assets from '@src/assets';

/**
 * Component: Heroes
 */
@Component
export default class VHeroes extends Vue {
  private render(h: CreateElement): VNode {
    return (
      <div staticClass="v-heroes">
        {this.$db.heroList.map(hero => (
          <i staticClass={`dt-hero-avatar-v ${hero.name}`} />
        ))}
      </div>
    );
  }
}
