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
 * Component: TalentTree
 */
@Component
export class CTalentTree extends Vue implements ThemeComponent {
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

  @Prop({ type: Number, required: true })
  public readonly level!: number;

  @Model('change', { type: Array, required: true })
  public readonly selectedTalents!: string[];

  public get talents(): string[] {
    return this.$db.heroMap[this.name].talents;
  }

  private selectedTalentMap: Record<number, boolean> = {};

  @Watch('name', { immediate: true })
  private resetSelectedTalents(): void {
    const map: Record<number, boolean> = {};
    this.talents.forEach((value, index) => (map[index] = false));
    this.selectedTalentMap = map;

    this.$emit('change', []);
  }

  private onSelect(index: number): (event: MouseEvent) => void {
    return event => {
      if (index >= (this.selectedTalents.length + 1) * 2) {
        return;
      }

      const conflictIndex: number = index % 2 === 0 ? index + 1 : index - 1;

      this.selectedTalentMap[conflictIndex] = false;
      this.selectedTalentMap[index] = true;

      this.$emit('change', this.talents.filter((t, i) => this.selectedTalentMap[i]));
    };
  }

  private render(h: CreateElement): VNode {
    return (
      <div staticClass="c-talent-tree" class={this.classes}>
        <div staticClass="c-talent-tree_container">
          <div staticClass="c-talent-tree_background" />
          <div staticClass="c-talent-tree_background-texture" />
          <div staticClass="c-talent-tree_wrapper">
            <h3 staticClass="c-talent-tree_title">
              {this.$locale.dict['DOTA_StatBranch_TooltipTitle']}
            </h3>
            {this.talents.map((talent, index) => (
              <div
                staticClass={`c-talent-tree_item is-${index} is-${
                  index % 2 === 0 ? 'right' : 'left'
                }`}
                class={{
                  'is-selected': this.selectedTalentMap[index],
                }}
                role="button"
                onClick={this.onSelect(index)}
              >
                <div staticClass="c-talent-tree_item-inner">
                  {this.$locale.dict[`DOTA_Tooltip_ability_${talent}`]}
                </div>
              </div>
            ))}
            <div staticClass="c-talent-tree_level is-10">
              <div staticClass="c-talent-tree_level-inner">
                <c-level-badge level={10} />
              </div>
            </div>
            <div staticClass="c-talent-tree_level is-15">
              <div staticClass="c-talent-tree_level-inner">
                <c-level-badge level={15} />
              </div>
            </div>
            <div staticClass="c-talent-tree_level is-20">
              <div staticClass="c-talent-tree_level-inner">
                <c-level-badge level={20} />
              </div>
            </div>
            <div staticClass="c-talent-tree_level is-25">
              <div staticClass="c-talent-tree_level-inner">
                <c-level-badge level={25} />
              </div>
            </div>
            <div
              staticClass="c-talent-tree_badge-wrapper"
              role="button"
              onClick={this.resetSelectedTalents}
              title={this.$locale.dict['dota_settings_help_tips_reset']}
            >
              <div staticClass="c-talent-tree_badge is-background" />
              <div
                staticClass="c-talent-tree_badge"
                class={{
                  'is-levelup': this.level >= 9 && this.selectedTalents.length < 4,
                }}
              />
              <div
                staticClass="c-talent-tree_badge is-10"
                class={{
                  'is-right': this.selectedTalentMap[0],
                  'is-left': this.selectedTalentMap[1],
                }}
              />
              <div
                staticClass="c-talent-tree_badge is-15"
                class={{
                  'is-right': this.selectedTalentMap[2],
                  'is-left': this.selectedTalentMap[3],
                }}
              />
              <div
                staticClass="c-talent-tree_badge is-20"
                class={{
                  'is-right': this.selectedTalentMap[4],
                  'is-left': this.selectedTalentMap[5],
                }}
              />
              <div
                staticClass="c-talent-tree_badge is-25"
                class={{
                  'is-right': this.selectedTalentMap[6],
                  'is-left': this.selectedTalentMap[7],
                }}
              />
              <div
                staticClass="c-talent-tree_badge-progress"
                class={`is-${this.selectedTalents.length}`}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
