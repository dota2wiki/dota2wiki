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

/**
 * Component: App
 */
@Component
export default class VApp extends Vue implements ThemeComponent {
  @Prop({ type: String })
  public readonly theme?: Theme;
  public get themeValue(): Theme {
    return this.theme || this.$vd_theme.theme;
  }

  public get classes(): ClassName {
    return [`vp-theme_${this.themeValue}`];
  }

  private render(h: CreateElement): VNode {
    return (
      <div staticClass="v-app" class={this.classes}>
        <router-view staticClass="v-app_wrapper" />
      </div>
    );
  }
}
