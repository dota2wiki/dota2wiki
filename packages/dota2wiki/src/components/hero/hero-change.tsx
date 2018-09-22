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
 * Component: heroChange
 */
@Component
export class CHeroChange extends Vue {
  public get current(): string {
    return this.$route.params.heroName;
  }

  public get previous(): string {
    const current: number = this.$db.heroNames.indexOf(this.current);

    return this.$db.heroNames[current > 0 ? current - 1 : this.$db.heroNames.length - 1];
  }

  public get next(): string {
    const current: number = this.$db.heroNames.indexOf(this.current);

    return this.$db.heroNames[current < this.$db.heroNames.length - 1 ? current + 1 : 0];
  }

  private render(h: CreateElement): VNode {
    return (
      <div staticClass="c-hero-change">
        <vd-flexbox gap="small">
          <vd-flexbox justify="start">
            <router-link to={{ params: { heroName: this.previous } }}>
              &lt;&nbsp;
              {this.$locale.dict[this.previous]}
            </router-link>
          </vd-flexbox>
          <vd-flexbox justify="center">{this.$locale.dict[this.current]}</vd-flexbox>
          <vd-flexbox justify="end">
            <router-link to={{ params: { heroName: this.next } }}>
              {this.$locale.dict[this.next]}
              &nbsp;&gt;
            </router-link>
          </vd-flexbox>
        </vd-flexbox>
      </div>
    );
  }
}
