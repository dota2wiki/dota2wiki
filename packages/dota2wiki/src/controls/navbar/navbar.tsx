// tslint:disable:react-a11y-img-has-alt

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

import assets from '@src/assets';
import { ClassName, Theme, ThemeComponent } from 'void-ui';

const backgournds: string[] = ['home', 'heroes', 'store', 'watch', 'learn', 'mods'];

interface NavItem {
  key: string;
  name: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  {
    key: 'home',
    name: 'home',
  },
  {
    key: 'heroes',
    name: 'heroes',
    children: [
      {
        key: 'dota_hero',
        name: 'heroes',
      },
      {
        key: 'DOTA_SHOP_ITEMS',
        name: 'items',
      },
      {
        key: 'heroes',
        name: 'heroes',
      },
    ],
  },
  {
    key: 'heroes',
    name: 'heroes',
    children: [
      {
        key: 'heroes',
        name: 'heroes',
      },
      {
        key: 'heroes',
        name: 'heroes',
      },
      {
        key: 'heroes',
        name: 'heroes',
      },
    ],
  },
  {
    key: 'heroes',
    name: 'heroes',
    children: [
      {
        key: 'heroes',
        name: 'heroes',
      },
      {
        key: 'heroes',
        name: 'heroes',
      },
      {
        key: 'heroes',
        name: 'heroes',
      },
    ],
  },
  {
    key: 'heroes',
    name: 'heroes',
    children: [
      {
        key: 'heroes',
        name: 'heroes',
      },
      {
        key: 'heroes',
        name: 'heroes',
      },
      {
        key: 'heroes',
        name: 'heroes',
      },
    ],
  },
  {
    key: 'heroes',
    name: 'heroes',
    children: [
      {
        key: 'heroes',
        name: 'heroes',
      },
      {
        key: 'heroes',
        name: 'heroes',
      },
      {
        key: 'heroes',
        name: 'heroes',
      },
    ],
  },
];

/**
 * Component: Navbar
 */
@Component
export class CNavbar extends Vue implements ThemeComponent {
  @Prop({ type: String })
  public readonly theme?: Theme;
  public get themeValue(): Theme {
    return this.theme || this.$vd_theme.theme;
  }

  private selectedIndex: number = 0;

  @Watch('$route', { immediate: true })
  private watchRoute(): void {
    for (const record of this.$route.matched) {
      if (record.name) {
        const index: number = navItems.findIndex(
          item =>
            item.name === record.name ||
            (!!item.children &&
              !!item.children.find(child => child.name === record.name)),
        );
        if (index > -1) {
          this.selectedIndex = index;
          break;
        }
      }
    }
  }

  public get classes(): ClassName {
    return [`cp-theme_${this.themeValue}`];
  }

  private render(h: CreateElement): VNode {
    return (
      <header role="banner" staticClass="c-navbar" class={this.classes}>
        <div staticClass="c-navbar_sub-wrapper">
          {navItems.slice(1).map(
            (item, index) =>
              item.children ? (
                <div
                  staticClass="c-navbar_sub"
                  class={{ 'is-selected': index + 1 === this.selectedIndex }}
                >
                  <div staticClass="c-navbar_sub-background" />
                  {item.children.map(child => (
                    <router-link staticClass="c-navbar_sub-item" to={child.name}>
                      {child.key}
                    </router-link>
                  ))}
                </div>
              ) : (
                h()
              ),
          )}
        </div>
        <div staticClass="c-navbar_background-wrapper">
          <img
            staticClass="c-navbar_background is-selected"
            src={assets['images/topbar/topbar_small_png.png']}
          />
          {backgournds.map((bg, index) => (
            <img
              staticClass="c-navbar_background"
              class={{ 'is-selected': index === this.selectedIndex }}
              src={assets[`images/topbar/topbar_${bg}_small_png.png`]}
            />
          ))}
        </div>
        <div staticClass="c-navbar_main">
          <div staticClass="c-navbar_left" />
          <div staticClass="c-navbar_center">
            <router-link
              staticClass="c-navbar_item-home"
              class={{ 'is-selected': 0 === this.selectedIndex }}
              to={{ name: 'home' }}
            >
              <img
                staticClass="c-navbar_home-logo"
                src={assets['images/topbar/home_logo_hover_png.png']}
              />
            </router-link>
            {navItems.slice(1).map((item, index) => (
              <router-link
                staticClass="c-navbar_item"
                class={{ 'is-selected': index + 1 === this.selectedIndex }}
                to={{ name: item.name }}
              >
                {item.key}
              </router-link>
            ))}
          </div>
          <div staticClass="c-navbar_right" />
        </div>
      </header>
    );
  }
}
