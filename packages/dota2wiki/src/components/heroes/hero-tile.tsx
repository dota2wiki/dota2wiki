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
import { ClassName } from 'void-ui';

/**
 * Component: HeroTile
 */
@Component
export class CHeroTile extends Vue {
  @Prop({ type: String, required: true })
  public readonly name!: string;

  public showVideo: boolean = false;

  private timeoutHandler?: number;
  private onMouseEnter(event: MouseEvent): void {
    this.timeoutHandler = window.setTimeout(() => (this.showVideo = true), 180);
  }
  private onMouseLeave(event: MouseEvent): void {
    window.clearTimeout(this.timeoutHandler);
    this.showVideo = false;
  }

  private render(h: CreateElement): VNode {
    return (
      <router-link
        staticClass="c-hero-tile"
        to={{ name: 'hero', params: { name: this.name } }}
        data-hero-name={this.name}
        nativeOnMouseenter={this.onMouseEnter}
        nativeOnMouseleave={this.onMouseLeave}
      >
        <i staticClass="c-hero-tile_image dt-hero-avatar-v" class={this.name} />
        {this.showVideo ? (
          <video staticClass="c-hero-tile_video" muted autoplay loop>
            <source
              src={this.$resources[`videos/heroes/${this.name}.webm`]}
              type="video/webm"
            />
          </video>
        ) : (
          h()
        )}
        <div staticClass="c-hero-tile_label">
          <span staticClass="c-hero-tile_label-content">
            {this.$locale.dict[this.name]}
          </span>
        </div>
      </router-link>
    );
  }
}
