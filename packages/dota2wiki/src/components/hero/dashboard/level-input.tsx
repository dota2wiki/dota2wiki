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

/**
 * Component: LevelInput
 */
@Component
export class CLevelInput extends Vue {
  @Model('change', { type: Number, required: true })
  public readonly value!: number;

  private onLevelMin(event: Event): void {
    this.$emit('change', 0);
  }

  private onLevelDown(event: Event): void {
    this.$emit('change', this.value - 1);
  }

  private onLevelUp(event: Event): void {
    this.$emit('change', this.value + 1);
  }

  private onLevelMax(event: Event): void {
    this.$emit('change', 24);
  }

  private render(h: CreateElement): VNode {
    return (
      <vd-card staticClass="c-level-input" bordered raise half-transparent>
        <vd-card-content>
          <vd-flexbox staticClass="c-level-input" gap align="center">
            <vd-flexbox flex="none">
              <vd-button shape="square" skin="silk" onClick={this.onLevelMin}>
                min
              </vd-button>
            </vd-flexbox>
            <vd-flexbox flex="none">
              <vd-button shape="square" skin="silk" onClick={this.onLevelDown}>
                -
              </vd-button>
            </vd-flexbox>
            <vd-flexbox flex="none">
              <c-level-badge level={this.value + 1} />
            </vd-flexbox>
            <vd-flexbox flex="none">
              <vd-button shape="square" skin="silk" onClick={this.onLevelUp}>
                +
              </vd-button>
            </vd-flexbox>
            <vd-flexbox flex="none">
              <vd-button shape="square" skin="silk" onClick={this.onLevelMax}>
                max
              </vd-button>
            </vd-flexbox>
          </vd-flexbox>
        </vd-card-content>
      </vd-card>
    );
  }
}
