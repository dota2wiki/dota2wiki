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
import { Hero, AttackCapability, RoleData } from '@dota2wiki/database';
import { capitalize } from 'dota2wiki/src/utils/common';

function sortRole(a: [keyof RoleData, number], b: [keyof RoleData, number]): number {
  return a[0] === 'complexity' ? -1 : b[0] === 'complexity' ? 1 : b[1] - a[1];
}

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

  public get hero(): Hero {
    return this.$db.heroMap[this.name];
  }

  public get attackCapability(): string {
    return this.$locale.dict[
      this.hero.attack.capability === AttackCapability.DOTA_UNIT_CAP_MELEE_ATTACK
        ? 'DOTA_AttackCapability_Melee'
        : 'DOTA_AttackCapability_Ranged'
    ];
  }

  private roleRender([role, value]: [keyof RoleData, number]): VNode {
    if (!value) {
      return h();
    }

    const label: string =
      role === 'complexity'
        ? this.$locale.dict['DOTA_HeroComplexity']
        : this.$locale.dict[`DOTA_HeroRole_${capitalize(role)}`];
    const title: string =
      role === 'complexity'
        ? this.$locale.dict[`DOTA_HeroComplexity_Description_${value}`]
        : this.$locale.dict[`DOTA_HeroRole_Description_${capitalize(role)}`];

    return (
      <vd-flexbox flex="none" align="center" title={title}>
        {label}
        {[1, 2, 3].map((_, index) => (
          <span
            staticClass={`c-hero-portrait_${
              index < value ? 'role-level' : 'role-level-empty'
            }`}
          />
        ))}
      </vd-flexbox>
    );
  }

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
                <video staticClass="c-hero-portrait_avatar-video" muted autoplay loop>
                  <source
                    src={this.$resources[`videos/heroes/${this.name}.webm`]}
                    type="video/webm"
                  />
                </video>
              </div>
            </vd-flexbox>
            <vd-flexbox direction="column" justify="end" align="stretch" gap>
              <vd-flexbox tag="h1" staticClass="c-hero-portrait_name" flex="none">
                {this.$locale.dict[this.name]}
              </vd-flexbox>
              <vd-flexbox staticClass="c-hero-portrait_roles" flex="none" gap>
                <vd-flexbox flex="none">{this.attackCapability}</vd-flexbox>
                {(Object.entries(this.hero.roles) as [keyof RoleData, number][])
                  .sort(sortRole)
                  .map(this.roleRender)}
                <vd-flexbox />
                <vd-flexbox />
              </vd-flexbox>
              <vd-flexbox tag="p" staticClass="c-hero-portrait_hype" flex="none">
                {this.$locale.dict[`${this.name}_hype`]}
              </vd-flexbox>
            </vd-flexbox>
          </vd-flexbox>
        </vd-container>
      </vd-swimlane>
    );
  }
}
