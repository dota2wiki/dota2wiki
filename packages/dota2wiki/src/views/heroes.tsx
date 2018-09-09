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
import { CHeroesWall } from '@src/components/heroes/heroes-wall';

/**
 * Component: Heroes
 */
@Component({
  components: {
    CHeroesWall,
  },
})
export default class VHeroes extends Vue {
  private render(h: CreateElement): VNode {
    return (
      <div staticClass="v-heroes">
        <c-heroes-wall />
      </div>
    );
  }
}
