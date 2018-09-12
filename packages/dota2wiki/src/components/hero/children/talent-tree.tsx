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

  @Prop({ type: Array, required: true })
  public readonly talents!: string[];

  private selectedTalents: Record<number, boolean> = {};

  @Watch('talents', { immediate: true })
  private watchTalents(): void {
    const map: Record<number, boolean> = {};
    this.talents.forEach((value, index) => (map[index] = false));
    this.selectedTalents = map;
  }

  private onSelect(index: number): (event: MouseEvent) => void {
    return event => {
      const conflictIndex: number = index % 2 === 0 ? index + 1 : index - 1;

      this.selectedTalents[conflictIndex] = false;
      this.selectedTalents[index] = true;

      this.$emit('change', this.talents.filter((t, i) => this.selectedTalents[i]));
    };
  }

  private render(h: CreateElement): VNode {
    return (
      <div staticClass="c-talent-tree" class={this.classes}>
        <div staticClass="c-talent-tree_container">
          <div staticClass="c-talent-tree_background" />
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
                  'is-selected': this.selectedTalents[index],
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
          </div>
        </div>
      </div>
    );
  }
}
