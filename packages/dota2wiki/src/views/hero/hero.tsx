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
import { Team } from '@dota2wiki/database';
import { CHeroChange } from '@src/components/hero/hero-change';
import { CHeroNav } from '@src/components/hero/hero-nav';
import { CHeroPortrait } from '@src/components/hero/hero-portrait';

/**
 * Component: Hero
 */
@Component({
  components: {
    CHeroChange,
    CHeroNav,
    CHeroPortrait,
  },
})
export default class VHero extends Vue {
  public get heroName(): string {
    return this.$route.params.heroName;
  }

  @Watch('$route', { immediate: true })
  private setBackground(): void {
    this.$dt_background.token =
      this.$db.heroMap[this.heroName].team === Team.good ? 'good' : 'bad';
  }

  private render(h: CreateElement): VNode {
    return (
      <div staticClass="v-hero">
        <vd-swimlane>
          <vd-container>
            <c-hero-change />
            <c-hero-portrait key={this.heroName} name={this.heroName} />
          </vd-container>
        </vd-swimlane>
        <vd-swimlane>
          <vd-container>
            <c-hero-nav name={this.heroName} />
            <router-view />
          </vd-container>
        </vd-swimlane>
      </div>
    );
  }
}
