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
            <vd-flexbox direction="column" align="stretch" gap>
              <vd-flexbox>
                <c-hero-change />
              </vd-flexbox>
              <vd-flexbox>
                <c-hero-portrait key={this.heroName} name={this.heroName} />
              </vd-flexbox>
            </vd-flexbox>
          </vd-container>
        </vd-swimlane>
        <vd-swimlane>
          <vd-container>
            <vd-flexbox direction="column" align="stretch" gap>
              <vd-flexbox>
                <c-hero-nav name={this.heroName} />
              </vd-flexbox>
              <vd-flexbox>
                <router-view />
              </vd-flexbox>
            </vd-flexbox>
          </vd-container>
        </vd-swimlane>
      </div>
    );
  }
}
