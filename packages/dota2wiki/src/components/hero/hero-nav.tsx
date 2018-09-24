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
import { Style, ClassName, Theme, ThemeComponent } from 'void-ui';

/**
 * Component: HeroNav
 */
@Component
export class CHeroNav extends Vue implements ThemeComponent {
  @Prop({ type: String })
  public readonly theme?: Theme;
  public get themeValue(): Theme {
    return this.theme || this.$vd_theme.theme;
  }

  public get classes(): ClassName {
    return [`cp-theme_${this.themeValue}`];
  }

  @Prop({ type: String, required: true })
  public readonly name!: string;

  public get itemsSource(): [string, string, string][] {
    return [
      [
        'DOTA_HeroLoadout_Stats',
        'hero-dashboard',
        `/${this.$locale.language}/hero/${this.name}`,
      ],
      [
        'DOTA_Abilities',
        'hero-ability',
        `/${this.$locale.language}/hero/${this.name}/ability/${
          this.$db.heroMap[this.name].abilities[0]
        }`,
      ],
    ];
  }

  private render(h: CreateElement): VNode {
    return (
      <div staticClass="c-hero-nav" class={this.classes}>
        <div staticClass="c-hero-nav_background" />
        {this.itemsSource.map(([key, name, to]) => (
          <router-link
            staticClass="c-hero-nav_item"
            class={{ 'is-active': this.$route.name === name }}
            to={to}
          >
            {this.$locale.dict[key]}
            <div staticClass="c-hero-nav_indicator" />
          </router-link>
        ))}
      </div>
    );
  }
}
