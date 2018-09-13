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
import { ClassName, Theme, ThemeComponent } from 'void-ui';
import { Location } from 'vue-router';

const backgrounds: string[] = ['home', 'heroes', 'store', 'watch', 'learn', 'mods'];

interface NavItem {
  key: string;
  to: Location;
  sub?: string[];
  children?: NavItem[];
}

const navItems: NavItem[] = [
  {
    key: 'DOTA_HUD_BackToDashboard',
    to: {
      name: 'home',
    },
  },
  {
    key: 'dota_hero',
    to: {
      name: 'heroes',
    },
    children: [
      {
        key: 'dota_hero',
        to: {
          name: 'heroes',
        },
        sub: ['hero'],
      },
      {
        key: 'DOTA_SHOP_ITEMS',
        to: {
          name: 'items',
        },
        sub: ['item'],
      },
    ],
  },
];

/**
 * Component: Navbar
 */
@Component
export class CNavbar extends Vue {

  private language: string = '';

  private selectedIndex: number = 0;

  @Watch('$route', { immediate: true })
  private watchRoute(): void {
    this.language = this.$route.params.language;
    this.$locale.selectLanguage(this.language);

    for (const { name } of this.$route.matched) {
      if (name) {
        const index: number = navItems.findIndex(
          item =>
            item.to.name === name ||
            (!!item.sub && item.sub.includes(name)) ||
            (!!item.children &&
              !!item.children.find(
                child =>
                  child.to.name === name || (!!child.sub && child.sub.includes(name)),
              )),
        );
        if (index > -1) {
          this.selectedIndex = index;
          break;
        }
      }
    }
  }

  private render(h: CreateElement): VNode {
    return (
      <header role="banner" staticClass="c-navbar">
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
                    <router-link
                      staticClass="c-navbar_sub-item"
                      active-class="is-selected"
                      to={child.to}
                    >
                      {this.$locale.dict[child.key]}
                    </router-link>
                  ))}
                </div>
              ) : (
                h()
              ),
          )}
        </div>
        <div staticClass="c-navbar_background-wrapper">
          <div staticClass="c-navbar_background is-selected" />
          {backgrounds.map((bg, index) => (
            <div
              staticClass={`c-navbar_background is-${bg}`}
              class={{ 'is-selected': index === this.selectedIndex }}
            />
          ))}
        </div>
        <div staticClass="c-navbar_main">
          <div staticClass="c-navbar_left">{this.language}</div>
          <div staticClass="c-navbar_center">
            <router-link
              staticClass="c-navbar_item-home"
              class={{ 'is-selected': 0 === this.selectedIndex }}
              to={navItems[0].to}
              title={this.$locale.dict['DOTA_HUD_BackToDashboard']}
            >
              <img
                staticClass="c-navbar_home-logo"
                src={this.$resources['images/topbar/home_logo_hover_png.png']}
              />
            </router-link>
            {navItems.slice(1).map((item, index) => (
              <router-link
                staticClass="c-navbar_item"
                class={{ 'is-selected': index + 1 === this.selectedIndex }}
                to={item.to}
              >
                {this.$locale.dict[item.key]}
              </router-link>
            ))}
          </div>
          <div staticClass="c-navbar_right">
            <router-link to={{ params: { language: 'english' } }}>english</router-link>/
            <router-link to={{ params: { language: 'schinese' } }}>schinese</router-link>/
            <router-link to={{ params: { language: 'tchinese' } }}>tchinese</router-link>/
            <router-link to={{ params: { language: 'japanese' } }}>japanese</router-link>
          </div>
        </div>
      </header>
    );
  }
}
