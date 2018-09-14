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
import { CLevelInput } from './level-input';
import { CTalentTree } from './talent-tree';
import { CHeroStats } from './hero-stats';

/**
 * Component: HeroDashboard
 */
@Component({
  components: {
    CLevelInput,
    CTalentTree,
    CHeroStats,
  },
})
export class CHeroDashboard extends Vue {
  @Prop({ type: String, required: true })
  public readonly name!: string;

  private level: number = 0;
  private onLevelChange(value: number): void {
    this.level = value;
  }

  private selectedTalents: string[] = [];
  private onSelectedTalentsChange(value: string[]): void {
    this.selectedTalents = value;
  }

  private render(h: CreateElement): VNode {
    return (
      <vd-swimlane staticClass="c-hero-dashboard">
        <vd-container>
          <vd-flexbox direction="column" align="stretch" gap>
            <vd-flexbox gap>
              <vd-flexbox flex={{ ltLg: 100 }}>
                <c-level-input value={this.level} onChange={this.onLevelChange} />
              </vd-flexbox>
              <vd-flexbox flex={{ ltLg: 100 }}>
                <c-talent-tree
                  name={this.name}
                  level={this.level}
                  selected-talents={this.selectedTalents}
                  onChange={this.onSelectedTalentsChange}
                />
              </vd-flexbox>
            </vd-flexbox>
            <vd-flexbox>
              <c-hero-stats
                name={this.name}
                level={this.level}
                selected-talents={this.selectedTalents}
              />
            </vd-flexbox>
          </vd-flexbox>
        </vd-container>
      </vd-swimlane>
    );
  }
}
