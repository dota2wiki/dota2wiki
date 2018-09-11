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
  DefenseData,
  MobilityData,
} from '@dota2wiki/database';
import { toPercentage } from '@src/utils/filters';
import {
  VisionData,
  StatusData,
} from '../../../../../@dota2wiki/database/dist/common/models/hero';

const levelMin: number = 0;
const levelMax: number = 24;

const spellAmpBonusPrimary: number = 0.000875;
const spellAmpBonusSecondary: number = 0.0007;

const armorBonusPrimary: number = 0.2;
const armorBonusSecondary: number = 0.16;

const magicResistBonusPrimary: number = 0.001;
const magicResistBonusSecondary: number = 0.0008;

const movementSpeedBonusPrimary: number = 0.000625;
const movementSpeedBonusSecondary: number = 0.0005;

const healthBonusPrimary: number = 22.5;
const healthBonusSecondary: number = 18;

const healthRegenBonusPrimary: number = 0.006875;
const healthRegenBonusSecondary: number = 0.0055;

const manaBonusPrimary: number = 15;
const manaBonusSecondary: number = 12;

const manaRegenBonusPrimary: number = 0.0225;
const manaRegenBonusSecondary: number = 0.018;

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

  private level: number = 0;
  private onLevelChange(event: Event): void {
    this.level = parseInt((event.target as HTMLInputElement).value, 10);
  }

  private renderLevel(): VNode {
    return (
      <vd-flexbox flex={100} gap>
        <vd-flexbox flex="none">
          <vd-button shape="square" onClick={() => (this.level = 0)}>
            min
          </vd-button>
        </vd-flexbox>
        <vd-flexbox flex="none">
          <vd-button shape="square" onClick={() => this.level--}>
            -
          </vd-button>
        </vd-flexbox>

        <vd-flexbox flex="none">Level: {this.level + 1}</vd-flexbox>

        <vd-flexbox flex="none">
          <vd-button shape="square" onClick={() => this.level++}>
            +
          </vd-button>
        </vd-flexbox>
        <vd-flexbox flex="none">
          <vd-button shape="square" onClick={() => (this.level = 24)}>
            max
          </vd-button>
        </vd-flexbox>
      </vd-flexbox>
    );
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

  public get damageBonus(): number {
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
  public get damageMin(): number {
    return this.attack.damage.min + this.damageBonus;
  }
  public get damageMax(): number {
    return this.attack.damage.max + this.damageBonus;
  }

  public get attackRange(): number {
    return this.attack.range;
  }

  public get projectileSpeed(): number {
    return this.attack.projectileSpeed;
  }

  public get spellAmp(): number {
    return (
      this.attributeIntelligence *
      (this.attributes.primary === Attribute.intelligence
        ? spellAmpBonusPrimary
        : spellAmpBonusSecondary)
    );
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
            {this.damageMin.toFixed(2)}-{this.damageMax.toFixed(2)}
          </span>
        </vd-flexbox>
        <vd-flexbox title={this.$locale.dict['DOTA_HeroStats_AttackRange_Desc']}>
          <span>{this.$locale.dict['DOTA_HeroStats_AttackRange_Name']}:</span>
          <span>{this.attackRange}</span>
        </vd-flexbox>
        {this.hero.attack.capability === AttackCapability.DOTA_UNIT_CAP_RANGED_ATTACK ? (
          <vd-flexbox title={this.$locale.dict['DOTA_HeroStats_ProjectileSpeed_Desc']}>
            <span>{this.$locale.dict['DOTA_HeroStats_ProjectileSpeed_Name']}:</span>
            <span>{this.projectileSpeed}</span>
          </vd-flexbox>
        ) : (
          h()
        )}
        <vd-flexbox>
          <span>{this.$locale.dict['DOTA_HUD_SpellAmp']}:</span>
          <span>{toPercentage(this.spellAmp)}</span>
        </vd-flexbox>
      </vd-flexbox>
    );
  }

  // Defense
  public get defense(): DefenseData {
    return this.hero.defense;
  }

  public get armorBonus(): number {
    return (
      this.attributeAgility *
      (this.attributes.primary === Attribute.agility
        ? armorBonusPrimary
        : armorBonusSecondary)
    );
  }
  public get armor(): number {
    return this.defense.armorPhysical + this.armorBonus;
  }

  public get physicalResist(): number {
    return (0.05 * this.armor) / (1 + 0.05 * Math.abs(this.armor));
  }

  public get magicResistBonus(): number {
    return (
      1 -
      this.attributeStrength *
        (this.attributes.primary === Attribute.strength
          ? magicResistBonusPrimary
          : magicResistBonusSecondary)
    );
  }
  public get magicResist(): number {
    return 1 - (1 - this.defense.magicalResistance / 100) * this.magicResistBonus;
  }

  public get statusResist(): number {
    return 0;
  }

  public get evasion(): number {
    return 0;
  }

  private renderDefense(): VNode {
    return (
      <vd-flexbox gap direction="column">
        <vd-flexbox tag="h3">
          {this.$locale.dict['DOTA_HeroStats_Castegory_Defense']}
        </vd-flexbox>
        <vd-flexbox title={this.$locale.dict['DOTA_HeroStats_Armor_Desc']}>
          <span>{this.$locale.dict['DOTA_HeroStats_Armor_Name']}:</span>
          <span>{this.armor.toFixed(2)}</span>
        </vd-flexbox>
        <vd-flexbox>
          <span>{this.$locale.dict['DOTA_HUD_PhysicalResist']}:</span>
          <span>{toPercentage(this.physicalResist)}</span>
        </vd-flexbox>
        <vd-flexbox>
          <span>{this.$locale.dict['DOTA_HUD_MagicResist']}:</span>
          <span>{toPercentage(this.magicResist)}</span>
        </vd-flexbox>
        <vd-flexbox>
          <span>{this.$locale.dict['DOTA_HUD_StatusResist']}:</span>
          <span>{toPercentage(this.statusResist)}</span>
        </vd-flexbox>
        <vd-flexbox>
          <span>{this.$locale.dict['DOTA_HUD_Evasion']}:</span>
          <span>{toPercentage(this.evasion)}</span>
        </vd-flexbox>
      </vd-flexbox>
    );
  }

  public get mobility(): MobilityData {
    return this.hero.mobility;
  }

  public get movementSpeed(): number {
    return (
      this.mobility.speed *
      (1 +
        this.attributeAgility *
          (this.attributes.primary === Attribute.agility
            ? movementSpeedBonusPrimary
            : movementSpeedBonusSecondary))
    );
  }

  public get turnRate(): number {
    return this.mobility.turnRate;
  }

  public get vision(): VisionData {
    return this.hero.vision;
  }

  public get visionDay(): number {
    return this.vision.day;
  }
  public get visionNight(): number {
    return this.vision.night;
  }

  private renderMobility(): VNode {
    return (
      <vd-flexbox gap direction="column">
        <vd-flexbox tag="h3">
          {this.$locale.dict['DOTA_HeroStats_Castegory_Mobility']}
        </vd-flexbox>
        <vd-flexbox title={this.$locale.dict['DOTA_HeroStats_MovementSpeed_Desc']}>
          <span>{this.$locale.dict['DOTA_HeroStats_MovementSpeed_Name']}:</span>
          <span>{this.movementSpeed.toFixed(2)}</span>
        </vd-flexbox>
        <vd-flexbox title={this.$locale.dict['DOTA_HeroStats_TurnRate_Desc']}>
          <span>{this.$locale.dict['DOTA_HeroStats_TurnRate_Name']}:</span>
          <span>{this.turnRate.toFixed(2)}</span>
        </vd-flexbox>
        <vd-flexbox title={this.$locale.dict['DOTA_HeroStats_SightRange_Desc']}>
          <span>{this.$locale.dict['DOTA_HeroStats_SightRange_Name']}:</span>
          <span>
            {this.$locale.dict['TimeOfDay_Day']}
            {this.visionDay}/{this.$locale.dict['TimeOfDay_Night']}
            {this.visionNight}
          </span>
        </vd-flexbox>
      </vd-flexbox>
    );
  }

  public get status(): StatusData {
    return this.hero.status;
  }

  public get healthBonus(): number {
    return (
      this.attributeStrength *
      (this.attributes.primary === Attribute.strength
        ? healthBonusPrimary
        : healthBonusSecondary)
    );
  }
  public get health(): number {
    return this.status.health + this.healthBonus;
  }
  public get healthRegenBonus(): number {
    return (
      this.status.healthRegen *
      this.attributeStrength *
      (this.attributes.primary === Attribute.strength
        ? healthRegenBonusPrimary
        : healthRegenBonusSecondary)
    );
  }
  public get healthRegen(): number {
    return this.status.healthRegen + this.healthRegenBonus;
  }

  public get manaBonus(): number {
    return (
      this.attributeIntelligence *
      (this.attributes.primary === Attribute.intelligence
        ? manaBonusPrimary
        : manaBonusSecondary)
    );
  }
  public get mana(): number {
    return this.status.mana + this.manaBonus;
  }
  public get manaRegenBonus(): number {
    return (
      this.status.manaRegen *
      this.attributeIntelligence *
      (this.attributes.primary === Attribute.intelligence
        ? manaRegenBonusPrimary
        : manaRegenBonusSecondary)
    );
  }
  public get manaRegen(): number {
    return this.status.manaRegen + this.manaRegenBonus;
  }

  private renderStatus(): VNode {
    return (
      <vd-flexbox gap direction="column">
        <vd-flexbox tag="h3">
          {this.$locale.dict['DOTA_HeroStats_Castegory_HealthMana']}
        </vd-flexbox>
        <vd-flexbox title={this.$locale.dict['DOTA_HeroStats_Health_Desc']}>
          <span>
            {this.$locale.dict['DOTA_HeroStats_MaxHealth_Name']}(
            {this.$locale.dict['DOTA_HeroStats_HealthRegen_Name']}
            ):
          </span>
          <span>
            {this.health.toFixed(2)}
            (+
            {this.healthRegen.toFixed(2)})
          </span>
        </vd-flexbox>
        <vd-flexbox title={this.$locale.dict['DOTA_HeroStats_Mana_Desc']}>
          <span>
            {this.$locale.dict['DOTA_HeroStats_MaxMana_Name']}(
            {this.$locale.dict['DOTA_HeroStats_ManaRegen_Name']}
            ):
          </span>
          <span>
            {this.mana.toFixed(2)}
            (+
            {this.manaRegen.toFixed(2)})
          </span>
        </vd-flexbox>
      </vd-flexbox>
    );
  }

  private render(h: CreateElement): VNode {
    return (
      <vd-swimlane staticClass="c-hero-stats">
        <vd-container>
          <vd-flexbox gap>
            {this.renderLevel()}
            {this.renderAttributes()}
            {this.renderAttack()}
            {this.renderDefense()}
            {this.renderMobility()}
            {this.renderStatus()}
          </vd-flexbox>
        </vd-container>
      </vd-swimlane>
    );
  }
}
