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
 * Component: LevelBadge
 */
@Component
export class CLevelBadge extends Vue implements ThemeComponent {
  @Prop({ type: String })
  public readonly theme!: Theme;
  public get themeValue(): Theme {
    return this.theme || this.$vd_theme.theme;
  }

  public get classes(): ClassName {
    return [`cp-theme_${this.themeValue}`];
  }

  @Prop({ type: Number, required: true })
  public readonly level!: number;

  private render(h: CreateElement): VNode {
    return (
      <span staticClass="c-level-badge" class={this.classes}>
        <span staticClass="c-level-badge_inner">{this.level}</span>
      </span>
    );
  }
}
