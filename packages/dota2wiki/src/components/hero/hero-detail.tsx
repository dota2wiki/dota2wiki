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
import { ClassName, Theme, ThemeComponent } from 'void-ui';
import { CHeroPortrait } from './dashboard/hero-portrait';
import { CHeroStats } from './dashboard/hero-stats';

/**
 * Component: HeroDetail
 */
@Component({
  components: {
    CHeroPortrait,
    CHeroStats,
  },
})
export class CHeroDetail extends Vue implements ThemeComponent {
  @Prop({ type: String })
  public readonly theme!: Theme;
  public get themeValue(): Theme {
    return this.theme || this.$vd_theme.theme;
  }

  public get classes(): ClassName {
    return [`cp-theme_${this.themeValue}`];
  }

  @Prop({ type: String, required: true })
  public readonly name!: string;

  private render(h: CreateElement): VNode {
    return (
      <div staticClass="c-hero-detail" class={this.classes}>
        <c-hero-portrait name={this.name} />
        <c-hero-stats name={this.name} />
      </div>
    );
  }
}
