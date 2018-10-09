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
import { Item } from '@dota2wiki/database';
import { CAbility } from './ability';
import { formatValues } from '@src/locale/formatter';

/**
 * Component: Item
 */
@Component
export class CItem extends CAbility {
  public get model(): Item {
    return this.$db.itemMap[this.name];
  }

  public get label(): string {
    // stupid case, stupid valve
    return this.$locale.dict[`DOTA_Tooltip_Ability_${this.name}`] || this.name;
  }
  public get notes(): string[] {
    const name: string = this.name;
    const result: string[] = [];
    for (let index: number = 0; index < 10; index++) {
      const text: string | undefined = this.$locale.dict[
        `DOTA_Tooltip_ability_${name}_Note${index}`
      ];
      if (text) {
        result.push(text);
      } else {
        break;
      }
    }

    return result;
  }

  public get classes(): ClassName {
    return [`cp-theme_${this.themeValue}`];
  }

  protected renderDescription(): VNode[] {
    let description: string = this.description;

    this.model.special.forEach(specialItem => {
      description = description.replace(
        new RegExp(`%${specialItem.key}%`, 'g'),
        `<span class="ca-value-wrapper${
          this.model.info.baseLevel ? ' is-level' : ''
        }">${specialItem.value
          .map(
            (value, index) =>
              `<span class="ca-value${
                index + 1 === this.model.info.baseLevel ? ' is-active' : ''
              }">${value}</span>`,
          )
          .join('<i class="ca-divider">/</i>')}</span>`,
      );
    });

    description = description.replace(/%%/g, '<i class="ca-percent">%</i>');

    const titleRegex: RegExp = /<strong>[^<\/?strong>]+<\/strong>/g;
    const contents: string[] = description.split(titleRegex).filter(s => !!s);
    const titleMatches: RegExpMatchArray | null = description.match(titleRegex);

    return contents.map((content, index) => (
      <vd-card
        half-transparent
        raise
        bordered
        title={((titleMatches && titleMatches[index]) || '').replace(/<\/?strong>/g, '')}
      >
        <vd-card-content domPropsInnerHTML={content} />
      </vd-card>
    ));
  }

  protected renderSpecial(): VNode[] {
    return this.special
      .map(({ label, values }) => formatValues(label, values))
      .map(({ label, values }) => (
        <div>
          <span staticClass="ca-label">{label}</span>
          <span
            staticClass="ca-value-wrapper"
            class={{
              'is-level': values.length > 1 && this.model.info.baseLevel,
            }}
          >
            {values.map((value, index) => [
              <span
                staticClass="ca-value"
                class={{
                  'is-active': index + 1 === this.model.info.baseLevel,
                }}
              >
                {value}
              </span>,
              <span staticClass="ca-divider">/</span>,
            ])}
          </span>
        </div>
      ));
  }
}
