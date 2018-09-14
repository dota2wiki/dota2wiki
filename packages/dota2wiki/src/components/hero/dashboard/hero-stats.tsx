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
  VisionData,
  StatusData,
} from '@dota2wiki/database';
import { toPercentage } from '@src/utils/filters';

import { CTalentTree } from './talent-tree';

const attackRateBase: number = 1.7;

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
@Component({
  components: {
    CTalentTree,
  },
})
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

  @Prop({ type: Number, required: true })
  public readonly level!: number;

  @Prop({ type: Array, required: true })
  public readonly selectedTalents!: string[];

  public get hero(): Hero {
    return this.$db.heroMap[this.name];
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
      <c-info title={this.$locale.dict['DOTA_HeroStats_Castegory_Attributes']}>
        <c-info-row
          label={this.$locale.dict['DOTA_HeroStats_Strength_Name']}
          title={this.$locale.dict['DOTA_HeroStats_Strength_Desc']}
        >
          <c-info-value float value={this.attributeStrength} />(
          <c-info-value value={this.attributes.strength.base} />+
          <c-info-value float value={this.attributes.strength.gain} right="/lv" />)
        </c-info-row>
        <c-info-row
          label={this.$locale.dict['DOTA_HeroStats_Agility_Name']}
          title={this.$locale.dict['DOTA_HeroStats_Agility_Desc']}
        >
          <c-info-value float value={this.attributeAgility} />(
          <c-info-value value={this.attributes.agility.base} />+
          <c-info-value float value={this.attributes.agility.gain} right="/lv" />)
        </c-info-row>
        <c-info-row
          label={this.$locale.dict['DOTA_HeroStats_Intelligence_Name']}
          title={this.$locale.dict['DOTA_HeroStats_Intelligence_Desc']}
        >
          <c-info-value float value={this.attributeIntelligence} />(
          <c-info-value value={this.attributes.intelligence.base} />+
          <c-info-value float value={this.attributes.intelligence.gain} right="/lv" />)
        </c-info-row>
      </c-info>
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
  public get hasFakeAttackSpeed(): boolean {
    return this.attack.rate !== attackRateBase;
  }
  public get attackSpeedFake(): number {
    return (attackRateBase / this.attackRate) * (100 + this.attributeAgility);
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
      <c-info title={this.$locale.dict['DOTA_HeroStats_Castegory_Attack']}>
        <c-info-row label={this.$locale.dict['dota_ability_variable_attack']}>
          {this.hasFakeAttackSpeed ? (
            <c-info-value float fake value={this.attackSpeedFake} />
          ) : (
            h()
          )}
          <c-info-value float value={this.attackSpeed} />
        </c-info-row>
        <c-info-row label={this.$locale.dict['DOTA_HeroStats_AttackRate_Name']}>
          <c-info-value float value={this.attackPerSecond} right="/s" />
          <c-info-value float value={this.attackInterval} right="s" />
        </c-info-row>

        <c-info-row
          label={this.$locale.dict['DOTA_HeroStats_Damage_Name']}
          title={this.$locale.dict['DOTA_HeroStats_Damage_Desc']}
        >
          <c-info-value float value={this.damageMin} />-
          <c-info-value float value={this.damageMax} />
        </c-info-row>
        <c-info-row
          label={this.$locale.dict['DOTA_HeroStats_AttackRange_Name']}
          title={this.$locale.dict['DOTA_HeroStats_AttackRange_Desc']}
        >
          <c-info-value value={this.attackRange} />
        </c-info-row>
        {this.hero.attack.capability === AttackCapability.DOTA_UNIT_CAP_RANGED_ATTACK ? (
          <c-info-row
            label={this.$locale.dict['DOTA_HeroStats_ProjectileSpeed_Name']}
            title={this.$locale.dict['DOTA_HeroStats_ProjectileSpeed_Desc']}
          >
            <c-info-value value={this.projectileSpeed} />
          </c-info-row>
        ) : (
          h()
        )}
        <c-info-row label={this.$locale.dict['DOTA_HUD_SpellAmp']}>
          <c-info-value percentage value={this.spellAmp} />
        </c-info-row>
      </c-info>
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
      <c-info title={this.$locale.dict['DOTA_HeroStats_Castegory_Defense']}>
        <c-info-row
          label={this.$locale.dict['DOTA_HeroStats_Armor_Name']}
          title={this.$locale.dict['DOTA_HeroStats_Armor_Desc']}
        >
          <c-info-value float value={this.armor} />
        </c-info-row>
        <c-info-row label={this.$locale.dict['DOTA_HUD_PhysicalResist']}>
          <c-info-value percentage value={this.physicalResist} />
        </c-info-row>
        <c-info-row label={this.$locale.dict['DOTA_HUD_MagicResist']}>
          <c-info-value percentage value={this.magicResist} />
        </c-info-row>
        <c-info-row label={this.$locale.dict['DOTA_HUD_StatusResist']}>
          <c-info-value percentage value={this.statusResist} />
        </c-info-row>
        <c-info-row label={this.$locale.dict['DOTA_HUD_Evasion']}>
          <c-info-value percentage value={this.evasion} />
        </c-info-row>
      </c-info>
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
      <c-info title={this.$locale.dict['DOTA_HeroStats_Castegory_Mobility']}>
        <c-info-row
          label={this.$locale.dict['DOTA_HeroStats_MovementSpeed_Name']}
          title={this.$locale.dict['DOTA_HeroStats_MovementSpeed_Desc']}
        >
          <c-info-value float value={this.movementSpeed} />
        </c-info-row>
        <c-info-row
          label={this.$locale.dict['DOTA_HeroStats_TurnRate_Name']}
          title={this.$locale.dict['DOTA_HeroStats_TurnRate_Desc']}
        >
          <c-info-value float value={this.turnRate} />
        </c-info-row>
        <c-info-row
          label={this.$locale.dict['DOTA_HeroStats_SightRange_Name']}
          title={this.$locale.dict['DOTA_HeroStats_SightRange_Desc']}
        >
          <c-info-value value={this.visionDay} />/
          <c-info-value value={this.visionNight} />
        </c-info-row>
      </c-info>
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

  private renderStatusBak(): VNode {
    return (
      <vd-flexbox gap="small" direction="column">
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

  private renderStatus(): VNode {
    return (
      <c-info title={this.$locale.dict['DOTA_HeroStats_Castegory_HealthMana']}>
        <c-info-row
          label={this.$locale.dict['DOTA_HeroStats_MaxHealth_Name']}
          title={this.$locale.dict['DOTA_HeroStats_Health_Desc']}
        >
          <c-info-value float value={this.health} />
        </c-info-row>
        <c-info-row label={this.$locale.dict['DOTA_HeroStats_HealthRegen_Name']}>
          <c-info-value float value={this.healthRegen} />
        </c-info-row>
        <c-info-row
          label={this.$locale.dict['DOTA_HeroStats_MaxMana_Name']}
          title={this.$locale.dict['DOTA_HeroStats_Mana_Desc']}
        >
          <c-info-value float value={this.mana} />
        </c-info-row>
        <c-info-row label={this.$locale.dict['DOTA_HeroStats_ManaRegen_Name']}>
          <c-info-value float value={this.manaRegen} />
        </c-info-row>
      </c-info>
    );
  }

  private render(h: CreateElement): VNode {
    return (
      <div staticClass="c-hero-stats">
        <vd-flexbox gap align="stretch">
          <vd-flexbox flex={{ staticValue: 1 / 3, ltMd: 100 }}>
            {this.renderAttributes()}
          </vd-flexbox>
          <vd-flexbox flex={{ staticValue: 2 / 3, ltMd: 100 }}>
            {this.renderStatus()}
          </vd-flexbox>
          {[this.renderAttack, this.renderDefense, this.renderMobility].map(r => (
            <vd-flexbox flex={{ ltMd: 100 }}>{r()}</vd-flexbox>
          ))}
        </vd-flexbox>
      </div>
    );
  }
}
