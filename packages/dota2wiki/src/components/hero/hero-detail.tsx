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
import { CHeroPortrait } from './children/hero-portrait';
import { ClassName, Theme, ThemeComponent } from 'void-ui';

/**
 * Component: HeroDetail
 */
@Component({
  components: {
    CHeroPortrait,
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
      </div>
    );
  }
}
