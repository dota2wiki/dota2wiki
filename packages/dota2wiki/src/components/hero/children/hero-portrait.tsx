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
 * Component: HeroPortrait
 */
@Component
export class CHeroPortrait extends Vue implements ThemeComponent {
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

  // tslint:disable:react-a11y-img-has-alt
  private render(h: CreateElement): VNode {
    return (
      <vd-swimlane staticClass="c-hero-portrait" class={this.classes}>
        <div staticClass="c-hero-portrait_background-container">
          {/* <img
            staticClass="c-hero-portrait_background"
            src={
              this.$resources[
                'images/backgrounds/background_play_button_large_2x_png.png'
              ]
            }
          /> */}
        </div>
        <vd-container>
          <vd-flexbox gap align="stretch">
            <vd-flexbox flex="none">
              <div staticClass="c-hero-portrait_avatar">
                <img
                  staticClass="c-hero-portrait_avatar-background"
                  src={this.$resources['images/hero_selection/empty_hero_card_png.png']}
                />
                <i
                  staticClass="c-hero-portrait_avatar-image dt-hero-avatar-v"
                  class={this.name}
                />
                <video staticClass="c-hero-portrait_avatar-video" muted autoplay loop>
                  <source
                    src={this.$resources[`videos/heroes/${this.name}.webm`]}
                    type="video/webm"
                  />
                </video>
              </div>
            </vd-flexbox>
            <vd-flexbox direction="column" justify="end">
              <h1 staticClass="c-hero-portrait_name">{this.$locale.dict[this.name]}</h1>
              <p staticClass="c-hero-portrait_hype">
                {this.$locale.dict[`${this.name}_hype`]}
              </p>
            </vd-flexbox>
          </vd-flexbox>
        </vd-container>
      </vd-swimlane>
    );
  }
}
