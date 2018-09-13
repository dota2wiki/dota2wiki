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
 * Component: Info
 */
@Component
export class CInfo extends Vue implements ThemeComponent {
  @Prop({ type: String })
  public readonly theme!: Theme;
  public get themeValue(): Theme {
    return this.theme || this.$vd_theme.theme;
  }

  public get classes(): ClassName {
    return [`cp-theme_${this.themeValue}`];
  }

  @Prop({ type: String })
  public readonly title?: String;

  private render(h: CreateElement): VNode {
    return (
      <vd-card staticClass="c-info" class={this.classes} bordered raise transparent>
        <div staticClass="c-info_background" />
        {this.title ? <vd-card-header tag="h3">{this.title}</vd-card-header> : h()}
        <vd-card-content>
          <div staticClass="c-info_wrapper">{this.$slots.default}</div>
        </vd-card-content>
      </vd-card>
    );
  }
}

/**
 * Component: InfoRow
 */
@Component
export class CInfoRow extends Vue {
  @Prop({ type: String, required: true })
  public readonly label!: string;

  private render(h: CreateElement): VNode {
    return (
      <div staticClass="c-info_row">
        <span staticClass="c-info_label">{this.label.replace(/(:|：)(\ +)?$/, '')}:</span>
        <span staticClass="c-info_value-wrapper">{this.$slots.default}</span>
      </div>
    );
  }
}

/**
 * Component: InfoValue
 */
@Component
export class CInfoValue extends Vue {
  @Prop({ type: Boolean, default: false })
  public readonly percentage!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly float!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly fake!: boolean;

  @Prop({ type: Number, required: true })
  public readonly value!: number;

  @Prop({ type: String })
  public readonly left?: string;

  @Prop({ type: String })
  public readonly right?: string;

  private render(h: CreateElement): VNode {
    return h(
      'span',
      {
        staticClass: 'c-info_value',
        class: {
          'is-fake': this.fake,
        },
      },
      [
        this.$slots.left || this.left,
        this.percentage
          ? `${(this.value * 100).toFixed(2)}%`
          : this.float
            ? this.value.toFixed(2)
            : this.value.toString(),
        this.$slots.right || this.right,
      ],
    );
  }
}
