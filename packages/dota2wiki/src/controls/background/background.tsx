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

declare module 'vue/types/vue' {
  interface Vue {
    $dt_background: CBackground;
  }
}

/**
 * Component: Background
 */
@Component
export class CBackground extends Vue implements ThemeComponent {
  @Prop({ type: String })
  public readonly theme!: Theme;
  public get themeValue(): Theme {
    return this.theme || this.$vd_theme.theme;
  }

  public token: string = 'default';

  public get classes(): ClassName {
    return [`cp-theme_${this.themeValue}`, `cp-token_${this.token}`];
  }

  private beforeCreate(): void {
    Vue.prototype.$dt_background = this;
  }

  private render(h: CreateElement): VNode {
    return this.$isServer ? (
      h()
    ) : (
      <div staticClass="c-background" class={this.classes}>
        <div staticClass="c-background_image" />
        <div staticClass="c-background_multiply" />
      </div>
    );
  }
}
