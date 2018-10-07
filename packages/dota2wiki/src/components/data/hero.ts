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
 * Component: Hero
 */
@Component
export class CHero extends Vue {
  @Prop({ type: String, required: true })
  public readonly name!: string;

  public get label(): string {
    return this.$locale.dict[this.name];
  }
  public get hype(): string {
    return this.$locale.dict[`${this.name}_hype`];
  }
  public get bio(): string {
    return this.$locale.dict[`${this.name}_bio`];
  }
}
