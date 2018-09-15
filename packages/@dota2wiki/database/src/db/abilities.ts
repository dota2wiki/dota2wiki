// tslint:disable
export default {
  "antimage_mana_break": {
    "id": 5003,
    "name": "antimage_mana_break",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 2,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "damage_per_burn",
        "value": [
          0.5
        ]
      },
      {
        "key": "mana_per_hit",
        "value": [
          28,
          40,
          52,
          64
        ]
      }
    ]
  },
  "antimage_blink": {
    "id": 5004,
    "name": "antimage_blink",
    "type": 0,
    "behavior": 131088,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.4,
        0.4,
        0.4,
        0.4
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        15,
        12,
        9,
        6
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        60
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "blink_range",
        "value": [
          925,
          1000,
          1075,
          1150
        ],
        "talent": "special_bonus_unique_antimage_3"
      },
      {
        "key": "min_blink_range",
        "value": [
          200
        ]
      }
    ]
  },
  "antimage_spell_shield": {
    "id": 5005,
    "name": "antimage_spell_shield",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "spell_shield_resistance",
        "value": [
          20,
          30,
          40,
          50
        ],
        "talent": "special_bonus_unique_antimage_4"
      },
      {
        "key": "scepter_cooldown",
        "value": [
          12
        ]
      }
    ]
  },
  "antimage_mana_void": {
    "id": 5006,
    "name": "antimage_mana_void",
    "type": 1,
    "behavior": 40,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 16,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        600
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        70,
        70,
        70
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        125,
        200,
        275
      ],
      "modifierSupportValue": 0,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "mana_void_damage_per_mana",
        "value": [
          0.8,
          0.95,
          1.1
        ]
      },
      {
        "key": "mana_void_ministun",
        "value": [
          0.3
        ]
      },
      {
        "key": "mana_void_aoe_radius",
        "value": [
          500
        ]
      }
    ]
  },
  "axe_berserkers_call": {
    "id": 5007,
    "name": "axe_berserkers_call",
    "type": 0,
    "behavior": 65540,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.4
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        16,
        14,
        12,
        10
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        80,
        90,
        100,
        110
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          300
        ],
        "talent": "special_bonus_unique_axe_2"
      },
      {
        "key": "bonus_armor",
        "value": [
          40
        ]
      },
      {
        "key": "duration",
        "value": [
          2,
          2.4,
          2.8,
          3.2
        ]
      }
    ]
  },
  "axe_battle_hunger": {
    "id": 5008,
    "name": "axe_battle_hunger",
    "type": 0,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        750
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        20,
        15,
        10,
        5
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        50,
        60,
        70,
        80
      ],
      "modifierSupportValue": 0.1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          12
        ]
      },
      {
        "key": "slow",
        "value": [
          -12
        ]
      },
      {
        "key": "speed_bonus",
        "value": [
          12
        ]
      },
      {
        "key": "damage_per_second",
        "value": [
          16,
          24,
          32,
          40
        ],
        "talent": "special_bonus_unique_axe"
      },
      {
        "key": "damage_reduction_scepter",
        "value": [
          30
        ]
      }
    ]
  },
  "axe_counter_helix": {
    "id": 5009,
    "name": "axe_counter_helix",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 1,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0.45,
        0.4,
        0.35,
        0.3
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        75,
        110,
        145,
        180
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          275
        ]
      },
      {
        "key": "trigger_chance",
        "value": [
          20
        ]
      },
      {
        "key": "cooldown",
        "value": [
          0.45,
          0.4,
          0.35,
          0.3
        ]
      }
    ]
  },
  "axe_culling_blade": {
    "id": 5010,
    "name": "axe_culling_blade",
    "type": 1,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 16,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        150
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        75,
        65,
        55
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        60,
        120,
        180
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "kill_threshold",
        "value": [
          250,
          325,
          400
        ]
      },
      {
        "key": "damage",
        "value": [
          150,
          250,
          300
        ]
      },
      {
        "key": "speed_bonus",
        "value": [
          30
        ]
      },
      {
        "key": "atk_speed_bonus_tooltip",
        "value": [
          30
        ]
      },
      {
        "key": "speed_duration",
        "value": [
          6
        ]
      },
      {
        "key": "speed_aoe",
        "value": [
          900
        ]
      },
      {
        "key": "scepter_aoe",
        "value": [
          700
        ]
      }
    ]
  },
  "bane_enfeeble": {
    "id": 5012,
    "name": "bane_enfeeble",
    "type": 0,
    "behavior": 33554440,
    "targetTeam": 2,
    "targetType": 64,
    "targetFlag": 256,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1000
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.4
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        8
      ],
      "duration": [
        8,
        12,
        16,
        20
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        95
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "enfeeble_attack_reduction",
        "value": [
          30,
          60,
          90,
          120
        ],
        "talent": "special_bonus_unique_bane_1"
      },
      {
        "key": "enfeeble_tooltip_duration",
        "value": [
          8,
          12,
          16,
          20
        ]
      }
    ]
  },
  "bane_brain_sap": {
    "id": 5011,
    "name": "bane_brain_sap",
    "type": 0,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 1,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        600
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.4
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        14,
        13,
        12,
        11
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        90,
        115,
        140,
        165
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "brain_sap_damage",
        "value": [
          75,
          150,
          225,
          300
        ],
        "talent": "special_bonus_unique_bane_2"
      },
      {
        "key": "tooltip_brain_sap_heal_amt",
        "value": [
          75,
          150,
          225,
          300
        ],
        "talent": "special_bonus_unique_bane_2"
      },
      {
        "key": "cooldown_scepter",
        "value": [
          1.5
        ]
      }
    ]
  },
  "bane_fiends_grip": {
    "id": 5013,
    "name": "bane_fiends_grip",
    "type": 1,
    "behavior": 136,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 16,
    "spellImmunityType": 1,
    "spellDispellableType": 2,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        625
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.4
      ],
      "channelTime": [
        5,
        5,
        5
      ],
      "coolDown": [
        120,
        110,
        100
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        200,
        300,
        400
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "fiend_grip_tick_interval",
        "value": [
          0.5
        ]
      },
      {
        "key": "fiend_grip_mana_drain",
        "value": [
          5
        ]
      },
      {
        "key": "fiend_grip_duration",
        "value": [
          5,
          5,
          5
        ],
        "talent": "special_bonus_unique_bane_3"
      },
      {
        "key": "fiend_grip_damage",
        "value": [
          100,
          155,
          215
        ]
      }
    ]
  },
  "bane_nightmare": {
    "id": 5014,
    "name": "bane_nightmare",
    "type": 0,
    "behavior": 8388616,
    "targetTeam": 4,
    "targetType": 80,
    "targetFlag": 8192,
    "spellImmunityType": 2,
    "spellDispellableType": 1,
    "damageType": 1,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        425,
        500,
        575,
        650
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.4
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        22,
        19,
        16,
        13
      ],
      "duration": [
        4,
        5,
        6,
        7
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        165,
        165,
        165,
        165
      ],
      "modifierSupportValue": 0.5,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "nightmare_invuln_time",
        "value": [
          1
        ]
      },
      {
        "key": "duration",
        "value": [
          4,
          5,
          6,
          7
        ]
      },
      {
        "key": "animation_rate",
        "value": [
          0.2,
          0.2,
          0.2,
          0.2
        ]
      },
      {
        "key": "cast_range_tooltip",
        "value": [
          425,
          500,
          575,
          650
        ]
      }
    ]
  },
  "bane_nightmare_end": {
    "id": 5523,
    "name": "bane_nightmare_end",
    "type": 0,
    "behavior": 524805,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 1,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": []
  },
  "bloodseeker_bloodrage": {
    "id": 5015,
    "name": "bloodseeker_bloodrage",
    "type": 0,
    "behavior": 8,
    "targetTeam": 4,
    "targetType": 80,
    "targetFlag": 16,
    "spellImmunityType": 1,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        800
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.2
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        9,
        8,
        7,
        6
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0
      ],
      "modifierSupportValue": 0.1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          9,
          10,
          11,
          12
        ]
      },
      {
        "key": "damage_increase_pct",
        "value": [
          25,
          30,
          35,
          40
        ]
      },
      {
        "key": "health_bonus_pct",
        "value": [
          16,
          19,
          22,
          25
        ]
      },
      {
        "key": "health_bonus_creep_pct",
        "value": [
          16,
          19,
          22,
          25
        ]
      },
      {
        "key": "health_bonus_aoe",
        "value": [
          300
        ]
      },
      {
        "key": "health_bonus_share_percent",
        "value": [
          50
        ]
      }
    ]
  },
  "bloodseeker_blood_bath": {
    "id": 5016,
    "name": "bloodseeker_blood_bath",
    "type": 0,
    "behavior": 48,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 1,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1500
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        18,
        16,
        14,
        12
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          600
        ]
      },
      {
        "key": "silence_duration",
        "value": [
          3,
          4,
          5,
          6
        ]
      },
      {
        "key": "damage",
        "value": [
          120,
          160,
          200,
          240
        ],
        "talent": "special_bonus_unique_bloodseeker_2"
      },
      {
        "key": "delay",
        "value": [
          2.6
        ]
      },
      {
        "key": "delay_plus_castpoint_tooltip",
        "value": [
          3
        ]
      }
    ]
  },
  "bloodseeker_thirst": {
    "id": 5017,
    "name": "bloodseeker_thirst",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "min_bonus_pct",
        "value": [
          75
        ]
      },
      {
        "key": "bonus_movement_speed",
        "value": [
          7,
          18,
          29,
          40
        ],
        "talent": "special_bonus_unique_bloodseeker_4"
      },
      {
        "key": "bonus_damage",
        "value": [
          7,
          18,
          29,
          40
        ],
        "talent": "special_bonus_unique_bloodseeker_4"
      },
      {
        "key": "max_bonus_pct",
        "value": [
          25
        ]
      },
      {
        "key": "visibility_threshold_pct",
        "value": [
          25
        ]
      },
      {
        "key": "invis_threshold_pct",
        "value": [
          25
        ]
      }
    ]
  },
  "bloodseeker_rupture": {
    "id": 5018,
    "name": "bloodseeker_rupture",
    "type": 1,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 16,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 1,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        800
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.4
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        60
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        200,
        225,
        250
      ],
      "modifierSupportValue": 0,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          12
        ]
      },
      {
        "key": "movement_damage_pct",
        "value": [
          30,
          45,
          60
        ],
        "talent": "special_bonus_unique_bloodseeker_3"
      },
      {
        "key": "damage_cap_amount",
        "value": [
          200
        ]
      },
      {
        "key": "damage_cap_interval",
        "value": [
          0.25
        ]
      },
      {
        "key": "cast_range_tooltip",
        "value": [
          1000
        ]
      },
      {
        "key": "max_charges_scepter",
        "value": [
          2
        ]
      },
      {
        "key": "charge_restore_time_scepter",
        "value": [
          40
        ]
      }
    ]
  },
  "drow_ranger_frost_arrows": {
    "id": 5019,
    "name": "drow_ranger_frost_arrows",
    "type": 0,
    "behavior": 36872,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        625
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        1.5,
        1.5,
        1.5,
        1.5
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        12,
        12,
        12,
        12
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "frost_arrows_movement_speed",
        "value": [
          -16,
          -32,
          -48,
          -64
        ]
      },
      {
        "key": "frost_arrows_hero_duration_tooltip",
        "value": [
          1.5
        ]
      },
      {
        "key": "frost_arrows_creep_duration",
        "value": [
          7
        ]
      }
    ]
  },
  "drow_ranger_wave_of_silence": {
    "id": 5632,
    "name": "drow_ranger_wave_of_silence",
    "type": 0,
    "behavior": 16,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        900
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.25
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        16,
        15,
        14,
        13
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        90
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "wave_speed",
        "value": [
          2000
        ]
      },
      {
        "key": "wave_range_tooltip",
        "value": [
          900
        ],
        "talent": "special_bonus_unique_drow_ranger_2"
      },
      {
        "key": "wave_width",
        "value": [
          250
        ]
      },
      {
        "key": "silence_duration",
        "value": [
          3,
          4,
          5,
          6
        ],
        "talent": "special_bonus_unique_drow_ranger_4"
      },
      {
        "key": "knockback_distance_max",
        "value": [
          350
        ],
        "talent": "special_bonus_unique_drow_ranger_2"
      },
      {
        "key": "knockback_duration",
        "value": [
          0.6,
          0.7,
          0.8,
          0.9
        ]
      },
      {
        "key": "knockback_height",
        "value": [
          0
        ]
      }
    ]
  },
  "drow_ranger_trueshot": {
    "id": 5021,
    "name": "drow_ranger_trueshot",
    "type": 0,
    "behavior": 2052,
    "targetTeam": 1,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        100
      ],
      "duration": [
        30
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "trueshot_ranged_damage",
        "value": [
          10,
          20,
          30,
          40
        ],
        "talent": "special_bonus_unique_drow_ranger_1"
      }
    ]
  },
  "drow_ranger_marksmanship": {
    "id": 5022,
    "name": "drow_ranger_marksmanship",
    "type": 1,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        400
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "marksmanship_agility_bonus",
        "value": [
          40,
          60,
          80
        ],
        "talent": "special_bonus_unique_drow_ranger_3"
      },
      {
        "key": "radius",
        "value": [
          400
        ]
      },
      {
        "key": "split_count_scepter",
        "value": [
          2
        ]
      },
      {
        "key": "scepter_range",
        "value": [
          375
        ]
      },
      {
        "key": "damage_reduction_scepter",
        "value": [
          50
        ]
      }
    ]
  },
  "earthshaker_fissure": {
    "id": 5023,
    "name": "earthshaker_fissure",
    "type": 0,
    "behavior": 33554448,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 2,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1400
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.69,
        0.69,
        0.69,
        0.69
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        18,
        17,
        16,
        15
      ],
      "duration": [
        1,
        1.25,
        1.5,
        1.75
      ],
      "sharedCooldown": "0",
      "damage": [
        110,
        160,
        210,
        260
      ],
      "manaCost": [
        125,
        140,
        155,
        170
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "fissure_range",
        "value": [
          1400
        ],
        "talent": "special_bonus_unique_earthshaker_3"
      },
      {
        "key": "fissure_duration",
        "value": [
          8
        ]
      },
      {
        "key": "fissure_radius",
        "value": [
          225
        ]
      },
      {
        "key": "stun_duration",
        "value": [
          1,
          1.25,
          1.5,
          1.75
        ]
      }
    ]
  },
  "earthshaker_enchant_totem": {
    "id": 5024,
    "name": "earthshaker_enchant_totem",
    "type": 0,
    "behavior": 4,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.69,
        0.69,
        0.69,
        0.69
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        5
      ],
      "duration": [
        14
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        35,
        40,
        45,
        50
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "totem_damage_percentage",
        "value": [
          100,
          200,
          300,
          400
        ]
      },
      {
        "key": "tooltip_duration",
        "value": [
          14,
          14,
          14,
          14
        ]
      },
      {
        "key": "distance_scepter",
        "value": [
          1100
        ]
      },
      {
        "key": "duration",
        "value": [
          0.75
        ]
      },
      {
        "key": "aftershock_range",
        "value": [
          300
        ]
      }
    ]
  },
  "earthshaker_aftershock": {
    "id": 5025,
    "name": "earthshaker_aftershock",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 2,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0.6,
        0.9,
        1.2,
        1.5
      ],
      "sharedCooldown": "0",
      "damage": [
        75,
        100,
        125,
        150
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 100
    },
    "special": [
      {
        "key": "aftershock_range",
        "value": [
          300
        ]
      },
      {
        "key": "tooltip_duration",
        "value": [
          0.6,
          0.9,
          1.2,
          1.5
        ]
      }
    ]
  },
  "earthshaker_echo_slam": {
    "id": 5026,
    "name": "earthshaker_echo_slam",
    "type": 1,
    "behavior": 4,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        150,
        130,
        110
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        145,
        205,
        265
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "echo_slam_damage_range",
        "value": [
          600
        ]
      },
      {
        "key": "echo_slam_echo_search_range",
        "value": [
          600
        ]
      },
      {
        "key": "echo_slam_echo_range",
        "value": [
          600
        ]
      },
      {
        "key": "echo_slam_echo_damage",
        "value": [
          70,
          90,
          110
        ],
        "talent": "special_bonus_unique_earthshaker_2"
      },
      {
        "key": "echo_slam_initial_damage",
        "value": [
          100
        ]
      }
    ]
  },
  "juggernaut_blade_dance": {
    "id": 5027,
    "name": "juggernaut_blade_dance",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "blade_dance_crit_chance",
        "value": [
          20,
          25,
          30,
          35
        ]
      },
      {
        "key": "blade_dance_crit_mult",
        "value": [
          180
        ]
      }
    ]
  },
  "juggernaut_blade_fury": {
    "id": 5028,
    "name": "juggernaut_blade_fury",
    "type": 0,
    "behavior": 1050628,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        42,
        34,
        26,
        18
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        120,
        110,
        100,
        90
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "blade_fury_damage_tick",
        "value": [
          0.2
        ]
      },
      {
        "key": "blade_fury_radius",
        "value": [
          250
        ]
      },
      {
        "key": "blade_fury_damage",
        "value": [
          90,
          115,
          140,
          160
        ],
        "talent": "special_bonus_unique_juggernaut_3"
      },
      {
        "key": "duration",
        "value": [
          5
        ],
        "talent": "special_bonus_unique_juggernaut"
      }
    ]
  },
  "juggernaut_healing_ward": {
    "id": 5029,
    "name": "juggernaut_healing_ward",
    "type": 0,
    "behavior": 48,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        350
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        60,
        60,
        60,
        60
      ],
      "duration": [
        25,
        25,
        25,
        25
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        140
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "healing_ward_heal_amount",
        "value": [
          2,
          3,
          4,
          5
        ]
      },
      {
        "key": "healing_ward_aura_radius",
        "value": [
          500
        ]
      },
      {
        "key": "healing_ward_movespeed_tooltip",
        "value": [
          420
        ]
      },
      {
        "key": "healing_ward_duration_tooltip",
        "value": [
          25
        ]
      }
    ]
  },
  "juggernaut_omni_slash": {
    "id": 5030,
    "name": "juggernaut_omni_slash",
    "type": 1,
    "behavior": 8388616,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 272,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 2,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        350
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        130,
        120,
        110
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        200,
        275,
        350
      ],
      "modifierSupportValue": 0,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "omni_slash_damage",
        "value": [
          200,
          225
        ]
      },
      {
        "key": "omni_slash_jumps",
        "value": [
          3,
          6,
          9
        ],
        "talent": "special_bonus_unique_juggernaut_2"
      },
      {
        "key": "omni_slash_radius",
        "value": [
          425
        ]
      },
      {
        "key": "omni_slash_bounce_tick",
        "value": [
          0.4
        ]
      },
      {
        "key": "omni_slash_jumps_scepter",
        "value": [
          6,
          9,
          12
        ],
        "talent": "special_bonus_unique_juggernaut_2"
      },
      {
        "key": "omni_slash_cooldown_scepter",
        "value": [
          70
        ]
      }
    ]
  },
  "kunkka_torrent": {
    "id": 5031,
    "name": "kunkka_torrent",
    "type": 0,
    "behavior": 33554480,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1500
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.4
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        16,
        14,
        12,
        10
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        90,
        100,
        110,
        120
      ],
      "modifierSupportValue": 0.5,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          225
        ],
        "talent": "special_bonus_unique_kunkka"
      },
      {
        "key": "movespeed_bonus",
        "value": [
          -35
        ]
      },
      {
        "key": "slow_duration",
        "value": [
          1.75,
          2.5,
          3.25,
          4
        ]
      },
      {
        "key": "stun_duration",
        "value": [
          1.6
        ]
      },
      {
        "key": "delay",
        "value": [
          1.6,
          1.6,
          1.6,
          1.6
        ]
      },
      {
        "key": "torrent_damage",
        "value": [
          75,
          150,
          225,
          300
        ],
        "talent": "special_bonus_unique_kunkka_2"
      }
    ]
  },
  "kunkka_tidebringer": {
    "id": 5032,
    "name": "kunkka_tidebringer",
    "type": 0,
    "behavior": 36872,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 16,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 2,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        150
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        13,
        10,
        7,
        4
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "cleave_starting_width",
        "value": [
          150
        ]
      },
      {
        "key": "cleave_ending_width",
        "value": [
          500,
          550,
          600,
          650
        ]
      },
      {
        "key": "cleave_distance",
        "value": [
          650,
          800,
          950,
          1100
        ]
      },
      {
        "key": "damage_bonus",
        "value": [
          25,
          50,
          75,
          100
        ]
      },
      {
        "key": "cleave_damage",
        "value": [
          100
        ],
        "talent": "special_bonus_unique_kunkka_4"
      }
    ]
  },
  "kunkka_x_marks_the_spot": {
    "id": 5033,
    "name": "kunkka_x_marks_the_spot",
    "type": 0,
    "behavior": 33554440,
    "targetTeam": 4,
    "targetType": 64,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        400,
        600,
        800,
        1000
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.4,
        0.4,
        0.4,
        0.4
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        26,
        20,
        14,
        8
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        50
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          4
        ]
      },
      {
        "key": "allied_duration_tooltip",
        "value": [
          8
        ]
      },
      {
        "key": "tooltip_range",
        "value": [
          400,
          600,
          800,
          1000
        ]
      },
      {
        "key": "fow_range",
        "value": [
          400
        ]
      },
      {
        "key": "fow_duration",
        "value": [
          5.94
        ]
      }
    ]
  },
  "kunkka_return": {
    "id": 5034,
    "name": "kunkka_return",
    "type": 0,
    "behavior": 33554437,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.4,
        0.4,
        0.4,
        0.4
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        1
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": []
  },
  "kunkka_ghostship": {
    "id": 5035,
    "name": "kunkka_ghostship",
    "type": 1,
    "behavior": 33555472,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        1000
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        60,
        50,
        40
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        400,
        500,
        600
      ],
      "manaCost": [
        125,
        175,
        225
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "tooltip_delay",
        "value": [
          3.1
        ]
      },
      {
        "key": "ghostship_distance",
        "value": [
          2000
        ]
      },
      {
        "key": "ghostship_width",
        "value": [
          425,
          425,
          425
        ]
      },
      {
        "key": "movespeed_bonus",
        "value": [
          10,
          10,
          10
        ]
      },
      {
        "key": "buff_duration",
        "value": [
          10
        ]
      },
      {
        "key": "stun_duration",
        "value": [
          1.4,
          1.4,
          1.4
        ]
      },
      {
        "key": "ghostship_speed",
        "value": [
          650
        ]
      },
      {
        "key": "ghostship_speed_scepter",
        "value": [
          650
        ]
      },
      {
        "key": "ghostship_width_scepter",
        "value": [
          200
        ]
      },
      {
        "key": "ghostship_absorb",
        "value": [
          40,
          45,
          50
        ]
      }
    ]
  },
  "lina_dragon_slave": {
    "id": 5040,
    "name": "lina_dragon_slave",
    "type": 0,
    "behavior": 24,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1075
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.45,
        0.45,
        0.45,
        0.45
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        8
      ],
      "duration": [
        0.6875,
        0.6875,
        0.6875,
        0.6875
      ],
      "sharedCooldown": "0",
      "damage": [
        85,
        160,
        235,
        310
      ],
      "manaCost": [
        100,
        115,
        130,
        145
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "dragon_slave_speed",
        "value": [
          1200
        ]
      },
      {
        "key": "dragon_slave_width_initial",
        "value": [
          275
        ]
      },
      {
        "key": "dragon_slave_width_end",
        "value": [
          200
        ]
      },
      {
        "key": "dragon_slave_distance",
        "value": [
          1075
        ]
      }
    ]
  },
  "lina_light_strike_array": {
    "id": 5041,
    "name": "lina_light_strike_array",
    "type": 0,
    "behavior": 48,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 2,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        625
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.45,
        0.45,
        0.45,
        0.45
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        7,
        7,
        7,
        7
      ],
      "duration": [
        1.6,
        1.9,
        2.2,
        2.5
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100,
        110,
        120,
        130
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "light_strike_array_aoe",
        "value": [
          225
        ]
      },
      {
        "key": "light_strike_array_delay_time",
        "value": [
          0.5
        ]
      },
      {
        "key": "light_strike_array_stun_duration",
        "value": [
          1.6,
          1.9,
          2.2,
          2.5
        ]
      },
      {
        "key": "light_strike_array_damage",
        "value": [
          80,
          120,
          160,
          200
        ],
        "talent": "special_bonus_unique_lina_3"
      }
    ]
  },
  "lina_fiery_soul": {
    "id": 5042,
    "name": "lina_fiery_soul",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "fiery_soul_attack_speed_bonus",
        "value": [
          40,
          55,
          70,
          85
        ],
        "talent": "special_bonus_unique_lina_2"
      },
      {
        "key": "fiery_soul_move_speed_bonus",
        "value": [
          5,
          6,
          7,
          8
        ],
        "talent": "special_bonus_unique_lina_2",
        "talentField": "value2"
      },
      {
        "key": "fiery_soul_max_stacks",
        "value": [
          3
        ]
      },
      {
        "key": "fiery_soul_stack_duration",
        "value": [
          10
        ]
      }
    ]
  },
  "lina_laguna_blade": {
    "id": 5043,
    "name": "lina_laguna_blade",
    "type": 1,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 16,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        600
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.45,
        0.45,
        0.45
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        70,
        60,
        50
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        280,
        420,
        680
      ],
      "modifierSupportValue": 0,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "damage",
        "value": [
          450,
          650,
          850
        ]
      },
      {
        "key": "cast_range_scepter",
        "value": [
          600
        ]
      },
      {
        "key": "damage_delay",
        "value": [
          0.25
        ]
      }
    ]
  },
  "lion_impale": {
    "id": 5044,
    "name": "lion_impale",
    "type": 0,
    "behavior": 33554456,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 2,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        500
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        12,
        12,
        12,
        12
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        80,
        140,
        200,
        260
      ],
      "manaCost": [
        70,
        100,
        130,
        160
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "width",
        "value": [
          125,
          125,
          125,
          125
        ]
      },
      {
        "key": "duration",
        "value": [
          1.4,
          1.8,
          2.2,
          2.6
        ]
      },
      {
        "key": "length_buffer",
        "value": [
          325
        ]
      },
      {
        "key": "speed",
        "value": [
          1600,
          1600,
          1600,
          1600
        ]
      }
    ]
  },
  "lion_voodoo": {
    "id": 5045,
    "name": "lion_voodoo",
    "type": 0,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        500
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        30,
        24,
        18,
        12
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        125,
        150,
        175,
        200
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          2.5,
          3,
          3.5,
          4
        ]
      },
      {
        "key": "movespeed",
        "value": [
          140
        ]
      }
    ]
  },
  "lion_mana_drain": {
    "id": 5046,
    "name": "lion_mana_drain",
    "type": 0,
    "behavior": 33554568,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 4,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        850
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        5.1
      ],
      "coolDown": [
        16,
        12,
        8,
        4
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        10,
        10,
        10,
        10
      ],
      "modifierSupportValue": 5,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          5
        ]
      },
      {
        "key": "mana_per_second",
        "value": [
          20,
          40,
          60,
          120
        ]
      },
      {
        "key": "break_distance",
        "value": [
          1200
        ]
      },
      {
        "key": "tick_interval",
        "value": [
          0.1
        ]
      },
      {
        "key": "movespeed",
        "value": [
          16,
          19,
          22,
          25
        ]
      }
    ]
  },
  "lion_finger_of_death": {
    "id": 5047,
    "name": "lion_finger_of_death",
    "type": 1,
    "behavior": 40,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        900
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        160,
        100,
        40
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        200,
        420,
        650
      ],
      "modifierSupportValue": 0,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "damage",
        "value": [
          600,
          725,
          850
        ],
        "talent": "special_bonus_unique_lion_3"
      },
      {
        "key": "damage_scepter",
        "value": [
          725,
          875,
          1025
        ],
        "talent": "special_bonus_unique_lion_3"
      },
      {
        "key": "mana_cost_scepter",
        "value": [
          200,
          420,
          625
        ]
      },
      {
        "key": "damage_delay",
        "value": [
          0.25
        ]
      },
      {
        "key": "cooldown_scepter",
        "value": [
          100,
          60,
          20
        ]
      },
      {
        "key": "splash_radius_scepter",
        "value": [
          325
        ]
      }
    ]
  },
  "mirana_arrow": {
    "id": 5048,
    "name": "mirana_arrow",
    "type": 0,
    "behavior": 33555472,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 2,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        3000
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.5,
        0.5,
        0.5,
        0.5
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        17
      ],
      "duration": [
        3.11,
        3.11,
        3.11,
        3.11
      ],
      "sharedCooldown": "0",
      "damage": [
        50,
        140,
        230,
        320
      ],
      "manaCost": [
        100,
        100,
        100,
        100
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "arrow_speed",
        "value": [
          857
        ]
      },
      {
        "key": "arrow_width",
        "value": [
          115
        ]
      },
      {
        "key": "arrow_range",
        "value": [
          3000
        ]
      },
      {
        "key": "arrow_max_stunrange",
        "value": [
          1500
        ]
      },
      {
        "key": "arrow_min_stun",
        "value": [
          0.01
        ]
      },
      {
        "key": "arrow_max_stun",
        "value": [
          5
        ]
      },
      {
        "key": "arrow_bonus_damage",
        "value": [
          140
        ]
      },
      {
        "key": "arrow_vision",
        "value": [
          500
        ]
      }
    ]
  },
  "mirana_invis": {
    "id": 5049,
    "name": "mirana_invis",
    "type": 1,
    "behavior": 41943044,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.5,
        0.5,
        0.5
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        140,
        120,
        100
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        75
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "fade_delay",
        "value": [
          2.5,
          2,
          1.5
        ]
      },
      {
        "key": "duration",
        "value": [
          18
        ]
      },
      {
        "key": "bonus_movement_speed",
        "value": [
          15
        ]
      }
    ]
  },
  "mirana_leap": {
    "id": 5050,
    "name": "mirana_leap",
    "type": 0,
    "behavior": 33685508,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        40
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "leap_distance",
        "value": [
          550
        ]
      },
      {
        "key": "leap_speed",
        "value": [
          1300
        ]
      },
      {
        "key": "leap_acceleration",
        "value": [
          6000
        ]
      },
      {
        "key": "leap_speedbonus",
        "value": [
          8,
          16,
          24,
          32
        ]
      },
      {
        "key": "leap_speedbonus_as",
        "value": [
          60,
          80,
          100,
          120
        ],
        "talent": "special_bonus_unique_mirana_1"
      },
      {
        "key": "leap_bonus_duration",
        "value": [
          2.5
        ]
      },
      {
        "key": "max_charges",
        "value": [
          3
        ]
      },
      {
        "key": "charge_restore_time",
        "value": [
          60,
          50,
          40,
          30
        ]
      }
    ]
  },
  "mirana_starfall": {
    "id": 5051,
    "name": "mirana_starfall",
    "type": 0,
    "behavior": 33554436,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.5,
        0.5,
        0.5,
        0.5
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        12,
        12,
        12,
        12
      ],
      "duration": [
        10,
        10,
        10,
        10
      ],
      "sharedCooldown": "0",
      "damage": [
        75,
        150,
        225,
        300
      ],
      "manaCost": [
        80,
        105,
        130,
        155
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "starfall_radius",
        "value": [
          650
        ]
      },
      {
        "key": "starfall_secondary_radius",
        "value": [
          425
        ]
      },
      {
        "key": "interval_scepter",
        "value": [
          10
        ]
      }
    ]
  },
  "morphling_waveform": {
    "id": 5052,
    "name": "morphling_waveform",
    "type": 0,
    "behavior": 33685520,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1000
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.25
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        14,
        13,
        12,
        11
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        75,
        150,
        225,
        300
      ],
      "manaCost": [
        140,
        155,
        160,
        165
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "speed",
        "value": [
          1250
        ]
      },
      {
        "key": "width",
        "value": [
          200
        ]
      },
      {
        "key": "charge_restore_time",
        "value": [
          14,
          13,
          12,
          11
        ]
      }
    ]
  },
  "morphling_adaptive_strike_agi": {
    "id": 5053,
    "name": "morphling_adaptive_strike_agi",
    "linkedAbility": "morphling_adaptive_strike_str",
    "type": 0,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 2,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        600,
        700,
        800,
        900
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.25
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        10
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        80
      ],
      "modifierSupportValue": 0.3,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "damage_base",
        "value": [
          100
        ]
      },
      {
        "key": "damage_min",
        "value": [
          0.5
        ]
      },
      {
        "key": "damage_max",
        "value": [
          1,
          1.5,
          2,
          2.5
        ]
      },
      {
        "key": "range_tooltip",
        "value": [
          600,
          700,
          800,
          900
        ]
      },
      {
        "key": "projectile_speed",
        "value": [
          1150
        ]
      },
      {
        "key": "shared_cooldown",
        "value": [
          3
        ]
      }
    ]
  },
  "morphling_adaptive_strike_str": {
    "id": 7000,
    "name": "morphling_adaptive_strike_str",
    "linkedAbility": "morphling_adaptive_strike_agi",
    "type": 0,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 2,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        600,
        700,
        800,
        900
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.25
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        10
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        80
      ],
      "modifierSupportValue": 0.3,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "stun_min",
        "value": [
          0.5
        ]
      },
      {
        "key": "stun_max",
        "value": [
          1.5,
          2,
          2.5,
          3
        ]
      },
      {
        "key": "knockback_min",
        "value": [
          100
        ]
      },
      {
        "key": "knockback_max",
        "value": [
          500
        ]
      },
      {
        "key": "range_tooltip",
        "value": [
          600,
          700,
          800,
          900
        ]
      },
      {
        "key": "projectile_speed",
        "value": [
          1150
        ]
      },
      {
        "key": "shared_cooldown",
        "value": [
          3
        ]
      }
    ]
  },
  "morphling_morph": {
    "id": 5054,
    "name": "morphling_morph",
    "type": 0,
    "behavior": 1,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "bonus_attributes",
        "value": [
          4,
          5,
          6,
          7
        ]
      }
    ]
  },
  "morphling_morph_agi": {
    "id": 5055,
    "name": "morphling_morph_agi",
    "linkedAbility": "morphling_morph_str",
    "type": 0,
    "behavior": 516,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "points_per_tick",
        "value": [
          1
        ]
      },
      {
        "key": "morph_cooldown",
        "value": [
          1,
          0.25,
          0.1,
          0.04
        ]
      },
      {
        "key": "bonus_attributes",
        "value": [
          4,
          5,
          6,
          7
        ]
      },
      {
        "key": "morph_rate_tooltip",
        "value": [
          1,
          4,
          10,
          25
        ]
      }
    ]
  },
  "morphling_morph_str": {
    "id": 5056,
    "name": "morphling_morph_str",
    "linkedAbility": "morphling_morph_agi",
    "type": 0,
    "behavior": 516,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "points_per_tick",
        "value": [
          1
        ]
      },
      {
        "key": "morph_cooldown",
        "value": [
          1,
          0.25,
          0.1,
          0.04
        ]
      },
      {
        "key": "bonus_attributes",
        "value": [
          4,
          5,
          6,
          7
        ]
      },
      {
        "key": "morph_rate_tooltip",
        "value": [
          1,
          4,
          10,
          25
        ]
      }
    ]
  },
  "morphling_replicate": {
    "id": 5057,
    "name": "morphling_replicate",
    "type": 1,
    "behavior": 8,
    "targetTeam": 8,
    "targetType": 32,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1000
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.25
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        160,
        100,
        40
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        50
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          20
        ],
        "talent": "special_bonus_unique_morphling_8"
      }
    ]
  },
  "morphling_morph_replicate": {
    "id": 5058,
    "name": "morphling_morph_replicate",
    "type": 1,
    "behavior": 42010629,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        1
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": []
  },
  "nevermore_shadowraze1": {
    "id": 5059,
    "name": "nevermore_shadowraze1",
    "linkedAbility": "nevermore_shadowraze2",
    "type": 0,
    "behavior": 33554436,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.55
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        10
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        90
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "shadowraze_damage",
        "value": [
          90,
          160,
          230,
          300
        ],
        "talent": "special_bonus_unique_nevermore_2"
      },
      {
        "key": "shadowraze_radius",
        "value": [
          250
        ]
      },
      {
        "key": "shadowraze_range",
        "value": [
          200
        ]
      },
      {
        "key": "shadowraze_cooldown",
        "value": [
          3
        ]
      },
      {
        "key": "stack_bonus_damage",
        "value": [
          50,
          60,
          70,
          80
        ]
      },
      {
        "key": "duration",
        "value": [
          8
        ]
      }
    ]
  },
  "nevermore_shadowraze2": {
    "id": 5060,
    "name": "nevermore_shadowraze2",
    "linkedAbility": "nevermore_shadowraze3",
    "type": 0,
    "behavior": 33554436,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.55
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        10
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        90
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "shadowraze_damage",
        "value": [
          90,
          160,
          230,
          300
        ],
        "talent": "special_bonus_unique_nevermore_2"
      },
      {
        "key": "shadowraze_radius",
        "value": [
          250
        ]
      },
      {
        "key": "shadowraze_range",
        "value": [
          450
        ]
      },
      {
        "key": "shadowraze_cooldown",
        "value": [
          3
        ]
      },
      {
        "key": "stack_bonus_damage",
        "value": [
          50,
          60,
          70,
          80
        ]
      },
      {
        "key": "duration",
        "value": [
          8
        ]
      }
    ]
  },
  "nevermore_shadowraze3": {
    "id": 5061,
    "name": "nevermore_shadowraze3",
    "linkedAbility": "nevermore_shadowraze1",
    "type": 0,
    "behavior": 33554436,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.55
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        10
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        90
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "shadowraze_damage",
        "value": [
          90,
          160,
          230,
          300
        ],
        "talent": "special_bonus_unique_nevermore_2"
      },
      {
        "key": "shadowraze_radius",
        "value": [
          250
        ]
      },
      {
        "key": "shadowraze_range",
        "value": [
          700
        ]
      },
      {
        "key": "shadowraze_cooldown",
        "value": [
          3
        ]
      },
      {
        "key": "stack_bonus_damage",
        "value": [
          50,
          60,
          70,
          80
        ]
      },
      {
        "key": "duration",
        "value": [
          8
        ]
      }
    ]
  },
  "nevermore_necromastery": {
    "id": 5062,
    "name": "nevermore_necromastery",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "necromastery_damage_per_soul",
        "value": [
          2
        ],
        "talent": "special_bonus_unique_nevermore_1"
      },
      {
        "key": "necromastery_max_souls",
        "value": [
          12,
          20,
          28,
          36
        ]
      },
      {
        "key": "necromastery_soul_release",
        "value": [
          0.5
        ]
      },
      {
        "key": "necromastery_souls_hero_bonus",
        "value": [
          11
        ]
      },
      {
        "key": "necromastery_max_souls_scepter",
        "value": [
          22,
          30,
          38,
          46
        ]
      }
    ]
  },
  "nevermore_dark_lord": {
    "id": 5063,
    "name": "nevermore_dark_lord",
    "type": 0,
    "behavior": 16386,
    "targetTeam": 2,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        900
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "presence_armor_reduction",
        "value": [
          -3,
          -4,
          -5,
          -6
        ],
        "talent": "special_bonus_unique_nevermore_5"
      },
      {
        "key": "presence_radius",
        "value": [
          900
        ]
      }
    ]
  },
  "nevermore_requiem": {
    "id": 5064,
    "name": "nevermore_requiem",
    "type": 1,
    "behavior": 16777220,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        1.67,
        1.67,
        1.67
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        120,
        110,
        100
      ],
      "duration": [
        5,
        5,
        5
      ],
      "sharedCooldown": "0",
      "damage": [
        80,
        120,
        160
      ],
      "manaCost": [
        150,
        175,
        200
      ],
      "modifierSupportValue": 0.5,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "cast_time_tooltip",
        "value": [
          1.67
        ]
      },
      {
        "key": "requiem_radius",
        "value": [
          1000
        ]
      },
      {
        "key": "requiem_reduction_ms",
        "value": [
          -25
        ]
      },
      {
        "key": "requiem_reduction_damage",
        "value": [
          -50
        ]
      },
      {
        "key": "requiem_reduction_tooltip",
        "value": [
          -50
        ]
      },
      {
        "key": "requiem_slow_duration",
        "value": [
          5
        ]
      },
      {
        "key": "requiem_reduction_radius",
        "value": [
          700,
          700,
          700
        ]
      },
      {
        "key": "requiem_soul_conversion",
        "value": [
          2,
          2,
          2
        ]
      },
      {
        "key": "requiem_line_width_start",
        "value": [
          125
        ]
      },
      {
        "key": "requiem_line_width_end",
        "value": [
          425
        ]
      },
      {
        "key": "requiem_line_speed",
        "value": [
          700,
          700,
          700
        ]
      },
      {
        "key": "soul_death_release",
        "value": [
          0.5
        ]
      },
      {
        "key": "requiem_heal_pct_scepter",
        "value": [
          100
        ]
      },
      {
        "key": "requiem_damage_pct_scepter",
        "value": [
          40
        ]
      }
    ]
  },
  "phantom_lancer_spirit_lance": {
    "id": 5065,
    "name": "phantom_lancer_spirit_lance",
    "type": 0,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        750
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        7,
        7,
        7,
        7
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        125,
        130,
        135,
        140
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "lance_damage",
        "value": [
          100,
          150,
          200,
          250
        ],
        "talent": "special_bonus_unique_phantom_lancer_2"
      },
      {
        "key": "lance_speed",
        "value": [
          1000,
          1000,
          1000,
          1000
        ]
      },
      {
        "key": "duration",
        "value": [
          3.25
        ]
      },
      {
        "key": "movement_speed_pct",
        "value": [
          -10,
          -20,
          -30,
          -40
        ]
      },
      {
        "key": "illusion_duration",
        "value": [
          2,
          4,
          6,
          8
        ]
      },
      {
        "key": "illusion_damage_out_pct",
        "value": [
          -80
        ]
      },
      {
        "key": "tooltip_illusion_damage",
        "value": [
          20
        ]
      },
      {
        "key": "illusion_damage_in_pct",
        "value": [
          300,
          300,
          300,
          300
        ]
      },
      {
        "key": "tooltip_illusion_total_damage_in_pct",
        "value": [
          400,
          400,
          400,
          400
        ]
      },
      {
        "key": "fake_lance_distance",
        "value": [
          675
        ]
      },
      {
        "key": "scepter_radius",
        "value": [
          400
        ]
      },
      {
        "key": "scepter_jumps",
        "value": [
          5
        ]
      },
      {
        "key": "lance_speed_bounces",
        "value": [
          700
        ]
      }
    ]
  },
  "phantom_lancer_doppelwalk": {
    "id": 5066,
    "name": "phantom_lancer_doppelwalk",
    "type": 0,
    "behavior": 131120,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        600
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.1
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        25,
        20,
        15,
        10
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        50
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "illusion_1_damage_out_pct",
        "value": [
          -100
        ]
      },
      {
        "key": "illusion_1_damage_in_pct",
        "value": [
          0
        ]
      },
      {
        "key": "illusion_2_damage_out_pct",
        "value": [
          -80
        ]
      },
      {
        "key": "illusion_2_damage_in_pct",
        "value": [
          500
        ]
      },
      {
        "key": "target_aoe",
        "value": [
          325
        ]
      },
      {
        "key": "search_radius",
        "value": [
          900
        ]
      },
      {
        "key": "delay",
        "value": [
          1
        ]
      },
      {
        "key": "illusion_duration",
        "value": [
          8
        ]
      },
      {
        "key": "illusion_extended_duration",
        "value": [
          2
        ]
      }
    ]
  },
  "phantom_lancer_juxtapose": {
    "id": 5067,
    "name": "phantom_lancer_juxtapose",
    "type": 1,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "max_illusions",
        "value": [
          6,
          8,
          10
        ],
        "talent": "special_bonus_unique_phantom_lancer_3"
      },
      {
        "key": "proc_chance_pct",
        "value": [
          40,
          45,
          50
        ]
      },
      {
        "key": "illusion_proc_chance_pct",
        "value": [
          8
        ]
      },
      {
        "key": "illusion_duration",
        "value": [
          8
        ]
      },
      {
        "key": "illusion_damage_out_pct",
        "value": [
          -84
        ]
      },
      {
        "key": "tooltip_illusion_damage",
        "value": [
          16
        ]
      },
      {
        "key": "illusion_damage_in_pct",
        "value": [
          500
        ]
      },
      {
        "key": "tooltip_total_illusion_damage_in_pct",
        "value": [
          600
        ]
      },
      {
        "key": "illusion_from_illusion_duration",
        "value": [
          4
        ]
      }
    ]
  },
  "phantom_lancer_phantom_edge": {
    "id": 5068,
    "name": "phantom_lancer_phantom_edge",
    "type": 0,
    "behavior": 2564,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        16,
        12,
        8,
        4
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "min_distance",
        "value": [
          250
        ]
      },
      {
        "key": "max_distance",
        "value": [
          600,
          700,
          800,
          900
        ],
        "talent": "special_bonus_unique_phantom_lancer"
      },
      {
        "key": "bonus_speed",
        "value": [
          800
        ]
      },
      {
        "key": "bonus_agility",
        "value": [
          6,
          14,
          22,
          30
        ]
      },
      {
        "key": "agility_duration",
        "value": [
          2
        ]
      }
    ]
  },
  "puck_illusory_orb": {
    "id": 5069,
    "name": "puck_illusory_orb",
    "type": 0,
    "behavior": 16,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        3000
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.1,
        0.1,
        0.1,
        0.1
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        14,
        13,
        12,
        11
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        70,
        140,
        210,
        280
      ],
      "manaCost": [
        80,
        100,
        120,
        140
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          225
        ]
      },
      {
        "key": "max_distance",
        "value": [
          1950
        ],
        "talent": "special_bonus_unique_puck"
      },
      {
        "key": "orb_speed",
        "value": [
          651
        ],
        "talent": "special_bonus_unique_puck"
      },
      {
        "key": "orb_vision",
        "value": [
          450
        ]
      },
      {
        "key": "vision_duration",
        "value": [
          3.34,
          3.34,
          3.34,
          3.34
        ]
      }
    ]
  },
  "puck_ethereal_jaunt": {
    "id": 5070,
    "name": "puck_ethereal_jaunt",
    "type": 0,
    "behavior": 8388676,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": []
  },
  "puck_waning_rift": {
    "id": 5071,
    "name": "puck_waning_rift",
    "type": 0,
    "behavior": 4,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.1,
        0.1,
        0.1,
        0.1
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        16,
        15,
        14,
        13
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100,
        110,
        120,
        130
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          400,
          400,
          400,
          400
        ]
      },
      {
        "key": "silence_duration",
        "value": [
          2,
          2.5,
          3,
          3.5
        ]
      },
      {
        "key": "damage",
        "value": [
          100,
          160,
          220,
          280
        ],
        "talent": "special_bonus_unique_puck_4"
      }
    ]
  },
  "puck_phase_shift": {
    "id": 5072,
    "name": "puck_phase_shift",
    "type": 0,
    "behavior": 8585348,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0.75,
        1.5,
        2.25,
        3.25
      ],
      "coolDown": [
        6
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          0.75,
          1.5,
          2.25,
          3.25
        ]
      }
    ]
  },
  "puck_dream_coil": {
    "id": 5073,
    "name": "puck_dream_coil",
    "type": 1,
    "behavior": 48,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        750
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.1,
        0.1,
        0.1
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        70,
        65,
        60
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100,
        150,
        200
      ],
      "modifierSupportValue": 0.5,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "coil_duration",
        "value": [
          6,
          6,
          6
        ]
      },
      {
        "key": "coil_break_radius",
        "value": [
          600,
          600,
          600
        ]
      },
      {
        "key": "stun_duration",
        "value": [
          0.5
        ]
      },
      {
        "key": "coil_stun_duration",
        "value": [
          1.5,
          2.25,
          3
        ]
      },
      {
        "key": "coil_break_damage",
        "value": [
          300,
          400,
          500
        ]
      },
      {
        "key": "coil_radius",
        "value": [
          375,
          375,
          375
        ]
      },
      {
        "key": "coil_duration_scepter",
        "value": [
          8
        ]
      },
      {
        "key": "coil_break_damage_scepter",
        "value": [
          400,
          550,
          700
        ]
      },
      {
        "key": "coil_stun_duration_scepter",
        "value": [
          1.5,
          3,
          4.5
        ]
      }
    ]
  },
  "pudge_flesh_heap": {
    "id": 5074,
    "name": "pudge_flesh_heap",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "flesh_heap_magic_resist",
        "value": [
          8,
          10,
          12,
          14
        ]
      },
      {
        "key": "flesh_heap_strength_buff_amount",
        "value": [
          1,
          1.5,
          2,
          2.5
        ],
        "talent": "special_bonus_unique_pudge_1"
      },
      {
        "key": "flesh_heap_range",
        "value": [
          450
        ]
      }
    ]
  },
  "pudge_meat_hook": {
    "id": 5075,
    "name": "pudge_meat_hook",
    "type": 0,
    "behavior": 33554448,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 1,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        1300
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        27,
        22,
        17,
        12
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        150,
        220,
        290,
        360
      ],
      "manaCost": [
        140
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "hook_speed",
        "value": [
          1450
        ]
      },
      {
        "key": "hook_width",
        "value": [
          100
        ]
      },
      {
        "key": "hook_distance",
        "value": [
          1300
        ]
      },
      {
        "key": "vision_radius",
        "value": [
          500,
          500,
          500,
          500
        ]
      },
      {
        "key": "vision_duration",
        "value": [
          4,
          4,
          4,
          4
        ]
      },
      {
        "key": "cooldown_scepter",
        "value": [
          4
        ]
      },
      {
        "key": "damage_scepter",
        "value": [
          180,
          270,
          360,
          450
        ]
      }
    ]
  },
  "pudge_rot": {
    "id": 5076,
    "name": "pudge_rot",
    "type": 0,
    "behavior": 34603524,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "rot_radius",
        "value": [
          250
        ]
      },
      {
        "key": "rot_tick",
        "value": [
          0.2
        ]
      },
      {
        "key": "rot_slow",
        "value": [
          -11,
          -18,
          -25,
          -32
        ],
        "talent": "special_bonus_unique_pudge_4"
      },
      {
        "key": "rot_damage",
        "value": [
          30,
          60,
          90,
          120
        ],
        "talent": "special_bonus_unique_pudge_2"
      }
    ]
  },
  "pudge_dismember": {
    "id": 5077,
    "name": "pudge_dismember",
    "type": 1,
    "behavior": 33554568,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 16,
    "spellImmunityType": 1,
    "spellDispellableType": 2,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        160
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        3,
        3,
        3
      ],
      "coolDown": [
        30,
        25,
        20
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100,
        130,
        170
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "dismember_damage",
        "value": [
          60,
          90,
          120
        ]
      },
      {
        "key": "strength_damage",
        "value": [
          0.3,
          0.45,
          0.6
        ]
      },
      {
        "key": "ticks",
        "value": [
          3
        ]
      },
      {
        "key": "pull_units_per_second",
        "value": [
          75
        ]
      },
      {
        "key": "pull_distance_limit",
        "value": [
          125
        ]
      },
      {
        "key": "animation_rate",
        "value": [
          1.5
        ]
      }
    ]
  },
  "shadow_shaman_ether_shock": {
    "id": 5078,
    "name": "shadow_shaman_ether_shock",
    "type": 0,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        600
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        14,
        12,
        10,
        8
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        95,
        105,
        135,
        160
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "start_radius",
        "value": [
          200,
          200,
          200,
          200
        ]
      },
      {
        "key": "end_radius",
        "value": [
          300,
          300,
          300,
          300
        ]
      },
      {
        "key": "end_distance",
        "value": [
          500,
          500,
          500,
          500
        ]
      },
      {
        "key": "targets",
        "value": [
          1,
          3,
          5,
          7
        ]
      },
      {
        "key": "damage",
        "value": [
          140,
          200,
          260,
          320
        ],
        "talent": "special_bonus_unique_shadow_shaman_3"
      }
    ]
  },
  "shadow_shaman_voodoo": {
    "id": 5079,
    "name": "shadow_shaman_voodoo",
    "type": 0,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        500
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        13
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        70,
        110,
        150,
        190
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "movespeed",
        "value": [
          100
        ]
      },
      {
        "key": "duration",
        "value": [
          1.25,
          2,
          2.75,
          3.5
        ]
      }
    ]
  },
  "shadow_shaman_shackles": {
    "id": 5080,
    "name": "shadow_shaman_shackles",
    "type": 0,
    "behavior": 136,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 2,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        400
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        2.75,
        3.5,
        4.25,
        5
      ],
      "coolDown": [
        10
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        140,
        150,
        160,
        170
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "tick_interval",
        "value": [
          0.1,
          0.1,
          0.1,
          0.1
        ]
      },
      {
        "key": "total_damage",
        "value": [
          60,
          160,
          260,
          360
        ]
      },
      {
        "key": "channel_time",
        "value": [
          2.75,
          3.5,
          4.25,
          5
        ],
        "talent": "special_bonus_unique_shadow_shaman_2"
      }
    ]
  },
  "shadow_shaman_mass_serpent_ward": {
    "id": 5081,
    "name": "shadow_shaman_mass_serpent_ward",
    "type": 1,
    "behavior": 16,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 2,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        550
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        120
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        200,
        350,
        600
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "ward_count",
        "value": [
          10
        ]
      },
      {
        "key": "damage_tooltip",
        "value": [
          50,
          75,
          100
        ],
        "talent": "special_bonus_unique_shadow_shaman_4"
      },
      {
        "key": "duration",
        "value": [
          45,
          45,
          45
        ]
      },
      {
        "key": "scepter_range",
        "value": [
          225
        ]
      }
    ]
  },
  "razor_plasma_field": {
    "id": 5082,
    "name": "razor_plasma_field",
    "type": 0,
    "behavior": 2052,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        14
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        125,
        125,
        125,
        125
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "damage_min",
        "value": [
          30,
          50,
          70,
          90
        ]
      },
      {
        "key": "damage_max",
        "value": [
          160,
          230,
          300,
          370
        ]
      },
      {
        "key": "radius",
        "value": [
          700
        ]
      },
      {
        "key": "speed",
        "value": [
          636
        ]
      }
    ]
  },
  "razor_static_link": {
    "id": 5083,
    "name": "razor_static_link",
    "type": 0,
    "behavior": 33554440,
    "targetTeam": 2,
    "targetType": 64,
    "targetFlag": 16,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        550
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        40,
        35,
        30,
        25
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        65
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "drain_length",
        "value": [
          8
        ]
      },
      {
        "key": "drain_duration",
        "value": [
          18,
          18,
          18,
          18
        ]
      },
      {
        "key": "drain_rate",
        "value": [
          7,
          14,
          21,
          28
        ],
        "talent": "special_bonus_unique_razor"
      },
      {
        "key": "drain_range_buffer",
        "value": [
          250
        ]
      },
      {
        "key": "radius",
        "value": [
          200,
          200,
          200,
          200
        ]
      },
      {
        "key": "speed",
        "value": [
          900,
          900,
          900,
          900
        ]
      },
      {
        "key": "vision_radius",
        "value": [
          800,
          800,
          800,
          800
        ]
      },
      {
        "key": "vision_duration",
        "value": [
          3.34,
          3.34,
          3.34,
          3.34
        ]
      }
    ]
  },
  "razor_unstable_current": {
    "id": 5084,
    "name": "razor_unstable_current",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        5
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "movement_speed_pct",
        "value": [
          4,
          8,
          12,
          16
        ],
        "talent": "special_bonus_unique_razor_3"
      },
      {
        "key": "hit_interval",
        "value": [
          5
        ],
        "talent": "special_bonus_unique_razor_4"
      },
      {
        "key": "slow_duration",
        "value": [
          0.5,
          1,
          1.5,
          2
        ]
      },
      {
        "key": "slow_amount",
        "value": [
          -40
        ]
      },
      {
        "key": "damage",
        "value": [
          60,
          100,
          140,
          180
        ]
      },
      {
        "key": "radius",
        "value": [
          350
        ]
      }
    ]
  },
  "razor_eye_of_the_storm": {
    "id": 5085,
    "name": "razor_eye_of_the_storm",
    "type": 1,
    "behavior": 2052,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 2,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        80,
        70,
        60
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100,
        150,
        200
      ],
      "modifierSupportValue": 0.1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          500,
          500,
          500
        ]
      },
      {
        "key": "duration",
        "value": [
          30
        ]
      },
      {
        "key": "strike_interval",
        "value": [
          0.7,
          0.6,
          0.5
        ],
        "talent": "special_bonus_unique_razor_2"
      },
      {
        "key": "armor_reduction",
        "value": [
          1,
          1,
          1
        ]
      },
      {
        "key": "damage",
        "value": [
          40,
          55,
          70
        ]
      },
      {
        "key": "strike_interval_scepter",
        "value": [
          0.6,
          0.5,
          0.4
        ],
        "talent": "special_bonus_unique_razor_2"
      }
    ]
  },
  "skeleton_king_hellfire_blast": {
    "id": 5086,
    "name": "skeleton_king_hellfire_blast",
    "type": 0,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 2,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        525
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.35,
        0.35,
        0.35,
        0.35
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        14,
        12,
        10,
        8
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        50,
        100,
        150,
        200
      ],
      "manaCost": [
        95,
        110,
        125,
        140
      ],
      "modifierSupportValue": 0.5,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "blast_speed",
        "value": [
          1000
        ]
      },
      {
        "key": "blast_stun_duration",
        "value": [
          2
        ]
      },
      {
        "key": "tooltip_slow_duration",
        "value": [
          2
        ]
      },
      {
        "key": "blast_slow",
        "value": [
          -20
        ]
      },
      {
        "key": "blast_dot_duration",
        "value": [
          4
        ]
      },
      {
        "key": "blast_dot_damage",
        "value": [
          20,
          35,
          50,
          65
        ],
        "talent": "special_bonus_unique_wraith_king_3"
      }
    ]
  },
  "skeleton_king_vampiric_aura": {
    "id": 5087,
    "name": "skeleton_king_vampiric_aura",
    "type": 0,
    "behavior": 18948,
    "targetTeam": 1,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "vampiric_aura_radius",
        "value": [
          900
        ]
      },
      {
        "key": "vampiric_aura",
        "value": [
          18,
          22,
          26,
          30
        ],
        "talent": "special_bonus_unique_wraith_king_2"
      }
    ]
  },
  "skeleton_king_mortal_strike": {
    "id": 5088,
    "name": "skeleton_king_mortal_strike",
    "type": 0,
    "behavior": 4,
    "targetTeam": 2,
    "targetType": 64,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.1
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        50
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        30,
        45,
        60,
        75
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "crit_mult",
        "value": [
          300
        ]
      },
      {
        "key": "crit_chance",
        "value": [
          9,
          11,
          13,
          15
        ]
      },
      {
        "key": "skeleton_duration",
        "value": [
          90
        ]
      },
      {
        "key": "max_skeleton_charges",
        "value": [
          2,
          4,
          6,
          8
        ],
        "talent": "special_bonus_unique_wraith_king_5"
      },
      {
        "key": "spawn_interval",
        "value": [
          0.25
        ]
      }
    ]
  },
  "skeleton_king_reincarnation": {
    "id": 5089,
    "name": "skeleton_king_reincarnation",
    "type": 1,
    "behavior": 2,
    "targetTeam": 1,
    "targetType": 64,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        200,
        120,
        40
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        160
      ],
      "modifierSupportValue": 0.2,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "reincarnate_time",
        "value": [
          3,
          3,
          3
        ]
      },
      {
        "key": "slow_radius",
        "value": [
          900
        ]
      },
      {
        "key": "movespeed",
        "value": [
          -75
        ]
      },
      {
        "key": "attackslow_tooltip",
        "value": [
          -75
        ]
      },
      {
        "key": "slow_duration",
        "value": [
          5
        ]
      },
      {
        "key": "scepter_duration",
        "value": [
          7
        ]
      },
      {
        "key": "aura_radius",
        "value": [
          1200
        ]
      },
      {
        "key": "aura_radius_tooltip_scepter",
        "value": [
          1200
        ]
      }
    ]
  },
  "death_prophet_carrion_swarm": {
    "id": 5090,
    "name": "death_prophet_carrion_swarm",
    "type": 0,
    "behavior": 24,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        600
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.5
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        8,
        7,
        6,
        5
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        75,
        150,
        225,
        300
      ],
      "manaCost": [
        105,
        120,
        140,
        165
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "start_radius",
        "value": [
          110,
          110,
          110,
          110
        ]
      },
      {
        "key": "end_radius",
        "value": [
          300,
          300,
          300,
          300
        ]
      },
      {
        "key": "range",
        "value": [
          810,
          810,
          810,
          810
        ]
      },
      {
        "key": "speed",
        "value": [
          1100,
          1100,
          1100,
          1100
        ]
      }
    ]
  },
  "death_prophet_silence": {
    "id": 5091,
    "name": "death_prophet_silence",
    "type": 0,
    "behavior": 48,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        900
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.5,
        0.5,
        0.5,
        0.5
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        15,
        14,
        13,
        12
      ],
      "duration": [
        3,
        4,
        5,
        6
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        80,
        90,
        100,
        110
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          425
        ]
      },
      {
        "key": "duration",
        "value": [
          3,
          4,
          5,
          6
        ]
      }
    ]
  },
  "death_prophet_spirit_siphon": {
    "id": 5685,
    "name": "death_prophet_spirit_siphon",
    "type": 0,
    "behavior": 33554440,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        500
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.1
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        70
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "damage",
        "value": [
          14
        ]
      },
      {
        "key": "damage_pct",
        "value": [
          1,
          2.5,
          4,
          5.5
        ],
        "talent": "special_bonus_unique_death_prophet_3"
      },
      {
        "key": "haunt_duration",
        "value": [
          6
        ]
      },
      {
        "key": "movement_slow",
        "value": [
          5,
          10,
          15,
          20
        ]
      },
      {
        "key": "siphon_buffer",
        "value": [
          250
        ]
      },
      {
        "key": "max_charges",
        "value": [
          1,
          2,
          3,
          4
        ]
      },
      {
        "key": "charge_restore_time",
        "value": [
          60,
          55,
          50,
          45
        ]
      }
    ]
  },
  "death_prophet_exorcism": {
    "id": 5093,
    "name": "death_prophet_exorcism",
    "type": 1,
    "behavior": 4,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 2,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.5,
        0.5,
        0.5
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        145
      ],
      "duration": [
        35
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        200,
        300,
        400
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          700,
          700,
          700
        ]
      },
      {
        "key": "spirits",
        "value": [
          8,
          16,
          24
        ],
        "talent": "special_bonus_unique_death_prophet"
      },
      {
        "key": "spirit_speed",
        "value": [
          500,
          500,
          500
        ]
      },
      {
        "key": "max_distance",
        "value": [
          2000,
          2000,
          2000
        ]
      },
      {
        "key": "give_up_distance",
        "value": [
          1200,
          1200,
          1200
        ]
      },
      {
        "key": "min_damage",
        "value": [
          56
        ]
      },
      {
        "key": "max_damage",
        "value": [
          61
        ]
      },
      {
        "key": "heal_percent",
        "value": [
          25,
          25,
          25
        ]
      },
      {
        "key": "average_damage",
        "value": [
          58
        ]
      },
      {
        "key": "ghost_spawn_rate",
        "value": [
          0.35
        ]
      }
    ]
  },
  "sven_storm_bolt": {
    "id": 5094,
    "name": "sven_storm_bolt",
    "type": 0,
    "behavior": 33554472,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 2,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        600
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        13
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        100,
        175,
        250,
        325
      ],
      "manaCost": [
        110,
        120,
        130,
        140
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "bolt_speed",
        "value": [
          1000
        ]
      },
      {
        "key": "bolt_stun_duration",
        "value": [
          1.7,
          1.8,
          1.9,
          2
        ],
        "talent": "special_bonus_unique_sven_4"
      },
      {
        "key": "bolt_aoe",
        "value": [
          255
        ]
      },
      {
        "key": "vision_radius",
        "value": [
          225
        ]
      }
    ]
  },
  "sven_great_cleave": {
    "id": 5095,
    "name": "sven_great_cleave",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "cleave_starting_width",
        "value": [
          150
        ]
      },
      {
        "key": "cleave_ending_width",
        "value": [
          330
        ]
      },
      {
        "key": "cleave_distance",
        "value": [
          625
        ]
      },
      {
        "key": "great_cleave_damage",
        "value": [
          40,
          50,
          60,
          70
        ]
      }
    ]
  },
  "sven_warcry": {
    "id": 5096,
    "name": "sven_warcry",
    "type": 0,
    "behavior": 2052,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        35,
        30,
        25,
        20
      ],
      "duration": [
        8
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        25,
        25,
        25,
        25
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "warcry_armor",
        "value": [
          5,
          10,
          15,
          20
        ]
      },
      {
        "key": "warcry_movespeed",
        "value": [
          12
        ]
      },
      {
        "key": "warcry_radius",
        "value": [
          900
        ]
      },
      {
        "key": "duration_tooltip",
        "value": [
          8
        ]
      }
    ]
  },
  "sven_gods_strength": {
    "id": 5097,
    "name": "sven_gods_strength",
    "type": 1,
    "behavior": 33554436,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        80
      ],
      "duration": [
        25,
        25,
        25
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100,
        150,
        200
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "gods_strength_damage",
        "value": [
          80,
          120,
          160
        ]
      },
      {
        "key": "gods_strength_bonus_str",
        "value": [
          10,
          20,
          30
        ],
        "talent": "special_bonus_unique_sven_2"
      },
      {
        "key": "radius_scepter",
        "value": [
          900
        ]
      },
      {
        "key": "gods_strength_damage_scepter",
        "value": [
          75,
          100,
          125
        ]
      }
    ]
  },
  "storm_spirit_static_remnant": {
    "id": 5098,
    "name": "storm_spirit_static_remnant",
    "type": 0,
    "behavior": 4,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        3.5
      ],
      "duration": [
        12,
        12,
        12,
        12
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "static_remnant_radius",
        "value": [
          235
        ]
      },
      {
        "key": "static_remnant_damage_radius",
        "value": [
          260
        ]
      },
      {
        "key": "static_remnant_delay",
        "value": [
          1
        ]
      },
      {
        "key": "static_remnant_damage",
        "value": [
          140,
          180,
          220,
          260
        ],
        "talent": "special_bonus_unique_storm_spirit_5"
      }
    ]
  },
  "storm_spirit_electric_vortex": {
    "id": 5099,
    "name": "storm_spirit_electric_vortex",
    "type": 0,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 2,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        300
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        21,
        20,
        19,
        18
      ],
      "duration": [
        1,
        1.5,
        2,
        2.5
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        85
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "electric_vortex_pull_units_per_second",
        "value": [
          100
        ]
      },
      {
        "key": "electric_vortex_pull_tether_range",
        "value": [
          1200
        ]
      },
      {
        "key": "electric_vortex_self_slow",
        "value": [
          -50
        ]
      },
      {
        "key": "electric_vortex_self_slow_duration",
        "value": [
          3
        ]
      },
      {
        "key": "duration",
        "value": [
          1,
          1.5,
          2,
          2.5
        ],
        "talent": "special_bonus_unique_storm_spirit"
      },
      {
        "key": "radius_scepter",
        "value": [
          475
        ]
      }
    ]
  },
  "storm_spirit_overload": {
    "id": 5100,
    "name": "storm_spirit_overload",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0.6,
        0.6,
        0.6,
        0.6
      ],
      "sharedCooldown": "0",
      "damage": [
        40,
        60,
        80,
        100
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 40
    },
    "special": [
      {
        "key": "overload_aoe",
        "value": [
          300
        ]
      },
      {
        "key": "overload_move_slow",
        "value": [
          -80
        ]
      },
      {
        "key": "overload_attack_slow",
        "value": [
          -50
        ]
      },
      {
        "key": "tooltip_duration",
        "value": [
          0.6,
          0.6,
          0.6,
          0.6
        ]
      }
    ]
  },
  "storm_spirit_ball_lightning": {
    "id": 5101,
    "name": "storm_spirit_ball_lightning",
    "type": 1,
    "behavior": 131088,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        8,
        12,
        16
      ],
      "manaCost": [
        30
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "ball_lightning_initial_mana_percentage",
        "value": [
          8
        ]
      },
      {
        "key": "ball_lightning_initial_mana_base",
        "value": [
          30
        ]
      },
      {
        "key": "ball_lightning_move_speed",
        "value": [
          1250,
          1875,
          2500
        ]
      },
      {
        "key": "ball_lightning_aoe",
        "value": [
          200
        ]
      },
      {
        "key": "ball_lightning_travel_cost_base",
        "value": [
          12
        ]
      },
      {
        "key": "ball_lightning_travel_cost_percent",
        "value": [
          0.7
        ]
      },
      {
        "key": "ball_lightning_vision_radius",
        "value": [
          400
        ]
      },
      {
        "key": "blocker_duration",
        "value": [
          5
        ]
      },
      {
        "key": "scepter_remnant_interval",
        "value": [
          300
        ]
      }
    ]
  },
  "sandking_burrowstrike": {
    "id": 5102,
    "name": "sandking_burrowstrike",
    "type": 0,
    "behavior": 131096,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 2,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        350,
        450,
        550,
        650
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        14,
        13,
        12,
        11
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        85,
        150,
        215,
        280
      ],
      "manaCost": [
        110,
        120,
        130,
        140
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "burrow_width",
        "value": [
          150
        ]
      },
      {
        "key": "burrow_duration",
        "value": [
          1.9,
          2,
          2.1,
          2.2
        ]
      },
      {
        "key": "burrow_speed",
        "value": [
          2000
        ]
      },
      {
        "key": "burrow_anim_time",
        "value": [
          0.52
        ]
      },
      {
        "key": "tooltip_range",
        "value": [
          350,
          450,
          550,
          650
        ]
      },
      {
        "key": "cast_range_scepter",
        "value": [
          700,
          900,
          1100,
          1300
        ]
      },
      {
        "key": "burrow_speed_scepter",
        "value": [
          3000
        ]
      }
    ]
  },
  "sandking_sand_storm": {
    "id": 5103,
    "name": "sandking_sand_storm",
    "type": 0,
    "behavior": 8388740,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        50
      ],
      "coolDown": [
        34,
        26,
        18,
        10
      ],
      "duration": [
        50
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        60,
        50,
        40,
        30
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "sand_storm_invis_delay",
        "value": [
          0.9,
          1.1,
          1.3,
          1.5
        ]
      },
      {
        "key": "sand_storm_radius",
        "value": [
          525
        ]
      },
      {
        "key": "AbilityDuration",
        "value": [
          50
        ]
      },
      {
        "key": "sand_storm_damage",
        "value": [
          40,
          60,
          80,
          100
        ],
        "talent": "special_bonus_unique_sand_king_2"
      }
    ]
  },
  "sandking_caustic_finale": {
    "id": 5104,
    "name": "sandking_caustic_finale",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "caustic_finale_radius",
        "value": [
          400
        ]
      },
      {
        "key": "caustic_finale_damage",
        "value": [
          90,
          130,
          170,
          220
        ]
      },
      {
        "key": "caustic_finale_damage_expire",
        "value": [
          20,
          50,
          80,
          110
        ]
      },
      {
        "key": "caustic_finale_duration",
        "value": [
          6
        ]
      },
      {
        "key": "caustic_finale_slow",
        "value": [
          -15,
          -20,
          -25,
          -30
        ]
      },
      {
        "key": "caustic_finale_slow_duration",
        "value": [
          3
        ]
      },
      {
        "key": "caustic_finale_expire_dmg_pct_tooltip",
        "value": [
          50
        ]
      }
    ]
  },
  "sandking_epicenter": {
    "id": 5105,
    "name": "sandking_epicenter",
    "type": 1,
    "behavior": 33554564,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        2,
        2,
        2
      ],
      "coolDown": [
        120,
        110,
        100
      ],
      "duration": [
        3,
        3,
        3
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        150,
        225,
        300
      ],
      "modifierSupportValue": 0.2,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "epicenter_radius",
        "value": [
          275,
          325,
          375,
          425,
          475,
          525,
          575,
          650,
          675,
          700,
          725,
          750,
          775,
          800
        ]
      },
      {
        "key": "epicenter_pulses",
        "value": [
          6,
          8,
          10
        ],
        "talent": "special_bonus_unique_sand_king"
      },
      {
        "key": "epicenter_damage",
        "value": [
          110,
          110,
          110
        ]
      },
      {
        "key": "epicenter_slow",
        "value": [
          -30,
          -30,
          -30
        ]
      },
      {
        "key": "epicenter_slow_as",
        "value": [
          -30
        ],
        "talent": "special_bonus_unique_sand_king_3"
      },
      {
        "key": "epicenter_slow_duration_tooltip",
        "value": [
          3
        ]
      }
    ]
  },
  "tiny_avalanche": {
    "id": 5106,
    "name": "tiny_avalanche",
    "type": 0,
    "behavior": 48,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 2,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        600
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        23,
        21,
        19,
        17
      ],
      "duration": [
        2,
        2,
        2,
        2
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        120,
        120,
        120,
        120
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          275,
          275,
          275,
          275
        ]
      },
      {
        "key": "tick_interval",
        "value": [
          0.25,
          0.25,
          0.25,
          0.25
        ]
      },
      {
        "key": "num_ticks",
        "value": [
          4,
          4,
          4,
          4
        ]
      },
      {
        "key": "stun_duration",
        "value": [
          1
        ]
      },
      {
        "key": "projectile_duration",
        "value": [
          0.5
        ]
      },
      {
        "key": "avalanche_damage",
        "value": [
          120,
          180,
          240,
          300
        ],
        "talent": "special_bonus_unique_tiny"
      }
    ]
  },
  "tiny_toss": {
    "id": 5107,
    "name": "tiny_toss",
    "type": 0,
    "behavior": 67108904,
    "targetTeam": 8,
    "targetType": 32,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1300
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        11
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        90,
        100,
        110,
        120
      ],
      "modifierSupportValue": 0.25,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          1.3
        ]
      },
      {
        "key": "grab_radius",
        "value": [
          275
        ]
      },
      {
        "key": "radius",
        "value": [
          275
        ]
      },
      {
        "key": "bonus_damage_pct",
        "value": [
          30
        ]
      },
      {
        "key": "tooltip_range",
        "value": [
          1300
        ]
      },
      {
        "key": "toss_damage",
        "value": [
          90,
          160,
          230,
          300
        ]
      },
      {
        "key": "charge_restore_time",
        "value": [
          11
        ]
      }
    ]
  },
  "tiny_craggy_exterior": {
    "id": 5108,
    "name": "tiny_craggy_exterior",
    "linkedAbility": "tiny_toss_tree",
    "type": 0,
    "behavior": 8,
    "targetTeam": 8,
    "targetType": 544,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 2,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        165
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.2
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        24,
        20,
        16,
        12
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        50
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 35
    },
    "special": [
      {
        "key": "attack_count",
        "value": [
          5
        ]
      },
      {
        "key": "bonus_damage",
        "value": [
          25,
          30,
          35,
          40
        ]
      },
      {
        "key": "bonus_damage_buildings",
        "value": [
          80,
          120,
          160,
          200
        ]
      },
      {
        "key": "attack_range",
        "value": [
          350
        ]
      },
      {
        "key": "splash_width",
        "value": [
          200
        ]
      },
      {
        "key": "splash_range",
        "value": [
          400
        ]
      },
      {
        "key": "splash_pct",
        "value": [
          30,
          40,
          50,
          60
        ]
      }
    ]
  },
  "tiny_toss_tree": {
    "id": 6937,
    "name": "tiny_toss_tree",
    "linkedAbility": "tiny_craggy_exterior",
    "type": 0,
    "behavior": 268435481,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 2,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1300
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.2
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "speed",
        "value": [
          900
        ]
      },
      {
        "key": "range",
        "value": [
          1300
        ]
      },
      {
        "key": "bonus_damage",
        "value": [
          10,
          20,
          30,
          40
        ]
      },
      {
        "key": "splash_radius",
        "value": [
          275
        ]
      },
      {
        "key": "splash_pct",
        "value": [
          150
        ]
      }
    ]
  },
  "tiny_grow": {
    "id": 5109,
    "name": "tiny_grow",
    "type": 1,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "status_resistance",
        "value": [
          30,
          40,
          50
        ]
      },
      {
        "key": "bonus_armor",
        "value": [
          5,
          10,
          15
        ]
      },
      {
        "key": "bonus_damage",
        "value": [
          30,
          45,
          60
        ]
      },
      {
        "key": "attack_speed_reduction",
        "value": [
          20,
          35,
          50
        ]
      }
    ]
  },
  "zuus_arc_lightning": {
    "id": 5110,
    "name": "zuus_arc_lightning",
    "type": 0,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        850
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.2
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        1.6
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        65,
        70,
        75,
        80
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "arc_damage",
        "value": [
          70,
          95,
          120,
          145
        ],
        "talent": "special_bonus_unique_zeus_2"
      },
      {
        "key": "radius",
        "value": [
          500,
          500,
          500,
          500
        ]
      },
      {
        "key": "jump_count",
        "value": [
          5,
          7,
          9,
          15
        ]
      },
      {
        "key": "jump_delay",
        "value": [
          0.25,
          0.25,
          0.25,
          0.25
        ]
      }
    ]
  },
  "zuus_lightning_bolt": {
    "id": 5111,
    "name": "zuus_lightning_bolt",
    "type": 0,
    "behavior": 24,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        700,
        750,
        800,
        850
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.4,
        0.4,
        0.4,
        0.4
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        6,
        6,
        6,
        6
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        125,
        200,
        275,
        350
      ],
      "manaCost": [
        90,
        105,
        120,
        135
      ],
      "modifierSupportValue": 0.1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "cast_range_tooltip",
        "value": [
          700,
          750,
          800,
          850
        ]
      },
      {
        "key": "true_sight_radius",
        "value": [
          750
        ]
      },
      {
        "key": "sight_radius_day",
        "value": [
          750
        ]
      },
      {
        "key": "sight_radius_night",
        "value": [
          750
        ]
      },
      {
        "key": "sight_duration",
        "value": [
          4.5
        ]
      },
      {
        "key": "spread_aoe",
        "value": [
          325
        ]
      }
    ]
  },
  "zuus_cloud": {
    "id": 6325,
    "name": "zuus_cloud",
    "type": 0,
    "behavior": 268435505,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 1,
    "fightRecapLevel": 1,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.2
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        35
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        275
      ],
      "modifierSupportValue": 0.1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "cloud_duration",
        "value": [
          35
        ]
      },
      {
        "key": "cloud_bolt_interval",
        "value": [
          2.25
        ]
      },
      {
        "key": "cloud_radius",
        "value": [
          450
        ]
      }
    ]
  },
  "zuus_static_field": {
    "id": 5112,
    "name": "zuus_static_field",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1200
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          1200
        ]
      },
      {
        "key": "damage_health_pct",
        "value": [
          4,
          6,
          8,
          10
        ],
        "talent": "special_bonus_unique_zeus"
      }
    ]
  },
  "zuus_thundergods_wrath": {
    "id": 5113,
    "name": "zuus_thundergods_wrath",
    "type": 1,
    "behavior": 4,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.4,
        0.4,
        0.4,
        0.4
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        90
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        225,
        325,
        450
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "true_sight_radius",
        "value": [
          900,
          900,
          900
        ]
      },
      {
        "key": "true_sight_radius_tooltip",
        "value": [
          500
        ]
      },
      {
        "key": "sight_radius_day",
        "value": [
          500
        ]
      },
      {
        "key": "sight_radius_night",
        "value": [
          500
        ]
      },
      {
        "key": "sight_duration",
        "value": [
          3,
          3,
          3,
          3
        ]
      },
      {
        "key": "damage",
        "value": [
          225,
          325,
          425
        ]
      }
    ]
  },
  "slardar_sprint": {
    "id": 5114,
    "name": "slardar_sprint",
    "type": 0,
    "behavior": 1050628,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        17
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "bonus_speed",
        "value": [
          20,
          28,
          36,
          44
        ]
      },
      {
        "key": "duration",
        "value": [
          10
        ]
      },
      {
        "key": "river_speed",
        "value": [
          700
        ]
      }
    ]
  },
  "slardar_slithereen_crush": {
    "id": 5115,
    "name": "slardar_slithereen_crush",
    "type": 0,
    "behavior": 4,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 2,
    "damageType": 2,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.35,
        0.35,
        0.35,
        0.35
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        8
      ],
      "duration": [
        1.25,
        1.5,
        1.75,
        2
      ],
      "sharedCooldown": "0",
      "damage": [
        75,
        125,
        175,
        225
      ],
      "manaCost": [
        80,
        95,
        105,
        115
      ],
      "modifierSupportValue": 0.5,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "crush_radius",
        "value": [
          350
        ]
      },
      {
        "key": "crush_extra_slow",
        "value": [
          -20
        ]
      },
      {
        "key": "crush_attack_slow_tooltip",
        "value": [
          -20
        ]
      },
      {
        "key": "crush_extra_slow_duration",
        "value": [
          2
        ]
      },
      {
        "key": "stun_duration",
        "value": [
          1.25,
          1.5,
          1.75,
          2
        ]
      }
    ]
  },
  "slardar_bash": {
    "id": 5116,
    "name": "slardar_bash",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 2,
    "damageType": 2,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 25
    },
    "special": [
      {
        "key": "chance",
        "value": [
          10,
          15,
          20,
          25
        ],
        "talent": "special_bonus_unique_slardar"
      },
      {
        "key": "bonus_damage",
        "value": [
          80,
          100,
          120,
          140
        ],
        "talent": "special_bonus_unique_slardar_2"
      },
      {
        "key": "duration",
        "value": [
          1
        ]
      },
      {
        "key": "duration_creep",
        "value": [
          2
        ]
      }
    ]
  },
  "slardar_amplify_damage": {
    "id": 5117,
    "name": "slardar_amplify_damage",
    "type": 1,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 16,
    "spellImmunityType": 1,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        700
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.35,
        0.35,
        0.35
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        5
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        25
      ],
      "modifierSupportValue": 6,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "armor_reduction",
        "value": [
          -10,
          -15,
          -20
        ]
      },
      {
        "key": "duration",
        "value": [
          18
        ]
      }
    ]
  },
  "tidehunter_gush": {
    "id": 5118,
    "name": "tidehunter_gush",
    "type": 0,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        700
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        12
      ],
      "duration": [
        4,
        4,
        4,
        4
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        90,
        100,
        110,
        120
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "gush_damage",
        "value": [
          110,
          160,
          210,
          260
        ],
        "talent": "special_bonus_unique_tidehunter_2"
      },
      {
        "key": "projectile_speed",
        "value": [
          2500
        ]
      },
      {
        "key": "movement_speed",
        "value": [
          -40,
          -40,
          -40,
          -40
        ]
      },
      {
        "key": "negative_armor",
        "value": [
          4,
          5,
          6,
          7
        ],
        "talent": "special_bonus_unique_tidehunter"
      },
      {
        "key": "speed_scepter",
        "value": [
          1500
        ]
      },
      {
        "key": "aoe_scepter",
        "value": [
          240
        ]
      },
      {
        "key": "cooldown_scepter",
        "value": [
          7
        ]
      },
      {
        "key": "cast_range_scepter",
        "value": [
          1800
        ]
      }
    ]
  },
  "tidehunter_kraken_shell": {
    "id": 5119,
    "name": "tidehunter_kraken_shell",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "damage_reduction",
        "value": [
          12,
          24,
          36,
          48
        ],
        "talent": "special_bonus_unique_tidehunter_4"
      },
      {
        "key": "damage_cleanse",
        "value": [
          600,
          550,
          500,
          450
        ]
      },
      {
        "key": "damage_reset_interval",
        "value": [
          6,
          6,
          6,
          6
        ]
      }
    ]
  },
  "tidehunter_anchor_smash": {
    "id": 5120,
    "name": "tidehunter_anchor_smash",
    "type": 0,
    "behavior": 4,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 1,
    "damageType": 2,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        375
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.4
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        7,
        6,
        5,
        4
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        75,
        125,
        175,
        225
      ],
      "manaCost": [
        30,
        40,
        50,
        60
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "damage_reduction",
        "value": [
          -45,
          -50,
          -55,
          -60
        ],
        "talent": "special_bonus_unique_tidehunter_3"
      },
      {
        "key": "reduction_duration",
        "value": [
          6,
          6,
          6,
          6
        ]
      },
      {
        "key": "radius",
        "value": [
          375
        ]
      }
    ]
  },
  "tidehunter_ravage": {
    "id": 5121,
    "name": "tidehunter_ravage",
    "type": 1,
    "behavior": 4,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 2,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        150,
        150,
        150
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        200,
        290,
        380
      ],
      "manaCost": [
        150,
        225,
        325
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          1250
        ]
      },
      {
        "key": "speed",
        "value": [
          725
        ]
      },
      {
        "key": "duration",
        "value": [
          2.4,
          2.6,
          2.8
        ]
      }
    ]
  },
  "vengefulspirit_magic_missile": {
    "id": 5122,
    "name": "vengefulspirit_magic_missile",
    "type": 0,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 2,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        500
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        10
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        110,
        120,
        130,
        140
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "magic_missile_speed",
        "value": [
          1250
        ]
      },
      {
        "key": "magic_missile_stun",
        "value": [
          1.5,
          1.6,
          1.7,
          1.8
        ]
      },
      {
        "key": "magic_missile_damage",
        "value": [
          100,
          175,
          250,
          325
        ],
        "talent": "special_bonus_unique_vengeful_spirit_1"
      }
    ]
  },
  "vengefulspirit_command_aura": {
    "id": 5123,
    "name": "vengefulspirit_command_aura",
    "type": 0,
    "behavior": 16386,
    "targetTeam": 1,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1200
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "bonus_damage_pct",
        "value": [
          12,
          18,
          24,
          30
        ],
        "talent": "special_bonus_unique_vengeful_spirit_2"
      },
      {
        "key": "aura_radius",
        "value": [
          1200
        ]
      },
      {
        "key": "images_do_damage_percent",
        "value": [
          0
        ]
      },
      {
        "key": "images_do_damage_percent_tooltip",
        "value": [
          100
        ]
      },
      {
        "key": "images_take_damage_percent",
        "value": [
          100
        ]
      },
      {
        "key": "images_take_damage_percent_tooltip",
        "value": [
          200
        ]
      },
      {
        "key": "illusion_duration",
        "value": [
          6
        ]
      }
    ]
  },
  "vengefulspirit_wave_of_terror": {
    "id": 5124,
    "name": "vengefulspirit_wave_of_terror",
    "type": 0,
    "behavior": 16,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1400
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        16,
        14,
        12,
        10
      ],
      "duration": [
        8
      ],
      "sharedCooldown": "0",
      "damage": [
        60,
        80,
        100,
        120
      ],
      "manaCost": [
        25,
        30,
        35,
        40
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "wave_speed",
        "value": [
          2000
        ]
      },
      {
        "key": "wave_width",
        "value": [
          300
        ]
      },
      {
        "key": "armor_reduction",
        "value": [
          -3,
          -4,
          -5,
          -6
        ],
        "talent": "special_bonus_unique_vengeful_spirit_4"
      },
      {
        "key": "tooltip_duration",
        "value": [
          8
        ]
      },
      {
        "key": "vision_aoe",
        "value": [
          300
        ]
      },
      {
        "key": "vision_duration",
        "value": [
          3,
          3,
          3,
          3
        ]
      }
    ]
  },
  "vengefulspirit_nether_swap": {
    "id": 5125,
    "name": "vengefulspirit_nether_swap",
    "type": 1,
    "behavior": 8,
    "targetTeam": 8,
    "targetType": 32,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        700,
        950,
        1200
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        45
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100,
        150,
        200
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "tooltip_range",
        "value": [
          700,
          950,
          1200
        ]
      },
      {
        "key": "nether_swap_cooldown_scepter",
        "value": [
          10
        ]
      },
      {
        "key": "illusion_damage_out_pct_scepter",
        "value": [
          100
        ]
      },
      {
        "key": "illusion_damage_in_pct_scepter",
        "value": [
          150
        ]
      }
    ]
  },
  "crystal_maiden_crystal_nova": {
    "id": 5126,
    "name": "crystal_maiden_crystal_nova",
    "type": 0,
    "behavior": 48,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        700
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        11,
        10,
        9,
        8
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        130,
        145,
        160,
        175
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          425
        ]
      },
      {
        "key": "movespeed_slow",
        "value": [
          -20,
          -30,
          -40,
          -50
        ]
      },
      {
        "key": "attackspeed_slow",
        "value": [
          -20,
          -30,
          -40,
          -50
        ]
      },
      {
        "key": "duration",
        "value": [
          4.5
        ]
      },
      {
        "key": "vision_duration",
        "value": [
          6
        ]
      },
      {
        "key": "nova_damage",
        "value": [
          130,
          170,
          210,
          260
        ],
        "talent": "special_bonus_unique_crystal_maiden_2"
      }
    ]
  },
  "crystal_maiden_frostbite": {
    "id": 5127,
    "name": "crystal_maiden_frostbite",
    "type": 0,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        525
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        9,
        8,
        7,
        6
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        140,
        145,
        150,
        155
      ],
      "modifierSupportValue": 0.5,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "damage_per_second_tooltip",
        "value": [
          50
        ]
      },
      {
        "key": "duration",
        "value": [
          1.5,
          2,
          2.5,
          3
        ],
        "talent": "special_bonus_unique_crystal_maiden_1"
      },
      {
        "key": "hero_damage_tooltip",
        "value": [
          150,
          200,
          250,
          300
        ]
      },
      {
        "key": "creep_duration",
        "value": [
          10,
          10,
          10,
          10
        ]
      },
      {
        "key": "creep_damage_tooltip",
        "value": [
          1000
        ]
      },
      {
        "key": "damage",
        "value": [
          100
        ]
      }
    ]
  },
  "crystal_maiden_brilliance_aura": {
    "id": 5128,
    "name": "crystal_maiden_brilliance_aura",
    "type": 0,
    "behavior": 2,
    "targetTeam": 1,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.2
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "mana_regen",
        "value": [
          0.8,
          1,
          1.2,
          1.4
        ]
      },
      {
        "key": "mana_regen_self",
        "value": [
          1.8,
          2.6,
          3.4,
          4.2
        ]
      }
    ]
  },
  "crystal_maiden_freezing_field": {
    "id": 5129,
    "name": "crystal_maiden_freezing_field",
    "type": 1,
    "behavior": 8388740,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        10
      ],
      "coolDown": [
        110,
        100,
        90
      ],
      "duration": [
        10
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        200,
        400,
        600
      ],
      "modifierSupportValue": 0.35,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          835
        ]
      },
      {
        "key": "explosion_radius",
        "value": [
          300
        ]
      },
      {
        "key": "explosion_interval",
        "value": [
          0.1
        ]
      },
      {
        "key": "movespeed_slow",
        "value": [
          -30
        ]
      },
      {
        "key": "attack_slow",
        "value": [
          -60
        ]
      },
      {
        "key": "slow_duration",
        "value": [
          1
        ]
      },
      {
        "key": "explosion_min_dist",
        "value": [
          195
        ]
      },
      {
        "key": "explosion_max_dist",
        "value": [
          785
        ]
      },
      {
        "key": "damage",
        "value": [
          105,
          170,
          250
        ],
        "talent": "special_bonus_unique_crystal_maiden_3"
      },
      {
        "key": "duration_tooltip",
        "value": [
          10
        ]
      },
      {
        "key": "scepter_delay",
        "value": [
          2.5
        ]
      }
    ]
  },
  "windrunner_shackleshot": {
    "id": 5130,
    "name": "windrunner_shackleshot",
    "type": 0,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 2,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        800
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.15
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        18,
        16,
        14,
        12
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        70,
        85,
        100,
        115
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "fail_stun_duration",
        "value": [
          0.75,
          0.75,
          0.75,
          0.75
        ]
      },
      {
        "key": "stun_duration",
        "value": [
          2,
          2.6,
          3.2,
          3.8
        ]
      },
      {
        "key": "shackle_distance",
        "value": [
          575
        ]
      },
      {
        "key": "arrow_speed",
        "value": [
          1650
        ]
      },
      {
        "key": "shackle_count",
        "value": [
          1
        ]
      },
      {
        "key": "shackle_angle",
        "value": [
          23
        ]
      }
    ]
  },
  "windrunner_powershot": {
    "id": 5131,
    "name": "windrunner_powershot",
    "type": 0,
    "behavior": 144,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        2600
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0
      ],
      "channelTime": [
        1,
        1,
        1,
        1
      ],
      "coolDown": [
        12,
        11,
        10,
        9
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        90,
        100,
        110,
        120
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "powershot_damage",
        "value": [
          150,
          250,
          350,
          450
        ],
        "talent": "special_bonus_unique_windranger_3"
      },
      {
        "key": "damage_reduction",
        "value": [
          0.2
        ]
      },
      {
        "key": "arrow_width",
        "value": [
          125,
          125,
          125,
          125
        ]
      },
      {
        "key": "arrow_range",
        "value": [
          2600
        ]
      },
      {
        "key": "arrow_speed",
        "value": [
          3000,
          3000,
          3000,
          3000
        ]
      },
      {
        "key": "tree_width",
        "value": [
          75,
          75,
          75,
          75
        ]
      },
      {
        "key": "vision_radius",
        "value": [
          400
        ]
      },
      {
        "key": "vision_duration",
        "value": [
          3.34,
          3.34,
          3.34,
          3.34
        ]
      }
    ]
  },
  "windrunner_windrun": {
    "id": 5132,
    "name": "windrunner_windrun",
    "type": 0,
    "behavior": 2052,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        15,
        14,
        13,
        12
      ],
      "duration": [
        3,
        4,
        5,
        6
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        50
      ],
      "modifierSupportValue": 0.1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "movespeed_bonus_pct",
        "value": [
          60
        ]
      },
      {
        "key": "evasion_pct_tooltip",
        "value": [
          100
        ]
      },
      {
        "key": "enemy_movespeed_bonus_pct",
        "value": [
          -15,
          -20,
          -25,
          -30
        ],
        "talent": "special_bonus_unique_windranger_2"
      },
      {
        "key": "radius",
        "value": [
          325
        ]
      },
      {
        "key": "duration",
        "value": [
          3,
          4,
          5,
          6
        ]
      }
    ]
  },
  "windrunner_focusfire": {
    "id": 5133,
    "name": "windrunner_focusfire",
    "type": 1,
    "behavior": 33554440,
    "targetTeam": 2,
    "targetType": 69,
    "targetFlag": 16,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        600
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        70
      ],
      "duration": [
        20,
        20,
        20
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        75,
        100,
        125
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "bonus_attack_speed",
        "value": [
          400
        ]
      },
      {
        "key": "focusfire_damage_reduction",
        "value": [
          -50,
          -40,
          -30
        ]
      },
      {
        "key": "focusfire_duration_tooltip",
        "value": [
          20
        ]
      },
      {
        "key": "cooldown_scepter",
        "value": [
          15,
          15,
          15
        ]
      },
      {
        "key": "focusfire_damage_reduction_scepter",
        "value": [
          -30,
          -15,
          0
        ]
      },
      {
        "key": "focusfire_fire_on_the_move",
        "value": [
          1
        ]
      }
    ]
  },
  "lich_frost_nova": {
    "id": 5134,
    "name": "lich_frost_nova",
    "type": 0,
    "behavior": 40,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        600
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.4,
        0.4,
        0.4,
        0.4
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        7
      ],
      "duration": [
        4,
        4,
        4,
        4
      ],
      "sharedCooldown": "0",
      "damage": [
        50,
        100,
        150,
        200
      ],
      "manaCost": [
        125,
        150,
        170,
        190
      ],
      "modifierSupportValue": 0.3,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          200,
          200,
          200,
          200
        ]
      },
      {
        "key": "slow_movement_speed",
        "value": [
          -30
        ]
      },
      {
        "key": "slow_attack_speed",
        "value": [
          -30
        ]
      },
      {
        "key": "aoe_damage",
        "value": [
          75,
          100,
          125,
          150
        ]
      }
    ]
  },
  "lich_frost_armor": {
    "id": 5135,
    "name": "lich_frost_armor",
    "type": 0,
    "behavior": 8392712,
    "targetTeam": 1,
    "targetType": 69,
    "targetFlag": 8,
    "spellImmunityType": 3,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1000
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.4,
        0.4,
        0.4,
        0.4
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        5,
        5,
        5,
        5
      ],
      "duration": [
        40,
        40,
        40,
        40
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        50,
        50,
        50,
        50
      ],
      "modifierSupportValue": 0.3,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "armor_bonus",
        "value": [
          4,
          6,
          8,
          10
        ]
      },
      {
        "key": "slow_duration",
        "value": [
          2,
          2,
          2,
          2
        ]
      },
      {
        "key": "slow_movement_speed",
        "value": [
          -8,
          -16,
          -24,
          -32
        ]
      },
      {
        "key": "slow_attack_speed",
        "value": [
          -8,
          -16,
          -24,
          -32
        ]
      }
    ]
  },
  "lich_dark_ritual": {
    "id": 5136,
    "name": "lich_dark_ritual",
    "type": 0,
    "behavior": 8388616,
    "targetTeam": 1,
    "targetType": 1,
    "targetFlag": 34048,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        400
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.4,
        0.4,
        0.4,
        0.4
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        60,
        46,
        32,
        18
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "health_conversion",
        "value": [
          55,
          70,
          85,
          100
        ]
      }
    ]
  },
  "lich_chain_frost": {
    "id": 5137,
    "name": "lich_chain_frost",
    "type": 1,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 16,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        750
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        100,
        80,
        60
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        200,
        325,
        500
      ],
      "modifierSupportValue": 0,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "damage",
        "value": [
          300,
          400,
          500
        ]
      },
      {
        "key": "jumps",
        "value": [
          10,
          10,
          10
        ]
      },
      {
        "key": "jump_range",
        "value": [
          600
        ]
      },
      {
        "key": "slow_movement_speed",
        "value": [
          -65
        ]
      },
      {
        "key": "slow_attack_speed",
        "value": [
          -65
        ]
      },
      {
        "key": "slow_duration",
        "value": [
          2.5
        ]
      },
      {
        "key": "projectile_speed",
        "value": [
          850
        ]
      },
      {
        "key": "vision_radius",
        "value": [
          800
        ]
      },
      {
        "key": "damage_scepter",
        "value": [
          400,
          500,
          600
        ]
      },
      {
        "key": "cast_range_scepter",
        "value": [
          850,
          850,
          850
        ]
      }
    ]
  },
  "witch_doctor_paralyzing_cask": {
    "id": 5138,
    "name": "witch_doctor_paralyzing_cask",
    "type": 0,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 2,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        700
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.35,
        0.35,
        0.35,
        0.35
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        20,
        18,
        16,
        14
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        75,
        100,
        125,
        150
      ],
      "manaCost": [
        110,
        120,
        130,
        140
      ],
      "modifierSupportValue": 0.5,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "hero_duration",
        "value": [
          1,
          1,
          1,
          1
        ]
      },
      {
        "key": "creep_duration",
        "value": [
          5,
          5,
          5,
          5
        ]
      },
      {
        "key": "hero_damage",
        "value": [
          50,
          50,
          50,
          50
        ]
      },
      {
        "key": "bounce_range",
        "value": [
          575,
          575,
          575,
          575
        ]
      },
      {
        "key": "bounces",
        "value": [
          3,
          5,
          7,
          9
        ]
      },
      {
        "key": "speed",
        "value": [
          1000
        ]
      },
      {
        "key": "bounce_delay",
        "value": [
          0.3
        ]
      },
      {
        "key": "bounces_tooltip",
        "value": [
          2,
          4,
          6,
          8
        ],
        "talent": "special_bonus_unique_witch_doctor_3"
      }
    ]
  },
  "witch_doctor_voodoo_restoration": {
    "id": 5139,
    "name": "witch_doctor_voodoo_restoration",
    "type": 0,
    "behavior": 1049092,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        35,
        40,
        45,
        50
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "mana_per_second",
        "value": [
          8,
          12,
          16,
          20
        ]
      },
      {
        "key": "radius",
        "value": [
          500
        ]
      },
      {
        "key": "heal",
        "value": [
          16,
          24,
          32,
          40
        ],
        "talent": "special_bonus_unique_witch_doctor_2"
      },
      {
        "key": "heal_interval",
        "value": [
          0.33,
          0.33,
          0.33,
          0.33
        ]
      }
    ]
  },
  "witch_doctor_maledict": {
    "id": 5140,
    "name": "witch_doctor_maledict",
    "type": 0,
    "behavior": 33554480,
    "targetTeam": 0,
    "targetType": 64,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        575
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.35,
        0.35,
        0.35,
        0.35
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        50,
        40,
        30,
        20
      ],
      "duration": [
        12
      ],
      "sharedCooldown": "0",
      "damage": [
        7,
        14,
        21,
        28
      ],
      "manaCost": [
        105,
        110,
        115,
        120
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          180
        ]
      },
      {
        "key": "duration_tooltip",
        "value": [
          12
        ],
        "talent": "special_bonus_unique_witch_doctor_4"
      },
      {
        "key": "bonus_damage",
        "value": [
          16,
          24,
          32,
          40
        ]
      },
      {
        "key": "bonus_damage_threshold",
        "value": [
          100
        ]
      },
      {
        "key": "ticks",
        "value": [
          3
        ]
      }
    ]
  },
  "witch_doctor_death_ward": {
    "id": 5141,
    "name": "witch_doctor_death_ward",
    "type": 1,
    "behavior": 144,
    "targetTeam": 0,
    "targetType": 64,
    "targetFlag": 1684,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 2,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        600
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.35,
        0.35,
        0.35
      ],
      "channelTime": [
        8,
        8,
        8
      ],
      "coolDown": [
        80
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        200,
        200,
        200
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "damage",
        "value": [
          60,
          105,
          150
        ],
        "talent": "special_bonus_unique_witch_doctor_5"
      },
      {
        "key": "bounces",
        "value": [
          0,
          0,
          0
        ]
      },
      {
        "key": "bounces_scepter",
        "value": [
          4,
          4,
          4
        ]
      },
      {
        "key": "bounce_radius",
        "value": [
          650,
          650,
          650
        ]
      }
    ]
  },
  "riki_smoke_screen": {
    "id": 5142,
    "name": "riki_smoke_screen",
    "type": 0,
    "behavior": 33554480,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        550
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.2
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        17,
        15,
        13,
        11
      ],
      "duration": [
        6
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        90
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          325
        ]
      },
      {
        "key": "miss_rate",
        "value": [
          40,
          50,
          60,
          70
        ]
      },
      {
        "key": "movement_speed_reduction",
        "value": [
          10,
          15,
          20,
          25
        ]
      },
      {
        "key": "turn_reduction",
        "value": [
          0
        ]
      },
      {
        "key": "duration",
        "value": [
          6
        ]
      }
    ]
  },
  "riki_blink_strike": {
    "id": 5143,
    "name": "riki_blink_strike",
    "type": 0,
    "behavior": 33685512,
    "targetTeam": 8,
    "targetType": 32,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        500,
        600,
        700,
        800
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        16,
        12,
        8,
        4
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        50
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "tooltip_range",
        "value": [
          500,
          600,
          700,
          800
        ],
        "talent": "special_bonus_unique_riki_3"
      },
      {
        "key": "bonus_damage",
        "value": [
          100
        ]
      }
    ]
  },
  "riki_permanent_invisibility": {
    "id": 5144,
    "name": "riki_permanent_invisibility",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 2,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "damage_multiplier",
        "value": [
          0.4,
          0.6,
          0.8,
          1
        ],
        "talent": "special_bonus_unique_riki_1"
      },
      {
        "key": "backstab_angle",
        "value": [
          105,
          105,
          105,
          105
        ]
      },
      {
        "key": "fade_time",
        "value": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "key": "fade_delay",
        "value": [
          7.5,
          6,
          4.5,
          3
        ]
      }
    ]
  },
  "riki_tricks_of_the_trade": {
    "id": 5145,
    "name": "riki_tricks_of_the_trade",
    "type": 1,
    "behavior": 8585348,
    "targetTeam": 1,
    "targetType": 64,
    "targetFlag": 1024,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        1000
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3
      ],
      "channelTime": [
        4,
        5,
        6
      ],
      "coolDown": [
        50,
        45,
        40
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        75
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "range",
        "value": [
          500
        ],
        "talent": "special_bonus_unique_riki_4"
      },
      {
        "key": "attack_rate",
        "value": [
          0.6,
          0.55,
          0.5
        ]
      },
      {
        "key": "duration_tooltip",
        "value": [
          4,
          5,
          6
        ]
      },
      {
        "key": "scepter_bonus",
        "value": [
          4
        ]
      }
    ]
  },
  "enigma_malefice": {
    "id": 5146,
    "name": "enigma_malefice",
    "type": 0,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        600
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        18,
        17,
        16,
        15
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100,
        120,
        140,
        160
      ],
      "modifierSupportValue": 0.33,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "tick_rate",
        "value": [
          2,
          2,
          2,
          2
        ]
      },
      {
        "key": "stun_duration",
        "value": [
          0.4,
          0.6,
          0.8,
          1
        ]
      },
      {
        "key": "damage",
        "value": [
          30,
          50,
          70,
          90
        ]
      },
      {
        "key": "duration",
        "value": [
          4,
          4,
          4,
          4
        ]
      },
      {
        "key": "tooltip_stuns",
        "value": [
          3,
          3,
          3,
          3
        ],
        "talent": "special_bonus_unique_enigma_2",
        "talentField": "value2"
      }
    ]
  },
  "enigma_demonic_conversion": {
    "id": 5147,
    "name": "enigma_demonic_conversion",
    "type": 0,
    "behavior": 8388616,
    "targetTeam": 8,
    "targetType": 32,
    "targetFlag": 1024,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        700
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        35,
        35,
        35,
        35
      ],
      "duration": [
        35,
        35,
        35,
        35
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        140,
        150,
        160,
        170
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "spawn_count",
        "value": [
          3,
          3,
          3,
          3
        ],
        "talent": "special_bonus_unique_enigma"
      },
      {
        "key": "split_attack_count",
        "value": [
          6,
          6,
          6,
          6
        ]
      },
      {
        "key": "eidolon_hp_tooltip",
        "value": [
          180,
          200,
          220,
          240
        ]
      },
      {
        "key": "life_extension",
        "value": [
          2,
          2,
          2,
          2
        ]
      },
      {
        "key": "eidolon_dmg_tooltip",
        "value": [
          20,
          28,
          38,
          47
        ],
        "talent": "special_bonus_unique_enigma_3"
      },
      {
        "key": "duration_tooltip",
        "value": [
          35
        ]
      }
    ]
  },
  "enigma_midnight_pulse": {
    "id": 5148,
    "name": "enigma_midnight_pulse",
    "type": 0,
    "behavior": 33554480,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 1,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        700
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.1
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        50,
        45,
        40,
        35
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        75,
        95,
        115,
        135
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          550
        ]
      },
      {
        "key": "damage_percent",
        "value": [
          3.75,
          4.25,
          4.75,
          5.25
        ]
      },
      {
        "key": "duration",
        "value": [
          9,
          10,
          11,
          12
        ]
      }
    ]
  },
  "enigma_black_hole": {
    "id": 5149,
    "name": "enigma_black_hole",
    "type": 1,
    "behavior": 176,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 1,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        275
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        4,
        4,
        4
      ],
      "coolDown": [
        200,
        180,
        160
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        275,
        325,
        375
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "far_damage",
        "value": [
          50,
          100,
          150
        ]
      },
      {
        "key": "far_radius",
        "value": [
          420
        ]
      },
      {
        "key": "pull_radius",
        "value": [
          420
        ]
      },
      {
        "key": "pull_speed",
        "value": [
          30
        ]
      },
      {
        "key": "near_radius",
        "value": [
          200
        ]
      },
      {
        "key": "near_damage",
        "value": [
          50,
          100,
          150
        ]
      },
      {
        "key": "tick_rate",
        "value": [
          0.1,
          0.1,
          0.1
        ]
      },
      {
        "key": "duration",
        "value": [
          4,
          4,
          4
        ]
      },
      {
        "key": "vision_radius",
        "value": [
          800,
          800,
          800
        ]
      },
      {
        "key": "pull_rotate_speed",
        "value": [
          0.25
        ]
      },
      {
        "key": "animation_rate",
        "value": [
          0.2
        ]
      }
    ]
  },
  "tinker_laser": {
    "id": 5150,
    "name": "tinker_laser",
    "type": 0,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 1,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        650
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.4
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        20,
        18,
        16,
        14
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        110,
        130,
        150,
        170
      ],
      "modifierSupportValue": 0.3,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "miss_rate",
        "value": [
          100,
          100,
          100,
          100
        ]
      },
      {
        "key": "duration_hero",
        "value": [
          3,
          3.5,
          4,
          4.5
        ]
      },
      {
        "key": "duration_creep",
        "value": [
          6,
          6,
          6,
          6
        ]
      },
      {
        "key": "laser_damage",
        "value": [
          80,
          160,
          240,
          320
        ],
        "talent": "special_bonus_unique_tinker"
      },
      {
        "key": "cast_range_tooltip",
        "value": [
          650
        ]
      },
      {
        "key": "scepter_bounce_range",
        "value": [
          400
        ]
      }
    ]
  },
  "tinker_heat_seeking_missile": {
    "id": 5151,
    "name": "tinker_heat_seeking_missile",
    "type": 0,
    "behavior": 4,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        25,
        25,
        25,
        25
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        80,
        100,
        120,
        140
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "damage",
        "value": [
          125,
          200,
          275,
          350
        ]
      },
      {
        "key": "radius",
        "value": [
          2500,
          2500,
          2500,
          2500
        ]
      },
      {
        "key": "targets",
        "value": [
          2,
          2,
          2,
          2
        ]
      },
      {
        "key": "speed",
        "value": [
          700
        ]
      },
      {
        "key": "targets_scepter",
        "value": [
          4,
          4,
          4,
          4
        ]
      }
    ]
  },
  "tinker_march_of_the_machines": {
    "id": 5152,
    "name": "tinker_march_of_the_machines",
    "type": 0,
    "behavior": 48,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        300
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.53,
        0.53,
        0.53,
        0.53
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        35,
        35,
        35,
        35
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        16,
        24,
        32,
        40
      ],
      "manaCost": [
        145,
        150,
        165,
        190
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          900
        ]
      },
      {
        "key": "collision_radius",
        "value": [
          50,
          50,
          50,
          50
        ]
      },
      {
        "key": "splash_radius",
        "value": [
          150,
          150,
          150,
          150
        ]
      },
      {
        "key": "duration",
        "value": [
          6
        ]
      },
      {
        "key": "speed",
        "value": [
          400,
          400,
          400,
          400
        ]
      },
      {
        "key": "machines_per_sec",
        "value": [
          24
        ]
      },
      {
        "key": "distance",
        "value": [
          1800
        ]
      },
      {
        "key": "distance_scepter",
        "value": [
          1800
        ]
      }
    ]
  },
  "tinker_rearm": {
    "id": 5153,
    "name": "tinker_rearm",
    "type": 1,
    "behavior": 132,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.53,
        0.53,
        0.53,
        0.53
      ],
      "channelTime": [
        3,
        1.5,
        0.75
      ],
      "coolDown": [
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100,
        200,
        300
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "channel_tooltip",
        "value": [
          3,
          1.5,
          0.75
        ]
      }
    ]
  },
  "sniper_shrapnel": {
    "id": 5154,
    "name": "sniper_shrapnel",
    "type": 0,
    "behavior": 33554480,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1800
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        50
      ],
      "modifierSupportValue": 0.25,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "slow_movement_speed",
        "value": [
          -15,
          -20,
          -25,
          -30
        ]
      },
      {
        "key": "radius",
        "value": [
          450
        ]
      },
      {
        "key": "shrapnel_damage",
        "value": [
          15,
          35,
          55,
          75
        ],
        "talent": "special_bonus_unique_sniper_1"
      },
      {
        "key": "duration",
        "value": [
          10
        ]
      },
      {
        "key": "damage_delay",
        "value": [
          1.2
        ]
      },
      {
        "key": "slow_duration",
        "value": [
          2,
          2,
          2,
          2
        ]
      },
      {
        "key": "max_charges",
        "value": [
          3
        ],
        "talent": "special_bonus_unique_sniper_2"
      },
      {
        "key": "charge_restore_time",
        "value": [
          55
        ]
      }
    ]
  },
  "sniper_headshot": {
    "id": 5155,
    "name": "sniper_headshot",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 2,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        20,
        50,
        80,
        110
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "slow_duration",
        "value": [
          0.5
        ]
      },
      {
        "key": "proc_chance",
        "value": [
          40
        ]
      },
      {
        "key": "slow",
        "value": [
          -100
        ]
      }
    ]
  },
  "sniper_take_aim": {
    "id": 5156,
    "name": "sniper_take_aim",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "bonus_attack_range",
        "value": [
          100,
          200,
          300,
          400
        ]
      }
    ]
  },
  "sniper_assassinate": {
    "id": 5157,
    "name": "sniper_assassinate",
    "type": 1,
    "behavior": 16777224,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 24,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        3000
      ],
      "castRangeBuffer": 600,
      "castPoint": [
        2,
        2,
        2
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        20,
        15,
        10
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        320,
        485,
        650
      ],
      "manaCost": [
        175,
        225,
        275
      ],
      "modifierSupportValue": 0,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "projectile_speed",
        "value": [
          2500,
          2500,
          2500
        ]
      },
      {
        "key": "tooltip_range",
        "value": [
          3000
        ]
      },
      {
        "key": "total_cast_time_tooltip",
        "value": [
          2
        ],
        "talent": "special_bonus_unique_sniper_4"
      },
      {
        "key": "scepter_radius",
        "value": [
          400
        ]
      },
      {
        "key": "scepter_crit_bonus",
        "value": [
          280
        ]
      }
    ]
  },
  "necrolyte_death_pulse": {
    "id": 5158,
    "name": "necrolyte_death_pulse",
    "type": 0,
    "behavior": 4,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        8,
        7,
        6,
        5
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        100,
        140,
        180,
        220
      ],
      "manaCost": [
        100,
        130,
        160,
        190
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "area_of_effect",
        "value": [
          475
        ]
      },
      {
        "key": "heal",
        "value": [
          60,
          80,
          100,
          120
        ],
        "talent": "special_bonus_unique_necrophos_4"
      },
      {
        "key": "projectile_speed",
        "value": [
          400
        ]
      },
      {
        "key": "health_regen",
        "value": [
          2,
          3,
          4,
          5
        ]
      },
      {
        "key": "mana_regen",
        "value": [
          2.25,
          2.5,
          2.75,
          3
        ]
      },
      {
        "key": "regen_duration",
        "value": [
          7
        ]
      },
      {
        "key": "hero_multiplier",
        "value": [
          6
        ]
      }
    ]
  },
  "necrolyte_heartstopper_aura": {
    "id": 5159,
    "name": "necrolyte_heartstopper_aura",
    "type": 0,
    "behavior": 16386,
    "targetTeam": 2,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        700
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "aura_radius",
        "value": [
          700
        ]
      },
      {
        "key": "aura_damage",
        "value": [
          0.5,
          1.1,
          1.7,
          2.3
        ],
        "talent": "special_bonus_unique_necrophos_2"
      }
    ]
  },
  "necrolyte_sadist": {
    "id": 5160,
    "name": "necrolyte_sadist",
    "type": 0,
    "behavior": 2052,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        28,
        24,
        20,
        16
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        50
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          3,
          3.5,
          4,
          4.5
        ]
      },
      {
        "key": "heal_bonus",
        "value": [
          75
        ]
      },
      {
        "key": "movement_speed",
        "value": [
          6,
          12,
          18,
          24
        ],
        "talent": "special_bonus_unique_necrophos_3"
      },
      {
        "key": "slow_aoe",
        "value": [
          750
        ]
      },
      {
        "key": "bonus_damage",
        "value": [
          -40
        ]
      }
    ]
  },
  "necrolyte_reapers_scythe": {
    "id": 5161,
    "name": "necrolyte_reapers_scythe",
    "type": 1,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 64,
    "targetFlag": 16,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        600
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.55
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        120
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        200,
        350,
        500
      ],
      "modifierSupportValue": 0.1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "damage_per_health",
        "value": [
          0.6,
          0.75,
          0.9
        ]
      },
      {
        "key": "stun_duration",
        "value": [
          1.5,
          1.5,
          1.5
        ]
      },
      {
        "key": "cooldown_scepter",
        "value": [
          60,
          50,
          40
        ]
      },
      {
        "key": "respawn_constant",
        "value": [
          15,
          30,
          45
        ]
      }
    ]
  },
  "warlock_fatal_bonds": {
    "id": 5162,
    "name": "warlock_fatal_bonds",
    "type": 0,
    "behavior": 33554440,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1000
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.2
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        24,
        22,
        20,
        18
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        140
      ],
      "modifierSupportValue": 0,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "count",
        "value": [
          3,
          4,
          5,
          6
        ]
      },
      {
        "key": "damage_share_percentage",
        "value": [
          25
        ],
        "talent": "special_bonus_unique_warlock_5"
      },
      {
        "key": "duration",
        "value": [
          25
        ]
      },
      {
        "key": "search_aoe",
        "value": [
          700
        ]
      }
    ]
  },
  "warlock_shadow_word": {
    "id": 5163,
    "name": "warlock_shadow_word",
    "type": 0,
    "behavior": 8,
    "targetTeam": 4,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        450,
        550,
        650,
        750
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.5,
        0.5,
        0.5,
        0.5
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        16
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        15,
        25,
        35,
        45
      ],
      "manaCost": [
        120,
        130,
        140,
        150
      ],
      "modifierSupportValue": 0,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          12
        ]
      },
      {
        "key": "tick_interval",
        "value": [
          1
        ]
      },
      {
        "key": "range_tooltip",
        "value": [
          450,
          550,
          650,
          750
        ]
      }
    ]
  },
  "warlock_upheaval": {
    "id": 5164,
    "name": "warlock_upheaval",
    "type": 0,
    "behavior": 176,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1200
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.5,
        0.5,
        0.5,
        0.5
      ],
      "channelTime": [
        16
      ],
      "coolDown": [
        50,
        46,
        42,
        38
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100,
        110,
        120,
        130
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "aoe",
        "value": [
          650,
          650,
          650,
          650
        ]
      },
      {
        "key": "slow_rate_duration",
        "value": [
          12.5,
          6.5,
          4.5,
          3.5
        ]
      },
      {
        "key": "duration",
        "value": [
          3
        ]
      },
      {
        "key": "max_slow",
        "value": [
          84
        ]
      }
    ]
  },
  "warlock_rain_of_chaos": {
    "id": 5165,
    "name": "warlock_rain_of_chaos",
    "type": 1,
    "behavior": 48,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 2,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        1200
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.5,
        0.5,
        0.5
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        170
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        250,
        375,
        500
      ],
      "modifierSupportValue": 0.5,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "golem_duration",
        "value": [
          60,
          60,
          60
        ]
      },
      {
        "key": "stun_duration",
        "value": [
          1
        ]
      },
      {
        "key": "aoe",
        "value": [
          600
        ]
      },
      {
        "key": "golem_hp_tooltip",
        "value": [
          1000,
          2000,
          3000
        ]
      },
      {
        "key": "golem_dmg_tooltip",
        "value": [
          75,
          125,
          175
        ]
      },
      {
        "key": "golem_armor_tooltip",
        "value": [
          6,
          9,
          12
        ],
        "talent": "special_bonus_unique_warlock_2"
      },
      {
        "key": "golem_regen_tooltip",
        "value": [
          25,
          50,
          75
        ]
      },
      {
        "key": "number_of_golems_scepter",
        "value": [
          2
        ]
      },
      {
        "key": "golem_hp_tooltip_scepter",
        "value": [
          750,
          1500,
          2250
        ]
      },
      {
        "key": "golem_dmg_tooltip_scepter",
        "value": [
          56,
          94,
          131
        ]
      },
      {
        "key": "hp_dmg_reduction_scepter",
        "value": [
          25
        ]
      },
      {
        "key": "bounty_reduction_scepter",
        "value": [
          50
        ]
      }
    ]
  },
  "beastmaster_wild_axes": {
    "id": 5168,
    "name": "beastmaster_wild_axes",
    "type": 0,
    "behavior": 16,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 2,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1500
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.4
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        8
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        80,
        85,
        90,
        95
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          175
        ]
      },
      {
        "key": "spread",
        "value": [
          450
        ]
      },
      {
        "key": "range",
        "value": [
          1500
        ]
      },
      {
        "key": "axe_damage",
        "value": [
          30,
          60,
          90,
          120
        ],
        "talent": "special_bonus_unique_beastmaster"
      },
      {
        "key": "duration",
        "value": [
          10
        ]
      },
      {
        "key": "damage_amp",
        "value": [
          6,
          8,
          10,
          12
        ]
      }
    ]
  },
  "beastmaster_call_of_the_wild": {
    "id": 5169,
    "name": "beastmaster_call_of_the_wild",
    "type": 0,
    "behavior": 4,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        60
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        50,
        60,
        70,
        80
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          60,
          60,
          60,
          60
        ]
      },
      {
        "key": "boar_hp_tooltip",
        "value": [
          200,
          300,
          400,
          500
        ]
      },
      {
        "key": "boar_damage_tooltip",
        "value": [
          16,
          24,
          32,
          40
        ],
        "talent": "special_bonus_unique_beastmaster_2"
      },
      {
        "key": "boar_moveslow_tooltip",
        "value": [
          10,
          20,
          30,
          40
        ]
      },
      {
        "key": "boar_poison_duration_tooltip",
        "value": [
          3
        ]
      }
    ]
  },
  "beastmaster_inner_beast": {
    "id": 5172,
    "name": "beastmaster_inner_beast",
    "type": 0,
    "behavior": 2,
    "targetTeam": 1,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          900
        ]
      },
      {
        "key": "bonus_attack_speed",
        "value": [
          15,
          25,
          35,
          45
        ],
        "talent": "special_bonus_unique_beastmaster_4"
      }
    ]
  },
  "beastmaster_primal_roar": {
    "id": 5177,
    "name": "beastmaster_primal_roar",
    "type": 1,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 16,
    "spellImmunityType": 1,
    "spellDispellableType": 2,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        600
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.5,
        0.5,
        0.5
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        90,
        80,
        70
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        150,
        175,
        200
      ],
      "modifierSupportValue": 0.6,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          3,
          3.5,
          4
        ]
      },
      {
        "key": "damage",
        "value": [
          150,
          225,
          300
        ]
      },
      {
        "key": "side_damage",
        "value": [
          150,
          225,
          300
        ]
      },
      {
        "key": "damage_radius",
        "value": [
          300
        ]
      },
      {
        "key": "slow_movement_speed_pct",
        "value": [
          -50,
          -50,
          -50
        ]
      },
      {
        "key": "slow_attack_speed_pct",
        "value": [
          -50,
          -50,
          -50
        ]
      },
      {
        "key": "push_distance",
        "value": [
          300
        ]
      },
      {
        "key": "push_duration",
        "value": [
          0.6
        ]
      },
      {
        "key": "slow_duration",
        "value": [
          2,
          3,
          4
        ]
      },
      {
        "key": "cast_range_scepter",
        "value": [
          950,
          950,
          950
        ]
      },
      {
        "key": "cooldown_scepter",
        "value": [
          45,
          45,
          45
        ]
      },
      {
        "key": "movement_speed",
        "value": [
          30
        ]
      },
      {
        "key": "movement_speed_duration",
        "value": [
          3
        ]
      }
    ]
  },
  "queenofpain_shadow_strike": {
    "id": 5173,
    "name": "queenofpain_shadow_strike",
    "type": 0,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        450,
        500,
        550,
        600
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.4
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        16,
        12,
        8,
        4
      ],
      "duration": [
        15,
        15,
        15,
        15
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        110
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "strike_damage",
        "value": [
          50,
          75,
          100,
          125
        ]
      },
      {
        "key": "duration_damage",
        "value": [
          30,
          45,
          60,
          75
        ]
      },
      {
        "key": "movement_slow",
        "value": [
          -20,
          -30,
          -40,
          -50
        ]
      },
      {
        "key": "projectile_speed",
        "value": [
          900
        ]
      },
      {
        "key": "cast_range_tooltip",
        "value": [
          450,
          500,
          550,
          600
        ]
      },
      {
        "key": "duration_tooltip",
        "value": [
          15
        ]
      }
    ]
  },
  "queenofpain_blink": {
    "id": 5174,
    "name": "queenofpain_blink",
    "type": 0,
    "behavior": 131088,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.33,
        0.33,
        0.33,
        0.33
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        15,
        12,
        9,
        6
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        60,
        60,
        60,
        60
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "blink_range",
        "value": [
          1300
        ]
      },
      {
        "key": "min_blink_range",
        "value": [
          200
        ]
      }
    ]
  },
  "queenofpain_scream_of_pain": {
    "id": 5175,
    "name": "queenofpain_scream_of_pain",
    "type": 0,
    "behavior": 4,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        7,
        7,
        7,
        7
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        75,
        150,
        225,
        300
      ],
      "manaCost": [
        110,
        120,
        130,
        140
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "area_of_effect",
        "value": [
          475
        ]
      },
      {
        "key": "projectile_speed",
        "value": [
          900
        ]
      }
    ]
  },
  "queenofpain_sonic_wave": {
    "id": 5176,
    "name": "queenofpain_sonic_wave",
    "type": 1,
    "behavior": 1040,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 1,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        700
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.452,
        0.452,
        0.452
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        135,
        135,
        135
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        250,
        360,
        500
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "starting_aoe",
        "value": [
          100
        ]
      },
      {
        "key": "distance",
        "value": [
          900
        ]
      },
      {
        "key": "final_aoe",
        "value": [
          450
        ]
      },
      {
        "key": "speed",
        "value": [
          900
        ]
      },
      {
        "key": "damage",
        "value": [
          320,
          410,
          500
        ]
      },
      {
        "key": "cooldown_scepter",
        "value": [
          40
        ]
      },
      {
        "key": "damage_scepter",
        "value": [
          370,
          480,
          590
        ]
      }
    ]
  },
  "venomancer_venomous_gale": {
    "id": 5178,
    "name": "venomancer_venomous_gale",
    "type": 0,
    "behavior": 48,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        800
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        21,
        20,
        19,
        18
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        125
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          15,
          15,
          15,
          15
        ]
      },
      {
        "key": "strike_damage",
        "value": [
          25,
          50,
          75,
          100
        ]
      },
      {
        "key": "tick_damage",
        "value": [
          10,
          40,
          70,
          100
        ]
      },
      {
        "key": "tick_interval",
        "value": [
          3,
          3,
          3,
          3
        ]
      },
      {
        "key": "movement_slow",
        "value": [
          -50,
          -50,
          -50,
          -50
        ]
      },
      {
        "key": "radius",
        "value": [
          125
        ]
      },
      {
        "key": "speed",
        "value": [
          1200,
          1200,
          1200,
          1200
        ]
      }
    ]
  },
  "venomancer_poison_sting": {
    "id": 5179,
    "name": "venomancer_poison_sting",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          6,
          9,
          12,
          15
        ]
      },
      {
        "key": "damage",
        "value": [
          6,
          14,
          22,
          30
        ]
      },
      {
        "key": "movement_speed",
        "value": [
          -11,
          -12,
          -13,
          -14
        ],
        "talent": "special_bonus_unique_venomancer_2"
      }
    ]
  },
  "venomancer_plague_ward": {
    "id": 5180,
    "name": "venomancer_plague_ward",
    "type": 0,
    "behavior": 16,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 2,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        850
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        5
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        20,
        20,
        20,
        20
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          40
        ]
      },
      {
        "key": "ward_hp_tooltip",
        "value": [
          75,
          200,
          325,
          450
        ],
        "talent": "special_bonus_unique_venomancer"
      },
      {
        "key": "ward_damage_tooltip",
        "value": [
          13,
          22,
          31,
          40
        ],
        "talent": "special_bonus_unique_venomancer"
      },
      {
        "key": "ward_hp",
        "value": [
          150,
          400,
          650,
          900
        ]
      },
      {
        "key": "ward_damage",
        "value": [
          26,
          44,
          62,
          80
        ]
      }
    ]
  },
  "venomancer_poison_nova": {
    "id": 5181,
    "name": "venomancer_poison_nova",
    "type": 1,
    "behavior": 4,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        140,
        120,
        100
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        200,
        300,
        400
      ],
      "modifierSupportValue": 0,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          830
        ],
        "talent": "special_bonus_unique_venomancer_6"
      },
      {
        "key": "start_radius",
        "value": [
          255,
          255,
          255
        ]
      },
      {
        "key": "duration",
        "value": [
          18
        ],
        "talent": "special_bonus_unique_venomancer_4"
      },
      {
        "key": "damage",
        "value": [
          30,
          55,
          80
        ]
      },
      {
        "key": "cooldown_scepter",
        "value": [
          140,
          120,
          60
        ]
      },
      {
        "key": "duration_scepter",
        "value": [
          18
        ]
      },
      {
        "key": "damage_scepter",
        "value": [
          60,
          85,
          110
        ]
      },
      {
        "key": "speed",
        "value": [
          500
        ]
      }
    ]
  },
  "faceless_void_time_walk": {
    "id": 5182,
    "name": "faceless_void_time_walk",
    "type": 0,
    "behavior": 132112,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        24,
        18,
        12,
        6
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        40
      ],
      "modifierSupportValue": 0.25,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "speed",
        "value": [
          3000
        ]
      },
      {
        "key": "range",
        "value": [
          675
        ],
        "talent": "special_bonus_unique_faceless_void"
      },
      {
        "key": "backtrack_duration",
        "value": [
          2
        ]
      },
      {
        "key": "radius",
        "value": [
          300
        ]
      }
    ]
  },
  "faceless_void_time_lock": {
    "id": 5184,
    "name": "faceless_void_time_lock",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 2,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 25
    },
    "special": [
      {
        "key": "duration",
        "value": [
          1
        ]
      },
      {
        "key": "duration_creep",
        "value": [
          2
        ]
      },
      {
        "key": "chance_pct",
        "value": [
          10,
          15,
          20,
          25
        ]
      },
      {
        "key": "bonus_damage",
        "value": [
          50,
          75,
          100,
          125
        ],
        "talent": "special_bonus_unique_faceless_void_3"
      }
    ]
  },
  "faceless_void_time_dilation": {
    "id": 5691,
    "name": "faceless_void_time_dilation",
    "type": 0,
    "behavior": 4,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.1
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        40,
        34,
        28,
        22
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        75
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          725
        ]
      },
      {
        "key": "duration",
        "value": [
          6,
          8,
          10,
          12
        ]
      },
      {
        "key": "slow",
        "value": [
          14
        ]
      }
    ]
  },
  "faceless_void_chronosphere": {
    "id": 5185,
    "name": "faceless_void_chronosphere",
    "type": 1,
    "behavior": 48,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        600
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.35,
        0.35,
        0.35
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        140,
        130,
        120
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        150,
        225,
        300
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 50
    },
    "special": [
      {
        "key": "radius",
        "value": [
          425
        ],
        "talent": "special_bonus_unique_faceless_void_2"
      },
      {
        "key": "duration",
        "value": [
          4,
          4.5,
          5
        ]
      },
      {
        "key": "duration_scepter",
        "value": [
          4,
          4.5,
          5
        ]
      },
      {
        "key": "cooldown_scepter",
        "value": [
          60
        ]
      },
      {
        "key": "vision_radius",
        "value": [
          475
        ]
      },
      {
        "key": "bonus_attack_speed",
        "value": [
          0
        ]
      }
    ]
  },
  "pugna_nether_blast": {
    "id": 5186,
    "name": "pugna_nether_blast",
    "type": 0,
    "behavior": 33554480,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        400
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.2,
        0.2,
        0.2,
        0.2
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        5
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        85,
        105,
        125,
        145
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "structure_damage_mod",
        "value": [
          0.5
        ]
      },
      {
        "key": "delay",
        "value": [
          0.9,
          0.9,
          0.9,
          0.9
        ]
      },
      {
        "key": "radius",
        "value": [
          400,
          400,
          400,
          400
        ]
      },
      {
        "key": "blast_damage",
        "value": [
          100,
          175,
          250,
          325
        ],
        "talent": "special_bonus_unique_pugna_2"
      }
    ]
  },
  "pugna_decrepify": {
    "id": 5187,
    "name": "pugna_decrepify",
    "type": 0,
    "behavior": 8388616,
    "targetTeam": 8,
    "targetType": 32,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        700,
        700,
        700,
        700
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.2,
        0.2,
        0.2,
        0.2
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        15,
        12,
        9,
        6
      ],
      "duration": [
        3.5
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        60
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "bonus_spell_damage_pct_allies",
        "value": [
          -25
        ]
      },
      {
        "key": "bonus_movement_speed_allies",
        "value": [
          0
        ]
      },
      {
        "key": "bonus_spell_damage_pct",
        "value": [
          -30,
          -40,
          -50,
          -60
        ]
      },
      {
        "key": "bonus_movement_speed",
        "value": [
          -30,
          -40,
          -50,
          -60
        ]
      },
      {
        "key": "tooltip_duration",
        "value": [
          3.5
        ],
        "talent": "special_bonus_unique_pugna_5"
      }
    ]
  },
  "pugna_nether_ward": {
    "id": 5188,
    "name": "pugna_nether_ward",
    "type": 0,
    "behavior": 16,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        150
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.2,
        0.2,
        0.2,
        0.2
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        35,
        35,
        35,
        35
      ],
      "duration": [
        30
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        80,
        80,
        80,
        80
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          1600
        ]
      },
      {
        "key": "mana_multiplier",
        "value": [
          1.25,
          1.5,
          1.75,
          2
        ],
        "talent": "special_bonus_unique_pugna_3"
      },
      {
        "key": "mana_regen",
        "value": [
          -0.25,
          -0.5,
          -0.75,
          -1
        ]
      },
      {
        "key": "attacks_to_destroy_tooltip",
        "value": [
          4,
          4,
          4,
          4
        ],
        "talent": "special_bonus_unique_pugna_6"
      },
      {
        "key": "ward_duration_tooltip",
        "value": [
          30
        ]
      }
    ]
  },
  "pugna_life_drain": {
    "id": 5189,
    "name": "pugna_life_drain",
    "type": 1,
    "behavior": 33554568,
    "targetTeam": 4,
    "targetType": 65,
    "targetFlag": 20,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        700
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.2,
        0.2,
        0.2
      ],
      "channelTime": [
        10
      ],
      "coolDown": [
        22,
        22,
        22
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        125,
        175,
        225
      ],
      "modifierSupportValue": 0,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "health_drain",
        "value": [
          150,
          225,
          300
        ]
      },
      {
        "key": "cast_range_tooltip",
        "value": [
          700
        ]
      },
      {
        "key": "duration_tooltip",
        "value": [
          10
        ]
      },
      {
        "key": "scepter_cooldown",
        "value": [
          0,
          0,
          0
        ]
      },
      {
        "key": "tick_rate",
        "value": [
          0.25,
          0.25,
          0.25
        ]
      },
      {
        "key": "drain_buffer",
        "value": [
          200
        ]
      }
    ]
  },
  "phantom_assassin_stifling_dagger": {
    "id": 5190,
    "name": "phantom_assassin_stifling_dagger",
    "type": 0,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 80,
    "targetFlag": 16,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 2,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        525,
        750,
        975,
        1200
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        6
      ],
      "duration": [
        1,
        2,
        3,
        4
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        30,
        25,
        20,
        15
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "move_slow",
        "value": [
          -50
        ]
      },
      {
        "key": "dagger_speed",
        "value": [
          1200
        ]
      },
      {
        "key": "duration",
        "value": [
          1.75,
          2.5,
          3.25,
          4
        ]
      },
      {
        "key": "base_damage",
        "value": [
          65
        ]
      },
      {
        "key": "attack_factor",
        "value": [
          -75,
          -60,
          -45,
          -30
        ]
      },
      {
        "key": "attack_factor_tooltip",
        "value": [
          25,
          40,
          55,
          70
        ]
      },
      {
        "key": "tooltip_range",
        "value": [
          525,
          750,
          975,
          1200
        ]
      }
    ]
  },
  "phantom_assassin_phantom_strike": {
    "id": 5191,
    "name": "phantom_assassin_phantom_strike",
    "type": 0,
    "behavior": 131080,
    "targetTeam": 8,
    "targetType": 32,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1000,
        1000,
        1000,
        1000
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        14,
        11,
        8,
        5
      ],
      "duration": [
        3,
        3,
        3,
        3
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        50,
        50,
        50,
        50
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "bonus_attack_speed",
        "value": [
          130
        ]
      },
      {
        "key": "bonus_max_attack_count",
        "value": [
          4
        ]
      },
      {
        "key": "tooltip_range",
        "value": [
          1000,
          1000,
          1000,
          1000
        ]
      }
    ]
  },
  "phantom_assassin_blur": {
    "id": 5192,
    "name": "phantom_assassin_blur",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "bonus_evasion",
        "value": [
          20,
          30,
          40,
          50
        ],
        "talent": "special_bonus_unique_phantom_assassin_3"
      },
      {
        "key": "transparency_fade",
        "value": [
          0
        ]
      },
      {
        "key": "radius",
        "value": [
          1600,
          1600,
          1600,
          1600
        ]
      }
    ]
  },
  "phantom_assassin_coup_de_grace": {
    "id": 5193,
    "name": "phantom_assassin_coup_de_grace",
    "type": 1,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "crit_chance",
        "value": [
          15
        ],
        "talent": "special_bonus_unique_phantom_assassin_2"
      },
      {
        "key": "crit_bonus",
        "value": [
          230,
          340,
          450
        ]
      }
    ]
  },
  "templar_assassin_refraction": {
    "id": 5194,
    "name": "templar_assassin_refraction",
    "type": 0,
    "behavior": 2052,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 2,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        17,
        17,
        17,
        17
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "instances",
        "value": [
          3,
          4,
          5,
          6
        ],
        "talent": "special_bonus_unique_templar_assassin"
      },
      {
        "key": "bonus_damage",
        "value": [
          20,
          40,
          60,
          80
        ]
      },
      {
        "key": "damage_threshold",
        "value": [
          5,
          5,
          5,
          5
        ]
      },
      {
        "key": "duration",
        "value": [
          17,
          17,
          17,
          17
        ]
      }
    ]
  },
  "templar_assassin_meld": {
    "id": 5195,
    "name": "templar_assassin_meld",
    "type": 0,
    "behavior": 8454148,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 2,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        6
      ],
      "duration": [
        10,
        10,
        10,
        10
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        50,
        50,
        50,
        50
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "bonus_damage",
        "value": [
          50,
          100,
          150,
          200
        ]
      },
      {
        "key": "bonus_armor",
        "value": [
          -2,
          -4,
          -6,
          -8
        ],
        "talent": "special_bonus_unique_templar_assassin_2"
      },
      {
        "key": "armor_reduction_duration_tooltip",
        "value": [
          10
        ]
      }
    ]
  },
  "templar_assassin_psi_blades": {
    "id": 5196,
    "name": "templar_assassin_psi_blades",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 1,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "bonus_attack_range",
        "value": [
          60,
          120,
          180,
          240
        ]
      },
      {
        "key": "attack_spill_range",
        "value": [
          590,
          630,
          670,
          710
        ]
      },
      {
        "key": "attack_spill_width",
        "value": [
          75
        ]
      }
    ]
  },
  "templar_assassin_psionic_trap": {
    "id": 5197,
    "name": "templar_assassin_psionic_trap",
    "type": 1,
    "behavior": 33554448,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        2000
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        11,
        8,
        5
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        15,
        15,
        15
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "max_traps",
        "value": [
          5,
          8,
          11
        ],
        "talent": "special_bonus_unique_templar_assassin_6"
      },
      {
        "key": "trap_fade_time",
        "value": [
          2,
          2,
          2
        ]
      },
      {
        "key": "movement_speed_min",
        "value": [
          30
        ]
      },
      {
        "key": "movement_speed_max",
        "value": [
          60
        ]
      },
      {
        "key": "trap_duration_tooltip",
        "value": [
          5
        ]
      },
      {
        "key": "trap_bonus_damage",
        "value": [
          250,
          300,
          350
        ],
        "talent": "special_bonus_unique_templar_assassin_3"
      },
      {
        "key": "trap_max_charge_duration",
        "value": [
          4
        ]
      }
    ]
  },
  "templar_assassin_trap": {
    "id": 5198,
    "name": "templar_assassin_trap",
    "type": 0,
    "behavior": 1050692,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 3,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0.5
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 100
    },
    "special": [
      {
        "key": "trap_radius",
        "value": [
          400
        ]
      },
      {
        "key": "trap_duration",
        "value": [
          5
        ]
      },
      {
        "key": "trap_bonus_damage",
        "value": [
          250,
          300,
          350
        ]
      },
      {
        "key": "movement_speed_min",
        "value": [
          30
        ]
      },
      {
        "key": "movement_speed_max",
        "value": [
          60
        ]
      },
      {
        "key": "trap_max_charge_duration",
        "value": [
          4
        ]
      }
    ]
  },
  "viper_poison_attack": {
    "id": 5218,
    "name": "viper_poison_attack",
    "type": 0,
    "behavior": 36872,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        600
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        6,
        4,
        2,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        40,
        35,
        30,
        25
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          3
        ]
      },
      {
        "key": "damage",
        "value": [
          0.25,
          0.5,
          0.75,
          1
        ]
      },
      {
        "key": "bonus_movement_speed",
        "value": [
          -25,
          -30,
          -35,
          -40
        ]
      },
      {
        "key": "bonus_attack_speed",
        "value": [
          -25,
          -30,
          -35,
          -40
        ]
      }
    ]
  },
  "viper_nethertoxin": {
    "id": 5219,
    "name": "viper_nethertoxin",
    "type": 0,
    "behavior": 48,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        900
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.2
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        5
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        75
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "damage",
        "value": [
          20,
          30,
          40,
          50
        ]
      },
      {
        "key": "radius",
        "value": [
          300
        ]
      },
      {
        "key": "magic_resistance",
        "value": [
          -10,
          -15,
          -20,
          -25
        ]
      },
      {
        "key": "duration",
        "value": [
          8
        ]
      },
      {
        "key": "projectile_speed",
        "value": [
          2000
        ]
      }
    ]
  },
  "viper_corrosive_skin": {
    "id": 5220,
    "name": "viper_corrosive_skin",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 10
    },
    "special": [
      {
        "key": "duration",
        "value": [
          4
        ]
      },
      {
        "key": "bonus_attack_speed",
        "value": [
          8,
          16,
          24,
          32
        ],
        "talent": "special_bonus_unique_viper_1"
      },
      {
        "key": "bonus_magic_resistance",
        "value": [
          10,
          15,
          20,
          25
        ],
        "talent": "special_bonus_unique_viper_1"
      },
      {
        "key": "damage",
        "value": [
          8,
          16,
          24,
          32
        ],
        "talent": "special_bonus_unique_viper_1"
      },
      {
        "key": "max_range_tooltip",
        "value": [
          1400
        ]
      }
    ]
  },
  "viper_viper_strike": {
    "id": 5221,
    "name": "viper_viper_strike",
    "type": 1,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 16,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        500
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        50,
        40,
        30
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        125,
        175,
        250
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          5
        ]
      },
      {
        "key": "damage",
        "value": [
          60,
          100,
          145
        ],
        "talent": "special_bonus_unique_viper_2"
      },
      {
        "key": "bonus_movement_speed",
        "value": [
          -40,
          -60,
          -80
        ]
      },
      {
        "key": "bonus_attack_speed",
        "value": [
          -40,
          -60,
          -80
        ]
      },
      {
        "key": "mana_cost_scepter",
        "value": [
          125,
          125,
          125
        ]
      },
      {
        "key": "cooldown_scepter",
        "value": [
          10
        ]
      },
      {
        "key": "cast_range_scepter",
        "value": [
          900
        ]
      },
      {
        "key": "projectile_speed",
        "value": [
          1200
        ]
      },
      {
        "key": "max_charges",
        "value": [
          2
        ]
      },
      {
        "key": "charge_restore_time",
        "value": [
          30
        ]
      }
    ]
  },
  "luna_lucent_beam": {
    "id": 5222,
    "name": "luna_lucent_beam",
    "type": 0,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 2,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        800
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.4
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        6,
        6,
        6,
        6
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        90,
        100,
        110,
        120
      ],
      "modifierSupportValue": 0.5,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "stun_duration",
        "value": [
          0.8
        ]
      },
      {
        "key": "beam_damage",
        "value": [
          75,
          150,
          225,
          300
        ],
        "talent": "special_bonus_unique_luna_1"
      }
    ]
  },
  "luna_moon_glaive": {
    "id": 5223,
    "name": "luna_moon_glaive",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "range",
        "value": [
          500
        ]
      },
      {
        "key": "bounces",
        "value": [
          1,
          2,
          3,
          6
        ]
      },
      {
        "key": "damage_reduction_percent",
        "value": [
          35
        ]
      }
    ]
  },
  "luna_lunar_blessing": {
    "id": 5224,
    "name": "luna_lunar_blessing",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          900,
          900,
          900,
          900
        ]
      },
      {
        "key": "bonus_damage",
        "value": [
          14,
          22,
          30,
          38
        ],
        "talent": "special_bonus_unique_luna_3"
      },
      {
        "key": "bonus_night_vision",
        "value": [
          250,
          500,
          750,
          1000
        ]
      }
    ]
  },
  "luna_eclipse": {
    "id": 5225,
    "name": "luna_eclipse",
    "type": 1,
    "behavior": 4,
    "targetTeam": 1,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.6,
        0.6,
        0.6
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        140
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        150,
        200,
        250
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "beams",
        "value": [
          5,
          8,
          11
        ]
      },
      {
        "key": "hit_count",
        "value": [
          5
        ]
      },
      {
        "key": "beam_interval",
        "value": [
          0.6,
          0.6,
          0.6
        ]
      },
      {
        "key": "beam_interval_scepter",
        "value": [
          0.3
        ]
      },
      {
        "key": "duration_tooltip",
        "value": [
          2.4,
          4.2,
          6
        ]
      },
      {
        "key": "radius",
        "value": [
          675,
          675,
          675
        ]
      },
      {
        "key": "beams_scepter",
        "value": [
          6,
          12,
          18
        ]
      },
      {
        "key": "hit_count_scepter",
        "value": [
          6,
          12,
          18
        ]
      },
      {
        "key": "duration_tooltip_scepter",
        "value": [
          1.8,
          3.6,
          5.4
        ]
      },
      {
        "key": "cast_range_tooltip_scepter",
        "value": [
          2500
        ]
      }
    ]
  },
  "dragon_knight_breathe_fire": {
    "id": 5226,
    "name": "dragon_knight_breathe_fire",
    "type": 0,
    "behavior": 1048,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 16,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        600
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.2
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        14,
        13,
        12,
        11
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        90,
        170,
        240,
        300
      ],
      "manaCost": [
        100,
        110,
        120,
        130
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "start_radius",
        "value": [
          150,
          150,
          150,
          150
        ]
      },
      {
        "key": "end_radius",
        "value": [
          250,
          250,
          250,
          250
        ]
      },
      {
        "key": "range",
        "value": [
          750
        ]
      },
      {
        "key": "speed",
        "value": [
          1050
        ]
      },
      {
        "key": "reduction",
        "value": [
          -25
        ],
        "talent": "special_bonus_unique_dragon_knight_3"
      },
      {
        "key": "duration",
        "value": [
          11
        ]
      }
    ]
  },
  "dragon_knight_dragon_tail": {
    "id": 5227,
    "name": "dragon_knight_dragon_tail",
    "type": 0,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 2,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        150
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        12,
        11,
        10,
        9
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        25,
        50,
        75,
        100
      ],
      "manaCost": [
        100,
        100,
        100,
        100
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "stun_duration",
        "value": [
          2.5,
          2.75,
          3,
          3.25
        ],
        "talent": "special_bonus_unique_dragon_knight_2"
      },
      {
        "key": "dragon_cast_range",
        "value": [
          400
        ]
      },
      {
        "key": "projectile_speed",
        "value": [
          1600
        ]
      }
    ]
  },
  "dragon_knight_dragon_blood": {
    "id": 5228,
    "name": "dragon_knight_dragon_blood",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "bonus_health_regen",
        "value": [
          4,
          6,
          8,
          10
        ],
        "talent": "special_bonus_unique_dragon_knight"
      },
      {
        "key": "bonus_armor",
        "value": [
          3,
          6,
          9,
          12
        ],
        "talent": "special_bonus_unique_dragon_knight"
      }
    ]
  },
  "dragon_knight_elder_dragon_form": {
    "id": 5229,
    "name": "dragon_knight_elder_dragon_form",
    "type": 1,
    "behavior": 4,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        115
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        50,
        50,
        50
      ],
      "modifierSupportValue": 0.35,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          60
        ]
      },
      {
        "key": "bonus_movement_speed",
        "value": [
          30
        ]
      },
      {
        "key": "bonus_attack_range",
        "value": [
          350
        ]
      },
      {
        "key": "bonus_attack_damage",
        "value": [
          0
        ]
      },
      {
        "key": "corrosive_breath_damage",
        "value": [
          20,
          20,
          20
        ]
      },
      {
        "key": "corrosive_breath_duration",
        "value": [
          5,
          5,
          5
        ]
      },
      {
        "key": "splash_radius",
        "value": [
          150,
          225,
          300
        ]
      },
      {
        "key": "splash_damage_percent",
        "value": [
          100,
          75,
          50
        ]
      },
      {
        "key": "frost_bonus_movement_speed",
        "value": [
          -30
        ]
      },
      {
        "key": "frost_bonus_attack_speed",
        "value": [
          -20
        ]
      },
      {
        "key": "frost_duration",
        "value": [
          3,
          3,
          3
        ]
      },
      {
        "key": "frost_aoe",
        "value": [
          300
        ]
      }
    ]
  },
  "dazzle_poison_touch": {
    "id": 5233,
    "name": "dazzle_poison_touch",
    "type": 0,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 2,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        600,
        700,
        800,
        900
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        27,
        24,
        21,
        18
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        80
      ],
      "modifierSupportValue": 0.35,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "start_radius",
        "value": [
          200,
          200,
          200,
          200
        ]
      },
      {
        "key": "end_radius",
        "value": [
          300,
          300,
          300,
          300
        ]
      },
      {
        "key": "end_distance",
        "value": [
          500,
          500,
          500,
          500
        ]
      },
      {
        "key": "targets",
        "value": [
          2,
          4,
          6,
          8
        ]
      },
      {
        "key": "damage",
        "value": [
          16,
          28,
          40,
          52
        ],
        "talent": "special_bonus_unique_dazzle_3"
      },
      {
        "key": "slow",
        "value": [
          -14,
          -16,
          -18,
          -20
        ]
      },
      {
        "key": "projectile_speed",
        "value": [
          1300
        ]
      },
      {
        "key": "duration",
        "value": [
          4,
          5,
          6,
          7
        ]
      },
      {
        "key": "range_tooltip",
        "value": [
          600,
          700,
          800,
          900
        ]
      }
    ]
  },
  "dazzle_shallow_grave": {
    "id": 5234,
    "name": "dazzle_shallow_grave",
    "type": 0,
    "behavior": 41943048,
    "targetTeam": 1,
    "targetType": 64,
    "targetFlag": 0,
    "spellImmunityType": 3,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        550,
        700,
        850,
        1000
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.4
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        60,
        45,
        30,
        15
      ],
      "duration": [
        5,
        5,
        5,
        5
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        150
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration_tooltip",
        "value": [
          5,
          5,
          5,
          5
        ]
      },
      {
        "key": "range_tooltip",
        "value": [
          550,
          700,
          850,
          1000
        ]
      },
      {
        "key": "scepter_radius",
        "value": [
          450
        ]
      }
    ]
  },
  "dazzle_shadow_wave": {
    "id": 5235,
    "name": "dazzle_shadow_wave",
    "type": 0,
    "behavior": 8388616,
    "targetTeam": 1,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 2,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        900
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        12,
        10,
        8,
        6
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        90,
        100,
        110,
        120
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "bounce_radius",
        "value": [
          475
        ]
      },
      {
        "key": "damage_radius",
        "value": [
          185
        ]
      },
      {
        "key": "max_targets",
        "value": [
          3,
          4,
          5,
          6
        ]
      },
      {
        "key": "tooltip_max_targets_inc_dazzle",
        "value": [
          4,
          5,
          6,
          7
        ]
      },
      {
        "key": "damage",
        "value": [
          80,
          100,
          120,
          140
        ],
        "talent": "special_bonus_unique_dazzle_2"
      }
    ]
  },
  "dazzle_weave": {
    "id": 5236,
    "name": "dazzle_weave",
    "type": 1,
    "behavior": 48,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        2000
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        40,
        40,
        40
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100,
        100,
        100
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          575,
          575,
          575
        ]
      },
      {
        "key": "vision",
        "value": [
          800
        ]
      },
      {
        "key": "armor_per_second",
        "value": [
          0.75,
          1,
          1.25
        ],
        "talent": "special_bonus_unique_dazzle_4"
      },
      {
        "key": "duration",
        "value": [
          24
        ]
      }
    ]
  },
  "rattletrap_battery_assault": {
    "id": 5237,
    "name": "rattletrap_battery_assault",
    "type": 0,
    "behavior": 33554436,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        32,
        28,
        24,
        20
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        20,
        45,
        70,
        95
      ],
      "manaCost": [
        100
      ],
      "modifierSupportValue": 0.2,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          275,
          275,
          275,
          275
        ]
      },
      {
        "key": "duration",
        "value": [
          10.5,
          10.5,
          10.5,
          10.5
        ]
      },
      {
        "key": "interval",
        "value": [
          0.7,
          0.7,
          0.7,
          0.7
        ],
        "talent": "special_bonus_unique_clockwerk"
      }
    ]
  },
  "rattletrap_power_cogs": {
    "id": 5238,
    "name": "rattletrap_power_cogs",
    "type": 0,
    "behavior": 4,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.2
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        15
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        80
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          5,
          6,
          7,
          8
        ]
      },
      {
        "key": "drain_amount",
        "value": [
          50,
          100,
          150,
          200
        ]
      },
      {
        "key": "attacks_to_destroy",
        "value": [
          2
        ]
      },
      {
        "key": "push_length",
        "value": [
          250
        ]
      },
      {
        "key": "push_duration",
        "value": [
          0.85
        ]
      },
      {
        "key": "cogs_radius",
        "value": [
          215
        ]
      },
      {
        "key": "trigger_distance",
        "value": [
          170
        ]
      },
      {
        "key": "extra_pull_buffer",
        "value": [
          -10
        ]
      }
    ]
  },
  "rattletrap_rocket_flare": {
    "id": 5239,
    "name": "rattletrap_rocket_flare",
    "type": 0,
    "behavior": 33554480,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        20,
        18,
        16,
        14
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        80,
        120,
        160,
        200
      ],
      "manaCost": [
        50
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          600
        ]
      },
      {
        "key": "duration",
        "value": [
          10,
          10,
          10,
          10
        ]
      },
      {
        "key": "speed",
        "value": [
          1750
        ]
      },
      {
        "key": "vision_radius",
        "value": [
          600
        ]
      }
    ]
  },
  "rattletrap_hookshot": {
    "id": 5240,
    "name": "rattletrap_hookshot",
    "type": 1,
    "behavior": 33554448,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 2,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        2000,
        2500,
        3000
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        70,
        55,
        40
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        150,
        150,
        150
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "latch_radius",
        "value": [
          125,
          125,
          125
        ]
      },
      {
        "key": "stun_radius",
        "value": [
          175,
          175,
          175
        ]
      },
      {
        "key": "duration",
        "value": [
          1,
          1.5,
          2
        ]
      },
      {
        "key": "speed",
        "value": [
          4000,
          5000,
          6000
        ]
      },
      {
        "key": "tooltip_range",
        "value": [
          2000,
          2500,
          3000
        ]
      },
      {
        "key": "damage",
        "value": [
          75,
          175,
          275
        ]
      },
      {
        "key": "cooldown_scepter",
        "value": [
          12,
          12,
          12
        ]
      }
    ]
  },
  "leshrac_split_earth": {
    "id": 5241,
    "name": "leshrac_split_earth",
    "type": 0,
    "behavior": 48,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 2,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        650
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.7,
        0.7,
        0.7,
        0.7
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        9,
        9,
        9,
        9
      ],
      "duration": [
        2,
        2,
        2,
        2
      ],
      "sharedCooldown": "0",
      "damage": [
        120,
        180,
        240,
        300
      ],
      "manaCost": [
        80,
        100,
        120,
        140
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "delay",
        "value": [
          0.35
        ]
      },
      {
        "key": "radius",
        "value": [
          150,
          175,
          200,
          225
        ]
      },
      {
        "key": "duration",
        "value": [
          2
        ]
      }
    ]
  },
  "leshrac_diabolic_edict": {
    "id": 5242,
    "name": "leshrac_diabolic_edict",
    "type": 0,
    "behavior": 4,
    "targetTeam": 2,
    "targetType": 69,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 2,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.5
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        22,
        22,
        22,
        22
      ],
      "duration": [
        10
      ],
      "sharedCooldown": "0",
      "damage": [
        9,
        18,
        27,
        36
      ],
      "manaCost": [
        95,
        120,
        135,
        155
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "num_explosions",
        "value": [
          40
        ],
        "talent": "special_bonus_unique_leshrac_1"
      },
      {
        "key": "radius",
        "value": [
          500
        ]
      },
      {
        "key": "tower_bonus",
        "value": [
          40
        ]
      },
      {
        "key": "duration_tooltip",
        "value": [
          10
        ]
      }
    ]
  },
  "leshrac_lightning_storm": {
    "id": 5243,
    "name": "leshrac_lightning_storm",
    "type": 0,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        650
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.4
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        4
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        80,
        120,
        160,
        200
      ],
      "manaCost": [
        80,
        100,
        120,
        140
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "jump_count",
        "value": [
          4,
          6,
          8,
          10
        ]
      },
      {
        "key": "radius",
        "value": [
          475
        ]
      },
      {
        "key": "jump_delay",
        "value": [
          0.25,
          0.25,
          0.25,
          0.25
        ]
      },
      {
        "key": "slow_movement_speed",
        "value": [
          -75
        ]
      },
      {
        "key": "slow_duration",
        "value": [
          0.4,
          0.6,
          0.8,
          1
        ],
        "talent": "special_bonus_unique_leshrac_2"
      },
      {
        "key": "interval_scepter",
        "value": [
          1.75
        ]
      },
      {
        "key": "radius_scepter",
        "value": [
          750
        ]
      }
    ]
  },
  "leshrac_pulse_nova": {
    "id": 5244,
    "name": "leshrac_pulse_nova",
    "type": 1,
    "behavior": 1049092,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        1,
        1,
        1,
        1
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        70,
        90,
        110
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "mana_cost_per_second",
        "value": [
          20,
          40,
          60
        ]
      },
      {
        "key": "radius",
        "value": [
          450
        ]
      },
      {
        "key": "damage",
        "value": [
          100,
          140,
          180
        ],
        "talent": "special_bonus_unique_leshrac_3"
      },
      {
        "key": "damage_scepter",
        "value": [
          160,
          190,
          220
        ],
        "talent": "special_bonus_unique_leshrac_3"
      }
    ]
  },
  "furion_sprout": {
    "id": 5245,
    "name": "furion_sprout",
    "type": 0,
    "behavior": 24,
    "targetTeam": 4,
    "targetType": 65,
    "targetFlag": 256,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        625,
        700,
        775,
        850
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.35
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        11,
        10,
        9,
        8
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        70,
        90,
        110,
        130
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "vision_range",
        "value": [
          500
        ]
      },
      {
        "key": "duration",
        "value": [
          3,
          4,
          5,
          6
        ]
      },
      {
        "key": "cast_range_tooltip",
        "value": [
          625,
          700,
          775,
          850
        ]
      }
    ]
  },
  "furion_teleportation": {
    "id": 5246,
    "name": "furion_teleportation",
    "type": 0,
    "behavior": 16908304,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        3,
        3,
        3,
        3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        50,
        40,
        30,
        20
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        50,
        50,
        50,
        50
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": []
  },
  "furion_force_of_nature": {
    "id": 5247,
    "name": "furion_force_of_nature",
    "type": 0,
    "behavior": 48,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        750
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.5,
        0.5,
        0.5,
        0.5
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        37,
        37,
        37,
        37
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        130,
        140,
        150,
        160
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "area_of_effect",
        "value": [
          150,
          225,
          300,
          375
        ]
      },
      {
        "key": "max_treants",
        "value": [
          2,
          3,
          4,
          5
        ],
        "talent": "special_bonus_unique_furion_2"
      },
      {
        "key": "duration",
        "value": [
          60,
          60,
          60,
          60
        ]
      },
      {
        "key": "treant_health_tooltip",
        "value": [
          550
        ]
      },
      {
        "key": "treant_min_dmg_tooltip",
        "value": [
          30
        ]
      },
      {
        "key": "treant_max_dmg_tooltip",
        "value": [
          34
        ]
      },
      {
        "key": "treant_hp_bonus",
        "value": [
          550
        ]
      },
      {
        "key": "treant_damage_bonus",
        "value": [
          36
        ]
      },
      {
        "key": "treant_large_hp_bonus",
        "value": [
          1650
        ]
      },
      {
        "key": "treant_large_damage_bonus",
        "value": [
          108
        ]
      }
    ]
  },
  "furion_wrath_of_nature": {
    "id": 5248,
    "name": "furion_wrath_of_nature",
    "type": 1,
    "behavior": 24,
    "targetTeam": 2,
    "targetType": 80,
    "targetFlag": 16,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.5,
        0.5,
        0.5
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        60
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        175,
        225,
        275
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "max_targets",
        "value": [
          16
        ]
      },
      {
        "key": "damage",
        "value": [
          110,
          140,
          170
        ]
      },
      {
        "key": "damage_percent_add",
        "value": [
          11
        ]
      },
      {
        "key": "jump_delay",
        "value": [
          0.25
        ]
      },
      {
        "key": "damage_scepter",
        "value": [
          135,
          170,
          205
        ]
      },
      {
        "key": "scepter_buffer",
        "value": [
          4
        ]
      },
      {
        "key": "buffer_tooltip_scepter",
        "value": [
          4
        ]
      }
    ]
  },
  "life_stealer_rage": {
    "id": 5249,
    "name": "life_stealer_rage",
    "type": 0,
    "behavior": 2052,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        16
      ],
      "duration": [
        3,
        4,
        5,
        6
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        75,
        75,
        75,
        75
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "attack_speed_bonus",
        "value": [
          40,
          50,
          60,
          70
        ]
      },
      {
        "key": "duration",
        "value": [
          3,
          4,
          5,
          6
        ],
        "talent": "special_bonus_unique_lifestealer"
      }
    ]
  },
  "life_stealer_feast": {
    "id": 5250,
    "name": "life_stealer_feast",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "hp_leech_percent",
        "value": [
          4.5,
          5.5,
          6.5,
          7.5
        ],
        "talent": "special_bonus_unique_lifestealer_3"
      }
    ]
  },
  "life_stealer_open_wounds": {
    "id": 5251,
    "name": "life_stealer_open_wounds",
    "type": 0,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        200,
        300,
        400,
        500
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.2
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        24,
        20,
        16,
        12
      ],
      "duration": [
        8,
        8,
        8,
        8
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        140
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "slow_steps",
        "value": [
          -70,
          -70,
          -60,
          -50,
          -30,
          -10,
          -10,
          -10
        ]
      },
      {
        "key": "heal_percent",
        "value": [
          50
        ],
        "talent": "special_bonus_unique_lifestealer_2"
      },
      {
        "key": "slow_tooltip",
        "value": [
          70
        ]
      },
      {
        "key": "duration",
        "value": [
          8
        ]
      },
      {
        "key": "tooltip_range",
        "value": [
          200,
          300,
          400,
          500
        ]
      }
    ]
  },
  "life_stealer_infest": {
    "id": 5252,
    "name": "life_stealer_infest",
    "type": 1,
    "behavior": 8388616,
    "targetTeam": 8,
    "targetType": 32,
    "targetFlag": 16,
    "spellImmunityType": 3,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        150
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.2
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        100,
        75,
        50
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        50,
        50,
        50
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          700,
          700,
          700
        ]
      },
      {
        "key": "damage",
        "value": [
          150,
          275,
          400
        ]
      },
      {
        "key": "infest_scepter_duration",
        "value": [
          8
        ]
      },
      {
        "key": "damage_increase_pct",
        "value": [
          50
        ]
      },
      {
        "key": "cast_range_scepter",
        "value": [
          500
        ]
      },
      {
        "key": "cooldown_scepter",
        "value": [
          25
        ]
      }
    ]
  },
  "life_stealer_assimilate": {
    "id": 5671,
    "name": "life_stealer_assimilate",
    "type": 0,
    "behavior": 9,
    "targetTeam": 1,
    "targetType": 64,
    "targetFlag": 1024,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 1,
    "fightRecapLevel": 1,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        150
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.2
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        50
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        50
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "damage",
        "value": [
          300
        ]
      },
      {
        "key": "radius",
        "value": [
          700,
          700,
          700
        ]
      },
      {
        "key": "order_lock_duration",
        "value": [
          2
        ]
      }
    ]
  },
  "life_stealer_assimilate_eject": {
    "id": 5675,
    "name": "life_stealer_assimilate_eject",
    "type": 0,
    "behavior": 2117,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 1,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "damage_tooltip",
        "value": [
          300
        ]
      },
      {
        "key": "radius_tooltip",
        "value": [
          700,
          700,
          700
        ]
      }
    ]
  },
  "life_stealer_consume": {
    "id": 5253,
    "name": "life_stealer_consume",
    "type": 1,
    "behavior": 264197,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": []
  },
  "life_stealer_control": {
    "id": 5655,
    "name": "life_stealer_control",
    "type": 0,
    "behavior": 264261,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 1,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": []
  },
  "dark_seer_vacuum": {
    "id": 5255,
    "name": "dark_seer_vacuum",
    "type": 0,
    "behavior": 48,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 2,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        450,
        500,
        550,
        600
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.4
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        60,
        50,
        40,
        30
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100,
        130,
        160,
        190
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          400,
          450,
          500,
          550
        ],
        "talent": "special_bonus_unique_dark_seer_2"
      },
      {
        "key": "duration",
        "value": [
          0.3,
          0.4,
          0.5,
          0.6
        ]
      },
      {
        "key": "damage",
        "value": [
          25,
          50,
          100,
          200
        ]
      },
      {
        "key": "radius_tree",
        "value": [
          275
        ]
      },
      {
        "key": "cast_range_tooltip",
        "value": [
          450,
          500,
          550,
          600
        ]
      }
    ]
  },
  "dark_seer_ion_shell": {
    "id": 5256,
    "name": "dark_seer_ion_shell",
    "type": 0,
    "behavior": 8388616,
    "targetTeam": 4,
    "targetType": 80,
    "targetFlag": 1024,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        600
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.4,
        0.4,
        0.4,
        0.4
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        9
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100,
        110,
        120,
        130
      ],
      "modifierSupportValue": 0,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          250
        ]
      },
      {
        "key": "damage_per_second",
        "value": [
          30,
          50,
          70,
          90
        ],
        "talent": "special_bonus_unique_dark_seer"
      },
      {
        "key": "duration",
        "value": [
          25
        ]
      }
    ]
  },
  "dark_seer_surge": {
    "id": 5257,
    "name": "dark_seer_surge",
    "type": 0,
    "behavior": 8,
    "targetTeam": 1,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 3,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        600
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.4
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        13,
        12,
        11,
        10
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        50
      ],
      "modifierSupportValue": 2.5,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          3,
          4.5,
          6,
          7.5
        ]
      }
    ]
  },
  "dark_seer_wall_of_replica": {
    "id": 5258,
    "name": "dark_seer_wall_of_replica",
    "type": 1,
    "behavior": 16,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        500,
        900,
        1300
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.4,
        0.4,
        0.4
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        100,
        100,
        100
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        125,
        250,
        375
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          45
        ]
      },
      {
        "key": "replica_damage_outgoing",
        "value": [
          -30,
          -15,
          0
        ]
      },
      {
        "key": "tooltip_outgoing",
        "value": [
          70,
          85,
          100
        ]
      },
      {
        "key": "replica_damage_incoming",
        "value": [
          100
        ]
      },
      {
        "key": "tooltip_replica_total_damage_incoming",
        "value": [
          200
        ]
      },
      {
        "key": "width",
        "value": [
          1300
        ]
      },
      {
        "key": "replica_scale",
        "value": [
          0
        ]
      },
      {
        "key": "range_tooltip",
        "value": [
          500,
          900,
          1300
        ]
      },
      {
        "key": "replica_damage_outgoing_scepter",
        "value": [
          0,
          20,
          40
        ]
      },
      {
        "key": "tooltip_outgoing_scepter",
        "value": [
          100,
          120,
          140
        ]
      },
      {
        "key": "movement_slow",
        "value": [
          75
        ]
      },
      {
        "key": "slow_duration",
        "value": [
          0.5,
          0.75,
          1
        ]
      }
    ]
  },
  "clinkz_strafe": {
    "id": 5259,
    "name": "clinkz_strafe",
    "type": 0,
    "behavior": 1050628,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        30,
        25,
        20,
        15
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        75,
        80,
        85,
        90
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          3.5
        ],
        "talent": "special_bonus_unique_clinkz_2"
      },
      {
        "key": "attack_speed_bonus_pct",
        "value": [
          110,
          160,
          210,
          260
        ]
      }
    ]
  },
  "clinkz_searing_arrows": {
    "id": 5260,
    "name": "clinkz_searing_arrows",
    "type": 0,
    "behavior": 36872,
    "targetTeam": 2,
    "targetType": 69,
    "targetFlag": 16,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 2,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        640
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        10
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "damage_bonus",
        "value": [
          30,
          40,
          50,
          60
        ],
        "talent": "special_bonus_unique_clinkz_1"
      }
    ]
  },
  "clinkz_wind_walk": {
    "id": 5261,
    "name": "clinkz_wind_walk",
    "type": 0,
    "behavior": 1050628,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        20,
        19,
        18,
        17
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        75,
        75,
        75,
        75
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          20,
          25,
          30,
          35
        ]
      },
      {
        "key": "fade_time",
        "value": [
          0.6,
          0.6,
          0.6,
          0.6
        ]
      },
      {
        "key": "move_speed_bonus_pct",
        "value": [
          15,
          25,
          35,
          45
        ]
      }
    ]
  },
  "clinkz_death_pact": {
    "id": 5262,
    "name": "clinkz_death_pact",
    "type": 1,
    "behavior": 8388616,
    "targetTeam": 4,
    "targetType": 16,
    "targetFlag": 1296,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        400
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.5,
        0.5,
        0.5
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        85
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100,
        100,
        100
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          65
        ]
      },
      {
        "key": "health_gain_pct",
        "value": [
          40,
          60,
          80
        ]
      },
      {
        "key": "damage_gain_pct",
        "value": [
          4,
          6,
          8
        ]
      }
    ]
  },
  "omniknight_purification": {
    "id": 5263,
    "name": "omniknight_purification",
    "type": 0,
    "behavior": 40,
    "targetTeam": 1,
    "targetType": 65,
    "targetFlag": 8192,
    "spellImmunityType": 2,
    "spellDispellableType": 0,
    "damageType": 1,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        400
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.2
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        14,
        13,
        12,
        11
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        85,
        100,
        115,
        130
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "heal",
        "value": [
          90,
          160,
          230,
          300
        ],
        "talent": "special_bonus_unique_omniknight_1"
      },
      {
        "key": "radius",
        "value": [
          260
        ]
      }
    ]
  },
  "omniknight_repel": {
    "id": 5264,
    "name": "omniknight_repel",
    "type": 0,
    "behavior": 8,
    "targetTeam": 1,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 2,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        500
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.35
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        30,
        26,
        22,
        18
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        85
      ],
      "modifierSupportValue": 3,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          4,
          5,
          6,
          7
        ],
        "talent": "special_bonus_unique_omniknight_3"
      }
    ]
  },
  "omniknight_degen_aura": {
    "id": 5265,
    "name": "omniknight_degen_aura",
    "type": 0,
    "behavior": 16386,
    "targetTeam": 2,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        275
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "speed_bonus",
        "value": [
          -10,
          -18,
          -26,
          -34
        ],
        "talent": "special_bonus_unique_omniknight_2"
      },
      {
        "key": "attack_bonus_tooltip",
        "value": [
          -10,
          -18,
          -26,
          -34
        ],
        "talent": "special_bonus_unique_omniknight_2"
      },
      {
        "key": "radius",
        "value": [
          300
        ]
      }
    ]
  },
  "omniknight_guardian_angel": {
    "id": 5266,
    "name": "omniknight_guardian_angel",
    "type": 1,
    "behavior": 4,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 3,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.4
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        180,
        170,
        160
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        125,
        175,
        250
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          6,
          7,
          8
        ]
      },
      {
        "key": "radius",
        "value": [
          600
        ]
      },
      {
        "key": "duration_scepter",
        "value": [
          8,
          9,
          10
        ]
      }
    ]
  },
  "enchantress_untouchable": {
    "id": 5267,
    "name": "enchantress_untouchable",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "slow_attack_speed",
        "value": [
          -20,
          -70,
          -120,
          -170
        ],
        "talent": "special_bonus_unique_enchantress_3"
      },
      {
        "key": "slow_duration",
        "value": [
          4
        ]
      }
    ]
  },
  "enchantress_enchant": {
    "id": 5268,
    "name": "enchantress_enchant",
    "type": 0,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        700
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        55,
        40,
        25,
        10
      ],
      "duration": [
        3.75,
        4.5,
        5.25,
        6
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        65,
        65,
        65,
        65
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "dominate_duration",
        "value": [
          50,
          60,
          70,
          80
        ]
      },
      {
        "key": "slow_movement_speed",
        "value": [
          -55
        ]
      },
      {
        "key": "tooltip_duration",
        "value": [
          3.75,
          4.5,
          5.25,
          6
        ]
      }
    ]
  },
  "enchantress_natures_attendants": {
    "id": 5269,
    "name": "enchantress_natures_attendants",
    "type": 0,
    "behavior": 4,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        35
      ],
      "duration": [
        11
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        170,
        160,
        150,
        140
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "heal_interval",
        "value": [
          1
        ]
      },
      {
        "key": "heal",
        "value": [
          10,
          10,
          10,
          10
        ],
        "talent": "special_bonus_unique_enchantress_5"
      },
      {
        "key": "radius",
        "value": [
          275,
          275,
          275,
          275
        ]
      },
      {
        "key": "wisp_count",
        "value": [
          4,
          6,
          8,
          10
        ],
        "talent": "special_bonus_unique_enchantress_2"
      }
    ]
  },
  "enchantress_impetus": {
    "id": 5270,
    "name": "enchantress_impetus",
    "type": 1,
    "behavior": 36872,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 16,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 1,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        550
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0
      ],
      "duration": [
        1.5,
        1.5,
        1.5
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        40,
        55,
        70
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "distance_damage_pct",
        "value": [
          16,
          20,
          24
        ],
        "talent": "special_bonus_unique_enchantress_4"
      },
      {
        "key": "distance_cap",
        "value": [
          1750
        ]
      },
      {
        "key": "bonus_attack_range_scepter",
        "value": [
          190,
          190,
          190
        ]
      }
    ]
  },
  "huskar_inner_vitality": {
    "id": 5271,
    "name": "huskar_inner_vitality",
    "type": 0,
    "behavior": 8388616,
    "targetTeam": 1,
    "targetType": 64,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        800
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        22,
        18,
        14,
        10
      ],
      "duration": [
        16,
        16,
        16,
        16
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        140,
        150,
        160,
        170
      ],
      "modifierSupportValue": 0,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "heal",
        "value": [
          12
        ]
      },
      {
        "key": "attrib_bonus",
        "value": [
          0.06,
          0.08,
          0.1,
          0.12
        ]
      },
      {
        "key": "hurt_attrib_bonus",
        "value": [
          0.22,
          0.3,
          0.38,
          0.46
        ]
      },
      {
        "key": "hurt_percent",
        "value": [
          0.35
        ]
      },
      {
        "key": "tooltip_attrib_bonus",
        "value": [
          6,
          8,
          10,
          12
        ]
      },
      {
        "key": "tooltip_hurt_attrib_bonus",
        "value": [
          22,
          30,
          38,
          46
        ]
      }
    ]
  },
  "huskar_burning_spear": {
    "id": 5272,
    "name": "huskar_burning_spear",
    "type": 0,
    "behavior": 36872,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        450
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        8
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "health_cost",
        "value": [
          15
        ]
      },
      {
        "key": "burn_damage",
        "value": [
          5,
          10,
          15,
          20
        ],
        "talent": "special_bonus_unique_huskar_2"
      }
    ]
  },
  "huskar_berserkers_blood": {
    "id": 5273,
    "name": "huskar_berserkers_blood",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "maximum_attack_speed",
        "value": [
          220,
          260,
          300,
          340
        ]
      },
      {
        "key": "maximum_resistance",
        "value": [
          20,
          30,
          40,
          50
        ]
      },
      {
        "key": "hp_threshold_max",
        "value": [
          10
        ]
      }
    ]
  },
  "huskar_life_break": {
    "id": 5274,
    "name": "huskar_life_break",
    "type": 1,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 80,
    "targetFlag": 16,
    "spellImmunityType": 1,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        550
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        12
      ],
      "duration": [
        4,
        5,
        6
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "health_cost_percent",
        "value": [
          0.34,
          0.39,
          0.44
        ]
      },
      {
        "key": "health_damage",
        "value": [
          0.34,
          0.39,
          0.44
        ]
      },
      {
        "key": "health_damage_scepter",
        "value": [
          0.65
        ]
      },
      {
        "key": "charge_speed",
        "value": [
          1200
        ]
      },
      {
        "key": "tooltip_health_damage",
        "value": [
          34,
          38,
          42
        ]
      },
      {
        "key": "tooltip_health_cost_percent",
        "value": [
          34,
          38,
          42
        ]
      },
      {
        "key": "movespeed",
        "value": [
          -40,
          -50,
          -60
        ]
      },
      {
        "key": "slow_durtion_tooltip",
        "value": [
          4,
          5,
          6
        ]
      },
      {
        "key": "tooltip_health_damage_scepter",
        "value": [
          65
        ]
      },
      {
        "key": "cooldown_scepter",
        "value": [
          4
        ]
      }
    ]
  },
  "night_stalker_void": {
    "id": 5275,
    "name": "night_stalker_void",
    "type": 0,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        525
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        11,
        10,
        9,
        8
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        90,
        160,
        255,
        335
      ],
      "manaCost": [
        80,
        90,
        100,
        110
      ],
      "modifierSupportValue": 0.5,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration_day",
        "value": [
          1.25
        ]
      },
      {
        "key": "duration_night",
        "value": [
          2.5,
          3,
          3.5,
          4
        ]
      },
      {
        "key": "movespeed_slow",
        "value": [
          -50,
          -50,
          -50,
          -50
        ]
      },
      {
        "key": "attackspeed_slow",
        "value": [
          -50,
          -50,
          -50,
          -50
        ]
      }
    ]
  },
  "night_stalker_crippling_fear": {
    "id": 5276,
    "name": "night_stalker_crippling_fear",
    "type": 0,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        500
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        24,
        20,
        16,
        12
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        50
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration_day",
        "value": [
          3,
          3,
          3,
          3
        ]
      },
      {
        "key": "duration_night",
        "value": [
          5,
          6,
          7,
          8
        ]
      },
      {
        "key": "miss_rate_day",
        "value": [
          10,
          10,
          10,
          10
        ]
      },
      {
        "key": "miss_rate_night",
        "value": [
          50
        ]
      }
    ]
  },
  "night_stalker_hunter_in_the_night": {
    "id": 5277,
    "name": "night_stalker_hunter_in_the_night",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        30,
        26,
        22,
        18
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        80
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "bonus_movement_speed_pct_night",
        "value": [
          20,
          25,
          30,
          35
        ]
      },
      {
        "key": "bonus_attack_speed_night",
        "value": [
          30,
          50,
          70,
          90
        ],
        "talent": "special_bonus_unique_night_stalker_2"
      },
      {
        "key": "duration",
        "value": [
          2
        ]
      }
    ]
  },
  "night_stalker_darkness": {
    "id": 5278,
    "name": "night_stalker_darkness",
    "type": 1,
    "behavior": 4,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        160,
        120,
        80
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          40
        ]
      },
      {
        "key": "blind_percentage",
        "value": [
          -25
        ]
      }
    ]
  },
  "broodmother_spawn_spiderlings": {
    "id": 5279,
    "name": "broodmother_spawn_spiderlings",
    "type": 0,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        700
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.2,
        0.2,
        0.2,
        0.2
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        11,
        10,
        9,
        8
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100
      ],
      "modifierSupportValue": 0,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "buff_duration",
        "value": [
          2,
          2,
          2,
          2
        ]
      },
      {
        "key": "spiderling_duration",
        "value": [
          60,
          60,
          60,
          60
        ]
      },
      {
        "key": "damage",
        "value": [
          70,
          140,
          210,
          280
        ],
        "talent": "special_bonus_unique_broodmother_3"
      },
      {
        "key": "count",
        "value": [
          1,
          2,
          3,
          4
        ]
      },
      {
        "key": "projectile_speed",
        "value": [
          1200
        ]
      }
    ]
  },
  "broodmother_spin_web": {
    "id": 5280,
    "name": "broodmother_spin_web",
    "type": 0,
    "behavior": 48,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1000
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.4
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        50
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          900
        ]
      },
      {
        "key": "count",
        "value": [
          2,
          4,
          6,
          8
        ]
      },
      {
        "key": "heath_regen",
        "value": [
          3,
          5,
          7,
          9
        ]
      },
      {
        "key": "bonus_movespeed",
        "value": [
          25,
          40,
          55,
          70
        ]
      },
      {
        "key": "max_charges",
        "value": [
          2,
          4,
          6,
          8
        ]
      },
      {
        "key": "charge_restore_time",
        "value": [
          45
        ]
      }
    ]
  },
  "broodmother_incapacitating_bite": {
    "id": 5281,
    "name": "broodmother_incapacitating_bite",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "miss_chance",
        "value": [
          30,
          40,
          50,
          60
        ]
      },
      {
        "key": "bonus_movespeed",
        "value": [
          -16,
          -26,
          -36,
          -46
        ]
      },
      {
        "key": "duration",
        "value": [
          2,
          2,
          2,
          2
        ]
      }
    ]
  },
  "broodmother_insatiable_hunger": {
    "id": 5282,
    "name": "broodmother_insatiable_hunger",
    "type": 1,
    "behavior": 4,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.2,
        0.2,
        0.2
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        45,
        45,
        45
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100,
        100,
        100
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "bonus_damage",
        "value": [
          60,
          100,
          140
        ],
        "talent": "special_bonus_unique_broodmother_1"
      },
      {
        "key": "lifesteal_pct",
        "value": [
          60,
          100,
          140
        ],
        "talent": "special_bonus_unique_broodmother_1"
      },
      {
        "key": "duration",
        "value": [
          14,
          14,
          14
        ]
      }
    ]
  },
  "bounty_hunter_shuriken_toss": {
    "id": 5285,
    "name": "bounty_hunter_shuriken_toss",
    "type": 0,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        400
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        10
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        150
      ],
      "modifierSupportValue": 0.1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "bonus_damage",
        "value": [
          150,
          225,
          300,
          375
        ],
        "talent": "special_bonus_unique_bounty_hunter_2"
      },
      {
        "key": "speed",
        "value": [
          1000,
          1000,
          1000,
          1000
        ]
      },
      {
        "key": "bounce_aoe",
        "value": [
          1200
        ]
      },
      {
        "key": "ministun",
        "value": [
          0.1
        ]
      },
      {
        "key": "scepter_ministun",
        "value": [
          0.75
        ]
      }
    ]
  },
  "bounty_hunter_jinada": {
    "id": 5286,
    "name": "bounty_hunter_jinada",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        12,
        10,
        8,
        6
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "crit_multiplier",
        "value": [
          150,
          175,
          200,
          225
        ],
        "talent": "special_bonus_unique_bounty_hunter"
      },
      {
        "key": "bonus_movespeed",
        "value": [
          -15,
          -20,
          -25,
          -30
        ]
      },
      {
        "key": "bonus_attackspeed",
        "value": [
          -15,
          -20,
          -25,
          -30
        ]
      },
      {
        "key": "duration",
        "value": [
          3,
          3,
          3,
          3
        ]
      }
    ]
  },
  "bounty_hunter_wind_walk": {
    "id": 5287,
    "name": "bounty_hunter_wind_walk",
    "type": 0,
    "behavior": 1050628,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 2,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        15,
        15,
        15,
        15
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        65
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          20,
          25,
          30,
          35
        ]
      },
      {
        "key": "fade_time",
        "value": [
          1,
          0.75,
          0.5,
          0.25
        ]
      },
      {
        "key": "bonus_damage",
        "value": [
          30,
          60,
          90,
          120
        ]
      }
    ]
  },
  "bounty_hunter_track": {
    "id": 5288,
    "name": "bounty_hunter_track",
    "type": 1,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 64,
    "targetFlag": 1040,
    "spellImmunityType": 1,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1200
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        4
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        65
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "aura_radius",
        "value": [
          900,
          900,
          900
        ]
      },
      {
        "key": "bonus_move_speed_pct",
        "value": [
          16,
          18,
          20
        ]
      },
      {
        "key": "bonus_gold_radius",
        "value": [
          925,
          925,
          925
        ]
      },
      {
        "key": "bonus_gold_self",
        "value": [
          150,
          250,
          350
        ],
        "talent": "special_bonus_unique_bounty_hunter_3"
      },
      {
        "key": "bonus_gold",
        "value": [
          40,
          80,
          120
        ],
        "talent": "special_bonus_unique_bounty_hunter_3"
      },
      {
        "key": "duration",
        "value": [
          30,
          30,
          30
        ]
      },
      {
        "key": "cast_range_tooltip",
        "value": [
          1200
        ]
      },
      {
        "key": "gold_steal",
        "value": [
          0.3,
          0.4,
          0.5
        ]
      }
    ]
  },
  "weaver_the_swarm": {
    "id": 5289,
    "name": "weaver_the_swarm",
    "type": 0,
    "behavior": 33554448,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 2,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        3000
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        35,
        30,
        25,
        20
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        110
      ],
      "modifierSupportValue": 0.2,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "damage",
        "value": [
          18,
          20,
          22,
          24
        ]
      },
      {
        "key": "attack_rate",
        "value": [
          1.25,
          1.1,
          0.95,
          0.8
        ]
      },
      {
        "key": "count",
        "value": [
          12,
          12,
          12,
          12
        ]
      },
      {
        "key": "armor_reduction",
        "value": [
          1,
          1,
          1,
          1
        ],
        "talent": "special_bonus_unique_weaver_3"
      },
      {
        "key": "duration",
        "value": [
          16
        ]
      },
      {
        "key": "destroy_attacks",
        "value": [
          8,
          8,
          8,
          8
        ]
      },
      {
        "key": "radius",
        "value": [
          100,
          100,
          100,
          100
        ]
      },
      {
        "key": "speed",
        "value": [
          600,
          600,
          600,
          600
        ]
      },
      {
        "key": "spawn_radius",
        "value": [
          300,
          300,
          300,
          300
        ]
      }
    ]
  },
  "weaver_shukuchi": {
    "id": 5290,
    "name": "weaver_shukuchi",
    "type": 0,
    "behavior": 1050628,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        12,
        10,
        8,
        6
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        60,
        60,
        60,
        60
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "damage",
        "value": [
          100,
          125,
          150,
          175
        ],
        "talent": "special_bonus_unique_weaver_1"
      },
      {
        "key": "radius",
        "value": [
          175,
          175,
          175,
          175
        ]
      },
      {
        "key": "fade_time",
        "value": [
          0.25,
          0.25,
          0.25,
          0.25
        ]
      },
      {
        "key": "duration",
        "value": [
          4,
          4,
          4,
          4
        ]
      }
    ]
  },
  "weaver_geminate_attack": {
    "id": 5291,
    "name": "weaver_geminate_attack",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        7,
        6,
        5,
        3
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "delay",
        "value": [
          0.25
        ]
      },
      {
        "key": "tooltip_attack",
        "value": [
          1
        ],
        "talent": "special_bonus_unique_weaver_5"
      }
    ]
  },
  "weaver_time_lapse": {
    "id": 5292,
    "name": "weaver_time_lapse",
    "type": 1,
    "behavior": 42008580,
    "targetTeam": 1,
    "targetType": 64,
    "targetFlag": 1024,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        1000
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        60,
        50,
        40
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        150,
        75,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "cooldown_scepter",
        "value": [
          16
        ]
      },
      {
        "key": "cast_range_tooltip_scepter",
        "value": [
          1000
        ]
      }
    ]
  },
  "jakiro_dual_breath": {
    "id": 5297,
    "name": "jakiro_dual_breath",
    "type": 0,
    "behavior": 24,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        750
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.55
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        10,
        10,
        10,
        10
      ],
      "duration": [
        5
      ],
      "sharedCooldown": "0",
      "damage": [
        0
      ],
      "manaCost": [
        135,
        140,
        155,
        170
      ],
      "modifierSupportValue": 0.25,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "start_radius",
        "value": [
          225
        ]
      },
      {
        "key": "end_radius",
        "value": [
          275
        ]
      },
      {
        "key": "range",
        "value": [
          750,
          750,
          750,
          750
        ]
      },
      {
        "key": "speed",
        "value": [
          1050
        ]
      },
      {
        "key": "fire_delay",
        "value": [
          0.3,
          0.3,
          0.3,
          0.3
        ]
      },
      {
        "key": "burn_damage",
        "value": [
          20,
          40,
          60,
          80
        ],
        "talent": "special_bonus_unique_jakiro_2"
      },
      {
        "key": "slow_movement_speed_pct",
        "value": [
          -28,
          -32,
          -36,
          -40
        ]
      },
      {
        "key": "slow_attack_speed_pct",
        "value": [
          -28,
          -32,
          -36,
          -40
        ]
      },
      {
        "key": "tooltip_duration",
        "value": [
          5
        ]
      },
      {
        "key": "speed_fire",
        "value": [
          1050
        ]
      }
    ]
  },
  "jakiro_ice_path": {
    "id": 5298,
    "name": "jakiro_ice_path",
    "type": 0,
    "behavior": 16,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 2,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1200
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.65
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        12,
        11,
        10,
        9
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0
      ],
      "manaCost": [
        90
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "path_delay",
        "value": [
          0.5
        ]
      },
      {
        "key": "duration",
        "value": [
          1,
          1.5,
          2,
          2.5
        ],
        "talent": "special_bonus_unique_jakiro"
      },
      {
        "key": "path_radius",
        "value": [
          150
        ]
      },
      {
        "key": "damage",
        "value": [
          50
        ]
      }
    ]
  },
  "jakiro_liquid_fire": {
    "id": 5299,
    "name": "jakiro_liquid_fire",
    "type": 0,
    "behavior": 36872,
    "targetTeam": 2,
    "targetType": 69,
    "targetFlag": 16,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        600
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        20,
        15,
        10,
        4
      ],
      "duration": [
        5,
        5,
        5,
        5
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 35
    },
    "special": [
      {
        "key": "slow_attack_speed_pct",
        "value": [
          -30,
          -40,
          -50,
          -60
        ],
        "talent": "special_bonus_unique_jakiro_4"
      },
      {
        "key": "radius",
        "value": [
          300
        ]
      },
      {
        "key": "damage",
        "value": [
          12,
          16,
          20,
          24
        ]
      },
      {
        "key": "tooltip_duration",
        "value": [
          5,
          5,
          5,
          5
        ]
      }
    ]
  },
  "jakiro_macropyre": {
    "id": 5300,
    "name": "jakiro_macropyre",
    "type": 1,
    "behavior": 16,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        1400
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.55
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        60,
        60,
        60
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        220,
        330,
        440
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "damage",
        "value": [
          100,
          140,
          180
        ]
      },
      {
        "key": "cast_range",
        "value": [
          1400
        ]
      },
      {
        "key": "path_radius",
        "value": [
          260
        ]
      },
      {
        "key": "tooltip_duration",
        "value": [
          10
        ]
      },
      {
        "key": "duration",
        "value": [
          10
        ]
      },
      {
        "key": "burn_interval",
        "value": [
          0.5,
          0.5,
          0.5
        ]
      },
      {
        "key": "damage_scepter",
        "value": [
          125,
          175,
          225
        ]
      },
      {
        "key": "cast_range_scepter",
        "value": [
          1800
        ]
      },
      {
        "key": "duration_scepter",
        "value": [
          30
        ]
      }
    ]
  },
  "batrider_sticky_napalm": {
    "id": 5320,
    "name": "batrider_sticky_napalm",
    "type": 0,
    "behavior": 33554480,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        700
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.2,
        0.2,
        0.2,
        0.2
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        3,
        3,
        3,
        3
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        20,
        20,
        20,
        20
      ],
      "modifierSupportValue": 0.5,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "damage",
        "value": [
          10,
          15,
          20,
          25
        ]
      },
      {
        "key": "radius",
        "value": [
          375,
          375,
          375,
          375
        ]
      },
      {
        "key": "duration",
        "value": [
          8,
          8,
          8,
          8
        ]
      },
      {
        "key": "movement_speed_pct",
        "value": [
          -3,
          -5,
          -7,
          -9
        ]
      },
      {
        "key": "turn_rate_pct",
        "value": [
          -70,
          -70,
          -70,
          -70
        ]
      },
      {
        "key": "max_stacks",
        "value": [
          10,
          10,
          10,
          10
        ]
      }
    ]
  },
  "batrider_flamebreak": {
    "id": 5321,
    "name": "batrider_flamebreak",
    "type": 0,
    "behavior": 48,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1500
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.2,
        0.2,
        0.2,
        0.2
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        17
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        110,
        120,
        130,
        140
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "damage_per_second",
        "value": [
          25,
          30,
          35,
          40
        ]
      },
      {
        "key": "damage_duration",
        "value": [
          4,
          5,
          6,
          7
        ],
        "talent": "special_bonus_unique_batrider_3"
      },
      {
        "key": "damage_total_tooltip",
        "value": [
          100,
          150,
          210,
          280
        ]
      },
      {
        "key": "explosion_radius",
        "value": [
          375
        ]
      },
      {
        "key": "collision_radius",
        "value": [
          100,
          100,
          100,
          100
        ]
      },
      {
        "key": "stun_duration",
        "value": [
          0.5,
          0.5,
          0.5,
          0.5
        ]
      },
      {
        "key": "speed",
        "value": [
          900,
          900,
          900,
          900
        ]
      },
      {
        "key": "knockback_max_distance",
        "value": [
          400
        ]
      },
      {
        "key": "knockback_height",
        "value": [
          100,
          100,
          100,
          100
        ]
      },
      {
        "key": "knockback_duration",
        "value": [
          0.25,
          0.25,
          0.25,
          0.25
        ]
      }
    ]
  },
  "batrider_firefly": {
    "id": 5322,
    "name": "batrider_firefly",
    "type": 0,
    "behavior": 2052,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        40,
        40,
        40,
        40
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        125
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "damage_per_second",
        "value": [
          10,
          30,
          50,
          70
        ]
      },
      {
        "key": "radius",
        "value": [
          200,
          200,
          200,
          200
        ]
      },
      {
        "key": "duration",
        "value": [
          18,
          18,
          18,
          18
        ],
        "talent": "special_bonus_unique_batrider_1"
      },
      {
        "key": "tick_interval",
        "value": [
          0.5,
          0.5,
          0.5,
          0.5
        ]
      },
      {
        "key": "tree_radius",
        "value": [
          100,
          100,
          100,
          100
        ]
      }
    ]
  },
  "batrider_flaming_lasso": {
    "id": 5323,
    "name": "batrider_flaming_lasso",
    "type": 1,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 16,
    "spellImmunityType": 1,
    "spellDispellableType": 2,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        100
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.2,
        0.2,
        0.2,
        0.2
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        100,
        80,
        60
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        225
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          3,
          3.5,
          4
        ]
      },
      {
        "key": "drag_distance",
        "value": [
          300,
          300,
          300
        ]
      },
      {
        "key": "break_distance",
        "value": [
          425
        ]
      },
      {
        "key": "grab_radius",
        "value": [
          400
        ]
      },
      {
        "key": "grab_radius_scepter",
        "value": [
          400
        ]
      },
      {
        "key": "damage_scepter",
        "value": [
          100
        ]
      }
    ]
  },
  "chen_penitence": {
    "id": 5328,
    "name": "chen_penitence",
    "type": 0,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        800
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        14,
        13,
        12,
        11
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        70
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          5,
          6,
          7,
          8
        ]
      },
      {
        "key": "speed",
        "value": [
          2000,
          2000,
          2000,
          2000
        ]
      },
      {
        "key": "bonus_movement_speed",
        "value": [
          -18,
          -24,
          -30,
          -36
        ]
      },
      {
        "key": "bonus_damage_taken",
        "value": [
          18,
          24,
          30,
          36
        ]
      }
    ]
  },
  "chen_test_of_faith": {
    "id": 5329,
    "name": "chen_test_of_faith",
    "type": 0,
    "behavior": 8,
    "targetTeam": 4,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 1,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        600,
        600,
        600,
        600
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        16
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        60,
        80,
        100,
        120
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "damage_min",
        "value": [
          50,
          100,
          150,
          200
        ]
      },
      {
        "key": "damage_max",
        "value": [
          100,
          200,
          300,
          400
        ]
      },
      {
        "key": "heal_min",
        "value": [
          25,
          50,
          75,
          100
        ]
      },
      {
        "key": "heal_max",
        "value": [
          50,
          100,
          150,
          200
        ]
      }
    ]
  },
  "chen_holy_persuasion": {
    "id": 5330,
    "name": "chen_holy_persuasion",
    "type": 0,
    "behavior": 8388616,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        600
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        32,
        24,
        18,
        10
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        70,
        90,
        110,
        130
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "max_units",
        "value": [
          1,
          2,
          3,
          4
        ],
        "talent": "special_bonus_unique_chen_1"
      },
      {
        "key": "level_req",
        "value": [
          6
        ]
      },
      {
        "key": "health_min",
        "value": [
          700,
          800,
          900,
          1000
        ],
        "talent": "special_bonus_unique_chen_4"
      },
      {
        "key": "teleport_delay",
        "value": [
          6
        ]
      }
    ]
  },
  "chen_hand_of_god": {
    "id": 5331,
    "name": "chen_hand_of_god",
    "type": 1,
    "behavior": 4,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 3,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        160,
        140,
        120
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        200,
        300,
        400
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "heal_amount",
        "value": [
          250,
          400,
          550
        ],
        "talent": "special_bonus_unique_chen_2"
      },
      {
        "key": "ancient_creeps_scepter",
        "value": [
          1,
          2,
          3
        ]
      }
    ]
  },
  "spectre_spectral_dagger": {
    "id": 5334,
    "name": "spectre_spectral_dagger",
    "type": 0,
    "behavior": 24,
    "targetTeam": 2,
    "targetType": 64,
    "targetFlag": 16,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        2000,
        2000,
        2000,
        2000
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        16,
        16,
        16,
        16
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100,
        120,
        140,
        160
      ],
      "modifierSupportValue": 0,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "damage",
        "value": [
          90,
          140,
          190,
          240
        ]
      },
      {
        "key": "bonus_movespeed",
        "value": [
          8,
          12,
          16,
          20
        ],
        "talent": "special_bonus_unique_spectre_3"
      },
      {
        "key": "dagger_path_duration",
        "value": [
          12,
          12,
          12,
          12
        ]
      },
      {
        "key": "hero_path_duration",
        "value": [
          7,
          7,
          7,
          7
        ]
      },
      {
        "key": "buff_persistence",
        "value": [
          4,
          4,
          4,
          4
        ]
      },
      {
        "key": "dagger_radius",
        "value": [
          125,
          125,
          125,
          125
        ]
      },
      {
        "key": "path_radius",
        "value": [
          175,
          175,
          175,
          175
        ]
      },
      {
        "key": "vision_radius",
        "value": [
          200
        ]
      },
      {
        "key": "speed",
        "value": [
          800
        ]
      },
      {
        "key": "dagger_grace_period",
        "value": [
          1
        ]
      }
    ]
  },
  "spectre_desolate": {
    "id": 5335,
    "name": "spectre_desolate",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 1,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "bonus_damage",
        "value": [
          20,
          30,
          40,
          50
        ],
        "talent": "special_bonus_unique_spectre_2"
      },
      {
        "key": "radius",
        "value": [
          375
        ]
      },
      {
        "key": "blind_pct",
        "value": [
          40,
          50,
          60,
          70
        ]
      },
      {
        "key": "blind_duration",
        "value": [
          5
        ]
      }
    ]
  },
  "spectre_dispersion": {
    "id": 5336,
    "name": "spectre_dispersion",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "damage_reflection_pct",
        "value": [
          10,
          14,
          18,
          22
        ],
        "talent": "special_bonus_unique_spectre_5"
      },
      {
        "key": "min_radius",
        "value": [
          300,
          300,
          300,
          300
        ]
      },
      {
        "key": "max_radius",
        "value": [
          700
        ]
      }
    ]
  },
  "spectre_haunt": {
    "id": 5337,
    "name": "spectre_haunt",
    "type": 1,
    "behavior": 4,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        180,
        150,
        120
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        150,
        150,
        150
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          5,
          6,
          7
        ]
      },
      {
        "key": "illusion_damage_outgoing",
        "value": [
          -60,
          -50,
          -40
        ]
      },
      {
        "key": "tooltip_outgoing",
        "value": [
          40,
          50,
          60
        ],
        "talent": "special_bonus_unique_spectre_4"
      },
      {
        "key": "illusion_damage_incoming",
        "value": [
          100,
          100,
          100
        ]
      },
      {
        "key": "tooltip_illusion_total_damage_incoming",
        "value": [
          200,
          200,
          200
        ]
      },
      {
        "key": "attack_delay",
        "value": [
          1,
          1,
          1
        ]
      }
    ]
  },
  "spectre_reality": {
    "id": 5338,
    "name": "spectre_reality",
    "type": 0,
    "behavior": 80,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 1,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": []
  },
  "doom_bringer_devour": {
    "id": 5339,
    "name": "doom_bringer_devour",
    "type": 0,
    "behavior": 8388616,
    "targetTeam": 8,
    "targetType": 32,
    "targetFlag": 1024,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        300,
        300,
        300,
        300
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        70,
        60,
        50,
        40
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        40,
        50,
        60,
        70
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "bonus_gold",
        "value": [
          25,
          50,
          75,
          100
        ],
        "talent": "special_bonus_unique_doom_3"
      },
      {
        "key": "health_per_second",
        "value": [
          20,
          20,
          20,
          20
        ]
      }
    ]
  },
  "doom_bringer_scorched_earth": {
    "id": 5340,
    "name": "doom_bringer_scorched_earth",
    "type": 0,
    "behavior": 4,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        600,
        600,
        600,
        600
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        55
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        60,
        65,
        70,
        75
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "damage_per_second",
        "value": [
          16,
          24,
          32,
          40
        ],
        "talent": "special_bonus_unique_doom_4"
      },
      {
        "key": "regen",
        "value": [
          12,
          18,
          24,
          30
        ],
        "talent": "special_bonus_unique_doom_4"
      },
      {
        "key": "radius",
        "value": [
          600,
          600,
          600,
          600
        ]
      },
      {
        "key": "bonus_movement_speed_pct",
        "value": [
          11,
          12,
          13,
          14
        ]
      },
      {
        "key": "duration",
        "value": [
          10,
          12,
          14,
          16
        ]
      }
    ]
  },
  "doom_bringer_infernal_blade": {
    "id": 5341,
    "name": "doom_bringer_infernal_blade",
    "type": 0,
    "behavior": 36872,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        150
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        16,
        12,
        8,
        4
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        40
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "burn_damage",
        "value": [
          25
        ]
      },
      {
        "key": "burn_damage_pct",
        "value": [
          1.25,
          2.5,
          3.75,
          5
        ],
        "talent": "special_bonus_unique_doom_1"
      },
      {
        "key": "burn_duration",
        "value": [
          4
        ]
      },
      {
        "key": "ministun_duration",
        "value": [
          0.6
        ]
      }
    ]
  },
  "doom_bringer_doom": {
    "id": 5342,
    "name": "doom_bringer_doom",
    "type": 1,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 272,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 1,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        550,
        550,
        550
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.5
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        145
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        150,
        200,
        250
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          16
        ]
      },
      {
        "key": "damage",
        "value": [
          25,
          40,
          55
        ],
        "talent": "special_bonus_unique_doom_5"
      },
      {
        "key": "duration_scepter",
        "value": [
          16
        ]
      },
      {
        "key": "damage_scepter",
        "value": [
          20,
          35,
          50
        ]
      },
      {
        "key": "deniable_pct",
        "value": [
          25,
          25,
          25
        ]
      }
    ]
  },
  "doom_bringer_empty1": {
    "id": 5343,
    "name": "doom_bringer_empty1",
    "type": 0,
    "behavior": 66,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": []
  },
  "doom_bringer_empty2": {
    "id": 5344,
    "name": "doom_bringer_empty2",
    "type": 0,
    "behavior": 66,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": []
  },
  "ancient_apparition_cold_feet": {
    "id": 5345,
    "name": "ancient_apparition_cold_feet",
    "type": 0,
    "behavior": 33554440,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        700,
        800,
        900,
        1000
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.01,
        0.01,
        0.01,
        0.01
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        10,
        9,
        8,
        7
      ],
      "duration": [
        4,
        4,
        4,
        4
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        125
      ],
      "modifierSupportValue": 0.5,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "damage",
        "value": [
          30,
          50,
          70,
          90
        ]
      },
      {
        "key": "break_distance",
        "value": [
          740,
          740,
          740,
          740
        ]
      },
      {
        "key": "stun_duration",
        "value": [
          2,
          2.5,
          3,
          3.5
        ]
      },
      {
        "key": "cast_range_tooltip",
        "value": [
          700,
          800,
          900,
          1000
        ]
      },
      {
        "key": "charge_restore_time",
        "value": [
          10,
          9,
          8,
          7
        ]
      }
    ]
  },
  "ancient_apparition_ice_vortex": {
    "id": 5346,
    "name": "ancient_apparition_ice_vortex",
    "type": 0,
    "behavior": 33554480,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1500,
        1500,
        1500,
        1500
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.01,
        0.01,
        0.01,
        0.01
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        4
      ],
      "duration": [
        16
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        65,
        80,
        95,
        110
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          275,
          275,
          275,
          275
        ]
      },
      {
        "key": "movement_speed_pct",
        "value": [
          -15,
          -20,
          -25,
          -30
        ],
        "talent": "special_bonus_unique_ancient_apparition_4"
      },
      {
        "key": "spell_resist_pct",
        "value": [
          -15,
          -20,
          -25,
          -30
        ],
        "talent": "special_bonus_unique_ancient_apparition_4"
      },
      {
        "key": "vision_aoe",
        "value": [
          200,
          200,
          200,
          200
        ]
      },
      {
        "key": "vortex_duration",
        "value": [
          16
        ]
      }
    ]
  },
  "ancient_apparition_chilling_touch": {
    "id": 5347,
    "name": "ancient_apparition_chilling_touch",
    "type": 0,
    "behavior": 33554480,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        800,
        800,
        800,
        800
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.01,
        0.01,
        0.01,
        0.01
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        50,
        42,
        34,
        26
      ],
      "duration": [
        20,
        24,
        28,
        32
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        110,
        120,
        130,
        140
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          525
        ]
      },
      {
        "key": "max_attacks",
        "value": [
          3,
          4,
          5,
          6
        ]
      },
      {
        "key": "bonus_damage",
        "value": [
          20,
          40,
          60,
          80
        ],
        "talent": "special_bonus_unique_ancient_apparition_2"
      },
      {
        "key": "move_speed_pct",
        "value": [
          30
        ]
      },
      {
        "key": "move_speed_duration",
        "value": [
          0.3
        ]
      },
      {
        "key": "buff_duration",
        "value": [
          20,
          24,
          28,
          32
        ]
      }
    ]
  },
  "ancient_apparition_ice_blast": {
    "id": 5348,
    "name": "ancient_apparition_ice_blast",
    "type": 1,
    "behavior": 48,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.01,
        0.01,
        0.01
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        40
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        250,
        350,
        450
      ],
      "manaCost": [
        150
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius_min",
        "value": [
          275,
          275,
          275
        ]
      },
      {
        "key": "radius_grow",
        "value": [
          50,
          50,
          50
        ]
      },
      {
        "key": "radius_max",
        "value": [
          1000,
          1000,
          1000
        ]
      },
      {
        "key": "path_radius",
        "value": [
          275,
          275,
          275
        ]
      },
      {
        "key": "frostbite_duration",
        "value": [
          9,
          10,
          11
        ]
      },
      {
        "key": "dot_damage",
        "value": [
          12.5,
          20,
          32
        ]
      },
      {
        "key": "speed",
        "value": [
          1500,
          1500,
          1500,
          1500
        ]
      },
      {
        "key": "kill_pct",
        "value": [
          10,
          11,
          12
        ],
        "talent": "special_bonus_unique_ancient_apparition_5"
      },
      {
        "key": "target_sight_radius",
        "value": [
          500,
          500,
          500
        ]
      },
      {
        "key": "frostbite_duration_scepter",
        "value": [
          17
        ]
      }
    ]
  },
  "ancient_apparition_ice_blast_release": {
    "id": 5349,
    "name": "ancient_apparition_ice_blast_release",
    "type": 1,
    "behavior": 5,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 1,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        1,
        1,
        1
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": []
  },
  "spirit_breaker_charge_of_darkness": {
    "id": 5353,
    "name": "spirit_breaker_charge_of_darkness",
    "type": 0,
    "behavior": 4325384,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.47,
        0.47,
        0.47,
        0.47
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        12
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100,
        100,
        100,
        100
      ],
      "modifierSupportValue": 0.3,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "movement_speed",
        "value": [
          600,
          650,
          700,
          750
        ],
        "talent": "special_bonus_unique_spirit_breaker_2"
      },
      {
        "key": "stun_duration",
        "value": [
          1.2,
          1.6,
          2,
          2.4
        ]
      },
      {
        "key": "bash_radius",
        "value": [
          300,
          300,
          300,
          300
        ]
      },
      {
        "key": "vision_radius",
        "value": [
          400,
          400,
          400,
          400
        ]
      },
      {
        "key": "vision_duration",
        "value": [
          0.94,
          0.94,
          0.94,
          0.94
        ]
      }
    ]
  },
  "spirit_breaker_empowering_haste": {
    "id": 5354,
    "name": "spirit_breaker_empowering_haste",
    "type": 0,
    "behavior": 18436,
    "targetTeam": 1,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        20
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "bonus_movespeed_pct_self",
        "value": [
          8,
          12,
          16,
          20
        ]
      },
      {
        "key": "bonus_movespeed_pct_allies",
        "value": [
          4,
          6,
          8,
          10
        ]
      },
      {
        "key": "aura_radius",
        "value": [
          900,
          900,
          900,
          900
        ]
      },
      {
        "key": "bonus_movespeed_pct_extra",
        "value": [
          3,
          4,
          5,
          6
        ]
      },
      {
        "key": "duration",
        "value": [
          6
        ]
      }
    ]
  },
  "spirit_breaker_greater_bash": {
    "id": 5355,
    "name": "spirit_breaker_greater_bash",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 2,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        1.5,
        1.5,
        1.5,
        1.5
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 40
    },
    "special": [
      {
        "key": "chance_pct",
        "value": [
          17,
          17,
          17,
          17
        ],
        "talent": "special_bonus_unique_spirit_breaker_1"
      },
      {
        "key": "damage",
        "value": [
          12,
          24,
          36,
          48
        ],
        "talent": "special_bonus_unique_spirit_breaker_3"
      },
      {
        "key": "duration",
        "value": [
          1.2,
          1.4,
          1.6,
          1.8
        ]
      },
      {
        "key": "knockback_duration",
        "value": [
          0.5,
          0.5,
          0.5,
          0.5
        ]
      },
      {
        "key": "knockback_distance",
        "value": [
          143,
          152,
          158,
          162
        ]
      },
      {
        "key": "knockback_height",
        "value": [
          50,
          50,
          50,
          50
        ]
      },
      {
        "key": "bonus_movespeed_pct",
        "value": [
          17
        ]
      },
      {
        "key": "movespeed_duration",
        "value": [
          3,
          3,
          3,
          3
        ]
      }
    ]
  },
  "spirit_breaker_nether_strike": {
    "id": 5356,
    "name": "spirit_breaker_nether_strike",
    "type": 1,
    "behavior": 33554440,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 16,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        700
      ],
      "castRangeBuffer": 500,
      "castPoint": [
        1.2
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        100,
        80,
        60
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        125,
        150,
        175
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "damage",
        "value": [
          150,
          200,
          250
        ]
      },
      {
        "key": "fade_time",
        "value": [
          1,
          1,
          1
        ]
      },
      {
        "key": "tooltip_range",
        "value": [
          700
        ]
      },
      {
        "key": "cast_range_scepter",
        "value": [
          850
        ]
      },
      {
        "key": "bash_radius_scepter",
        "value": [
          250,
          250,
          250
        ]
      },
      {
        "key": "cooldown_scepter",
        "value": [
          20,
          20,
          20
        ]
      }
    ]
  },
  "ursa_earthshock": {
    "id": 5357,
    "name": "ursa_earthshock",
    "type": 0,
    "behavior": 33554436,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        5
      ],
      "duration": [
        4,
        4,
        4,
        4
      ],
      "sharedCooldown": "0",
      "damage": [
        90,
        140,
        190,
        240
      ],
      "manaCost": [
        75,
        75,
        75,
        75
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "shock_radius",
        "value": [
          385
        ],
        "talent": "special_bonus_unique_ursa_5"
      },
      {
        "key": "movement_slow",
        "value": [
          -25,
          -35,
          -45,
          -55
        ]
      }
    ]
  },
  "ursa_overpower": {
    "id": 5358,
    "name": "ursa_overpower",
    "type": 0,
    "behavior": 33554436,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        10,
        10,
        10,
        10
      ],
      "duration": [
        20
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        75
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "max_attacks",
        "value": [
          4,
          5,
          6,
          7
        ]
      },
      {
        "key": "attack_speed_bonus_pct",
        "value": [
          400,
          400,
          400,
          400
        ]
      },
      {
        "key": "duration_tooltip",
        "value": [
          20
        ]
      }
    ]
  },
  "ursa_fury_swipes": {
    "id": 5359,
    "name": "ursa_fury_swipes",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 2,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "bonus_reset_time",
        "value": [
          20
        ],
        "talent": "special_bonus_unique_ursa_4"
      },
      {
        "key": "bonus_reset_time_roshan",
        "value": [
          10
        ]
      },
      {
        "key": "damage_per_stack",
        "value": [
          15,
          20,
          25,
          30
        ],
        "talent": "special_bonus_unique_ursa"
      }
    ]
  },
  "ursa_enrage": {
    "id": 5360,
    "name": "ursa_enrage",
    "type": 1,
    "behavior": 2052,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        50,
        40,
        30
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "enrage_multiplier",
        "value": [
          1.5,
          1.75,
          2
        ]
      },
      {
        "key": "damage_reduction",
        "value": [
          80
        ]
      },
      {
        "key": "duration",
        "value": [
          4
        ],
        "talent": "special_bonus_unique_ursa_3"
      },
      {
        "key": "cooldown_scepter",
        "value": [
          30,
          24,
          18
        ]
      }
    ]
  },
  "gyrocopter_rocket_barrage": {
    "id": 5361,
    "name": "gyrocopter_rocket_barrage",
    "type": 0,
    "behavior": 2052,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        7,
        6.5,
        6,
        5.5
      ],
      "duration": [
        3,
        3,
        3,
        3
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        90,
        90,
        90,
        90
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          400
        ]
      },
      {
        "key": "rockets_per_second",
        "value": [
          10
        ]
      },
      {
        "key": "rocket_damage",
        "value": [
          7,
          12,
          17,
          22
        ],
        "talent": "special_bonus_unique_gyrocopter_3"
      }
    ]
  },
  "gyrocopter_homing_missile": {
    "id": 5362,
    "name": "gyrocopter_homing_missile",
    "type": 0,
    "behavior": 33554440,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 2,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1050
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        26,
        21,
        16,
        11
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        100,
        175,
        250,
        325
      ],
      "manaCost": [
        120,
        130,
        140,
        150
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "hits_to_kill_tooltip",
        "value": [
          3
        ]
      },
      {
        "key": "tower_hits_to_kill_tooltip",
        "value": [
          6
        ]
      },
      {
        "key": "stun_duration",
        "value": [
          2.25,
          2.5,
          2.75,
          3
        ],
        "talent": "special_bonus_unique_gyrocopter_6"
      },
      {
        "key": "attack_speed_bonus_pct",
        "value": [
          400,
          400,
          400,
          400
        ]
      },
      {
        "key": "min_damage",
        "value": [
          50
        ]
      },
      {
        "key": "max_distance",
        "value": [
          1500
        ]
      },
      {
        "key": "pre_flight_time",
        "value": [
          3
        ]
      },
      {
        "key": "hero_damage",
        "value": [
          34
        ]
      },
      {
        "key": "speed",
        "value": [
          500
        ]
      },
      {
        "key": "acceleration",
        "value": [
          20
        ]
      },
      {
        "key": "enemy_vision_time",
        "value": [
          4
        ]
      },
      {
        "key": "charge_restore_time",
        "value": [
          26,
          21,
          16,
          11
        ]
      }
    ]
  },
  "gyrocopter_flak_cannon": {
    "id": 5363,
    "name": "gyrocopter_flak_cannon",
    "type": 0,
    "behavior": 2052,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 1,
    "damageType": 2,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        40
      ],
      "duration": [
        15,
        15,
        15,
        15
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        50,
        50,
        50,
        50
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          1250
        ]
      },
      {
        "key": "max_attacks",
        "value": [
          3,
          4,
          5,
          6
        ],
        "talent": "special_bonus_unique_gyrocopter_2"
      },
      {
        "key": "projectile_speed",
        "value": [
          800
        ]
      },
      {
        "key": "fire_rate",
        "value": [
          1.1
        ]
      },
      {
        "key": "scepter_radius",
        "value": [
          600
        ]
      }
    ]
  },
  "gyrocopter_call_down": {
    "id": 5364,
    "name": "gyrocopter_call_down",
    "type": 1,
    "behavior": 48,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        1000
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        55,
        50,
        45
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        125,
        125,
        125
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "slow_duration_first",
        "value": [
          2
        ]
      },
      {
        "key": "slow_duration_second",
        "value": [
          4
        ]
      },
      {
        "key": "damage_first",
        "value": [
          150,
          250,
          350
        ]
      },
      {
        "key": "damage_second",
        "value": [
          100,
          150,
          200
        ]
      },
      {
        "key": "slow_first",
        "value": [
          30
        ]
      },
      {
        "key": "slow_second",
        "value": [
          60
        ]
      },
      {
        "key": "radius",
        "value": [
          600
        ]
      },
      {
        "key": "range_scepter",
        "value": [
          0
        ]
      },
      {
        "key": "damage_second_scepter",
        "value": [
          175,
          225,
          275
        ]
      }
    ]
  },
  "alchemist_acid_spray": {
    "id": 5365,
    "name": "alchemist_acid_spray",
    "type": 0,
    "behavior": 48,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 2,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        900
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.2
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        22
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        130,
        140,
        150,
        160
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          400,
          475,
          550,
          625
        ]
      },
      {
        "key": "duration",
        "value": [
          16
        ]
      },
      {
        "key": "damage",
        "value": [
          15,
          20,
          25,
          30
        ]
      },
      {
        "key": "armor_reduction",
        "value": [
          4,
          5,
          6,
          7
        ],
        "talent": "special_bonus_unique_alchemist_5"
      },
      {
        "key": "tick_rate",
        "value": [
          1
        ]
      }
    ]
  },
  "alchemist_unstable_concoction": {
    "id": 5366,
    "name": "alchemist_unstable_concoction",
    "type": 0,
    "behavior": 2052,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 2,
    "damageType": 2,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        775
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        22,
        20,
        18,
        16
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        120
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "brew_time",
        "value": [
          5
        ]
      },
      {
        "key": "brew_explosion",
        "value": [
          5.5
        ]
      },
      {
        "key": "min_stun",
        "value": [
          0.25
        ]
      },
      {
        "key": "max_stun",
        "value": [
          1.75,
          2.5,
          3.25,
          4
        ]
      },
      {
        "key": "min_damage",
        "value": [
          0
        ]
      },
      {
        "key": "max_damage",
        "value": [
          160,
          240,
          320,
          400
        ],
        "talent": "special_bonus_unique_alchemist_2"
      },
      {
        "key": "radius",
        "value": [
          200
        ]
      }
    ]
  },
  "alchemist_unstable_concoction_throw": {
    "id": 5367,
    "name": "alchemist_unstable_concoction_throw",
    "type": 0,
    "behavior": 41,
    "targetTeam": 2,
    "targetType": 64,
    "targetFlag": 1024,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        775
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.2
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 120
    },
    "special": [
      {
        "key": "brew_time",
        "value": [
          5
        ]
      },
      {
        "key": "min_stun",
        "value": [
          0.25
        ]
      },
      {
        "key": "max_stun",
        "value": [
          1.75,
          2.5,
          3.25,
          4
        ]
      },
      {
        "key": "min_damage",
        "value": [
          0
        ]
      },
      {
        "key": "max_damage",
        "value": [
          150,
          220,
          290,
          360
        ]
      },
      {
        "key": "movement_speed",
        "value": [
          900
        ]
      },
      {
        "key": "vision_range",
        "value": [
          300
        ]
      },
      {
        "key": "midair_explosion_radius",
        "value": [
          200
        ]
      },
      {
        "key": "brew_explosion",
        "value": [
          7
        ]
      }
    ]
  },
  "alchemist_goblins_greed": {
    "id": 5368,
    "name": "alchemist_goblins_greed",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          40
        ]
      },
      {
        "key": "bonus_gold",
        "value": [
          4
        ]
      },
      {
        "key": "bonus_bonus_gold",
        "value": [
          4
        ]
      },
      {
        "key": "bonus_gold_cap",
        "value": [
          20,
          24,
          28,
          32
        ]
      },
      {
        "key": "bounty_multiplier",
        "value": [
          2,
          2.5,
          3,
          3.5
        ]
      }
    ]
  },
  "alchemist_chemical_rage": {
    "id": 5369,
    "name": "alchemist_chemical_rage",
    "type": 1,
    "behavior": 4,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        55
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        50,
        100,
        150
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          25
        ]
      },
      {
        "key": "transformation_time",
        "value": [
          0.35
        ]
      },
      {
        "key": "base_attack_time",
        "value": [
          1.3,
          1.15,
          1
        ],
        "talent": "special_bonus_unique_alchemist_3"
      },
      {
        "key": "bonus_health",
        "value": [
          0
        ]
      },
      {
        "key": "bonus_health_regen",
        "value": [
          40,
          55,
          70
        ],
        "talent": "special_bonus_unique_alchemist_4"
      },
      {
        "key": "bonus_mana_regen",
        "value": [
          3,
          7.5,
          12
        ]
      },
      {
        "key": "bonus_movespeed",
        "value": [
          40,
          50,
          60
        ]
      }
    ]
  },
  "invoker_quas": {
    "id": 5370,
    "name": "invoker_quas",
    "type": 0,
    "behavior": 2052,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 7,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "health_regen_per_instance",
        "value": [
          1,
          3,
          5,
          7,
          9,
          11,
          13
        ]
      }
    ]
  },
  "invoker_wex": {
    "id": 5371,
    "name": "invoker_wex",
    "type": 0,
    "behavior": 2052,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 7,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "attack_speed_per_instance",
        "value": [
          2,
          4,
          6,
          8,
          10,
          12,
          14
        ]
      },
      {
        "key": "move_speed_per_instance",
        "value": [
          1,
          2,
          3,
          4,
          5,
          6,
          7
        ]
      }
    ]
  },
  "invoker_exort": {
    "id": 5372,
    "name": "invoker_exort",
    "type": 0,
    "behavior": 2052,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 7,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "bonus_damage_per_instance",
        "value": [
          4,
          8,
          12,
          16,
          20,
          24,
          28
        ]
      }
    ]
  },
  "invoker_empty1": {
    "id": 5373,
    "name": "invoker_empty1",
    "type": 0,
    "behavior": 66,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": []
  },
  "invoker_empty2": {
    "id": 5374,
    "name": "invoker_empty2",
    "type": 0,
    "behavior": 66,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": []
  },
  "invoker_invoke": {
    "id": 5375,
    "name": "invoker_invoke",
    "type": 1,
    "behavior": 268437508,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 1,
    "requiredLevel": 1,
    "fightRecapLevel": 0,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        6
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "max_invoked_spells",
        "value": [
          2
        ]
      },
      {
        "key": "cooldown_scepter",
        "value": [
          2
        ]
      },
      {
        "key": "mana_cost_scepter",
        "value": [
          0
        ]
      }
    ]
  },
  "invoker_cold_snap": {
    "id": 5376,
    "name": "invoker_cold_snap",
    "type": 0,
    "behavior": 301989961,
    "hotKeyOverride": "Y",
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 1,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1000
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.05
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        20
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100
      ],
      "modifierSupportValue": 0.15,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          3,
          3.5,
          4,
          4.5,
          5,
          5.5,
          6,
          6.5
        ],
        "talent": "special_bonus_unique_invoker_7"
      },
      {
        "key": "freeze_duration",
        "value": [
          0.4
        ]
      },
      {
        "key": "freeze_cooldown",
        "value": [
          0.77,
          0.74,
          0.71,
          0.69,
          0.66,
          0.63,
          0.6,
          0.57
        ]
      },
      {
        "key": "freeze_damage",
        "value": [
          7,
          14,
          21,
          28,
          35,
          42,
          49,
          56
        ]
      },
      {
        "key": "damage_trigger",
        "value": [
          10
        ]
      }
    ]
  },
  "invoker_ghost_walk": {
    "id": 5381,
    "name": "invoker_ghost_walk",
    "type": 0,
    "behavior": 269486149,
    "hotKeyOverride": "V",
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 1,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.05
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        45
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        200
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          100
        ]
      },
      {
        "key": "area_of_effect",
        "value": [
          400
        ]
      },
      {
        "key": "enemy_slow",
        "value": [
          -20,
          -25,
          -30,
          -35,
          -40,
          -45,
          -50,
          -55
        ]
      },
      {
        "key": "self_slow",
        "value": [
          -30,
          -20,
          -10,
          0,
          10,
          20,
          30,
          40
        ]
      },
      {
        "key": "aura_fade_time",
        "value": [
          2
        ]
      }
    ]
  },
  "invoker_tornado": {
    "id": 5382,
    "name": "invoker_tornado",
    "type": 0,
    "behavior": 301989969,
    "hotKeyOverride": "X",
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 1,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        2000
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.05
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        30
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        150
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "travel_distance",
        "value": [
          800,
          1200,
          1600,
          2000,
          2400,
          2800,
          3200,
          3600
        ]
      },
      {
        "key": "travel_speed",
        "value": [
          1000
        ]
      },
      {
        "key": "area_of_effect",
        "value": [
          200
        ]
      },
      {
        "key": "vision_distance",
        "value": [
          200
        ]
      },
      {
        "key": "end_vision_duration",
        "value": [
          1.75
        ]
      },
      {
        "key": "lift_duration",
        "value": [
          0.8,
          1.1,
          1.4,
          1.7,
          2,
          2.3,
          2.6,
          2.9
        ],
        "talent": "special_bonus_unique_invoker_8"
      },
      {
        "key": "base_damage",
        "value": [
          70
        ]
      },
      {
        "key": "quas_damage",
        "value": [
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "key": "wex_damage",
        "value": [
          45,
          90,
          135,
          180,
          225,
          270,
          315,
          360
        ]
      }
    ]
  },
  "invoker_emp": {
    "id": 5383,
    "name": "invoker_emp",
    "type": 0,
    "behavior": 301990001,
    "hotKeyOverride": "C",
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 1,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        950
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.05
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        30
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        125
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "delay",
        "value": [
          2.9
        ]
      },
      {
        "key": "area_of_effect",
        "value": [
          675
        ]
      },
      {
        "key": "mana_burned",
        "value": [
          100,
          175,
          250,
          325,
          400,
          475,
          550,
          625
        ]
      },
      {
        "key": "damage_per_mana_pct",
        "value": [
          60
        ]
      }
    ]
  },
  "invoker_alacrity": {
    "id": 5384,
    "name": "invoker_alacrity",
    "type": 0,
    "behavior": 310378569,
    "hotKeyOverride": "Z",
    "targetTeam": 1,
    "targetType": 80,
    "targetFlag": 0,
    "spellImmunityType": 3,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 1,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        650
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.05
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        17
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        60
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "bonus_attack_speed",
        "value": [
          10,
          25,
          40,
          55,
          70,
          85,
          100,
          115
        ],
        "talent": "special_bonus_unique_invoker_5"
      },
      {
        "key": "bonus_damage",
        "value": [
          10,
          25,
          40,
          55,
          70,
          85,
          100,
          115
        ],
        "talent": "special_bonus_unique_invoker_5"
      },
      {
        "key": "duration",
        "value": [
          9
        ]
      }
    ]
  },
  "invoker_chaos_meteor": {
    "id": 5385,
    "name": "invoker_chaos_meteor",
    "type": 0,
    "behavior": 301989969,
    "hotKeyOverride": "D",
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 1,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        700
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.05
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        55
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        200
      ],
      "modifierSupportValue": 0,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "land_time",
        "value": [
          1.3
        ]
      },
      {
        "key": "area_of_effect",
        "value": [
          275
        ]
      },
      {
        "key": "travel_distance",
        "value": [
          465,
          615,
          780,
          930,
          1095,
          1245,
          1410,
          1575
        ]
      },
      {
        "key": "travel_speed",
        "value": [
          300
        ]
      },
      {
        "key": "damage_interval",
        "value": [
          0.5
        ]
      },
      {
        "key": "vision_distance",
        "value": [
          500
        ]
      },
      {
        "key": "end_vision_duration",
        "value": [
          3
        ]
      },
      {
        "key": "main_damage",
        "value": [
          57.5,
          75,
          92.5,
          110,
          127.5,
          145,
          162.5,
          180
        ],
        "talent": "special_bonus_unique_invoker_6"
      },
      {
        "key": "burn_duration",
        "value": [
          3
        ]
      },
      {
        "key": "burn_dps",
        "value": [
          11.5,
          15,
          18.5,
          22,
          25.5,
          29,
          32.5,
          36
        ]
      }
    ]
  },
  "invoker_sun_strike": {
    "id": 5386,
    "name": "invoker_sun_strike",
    "type": 0,
    "behavior": 301990001,
    "hotKeyOverride": "T",
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 1,
    "maxLevel": 1,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.05
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        25
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        175
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "delay",
        "value": [
          1.7
        ]
      },
      {
        "key": "area_of_effect",
        "value": [
          175
        ]
      },
      {
        "key": "damage",
        "value": [
          100,
          162.5,
          225,
          287.5,
          350,
          412.5,
          475,
          537.5
        ]
      },
      {
        "key": "vision_distance",
        "value": [
          400
        ]
      },
      {
        "key": "vision_duration",
        "value": [
          4
        ]
      }
    ]
  },
  "invoker_forge_spirit": {
    "id": 5387,
    "name": "invoker_forge_spirit",
    "type": 0,
    "behavior": 301989957,
    "hotKeyOverride": "F",
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 1,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.05
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        30
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        75
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "spirit_damage",
        "value": [
          22,
          32,
          42,
          52,
          62,
          72,
          82,
          92
        ]
      },
      {
        "key": "spirit_mana",
        "value": [
          100,
          150,
          200,
          250,
          300,
          350,
          400,
          450
        ]
      },
      {
        "key": "spirit_armor",
        "value": [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7
        ]
      },
      {
        "key": "spirit_attack_range",
        "value": [
          300,
          365,
          430,
          495,
          560,
          625,
          690,
          755
        ]
      },
      {
        "key": "spirit_hp",
        "value": [
          300,
          400,
          500,
          600,
          700,
          800,
          900,
          1000
        ]
      },
      {
        "key": "spirit_duration",
        "value": [
          20,
          30,
          40,
          50,
          60,
          70,
          80,
          90
        ]
      }
    ]
  },
  "invoker_ice_wall": {
    "id": 5389,
    "name": "invoker_ice_wall",
    "type": 0,
    "behavior": 301989957,
    "hotKeyOverride": "G",
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 1,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.05
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        25
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        175
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          3,
          4.5,
          6,
          7.5,
          9,
          10.5,
          12,
          13.5
        ]
      },
      {
        "key": "slow",
        "value": [
          -20,
          -40,
          -60,
          -80,
          -100,
          -120,
          -140,
          -160
        ]
      },
      {
        "key": "slow_duration",
        "value": [
          2
        ]
      },
      {
        "key": "damage_per_second",
        "value": [
          6,
          12,
          18,
          24,
          30,
          36,
          42,
          48
        ]
      },
      {
        "key": "wall_place_distance",
        "value": [
          200
        ]
      },
      {
        "key": "num_wall_elements",
        "value": [
          15
        ]
      },
      {
        "key": "wall_element_spacing",
        "value": [
          80
        ]
      },
      {
        "key": "wall_element_radius",
        "value": [
          105
        ]
      }
    ]
  },
  "invoker_deafening_blast": {
    "id": 5390,
    "name": "invoker_deafening_blast",
    "type": 0,
    "behavior": 301989969,
    "hotKeyOverride": "B",
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 1,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1000
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.05
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        40
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        300
      ],
      "modifierSupportValue": 0.5,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "travel_distance",
        "value": [
          1000
        ]
      },
      {
        "key": "travel_speed",
        "value": [
          1100
        ]
      },
      {
        "key": "radius_start",
        "value": [
          175
        ]
      },
      {
        "key": "radius_end",
        "value": [
          225
        ]
      },
      {
        "key": "end_vision_duration",
        "value": [
          1.75
        ]
      },
      {
        "key": "damage",
        "value": [
          40,
          80,
          120,
          160,
          200,
          240,
          280,
          320
        ]
      },
      {
        "key": "knockback_duration",
        "value": [
          0.25,
          0.5,
          0.75,
          1,
          1.25,
          1.5,
          1.75,
          2
        ]
      },
      {
        "key": "disarm_duration",
        "value": [
          1.25,
          2,
          2.75,
          3.5,
          4.25,
          5,
          5.75,
          6.5
        ]
      }
    ]
  },
  "silencer_curse_of_the_silent": {
    "id": 5377,
    "name": "silencer_curse_of_the_silent",
    "type": 0,
    "behavior": 48,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1000
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        20,
        18,
        16,
        14
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        105,
        115,
        125,
        135
      ],
      "modifierSupportValue": 0.5,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "damage",
        "value": [
          16,
          24,
          32,
          40
        ],
        "talent": "special_bonus_unique_silencer"
      },
      {
        "key": "radius",
        "value": [
          425
        ]
      },
      {
        "key": "duration",
        "value": [
          6
        ]
      },
      {
        "key": "penalty_duration",
        "value": [
          5
        ]
      },
      {
        "key": "movespeed",
        "value": [
          -9,
          -12,
          -15,
          -18
        ]
      }
    ]
  },
  "silencer_glaives_of_wisdom": {
    "id": 5378,
    "name": "silencer_glaives_of_wisdom",
    "type": 0,
    "behavior": 36872,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 1,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        600
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        15,
        15,
        15,
        15
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "intellect_damage_pct",
        "value": [
          25,
          40,
          55,
          70
        ],
        "talent": "special_bonus_unique_silencer_3"
      },
      {
        "key": "steal_range",
        "value": [
          925
        ]
      }
    ]
  },
  "silencer_last_word": {
    "id": 5379,
    "name": "silencer_last_word",
    "type": 0,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        900
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        28,
        22,
        16,
        10
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        115
      ],
      "modifierSupportValue": 0.3,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "damage",
        "value": [
          150,
          200,
          250,
          300
        ]
      },
      {
        "key": "debuff_duration",
        "value": [
          4
        ]
      },
      {
        "key": "duration",
        "value": [
          3,
          4,
          5,
          6
        ]
      }
    ]
  },
  "silencer_global_silence": {
    "id": 5380,
    "name": "silencer_global_silence",
    "type": 1,
    "behavior": 4,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        130
      ],
      "duration": [
        4.5,
        5.25,
        6
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        250,
        375,
        500
      ],
      "modifierSupportValue": 0.5,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "tooltip_duration",
        "value": [
          4.5,
          5.25,
          6
        ],
        "talent": "special_bonus_unique_silencer_4"
      }
    ]
  },
  "obsidian_destroyer_arcane_orb": {
    "id": 5391,
    "name": "obsidian_destroyer_arcane_orb",
    "type": 0,
    "behavior": 36872,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 256,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 1,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        450
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        110,
        140,
        170,
        200
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "mana_pool_damage_pct",
        "value": [
          6,
          7,
          8,
          9
        ]
      },
      {
        "key": "illusion_damage",
        "value": [
          100,
          200,
          300,
          400
        ]
      },
      {
        "key": "int_steal",
        "value": [
          1,
          2,
          3,
          4
        ]
      },
      {
        "key": "int_steal_duration",
        "value": [
          80
        ],
        "talent": "special_bonus_unique_outworld_devourer"
      }
    ]
  },
  "obsidian_destroyer_astral_imprisonment": {
    "id": 5392,
    "name": "obsidian_destroyer_astral_imprisonment",
    "type": 0,
    "behavior": 8388616,
    "targetTeam": 3,
    "targetType": 65,
    "targetFlag": 8192,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        225,
        300,
        375,
        450
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.25,
        0.25,
        0.25,
        0.25
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        22,
        18,
        14,
        10
      ],
      "duration": [
        4
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        140,
        160,
        180,
        200
      ],
      "modifierSupportValue": 0.5,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "prison_duration",
        "value": [
          4
        ]
      },
      {
        "key": "radius",
        "value": [
          400
        ]
      },
      {
        "key": "damage",
        "value": [
          100,
          175,
          250,
          325
        ]
      },
      {
        "key": "cast_range_tooltip",
        "value": [
          225,
          300,
          375,
          450
        ]
      },
      {
        "key": "max_charges_scepter",
        "value": [
          2
        ]
      },
      {
        "key": "charge_restore_time_scepter",
        "value": [
          12
        ]
      },
      {
        "key": "scepter_range_bonus",
        "value": [
          300
        ]
      }
    ]
  },
  "obsidian_destroyer_essence_aura": {
    "id": 5393,
    "name": "obsidian_destroyer_essence_aura",
    "type": 0,
    "behavior": 16386,
    "targetTeam": 1,
    "targetType": 64,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          900
        ]
      },
      {
        "key": "bonus_mana",
        "value": [
          150,
          250,
          350,
          450
        ]
      },
      {
        "key": "restore_amount",
        "value": [
          10,
          15,
          20,
          25
        ]
      },
      {
        "key": "restore_chance",
        "value": [
          40
        ],
        "talent": "special_bonus_unique_outworld_devourer_2"
      },
      {
        "key": "intelligence_bonus",
        "value": [
          4
        ]
      },
      {
        "key": "intelligence_duration",
        "value": [
          30
        ]
      }
    ]
  },
  "obsidian_destroyer_sanity_eclipse": {
    "id": 5394,
    "name": "obsidian_destroyer_sanity_eclipse",
    "type": 1,
    "behavior": 48,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        700
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.25,
        0.25,
        0.25
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        160
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        175,
        250,
        325
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "damage_multiplier",
        "value": [
          9,
          10,
          11
        ],
        "talent": "special_bonus_unique_outworld_devourer_3"
      },
      {
        "key": "mana_drain",
        "value": [
          40
        ]
      },
      {
        "key": "radius",
        "value": [
          375,
          475,
          575
        ]
      },
      {
        "key": "cast_range",
        "value": [
          700
        ]
      }
    ]
  },
  "lycan_summon_wolves": {
    "id": 5395,
    "name": "lycan_summon_wolves",
    "type": 0,
    "behavior": 4,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        30,
        30,
        30,
        30
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        145
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "wolf_index",
        "value": [
          1,
          2,
          3,
          4
        ]
      },
      {
        "key": "wolf_duration",
        "value": [
          55,
          55,
          55,
          55
        ]
      },
      {
        "key": "wolf_bat",
        "value": [
          1.25,
          1.2,
          1.15,
          1.1
        ]
      },
      {
        "key": "wolf_damage",
        "value": [
          18,
          29,
          37,
          46
        ]
      },
      {
        "key": "wolf_hp",
        "value": [
          230,
          260,
          290,
          320
        ]
      },
      {
        "key": "bash_chance",
        "value": [
          15
        ]
      },
      {
        "key": "bash_duration",
        "value": [
          1
        ]
      },
      {
        "key": "tooltip_wolf_count",
        "value": [
          2,
          2,
          2,
          2
        ],
        "talent": "special_bonus_unique_lycan_2"
      }
    ]
  },
  "lycan_howl": {
    "id": 5396,
    "name": "lycan_howl",
    "type": 0,
    "behavior": 33554436,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        60,
        55,
        50,
        45
      ],
      "duration": [
        13
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        40
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 5
    },
    "special": [
      {
        "key": "howl_duration",
        "value": [
          13
        ]
      },
      {
        "key": "hero_bonus_damage",
        "value": [
          10,
          15,
          20,
          25
        ]
      },
      {
        "key": "unit_bonus_damage",
        "value": [
          4,
          6,
          8,
          10
        ]
      },
      {
        "key": "hero_bonus_hp",
        "value": [
          50,
          100,
          150,
          200
        ],
        "talent": "special_bonus_unique_lycan_5"
      },
      {
        "key": "unit_bonus_hp",
        "value": [
          25,
          50,
          75,
          100
        ]
      }
    ]
  },
  "lycan_feral_impulse": {
    "id": 5397,
    "name": "lycan_feral_impulse",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          900,
          900,
          900,
          900
        ]
      },
      {
        "key": "bonus_damage",
        "value": [
          12,
          24,
          36,
          48
        ],
        "talent": "special_bonus_unique_lycan_4"
      },
      {
        "key": "bonus_hp_regen",
        "value": [
          1,
          3,
          5,
          7
        ],
        "talent": "special_bonus_unique_lycan_3"
      }
    ]
  },
  "lycan_shapeshift": {
    "id": 5398,
    "name": "lycan_shapeshift",
    "type": 1,
    "behavior": 4,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        130,
        105,
        80
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100,
        100,
        100
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          18
        ],
        "talent": "special_bonus_unique_lycan_1"
      },
      {
        "key": "speed",
        "value": [
          650
        ]
      },
      {
        "key": "bonus_night_vision",
        "value": [
          1000
        ]
      },
      {
        "key": "transformation_time",
        "value": [
          1.5
        ]
      },
      {
        "key": "crit_chance",
        "value": [
          40
        ]
      },
      {
        "key": "crit_multiplier",
        "value": [
          150,
          175,
          200
        ]
      }
    ]
  },
  "lone_druid_spirit_bear": {
    "id": 5412,
    "name": "lone_druid_spirit_bear",
    "type": 0,
    "behavior": 4,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.5,
        0.5,
        0.5,
        0.5
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        120
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        75,
        75,
        75,
        75
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "bear_hp",
        "value": [
          1500,
          2000,
          2500,
          3000
        ]
      },
      {
        "key": "bear_regen_tooltip",
        "value": [
          4,
          5,
          6,
          7
        ]
      },
      {
        "key": "bear_bat",
        "value": [
          1.75,
          1.65,
          1.55,
          1.45
        ]
      },
      {
        "key": "bear_armor",
        "value": [
          3,
          4,
          5,
          6
        ],
        "talent": "special_bonus_unique_lone_druid_2"
      },
      {
        "key": "backlash_damage",
        "value": [
          10
        ]
      },
      {
        "key": "cooldown_scepter",
        "value": [
          120
        ]
      }
    ]
  },
  "lone_druid_rabid": {
    "id": 5413,
    "name": "lone_druid_rabid",
    "type": 0,
    "behavior": 2052,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.5,
        0.5,
        0.5,
        0.5
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        35
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        50,
        50,
        50,
        50
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "bonus_attack_speed",
        "value": [
          20,
          30,
          40,
          50
        ],
        "talent": "special_bonus_unique_lone_druid_6"
      },
      {
        "key": "bonus_move_speed",
        "value": [
          10,
          15,
          20,
          25
        ]
      },
      {
        "key": "rabid_duration",
        "value": [
          25
        ]
      }
    ]
  },
  "lone_druid_savage_roar": {
    "id": 5414,
    "name": "lone_druid_savage_roar",
    "type": 0,
    "behavior": 4,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.1
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        38,
        32,
        26,
        20
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        50
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          325
        ]
      },
      {
        "key": "bonus_speed",
        "value": [
          20
        ]
      },
      {
        "key": "duration",
        "value": [
          1.2,
          1.6,
          2,
          2.4
        ]
      }
    ]
  },
  "lone_druid_true_form": {
    "id": 5415,
    "name": "lone_druid_true_form",
    "type": 1,
    "behavior": 4,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        25,
        25,
        25
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "base_attack_time",
        "value": [
          1.5,
          1.5,
          1.5
        ]
      },
      {
        "key": "bonus_armor",
        "value": [
          4,
          6,
          8
        ]
      },
      {
        "key": "bonus_hp",
        "value": [
          300,
          600,
          900
        ]
      },
      {
        "key": "speed_loss",
        "value": [
          45
        ]
      },
      {
        "key": "transformation_time",
        "value": [
          1.933
        ]
      }
    ]
  },
  "lone_druid_true_form_druid": {
    "id": 5416,
    "name": "lone_druid_true_form_druid",
    "type": 1,
    "behavior": 268435461,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        25,
        25,
        25
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "transformation_time",
        "value": [
          0.8
        ]
      }
    ]
  },
  "lone_druid_true_form_battle_cry": {
    "id": 5417,
    "name": "lone_druid_true_form_battle_cry",
    "type": 0,
    "behavior": 268435525,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 3,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.5,
        0.5,
        0.5
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        45
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        50,
        50,
        50
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "bonus_damage",
        "value": [
          70,
          100,
          130
        ]
      },
      {
        "key": "bonus_armor",
        "value": [
          10,
          15,
          20
        ]
      },
      {
        "key": "cry_duration",
        "value": [
          5
        ]
      },
      {
        "key": "range",
        "value": [
          1000
        ]
      }
    ]
  },
  "brewmaster_thunder_clap": {
    "id": 5400,
    "name": "brewmaster_thunder_clap",
    "type": 0,
    "behavior": 4,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.4,
        0.4,
        0.4
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        13
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        90,
        105,
        130,
        150
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          400,
          400,
          400,
          400
        ]
      },
      {
        "key": "damage",
        "value": [
          100,
          175,
          250,
          300
        ]
      },
      {
        "key": "movement_slow",
        "value": [
          25,
          35,
          45,
          55
        ]
      },
      {
        "key": "attack_speed_slow",
        "value": [
          25,
          35,
          45,
          55
        ]
      },
      {
        "key": "duration",
        "value": [
          4
        ],
        "talent": "special_bonus_unique_brewmaster_3"
      },
      {
        "key": "duration_creeps",
        "value": [
          8,
          8,
          8,
          8
        ],
        "talent": "special_bonus_unique_brewmaster_3"
      }
    ]
  },
  "brewmaster_drunken_haze": {
    "id": 5401,
    "name": "brewmaster_drunken_haze",
    "type": 0,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 80,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        850,
        850,
        850,
        850
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.2
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        11,
        9,
        7,
        5
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        25
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          4.5
        ]
      },
      {
        "key": "movement_slow",
        "value": [
          10,
          20,
          30,
          40
        ]
      },
      {
        "key": "miss_chance",
        "value": [
          70
        ]
      }
    ]
  },
  "brewmaster_drunken_brawler": {
    "id": 5402,
    "name": "brewmaster_drunken_brawler",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "dodge_chance",
        "value": [
          10,
          15,
          20,
          25
        ],
        "talent": "special_bonus_unique_brewmaster_4"
      },
      {
        "key": "crit_chance",
        "value": [
          10,
          15,
          20,
          25
        ],
        "talent": "special_bonus_unique_brewmaster_4"
      },
      {
        "key": "crit_multiplier",
        "value": [
          230
        ]
      },
      {
        "key": "last_proc",
        "value": [
          13,
          12,
          11,
          10
        ]
      }
    ]
  },
  "brewmaster_primal_split": {
    "id": 5403,
    "name": "brewmaster_primal_split",
    "type": 1,
    "behavior": 4,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.65
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        140,
        120,
        100
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        125,
        150,
        175
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          16,
          18,
          20
        ]
      },
      {
        "key": "split_duration",
        "value": [
          0.6
        ]
      }
    ]
  },
  "shadow_demon_disruption": {
    "id": 5421,
    "name": "shadow_demon_disruption",
    "type": 0,
    "behavior": 8388616,
    "targetTeam": 3,
    "targetType": 64,
    "targetFlag": 9216,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        600
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        27,
        24,
        21,
        18
      ],
      "duration": [
        2.5,
        2.5,
        2.5,
        2.5
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        120,
        120,
        120,
        120
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "disruption_duration",
        "value": [
          2.5,
          2.5,
          2.5,
          2.5
        ],
        "talent": "special_bonus_unique_shadow_demon_5"
      },
      {
        "key": "illusion_duration",
        "value": [
          8,
          10,
          12,
          14
        ]
      },
      {
        "key": "illusion_outgoing_damage",
        "value": [
          -70,
          -55,
          -40,
          -25
        ]
      },
      {
        "key": "illusion_outgoing_tooltip",
        "value": [
          30,
          45,
          60,
          75
        ]
      },
      {
        "key": "illusion_incoming_damage",
        "value": [
          200
        ]
      },
      {
        "key": "tooltip_total_illusion_incoming_damage",
        "value": [
          300
        ]
      },
      {
        "key": "charge_restore_time",
        "value": [
          27,
          24,
          21,
          18
        ]
      }
    ]
  },
  "shadow_demon_soul_catcher": {
    "id": 5422,
    "name": "shadow_demon_soul_catcher",
    "type": 0,
    "behavior": 33554480,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 1,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        600
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        13,
        12,
        11,
        10
      ],
      "duration": [
        12,
        12,
        12,
        12
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        50,
        60,
        70,
        80
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "bonus_damage_taken",
        "value": [
          20,
          30,
          40,
          50
        ]
      },
      {
        "key": "radius",
        "value": [
          450,
          450,
          450,
          450
        ]
      },
      {
        "key": "tooltip_duration",
        "value": [
          12,
          12,
          12,
          12
        ]
      },
      {
        "key": "illusion_outgoing_damage",
        "value": [
          -70,
          -55,
          -40,
          -25
        ]
      },
      {
        "key": "illusion_outgoing_damage_tooltip",
        "value": [
          30,
          45,
          60,
          75
        ]
      },
      {
        "key": "illusion_incoming_damage",
        "value": [
          100
        ]
      },
      {
        "key": "illusion_incoming_damage_tooltip",
        "value": [
          200
        ]
      }
    ]
  },
  "shadow_demon_shadow_poison": {
    "id": 5423,
    "name": "shadow_demon_shadow_poison",
    "type": 0,
    "behavior": 33554480,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1500
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.25
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        2.5
      ],
      "duration": [
        10
      ],
      "sharedCooldown": "0",
      "damage": [
        26,
        34,
        42,
        50
      ],
      "manaCost": [
        50
      ],
      "modifierSupportValue": 0,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "stack_damage",
        "value": [
          20,
          35,
          50,
          65
        ]
      },
      {
        "key": "max_multiply_stacks",
        "value": [
          5
        ]
      },
      {
        "key": "bonus_stack_damage",
        "value": [
          50
        ]
      },
      {
        "key": "radius",
        "value": [
          200
        ]
      },
      {
        "key": "speed",
        "value": [
          1000,
          1000,
          1000,
          1000
        ]
      },
      {
        "key": "tooltip_duration",
        "value": [
          10
        ]
      }
    ]
  },
  "shadow_demon_shadow_poison_release": {
    "id": 5424,
    "name": "shadow_demon_shadow_poison_release",
    "type": 0,
    "behavior": 33554500,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 1,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        1
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": []
  },
  "shadow_demon_demonic_purge": {
    "id": 5425,
    "name": "shadow_demon_demonic_purge",
    "type": 1,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 24,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        800
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        60
      ],
      "duration": [
        7
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        200,
        200,
        200
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "purge_damage",
        "value": [
          200,
          300,
          400
        ],
        "talent": "special_bonus_unique_shadow_demon_1"
      },
      {
        "key": "tooltip_duration",
        "value": [
          7
        ]
      },
      {
        "key": "max_charges",
        "value": [
          3
        ]
      },
      {
        "key": "charge_restore_time",
        "value": [
          60
        ]
      },
      {
        "key": "charge_restore_time_tooltip_scepter",
        "value": [
          60
        ]
      }
    ]
  },
  "chaos_knight_chaos_bolt": {
    "id": 5426,
    "name": "chaos_knight_chaos_bolt",
    "type": 0,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 2,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        500
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.4,
        0.4,
        0.4,
        0.4
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        10,
        10,
        10,
        10
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        140,
        140,
        140,
        140
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "chaos_bolt_speed",
        "value": [
          1000
        ]
      },
      {
        "key": "stun_min",
        "value": [
          1,
          1,
          1,
          2
        ]
      },
      {
        "key": "stun_max",
        "value": [
          2,
          3,
          4,
          4
        ],
        "talent": "special_bonus_unique_chaos_knight_3"
      },
      {
        "key": "damage_min",
        "value": [
          75,
          100,
          125,
          150
        ]
      },
      {
        "key": "damage_max",
        "value": [
          200,
          225,
          250,
          275
        ]
      }
    ]
  },
  "chaos_knight_reality_rift": {
    "id": 5427,
    "name": "chaos_knight_reality_rift",
    "type": 0,
    "behavior": 131080,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        550,
        600,
        650,
        700
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        18,
        14,
        10,
        6
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        50
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "cast_range",
        "value": [
          550,
          600,
          650,
          700
        ]
      },
      {
        "key": "armor_reduction",
        "value": [
          -1,
          -3,
          -5,
          -7
        ],
        "talent": "special_bonus_unique_chaos_knight_2"
      },
      {
        "key": "armor_duration",
        "value": [
          8
        ]
      }
    ]
  },
  "chaos_knight_chaos_strike": {
    "id": 5428,
    "name": "chaos_knight_chaos_strike",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "crit_chance",
        "value": [
          12
        ]
      },
      {
        "key": "crit_damage",
        "value": [
          125,
          175,
          225,
          275
        ]
      },
      {
        "key": "lifesteal",
        "value": [
          75
        ]
      }
    ]
  },
  "chaos_knight_phantasm": {
    "id": 5429,
    "name": "chaos_knight_phantasm",
    "type": 1,
    "behavior": 4,
    "targetTeam": 1,
    "targetType": 64,
    "targetFlag": 1024,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        1200
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.4,
        0.4,
        0.4
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        145
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        125,
        200,
        275
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "images_count",
        "value": [
          1,
          2,
          3
        ]
      },
      {
        "key": "extra_phantasm_chance_pct_tooltip",
        "value": [
          50
        ]
      },
      {
        "key": "illusion_duration",
        "value": [
          42
        ]
      },
      {
        "key": "outgoing_damage",
        "value": [
          0,
          0,
          0
        ]
      },
      {
        "key": "outgoing_damage_tooltip",
        "value": [
          100,
          100,
          100
        ]
      },
      {
        "key": "incoming_damage",
        "value": [
          160
        ]
      },
      {
        "key": "incoming_damage_tooltip",
        "value": [
          260
        ]
      },
      {
        "key": "invuln_duration",
        "value": [
          0.5
        ]
      },
      {
        "key": "vision_radius",
        "value": [
          400
        ]
      },
      {
        "key": "cooldown_scepter",
        "value": [
          110
        ]
      }
    ]
  },
  "meepo_earthbind": {
    "id": 5430,
    "name": "meepo_earthbind",
    "type": 0,
    "behavior": 33554480,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        500,
        750,
        1000,
        1250
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        20,
        16,
        12,
        8
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          2
        ]
      },
      {
        "key": "radius",
        "value": [
          220
        ]
      },
      {
        "key": "speed",
        "value": [
          900
        ]
      },
      {
        "key": "tooltip_range",
        "value": [
          500,
          750,
          1000,
          1250
        ],
        "talent": "special_bonus_unique_meepo_4"
      }
    ]
  },
  "meepo_poof": {
    "id": 5431,
    "name": "meepo_poof",
    "type": 0,
    "behavior": 50462744,
    "targetTeam": 1,
    "targetType": 64,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        1.5
      ],
      "channelTime": [
        0
      ],
      "coolDown": [
        12,
        10,
        8,
        6
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        80
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          375
        ]
      },
      {
        "key": "poof_damage",
        "value": [
          80,
          100,
          120,
          140
        ],
        "talent": "special_bonus_unique_meepo_2"
      }
    ]
  },
  "meepo_geostrike": {
    "id": 5432,
    "name": "meepo_geostrike",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        2
      ],
      "sharedCooldown": "0",
      "damage": [
        10,
        20,
        30,
        40
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 5
    },
    "special": [
      {
        "key": "slow",
        "value": [
          -5,
          -10,
          -15,
          -20
        ]
      },
      {
        "key": "duration_tooltip",
        "value": [
          2
        ]
      }
    ]
  },
  "meepo_divided_we_stand": {
    "id": 5433,
    "name": "meepo_divided_we_stand",
    "type": 1,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "levelsBetweenUpgrades": 7,
    "requiredLevel": 3,
    "fightRecapLevel": 0,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "tooltip_clones",
        "value": [
          1,
          2,
          3
        ]
      },
      {
        "key": "tooltip_share_percentage",
        "value": [
          20
        ]
      },
      {
        "key": "tooltip_share_percentage_scepter",
        "value": [
          100
        ]
      },
      {
        "key": "respawn",
        "value": [
          0
        ]
      },
      {
        "key": "tooltip_respawn",
        "value": [
          20
        ]
      }
    ]
  },
  "treant_natures_guise": {
    "id": 5434,
    "name": "treant_natures_guise",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "fade_time",
        "value": [
          7,
          6,
          5,
          3
        ]
      },
      {
        "key": "radius",
        "value": [
          265
        ]
      },
      {
        "key": "bonus_move_speed",
        "value": [
          10,
          18,
          26,
          34
        ]
      },
      {
        "key": "grace_time",
        "value": [
          0.75
        ]
      },
      {
        "key": "bash_duration",
        "value": [
          0.4,
          1,
          1.6,
          2.2
        ],
        "talent": "special_bonus_unique_treant_4"
      }
    ]
  },
  "treant_leech_seed": {
    "id": 5435,
    "name": "treant_leech_seed",
    "type": 0,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        350
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.5,
        0.5,
        0.5,
        0.5
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        16,
        13,
        10,
        7
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100,
        110,
        120,
        130
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "damage_interval",
        "value": [
          0.75
        ]
      },
      {
        "key": "leech_damage",
        "value": [
          15,
          30,
          45,
          60
        ],
        "talent": "special_bonus_unique_treant_2"
      },
      {
        "key": "movement_slow",
        "value": [
          -16,
          -20,
          -24,
          -28
        ]
      },
      {
        "key": "radius",
        "value": [
          500
        ]
      },
      {
        "key": "duration",
        "value": [
          5.25
        ]
      },
      {
        "key": "projectile_speed",
        "value": [
          400
        ]
      }
    ]
  },
  "treant_living_armor": {
    "id": 5436,
    "name": "treant_living_armor",
    "type": 0,
    "behavior": 24,
    "targetTeam": 1,
    "targetType": 69,
    "targetFlag": 0,
    "spellImmunityType": 3,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.5,
        0.5,
        0.5,
        0.5
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        30,
        24,
        18,
        12
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        50
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "damage_count",
        "value": [
          4,
          5,
          6,
          7
        ],
        "talent": "special_bonus_unique_treant"
      },
      {
        "key": "health_regen",
        "value": [
          4,
          8,
          12,
          16
        ]
      },
      {
        "key": "damage_block",
        "value": [
          20,
          40,
          60,
          80
        ]
      },
      {
        "key": "duration",
        "value": [
          15
        ]
      }
    ]
  },
  "treant_overgrowth": {
    "id": 5437,
    "name": "treant_overgrowth",
    "type": 1,
    "behavior": 4,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.5,
        0.5,
        0.5,
        0.5
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        100,
        85,
        70
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        150,
        175,
        200
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          3,
          3.75,
          4.5
        ]
      },
      {
        "key": "radius",
        "value": [
          800
        ],
        "talent": "special_bonus_unique_treant_5"
      },
      {
        "key": "eyes_radius",
        "value": [
          800
        ],
        "talent": "special_bonus_unique_treant_5"
      }
    ]
  },
  "treant_eyes_in_the_forest": {
    "id": 5649,
    "name": "treant_eyes_in_the_forest",
    "type": 0,
    "behavior": 268435465,
    "targetTeam": 0,
    "targetType": 512,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 1,
    "fightRecapLevel": 1,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        160
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.2
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        35
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "vision_aoe",
        "value": [
          800
        ],
        "talent": "special_bonus_unique_treant_5"
      },
      {
        "key": "overgrowth_aoe",
        "value": [
          800
        ],
        "talent": "special_bonus_unique_treant_5"
      },
      {
        "key": "damage",
        "value": [
          175
        ]
      }
    ]
  },
  "ogre_magi_fireblast": {
    "id": 5438,
    "name": "ogre_magi_fireblast",
    "type": 0,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 2,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        475
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.45
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        12
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        75,
        85,
        95,
        105
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "stun_duration",
        "value": [
          1.5
        ]
      },
      {
        "key": "multicast_delay",
        "value": [
          0.5
        ]
      },
      {
        "key": "fireblast_damage",
        "value": [
          60,
          120,
          180,
          240
        ],
        "talent": "special_bonus_unique_ogre_magi_2"
      }
    ]
  },
  "ogre_magi_unrefined_fireblast": {
    "id": 5466,
    "name": "ogre_magi_unrefined_fireblast",
    "type": 0,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 2,
    "damageType": 3,
    "maxLevel": 1,
    "fightRecapLevel": 1,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        475
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.45
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        6
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        400
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "stun_duration",
        "value": [
          1.5
        ]
      },
      {
        "key": "multicast_delay",
        "value": [
          0.5
        ]
      },
      {
        "key": "scepter_mana",
        "value": [
          0.6
        ]
      },
      {
        "key": "fireblast_damage",
        "value": [
          275
        ]
      }
    ]
  },
  "ogre_magi_ignite": {
    "id": 5439,
    "name": "ogre_magi_ignite",
    "type": 0,
    "behavior": 40,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        700
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.45
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        15
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        90
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          5,
          6,
          7,
          8
        ]
      },
      {
        "key": "burn_damage",
        "value": [
          26,
          34,
          42,
          50
        ]
      },
      {
        "key": "slow_movement_speed_pct",
        "value": [
          -20,
          -22,
          -24,
          -26
        ]
      },
      {
        "key": "projectile_speed",
        "value": [
          1000
        ]
      },
      {
        "key": "multicast_delay",
        "value": [
          0.5
        ]
      }
    ]
  },
  "ogre_magi_bloodlust": {
    "id": 5440,
    "name": "ogre_magi_bloodlust",
    "type": 0,
    "behavior": 8392712,
    "targetTeam": 1,
    "targetType": 69,
    "targetFlag": 8,
    "spellImmunityType": 3,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        600
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.45
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        20
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        65
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "modelscale",
        "value": [
          25
        ]
      },
      {
        "key": "bonus_movement_speed",
        "value": [
          10,
          12,
          14,
          16
        ]
      },
      {
        "key": "bonus_attack_speed",
        "value": [
          30,
          40,
          50,
          60
        ],
        "talent": "special_bonus_unique_ogre_magi"
      },
      {
        "key": "self_bonus",
        "value": [
          30,
          50,
          70,
          90
        ],
        "talent": "special_bonus_unique_ogre_magi"
      },
      {
        "key": "duration",
        "value": [
          30
        ]
      }
    ]
  },
  "ogre_magi_multicast": {
    "id": 5441,
    "name": "ogre_magi_multicast",
    "type": 1,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "multicast_2_times",
        "value": [
          0.6,
          0.6,
          0.6
        ]
      },
      {
        "key": "multicast_3_times",
        "value": [
          0,
          0.3,
          0.3
        ]
      },
      {
        "key": "multicast_4_times",
        "value": [
          0,
          0,
          0.15
        ]
      },
      {
        "key": "fireblast_cooldown",
        "value": [
          2,
          4,
          6
        ]
      },
      {
        "key": "ignite_aoe",
        "value": [
          150,
          300,
          450
        ]
      },
      {
        "key": "ignite_cast_range",
        "value": [
          150,
          300,
          450
        ]
      },
      {
        "key": "bloodlust_aoe",
        "value": [
          575
        ]
      },
      {
        "key": "bloodlust_cooldown",
        "value": [
          5,
          10,
          15
        ]
      },
      {
        "key": "multicast_2_times_tooltip",
        "value": [
          60
        ]
      },
      {
        "key": "multicast_3_times_tooltip",
        "value": [
          0,
          30,
          30
        ]
      },
      {
        "key": "multicast_4_times_tooltip",
        "value": [
          0,
          0,
          15
        ]
      }
    ]
  },
  "undying_decay": {
    "id": 5442,
    "name": "undying_decay",
    "type": 0,
    "behavior": 33554480,
    "targetTeam": 0,
    "targetType": 80,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        650
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.45,
        0.45,
        0.45,
        0.45
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        10,
        8,
        6,
        4
      ],
      "duration": [
        21,
        24,
        27,
        30
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        70,
        85,
        100,
        115
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "decay_damage",
        "value": [
          20,
          50,
          80,
          110
        ]
      },
      {
        "key": "str_steal",
        "value": [
          4
        ]
      },
      {
        "key": "decay_duration",
        "value": [
          45
        ],
        "talent": "special_bonus_unique_undying_4"
      },
      {
        "key": "radius",
        "value": [
          325
        ]
      },
      {
        "key": "str_scale_up",
        "value": [
          2
        ]
      },
      {
        "key": "str_steal_scepter",
        "value": [
          10
        ]
      }
    ]
  },
  "undying_soul_rip": {
    "id": 5443,
    "name": "undying_soul_rip",
    "type": 0,
    "behavior": 33554440,
    "targetTeam": 8,
    "targetType": 32,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        750
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.45,
        0.45,
        0.45,
        0.45
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        24,
        18,
        12,
        6
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        80,
        95,
        110,
        125
      ],
      "modifierSupportValue": 0,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "damage_per_unit",
        "value": [
          18,
          22,
          26,
          30
        ]
      },
      {
        "key": "max_units",
        "value": [
          10,
          12,
          14,
          16
        ]
      },
      {
        "key": "radius",
        "value": [
          1300
        ]
      },
      {
        "key": "tombstone_heal",
        "value": [
          2,
          4,
          6,
          8
        ]
      }
    ]
  },
  "undying_tombstone": {
    "id": 5444,
    "name": "undying_tombstone",
    "type": 0,
    "behavior": 33554448,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        600
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.45,
        0.45,
        0.45,
        0.45
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        85,
        80,
        75,
        70
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        120,
        130,
        140,
        150
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "tombstone_health",
        "value": [
          8,
          10,
          12,
          16
        ]
      },
      {
        "key": "hits_to_destroy_tooltip",
        "value": [
          4,
          5,
          6,
          8
        ],
        "talent": "special_bonus_unique_undying_5"
      },
      {
        "key": "duration",
        "value": [
          30
        ]
      },
      {
        "key": "radius",
        "value": [
          1200
        ]
      },
      {
        "key": "health_threshold",
        "value": [
          100,
          200,
          300,
          400
        ]
      },
      {
        "key": "health_threshold_pct_tooltip",
        "value": [
          20,
          25,
          30,
          35
        ]
      },
      {
        "key": "zombie_interval",
        "value": [
          4,
          3.5,
          3,
          2.5
        ]
      }
    ]
  },
  "undying_flesh_golem": {
    "id": 5447,
    "name": "undying_flesh_golem",
    "type": 1,
    "behavior": 2052,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        75,
        75,
        75
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100,
        100,
        100
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          30
        ]
      },
      {
        "key": "radius",
        "value": [
          750
        ]
      },
      {
        "key": "full_power_radius",
        "value": [
          200
        ]
      },
      {
        "key": "max_damage_amp",
        "value": [
          20,
          25,
          30
        ]
      },
      {
        "key": "min_damage_amp",
        "value": [
          1
        ]
      },
      {
        "key": "max_speed_slow",
        "value": [
          20
        ]
      },
      {
        "key": "min_speed_slow",
        "value": [
          1
        ]
      },
      {
        "key": "death_heal",
        "value": [
          15,
          20,
          25
        ]
      },
      {
        "key": "death_heal_creep",
        "value": [
          2
        ]
      }
    ]
  },
  "rubick_telekinesis": {
    "id": 5448,
    "name": "rubick_telekinesis",
    "type": 0,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 2,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        550,
        575,
        600,
        625
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.1,
        0.1,
        0.1,
        0.1
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        28,
        26,
        24,
        22
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        125
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "lift_duration",
        "value": [
          1.1,
          1.5,
          1.9,
          2.3
        ]
      },
      {
        "key": "stun_duration",
        "value": [
          1,
          1.25,
          1.5,
          1.75
        ]
      },
      {
        "key": "radius",
        "value": [
          325,
          325,
          325,
          325
        ]
      },
      {
        "key": "max_land_distance",
        "value": [
          375,
          375,
          375,
          375
        ],
        "talent": "special_bonus_unique_rubick"
      },
      {
        "key": "fall_duration",
        "value": [
          0.3,
          0.3,
          0.3,
          0.3
        ]
      },
      {
        "key": "cast_range_tooltip",
        "value": [
          550,
          575,
          600,
          625
        ]
      }
    ]
  },
  "rubick_telekinesis_land": {
    "id": 5449,
    "name": "rubick_telekinesis_land",
    "type": 0,
    "behavior": 49,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 1,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          325,
          325,
          325,
          325
        ]
      }
    ]
  },
  "rubick_fade_bolt": {
    "id": 5450,
    "name": "rubick_fade_bolt",
    "type": 0,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        800,
        800,
        800,
        800
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.1,
        0.1,
        0.1,
        0.1
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        16,
        14,
        12,
        10
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        120,
        130,
        140,
        150
      ],
      "modifierSupportValue": 0.35,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "damage",
        "value": [
          80,
          160,
          240,
          320
        ]
      },
      {
        "key": "jump_damage_reduction_pct",
        "value": [
          8
        ]
      },
      {
        "key": "hero_attack_damage_reduction",
        "value": [
          20,
          25,
          30,
          35
        ],
        "talent": "special_bonus_unique_rubick_2"
      },
      {
        "key": "creep_attack_damage_reduction",
        "value": [
          10,
          13,
          15,
          17
        ]
      },
      {
        "key": "duration",
        "value": [
          10,
          10,
          10,
          10
        ]
      },
      {
        "key": "radius",
        "value": [
          440
        ]
      },
      {
        "key": "jump_delay",
        "value": [
          0.25,
          0.25,
          0.25,
          0.25
        ]
      }
    ]
  },
  "rubick_null_field": {
    "id": 5451,
    "name": "rubick_null_field",
    "type": 0,
    "behavior": 1050628,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        30
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "magic_damage_reduction_pct",
        "value": [
          10,
          14,
          18,
          22
        ],
        "talent": "special_bonus_unique_rubick_3"
      },
      {
        "key": "radius",
        "value": [
          1200
        ]
      }
    ]
  },
  "rubick_spell_steal": {
    "id": 5452,
    "name": "rubick_spell_steal",
    "type": 1,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 64,
    "targetFlag": 1040,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        1000,
        1000,
        1000
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.1,
        0.1,
        0.1,
        0.1
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        20,
        18,
        16
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        25,
        25,
        25
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          180,
          240,
          300
        ]
      },
      {
        "key": "projectile_speed",
        "value": [
          900
        ]
      },
      {
        "key": "cast_range_scepter",
        "value": [
          1400
        ]
      },
      {
        "key": "cooldown_scepter",
        "value": [
          2
        ]
      }
    ]
  },
  "rubick_empty1": {
    "id": 5453,
    "name": "rubick_empty1",
    "type": 0,
    "behavior": 66,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": []
  },
  "rubick_empty2": {
    "id": 5454,
    "name": "rubick_empty2",
    "type": 0,
    "behavior": 66,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": []
  },
  "rubick_hidden1": {
    "id": 5455,
    "name": "rubick_hidden1",
    "type": 0,
    "behavior": 65,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": []
  },
  "rubick_hidden2": {
    "id": 5456,
    "name": "rubick_hidden2",
    "type": 0,
    "behavior": 65,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": []
  },
  "rubick_hidden3": {
    "id": 5457,
    "name": "rubick_hidden3",
    "type": 0,
    "behavior": 65,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": []
  },
  "disruptor_thunder_strike": {
    "id": 5458,
    "name": "disruptor_thunder_strike",
    "type": 0,
    "behavior": 33554440,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        800,
        800,
        800,
        800
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.05,
        0.05,
        0.05,
        0.05
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        18,
        15,
        12,
        9
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        130,
        130,
        130,
        130
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          240,
          240,
          240,
          240
        ]
      },
      {
        "key": "strikes",
        "value": [
          4,
          4,
          4,
          4
        ],
        "talent": "special_bonus_unique_disruptor"
      },
      {
        "key": "strike_interval",
        "value": [
          2,
          2,
          2,
          2
        ]
      },
      {
        "key": "strike_damage",
        "value": [
          40,
          60,
          80,
          100
        ],
        "talent": "special_bonus_unique_disruptor_3"
      }
    ]
  },
  "disruptor_glimpse": {
    "id": 5459,
    "name": "disruptor_glimpse",
    "type": 0,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 64,
    "targetFlag": 1024,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        600,
        1000,
        1400,
        1800
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.05,
        0.05,
        0.05,
        0.05
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        60,
        46,
        32,
        18
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "backtrack_time",
        "value": [
          4,
          4,
          4,
          4
        ]
      },
      {
        "key": "cast_range",
        "value": [
          600,
          1000,
          1400,
          1800
        ]
      }
    ]
  },
  "disruptor_kinetic_field": {
    "id": 5460,
    "name": "disruptor_kinetic_field",
    "type": 0,
    "behavior": 33554480,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        900,
        900,
        900,
        900
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.05,
        0.05,
        0.05,
        0.05
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        19,
        16,
        13,
        10
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        70,
        70,
        70,
        70
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          340
        ]
      },
      {
        "key": "formation_time",
        "value": [
          1.2,
          1.2,
          1.2,
          1.2
        ]
      },
      {
        "key": "duration",
        "value": [
          2.6,
          3.2,
          3.8,
          4.4
        ],
        "talent": "special_bonus_unique_disruptor_5"
      }
    ]
  },
  "disruptor_static_storm": {
    "id": 5461,
    "name": "disruptor_static_storm",
    "type": 1,
    "behavior": 33554480,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        800,
        800,
        800,
        800
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.05,
        0.05,
        0.05,
        0.05
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        90,
        80,
        70
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        125,
        175,
        225
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          450
        ]
      },
      {
        "key": "pulses",
        "value": [
          20
        ]
      },
      {
        "key": "damage_max",
        "value": [
          200,
          250,
          300
        ]
      },
      {
        "key": "duration",
        "value": [
          5
        ]
      },
      {
        "key": "duration_scepter",
        "value": [
          7
        ]
      },
      {
        "key": "pulses_scepter",
        "value": [
          28
        ]
      }
    ]
  },
  "nyx_assassin_impale": {
    "id": 5462,
    "name": "nyx_assassin_impale",
    "type": 0,
    "behavior": 33554448,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 2,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        700
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.4
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        14
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        95,
        115,
        135,
        155
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "width",
        "value": [
          125,
          125,
          125,
          125
        ]
      },
      {
        "key": "duration",
        "value": [
          1.6,
          2,
          2.4,
          2.8
        ]
      },
      {
        "key": "length",
        "value": [
          700
        ]
      },
      {
        "key": "speed",
        "value": [
          1600,
          1600,
          1600,
          1600
        ]
      },
      {
        "key": "cooldown_upgrade",
        "value": [
          7
        ]
      },
      {
        "key": "impale_damage",
        "value": [
          80,
          140,
          200,
          260
        ],
        "talent": "special_bonus_unique_nyx_2"
      }
    ]
  },
  "nyx_assassin_mana_burn": {
    "id": 5463,
    "name": "nyx_assassin_mana_burn",
    "type": 0,
    "behavior": 33554440,
    "targetTeam": 2,
    "targetType": 64,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        600,
        600,
        600,
        600
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.4,
        0.4,
        0.4,
        0.4
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        28,
        20,
        12,
        4
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "float_multiplier",
        "value": [
          3.5,
          4,
          4.5,
          5
        ]
      }
    ]
  },
  "nyx_assassin_spiked_carapace": {
    "id": 5464,
    "name": "nyx_assassin_spiked_carapace",
    "type": 0,
    "behavior": 2052,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 1,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        25,
        20,
        15,
        10
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        40,
        40,
        40,
        40
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "reflect_duration",
        "value": [
          2.25
        ]
      },
      {
        "key": "stun_duration",
        "value": [
          0.6,
          1.2,
          1.8,
          2.4
        ]
      },
      {
        "key": "bonus_damage",
        "value": [
          0
        ]
      },
      {
        "key": "bonus_armor",
        "value": [
          0
        ]
      },
      {
        "key": "bonus_intellect",
        "value": [
          0
        ]
      },
      {
        "key": "burrow_aoe",
        "value": [
          300
        ]
      },
      {
        "key": "damage_reflect_pct",
        "value": [
          100
        ],
        "talent": "special_bonus_unique_nyx"
      }
    ]
  },
  "nyx_assassin_vendetta": {
    "id": 5465,
    "name": "nyx_assassin_vendetta",
    "type": 1,
    "behavior": 1050628,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 2,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        70,
        60,
        50
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        140,
        200,
        260
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          40,
          50,
          60
        ]
      },
      {
        "key": "fade_time",
        "value": [
          0
        ]
      },
      {
        "key": "movement_speed",
        "value": [
          16,
          18,
          20
        ]
      },
      {
        "key": "bonus_damage",
        "value": [
          250,
          400,
          550
        ]
      },
      {
        "key": "cooldown_scepter",
        "value": [
          70,
          60,
          50
        ]
      },
      {
        "key": "health_regen_rate_scepter",
        "value": [
          3
        ]
      },
      {
        "key": "mana_regen_rate_scepter",
        "value": [
          3
        ]
      }
    ]
  },
  "nyx_assassin_burrow": {
    "id": 5666,
    "name": "nyx_assassin_burrow",
    "linkedAbility": "nyx_assassin_unburrow",
    "type": 0,
    "behavior": 268435461,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 1,
    "fightRecapLevel": 1,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        1.5
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "health_regen_rate",
        "value": [
          1.5
        ]
      },
      {
        "key": "mana_regen_rate",
        "value": [
          1.5
        ]
      },
      {
        "key": "damage_reduction",
        "value": [
          40
        ]
      },
      {
        "key": "impale_burn_range_increase_pct_tooltip",
        "value": [
          75
        ]
      },
      {
        "key": "mana_burn_burrow_range_tooltip",
        "value": [
          1050
        ]
      },
      {
        "key": "impale_burrow_range_tooltip",
        "value": [
          1225
        ]
      },
      {
        "key": "impale_burrow_cooldown_tooltip",
        "value": [
          7
        ]
      },
      {
        "key": "carapace_burrow_range_tooltip",
        "value": [
          300
        ]
      }
    ]
  },
  "nyx_assassin_unburrow": {
    "id": 5673,
    "name": "nyx_assassin_unburrow",
    "linkedAbility": "nyx_assassin_burrow",
    "type": 0,
    "behavior": 33554437,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 1,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": []
  },
  "naga_siren_mirror_image": {
    "id": 5467,
    "name": "naga_siren_mirror_image",
    "type": 0,
    "behavior": 4,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.65
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        40,
        40,
        40,
        40
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        70,
        80,
        90,
        100
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "illusion_duration",
        "value": [
          30,
          30,
          30,
          30
        ]
      },
      {
        "key": "outgoing_damage",
        "value": [
          -75,
          -70,
          -65,
          -60
        ],
        "talent": "special_bonus_unique_naga_siren_4"
      },
      {
        "key": "outgoing_damage_tooltip",
        "value": [
          25,
          30,
          35,
          40
        ],
        "talent": "special_bonus_unique_naga_siren_4"
      },
      {
        "key": "incoming_damage",
        "value": [
          450,
          400,
          350,
          300
        ]
      },
      {
        "key": "tooltip_incoming_damage_total_pct",
        "value": [
          550,
          500,
          450,
          400
        ]
      },
      {
        "key": "images_count",
        "value": [
          3,
          3,
          3,
          3
        ],
        "talent": "special_bonus_unique_naga_siren"
      },
      {
        "key": "invuln_duration",
        "value": [
          0.3
        ]
      }
    ]
  },
  "naga_siren_ensnare": {
    "id": 5468,
    "name": "naga_siren_ensnare",
    "type": 0,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 16,
    "spellImmunityType": 1,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        650,
        650,
        650,
        650
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.6
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        14
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        70,
        80,
        90,
        100
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          2,
          3,
          4,
          5
        ]
      },
      {
        "key": "net_speed",
        "value": [
          1500,
          1500,
          1500,
          1500
        ]
      },
      {
        "key": "fake_ensnare_distance",
        "value": [
          900,
          900,
          900,
          900
        ]
      }
    ]
  },
  "naga_siren_rip_tide": {
    "id": 5469,
    "name": "naga_siren_rip_tide",
    "type": 0,
    "behavior": 2052,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        10
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        80,
        130,
        180,
        230
      ],
      "manaCost": [
        80,
        90,
        100,
        110
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "armor_reduction",
        "value": [
          -2,
          -3,
          -4,
          -5
        ],
        "talent": "special_bonus_unique_naga_siren_3"
      },
      {
        "key": "radius",
        "value": [
          320
        ]
      },
      {
        "key": "duration",
        "value": [
          8,
          8,
          8,
          8
        ]
      }
    ]
  },
  "naga_siren_song_of_the_siren": {
    "id": 5470,
    "name": "naga_siren_song_of_the_siren",
    "type": 1,
    "behavior": 4,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        1000,
        1200,
        1400
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        1
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        160,
        120,
        80
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        150,
        175,
        200
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          1000,
          1200,
          1400
        ]
      },
      {
        "key": "duration",
        "value": [
          7,
          7,
          7
        ]
      },
      {
        "key": "animation_rate",
        "value": [
          0.55,
          0.55,
          0.55
        ]
      },
      {
        "key": "regen_rate",
        "value": [
          10
        ]
      },
      {
        "key": "regen_rate_self",
        "value": [
          10
        ]
      },
      {
        "key": "regen_rate_tooltip_scepter",
        "value": [
          10
        ]
      }
    ]
  },
  "naga_siren_song_of_the_siren_cancel": {
    "id": 5478,
    "name": "naga_siren_song_of_the_siren_cancel",
    "type": 1,
    "behavior": 5,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 1,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        1,
        1,
        1
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": []
  },
  "keeper_of_the_light_illuminate": {
    "id": 5471,
    "name": "keeper_of_the_light_illuminate",
    "type": 0,
    "behavior": 144,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1800
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        2,
        3,
        4,
        5
      ],
      "coolDown": [
        10,
        10,
        10,
        10
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        150,
        160,
        170,
        180
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "damage_per_second",
        "value": [
          100,
          100,
          100,
          100
        ]
      },
      {
        "key": "max_channel_time",
        "value": [
          2,
          3,
          4,
          5
        ]
      },
      {
        "key": "radius",
        "value": [
          375
        ]
      },
      {
        "key": "range",
        "value": [
          1550
        ]
      },
      {
        "key": "speed",
        "value": [
          1050
        ]
      },
      {
        "key": "vision_radius",
        "value": [
          800,
          800,
          800,
          800
        ]
      },
      {
        "key": "vision_duration",
        "value": [
          3.34,
          3.34,
          3.34,
          3.34
        ]
      },
      {
        "key": "channel_vision_radius",
        "value": [
          375
        ]
      },
      {
        "key": "channel_vision_interval",
        "value": [
          0.5
        ]
      },
      {
        "key": "channel_vision_duration",
        "value": [
          10.34
        ]
      },
      {
        "key": "channel_vision_step",
        "value": [
          150
        ]
      },
      {
        "key": "total_damage",
        "value": [
          200,
          300,
          400,
          500
        ],
        "talent": "special_bonus_unique_keeper_of_the_light"
      }
    ]
  },
  "keeper_of_the_light_mana_leak": {
    "id": 5472,
    "name": "keeper_of_the_light_mana_leak",
    "type": 0,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        400,
        500,
        600,
        700
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        16,
        14,
        12,
        10
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        160
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          4,
          5,
          6,
          7
        ]
      },
      {
        "key": "mana_leak_pct",
        "value": [
          5
        ]
      },
      {
        "key": "stun_duration",
        "value": [
          1.5,
          2,
          2.5,
          3
        ],
        "talent": "special_bonus_unique_keeper_of_the_light_3"
      },
      {
        "key": "cast_range_tooltip",
        "value": [
          400,
          500,
          600,
          700
        ]
      }
    ]
  },
  "keeper_of_the_light_chakra_magic": {
    "id": 5473,
    "name": "keeper_of_the_light_chakra_magic",
    "type": 0,
    "behavior": 8,
    "targetTeam": 1,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 3,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        900,
        900,
        900,
        900
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        17,
        16,
        15,
        14
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0
      ],
      "modifierSupportValue": 3,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "mana_restore",
        "value": [
          75,
          150,
          225,
          300
        ],
        "talent": "special_bonus_unique_keeper_of_the_light_2"
      },
      {
        "key": "cooldown_reduction",
        "value": [
          3,
          4,
          5,
          6
        ]
      },
      {
        "key": "duration",
        "value": [
          15
        ]
      }
    ]
  },
  "keeper_of_the_light_spirit_form": {
    "id": 5474,
    "name": "keeper_of_the_light_spirit_form",
    "type": 1,
    "behavior": 4,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        80,
        70,
        60
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100,
        100,
        100
      ],
      "modifierSupportValue": 0.35,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          40,
          40,
          40
        ]
      }
    ]
  },
  "keeper_of_the_light_recall": {
    "id": 5475,
    "name": "keeper_of_the_light_recall",
    "type": 0,
    "behavior": 276824284,
    "targetTeam": 1,
    "targetType": 32,
    "targetFlag": 8,
    "spellImmunityType": 3,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 3,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        15
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100,
        100,
        100
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "teleport_delay",
        "value": [
          5,
          4,
          3
        ]
      }
    ]
  },
  "keeper_of_the_light_blinding_light": {
    "id": 5476,
    "name": "keeper_of_the_light_blinding_light",
    "type": 0,
    "behavior": 268435568,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 3,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        900,
        900,
        900
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        20,
        16,
        12
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        50,
        50,
        50
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          675,
          675,
          675
        ]
      },
      {
        "key": "miss_duration",
        "value": [
          4,
          5,
          6
        ]
      },
      {
        "key": "miss_rate",
        "value": [
          80,
          80,
          80
        ]
      },
      {
        "key": "knockback_distance",
        "value": [
          525
        ]
      },
      {
        "key": "knockback_height",
        "value": [
          50,
          50,
          50
        ]
      },
      {
        "key": "knockback_duration",
        "value": [
          0.4,
          0.4,
          0.4
        ]
      }
    ]
  },
  "keeper_of_the_light_illuminate_end": {
    "id": 5477,
    "name": "keeper_of_the_light_illuminate_end",
    "type": 0,
    "behavior": 8388677,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": []
  },
  "keeper_of_the_light_spirit_form_illuminate": {
    "id": 5479,
    "name": "keeper_of_the_light_spirit_form_illuminate",
    "type": 0,
    "behavior": 268435473,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        1800
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        10,
        10,
        10,
        10
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        150,
        160,
        170,
        180
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "damage_per_second",
        "value": [
          100,
          100,
          100,
          100
        ]
      },
      {
        "key": "max_channel_time",
        "value": [
          2,
          3,
          4,
          5
        ]
      },
      {
        "key": "radius",
        "value": [
          375
        ]
      },
      {
        "key": "range",
        "value": [
          1550
        ]
      },
      {
        "key": "speed",
        "value": [
          1050
        ]
      },
      {
        "key": "vision_radius",
        "value": [
          800,
          800,
          800,
          800
        ]
      },
      {
        "key": "vision_duration",
        "value": [
          3.34,
          3.34,
          3.34,
          3.34
        ]
      },
      {
        "key": "channel_vision_radius",
        "value": [
          375
        ]
      },
      {
        "key": "channel_vision_interval",
        "value": [
          0.5
        ]
      },
      {
        "key": "channel_vision_duration",
        "value": [
          10.34
        ]
      },
      {
        "key": "channel_vision_step",
        "value": [
          150
        ]
      },
      {
        "key": "total_damage",
        "value": [
          200,
          300,
          400,
          500
        ],
        "talent": "special_bonus_unique_keeper_of_the_light"
      }
    ]
  },
  "keeper_of_the_light_spirit_form_illuminate_end": {
    "id": 5503,
    "name": "keeper_of_the_light_spirit_form_illuminate_end",
    "type": 0,
    "behavior": 8388677,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": []
  },
  "visage_grave_chill": {
    "id": 5480,
    "name": "visage_grave_chill",
    "type": 0,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        650
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.2,
        0.2,
        0.2,
        0.2
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        16,
        14,
        12,
        10
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        90
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "chill_duration",
        "value": [
          3,
          4,
          5,
          6
        ]
      },
      {
        "key": "movespeed_bonus",
        "value": [
          32,
          32,
          32,
          32
        ]
      },
      {
        "key": "attackspeed_bonus",
        "value": [
          64,
          64,
          64,
          64
        ]
      }
    ]
  },
  "visage_soul_assumption": {
    "id": 5481,
    "name": "visage_soul_assumption",
    "type": 0,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        900,
        900,
        900,
        900
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.2,
        0.2,
        0.2,
        0.2
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        4,
        4,
        4,
        4
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        170,
        160,
        150,
        140
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "bolt_speed",
        "value": [
          1000
        ]
      },
      {
        "key": "soul_base_damage",
        "value": [
          20
        ]
      },
      {
        "key": "soul_charge_damage",
        "value": [
          65
        ],
        "talent": "special_bonus_unique_visage_4"
      },
      {
        "key": "stack_limit",
        "value": [
          3,
          4,
          5,
          6
        ]
      },
      {
        "key": "stack_duration",
        "value": [
          6
        ]
      },
      {
        "key": "damage_limit",
        "value": [
          110
        ]
      },
      {
        "key": "radius",
        "value": [
          1375
        ]
      },
      {
        "key": "damage_min",
        "value": [
          2
        ]
      },
      {
        "key": "damage_max",
        "value": [
          3000
        ]
      }
    ]
  },
  "visage_gravekeepers_cloak": {
    "id": 5482,
    "name": "visage_gravekeepers_cloak",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "max_layers",
        "value": [
          4
        ]
      },
      {
        "key": "damage_reduction",
        "value": [
          8,
          12,
          16,
          20
        ]
      },
      {
        "key": "recovery_time",
        "value": [
          6,
          5,
          4,
          3
        ],
        "talent": "special_bonus_unique_visage_5"
      },
      {
        "key": "minimum_damage",
        "value": [
          40
        ]
      },
      {
        "key": "radius",
        "value": [
          900
        ]
      }
    ]
  },
  "visage_summon_familiars": {
    "id": 5483,
    "name": "visage_summon_familiars",
    "type": 1,
    "behavior": 2052,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        130
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        150,
        150,
        150
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "familiar_hp",
        "value": [
          400,
          550,
          700
        ]
      },
      {
        "key": "familiar_armor",
        "value": [
          0,
          1,
          2
        ]
      },
      {
        "key": "familiar_speed",
        "value": [
          430
        ],
        "talent": "special_bonus_unique_visage_2"
      },
      {
        "key": "familiar_attack_damage",
        "value": [
          30,
          45,
          60
        ]
      }
    ]
  },
  "visage_stone_form_self_cast": {
    "id": 7116,
    "name": "visage_stone_form_self_cast",
    "type": 0,
    "behavior": 1574980,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 3,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "stun_radius",
        "value": [
          350
        ]
      },
      {
        "key": "stun_delay",
        "value": [
          0.55
        ]
      },
      {
        "key": "stun_damage",
        "value": [
          60,
          100,
          140
        ]
      },
      {
        "key": "stun_duration",
        "value": [
          1,
          1.25,
          1.5
        ]
      },
      {
        "key": "stone_duration",
        "value": [
          6
        ]
      },
      {
        "key": "hp_regen",
        "value": [
          150,
          175,
          200
        ]
      }
    ]
  },
  "wisp_tether": {
    "id": 5485,
    "name": "wisp_tether",
    "type": 0,
    "behavior": 8,
    "targetTeam": 1,
    "targetType": 32,
    "targetFlag": 0,
    "spellImmunityType": 3,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1800,
        1800,
        1800,
        1800
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        12,
        12,
        12,
        12
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        40,
        40,
        40,
        40
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          900,
          900,
          900,
          900
        ]
      },
      {
        "key": "movespeed",
        "value": [
          5,
          8,
          11,
          14
        ]
      },
      {
        "key": "latch_distance",
        "value": [
          700,
          700,
          700,
          700
        ]
      },
      {
        "key": "latch_speed",
        "value": [
          1000,
          1000,
          1000,
          1000
        ]
      },
      {
        "key": "tether_heal_amp",
        "value": [
          1.2,
          1.3,
          1.4,
          1.5
        ]
      }
    ]
  },
  "wisp_spirits": {
    "id": 5486,
    "name": "wisp_spirits",
    "type": 0,
    "behavior": 4,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        26,
        22,
        18,
        14
      ],
      "duration": [
        19,
        19,
        19,
        19
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        120,
        130,
        140,
        150
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "creep_damage",
        "value": [
          10,
          18,
          26,
          34
        ]
      },
      {
        "key": "hero_damage",
        "value": [
          20,
          40,
          60,
          80
        ],
        "talent": "special_bonus_unique_wisp"
      },
      {
        "key": "slow",
        "value": [
          20,
          40,
          60,
          80
        ]
      },
      {
        "key": "slow_duration",
        "value": [
          0.3
        ]
      },
      {
        "key": "revolution_time",
        "value": [
          5,
          5,
          5,
          5
        ]
      },
      {
        "key": "min_range",
        "value": [
          100,
          100,
          100,
          100
        ]
      },
      {
        "key": "max_range",
        "value": [
          700
        ],
        "talent": "special_bonus_unique_wisp_3"
      },
      {
        "key": "hero_hit_radius",
        "value": [
          110
        ]
      },
      {
        "key": "explode_radius",
        "value": [
          360
        ]
      },
      {
        "key": "hit_radius",
        "value": [
          150,
          150,
          150,
          150
        ]
      },
      {
        "key": "spirit_movement_rate",
        "value": [
          250,
          250,
          250,
          250
        ]
      },
      {
        "key": "spirit_duration",
        "value": [
          19,
          19,
          19,
          19
        ]
      }
    ]
  },
  "wisp_overcharge": {
    "id": 5487,
    "name": "wisp_overcharge",
    "type": 0,
    "behavior": 516,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        2
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "bonus_attack_speed",
        "value": [
          40,
          50,
          60,
          70
        ]
      },
      {
        "key": "bonus_damage_pct",
        "value": [
          -5,
          -10,
          -15,
          -20
        ]
      },
      {
        "key": "drain_interval",
        "value": [
          0.2,
          0.2,
          0.2,
          0.2
        ]
      },
      {
        "key": "drain_pct",
        "value": [
          0.06
        ]
      },
      {
        "key": "drain_pct_tooltip",
        "value": [
          6
        ]
      }
    ]
  },
  "wisp_relocate": {
    "id": 5488,
    "name": "wisp_relocate",
    "type": 1,
    "behavior": 144,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0
      ],
      "channelTime": [
        2.7,
        2.35,
        2
      ],
      "coolDown": [
        130,
        110,
        90
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100,
        100,
        100
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "cast_delay",
        "value": [
          2.7,
          2.35,
          2
        ]
      },
      {
        "key": "return_time",
        "value": [
          12,
          12,
          12
        ]
      }
    ]
  },
  "wisp_tether_break": {
    "id": 5489,
    "name": "wisp_tether_break",
    "type": 0,
    "behavior": 5,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 1,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        1,
        1,
        1,
        1
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": []
  },
  "wisp_spirits_in": {
    "id": 5490,
    "name": "wisp_spirits_in",
    "type": 0,
    "behavior": 303040581,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 1,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        1.5
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": []
  },
  "slark_dark_pact": {
    "id": 5494,
    "name": "slark_dark_pact",
    "type": 0,
    "behavior": 2052,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        325
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.001,
        0.001,
        0.001,
        0.001
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        9,
        8,
        7,
        6
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        55,
        50,
        45,
        40
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "delay",
        "value": [
          1.5
        ]
      },
      {
        "key": "pulse_duration",
        "value": [
          1
        ]
      },
      {
        "key": "radius",
        "value": [
          325
        ]
      },
      {
        "key": "total_damage",
        "value": [
          75,
          150,
          225,
          300
        ],
        "talent": "special_bonus_unique_slark_2"
      },
      {
        "key": "total_pulses",
        "value": [
          10
        ]
      },
      {
        "key": "pulse_interval",
        "value": [
          0.1
        ]
      }
    ]
  },
  "slark_pounce": {
    "id": 5495,
    "name": "slark_pounce",
    "type": 0,
    "behavior": 131076,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        20,
        16,
        12,
        8
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        75,
        75,
        75,
        75
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "pounce_distance",
        "value": [
          700
        ]
      },
      {
        "key": "pounce_speed",
        "value": [
          933.33
        ]
      },
      {
        "key": "pounce_acceleration",
        "value": [
          7000
        ]
      },
      {
        "key": "pounce_radius",
        "value": [
          95
        ]
      },
      {
        "key": "pounce_damage",
        "value": [
          30,
          60,
          90,
          120
        ]
      },
      {
        "key": "leash_duration",
        "value": [
          3.5
        ],
        "talent": "special_bonus_unique_slark"
      },
      {
        "key": "leash_radius",
        "value": [
          325
        ]
      }
    ]
  },
  "slark_essence_shift": {
    "id": 5496,
    "name": "slark_essence_shift",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "agi_gain",
        "value": [
          3
        ]
      },
      {
        "key": "stat_loss",
        "value": [
          1
        ]
      },
      {
        "key": "duration",
        "value": [
          15,
          30,
          60,
          120
        ],
        "talent": "special_bonus_unique_slark_4"
      }
    ]
  },
  "slark_shadow_dance": {
    "id": 5497,
    "name": "slark_shadow_dance",
    "type": 1,
    "behavior": 2052,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        60
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        120,
        120,
        120
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          4
        ],
        "talent": "special_bonus_unique_slark_3"
      },
      {
        "key": "fade_time",
        "value": [
          0,
          0,
          0
        ]
      },
      {
        "key": "bonus_movement_speed",
        "value": [
          30,
          40,
          50
        ]
      },
      {
        "key": "bonus_regen_pct",
        "value": [
          3,
          5,
          7
        ]
      },
      {
        "key": "activation_delay",
        "value": [
          0.5,
          0.5,
          0.5
        ]
      },
      {
        "key": "neutral_disable",
        "value": [
          2,
          2,
          2
        ]
      },
      {
        "key": "scepter_aoe",
        "value": [
          325
        ]
      },
      {
        "key": "cooldown_scepter",
        "value": [
          30
        ]
      }
    ]
  },
  "medusa_split_shot": {
    "id": 5504,
    "name": "medusa_split_shot",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.4,
        0.4,
        0.4,
        0.4
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "damage_modifier",
        "value": [
          -70,
          -55,
          -40,
          -25
        ]
      },
      {
        "key": "damage_modifier_tooltip",
        "value": [
          30,
          45,
          60,
          75
        ]
      },
      {
        "key": "arrow_count",
        "value": [
          3
        ],
        "talent": "special_bonus_unique_medusa_2"
      },
      {
        "key": "split_shot_bonus_range",
        "value": [
          100
        ]
      }
    ]
  },
  "medusa_mystic_snake": {
    "id": 5505,
    "name": "medusa_mystic_snake",
    "type": 0,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        700
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.4,
        0.4,
        0.4,
        0.4
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        11
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        140,
        150,
        160,
        170
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          475,
          475,
          475,
          475
        ]
      },
      {
        "key": "snake_jumps",
        "value": [
          3,
          4,
          5,
          6
        ]
      },
      {
        "key": "jump_delay",
        "value": [
          0.25,
          0.25,
          0.25,
          0.25
        ]
      },
      {
        "key": "snake_damage",
        "value": [
          80,
          120,
          160,
          200
        ]
      },
      {
        "key": "snake_mana_steal",
        "value": [
          11,
          14,
          17,
          20
        ],
        "talent": "special_bonus_unique_medusa_3"
      },
      {
        "key": "snake_scale",
        "value": [
          35
        ]
      },
      {
        "key": "initial_speed",
        "value": [
          800
        ]
      },
      {
        "key": "return_speed",
        "value": [
          800
        ]
      },
      {
        "key": "stone_form_scepter_base",
        "value": [
          1
        ]
      },
      {
        "key": "stone_form_scepter_increment",
        "value": [
          0.3
        ]
      }
    ]
  },
  "medusa_mana_shield": {
    "id": 5506,
    "name": "medusa_mana_shield",
    "type": 0,
    "behavior": 2564,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.4,
        0.4,
        0.4,
        0.4
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "damage_per_mana",
        "value": [
          1.6,
          1.9,
          2.2,
          2.5
        ]
      },
      {
        "key": "absorption_tooltip",
        "value": [
          60
        ]
      }
    ]
  },
  "medusa_stone_gaze": {
    "id": 5507,
    "name": "medusa_stone_gaze",
    "type": 1,
    "behavior": 4,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1000,
        1000,
        1000
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.4,
        0.4,
        0.4
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        90
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        200,
        200,
        200
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          1000,
          1000,
          1000
        ]
      },
      {
        "key": "duration",
        "value": [
          5,
          6,
          7
        ],
        "talent": "special_bonus_unique_medusa"
      },
      {
        "key": "slow",
        "value": [
          35
        ]
      },
      {
        "key": "stone_duration",
        "value": [
          3
        ]
      },
      {
        "key": "face_duration",
        "value": [
          2
        ]
      },
      {
        "key": "vision_cone",
        "value": [
          0.08715
        ]
      },
      {
        "key": "bonus_physical_damage",
        "value": [
          50
        ]
      }
    ]
  },
  "troll_warlord_berserkers_rage": {
    "id": 5508,
    "name": "troll_warlord_berserkers_rage",
    "type": 0,
    "behavior": 2564,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.2,
        0.2,
        0.2,
        0.2
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "bonus_hp",
        "value": [
          0
        ]
      },
      {
        "key": "bonus_move_speed",
        "value": [
          10,
          20,
          30,
          40
        ]
      },
      {
        "key": "bonus_armor",
        "value": [
          6
        ]
      },
      {
        "key": "bonus_range",
        "value": [
          350
        ]
      },
      {
        "key": "base_attack_time",
        "value": [
          1.45
        ]
      },
      {
        "key": "bash_chance",
        "value": [
          10
        ]
      },
      {
        "key": "bash_duration",
        "value": [
          0.8,
          1.2,
          1.6,
          2
        ]
      },
      {
        "key": "bash_damage",
        "value": [
          20,
          30,
          40,
          50
        ]
      }
    ]
  },
  "troll_warlord_whirling_axes_ranged": {
    "id": 5509,
    "name": "troll_warlord_whirling_axes_ranged",
    "type": 0,
    "behavior": 33554456,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1000
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.2,
        0.2,
        0.2,
        0.2
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        9
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        50
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "axe_width",
        "value": [
          100
        ]
      },
      {
        "key": "axe_speed",
        "value": [
          1500
        ]
      },
      {
        "key": "axe_range",
        "value": [
          1000
        ]
      },
      {
        "key": "axe_damage",
        "value": [
          75
        ],
        "talent": "special_bonus_unique_troll_warlord_3"
      },
      {
        "key": "axe_slow_duration",
        "value": [
          2.5,
          3,
          3.5,
          4
        ]
      },
      {
        "key": "movement_speed",
        "value": [
          40
        ]
      },
      {
        "key": "axe_spread",
        "value": [
          25
        ]
      },
      {
        "key": "axe_count",
        "value": [
          5
        ]
      }
    ]
  },
  "troll_warlord_whirling_axes_melee": {
    "id": 5510,
    "name": "troll_warlord_whirling_axes_melee",
    "type": 0,
    "behavior": 2052,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        9
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        50
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "damage",
        "value": [
          75,
          125,
          175,
          225
        ],
        "talent": "special_bonus_unique_troll_warlord_3"
      },
      {
        "key": "hit_radius",
        "value": [
          100
        ]
      },
      {
        "key": "max_range",
        "value": [
          450
        ]
      },
      {
        "key": "axe_movement_speed",
        "value": [
          1250
        ]
      },
      {
        "key": "blind_duration",
        "value": [
          5
        ]
      },
      {
        "key": "blind_pct",
        "value": [
          60
        ]
      },
      {
        "key": "whirl_duration",
        "value": [
          3
        ]
      }
    ]
  },
  "troll_warlord_fervor": {
    "id": 5511,
    "name": "troll_warlord_fervor",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "max_stacks",
        "value": [
          7
        ],
        "talent": "special_bonus_unique_troll_warlord_2"
      },
      {
        "key": "attack_speed",
        "value": [
          15,
          20,
          25,
          30
        ]
      }
    ]
  },
  "troll_warlord_battle_trance": {
    "id": 5512,
    "name": "troll_warlord_battle_trance",
    "type": 1,
    "behavior": 2052,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 3,
    "fightRecapLevel": 2,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        35
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        75,
        75,
        75
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "trance_duration",
        "value": [
          5
        ]
      },
      {
        "key": "attack_speed",
        "value": [
          60,
          120,
          180
        ]
      }
    ]
  },
  "centaur_hoof_stomp": {
    "id": 5514,
    "name": "centaur_hoof_stomp",
    "type": 0,
    "behavior": 4,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 2,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.5,
        0.5,
        0.5,
        0.5
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        13,
        13,
        13,
        13
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        115,
        120,
        125,
        130
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          315
        ]
      },
      {
        "key": "stun_duration",
        "value": [
          2,
          2.25,
          2.5,
          2.75
        ],
        "talent": "special_bonus_unique_centaur_2"
      },
      {
        "key": "stomp_damage",
        "value": [
          100,
          150,
          200,
          250
        ]
      }
    ]
  },
  "centaur_double_edge": {
    "id": 5515,
    "name": "centaur_double_edge",
    "type": 0,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        150,
        150,
        150,
        150
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.5,
        0.5,
        0.5,
        0.5
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        5
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "edge_damage",
        "value": [
          175,
          250,
          325,
          400
        ],
        "talent": "special_bonus_unique_centaur_4"
      },
      {
        "key": "radius",
        "value": [
          190
        ]
      }
    ]
  },
  "centaur_return": {
    "id": 5516,
    "name": "centaur_return",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 2,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "return_damage",
        "value": [
          16,
          18,
          20,
          22
        ]
      },
      {
        "key": "strength_pct",
        "value": [
          30,
          45,
          60,
          75
        ],
        "talent": "special_bonus_unique_centaur_3"
      },
      {
        "key": "aura_radius",
        "value": [
          900
        ]
      }
    ]
  },
  "centaur_stampede": {
    "id": 5517,
    "name": "centaur_stampede",
    "type": 1,
    "behavior": 2052,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        90,
        75,
        60
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100
      ],
      "modifierSupportValue": 0.2,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          4
        ]
      },
      {
        "key": "base_damage",
        "value": [
          0
        ]
      },
      {
        "key": "strength_damage",
        "value": [
          1,
          2,
          3
        ]
      },
      {
        "key": "slow_duration",
        "value": [
          1.8
        ]
      },
      {
        "key": "radius",
        "value": [
          105
        ]
      },
      {
        "key": "slow_movement_speed",
        "value": [
          100
        ]
      },
      {
        "key": "cooldown_scepter",
        "value": [
          90,
          75,
          60
        ]
      },
      {
        "key": "damage_reduction",
        "value": [
          40
        ]
      },
      {
        "key": "damage_reduction_tooltip_scepter",
        "value": [
          40
        ]
      }
    ]
  },
  "magnataur_shockwave": {
    "id": 5518,
    "name": "magnataur_shockwave",
    "type": 0,
    "behavior": 24,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        1150
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        10,
        9,
        8,
        7
      ],
      "duration": [
        0.6875,
        0.6875,
        0.6875,
        0.6875
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        90,
        90,
        90,
        90
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "shock_speed",
        "value": [
          1050
        ]
      },
      {
        "key": "shock_width",
        "value": [
          150
        ]
      },
      {
        "key": "shock_damage",
        "value": [
          90,
          160,
          230,
          300
        ],
        "talent": "special_bonus_unique_magnus_4"
      },
      {
        "key": "movement_slow",
        "value": [
          60
        ]
      },
      {
        "key": "slow_duration",
        "value": [
          2
        ]
      },
      {
        "key": "scepter_distance",
        "value": [
          1725
        ]
      },
      {
        "key": "scepter_speed",
        "value": [
          1700
        ]
      }
    ]
  },
  "magnataur_empower": {
    "id": 5519,
    "name": "magnataur_empower",
    "type": 0,
    "behavior": 8388616,
    "targetTeam": 1,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 3,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        800
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        8
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        30,
        50,
        70,
        90
      ],
      "modifierSupportValue": 0.3,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "empower_duration",
        "value": [
          40,
          40,
          40,
          40
        ]
      },
      {
        "key": "bonus_damage_pct",
        "value": [
          20,
          30,
          40,
          50
        ],
        "talent": "special_bonus_unique_magnus_2"
      },
      {
        "key": "cleave_damage_pct",
        "value": [
          20,
          30,
          40,
          50
        ],
        "talent": "special_bonus_unique_magnus_2"
      },
      {
        "key": "cleave_starting_width",
        "value": [
          150
        ]
      },
      {
        "key": "cleave_ending_width",
        "value": [
          330
        ]
      },
      {
        "key": "cleave_distance",
        "value": [
          625
        ]
      },
      {
        "key": "splash_damage_pct",
        "value": [
          10,
          15,
          20,
          25
        ]
      },
      {
        "key": "splash_radius",
        "value": [
          240
        ]
      },
      {
        "key": "aura_radius",
        "value": [
          900
        ]
      }
    ]
  },
  "magnataur_skewer": {
    "id": 5520,
    "name": "magnataur_skewer",
    "type": 0,
    "behavior": 131088,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        25
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        80,
        80,
        80,
        80
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "skewer_speed",
        "value": [
          950
        ]
      },
      {
        "key": "range",
        "value": [
          900,
          1000,
          1100,
          1200
        ],
        "talent": "special_bonus_unique_magnus_3"
      },
      {
        "key": "slow_pct",
        "value": [
          25,
          30,
          35,
          40
        ]
      },
      {
        "key": "skewer_radius",
        "value": [
          135
        ]
      },
      {
        "key": "slow_duration",
        "value": [
          3.25
        ]
      },
      {
        "key": "skewer_damage",
        "value": [
          70,
          140,
          210,
          280
        ]
      },
      {
        "key": "tree_radius",
        "value": [
          200
        ]
      }
    ]
  },
  "magnataur_reverse_polarity": {
    "id": 5521,
    "name": "magnataur_reverse_polarity",
    "type": 1,
    "behavior": 4,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 2,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        410,
        410,
        410
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        120
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        200,
        250,
        300
      ],
      "modifierSupportValue": 0.5,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "pull_radius",
        "value": [
          410
        ]
      },
      {
        "key": "polarity_damage",
        "value": [
          50,
          125,
          200
        ]
      },
      {
        "key": "hero_stun_duration",
        "value": [
          2.75,
          3.25,
          3.75
        ],
        "talent": "special_bonus_unique_magnus_5"
      },
      {
        "key": "pull_duration",
        "value": [
          0,
          0,
          0
        ]
      }
    ]
  },
  "shredder_whirling_death": {
    "id": 5524,
    "name": "shredder_whirling_death",
    "type": 0,
    "behavior": 33556484,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        300
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        6
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        70
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "whirling_radius",
        "value": [
          300
        ]
      },
      {
        "key": "whirling_damage",
        "value": [
          100,
          150,
          200,
          250
        ]
      },
      {
        "key": "whirling_tick",
        "value": [
          0.3
        ]
      },
      {
        "key": "stat_loss_pct",
        "value": [
          15
        ],
        "talent": "special_bonus_unique_timbersaw"
      },
      {
        "key": "duration",
        "value": [
          14
        ]
      }
    ]
  },
  "shredder_timber_chain": {
    "id": 5525,
    "name": "shredder_timber_chain",
    "type": 0,
    "behavior": 33685520,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 1,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        850,
        1050,
        1250,
        1450
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        4
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        60,
        70,
        80,
        90
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "chain_radius",
        "value": [
          90,
          90,
          90,
          90
        ]
      },
      {
        "key": "range",
        "value": [
          850,
          1050,
          1250,
          1450
        ],
        "talent": "special_bonus_unique_timbersaw_3"
      },
      {
        "key": "radius",
        "value": [
          225,
          225,
          225,
          225
        ]
      },
      {
        "key": "speed",
        "value": [
          1600,
          2000,
          2400,
          2800
        ]
      },
      {
        "key": "damage",
        "value": [
          100,
          140,
          180,
          220
        ]
      }
    ]
  },
  "shredder_reactive_armor": {
    "id": 5526,
    "name": "shredder_reactive_armor",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "bonus_armor",
        "value": [
          1.3,
          1.4,
          1.5,
          1.6
        ]
      },
      {
        "key": "bonus_hp_regen",
        "value": [
          1,
          1.15,
          1.3,
          1.45
        ]
      },
      {
        "key": "stack_limit",
        "value": [
          5,
          10,
          15,
          20
        ],
        "talent": "special_bonus_unique_timbersaw_2"
      },
      {
        "key": "stack_duration",
        "value": [
          10,
          13,
          16,
          19
        ]
      }
    ]
  },
  "shredder_chakram": {
    "id": 5527,
    "name": "shredder_chakram",
    "type": 1,
    "behavior": 33554480,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 1,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        1200,
        1200,
        1200
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        8,
        8,
        8
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        80,
        140,
        200
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "speed",
        "value": [
          900
        ]
      },
      {
        "key": "radius",
        "value": [
          200
        ]
      },
      {
        "key": "pass_damage",
        "value": [
          100,
          140,
          180
        ]
      },
      {
        "key": "damage_per_second",
        "value": [
          50,
          75,
          100
        ]
      },
      {
        "key": "slow",
        "value": [
          5
        ]
      },
      {
        "key": "damage_interval",
        "value": [
          0.5
        ]
      },
      {
        "key": "break_distance",
        "value": [
          2000
        ]
      },
      {
        "key": "mana_per_second",
        "value": [
          16,
          23,
          30
        ]
      },
      {
        "key": "pass_slow_duration",
        "value": [
          0.5
        ]
      }
    ]
  },
  "shredder_chakram_2": {
    "id": 5645,
    "name": "shredder_chakram_2",
    "type": 0,
    "behavior": 301990001,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 1,
    "maxLevel": 3,
    "fightRecapLevel": 1,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        1200,
        1200,
        1200
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        8,
        8,
        8
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        80,
        140,
        200
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "speed",
        "value": [
          900
        ]
      },
      {
        "key": "radius",
        "value": [
          200
        ]
      },
      {
        "key": "pass_damage",
        "value": [
          100,
          140,
          180
        ]
      },
      {
        "key": "damage_per_second",
        "value": [
          50,
          75,
          100
        ]
      },
      {
        "key": "slow",
        "value": [
          5
        ]
      },
      {
        "key": "damage_interval",
        "value": [
          0.5
        ]
      },
      {
        "key": "break_distance",
        "value": [
          2000
        ]
      },
      {
        "key": "mana_per_second",
        "value": [
          16,
          23,
          30
        ]
      },
      {
        "key": "pass_slow_duration",
        "value": [
          0.5
        ]
      }
    ]
  },
  "shredder_return_chakram": {
    "id": 5528,
    "name": "shredder_return_chakram",
    "type": 1,
    "behavior": 42993733,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": []
  },
  "shredder_return_chakram_2": {
    "id": 5646,
    "name": "shredder_return_chakram_2",
    "type": 0,
    "behavior": 42993733,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 3,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": []
  },
  "bristleback_viscous_nasal_goo": {
    "id": 5548,
    "name": "bristleback_viscous_nasal_goo",
    "type": 0,
    "behavior": 33554440,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        600
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        1.5,
        1.5,
        1.5,
        1.5
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        25
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "goo_speed",
        "value": [
          1000
        ]
      },
      {
        "key": "goo_duration",
        "value": [
          5
        ]
      },
      {
        "key": "base_armor",
        "value": [
          2
        ]
      },
      {
        "key": "armor_per_stack",
        "value": [
          1,
          1.4,
          1.8,
          2.2
        ]
      },
      {
        "key": "base_move_slow",
        "value": [
          20
        ]
      },
      {
        "key": "move_slow_per_stack",
        "value": [
          3,
          6,
          9,
          12
        ]
      },
      {
        "key": "stack_limit",
        "value": [
          4
        ],
        "talent": "special_bonus_unique_bristleback"
      },
      {
        "key": "goo_duration_creep",
        "value": [
          10
        ]
      },
      {
        "key": "radius_scepter",
        "value": [
          750
        ]
      }
    ]
  },
  "bristleback_quill_spray": {
    "id": 5549,
    "name": "bristleback_quill_spray",
    "type": 0,
    "behavior": 2052,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 2,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        650
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        3,
        3,
        3,
        3
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        35,
        35,
        35,
        35
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          700
        ]
      },
      {
        "key": "quill_base_damage",
        "value": [
          20,
          40,
          60,
          80
        ]
      },
      {
        "key": "quill_stack_damage",
        "value": [
          30,
          32,
          34,
          36
        ],
        "talent": "special_bonus_unique_bristleback_2"
      },
      {
        "key": "quill_stack_duration",
        "value": [
          14
        ]
      },
      {
        "key": "max_damage",
        "value": [
          550
        ]
      },
      {
        "key": "projectile_speed",
        "value": [
          2400
        ]
      }
    ]
  },
  "bristleback_bristleback": {
    "id": 5550,
    "name": "bristleback_bristleback",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "side_damage_reduction",
        "value": [
          8,
          12,
          16,
          20
        ]
      },
      {
        "key": "back_damage_reduction",
        "value": [
          16,
          24,
          32,
          40
        ]
      },
      {
        "key": "side_angle",
        "value": [
          110
        ]
      },
      {
        "key": "back_angle",
        "value": [
          70
        ]
      },
      {
        "key": "quill_release_threshold",
        "value": [
          210
        ]
      }
    ]
  },
  "bristleback_warpath": {
    "id": 5551,
    "name": "bristleback_warpath",
    "type": 1,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        10,
        10,
        10
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "damage_per_stack",
        "value": [
          18,
          24,
          30
        ],
        "talent": "special_bonus_unique_bristleback_3"
      },
      {
        "key": "move_speed_per_stack",
        "value": [
          3,
          4,
          5
        ]
      },
      {
        "key": "stack_duration",
        "value": [
          14
        ]
      },
      {
        "key": "max_stacks",
        "value": [
          5,
          7,
          9
        ]
      }
    ]
  },
  "tusk_ice_shards": {
    "id": 5565,
    "name": "tusk_ice_shards",
    "type": 0,
    "behavior": 33555472,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        2000
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.1,
        0.1,
        0.1,
        0.1
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        23,
        20,
        17,
        14
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100,
        105,
        110,
        115
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "shard_width",
        "value": [
          200
        ]
      },
      {
        "key": "shard_damage",
        "value": [
          60,
          120,
          180,
          240
        ]
      },
      {
        "key": "shard_count",
        "value": [
          7
        ]
      },
      {
        "key": "shard_speed",
        "value": [
          1200
        ]
      },
      {
        "key": "shard_duration",
        "value": [
          4,
          5,
          6,
          7
        ]
      },
      {
        "key": "shard_angle_step",
        "value": [
          40
        ]
      },
      {
        "key": "shard_distance",
        "value": [
          200
        ]
      },
      {
        "key": "cast_range_tooltip",
        "value": [
          1800
        ]
      }
    ]
  },
  "tusk_snowball": {
    "id": 5566,
    "name": "tusk_snowball",
    "type": 0,
    "behavior": 131080,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1250
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.1,
        0.1,
        0.1,
        0.1
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        21,
        20,
        19,
        18
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        75,
        75,
        75,
        75
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "snowball_damage",
        "value": [
          80,
          120,
          160,
          200
        ],
        "talent": "special_bonus_unique_tusk_2"
      },
      {
        "key": "snowball_speed",
        "value": [
          600,
          625,
          650,
          675
        ],
        "talent": "special_bonus_unique_tusk_3"
      },
      {
        "key": "snowball_damage_bonus",
        "value": [
          20,
          30,
          40,
          50
        ]
      },
      {
        "key": "stun_duration",
        "value": [
          0.5,
          0.75,
          1,
          1.25
        ]
      },
      {
        "key": "snowball_windup_radius",
        "value": [
          100
        ]
      },
      {
        "key": "snowball_duration",
        "value": [
          3
        ]
      },
      {
        "key": "snowball_radius",
        "value": [
          200
        ]
      },
      {
        "key": "snowball_grow_rate",
        "value": [
          40
        ]
      },
      {
        "key": "snowball_windup",
        "value": [
          3
        ]
      },
      {
        "key": "snowball_grab_radius",
        "value": [
          350
        ]
      }
    ]
  },
  "tusk_launch_snowball": {
    "id": 5641,
    "name": "tusk_launch_snowball",
    "type": 0,
    "behavior": 526405,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": []
  },
  "tusk_frozen_sigil": {
    "id": 5567,
    "name": "tusk_frozen_sigil",
    "type": 0,
    "behavior": 4,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.1,
        0.1,
        0.1,
        0.1
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        50,
        50,
        50,
        50
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        75,
        75,
        75,
        75
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "sigil_radius",
        "value": [
          600
        ]
      },
      {
        "key": "sigil_duration",
        "value": [
          30
        ]
      },
      {
        "key": "move_slow",
        "value": [
          10,
          15,
          20,
          25
        ]
      },
      {
        "key": "attack_slow",
        "value": [
          30,
          40,
          50,
          60
        ]
      }
    ]
  },
  "tusk_walrus_punch": {
    "id": 5568,
    "name": "tusk_walrus_punch",
    "type": 1,
    "behavior": 36872,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 16,
    "spellImmunityType": 1,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        150
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        36,
        24,
        12
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        50,
        75,
        100
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "crit_multiplier",
        "value": [
          350
        ],
        "talent": "special_bonus_unique_tusk"
      },
      {
        "key": "air_time",
        "value": [
          1
        ]
      },
      {
        "key": "slow_duration",
        "value": [
          2,
          3,
          4
        ]
      },
      {
        "key": "move_slow",
        "value": [
          40
        ]
      },
      {
        "key": "push_length",
        "value": [
          1000
        ]
      }
    ]
  },
  "tusk_walrus_kick": {
    "id": 5672,
    "name": "tusk_walrus_kick",
    "type": 0,
    "behavior": 268435465,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 16,
    "spellImmunityType": 1,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 1,
    "fightRecapLevel": 1,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        150
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.2
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        8
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "crit_multiplier",
        "value": [
          0
        ]
      },
      {
        "key": "air_time",
        "value": [
          1
        ]
      },
      {
        "key": "push_length",
        "value": [
          1400
        ]
      },
      {
        "key": "move_slow",
        "value": [
          40
        ]
      },
      {
        "key": "slow_duration",
        "value": [
          4
        ]
      },
      {
        "key": "cooldown_scepter",
        "value": [
          8
        ]
      },
      {
        "key": "damage",
        "value": [
          350
        ]
      }
    ]
  },
  "skywrath_mage_arcane_bolt": {
    "id": 5581,
    "name": "skywrath_mage_arcane_bolt",
    "type": 0,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        875
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.1,
        0.1,
        0.1,
        0.1
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        5,
        4,
        3,
        2
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        90
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "bolt_speed",
        "value": [
          500
        ]
      },
      {
        "key": "bolt_vision",
        "value": [
          325
        ]
      },
      {
        "key": "bolt_damage",
        "value": [
          60,
          80,
          100,
          120
        ]
      },
      {
        "key": "int_multiplier",
        "value": [
          1.6
        ]
      },
      {
        "key": "vision_duration",
        "value": [
          3.34
        ]
      },
      {
        "key": "scepter_radius",
        "value": [
          700
        ]
      }
    ]
  },
  "skywrath_mage_concussive_shot": {
    "id": 5582,
    "name": "skywrath_mage_concussive_shot",
    "type": 0,
    "behavior": 4,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1600
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        18,
        16,
        14,
        12
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        95
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "launch_radius",
        "value": [
          1600
        ]
      },
      {
        "key": "slow_radius",
        "value": [
          250
        ]
      },
      {
        "key": "speed",
        "value": [
          800,
          800,
          800,
          800
        ]
      },
      {
        "key": "damage",
        "value": [
          70,
          140,
          210,
          280
        ]
      },
      {
        "key": "slow_duration",
        "value": [
          4
        ]
      },
      {
        "key": "movement_speed_pct",
        "value": [
          30,
          35,
          40,
          45
        ]
      },
      {
        "key": "shot_vision",
        "value": [
          300
        ]
      },
      {
        "key": "vision_duration",
        "value": [
          3.34
        ]
      },
      {
        "key": "scepter_radius",
        "value": [
          700
        ]
      }
    ]
  },
  "skywrath_mage_ancient_seal": {
    "id": 5583,
    "name": "skywrath_mage_ancient_seal",
    "type": 0,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        700
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.1,
        0.1,
        0.1,
        0.1
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        14
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        80,
        90,
        100,
        110
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "resist_debuff",
        "value": [
          -30,
          -35,
          -40,
          -45
        ],
        "talent": "special_bonus_unique_skywrath_3"
      },
      {
        "key": "seal_duration",
        "value": [
          3,
          4,
          5,
          6
        ]
      },
      {
        "key": "scepter_radius",
        "value": [
          700
        ]
      }
    ]
  },
  "skywrath_mage_mystic_flare": {
    "id": 5584,
    "name": "skywrath_mage_mystic_flare",
    "type": 1,
    "behavior": 33554480,
    "targetTeam": 0,
    "targetType": 64,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        1200
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.1,
        0.1,
        0.1,
        0.1
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        60,
        40,
        20
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        300,
        550,
        800
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          170
        ]
      },
      {
        "key": "duration",
        "value": [
          2.4
        ]
      },
      {
        "key": "damage",
        "value": [
          600,
          1000,
          1400
        ],
        "talent": "special_bonus_unique_skywrath_5"
      },
      {
        "key": "damage_interval",
        "value": [
          0.1
        ]
      },
      {
        "key": "scepter_radius",
        "value": [
          700
        ]
      }
    ]
  },
  "abaddon_death_coil": {
    "id": 5585,
    "name": "abaddon_death_coil",
    "type": 0,
    "behavior": 8,
    "targetTeam": 4,
    "targetType": 80,
    "targetFlag": 0,
    "spellImmunityType": 3,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        800
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.25
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        4.5
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        50
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "self_damage",
        "value": [
          75,
          100,
          125,
          150
        ],
        "talent": "special_bonus_unique_abaddon_2"
      },
      {
        "key": "target_damage",
        "value": [
          100,
          150,
          200,
          250
        ],
        "talent": "special_bonus_unique_abaddon_2"
      },
      {
        "key": "heal_amount",
        "value": [
          100,
          150,
          200,
          250
        ],
        "talent": "special_bonus_unique_abaddon_2"
      },
      {
        "key": "missile_speed",
        "value": [
          1600
        ]
      }
    ]
  },
  "abaddon_aphotic_shield": {
    "id": 5586,
    "name": "abaddon_aphotic_shield",
    "type": 0,
    "behavior": 8,
    "targetTeam": 1,
    "targetType": 65,
    "targetFlag": 8192,
    "spellImmunityType": 2,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        500
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.4
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        12,
        10,
        8,
        6
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        115
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          15
        ]
      },
      {
        "key": "damage_absorb",
        "value": [
          110,
          140,
          170,
          200
        ],
        "talent": "special_bonus_unique_abaddon"
      },
      {
        "key": "radius",
        "value": [
          675
        ]
      }
    ]
  },
  "abaddon_frostmourne": {
    "id": 5587,
    "name": "abaddon_frostmourne",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "debuff_duration",
        "value": [
          2.5
        ]
      },
      {
        "key": "buff_duration",
        "value": [
          4.5
        ]
      },
      {
        "key": "slow_pct",
        "value": [
          8,
          12,
          16,
          20
        ],
        "talent": "special_bonus_unique_abaddon_3"
      },
      {
        "key": "attack_slow_tooltip",
        "value": [
          8,
          12,
          16,
          20
        ],
        "talent": "special_bonus_unique_abaddon_3"
      },
      {
        "key": "move_speed_pct",
        "value": [
          15
        ]
      },
      {
        "key": "attack_speed",
        "value": [
          10,
          20,
          30,
          40
        ]
      }
    ]
  },
  "abaddon_borrowed_time": {
    "id": 5588,
    "name": "abaddon_borrowed_time",
    "type": 1,
    "behavior": 526340,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        60,
        50,
        40
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "hp_threshold",
        "value": [
          400
        ]
      },
      {
        "key": "duration",
        "value": [
          4,
          5,
          6
        ]
      },
      {
        "key": "duration_scepter",
        "value": [
          5,
          6,
          7
        ]
      },
      {
        "key": "redirect",
        "value": [
          0.5
        ]
      },
      {
        "key": "redirect_pct_tooltip_scepter",
        "value": [
          50
        ]
      },
      {
        "key": "redirect_range_tooltip_scepter",
        "value": [
          900
        ]
      }
    ]
  },
  "elder_titan_echo_stomp": {
    "id": 5589,
    "name": "elder_titan_echo_stomp",
    "type": 0,
    "behavior": 132,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 2,
    "damageType": 2,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        500
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.4,
        0.4,
        0.4,
        0.4
      ],
      "channelTime": [
        1.3
      ],
      "coolDown": [
        14,
        13,
        12,
        11
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "cast_time",
        "value": [
          1.7
        ]
      },
      {
        "key": "radius",
        "value": [
          500
        ]
      },
      {
        "key": "sleep_duration",
        "value": [
          2,
          3,
          4,
          5
        ]
      },
      {
        "key": "stomp_damage",
        "value": [
          70,
          100,
          130,
          160
        ],
        "talent": "special_bonus_unique_elder_titan_2"
      },
      {
        "key": "initial_stun_duration",
        "value": [
          0.2
        ]
      },
      {
        "key": "animation_rate",
        "value": [
          0
        ]
      },
      {
        "key": "wake_damage_limit",
        "value": [
          50,
          100,
          150,
          200
        ]
      }
    ]
  },
  "elder_titan_ancestral_spirit": {
    "id": 5591,
    "name": "elder_titan_ancestral_spirit",
    "type": 0,
    "behavior": 33554480,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1200
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.4,
        0.4,
        0.4,
        0.4
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        16
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        80,
        90,
        100,
        110
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          275
        ]
      },
      {
        "key": "pass_damage",
        "value": [
          60,
          90,
          120,
          150
        ]
      },
      {
        "key": "spirit_duration",
        "value": [
          8
        ]
      },
      {
        "key": "buff_duration",
        "value": [
          9
        ]
      },
      {
        "key": "speed",
        "value": [
          600
        ]
      },
      {
        "key": "move_pct_creeps",
        "value": [
          1
        ]
      },
      {
        "key": "move_pct_heroes",
        "value": [
          5
        ]
      },
      {
        "key": "damage_creeps",
        "value": [
          6,
          9,
          12,
          15
        ]
      },
      {
        "key": "damage_heroes",
        "value": [
          15,
          30,
          45,
          60
        ],
        "talent": "special_bonus_unique_elder_titan"
      },
      {
        "key": "move_pct_cap",
        "value": [
          30
        ]
      }
    ]
  },
  "elder_titan_return_spirit": {
    "id": 5592,
    "name": "elder_titan_return_spirit",
    "type": 0,
    "behavior": 42993733,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 1,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": []
  },
  "elder_titan_natural_order": {
    "id": 5593,
    "name": "elder_titan_natural_order",
    "type": 0,
    "behavior": 16386,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          350
        ]
      },
      {
        "key": "armor_reduction_pct",
        "value": [
          40,
          60,
          80,
          100
        ]
      },
      {
        "key": "magic_resistance_pct",
        "value": [
          40,
          60,
          80,
          100
        ]
      }
    ]
  },
  "elder_titan_earth_splitter": {
    "id": 5594,
    "name": "elder_titan_earth_splitter",
    "type": 1,
    "behavior": 16,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        2400
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.4,
        0.4,
        0.4
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        100,
        100,
        100
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        125,
        175,
        225
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "crack_time",
        "value": [
          3.14
        ]
      },
      {
        "key": "crack_width",
        "value": [
          315
        ]
      },
      {
        "key": "crack_distance",
        "value": [
          2400
        ]
      },
      {
        "key": "slow_pct",
        "value": [
          30,
          40,
          50
        ]
      },
      {
        "key": "slow_duration",
        "value": [
          3,
          4,
          5
        ]
      },
      {
        "key": "speed",
        "value": [
          910
        ]
      },
      {
        "key": "damage_pct",
        "value": [
          30,
          40,
          50
        ]
      },
      {
        "key": "vision_width",
        "value": [
          500
        ]
      },
      {
        "key": "vision_interval",
        "value": [
          0.22
        ]
      },
      {
        "key": "vision_duration",
        "value": [
          4
        ]
      },
      {
        "key": "vision_step",
        "value": [
          200
        ]
      },
      {
        "key": "total_steps",
        "value": [
          12
        ]
      },
      {
        "key": "slow_duration_scepter",
        "value": [
          4,
          5,
          6
        ]
      }
    ]
  },
  "legion_commander_overwhelming_odds": {
    "id": 5595,
    "name": "legion_commander_overwhelming_odds",
    "type": 0,
    "behavior": 33554480,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1000
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        15
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100,
        110,
        120,
        130
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "damage",
        "value": [
          40,
          60,
          80,
          100
        ]
      },
      {
        "key": "damage_per_unit",
        "value": [
          14,
          16,
          18,
          20
        ]
      },
      {
        "key": "damage_per_hero",
        "value": [
          30,
          60,
          90,
          120
        ],
        "talent": "special_bonus_unique_legion_commander_4"
      },
      {
        "key": "illusion_dmg_pct",
        "value": [
          25
        ]
      },
      {
        "key": "bonus_speed_creeps",
        "value": [
          3
        ]
      },
      {
        "key": "bonus_speed_heroes",
        "value": [
          9
        ]
      },
      {
        "key": "duration",
        "value": [
          7
        ]
      },
      {
        "key": "radius",
        "value": [
          330
        ]
      }
    ]
  },
  "legion_commander_press_the_attack": {
    "id": 5596,
    "name": "legion_commander_press_the_attack",
    "type": 0,
    "behavior": 8,
    "targetTeam": 1,
    "targetType": 65,
    "targetFlag": 8192,
    "spellImmunityType": 2,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        700
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.2
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        16,
        15,
        14,
        13
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        110
      ],
      "modifierSupportValue": 3,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          5
        ]
      },
      {
        "key": "attack_speed",
        "value": [
          65,
          90,
          115,
          140
        ]
      },
      {
        "key": "hp_regen",
        "value": [
          30,
          35,
          40,
          45
        ]
      }
    ]
  },
  "legion_commander_moment_of_courage": {
    "id": 5597,
    "name": "legion_commander_moment_of_courage",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        2.3,
        1.8,
        1.3,
        0.8
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "trigger_chance",
        "value": [
          25
        ],
        "talent": "special_bonus_unique_legion_commander_3"
      },
      {
        "key": "buff_duration",
        "value": [
          1
        ]
      },
      {
        "key": "hp_leech_percent",
        "value": [
          55,
          65,
          75,
          85
        ]
      }
    ]
  },
  "legion_commander_duel": {
    "id": 5598,
    "name": "legion_commander_duel",
    "type": 1,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 64,
    "targetFlag": 1040,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        150
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        50,
        50,
        50
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        75,
        75,
        75
      ],
      "modifierSupportValue": 3,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          4,
          4.75,
          5.5
        ]
      },
      {
        "key": "duration_scepter",
        "value": [
          6,
          7,
          8
        ]
      },
      {
        "key": "reward_damage",
        "value": [
          10,
          18,
          26
        ],
        "talent": "special_bonus_unique_legion_commander"
      }
    ]
  },
  "ember_spirit_searing_chains": {
    "id": 5603,
    "name": "ember_spirit_searing_chains",
    "type": 0,
    "behavior": 4,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        400
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        14,
        12,
        10,
        8
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        110
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          1.5,
          2,
          2.5,
          3
        ],
        "talent": "special_bonus_unique_ember_spirit_2"
      },
      {
        "key": "radius",
        "value": [
          400
        ]
      },
      {
        "key": "total_damage",
        "value": [
          90,
          160,
          230,
          300
        ]
      },
      {
        "key": "tick_interval",
        "value": [
          0.5
        ]
      },
      {
        "key": "unit_count",
        "value": [
          2
        ]
      }
    ]
  },
  "ember_spirit_sleight_of_fist": {
    "id": 5604,
    "name": "ember_spirit_sleight_of_fist",
    "type": 0,
    "behavior": 48,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 2,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        700
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        30,
        22,
        14,
        6
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        50
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          250,
          350,
          450,
          550
        ]
      },
      {
        "key": "bonus_hero_damage",
        "value": [
          30,
          60,
          90,
          120
        ]
      },
      {
        "key": "attack_interval",
        "value": [
          0.2
        ]
      },
      {
        "key": "creep_damage_penalty",
        "value": [
          -50
        ]
      },
      {
        "key": "charge_restore_time",
        "value": [
          30,
          22,
          14,
          6
        ]
      }
    ]
  },
  "ember_spirit_flame_guard": {
    "id": 5605,
    "name": "ember_spirit_flame_guard",
    "type": 0,
    "behavior": 4,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        400
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        35
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        80,
        90,
        100,
        110
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          8,
          12,
          16,
          20
        ]
      },
      {
        "key": "radius",
        "value": [
          400
        ]
      },
      {
        "key": "absorb_amount",
        "value": [
          80,
          220,
          360,
          500
        ],
        "talent": "special_bonus_unique_ember_spirit_1"
      },
      {
        "key": "tick_interval",
        "value": [
          0.2
        ]
      },
      {
        "key": "damage_per_second",
        "value": [
          30,
          40,
          50,
          60
        ],
        "talent": "special_bonus_unique_ember_spirit_3"
      }
    ]
  },
  "ember_spirit_fire_remnant": {
    "id": 5606,
    "name": "ember_spirit_fire_remnant",
    "type": 1,
    "behavior": 16,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1500
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "speed_multiplier",
        "value": [
          250
        ]
      },
      {
        "key": "max_charges",
        "value": [
          3
        ]
      },
      {
        "key": "charge_restore_time",
        "value": [
          38
        ],
        "talent": "special_bonus_unique_ember_spirit_5"
      },
      {
        "key": "damage",
        "value": [
          100,
          200,
          300
        ]
      },
      {
        "key": "radius",
        "value": [
          450
        ]
      },
      {
        "key": "duration",
        "value": [
          45
        ]
      }
    ]
  },
  "ember_spirit_activate_fire_remnant": {
    "id": 5607,
    "name": "ember_spirit_activate_fire_remnant",
    "type": 0,
    "behavior": 268566608,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 3,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        99999
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        150
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "speed_multiplier",
        "value": [
          250
        ]
      },
      {
        "key": "max_charges",
        "value": [
          3
        ]
      },
      {
        "key": "charge_restore_time",
        "value": [
          35
        ]
      },
      {
        "key": "damage",
        "value": [
          100,
          200,
          300
        ]
      },
      {
        "key": "radius",
        "value": [
          450
        ]
      },
      {
        "key": "speed",
        "value": [
          1300
        ]
      }
    ]
  },
  "earth_spirit_boulder_smash": {
    "id": 5608,
    "name": "earth_spirit_boulder_smash",
    "type": 0,
    "behavior": 33554456,
    "targetTeam": 4,
    "targetType": 80,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 2,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        150
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.01
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        22,
        18,
        14,
        10
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          180
        ]
      },
      {
        "key": "rock_search_aoe",
        "value": [
          200
        ]
      },
      {
        "key": "rock_damage",
        "value": [
          50,
          100,
          150,
          200
        ]
      },
      {
        "key": "stun_duration",
        "value": [
          0.5,
          1,
          1.5,
          2
        ],
        "talent": "special_bonus_unique_earth_spirit_3"
      },
      {
        "key": "speed",
        "value": [
          900
        ]
      },
      {
        "key": "unit_distance",
        "value": [
          500,
          600,
          700,
          800
        ]
      },
      {
        "key": "rock_distance",
        "value": [
          2000
        ]
      },
      {
        "key": "remnant_smash_radius_tooltip",
        "value": [
          200
        ]
      }
    ]
  },
  "earth_spirit_rolling_boulder": {
    "id": 5609,
    "name": "earth_spirit_rolling_boulder",
    "type": 0,
    "behavior": 33685520,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        3000
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.01
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        16,
        12,
        8,
        4
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        50
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          150
        ]
      },
      {
        "key": "speed",
        "value": [
          800
        ]
      },
      {
        "key": "rock_speed",
        "value": [
          1600
        ]
      },
      {
        "key": "distance",
        "value": [
          800
        ]
      },
      {
        "key": "rock_distance",
        "value": [
          1600
        ]
      },
      {
        "key": "delay",
        "value": [
          0.6
        ]
      },
      {
        "key": "damage",
        "value": [
          100
        ],
        "talent": "special_bonus_unique_earth_spirit"
      },
      {
        "key": "move_slow",
        "value": [
          80
        ]
      },
      {
        "key": "slow_duration",
        "value": [
          0.8,
          1.2,
          1.6,
          2
        ]
      }
    ]
  },
  "earth_spirit_geomagnetic_grip": {
    "id": 5610,
    "name": "earth_spirit_geomagnetic_grip",
    "type": 0,
    "behavior": 33554456,
    "targetTeam": 1,
    "targetType": 80,
    "targetFlag": 8,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1100
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.01
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        13
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          180
        ]
      },
      {
        "key": "miss_rate",
        "value": [
          75
        ]
      },
      {
        "key": "miss_duration",
        "value": [
          2,
          2.5,
          3,
          3.5
        ]
      },
      {
        "key": "pull_units_per_second_heroes",
        "value": [
          600
        ]
      },
      {
        "key": "rock_damage",
        "value": [
          50,
          100,
          150,
          200
        ]
      },
      {
        "key": "pull_units_per_second",
        "value": [
          1000
        ]
      },
      {
        "key": "speed",
        "value": [
          800
        ]
      },
      {
        "key": "total_pull_distance",
        "value": [
          1400
        ]
      }
    ]
  },
  "earth_spirit_stone_caller": {
    "id": 5611,
    "name": "earth_spirit_stone_caller",
    "type": 0,
    "behavior": 301989968,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 1,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1100
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "max_charges",
        "value": [
          6
        ]
      },
      {
        "key": "charge_restore_time",
        "value": [
          30
        ]
      },
      {
        "key": "duration",
        "value": [
          120
        ]
      }
    ]
  },
  "earth_spirit_petrify": {
    "id": 5648,
    "name": "earth_spirit_petrify",
    "type": 0,
    "behavior": 268435465,
    "targetTeam": 8,
    "targetType": 32,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 1,
    "fightRecapLevel": 1,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        125
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.2
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        45
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        150
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          3
        ]
      },
      {
        "key": "damage",
        "value": [
          300
        ]
      },
      {
        "key": "aoe",
        "value": [
          300
        ]
      }
    ]
  },
  "earth_spirit_magnetize": {
    "id": 5612,
    "name": "earth_spirit_magnetize",
    "type": 1,
    "behavior": 33554436,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        300
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.01
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        100,
        90,
        80
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "cast_radius",
        "value": [
          300
        ]
      },
      {
        "key": "damage_per_second",
        "value": [
          50,
          75,
          100
        ]
      },
      {
        "key": "damage_duration",
        "value": [
          6
        ]
      },
      {
        "key": "rock_search_radius",
        "value": [
          400
        ]
      },
      {
        "key": "rock_explosion_radius",
        "value": [
          600
        ]
      },
      {
        "key": "damage_interval",
        "value": [
          1
        ]
      },
      {
        "key": "rock_explosion_delay",
        "value": [
          8
        ]
      },
      {
        "key": "silence_duration",
        "value": [
          5
        ]
      },
      {
        "key": "slow_duration",
        "value": [
          2
        ]
      }
    ]
  },
  "abyssal_underlord_firestorm": {
    "id": 5613,
    "name": "abyssal_underlord_firestorm",
    "type": 0,
    "behavior": 48,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        750
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.6
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        12
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100,
        110,
        120,
        130
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          400
        ]
      },
      {
        "key": "wave_duration",
        "value": [
          7
        ]
      },
      {
        "key": "wave_count",
        "value": [
          6
        ]
      },
      {
        "key": "wave_damage",
        "value": [
          25,
          40,
          55,
          70
        ],
        "talent": "special_bonus_unique_underlord_2"
      },
      {
        "key": "wave_interval",
        "value": [
          1
        ]
      },
      {
        "key": "burn_damage",
        "value": [
          1,
          2,
          3,
          4
        ]
      },
      {
        "key": "burn_interval",
        "value": [
          1
        ]
      },
      {
        "key": "burn_duration",
        "value": [
          2
        ]
      },
      {
        "key": "first_wave_delay",
        "value": [
          0
        ]
      },
      {
        "key": "building_damage",
        "value": [
          33
        ]
      }
    ]
  },
  "abyssal_underlord_pit_of_malice": {
    "id": 5614,
    "name": "abyssal_underlord_pit_of_malice",
    "type": 0,
    "behavior": 48,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        750
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.45
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        32,
        28,
        24,
        20
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100,
        115,
        130,
        145
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          375
        ]
      },
      {
        "key": "pit_duration",
        "value": [
          12
        ]
      },
      {
        "key": "pit_interval",
        "value": [
          3.6
        ]
      },
      {
        "key": "pit_damage",
        "value": [
          0
        ]
      },
      {
        "key": "ensnare_duration",
        "value": [
          0.9,
          1.2,
          1.5,
          1.8
        ],
        "talent": "special_bonus_unique_underlord"
      }
    ]
  },
  "abyssal_underlord_atrophy_aura": {
    "id": 5615,
    "name": "abyssal_underlord_atrophy_aura",
    "type": 0,
    "behavior": 16386,
    "targetTeam": 2,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        900
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          900
        ]
      },
      {
        "key": "damage_reduction_pct",
        "value": [
          7,
          18,
          29,
          40
        ]
      },
      {
        "key": "bonus_damage_from_creep",
        "value": [
          5
        ]
      },
      {
        "key": "bonus_damage_from_hero",
        "value": [
          30,
          35,
          40,
          45
        ],
        "talent": "special_bonus_unique_underlord_3"
      },
      {
        "key": "bonus_damage_duration",
        "value": [
          30,
          40,
          50,
          60
        ]
      },
      {
        "key": "bonus_damage_duration_scepter",
        "value": [
          70,
          80,
          90,
          100
        ]
      }
    ]
  },
  "abyssal_underlord_dark_rift": {
    "id": 5616,
    "name": "abyssal_underlord_dark_rift",
    "type": 1,
    "behavior": 24,
    "targetTeam": 1,
    "targetType": 20,
    "targetFlag": 8,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.6
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        130,
        120,
        110
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100,
        200,
        300
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          600
        ]
      },
      {
        "key": "teleport_delay",
        "value": [
          6,
          5,
          4
        ]
      }
    ]
  },
  "abyssal_underlord_cancel_dark_rift": {
    "id": 5617,
    "name": "abyssal_underlord_cancel_dark_rift",
    "type": 1,
    "behavior": 8388677,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 1,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": []
  },
  "terrorblade_reflection": {
    "id": 5619,
    "name": "terrorblade_reflection",
    "type": 0,
    "behavior": 4,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        22,
        20,
        18,
        16
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        50
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "illusion_duration",
        "value": [
          2.5,
          3.5,
          4.5,
          5.5
        ]
      },
      {
        "key": "illusion_outgoing_damage",
        "value": [
          -60,
          -40,
          -20,
          0
        ]
      },
      {
        "key": "illusion_outgoing_tooltip",
        "value": [
          40,
          60,
          80,
          100
        ]
      },
      {
        "key": "move_slow",
        "value": [
          25
        ]
      },
      {
        "key": "range",
        "value": [
          900
        ]
      }
    ]
  },
  "terrorblade_conjure_image": {
    "id": 5620,
    "name": "terrorblade_conjure_image",
    "type": 0,
    "behavior": 4,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.15
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        16
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        70
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "illusion_duration",
        "value": [
          34
        ]
      },
      {
        "key": "illusion_outgoing_damage",
        "value": [
          -70,
          -60,
          -50,
          -40
        ]
      },
      {
        "key": "illusion_outgoing_tooltip",
        "value": [
          30,
          40,
          50,
          60
        ]
      },
      {
        "key": "illusion_incoming_damage",
        "value": [
          300
        ]
      },
      {
        "key": "illusion_incoming_damage_total_tooltip",
        "value": [
          400
        ]
      }
    ]
  },
  "terrorblade_metamorphosis": {
    "id": 5621,
    "name": "terrorblade_metamorphosis",
    "type": 0,
    "behavior": 2052,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        155
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          40,
          44,
          48,
          52
        ]
      },
      {
        "key": "transformation_time",
        "value": [
          0.35
        ]
      },
      {
        "key": "base_attack_time",
        "value": [
          1.5
        ]
      },
      {
        "key": "bonus_range",
        "value": [
          400
        ],
        "talent": "special_bonus_unique_terrorblade_3"
      },
      {
        "key": "tooltip_attack_range",
        "value": [
          550
        ],
        "talent": "special_bonus_unique_terrorblade_3"
      },
      {
        "key": "bonus_damage",
        "value": [
          20,
          40,
          60,
          80
        ]
      },
      {
        "key": "speed_loss",
        "value": [
          25
        ]
      },
      {
        "key": "metamorph_aura_tooltip",
        "value": [
          900
        ]
      }
    ]
  },
  "terrorblade_sunder": {
    "id": 5622,
    "name": "terrorblade_sunder",
    "type": 1,
    "behavior": 8388616,
    "targetTeam": 4,
    "targetType": 32,
    "targetFlag": 1040,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        475
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.35
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        120,
        80,
        40
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        200,
        100,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "hit_point_minimum_pct",
        "value": [
          35,
          30,
          25
        ]
      }
    ]
  },
  "phoenix_icarus_dive": {
    "id": 5623,
    "name": "phoenix_icarus_dive",
    "type": 0,
    "behavior": 33685520,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.2
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        36
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "hp_cost_perc",
        "value": [
          15
        ]
      },
      {
        "key": "dash_length",
        "value": [
          1400
        ],
        "talent": "special_bonus_unique_phoenix_4"
      },
      {
        "key": "dash_width",
        "value": [
          500
        ]
      },
      {
        "key": "hit_radius",
        "value": [
          200
        ]
      },
      {
        "key": "burn_duration",
        "value": [
          4
        ]
      },
      {
        "key": "damage_per_second",
        "value": [
          10,
          30,
          50,
          70
        ]
      },
      {
        "key": "burn_tick_interval",
        "value": [
          1
        ]
      },
      {
        "key": "slow_movement_speed_pct",
        "value": [
          -28
        ]
      },
      {
        "key": "dive_duration",
        "value": [
          2
        ]
      }
    ]
  },
  "phoenix_icarus_dive_stop": {
    "id": 5624,
    "name": "phoenix_icarus_dive_stop",
    "type": 0,
    "behavior": 8390725,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": []
  },
  "phoenix_fire_spirits": {
    "id": 5625,
    "name": "phoenix_fire_spirits",
    "type": 0,
    "behavior": 2052,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1400
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.01,
        0.01,
        0.01,
        0.01
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        45,
        40,
        35,
        30
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        80,
        90,
        100,
        110
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "hp_cost_perc",
        "value": [
          20
        ]
      },
      {
        "key": "spirit_duration",
        "value": [
          20
        ]
      },
      {
        "key": "spirit_speed",
        "value": [
          900,
          900,
          900,
          900
        ]
      },
      {
        "key": "radius",
        "value": [
          175,
          175,
          175,
          175
        ]
      },
      {
        "key": "duration",
        "value": [
          4
        ]
      },
      {
        "key": "attackspeed_slow",
        "value": [
          -80,
          -100,
          -120,
          -140
        ]
      },
      {
        "key": "damage_per_second",
        "value": [
          20,
          40,
          60,
          80
        ],
        "talent": "special_bonus_unique_phoenix_3"
      },
      {
        "key": "spirit_count",
        "value": [
          4
        ]
      },
      {
        "key": "tick_interval",
        "value": [
          1
        ]
      }
    ]
  },
  "phoenix_sun_ray": {
    "id": 5626,
    "name": "phoenix_sun_ray",
    "type": 0,
    "behavior": 16,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1300
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.01
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        26
      ],
      "duration": [
        6
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "hp_cost_perc_per_second",
        "value": [
          6
        ]
      },
      {
        "key": "base_damage",
        "value": [
          14,
          20,
          26,
          32
        ]
      },
      {
        "key": "hp_perc_damage",
        "value": [
          1.5,
          3.25,
          5,
          6.75
        ],
        "talent": "special_bonus_unique_phoenix_5"
      },
      {
        "key": "base_heal",
        "value": [
          7,
          10,
          13,
          16
        ]
      },
      {
        "key": "hp_perc_heal",
        "value": [
          0.625,
          1.25,
          1.875,
          2.5
        ]
      },
      {
        "key": "radius",
        "value": [
          130
        ]
      },
      {
        "key": "tick_interval",
        "value": [
          0.2
        ]
      },
      {
        "key": "forward_move_speed",
        "value": [
          250
        ]
      },
      {
        "key": "beam_range",
        "value": [
          1300
        ]
      },
      {
        "key": "turn_rate_initial",
        "value": [
          250
        ]
      },
      {
        "key": "turn_rate",
        "value": [
          25
        ]
      },
      {
        "key": "tooltip_duration",
        "value": [
          6
        ]
      }
    ]
  },
  "phoenix_sun_ray_stop": {
    "id": 5627,
    "name": "phoenix_sun_ray_stop",
    "type": 0,
    "behavior": 8390725,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": []
  },
  "phoenix_sun_ray_toggle_move": {
    "id": 5628,
    "name": "phoenix_sun_ray_toggle_move",
    "type": 0,
    "behavior": 8390724,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 1,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": []
  },
  "phoenix_supernova": {
    "id": 5630,
    "name": "phoenix_supernova",
    "type": 1,
    "behavior": 8388612,
    "targetTeam": 1,
    "targetType": 64,
    "targetFlag": 1024,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        500
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.01
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        110,
        110,
        110
      ],
      "duration": [
        6
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        200,
        200,
        200
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "aura_radius",
        "value": [
          1300
        ]
      },
      {
        "key": "damage_per_sec",
        "value": [
          60,
          90,
          120
        ]
      },
      {
        "key": "stun_duration",
        "value": [
          2,
          2.5,
          3
        ],
        "talent": "special_bonus_unique_phoenix_2"
      },
      {
        "key": "max_hero_attacks",
        "value": [
          5,
          8,
          11
        ],
        "talent": "special_bonus_unique_phoenix_1"
      },
      {
        "key": "max_hero_attacks_scepter",
        "value": [
          7,
          10,
          13
        ],
        "talent": "special_bonus_unique_phoenix_1"
      },
      {
        "key": "tooltip_duration",
        "value": [
          6
        ]
      },
      {
        "key": "cast_range_tooltip_scepter",
        "value": [
          500
        ]
      }
    ]
  },
  "phoenix_launch_fire_spirit": {
    "id": 5631,
    "name": "phoenix_launch_fire_spirit",
    "type": 0,
    "behavior": 33554481,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1400
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.01,
        0.01,
        0.01,
        0.01
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "hp_cost_perc",
        "value": [
          20
        ]
      },
      {
        "key": "spirit_duration",
        "value": [
          20,
          20,
          20,
          20
        ]
      },
      {
        "key": "spirit_speed",
        "value": [
          900,
          900,
          900,
          900
        ]
      },
      {
        "key": "radius",
        "value": [
          175,
          175,
          175,
          175
        ]
      },
      {
        "key": "duration",
        "value": [
          4
        ]
      },
      {
        "key": "attackspeed_slow",
        "value": [
          -80,
          -100,
          -120,
          -140
        ]
      },
      {
        "key": "damage_per_second",
        "value": [
          20,
          40,
          60,
          80
        ],
        "talent": "special_bonus_unique_phoenix_3"
      },
      {
        "key": "spirit_count",
        "value": [
          4
        ]
      },
      {
        "key": "tick_interval",
        "value": [
          1
        ]
      }
    ]
  },
  "oracle_fortunes_end": {
    "id": 5637,
    "name": "oracle_fortunes_end",
    "type": 0,
    "behavior": 134217896,
    "targetTeam": 4,
    "targetType": 65,
    "targetFlag": 8,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        850
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0
      ],
      "channelTime": [
        2.5
      ],
      "coolDown": [
        15,
        12,
        9,
        6
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        75
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "damage",
        "value": [
          90,
          120,
          150,
          180
        ]
      },
      {
        "key": "bolt_speed",
        "value": [
          1000
        ]
      },
      {
        "key": "minimum_purge_duration",
        "value": [
          0.5
        ]
      },
      {
        "key": "maximum_purge_duration",
        "value": [
          2.5
        ],
        "talent": "special_bonus_unique_oracle_2"
      },
      {
        "key": "radius",
        "value": [
          300
        ]
      },
      {
        "key": "max_channel_time_tooltip",
        "value": [
          2.5
        ]
      }
    ]
  },
  "oracle_fates_edict": {
    "id": 5638,
    "name": "oracle_fates_edict",
    "type": 0,
    "behavior": 8,
    "targetTeam": 3,
    "targetType": 65,
    "targetFlag": 8192,
    "spellImmunityType": 2,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        500,
        600,
        700,
        800
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        16,
        13,
        10,
        7
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        50
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          3,
          3.5,
          4,
          4.5
        ]
      },
      {
        "key": "magic_damage_resistance_pct_tooltip",
        "value": [
          100
        ]
      },
      {
        "key": "range_tooltip",
        "value": [
          500,
          600,
          700,
          800
        ]
      }
    ]
  },
  "oracle_purifying_flames": {
    "id": 5639,
    "name": "oracle_purifying_flames",
    "type": 0,
    "behavior": 8,
    "targetTeam": 3,
    "targetType": 65,
    "targetFlag": 8192,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        850
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        2.25
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        80,
        85,
        90,
        95
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "damage",
        "value": [
          90,
          180,
          270,
          360
        ]
      },
      {
        "key": "heal_per_second",
        "value": [
          11,
          22,
          33,
          44
        ]
      },
      {
        "key": "total_heal_tooltip",
        "value": [
          99,
          198,
          297,
          396
        ]
      },
      {
        "key": "duration",
        "value": [
          9
        ]
      },
      {
        "key": "tick_rate",
        "value": [
          1
        ]
      },
      {
        "key": "cooldown_scepter",
        "value": [
          1
        ]
      },
      {
        "key": "castpoint_scepter",
        "value": [
          0.1
        ]
      }
    ]
  },
  "oracle_false_promise": {
    "id": 5640,
    "name": "oracle_false_promise",
    "type": 1,
    "behavior": 8,
    "targetTeam": 1,
    "targetType": 64,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1000
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        100,
        65,
        30
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          8,
          9,
          10
        ],
        "talent": "special_bonus_unique_oracle"
      },
      {
        "key": "radius",
        "value": [
          400
        ]
      }
    ]
  },
  "monkey_king_boundless_strike": {
    "id": 5716,
    "name": "monkey_king_boundless_strike",
    "type": 0,
    "behavior": 16777232,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 2,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1200
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.4
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        22
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "stun_duration",
        "value": [
          0.4,
          0.8,
          1.2,
          1.6
        ]
      },
      {
        "key": "strike_crit_mult",
        "value": [
          150,
          175,
          200,
          225
        ],
        "talent": "special_bonus_unique_monkey_king"
      },
      {
        "key": "strike_radius",
        "value": [
          150
        ]
      },
      {
        "key": "strike_cast_range",
        "value": [
          1200
        ]
      }
    ]
  },
  "monkey_king_mischief": {
    "id": 5719,
    "name": "monkey_king_mischief",
    "type": 0,
    "behavior": 8454212,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 1,
    "fightRecapLevel": 2,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        3
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "movespeed",
        "value": [
          200
        ]
      },
      {
        "key": "reveal_radius",
        "value": [
          200
        ]
      }
    ]
  },
  "monkey_king_untransform": {
    "id": 5722,
    "name": "monkey_king_untransform",
    "type": 0,
    "behavior": 8454213,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 1,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        1
      ],
      "duration": [
        10,
        10,
        10,
        10
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": []
  },
  "monkey_king_tree_dance": {
    "id": 5721,
    "name": "monkey_king_tree_dance",
    "type": 0,
    "behavior": 131080,
    "targetTeam": 2,
    "targetType": 512,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1000
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        1.2
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "leap_speed",
        "value": [
          700
        ]
      },
      {
        "key": "spring_leap_speed",
        "value": [
          1300
        ]
      },
      {
        "key": "give_up_distance",
        "value": [
          1850
        ]
      },
      {
        "key": "ground_jump_distance",
        "value": [
          1000
        ],
        "talent": "special_bonus_unique_monkey_king_7"
      },
      {
        "key": "perched_jump_distance",
        "value": [
          1000
        ],
        "talent": "special_bonus_unique_monkey_king_7"
      },
      {
        "key": "jump_damage_cooldown",
        "value": [
          3
        ]
      },
      {
        "key": "perched_day_vision",
        "value": [
          800
        ]
      },
      {
        "key": "perched_night_vision",
        "value": [
          400
        ]
      },
      {
        "key": "perched_spot_height",
        "value": [
          192
        ]
      },
      {
        "key": "unperched_stunned_duration",
        "value": [
          4
        ]
      },
      {
        "key": "top_level_height",
        "value": [
          500
        ]
      },
      {
        "key": "impact_damage_tooltip",
        "value": [
          140,
          210,
          280,
          350
        ],
        "talent": "special_bonus_unique_monkey_king_3"
      },
      {
        "key": "impact_movement_slow_tooltip",
        "value": [
          20,
          40,
          60,
          80
        ]
      }
    ]
  },
  "monkey_king_primal_spring": {
    "id": 5724,
    "name": "monkey_king_primal_spring",
    "type": 0,
    "behavior": 131312,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0
      ],
      "channelTime": [
        1.7
      ],
      "coolDown": [
        19,
        17,
        15,
        13
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "impact_damage",
        "value": [
          140,
          210,
          280,
          350
        ],
        "talent": "special_bonus_unique_monkey_king_3"
      },
      {
        "key": "impact_movement_slow",
        "value": [
          20,
          40,
          60,
          80
        ]
      },
      {
        "key": "impact_slow_duration",
        "value": [
          4
        ]
      },
      {
        "key": "max_distance",
        "value": [
          1000
        ]
      },
      {
        "key": "impact_radius",
        "value": [
          375
        ]
      }
    ]
  },
  "monkey_king_primal_spring_early": {
    "id": 5726,
    "name": "monkey_king_primal_spring_early",
    "type": 0,
    "behavior": 526405,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": []
  },
  "monkey_king_wukongs_command": {
    "id": 5725,
    "name": "monkey_king_wukongs_command",
    "type": 1,
    "behavior": 16777264,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 2,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        1.2
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        130,
        110,
        90
      ],
      "duration": [
        13
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "first_radius",
        "value": [
          300
        ]
      },
      {
        "key": "second_radius",
        "value": [
          750
        ]
      },
      {
        "key": "num_first_soldiers",
        "value": [
          5
        ]
      },
      {
        "key": "num_second_soldiers",
        "value": [
          9
        ]
      },
      {
        "key": "move_speed",
        "value": [
          700
        ]
      },
      {
        "key": "bonus_armor",
        "value": [
          12,
          18,
          24
        ],
        "talent": "special_bonus_unique_monkey_king_4"
      },
      {
        "key": "attack_speed",
        "value": [
          1.3
        ]
      },
      {
        "key": "duration",
        "value": [
          13
        ]
      },
      {
        "key": "leadership_radius_buffer",
        "value": [
          30
        ]
      },
      {
        "key": "cast_range",
        "value": [
          550
        ]
      },
      {
        "key": "outer_attack_buffer",
        "value": [
          0
        ]
      }
    ]
  },
  "monkey_king_jingu_mastery": {
    "id": 5723,
    "name": "monkey_king_jingu_mastery",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "required_hits",
        "value": [
          4
        ]
      },
      {
        "key": "counter_duration",
        "value": [
          10
        ]
      },
      {
        "key": "charges",
        "value": [
          4
        ]
      },
      {
        "key": "bonus_damage",
        "value": [
          60,
          90,
          120,
          150
        ],
        "talent": "special_bonus_unique_monkey_king_2"
      },
      {
        "key": "lifesteal",
        "value": [
          15,
          30,
          45,
          60
        ]
      },
      {
        "key": "max_duration",
        "value": [
          35
        ]
      }
    ]
  },
  "pangolier_swashbuckle": {
    "id": 6344,
    "name": "pangolier_swashbuckle",
    "type": 0,
    "behavior": 196624,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 2,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1000
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        20,
        16,
        12,
        8
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        80,
        90,
        100,
        110
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "dash_range",
        "value": [
          1000
        ]
      },
      {
        "key": "range",
        "value": [
          900
        ]
      },
      {
        "key": "dash_speed",
        "value": [
          2000
        ]
      },
      {
        "key": "attack_interval",
        "value": [
          0.1,
          0.1,
          0.1,
          0.1
        ]
      },
      {
        "key": "damage",
        "value": [
          24,
          42,
          60,
          78
        ],
        "talent": "special_bonus_unique_pangolier_3"
      },
      {
        "key": "start_radius",
        "value": [
          125
        ]
      },
      {
        "key": "end_radius",
        "value": [
          125
        ]
      },
      {
        "key": "strikes",
        "value": [
          4
        ]
      }
    ]
  },
  "pangolier_shield_crash": {
    "id": 6461,
    "name": "pangolier_shield_crash",
    "type": 0,
    "behavior": 2052,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        19,
        17,
        15,
        13
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        90,
        100,
        110,
        120
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "damage",
        "value": [
          75,
          150,
          225,
          300
        ]
      },
      {
        "key": "hero_stacks",
        "value": [
          9,
          12,
          15,
          18
        ]
      },
      {
        "key": "duration",
        "value": [
          10
        ]
      },
      {
        "key": "radius",
        "value": [
          500
        ]
      },
      {
        "key": "jump_duration",
        "value": [
          0.4
        ]
      },
      {
        "key": "jump_duration_gyroshell",
        "value": [
          0.75
        ]
      },
      {
        "key": "jump_height",
        "value": [
          250
        ]
      },
      {
        "key": "jump_height_gyroshell",
        "value": [
          350
        ]
      },
      {
        "key": "jump_horizontal_distance",
        "value": [
          225
        ]
      }
    ]
  },
  "pangolier_heartpiercer": {
    "id": 6346,
    "name": "pangolier_heartpiercer",
    "type": 0,
    "behavior": 2,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "chance_pct",
        "value": [
          15
        ]
      },
      {
        "key": "duration",
        "value": [
          2,
          3,
          4,
          5
        ]
      },
      {
        "key": "slow_pct",
        "value": [
          -35,
          -40,
          -45,
          -50
        ]
      },
      {
        "key": "debuff_delay",
        "value": [
          2
        ]
      }
    ]
  },
  "pangolier_gyroshell": {
    "id": 6343,
    "name": "pangolier_gyroshell",
    "type": 1,
    "behavior": 33685508,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        1.2
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        70
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        200,
        275,
        350
      ],
      "manaCost": [
        100
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "cast_time_tooltip",
        "value": [
          1.2
        ]
      },
      {
        "key": "tick_interval",
        "value": [
          0.05
        ]
      },
      {
        "key": "forward_move_speed",
        "value": [
          600
        ]
      },
      {
        "key": "turn_rate_boosted",
        "value": [
          165
        ]
      },
      {
        "key": "turn_rate",
        "value": [
          120
        ]
      },
      {
        "key": "radius",
        "value": [
          400
        ]
      },
      {
        "key": "hit_radius",
        "value": [
          150
        ]
      },
      {
        "key": "bounce_duration",
        "value": [
          0.4
        ]
      },
      {
        "key": "stun_duration",
        "value": [
          1,
          1.25,
          1.5
        ]
      },
      {
        "key": "knockback_radius",
        "value": [
          150
        ]
      },
      {
        "key": "duration",
        "value": [
          8
        ],
        "talent": "special_bonus_unique_pangolier_6"
      },
      {
        "key": "jump_recover_time",
        "value": [
          0.25
        ]
      }
    ]
  },
  "pangolier_gyroshell_stop": {
    "id": 6459,
    "name": "pangolier_gyroshell_stop",
    "type": 1,
    "behavior": 8390725,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        0,
        0,
        0,
        0
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": []
  },
  "dark_willow_bramble_maze": {
    "id": 6339,
    "name": "dark_willow_bramble_maze",
    "type": 0,
    "behavior": 48,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1200
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        34,
        31,
        28,
        25
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        140,
        150,
        160,
        170
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "placement_range",
        "value": [
          500
        ]
      },
      {
        "key": "placement_count",
        "value": [
          8
        ]
      },
      {
        "key": "placement_duration",
        "value": [
          15
        ]
      },
      {
        "key": "latch_duration",
        "value": [
          1,
          1.5,
          2,
          2.5
        ]
      },
      {
        "key": "latch_range",
        "value": [
          90
        ]
      },
      {
        "key": "latch_damage",
        "value": [
          140,
          180,
          220,
          260
        ]
      },
      {
        "key": "latch_creation_interval",
        "value": [
          0.075
        ]
      },
      {
        "key": "latch_creation_delay",
        "value": [
          0.1
        ]
      },
      {
        "key": "initial_creation_delay",
        "value": [
          0.5
        ]
      }
    ]
  },
  "dark_willow_bedlam": {
    "id": 6340,
    "name": "dark_willow_bedlam",
    "linkedAbility": "dark_willow_terrorize",
    "type": 1,
    "behavior": 2052,
    "targetTeam": 2,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 3,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        30
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100,
        150,
        200
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "attack_damage",
        "value": [
          60,
          120,
          180
        ]
      },
      {
        "key": "attack_interval",
        "value": [
          0.25
        ]
      },
      {
        "key": "attack_radius",
        "value": [
          300
        ]
      },
      {
        "key": "attack_targets",
        "value": [
          1
        ]
      },
      {
        "key": "roaming_radius",
        "value": [
          200
        ]
      },
      {
        "key": "roaming_seconds_per_rotation",
        "value": [
          1.8
        ]
      },
      {
        "key": "roaming_duration",
        "value": [
          5
        ]
      }
    ]
  },
  "dark_willow_terrorize": {
    "id": 8340,
    "name": "dark_willow_terrorize",
    "linkedAbility": "dark_willow_bedlam",
    "type": 1,
    "behavior": 16777264,
    "targetTeam": 2,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1500
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        1
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        100,
        80,
        60
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        150
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "destination_travel_speed",
        "value": [
          2000
        ]
      },
      {
        "key": "destination_radius",
        "value": [
          400
        ]
      },
      {
        "key": "destination_status_duration",
        "value": [
          4
        ],
        "talent": "special_bonus_unique_dark_willow_2"
      },
      {
        "key": "return_travel_speed",
        "value": [
          500
        ]
      },
      {
        "key": "starting_height",
        "value": [
          300
        ]
      }
    ]
  },
  "dark_willow_shadow_realm": {
    "id": 6341,
    "name": "dark_willow_shadow_realm",
    "type": 0,
    "behavior": 1050628,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        30,
        24,
        18,
        12
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        70,
        80,
        90,
        100
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          5
        ]
      },
      {
        "key": "damage",
        "value": [
          90,
          180,
          270,
          360
        ],
        "talent": "special_bonus_unique_dark_willow_1"
      },
      {
        "key": "attack_range_bonus",
        "value": [
          600
        ]
      },
      {
        "key": "max_damage_duration",
        "value": [
          3
        ]
      }
    ]
  },
  "dark_willow_cursed_crown": {
    "id": 6342,
    "name": "dark_willow_cursed_crown",
    "type": 0,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        600
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.2
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        18,
        16,
        14,
        12
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        80,
        100,
        120,
        140
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "delay",
        "value": [
          4
        ]
      },
      {
        "key": "stun_duration",
        "value": [
          2,
          2.5,
          3,
          3.5
        ]
      },
      {
        "key": "stun_radius",
        "value": [
          325
        ]
      }
    ]
  },
  "grimstroke_dark_artistry": {
    "id": 8000,
    "name": "grimstroke_dark_artistry",
    "type": 0,
    "behavior": 16,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1400
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.8
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        11,
        9,
        7,
        5
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100,
        110,
        120,
        130
      ],
      "modifierSupportValue": 0.5,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "start_radius",
        "value": [
          120
        ]
      },
      {
        "key": "end_radius",
        "value": [
          160
        ]
      },
      {
        "key": "projectile_speed",
        "value": [
          2400
        ]
      },
      {
        "key": "damage",
        "value": [
          120,
          180,
          240,
          300
        ],
        "talent": "special_bonus_unique_grimstroke_2"
      },
      {
        "key": "bonus_damage_per_target",
        "value": [
          16,
          24,
          32,
          40
        ],
        "talent": "special_bonus_unique_grimstroke_2"
      },
      {
        "key": "movement_slow_pct",
        "value": [
          50,
          60,
          70,
          80
        ]
      },
      {
        "key": "slow_duration",
        "value": [
          1.5
        ]
      },
      {
        "key": "vision_duration",
        "value": [
          2
        ]
      },
      {
        "key": "range_tooltip",
        "value": [
          1400
        ],
        "talent": "special_bonus_unique_grimstroke_3"
      }
    ]
  },
  "grimstroke_ink_creature": {
    "id": 8006,
    "name": "grimstroke_ink_creature",
    "type": 0,
    "behavior": 33554440,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        900
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        32,
        28,
        24,
        20
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        110,
        120,
        130,
        140
      ],
      "modifierSupportValue": 0.5,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "spawn_time",
        "value": [
          0
        ]
      },
      {
        "key": "speed",
        "value": [
          750
        ]
      },
      {
        "key": "latch_duration",
        "value": [
          4,
          4,
          5,
          5
        ]
      },
      {
        "key": "destroy_attacks",
        "value": [
          6,
          6,
          9,
          9
        ],
        "talent": "special_bonus_unique_grimstroke_4"
      },
      {
        "key": "hero_attack_multiplier",
        "value": [
          3
        ]
      },
      {
        "key": "damage_per_tick",
        "value": [
          6,
          9,
          12,
          15
        ]
      },
      {
        "key": "dps_tooltip",
        "value": [
          12,
          18,
          24,
          30
        ]
      },
      {
        "key": "enemy_vision_time",
        "value": [
          4
        ]
      },
      {
        "key": "tick_interval",
        "value": [
          0.5
        ]
      },
      {
        "key": "infection_search_radius",
        "value": [
          1000
        ]
      },
      {
        "key": "pop_damage",
        "value": [
          120,
          200,
          280,
          360
        ]
      },
      {
        "key": "return_projectile_speed",
        "value": [
          750
        ]
      },
      {
        "key": "latched_unit_offset",
        "value": [
          130
        ]
      },
      {
        "key": "latched_unit_offset_short",
        "value": [
          95
        ]
      }
    ]
  },
  "grimstroke_spirit_walk": {
    "id": 8007,
    "name": "grimstroke_spirit_walk",
    "type": 0,
    "behavior": 8388616,
    "targetTeam": 1,
    "targetType": 65,
    "targetFlag": 8192,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        400,
        500,
        600,
        700
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.15
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        30,
        25,
        20,
        15
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        90,
        100,
        110,
        120
      ],
      "modifierSupportValue": 0.75,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "cast_range_tooltip",
        "value": [
          400,
          500,
          600,
          700
        ]
      },
      {
        "key": "buff_duration",
        "value": [
          3
        ]
      },
      {
        "key": "movespeed_bonus_pct",
        "value": [
          18,
          22,
          26,
          30
        ]
      },
      {
        "key": "radius",
        "value": [
          400
        ],
        "talent": "special_bonus_unique_grimstroke_1"
      },
      {
        "key": "max_damage",
        "value": [
          220,
          280,
          340,
          400
        ]
      },
      {
        "key": "max_stun",
        "value": [
          2.2,
          2.8,
          3.4,
          4
        ]
      },
      {
        "key": "damage_per_tick",
        "value": [
          5,
          7,
          9,
          11
        ]
      },
      {
        "key": "tick_rate",
        "value": [
          0.2
        ]
      },
      {
        "key": "tick_dps_tooltip",
        "value": [
          25,
          35,
          45,
          55
        ]
      }
    ]
  },
  "grimstroke_soul_chain": {
    "id": 6491,
    "name": "grimstroke_soul_chain",
    "type": 1,
    "behavior": 40,
    "targetTeam": 2,
    "targetType": 64,
    "targetFlag": 16,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        700,
        800,
        900
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.15
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        80,
        65,
        50
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        150,
        200,
        250
      ],
      "modifierSupportValue": 0.75,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "chain_duration",
        "value": [
          4,
          6,
          8
        ]
      },
      {
        "key": "chain_latch_radius",
        "value": [
          550
        ]
      },
      {
        "key": "chain_break_distance",
        "value": [
          700
        ]
      },
      {
        "key": "leash_limit_multiplier",
        "value": [
          1.3
        ]
      },
      {
        "key": "leash_radius_buffer",
        "value": [
          50
        ]
      },
      {
        "key": "creep_duration_pct",
        "value": [
          50
        ]
      },
      {
        "key": "movement_slow",
        "value": [
          15,
          30,
          45
        ]
      },
      {
        "key": "cast_range_tooltip",
        "value": [
          700,
          800,
          900
        ]
      }
    ]
  },
  "techies_land_mines": {
    "id": 5599,
    "name": "techies_land_mines",
    "type": 0,
    "behavior": 48,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        100
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        12
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        110,
        130,
        150,
        170
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          400
        ]
      },
      {
        "key": "proximity_threshold",
        "value": [
          1.6
        ]
      },
      {
        "key": "damage",
        "value": [
          200,
          400,
          600,
          800
        ]
      },
      {
        "key": "burn_duration",
        "value": [
          5
        ]
      },
      {
        "key": "building_damage_pct",
        "value": [
          25
        ]
      },
      {
        "key": "activation_delay",
        "value": [
          1.75
        ]
      }
    ]
  },
  "techies_stasis_trap": {
    "id": 5600,
    "name": "techies_stasis_trap",
    "type": 0,
    "behavior": 16777264,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        150
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        1
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        20,
        16,
        13,
        10
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        80,
        110,
        140,
        160
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "activation_radius",
        "value": [
          400
        ]
      },
      {
        "key": "explode_delay",
        "value": [
          0
        ]
      },
      {
        "key": "stun_radius",
        "value": [
          600
        ]
      },
      {
        "key": "stun_duration",
        "value": [
          2,
          3,
          4,
          5
        ]
      },
      {
        "key": "activation_time",
        "value": [
          2
        ]
      },
      {
        "key": "fade_time",
        "value": [
          2
        ]
      },
      {
        "key": "duration",
        "value": [
          600
        ]
      }
    ]
  },
  "techies_suicide": {
    "id": 5601,
    "name": "techies_suicide",
    "type": 0,
    "behavior": 16777264,
    "targetTeam": 2,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1000
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        1
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        35
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        100,
        125,
        150,
        175
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          400
        ]
      },
      {
        "key": "damage",
        "value": [
          300,
          400,
          500,
          600
        ],
        "talent": "special_bonus_unique_techies"
      },
      {
        "key": "silence_duration",
        "value": [
          4,
          5,
          6,
          7
        ]
      },
      {
        "key": "hp_cost",
        "value": [
          50
        ]
      },
      {
        "key": "duration",
        "value": [
          0.75
        ]
      }
    ]
  },
  "techies_remote_mines": {
    "id": 5602,
    "name": "techies_remote_mines",
    "type": 1,
    "behavior": 16777232,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        500
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        1
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        10,
        10,
        10
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        200,
        240,
        300
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "max_mines",
        "value": [
          21
        ]
      },
      {
        "key": "damage",
        "value": [
          300,
          450,
          600
        ]
      },
      {
        "key": "radius",
        "value": [
          425
        ]
      },
      {
        "key": "duration",
        "value": [
          600
        ]
      },
      {
        "key": "activation_time",
        "value": [
          2
        ]
      },
      {
        "key": "cast_range_tooltip",
        "value": [
          500
        ]
      },
      {
        "key": "damage_scepter",
        "value": [
          450,
          600,
          750
        ]
      },
      {
        "key": "radius_scepter",
        "value": [
          425
        ]
      },
      {
        "key": "cast_range_scepter",
        "value": [
          700
        ]
      },
      {
        "key": "vision_radius",
        "value": [
          500
        ]
      },
      {
        "key": "vision_duration",
        "value": [
          3
        ]
      },
      {
        "key": "model_scale",
        "value": [
          0,
          10,
          20
        ]
      },
      {
        "key": "detonate_delay",
        "value": [
          0.25
        ]
      }
    ]
  },
  "techies_focused_detonate": {
    "id": 5635,
    "name": "techies_focused_detonate",
    "type": 0,
    "behavior": 268699760,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 1,
    "fightRecapLevel": 0,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        1,
        1,
        1
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          700
        ]
      }
    ]
  },
  "techies_minefield_sign": {
    "id": 5644,
    "name": "techies_minefield_sign",
    "type": 0,
    "behavior": 268435504,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 1,
    "fightRecapLevel": 0,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        10
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        360
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "aura_radius",
        "value": [
          125
        ]
      },
      {
        "key": "lifetime",
        "value": [
          180
        ]
      }
    ]
  },
  "winter_wyvern_arctic_burn": {
    "id": 5651,
    "name": "winter_wyvern_arctic_burn",
    "type": 0,
    "behavior": 2052,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 0,
    "isGrantedByScepter": true,
    "hasScepterUpgrade": true,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0,
        0,
        0,
        0
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        50,
        40,
        30,
        20
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        90
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          8
        ]
      },
      {
        "key": "attack_range_bonus",
        "value": [
          350,
          425,
          500,
          575
        ]
      },
      {
        "key": "percent_damage",
        "value": [
          6,
          7,
          8,
          9
        ]
      },
      {
        "key": "tick_rate",
        "value": [
          1
        ]
      },
      {
        "key": "damage_duration",
        "value": [
          5
        ]
      },
      {
        "key": "move_slow",
        "value": [
          22,
          28,
          34,
          40
        ],
        "talent": "special_bonus_unique_winter_wyvern_1"
      },
      {
        "key": "night_vision_bonus",
        "value": [
          400
        ]
      },
      {
        "key": "projectile_speed_bonus",
        "value": [
          500
        ]
      },
      {
        "key": "tree_destruction_radius",
        "value": [
          250
        ]
      },
      {
        "key": "attack_point",
        "value": [
          0.1
        ]
      },
      {
        "key": "max_attacks",
        "value": [
          5
        ]
      },
      {
        "key": "mana_cost_scepter",
        "value": [
          40
        ]
      }
    ]
  },
  "winter_wyvern_splinter_blast": {
    "id": 5652,
    "name": "winter_wyvern_splinter_blast",
    "type": 0,
    "behavior": 40,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1200
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        7
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        100,
        180,
        260,
        340
      ],
      "manaCost": [
        105,
        120,
        135,
        150
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "projectile_speed",
        "value": [
          650
        ]
      },
      {
        "key": "projectile_max_time",
        "value": [
          1
        ]
      },
      {
        "key": "split_radius",
        "value": [
          500
        ]
      },
      {
        "key": "bonus_movespeed",
        "value": [
          -30
        ]
      },
      {
        "key": "movespeed_slow_tooltip",
        "value": [
          30
        ]
      },
      {
        "key": "duration",
        "value": [
          4
        ]
      },
      {
        "key": "secondary_projectile_speed",
        "value": [
          650
        ]
      }
    ]
  },
  "winter_wyvern_cold_embrace": {
    "id": 5653,
    "name": "winter_wyvern_cold_embrace",
    "type": 0,
    "behavior": 8,
    "targetTeam": 1,
    "targetType": 80,
    "targetFlag": 0,
    "spellImmunityType": 3,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        1000
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        24,
        21,
        18,
        15
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        75,
        75,
        75,
        75
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          4
        ]
      },
      {
        "key": "heal_additive",
        "value": [
          10
        ]
      },
      {
        "key": "heal_percentage",
        "value": [
          3,
          4,
          5,
          6
        ]
      }
    ]
  },
  "winter_wyvern_winters_curse": {
    "id": 5654,
    "name": "winter_wyvern_winters_curse",
    "type": 1,
    "behavior": 40,
    "targetTeam": 2,
    "targetType": 80,
    "targetFlag": 16,
    "spellImmunityType": 1,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        800
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        80
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        250
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          500
        ]
      },
      {
        "key": "damage_reduction",
        "value": [
          100
        ]
      },
      {
        "key": "damage_amplification",
        "value": [
          0
        ]
      },
      {
        "key": "bonus_attack_speed",
        "value": [
          55
        ]
      },
      {
        "key": "duration",
        "value": [
          4,
          4.75,
          5.5
        ],
        "talent": "special_bonus_unique_winter_wyvern_3"
      }
    ]
  },
  "arc_warden_flux": {
    "id": 5677,
    "name": "arc_warden_flux",
    "type": 0,
    "behavior": 8,
    "targetTeam": 2,
    "targetType": 65,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 1,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        500,
        600,
        700,
        800
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3,
        0.3,
        0.3,
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        16
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        75
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          6
        ],
        "talent": "special_bonus_unique_arc_warden_2"
      },
      {
        "key": "damage_per_second",
        "value": [
          15,
          30,
          45,
          60
        ]
      },
      {
        "key": "search_radius",
        "value": [
          225
        ]
      },
      {
        "key": "think_interval",
        "value": [
          0.5
        ]
      },
      {
        "key": "move_speed_slow_pct",
        "value": [
          20,
          30,
          40,
          50
        ]
      },
      {
        "key": "cast_range_tooltip",
        "value": [
          500,
          600,
          700,
          800
        ]
      }
    ]
  },
  "arc_warden_magnetic_field": {
    "id": 5678,
    "name": "arc_warden_magnetic_field",
    "type": 0,
    "behavior": 33554480,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        900
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        20
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        50,
        70,
        90,
        110
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          300
        ]
      },
      {
        "key": "duration",
        "value": [
          3.5,
          4.5,
          5.5,
          6.5
        ]
      },
      {
        "key": "attack_speed_bonus",
        "value": [
          50,
          60,
          70,
          80
        ]
      },
      {
        "key": "evasion_chance",
        "value": [
          100
        ]
      }
    ]
  },
  "arc_warden_spark_wraith": {
    "id": 5679,
    "name": "arc_warden_spark_wraith",
    "type": 0,
    "behavior": 48,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 3,
    "maxLevel": 0,
    "fightRecapLevel": 1,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        2000
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.3
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        4,
        4,
        4,
        4
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        80
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "radius",
        "value": [
          375
        ]
      },
      {
        "key": "activation_delay",
        "value": [
          2
        ]
      },
      {
        "key": "duration",
        "value": [
          50
        ]
      },
      {
        "key": "wraith_speed",
        "value": [
          400
        ]
      },
      {
        "key": "spark_damage",
        "value": [
          100,
          160,
          220,
          280
        ],
        "talent": "special_bonus_unique_arc_warden"
      },
      {
        "key": "think_interval",
        "value": [
          0.2
        ]
      },
      {
        "key": "wraith_vision_radius",
        "value": [
          300
        ]
      },
      {
        "key": "wraith_vision_duration",
        "value": [
          3.34
        ]
      },
      {
        "key": "ministun_duration",
        "value": [
          0.4,
          0.5,
          0.6,
          0.7
        ]
      }
    ]
  },
  "arc_warden_tempest_double": {
    "id": 5683,
    "name": "arc_warden_tempest_double",
    "type": 1,
    "behavior": 4,
    "targetTeam": 0,
    "targetType": 0,
    "targetFlag": 0,
    "spellImmunityType": 0,
    "spellDispellableType": 0,
    "damageType": 0,
    "maxLevel": 0,
    "fightRecapLevel": 2,
    "isGrantedByScepter": false,
    "hasScepterUpgrade": false,
    "stats": {
      "castRange": [
        0
      ],
      "castRangeBuffer": 250,
      "castPoint": [
        0.15
      ],
      "channelTime": [
        0,
        0,
        0,
        0
      ],
      "coolDown": [
        60,
        50,
        40
      ],
      "duration": [
        0,
        0,
        0,
        0
      ],
      "sharedCooldown": "0",
      "damage": [
        0,
        0,
        0,
        0
      ],
      "manaCost": [
        0,
        0,
        0,
        0
      ],
      "modifierSupportValue": 1,
      "modifierSupportBonus": 0
    },
    "special": [
      {
        "key": "duration",
        "value": [
          14,
          16,
          18
        ]
      }
    ]
  }
}