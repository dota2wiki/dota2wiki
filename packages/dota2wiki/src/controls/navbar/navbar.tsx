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
  to: string;
  matched: boolean;
  expected?: string[];
  children?: NavItem[];
}

/**
 * Component: Navbar
 */
@Component
export class CNavbar extends Vue {
  private selectedIndex: number = 0;

  private navItems: NavItem[] = [
    {
      key: 'DOTA_HUD_BackToDashboard',
      to: '',
      matched: false,
      expected: ['home'],
    },
    {
      key: 'dota_hero',
      to: '/heroes',
      matched: false,
      children: [
        {
          key: 'dota_hero',
          to: '/heroes',
          matched: false,
          expected: ['heroes', 'hero'],
        },
        {
          key: 'DOTA_SHOP_ITEMS',
          to: '/items',
          matched: false,
          expected: ['items', 'item'],
        },
      ],
    },
  ];

  @Watch('$route', { immediate: true })
  private watchRoute(): void {
    this.navItems.forEach(item => {
      if (item.children) {
        item.children.forEach(
          child =>
            (child.matched =
              !!child.expected &&
              !!child.expected.find(
                e => !!this.$route.matched.find(m => m.meta.group === e),
              )),
        );
      }

      item.matched = item.children
        ? !!item.children.find(child => child.matched)
        : !!item.expected &&
          !!item.expected.find(e => !!this.$route.matched.find(c => c.meta.group === e));
    });

    this.selectedIndex = this.navItems.findIndex(item => item.matched);
  }

  private render(h: CreateElement): VNode {
    return (
      <header role="banner" staticClass="c-navbar">
        <div staticClass="c-navbar_sub-wrapper">
          {this.navItems.slice(1).map(
            item =>
              item.children ? (
                <div staticClass="c-navbar_sub" class={{ 'is-matched': item.matched }}>
                  <div staticClass="c-navbar_sub-background" />
                  {item.children.map(child => (
                    <router-link
                      staticClass="c-navbar_sub-item"
                      class={{ 'is-matched': child.matched }}
                      to={`/${this.$locale.language}${child.to}`}
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
              class={{ 'is-matched': index === this.selectedIndex }}
            />
          ))}
        </div>
        <div staticClass="c-navbar_main">
          <div staticClass="c-navbar_left">{this.$locale.language}</div>
          <div staticClass="c-navbar_center">
            <router-link
              staticClass="c-navbar_item-home"
              class={{ 'is-matched': this.navItems[0].matched }}
              to={`/${this.$locale.language}${this.navItems[0].to}`}
              title={this.$locale.dict['DOTA_HUD_BackToDashboard']}
            >
              <img
                staticClass="c-navbar_home-logo"
                src={this.$resources['images/topbar/home_logo_hover_png.png']}
              />
            </router-link>
            {this.navItems.slice(1).map(item => (
              <router-link
                staticClass="c-navbar_item"
                class={{ 'is-matched': item.matched }}
                to={`/${this.$locale.language}${item.to}`}
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
