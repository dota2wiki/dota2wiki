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
import {
  Hero,
  AttributeData,
  Attribute,
  AttackData,
  AttackCapability,
  ArmorData,
} from '@dota2wiki/database';

const levelMin: number = 0;
const levelMax: number = 24;

const armorBonusPrimary: number = 0.2;
const armorBonusSecondary: number = 0.16;

/**
 * Component: HeroStats
 */
@Component
export class CHeroStats extends Vue implements ThemeComponent {
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

  public get hero(): Hero {
    return this.$db.heroMap[this.name];
  }

  private level: number = 1;
  private onLevelChange(event: Event): void {
    this.level = parseInt((event.target as HTMLInputElement).value, 10);
  }

  public get attributes(): AttributeData {
    return this.hero.attributes;
  }
  public get attributeStrength(): number {
    return this.attributes.strength.base + this.attributes.strength.gain * this.level;
  }
  public get attributeAgility(): number {
    return this.attributes.agility.base + this.attributes.agility.gain * this.level;
  }
  public get attributeIntelligence(): number {
    return (
      this.attributes.intelligence.base + this.attributes.intelligence.gain * this.level
    );
  }

  private renderAttributes(): VNode {
    return (
      <vd-flexbox gap direction="column">
        <vd-flexbox tag="h3">
          {this.$locale.dict['DOTA_HeroStats_Castegory_Attributes']}
        </vd-flexbox>
        <vd-flexbox title={this.$locale.dict['DOTA_HeroStats_Strength_Desc']}>
          <span>{this.$locale.dict['DOTA_HeroStats_Strength_Name']}:</span>
          <span>
            {this.attributeStrength.toFixed(2)}({this.attributes.strength.base}+
            {this.attributes.strength.gain} /lv)
          </span>
        </vd-flexbox>
        <vd-flexbox title={this.$locale.dict['DOTA_HeroStats_Agility_Desc']}>
          <span>{this.$locale.dict['DOTA_HeroStats_Agility_Name']}: </span>
          <span>
            {this.attributeAgility.toFixed(2)}({this.attributes.agility.base}+
            {this.attributes.agility.gain} /lv)
          </span>
        </vd-flexbox>
        <vd-flexbox title={this.$locale.dict['DOTA_HeroStats_Intelligence_Desc']}>
          <span>{this.$locale.dict['DOTA_HeroStats_Intelligence_Name']}: </span>
          <span>
            {this.attributeIntelligence.toFixed(2)}({this.attributes.intelligence.base}+
            {this.attributes.intelligence.gain} /lv)
          </span>
        </vd-flexbox>
      </vd-flexbox>
    );
  }

  public get attack(): AttackData {
    return this.hero.attack;
  }

  public get attackRate(): number {
    return this.attack.rate;
  }
  public get attackSpeed(): number {
    return 100 + this.attributeAgility;
  }
  public get attackSpeedFake(): number {
    return this.attackRate === 1.7
      ? this.attackSpeed
      : (1.7 / this.attackRate) * (100 + this.attributeAgility);
  }
  public get attackPerSecond(): number {
    return this.attackSpeed / 100 / this.attackRate;
  }
  public get attackInterval(): number {
    return 1 / this.attackPerSecond;
  }

  public get attackDamageBonus(): number {
    switch (this.attributes.primary) {
      case Attribute.strength:
        return this.attributeStrength;
      case Attribute.agility:
        return this.attributeAgility;
      case Attribute.intelligence:
        return this.attributeIntelligence;
      default:
        return 0;
    }
  }
  public get attackDamageMin(): number {
    return this.attack.damage.min + this.attackDamageBonus;
  }
  public get attackDamageMax(): number {
    return this.attack.damage.max + this.attackDamageBonus;
  }

  public get attackRange(): number {
    return this.attack.range;
  }

  public get attackProjectileSpeed(): number {
    return this.attack.projectileSpeed;
  }

  private renderAttack(): VNode {
    return (
      <vd-flexbox gap direction="column">
        <vd-flexbox tag="h3">
          {this.$locale.dict['DOTA_HeroStats_Castegory_Attack']}
        </vd-flexbox>
        <vd-flexbox>
          <span>
            {this.$locale.dict['DOTA_HeroStats_AttackRate_Name']}/
            {this.$locale.dict['dota_ability_variable_attack']}:
          </span>
          <span>
            {this.attackRate.toFixed(2)}|{this.attackSpeed.toFixed(2)}(
            {this.attackSpeedFake.toFixed(2)}) |{this.attackPerSecond.toFixed(2)}
            /s |{this.attackInterval.toFixed(2)}s
          </span>
        </vd-flexbox>
        <vd-flexbox title={this.$locale.dict['DOTA_HeroStats_Damage_Desc']}>
          <span>{this.$locale.dict['DOTA_HeroStats_Damage_Name']}:</span>
          <span>
            {this.attackDamageMin.toFixed(2)}-{this.attackDamageMax.toFixed(2)}
          </span>
        </vd-flexbox>
        <vd-flexbox title={this.$locale.dict['DOTA_HeroStats_AttackRange_Desc']}>
          <span>{this.$locale.dict['DOTA_HeroStats_AttackRange_Name']}:</span>
          <span>{this.attackRange}</span>
        </vd-flexbox>
        {this.hero.attack.capability === AttackCapability.DOTA_UNIT_CAP_RANGED_ATTACK ? (
          <vd-flexbox title={this.$locale.dict['DOTA_HeroStats_ProjectileSpeed_Desc']}>
            <span>{this.$locale.dict['DOTA_HeroStats_ProjectileSpeed_Name']}:</span>
            <span>{this.attackProjectileSpeed}</span>
          </vd-flexbox>
        ) : (
          h()
        )}
      </vd-flexbox>
    );
  }

  // Defense
  public get armor(): ArmorData {
    return this.hero.armor;
  }

  public get armorPhysicalBonus(): number {
    return (
      (this.attributes.primary === Attribute.agility
        ? armorBonusPrimary
        : armorBonusSecondary) * this.attributeAgility
    );
  }

  public get armorPhysical(): number {
    return this.armor.armorPhysical + this.armorPhysicalBonus;
  }

  private renderDefense(): VNode {
    return (
      <vd-flexbox gap direction="column">
        <vd-flexbox tag="h3">
          {this.$locale.dict['DOTA_HeroStats_Castegory_Defense']}
        </vd-flexbox>
        <vd-flexbox title={this.$locale.dict['DOTA_HeroStats_Armor_Desc']}>
          <span>{this.$locale.dict['DOTA_HeroStats_Armor_Name']}:</span>
          <span>{this.armorPhysical.toFixed(2)}</span>
        </vd-flexbox>
      </vd-flexbox>
    );
  }

  private render(h: CreateElement): VNode {
    return (
      <vd-swimlane staticClass="c-hero-stats">
        <vd-container>
          <vd-flexbox gap>
            <vd-flexbox flex={100}>
              {/* tslint:disable-next-line:react-a11y-role-has-required-aria-props */}
              <input
                type="number"
                value={this.level}
                min={levelMin}
                max={levelMax}
                step={1}
                onChange={this.onLevelChange}
              />
              level: {this.level + 1}
            </vd-flexbox>

            {this.renderAttributes()}
            {this.renderAttack()}
            {this.renderDefense()}
          </vd-flexbox>
        </vd-container>
      </vd-swimlane>
    );
  }
}
