// tslint:disable
export default {
  "npc_dota_hero_antimage": {
    "id": 1,
    "name": "npc_dota_hero_antimage",
    "team": 0,
    "alias": [
      "am"
    ],
    "roles": {
      "carry": 3,
      "support": 0,
      "nuker": 1,
      "disabler": 0,
      "jungler": 0,
      "durable": 0,
      "escape": 3,
      "pusher": 0,
      "initiator": 0,
      "complexity": 1
    },
    "abilities": [
      "antimage_mana_break",
      "antimage_blink",
      "antimage_spell_shield",
      "antimage_mana_void"
    ],
    "talents": [
      "special_bonus_strength_10",
      "special_bonus_attack_speed_20",
      "special_bonus_unique_antimage_3",
      "special_bonus_agility_15",
      "special_bonus_unique_antimage_5",
      "special_bonus_unique_antimage",
      "special_bonus_unique_antimage_4",
      "special_bonus_unique_antimage_2"
    ],
    "armor": {
      "armorPhysical": -1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 29,
        "max": 33
      },
      "rate": 1.4,
      "range": 150,
      "animationPoint": 0.3,
      "acquisitionRange": 600,
      "projectileSpeed": 0
    },
    "attributes": {
      "primary": 1,
      "strength": {
        "base": 23,
        "gain": 1.3
      },
      "agility": {
        "base": 22,
        "gain": 2.8
      },
      "intelligence": {
        "base": 12,
        "gain": 1.8
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 310,
      "turnRate": 0.5,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.75,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default",
      "glowColor": "#784094"
    }
  },
  "npc_dota_hero_axe": {
    "id": 2,
    "name": "npc_dota_hero_axe",
    "team": 1,
    "alias": [],
    "roles": {
      "carry": 0,
      "support": 0,
      "nuker": 0,
      "disabler": 2,
      "jungler": 2,
      "durable": 3,
      "escape": 0,
      "pusher": 0,
      "initiator": 3,
      "complexity": 1
    },
    "abilities": [
      "axe_berserkers_call",
      "axe_battle_hunger",
      "axe_counter_helix",
      "axe_culling_blade"
    ],
    "talents": [
      "special_bonus_strength_8",
      "special_bonus_attack_speed_40",
      "special_bonus_mp_regen_3",
      "special_bonus_movement_speed_40",
      "special_bonus_hp_regen_20",
      "special_bonus_unique_axe_3",
      "special_bonus_unique_axe_2",
      "special_bonus_unique_axe"
    ],
    "armor": {
      "armorPhysical": -2,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 24,
        "max": 28
      },
      "rate": 1.7,
      "range": 150,
      "animationPoint": 0.5,
      "acquisitionRange": 600,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 0,
      "strength": {
        "base": 25,
        "gain": 2.8
      },
      "agility": {
        "base": 20,
        "gain": 2.2
      },
      "intelligence": {
        "base": 18,
        "gain": 1.6
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 290,
      "turnRate": 0.6,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 4.25,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": true,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default",
      "glowColor": "#de3c24"
    }
  },
  "npc_dota_hero_bane": {
    "id": 3,
    "name": "npc_dota_hero_bane",
    "team": 1,
    "alias": [],
    "roles": {
      "carry": 0,
      "support": 2,
      "nuker": 1,
      "disabler": 3,
      "jungler": 0,
      "durable": 1,
      "escape": 0,
      "pusher": 0,
      "initiator": 0,
      "complexity": 2
    },
    "abilities": [
      "bane_enfeeble",
      "bane_brain_sap",
      "bane_nightmare",
      "bane_fiends_grip",
      "bane_nightmare_end"
    ],
    "talents": [
      "special_bonus_armor_6",
      "special_bonus_cast_range_100",
      "special_bonus_unique_bane_4",
      "special_bonus_exp_boost_40",
      "special_bonus_unique_bane_1",
      "special_bonus_movement_speed_65",
      "special_bonus_unique_bane_2",
      "special_bonus_unique_bane_3"
    ],
    "armor": {
      "armorPhysical": 1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 35,
        "max": 41
      },
      "rate": 1.7,
      "range": 400,
      "animationPoint": 0.3,
      "acquisitionRange": 800,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 2,
      "strength": {
        "base": 23,
        "gain": 2.4
      },
      "agility": {
        "base": 23,
        "gain": 2.4
      },
      "intelligence": {
        "base": 23,
        "gain": 2.4
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 310,
      "turnRate": 0.6,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": true,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 4,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "ethereal",
      "gibTintColor": "#5c2ca7",
      "glowColor": "#cf6a7d"
    }
  },
  "npc_dota_hero_bloodseeker": {
    "id": 4,
    "name": "npc_dota_hero_bloodseeker",
    "team": 1,
    "alias": [
      "bs"
    ],
    "roles": {
      "carry": 1,
      "support": 0,
      "nuker": 1,
      "disabler": 1,
      "jungler": 1,
      "durable": 0,
      "escape": 0,
      "pusher": 0,
      "initiator": 1,
      "complexity": 1
    },
    "abilities": [
      "bloodseeker_bloodrage",
      "bloodseeker_blood_bath",
      "bloodseeker_thirst",
      "bloodseeker_rupture"
    ],
    "talents": [
      "special_bonus_attack_speed_25",
      "special_bonus_armor_6",
      "special_bonus_hp_275",
      "special_bonus_unique_bloodseeker_2",
      "special_bonus_unique_bloodseeker_3",
      "special_bonus_lifesteal_25",
      "special_bonus_unique_bloodseeker",
      "special_bonus_unique_bloodseeker_4"
    ],
    "armor": {
      "armorPhysical": 0,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 33,
        "max": 39
      },
      "rate": 1.7,
      "range": 150,
      "animationPoint": 0.43,
      "acquisitionRange": 600,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 1,
      "strength": {
        "base": 24,
        "gain": 2.7
      },
      "agility": {
        "base": 24,
        "gain": 3
      },
      "intelligence": {
        "base": 18,
        "gain": 1.7
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 285,
      "turnRate": 0.5,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": true,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default",
      "glowColor": "#f73c0c"
    }
  },
  "npc_dota_hero_crystal_maiden": {
    "id": 5,
    "name": "npc_dota_hero_crystal_maiden",
    "team": 0,
    "alias": [
      "cm",
      "rylai"
    ],
    "roles": {
      "carry": 0,
      "support": 3,
      "nuker": 2,
      "disabler": 2,
      "jungler": 1,
      "durable": 0,
      "escape": 0,
      "pusher": 0,
      "initiator": 0,
      "complexity": 1
    },
    "abilities": [
      "crystal_maiden_crystal_nova",
      "crystal_maiden_frostbite",
      "crystal_maiden_brilliance_aura",
      "crystal_maiden_freezing_field"
    ],
    "talents": [
      "special_bonus_hp_250",
      "special_bonus_cast_range_100",
      "special_bonus_unique_crystal_maiden_4",
      "special_bonus_gold_income_25",
      "special_bonus_attack_speed_250",
      "special_bonus_unique_crystal_maiden_3",
      "special_bonus_unique_crystal_maiden_1",
      "special_bonus_unique_crystal_maiden_2"
    ],
    "armor": {
      "armorPhysical": 0,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 26,
        "max": 32
      },
      "rate": 1.7,
      "range": 600,
      "animationPoint": 0.55,
      "acquisitionRange": 800,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 2,
      "strength": {
        "base": 18,
        "gain": 2
      },
      "agility": {
        "base": 16,
        "gain": 1.6
      },
      "intelligence": {
        "base": 14,
        "gain": 2.9
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 275,
      "turnRate": 0.5,
      "hasAggressiveStance": true
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": true,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "ice",
      "glowColor": "#52ecff"
    }
  },
  "npc_dota_hero_drow_ranger": {
    "id": 6,
    "name": "npc_dota_hero_drow_ranger",
    "team": 0,
    "alias": [],
    "roles": {
      "carry": 2,
      "support": 0,
      "nuker": 0,
      "disabler": 1,
      "jungler": 0,
      "durable": 0,
      "escape": 0,
      "pusher": 1,
      "initiator": 0,
      "complexity": 1
    },
    "abilities": [
      "drow_ranger_frost_arrows",
      "drow_ranger_wave_of_silence",
      "drow_ranger_trueshot",
      "drow_ranger_marksmanship"
    ],
    "talents": [
      "special_bonus_movement_speed_20",
      "special_bonus_all_stats_5",
      "special_bonus_attack_speed_25",
      "special_bonus_unique_drow_ranger_2",
      "special_bonus_unique_drow_ranger_3",
      "special_bonus_unique_drow_ranger_4",
      "special_bonus_unique_drow_ranger_1",
      "special_bonus_cooldown_reduction_50"
    ],
    "armor": {
      "armorPhysical": -3,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 25,
        "max": 36
      },
      "rate": 1.7,
      "range": 625,
      "animationPoint": 0.65,
      "acquisitionRange": 800,
      "projectileSpeed": 1250
    },
    "attributes": {
      "primary": 1,
      "strength": {
        "base": 17,
        "gain": 1.9
      },
      "agility": {
        "base": 19,
        "gain": 2.2
      },
      "intelligence": {
        "base": 15,
        "gain": 1.4
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 285,
      "turnRate": 0.7,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.75,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": true,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default",
      "glowColor": "#013cf6"
    }
  },
  "npc_dota_hero_earthshaker": {
    "id": 7,
    "name": "npc_dota_hero_earthshaker",
    "team": 0,
    "alias": [],
    "roles": {
      "carry": 0,
      "support": 1,
      "nuker": 1,
      "disabler": 2,
      "jungler": 0,
      "durable": 0,
      "escape": 0,
      "pusher": 0,
      "initiator": 3,
      "complexity": 2
    },
    "abilities": [
      "earthshaker_fissure",
      "earthshaker_enchant_totem",
      "earthshaker_aftershock",
      "earthshaker_echo_slam"
    ],
    "talents": [
      "special_bonus_attack_damage_30",
      "special_bonus_mp_250",
      "special_bonus_movement_speed_30",
      "special_bonus_armor_7",
      "special_bonus_unique_earthshaker_2",
      "special_bonus_unique_earthshaker_3",
      "special_bonus_magic_resistance_50",
      "special_bonus_unique_earthshaker"
    ],
    "armor": {
      "armorPhysical": 1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 27,
        "max": 37
      },
      "rate": 1.7,
      "range": 150,
      "animationPoint": 0.467,
      "acquisitionRange": 600,
      "projectileSpeed": 0
    },
    "attributes": {
      "primary": 0,
      "strength": {
        "base": 22,
        "gain": 3.2
      },
      "agility": {
        "base": 12,
        "gain": 1.4
      },
      "intelligence": {
        "base": 16,
        "gain": 1.8
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 310,
      "turnRate": 0.9,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 2.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": true,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default",
      "glowColor": "#ffa000"
    }
  },
  "npc_dota_hero_juggernaut": {
    "id": 8,
    "name": "npc_dota_hero_juggernaut",
    "team": 0,
    "alias": [],
    "roles": {
      "carry": 2,
      "support": 0,
      "nuker": 0,
      "disabler": 0,
      "jungler": 0,
      "durable": 0,
      "escape": 1,
      "pusher": 1,
      "initiator": 0,
      "complexity": 1
    },
    "abilities": [
      "juggernaut_blade_fury",
      "juggernaut_healing_ward",
      "juggernaut_blade_dance",
      "juggernaut_omni_slash"
    ],
    "talents": [
      "special_bonus_all_stats_5",
      "special_bonus_movement_speed_20",
      "special_bonus_unique_juggernaut",
      "special_bonus_attack_speed_25",
      "special_bonus_armor_10",
      "special_bonus_unique_juggernaut_3",
      "special_bonus_hp_600",
      "special_bonus_unique_juggernaut_2"
    ],
    "armor": {
      "armorPhysical": 1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 22,
        "max": 26
      },
      "rate": 1.4,
      "range": 150,
      "animationPoint": 0.33,
      "acquisitionRange": 600,
      "projectileSpeed": 0
    },
    "attributes": {
      "primary": 1,
      "strength": {
        "base": 21,
        "gain": 2.2
      },
      "agility": {
        "base": 26,
        "gain": 2.4
      },
      "intelligence": {
        "base": 14,
        "gain": 1.4
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 295,
      "turnRate": 0.6,
      "hasAggressiveStance": true
    },
    "status": {
      "health": 200,
      "healthRegen": 2,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": true,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default",
      "glowColor": "#de7824"
    }
  },
  "npc_dota_hero_mirana": {
    "id": 9,
    "name": "npc_dota_hero_mirana",
    "team": 0,
    "alias": [],
    "roles": {
      "carry": 1,
      "support": 1,
      "nuker": 1,
      "disabler": 1,
      "jungler": 0,
      "durable": 0,
      "escape": 2,
      "pusher": 0,
      "initiator": 0,
      "complexity": 2
    },
    "abilities": [
      "mirana_starfall",
      "mirana_arrow",
      "mirana_leap",
      "mirana_invis"
    ],
    "talents": [
      "special_bonus_attack_damage_15",
      "special_bonus_hp_200",
      "special_bonus_unique_mirana_3",
      "special_bonus_unique_mirana_1",
      "special_bonus_spell_amplify_12",
      "special_bonus_mana_break_25",
      "special_bonus_unique_mirana_2",
      "special_bonus_unique_mirana_4"
    ],
    "armor": {
      "armorPhysical": -1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 25,
        "max": 30
      },
      "rate": 1.7,
      "range": 630,
      "animationPoint": 0.3,
      "acquisitionRange": 800,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 1,
      "strength": {
        "base": 18,
        "gain": 2.15
      },
      "agility": {
        "base": 18,
        "gain": 3.2
      },
      "intelligence": {
        "base": 17,
        "gain": 1.65
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 295,
      "turnRate": 0.5,
      "hasAggressiveStance": true
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default",
      "glowColor": "#dcc2f8"
    }
  },
  "npc_dota_hero_nevermore": {
    "id": 11,
    "name": "npc_dota_hero_nevermore",
    "team": 1,
    "alias": [
      "sf"
    ],
    "roles": {
      "carry": 2,
      "support": 0,
      "nuker": 3,
      "disabler": 0,
      "jungler": 0,
      "durable": 0,
      "escape": 0,
      "pusher": 0,
      "initiator": 0,
      "complexity": 2
    },
    "abilities": [
      "nevermore_shadowraze1",
      "nevermore_shadowraze2",
      "nevermore_shadowraze3",
      "nevermore_necromastery",
      "nevermore_dark_lord",
      "nevermore_requiem"
    ],
    "talents": [
      "special_bonus_spell_amplify_8",
      "special_bonus_attack_speed_20",
      "special_bonus_unique_nevermore_3",
      "special_bonus_movement_speed_30",
      "special_bonus_unique_nevermore_1",
      "special_bonus_unique_nevermore_2",
      "special_bonus_unique_nevermore_5",
      "special_bonus_cooldown_reduction_40"
    ],
    "armor": {
      "armorPhysical": -2,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 15,
        "max": 21
      },
      "rate": 1.7,
      "range": 500,
      "animationPoint": 0.5,
      "acquisitionRange": 800,
      "projectileSpeed": 1200
    },
    "attributes": {
      "primary": 1,
      "strength": {
        "base": 16,
        "gain": 2.3
      },
      "agility": {
        "base": 20,
        "gain": 2.9
      },
      "intelligence": {
        "base": 18,
        "gain": 2
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 310,
      "turnRate": 1,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.75,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": true,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 0,
      "AbilityDraftDisabled": true,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "ethereal",
      "gibTintColor": "#4e1b1b",
      "glowColor": "#f02212"
    }
  },
  "npc_dota_hero_morphling": {
    "id": 10,
    "name": "npc_dota_hero_morphling",
    "team": 0,
    "alias": [],
    "roles": {
      "carry": 3,
      "support": 0,
      "nuker": 1,
      "disabler": 1,
      "jungler": 0,
      "durable": 2,
      "escape": 3,
      "pusher": 0,
      "initiator": 0,
      "complexity": 3
    },
    "abilities": [
      "morphling_waveform",
      "morphling_adaptive_strike_agi",
      "morphling_adaptive_strike_str",
      "morphling_morph_agi",
      "morphling_morph_str",
      "morphling_replicate",
      "morphling_morph_replicate",
      "morphling_morph"
    ],
    "talents": [
      "special_bonus_agility_10",
      "special_bonus_unique_morphling_1",
      "special_bonus_unique_morphling_8",
      "special_bonus_attack_speed_30",
      "special_bonus_unique_morphling_5",
      "special_bonus_unique_morphling_4",
      "special_bonus_unique_morphling_6",
      "special_bonus_unique_morphling_3"
    ],
    "armor": {
      "armorPhysical": -2,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 9,
        "max": 18
      },
      "rate": 1.5,
      "range": 350,
      "animationPoint": 0.5,
      "acquisitionRange": 800,
      "projectileSpeed": 1300
    },
    "attributes": {
      "primary": 1,
      "strength": {
        "base": 20,
        "gain": 2.3
      },
      "agility": {
        "base": 24,
        "gain": 3.7
      },
      "intelligence": {
        "base": 13,
        "gain": 1.1
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 280,
      "turnRate": 0.6,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": false,
      "Legs": 0,
      "AbilityDraftDisabled": true,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "ethereal",
      "gibTintColor": "#63ffff",
      "glowColor": "#21ffff"
    }
  },
  "npc_dota_hero_phantom_lancer": {
    "id": 12,
    "name": "npc_dota_hero_phantom_lancer",
    "team": 0,
    "alias": [
      "pl"
    ],
    "roles": {
      "carry": 2,
      "support": 0,
      "nuker": 1,
      "disabler": 0,
      "jungler": 0,
      "durable": 0,
      "escape": 2,
      "pusher": 1,
      "initiator": 0,
      "complexity": 2
    },
    "abilities": [
      "phantom_lancer_spirit_lance",
      "phantom_lancer_doppelwalk",
      "phantom_lancer_phantom_edge",
      "phantom_lancer_juxtapose"
    ],
    "talents": [
      "special_bonus_evasion_10",
      "special_bonus_attack_speed_20",
      "special_bonus_hp_250",
      "special_bonus_unique_phantom_lancer_2",
      "special_bonus_unique_phantom_lancer",
      "special_bonus_unique_phantom_lancer_3",
      "special_bonus_unique_phantom_lancer_4",
      "special_bonus_30_crit_2"
    ],
    "armor": {
      "armorPhysical": 0,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 22,
        "max": 44
      },
      "rate": 1.7,
      "range": 150,
      "animationPoint": 0.5,
      "acquisitionRange": 600,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 1,
      "strength": {
        "base": 19,
        "gain": 2
      },
      "agility": {
        "base": 29,
        "gain": 2.8
      },
      "intelligence": {
        "base": 19,
        "gain": 2
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 285,
      "turnRate": 0.6,
      "hasAggressiveStance": true
    },
    "status": {
      "health": 200,
      "healthRegen": 3,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default"
    }
  },
  "npc_dota_hero_puck": {
    "id": 13,
    "name": "npc_dota_hero_puck",
    "team": 0,
    "alias": [],
    "roles": {
      "carry": 0,
      "support": 0,
      "nuker": 2,
      "disabler": 3,
      "jungler": 0,
      "durable": 0,
      "escape": 3,
      "pusher": 0,
      "initiator": 3,
      "complexity": 2
    },
    "abilities": [
      "puck_illusory_orb",
      "puck_waning_rift",
      "puck_phase_shift",
      "puck_ethereal_jaunt",
      "puck_dream_coil"
    ],
    "talents": [
      "special_bonus_intelligence_10",
      "special_bonus_armor_5",
      "special_bonus_spell_amplify_8",
      "special_bonus_attack_damage_50",
      "special_bonus_unique_puck_2",
      "special_bonus_unique_puck",
      "special_bonus_gold_income_70",
      "special_bonus_unique_puck_3"
    ],
    "armor": {
      "armorPhysical": -2,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 30,
        "max": 41
      },
      "rate": 1.7,
      "range": 550,
      "animationPoint": 0.5,
      "acquisitionRange": 800,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 2,
      "strength": {
        "base": 17,
        "gain": 2
      },
      "agility": {
        "base": 22,
        "gain": 1.7
      },
      "intelligence": {
        "base": 23,
        "gain": 2.4
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 295,
      "turnRate": 0.5,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default",
      "glowColor": "#75f0ff"
    }
  },
  "npc_dota_hero_pudge": {
    "id": 14,
    "name": "npc_dota_hero_pudge",
    "team": 1,
    "alias": [],
    "roles": {
      "carry": 0,
      "support": 0,
      "nuker": 1,
      "disabler": 2,
      "jungler": 0,
      "durable": 2,
      "escape": 0,
      "pusher": 0,
      "initiator": 2,
      "complexity": 2
    },
    "abilities": [
      "pudge_meat_hook",
      "pudge_rot",
      "pudge_flesh_heap",
      "pudge_dismember"
    ],
    "talents": [
      "special_bonus_exp_boost_30",
      "special_bonus_unique_pudge_2",
      "special_bonus_spell_lifesteal_13",
      "special_bonus_unique_pudge_4",
      "special_bonus_gold_income_30",
      "special_bonus_cooldown_reduction_15",
      "special_bonus_unique_pudge_3",
      "special_bonus_unique_pudge_1"
    ],
    "armor": {
      "armorPhysical": -2,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 34,
        "max": 40
      },
      "rate": 1.7,
      "range": 150,
      "animationPoint": 0.5,
      "acquisitionRange": 600,
      "projectileSpeed": 0
    },
    "attributes": {
      "primary": 0,
      "strength": {
        "base": 25,
        "gain": 3.5
      },
      "agility": {
        "base": 14,
        "gain": 1.5
      },
      "intelligence": {
        "base": 14,
        "gain": 1.5
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 275,
      "turnRate": 0.7,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": true,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default",
      "glowColor": "#b28072"
    }
  },
  "npc_dota_hero_razor": {
    "id": 15,
    "name": "npc_dota_hero_razor",
    "team": 1,
    "alias": [],
    "roles": {
      "carry": 2,
      "support": 0,
      "nuker": 1,
      "disabler": 0,
      "jungler": 0,
      "durable": 2,
      "escape": 0,
      "pusher": 1,
      "initiator": 0,
      "complexity": 1
    },
    "abilities": [
      "razor_plasma_field",
      "razor_static_link",
      "razor_unstable_current",
      "razor_eye_of_the_storm"
    ],
    "talents": [
      "special_bonus_hp_200",
      "special_bonus_agility_15",
      "special_bonus_unique_razor",
      "special_bonus_unique_razor_3",
      "special_bonus_armor_10",
      "special_bonus_unique_razor_2",
      "special_bonus_attack_speed_100",
      "special_bonus_unique_razor_4"
    ],
    "armor": {
      "armorPhysical": -1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 23,
        "max": 25
      },
      "rate": 1.7,
      "range": 475,
      "animationPoint": 0.3,
      "acquisitionRange": 800,
      "projectileSpeed": 2000
    },
    "attributes": {
      "primary": 1,
      "strength": {
        "base": 22,
        "gain": 2.6
      },
      "agility": {
        "base": 22,
        "gain": 1.8
      },
      "intelligence": {
        "base": 21,
        "gain": 1.8
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 285,
      "turnRate": 0.5,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": true,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 0,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "electric",
      "glowColor": "#b6f2ff"
    }
  },
  "npc_dota_hero_sand_king": {
    "id": 16,
    "name": "npc_dota_hero_sand_king",
    "team": 1,
    "alias": [
      "sk"
    ],
    "roles": {
      "carry": 0,
      "support": 1,
      "nuker": 2,
      "disabler": 2,
      "jungler": 1,
      "durable": 0,
      "escape": 2,
      "pusher": 0,
      "initiator": 3,
      "complexity": 2
    },
    "abilities": [
      "sandking_burrowstrike",
      "sandking_sand_storm",
      "sandking_caustic_finale",
      "sandking_epicenter"
    ],
    "talents": [
      "special_bonus_movement_speed_25",
      "special_bonus_hp_200",
      "special_bonus_unique_sand_king_2",
      "special_bonus_unique_sand_king_3",
      "special_bonus_armor_10",
      "special_bonus_unique_sand_king",
      "special_bonus_hp_regen_35",
      "special_bonus_unique_sand_king_4"
    ],
    "armor": {
      "armorPhysical": -1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 25,
        "max": 35
      },
      "rate": 1.7,
      "range": 150,
      "animationPoint": 0.53,
      "acquisitionRange": 600,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 0,
      "strength": {
        "base": 22,
        "gain": 2.9
      },
      "agility": {
        "base": 19,
        "gain": 2.1
      },
      "intelligence": {
        "base": 16,
        "gain": 1.8
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 285,
      "turnRate": 0.5,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": true,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 6,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default",
      "glowColor": "#d8ae2e"
    }
  },
  "npc_dota_hero_storm_spirit": {
    "id": 17,
    "name": "npc_dota_hero_storm_spirit",
    "team": 0,
    "alias": [
      "ss",
      "raijin"
    ],
    "roles": {
      "carry": 2,
      "support": 0,
      "nuker": 2,
      "disabler": 1,
      "jungler": 0,
      "durable": 0,
      "escape": 3,
      "pusher": 0,
      "initiator": 1,
      "complexity": 3
    },
    "abilities": [
      "storm_spirit_static_remnant",
      "storm_spirit_electric_vortex",
      "storm_spirit_overload",
      "storm_spirit_ball_lightning"
    ],
    "talents": [
      "special_bonus_attack_damage_20",
      "special_bonus_mp_regen_175",
      "special_bonus_unique_storm_spirit_5",
      "special_bonus_hp_400",
      "special_bonus_unique_storm_spirit",
      "special_bonus_attack_speed_30",
      "special_bonus_unique_storm_spirit_3",
      "special_bonus_unique_storm_spirit_4"
    ],
    "armor": {
      "armorPhysical": 2,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 24,
        "max": 34
      },
      "rate": 1.7,
      "range": 480,
      "animationPoint": 0.5,
      "acquisitionRange": 800,
      "projectileSpeed": 1100
    },
    "attributes": {
      "primary": 2,
      "strength": {
        "base": 21,
        "gain": 1.8
      },
      "agility": {
        "base": 22,
        "gain": 1.5
      },
      "intelligence": {
        "base": 22,
        "gain": 3
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 285,
      "turnRate": 0.8,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": false,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "electric",
      "glowColor": "#00fae3"
    }
  },
  "npc_dota_hero_sven": {
    "id": 18,
    "name": "npc_dota_hero_sven",
    "team": 0,
    "alias": [],
    "roles": {
      "carry": 2,
      "support": 0,
      "nuker": 1,
      "disabler": 2,
      "jungler": 0,
      "durable": 2,
      "escape": 0,
      "pusher": 0,
      "initiator": 2,
      "complexity": 1
    },
    "abilities": [
      "sven_storm_bolt",
      "sven_great_cleave",
      "sven_warcry",
      "sven_gods_strength"
    ],
    "talents": [
      "special_bonus_strength_8",
      "special_bonus_mp_regen_2",
      "special_bonus_movement_speed_30",
      "special_bonus_unique_sven_3",
      "special_bonus_lifesteal_25",
      "special_bonus_unique_sven",
      "special_bonus_unique_sven_2",
      "special_bonus_unique_sven_4"
    ],
    "armor": {
      "armorPhysical": 1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 43,
        "max": 45
      },
      "rate": 1.8,
      "range": 150,
      "animationPoint": 0.4,
      "acquisitionRange": 600,
      "projectileSpeed": 0
    },
    "attributes": {
      "primary": 0,
      "strength": {
        "base": 23,
        "gain": 3
      },
      "agility": {
        "base": 21,
        "gain": 2
      },
      "intelligence": {
        "base": 16,
        "gain": 1.3
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 285,
      "turnRate": 0.6,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": true,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default",
      "glowColor": "#0032f7"
    }
  },
  "npc_dota_hero_tiny": {
    "id": 19,
    "name": "npc_dota_hero_tiny",
    "team": 0,
    "alias": [],
    "roles": {
      "carry": 3,
      "support": 0,
      "nuker": 2,
      "disabler": 1,
      "jungler": 0,
      "durable": 2,
      "escape": 0,
      "pusher": 2,
      "initiator": 2,
      "complexity": 1
    },
    "abilities": [
      "tiny_avalanche",
      "tiny_toss",
      "tiny_craggy_exterior",
      "tiny_grow",
      "tiny_toss_tree"
    ],
    "talents": [
      "special_bonus_magic_resistance_20",
      "special_bonus_attack_damage_30",
      "special_bonus_hp_350",
      "special_bonus_unique_tiny",
      "special_bonus_unique_tiny_4",
      "special_bonus_unique_tiny_5",
      "special_bonus_unique_tiny_3",
      "special_bonus_unique_tiny_2"
    ],
    "armor": {
      "armorPhysical": 0,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 44,
        "max": 50
      },
      "rate": 1.7,
      "range": 150,
      "animationPoint": 0.4,
      "acquisitionRange": 600,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 0,
      "strength": {
        "base": 30,
        "gain": 3.6
      },
      "agility": {
        "base": 0,
        "gain": 0
      },
      "intelligence": {
        "base": 17,
        "gain": 1.6
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 285,
      "turnRate": 0.5,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": true,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "stone",
      "glowColor": "#fef2c8"
    }
  },
  "npc_dota_hero_vengefulspirit": {
    "id": 20,
    "name": "npc_dota_hero_vengefulspirit",
    "team": 0,
    "alias": [
      "vs"
    ],
    "roles": {
      "carry": 0,
      "support": 3,
      "nuker": 1,
      "disabler": 2,
      "jungler": 0,
      "durable": 0,
      "escape": 1,
      "pusher": 0,
      "initiator": 2,
      "complexity": 1
    },
    "abilities": [
      "vengefulspirit_magic_missile",
      "vengefulspirit_wave_of_terror",
      "vengefulspirit_command_aura",
      "vengefulspirit_nether_swap"
    ],
    "talents": [
      "special_bonus_magic_resistance_15",
      "special_bonus_unique_vengeful_spirit_4",
      "special_bonus_agility_15",
      "special_bonus_unique_vengeful_spirit_6",
      "special_bonus_unique_vengeful_spirit_5",
      "special_bonus_unique_vengeful_spirit_2",
      "special_bonus_unique_vengeful_spirit_1",
      "special_bonus_unique_vengeful_spirit_3"
    ],
    "armor": {
      "armorPhysical": 0,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 12,
        "max": 20
      },
      "rate": 1.7,
      "range": 400,
      "animationPoint": 0.33,
      "acquisitionRange": 800,
      "projectileSpeed": 1500
    },
    "attributes": {
      "primary": 1,
      "strength": {
        "base": 19,
        "gain": 2.9
      },
      "agility": {
        "base": 27,
        "gain": 3.3
      },
      "intelligence": {
        "base": 13,
        "gain": 1.5
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 295,
      "turnRate": 0.6,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.75,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": true,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "ethereal",
      "gibTintColor": "#5781f2",
      "glowColor": "#8571a4"
    }
  },
  "npc_dota_hero_windrunner": {
    "id": 21,
    "name": "npc_dota_hero_windrunner",
    "team": 0,
    "alias": [
      "wr"
    ],
    "roles": {
      "carry": 1,
      "support": 1,
      "nuker": 1,
      "disabler": 1,
      "jungler": 0,
      "durable": 0,
      "escape": 1,
      "pusher": 0,
      "initiator": 0,
      "complexity": 2
    },
    "abilities": [
      "windrunner_shackleshot",
      "windrunner_powershot",
      "windrunner_windrun",
      "windrunner_focusfire"
    ],
    "talents": [
      "special_bonus_mp_regen_175",
      "special_bonus_unique_windranger_2",
      "special_bonus_unique_windranger_3",
      "special_bonus_attack_range_100",
      "special_bonus_unique_windranger_6",
      "special_bonus_unique_windranger",
      "special_bonus_unique_windranger_4",
      "special_bonus_cooldown_reduction_30"
    ],
    "armor": {
      "armorPhysical": -1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 24,
        "max": 36
      },
      "rate": 1.5,
      "range": 600,
      "animationPoint": 0.4,
      "acquisitionRange": 800,
      "projectileSpeed": 1250
    },
    "attributes": {
      "primary": 2,
      "strength": {
        "base": 17,
        "gain": 2.8
      },
      "agility": {
        "base": 17,
        "gain": 1.4
      },
      "intelligence": {
        "base": 18,
        "gain": 2.6
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 295,
      "turnRate": 0.8,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": true,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default",
      "glowColor": "#b9dc14"
    }
  },
  "npc_dota_hero_zuus": {
    "id": 22,
    "name": "npc_dota_hero_zuus",
    "team": 0,
    "alias": [],
    "roles": {
      "carry": 0,
      "support": 0,
      "nuker": 3,
      "disabler": 0,
      "jungler": 0,
      "durable": 0,
      "escape": 0,
      "pusher": 0,
      "initiator": 0,
      "complexity": 1
    },
    "abilities": [
      "zuus_arc_lightning",
      "zuus_lightning_bolt",
      "zuus_static_field",
      "zuus_cloud",
      "zuus_thundergods_wrath"
    ],
    "talents": [
      "special_bonus_armor_6",
      "special_bonus_exp_boost_25",
      "special_bonus_movement_speed_30",
      "special_bonus_unique_zeus",
      "special_bonus_cooldown_reduction_15",
      "special_bonus_unique_zeus_3",
      "special_bonus_cast_range_275",
      "special_bonus_unique_zeus_2"
    ],
    "armor": {
      "armorPhysical": 0,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 33,
        "max": 41
      },
      "rate": 1.7,
      "range": 380,
      "animationPoint": 0.633,
      "acquisitionRange": 800,
      "projectileSpeed": 1100
    },
    "attributes": {
      "primary": 2,
      "strength": {
        "base": 21,
        "gain": 2.3
      },
      "agility": {
        "base": 11,
        "gain": 1.2
      },
      "intelligence": {
        "base": 20,
        "gain": 2.7
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 300,
      "turnRate": 0.6,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": true,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "electric",
      "glowColor": "#40a6ea"
    }
  },
  "npc_dota_hero_kunkka": {
    "id": 23,
    "name": "npc_dota_hero_kunkka",
    "team": 0,
    "alias": [],
    "roles": {
      "carry": 2,
      "support": 1,
      "nuker": 1,
      "disabler": 2,
      "jungler": 0,
      "durable": 1,
      "escape": 0,
      "pusher": 0,
      "initiator": 2,
      "complexity": 2
    },
    "abilities": [
      "kunkka_torrent",
      "kunkka_tidebringer",
      "kunkka_x_marks_the_spot",
      "kunkka_ghostship",
      "kunkka_return"
    ],
    "talents": [
      "special_bonus_attack_damage_40",
      "special_bonus_armor_6",
      "special_bonus_hp_regen_10",
      "special_bonus_unique_kunkka_2",
      "special_bonus_unique_kunkka",
      "special_bonus_strength_25",
      "special_bonus_unique_kunkka_3",
      "special_bonus_unique_kunkka_5"
    ],
    "armor": {
      "armorPhysical": 1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 26,
        "max": 36
      },
      "rate": 1.7,
      "range": 150,
      "animationPoint": 0.4,
      "acquisitionRange": 600,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 0,
      "strength": {
        "base": 24,
        "gain": 3.3
      },
      "agility": {
        "base": 14,
        "gain": 1.3
      },
      "intelligence": {
        "base": 18,
        "gain": 1.5
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 295,
      "turnRate": 0.6,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": true,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default",
      "glowColor": "#3296a5"
    }
  },
  "npc_dota_hero_lina": {
    "id": 25,
    "name": "npc_dota_hero_lina",
    "team": 0,
    "alias": [],
    "roles": {
      "carry": 1,
      "support": 1,
      "nuker": 3,
      "disabler": 1,
      "jungler": 0,
      "durable": 0,
      "escape": 0,
      "pusher": 0,
      "initiator": 0,
      "complexity": 1
    },
    "abilities": [
      "lina_dragon_slave",
      "lina_light_strike_array",
      "lina_fiery_soul",
      "lina_laguna_blade"
    ],
    "talents": [
      "special_bonus_attack_damage_30",
      "special_bonus_cast_range_125",
      "special_bonus_hp_350",
      "special_bonus_unique_lina_3",
      "special_bonus_spell_amplify_12",
      "special_bonus_unique_lina_2",
      "special_bonus_unique_lina_1",
      "special_bonus_attack_range_175"
    ],
    "armor": {
      "armorPhysical": -1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 18,
        "max": 30
      },
      "rate": 1.6,
      "range": 670,
      "animationPoint": 0.75,
      "acquisitionRange": 800,
      "projectileSpeed": 1000
    },
    "attributes": {
      "primary": 2,
      "strength": {
        "base": 20,
        "gain": 1.8
      },
      "agility": {
        "base": 16,
        "gain": 1.5
      },
      "intelligence": {
        "base": 28,
        "gain": 3.2
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 295,
      "turnRate": 0.5,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": true,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "fire",
      "glowColor": "#fe5a05"
    }
  },
  "npc_dota_hero_lich": {
    "id": 31,
    "name": "npc_dota_hero_lich",
    "team": 1,
    "alias": [],
    "roles": {
      "carry": 0,
      "support": 3,
      "nuker": 2,
      "disabler": 0,
      "jungler": 0,
      "durable": 0,
      "escape": 0,
      "pusher": 0,
      "initiator": 0,
      "complexity": 1
    },
    "abilities": [
      "lich_frost_nova",
      "lich_frost_armor",
      "lich_dark_ritual",
      "lich_chain_frost"
    ],
    "talents": [
      "special_bonus_hp_200",
      "special_bonus_movement_speed_25",
      "special_bonus_attack_damage_120",
      "special_bonus_unique_lich_3",
      "special_bonus_cast_range_175",
      "special_bonus_gold_income_30",
      "special_bonus_unique_lich_1",
      "special_bonus_unique_lich_2"
    ],
    "armor": {
      "armorPhysical": -1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 26,
        "max": 35
      },
      "rate": 1.7,
      "range": 550,
      "animationPoint": 0.46,
      "acquisitionRange": 800,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 2,
      "strength": {
        "base": 20,
        "gain": 1.85
      },
      "agility": {
        "base": 15,
        "gain": 2
      },
      "intelligence": {
        "base": 16,
        "gain": 3.25
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 315,
      "turnRate": 0.5,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": true,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "ice",
      "glowColor": "#28a0ff"
    }
  },
  "npc_dota_hero_lion": {
    "id": 26,
    "name": "npc_dota_hero_lion",
    "team": 1,
    "alias": [],
    "roles": {
      "carry": 0,
      "support": 2,
      "nuker": 3,
      "disabler": 3,
      "jungler": 0,
      "durable": 0,
      "escape": 0,
      "pusher": 0,
      "initiator": 2,
      "complexity": 1
    },
    "abilities": [
      "lion_impale",
      "lion_voodoo",
      "lion_mana_drain",
      "lion_finger_of_death"
    ],
    "talents": [
      "special_bonus_cast_range_75",
      "special_bonus_attack_damage_90",
      "special_bonus_unique_lion_3",
      "special_bonus_gold_income_20",
      "special_bonus_hp_500",
      "special_bonus_unique_lion",
      "special_bonus_unique_lion_2",
      "special_bonus_unique_lion_4"
    ],
    "armor": {
      "armorPhysical": -1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 29,
        "max": 35
      },
      "rate": 1.7,
      "range": 600,
      "animationPoint": 0.43,
      "acquisitionRange": 800,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 2,
      "strength": {
        "base": 18,
        "gain": 2
      },
      "agility": {
        "base": 15,
        "gain": 1.5
      },
      "intelligence": {
        "base": 18,
        "gain": 3
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 290,
      "turnRate": 0.5,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": true,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default",
      "glowColor": "#6e32a5"
    }
  },
  "npc_dota_hero_shadow_shaman": {
    "id": 27,
    "name": "npc_dota_hero_shadow_shaman",
    "team": 0,
    "alias": [
      "ss"
    ],
    "roles": {
      "carry": 0,
      "support": 2,
      "nuker": 2,
      "disabler": 3,
      "jungler": 0,
      "durable": 0,
      "escape": 0,
      "pusher": 3,
      "initiator": 1,
      "complexity": 1
    },
    "abilities": [
      "shadow_shaman_ether_shock",
      "shadow_shaman_voodoo",
      "shadow_shaman_shackles",
      "shadow_shaman_mass_serpent_ward"
    ],
    "talents": [
      "special_bonus_hp_200",
      "special_bonus_exp_boost_20",
      "special_bonus_cast_range_125",
      "special_bonus_unique_shadow_shaman_5",
      "special_bonus_unique_shadow_shaman_2",
      "special_bonus_unique_shadow_shaman_1",
      "special_bonus_unique_shadow_shaman_3",
      "special_bonus_unique_shadow_shaman_4"
    ],
    "armor": {
      "armorPhysical": 1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 52,
        "max": 59
      },
      "rate": 1.7,
      "range": 400,
      "animationPoint": 0.3,
      "acquisitionRange": 800,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 2,
      "strength": {
        "base": 23,
        "gain": 2.1
      },
      "agility": {
        "base": 16,
        "gain": 1.6
      },
      "intelligence": {
        "base": 21,
        "gain": 3
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 285,
      "turnRate": 0.5,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default",
      "glowColor": "#ffa726"
    }
  },
  "npc_dota_hero_slardar": {
    "id": 28,
    "name": "npc_dota_hero_slardar",
    "team": 1,
    "alias": [],
    "roles": {
      "carry": 2,
      "support": 0,
      "nuker": 0,
      "disabler": 1,
      "jungler": 0,
      "durable": 2,
      "escape": 1,
      "pusher": 0,
      "initiator": 2,
      "complexity": 1
    },
    "abilities": [
      "slardar_sprint",
      "slardar_slithereen_crush",
      "slardar_bash",
      "slardar_amplify_damage"
    ],
    "talents": [
      "special_bonus_hp_regen_5",
      "special_bonus_attack_damage_25",
      "special_bonus_hp_300",
      "special_bonus_unique_slardar_2",
      "special_bonus_attack_speed_50",
      "special_bonus_night_vision_1000",
      "special_bonus_unique_slardar",
      "special_bonus_unique_slardar_3"
    ],
    "armor": {
      "armorPhysical": 2,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 30,
        "max": 38
      },
      "rate": 1.7,
      "range": 150,
      "animationPoint": 0.36,
      "acquisitionRange": 600,
      "projectileSpeed": 0
    },
    "attributes": {
      "primary": 0,
      "strength": {
        "base": 21,
        "gain": 3.1
      },
      "agility": {
        "base": 17,
        "gain": 2.4
      },
      "intelligence": {
        "base": 15,
        "gain": 1.5
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 285,
      "turnRate": 0.5,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 0,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default",
      "glowColor": "#4e7fd0"
    }
  },
  "npc_dota_hero_tidehunter": {
    "id": 29,
    "name": "npc_dota_hero_tidehunter",
    "team": 1,
    "alias": [],
    "roles": {
      "carry": 0,
      "support": 0,
      "nuker": 1,
      "disabler": 2,
      "jungler": 0,
      "durable": 3,
      "escape": 0,
      "pusher": 0,
      "initiator": 3,
      "complexity": 1
    },
    "abilities": [
      "tidehunter_gush",
      "tidehunter_kraken_shell",
      "tidehunter_anchor_smash",
      "tidehunter_ravage"
    ],
    "talents": [
      "special_bonus_movement_speed_25",
      "special_bonus_unique_tidehunter_2",
      "special_bonus_exp_boost_40",
      "special_bonus_unique_tidehunter_3",
      "special_bonus_unique_tidehunter_4",
      "special_bonus_unique_tidehunter",
      "special_bonus_cooldown_reduction_25",
      "special_bonus_attack_damage_250"
    ],
    "armor": {
      "armorPhysical": 0,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 25,
        "max": 31
      },
      "rate": 1.7,
      "range": 150,
      "animationPoint": 0.6,
      "acquisitionRange": 600,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 0,
      "strength": {
        "base": 22,
        "gain": 3.3
      },
      "agility": {
        "base": 15,
        "gain": 1.5
      },
      "intelligence": {
        "base": 16,
        "gain": 1.7
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 300,
      "turnRate": 0.5,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": true,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default",
      "glowColor": "#36b551"
    }
  },
  "npc_dota_hero_witch_doctor": {
    "id": 30,
    "name": "npc_dota_hero_witch_doctor",
    "team": 1,
    "alias": [
      "wd"
    ],
    "roles": {
      "carry": 0,
      "support": 3,
      "nuker": 2,
      "disabler": 1,
      "jungler": 0,
      "durable": 0,
      "escape": 0,
      "pusher": 0,
      "initiator": 0,
      "complexity": 1
    },
    "abilities": [
      "witch_doctor_paralyzing_cask",
      "witch_doctor_voodoo_restoration",
      "witch_doctor_maledict",
      "witch_doctor_death_ward"
    ],
    "talents": [
      "special_bonus_attack_damage_75",
      "special_bonus_armor_5",
      "special_bonus_unique_witch_doctor_3",
      "special_bonus_gold_income_20",
      "special_bonus_unique_witch_doctor_1",
      "special_bonus_unique_witch_doctor_4",
      "special_bonus_unique_witch_doctor_2",
      "special_bonus_unique_witch_doctor_5"
    ],
    "armor": {
      "armorPhysical": -1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 29,
        "max": 39
      },
      "rate": 1.7,
      "range": 600,
      "animationPoint": 0.4,
      "acquisitionRange": 800,
      "projectileSpeed": 1200
    },
    "attributes": {
      "primary": 2,
      "strength": {
        "base": 18,
        "gain": 2.1
      },
      "agility": {
        "base": 13,
        "gain": 1.4
      },
      "intelligence": {
        "base": 22,
        "gain": 2.9
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 305,
      "turnRate": 0.5,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": true,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default",
      "glowColor": "#da74fc"
    }
  },
  "npc_dota_hero_riki": {
    "id": 32,
    "name": "npc_dota_hero_riki",
    "team": 0,
    "alias": [],
    "roles": {
      "carry": 2,
      "support": 0,
      "nuker": 0,
      "disabler": 1,
      "jungler": 0,
      "durable": 0,
      "escape": 2,
      "pusher": 0,
      "initiator": 0,
      "complexity": 1
    },
    "abilities": [
      "riki_smoke_screen",
      "riki_blink_strike",
      "riki_permanent_invisibility",
      "riki_tricks_of_the_trade"
    ],
    "talents": [
      "special_bonus_hp_regen_5",
      "special_bonus_agility_8",
      "special_bonus_20_crit_15",
      "special_bonus_unique_riki_2",
      "special_bonus_unique_riki_1",
      "special_bonus_unique_riki_3",
      "special_bonus_unique_riki_4",
      "special_bonus_unique_riki_5"
    ],
    "armor": {
      "armorPhysical": 1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 11,
        "max": 15
      },
      "rate": 1.7,
      "range": 150,
      "animationPoint": 0.3,
      "acquisitionRange": 600,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 1,
      "strength": {
        "base": 18,
        "gain": 1.9
      },
      "agility": {
        "base": 30,
        "gain": 2.2
      },
      "intelligence": {
        "base": 14,
        "gain": 1.3
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 275,
      "turnRate": 0.6,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 3,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default",
      "glowColor": "#aa70c2"
    }
  },
  "npc_dota_hero_enigma": {
    "id": 33,
    "name": "npc_dota_hero_enigma",
    "team": 1,
    "alias": [],
    "roles": {
      "carry": 0,
      "support": 0,
      "nuker": 0,
      "disabler": 2,
      "jungler": 3,
      "durable": 0,
      "escape": 0,
      "pusher": 2,
      "initiator": 2,
      "complexity": 2
    },
    "abilities": [
      "enigma_malefice",
      "enigma_demonic_conversion",
      "enigma_midnight_pulse",
      "enigma_black_hole"
    ],
    "talents": [
      "special_bonus_movement_speed_25",
      "special_bonus_magic_resistance_15",
      "special_bonus_cooldown_reduction_15",
      "special_bonus_gold_income_25",
      "special_bonus_hp_500",
      "special_bonus_unique_enigma_3",
      "special_bonus_unique_enigma_2",
      "special_bonus_unique_enigma"
    ],
    "armor": {
      "armorPhysical": 2,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 24,
        "max": 30
      },
      "rate": 1.7,
      "range": 500,
      "animationPoint": 0.4,
      "acquisitionRange": 800,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 2,
      "strength": {
        "base": 21,
        "gain": 2.3
      },
      "agility": {
        "base": 14,
        "gain": 1
      },
      "intelligence": {
        "base": 18,
        "gain": 3.4
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 300,
      "turnRate": 0.5,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 0,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "ethereal",
      "gibTintColor": "#312585",
      "glowColor": "#4000ff"
    }
  },
  "npc_dota_hero_tinker": {
    "id": 34,
    "name": "npc_dota_hero_tinker",
    "team": 0,
    "alias": [],
    "roles": {
      "carry": 1,
      "support": 0,
      "nuker": 3,
      "disabler": 0,
      "jungler": 0,
      "durable": 0,
      "escape": 0,
      "pusher": 2,
      "initiator": 0,
      "complexity": 2
    },
    "abilities": [
      "tinker_laser",
      "tinker_heat_seeking_missile",
      "tinker_march_of_the_machines",
      "tinker_rearm"
    ],
    "talents": [
      "special_bonus_spell_amplify_6",
      "special_bonus_cast_range_75",
      "special_bonus_movement_speed_40",
      "special_bonus_spell_lifesteal_10",
      "special_bonus_armor_10",
      "special_bonus_unique_tinker_2",
      "special_bonus_unique_tinker",
      "special_bonus_unique_tinker_3"
    ],
    "armor": {
      "armorPhysical": 2,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 24,
        "max": 30
      },
      "rate": 1.7,
      "range": 500,
      "animationPoint": 0.35,
      "acquisitionRange": 800,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 2,
      "strength": {
        "base": 17,
        "gain": 2.3
      },
      "agility": {
        "base": 13,
        "gain": 1.2
      },
      "intelligence": {
        "base": 28,
        "gain": 2.2
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 290,
      "turnRate": 0.6,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "motor",
      "glowColor": "#dcc208"
    }
  },
  "npc_dota_hero_sniper": {
    "id": 35,
    "name": "npc_dota_hero_sniper",
    "team": 0,
    "alias": [],
    "roles": {
      "carry": 3,
      "support": 0,
      "nuker": 1,
      "disabler": 0,
      "jungler": 0,
      "durable": 0,
      "escape": 0,
      "pusher": 0,
      "initiator": 0,
      "complexity": 1
    },
    "abilities": [
      "sniper_shrapnel",
      "sniper_headshot",
      "sniper_take_aim",
      "sniper_assassinate"
    ],
    "talents": [
      "special_bonus_cooldown_reduction_25",
      "special_bonus_attack_damage_20",
      "special_bonus_attack_speed_40",
      "special_bonus_unique_sniper_1",
      "special_bonus_unique_sniper_3",
      "special_bonus_unique_sniper_4",
      "special_bonus_attack_range_125",
      "special_bonus_unique_sniper_2"
    ],
    "armor": {
      "armorPhysical": -1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 15,
        "max": 21
      },
      "rate": 1.7,
      "range": 550,
      "animationPoint": 0.17,
      "acquisitionRange": 950,
      "projectileSpeed": 3000
    },
    "attributes": {
      "primary": 1,
      "strength": {
        "base": 17,
        "gain": 1.7
      },
      "agility": {
        "base": 21,
        "gain": 2.7
      },
      "intelligence": {
        "base": 15,
        "gain": 2.6
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 285,
      "turnRate": 0.7,
      "hasAggressiveStance": true
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 1400
    },
    "gameMode": {
      "BotImplemented": true,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default",
      "glowColor": "#ed9a0f"
    }
  },
  "npc_dota_hero_necrolyte": {
    "id": 36,
    "name": "npc_dota_hero_necrolyte",
    "team": 1,
    "alias": [],
    "roles": {
      "carry": 1,
      "support": 0,
      "nuker": 2,
      "disabler": 1,
      "jungler": 0,
      "durable": 1,
      "escape": 0,
      "pusher": 0,
      "initiator": 0,
      "complexity": 1
    },
    "abilities": [
      "necrolyte_death_pulse",
      "necrolyte_sadist",
      "necrolyte_heartstopper_aura",
      "necrolyte_reapers_scythe"
    ],
    "talents": [
      "special_bonus_attack_damage_40",
      "special_bonus_strength_10",
      "special_bonus_unique_necrophos_3",
      "special_bonus_unique_necrophos_4",
      "special_bonus_magic_resistance_20",
      "special_bonus_attack_speed_80",
      "special_bonus_unique_necrophos_2",
      "special_bonus_unique_necrophos"
    ],
    "armor": {
      "armorPhysical": 1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 26,
        "max": 30
      },
      "rate": 1.7,
      "range": 550,
      "animationPoint": 0.4,
      "acquisitionRange": 800,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 2,
      "strength": {
        "base": 18,
        "gain": 2.6
      },
      "agility": {
        "base": 12,
        "gain": 1.3
      },
      "intelligence": {
        "base": 20,
        "gain": 2.5
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 280,
      "turnRate": 0.5,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": true,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "ethereal",
      "gibTintColor": "#5fd29c",
      "glowColor": "#92ff91"
    }
  },
  "npc_dota_hero_warlock": {
    "id": 37,
    "name": "npc_dota_hero_warlock",
    "team": 1,
    "alias": [],
    "roles": {
      "carry": 0,
      "support": 1,
      "nuker": 0,
      "disabler": 1,
      "jungler": 0,
      "durable": 0,
      "escape": 0,
      "pusher": 0,
      "initiator": 2,
      "complexity": 1
    },
    "abilities": [
      "warlock_fatal_bonds",
      "warlock_shadow_word",
      "warlock_upheaval",
      "warlock_rain_of_chaos"
    ],
    "talents": [
      "special_bonus_unique_warlock_5",
      "special_bonus_cast_range_150",
      "special_bonus_exp_boost_60",
      "special_bonus_unique_warlock_3",
      "special_bonus_unique_warlock_4",
      "special_bonus_unique_warlock_6",
      "special_bonus_unique_warlock_2",
      "special_bonus_unique_warlock_1"
    ],
    "armor": {
      "armorPhysical": 1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 24,
        "max": 34
      },
      "rate": 1.7,
      "range": 600,
      "animationPoint": 0.3,
      "acquisitionRange": 800,
      "projectileSpeed": 1200
    },
    "attributes": {
      "primary": 2,
      "strength": {
        "base": 24,
        "gain": 2.8
      },
      "agility": {
        "base": 10,
        "gain": 1
      },
      "intelligence": {
        "base": 22,
        "gain": 2.7
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 295,
      "turnRate": 0.5,
      "hasAggressiveStance": true
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": true,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default",
      "glowColor": "#f9362f"
    }
  },
  "npc_dota_hero_beastmaster": {
    "id": 38,
    "name": "npc_dota_hero_beastmaster",
    "team": 0,
    "alias": [
      "bm"
    ],
    "roles": {
      "carry": 0,
      "support": 0,
      "nuker": 1,
      "disabler": 2,
      "jungler": 0,
      "durable": 2,
      "escape": 0,
      "pusher": 0,
      "initiator": 2,
      "complexity": 2
    },
    "abilities": [
      "beastmaster_wild_axes",
      "beastmaster_call_of_the_wild",
      "beastmaster_inner_beast",
      "beastmaster_primal_roar"
    ],
    "talents": [
      "special_bonus_exp_boost_25",
      "special_bonus_movement_speed_20",
      "special_bonus_armor_6",
      "special_bonus_unique_beastmaster_2",
      "special_bonus_unique_beastmaster",
      "special_bonus_hp_500",
      "special_bonus_unique_beastmaster_4",
      "special_bonus_unique_beastmaster_3"
    ],
    "armor": {
      "armorPhysical": -1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 41,
        "max": 45
      },
      "rate": 1.7,
      "range": 150,
      "animationPoint": 0.3,
      "acquisitionRange": 600,
      "projectileSpeed": 0
    },
    "attributes": {
      "primary": 0,
      "strength": {
        "base": 23,
        "gain": 2.5
      },
      "agility": {
        "base": 18,
        "gain": 1.6
      },
      "intelligence": {
        "base": 16,
        "gain": 1.9
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 305,
      "turnRate": 0.5,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": true,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default",
      "glowColor": "#d7ae51"
    }
  },
  "npc_dota_hero_queenofpain": {
    "id": 39,
    "name": "npc_dota_hero_queenofpain",
    "team": 1,
    "alias": [
      "qop"
    ],
    "roles": {
      "carry": 1,
      "support": 0,
      "nuker": 3,
      "disabler": 0,
      "jungler": 0,
      "durable": 0,
      "escape": 3,
      "pusher": 0,
      "initiator": 0,
      "complexity": 2
    },
    "abilities": [
      "queenofpain_shadow_strike",
      "queenofpain_blink",
      "queenofpain_scream_of_pain",
      "queenofpain_sonic_wave"
    ],
    "talents": [
      "special_bonus_attack_damage_25",
      "special_bonus_strength_10",
      "special_bonus_cooldown_reduction_12",
      "special_bonus_attack_speed_40",
      "special_bonus_spell_lifesteal_30",
      "special_bonus_unique_queen_of_pain",
      "special_bonus_unique_queen_of_pain_2",
      "special_bonus_spell_block_15"
    ],
    "armor": {
      "armorPhysical": -1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 23,
        "max": 31
      },
      "rate": 1.5,
      "range": 550,
      "animationPoint": 0.56,
      "acquisitionRange": 800,
      "projectileSpeed": 1500
    },
    "attributes": {
      "primary": 2,
      "strength": {
        "base": 18,
        "gain": 2.3
      },
      "agility": {
        "base": 18,
        "gain": 2
      },
      "intelligence": {
        "base": 22,
        "gain": 2.5
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 295,
      "turnRate": 0.5,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default",
      "glowColor": "#af2980"
    }
  },
  "npc_dota_hero_venomancer": {
    "id": 40,
    "name": "npc_dota_hero_venomancer",
    "team": 1,
    "alias": [],
    "roles": {
      "carry": 0,
      "support": 2,
      "nuker": 1,
      "disabler": 1,
      "jungler": 0,
      "durable": 0,
      "escape": 0,
      "pusher": 1,
      "initiator": 1,
      "complexity": 1
    },
    "abilities": [
      "venomancer_venomous_gale",
      "venomancer_poison_sting",
      "venomancer_plague_ward",
      "venomancer_poison_nova"
    ],
    "talents": [
      "special_bonus_unique_venomancer_3",
      "special_bonus_gold_income_15",
      "special_bonus_cast_range_200",
      "special_bonus_unique_venomancer_2",
      "special_bonus_unique_venomancer_4",
      "special_bonus_unique_venomancer_5",
      "special_bonus_unique_venomancer_6",
      "special_bonus_unique_venomancer"
    ],
    "armor": {
      "armorPhysical": 0,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 16,
        "max": 18
      },
      "rate": 1.7,
      "range": 450,
      "animationPoint": 0.3,
      "acquisitionRange": 800,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 1,
      "strength": {
        "base": 19,
        "gain": 1.9
      },
      "agility": {
        "base": 22,
        "gain": 2.8
      },
      "intelligence": {
        "base": 17,
        "gain": 1.8
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 275,
      "turnRate": 0.5,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 0,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "goo",
      "gibTintColor": "#b4e336",
      "glowColor": "#fcac12"
    }
  },
  "npc_dota_hero_faceless_void": {
    "id": 41,
    "name": "npc_dota_hero_faceless_void",
    "team": 1,
    "alias": [
      "fv"
    ],
    "roles": {
      "carry": 2,
      "support": 0,
      "nuker": 0,
      "disabler": 2,
      "jungler": 0,
      "durable": 1,
      "escape": 1,
      "pusher": 0,
      "initiator": 3,
      "complexity": 2
    },
    "abilities": [
      "faceless_void_time_walk",
      "faceless_void_time_dilation",
      "faceless_void_time_lock",
      "faceless_void_chronosphere"
    ],
    "talents": [
      "special_bonus_attack_damage_20",
      "special_bonus_strength_8",
      "special_bonus_unique_faceless_void_3",
      "special_bonus_hp_300",
      "special_bonus_attack_speed_40",
      "special_bonus_unique_faceless_void",
      "special_bonus_unique_faceless_void_4",
      "special_bonus_unique_faceless_void_2"
    ],
    "armor": {
      "armorPhysical": 0,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 33,
        "max": 39
      },
      "rate": 1.7,
      "range": 150,
      "animationPoint": 0.5,
      "acquisitionRange": 600,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 1,
      "strength": {
        "base": 24,
        "gain": 2.1
      },
      "agility": {
        "base": 23,
        "gain": 2.8
      },
      "intelligence": {
        "base": 15,
        "gain": 1.5
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 295,
      "turnRate": 1,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 2,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default",
      "glowColor": "#d9a0ff"
    }
  },
  "npc_dota_hero_skeleton_king": {
    "id": 42,
    "name": "npc_dota_hero_skeleton_king",
    "team": 1,
    "alias": [
      "sk",
      "snk",
      "wk"
    ],
    "roles": {
      "carry": 2,
      "support": 1,
      "nuker": 0,
      "disabler": 2,
      "jungler": 0,
      "durable": 3,
      "escape": 0,
      "pusher": 0,
      "initiator": 1,
      "complexity": 1
    },
    "abilities": [
      "skeleton_king_hellfire_blast",
      "skeleton_king_vampiric_aura",
      "skeleton_king_mortal_strike",
      "skeleton_king_reincarnation"
    ],
    "talents": [
      "special_bonus_unique_wraith_king_7",
      "special_bonus_attack_speed_20",
      "special_bonus_strength_15",
      "special_bonus_unique_wraith_king_6",
      "special_bonus_unique_wraith_king_1",
      "special_bonus_unique_wraith_king_8",
      "special_bonus_unique_wraith_king_2",
      "special_bonus_unique_wraith_king_4"
    ],
    "armor": {
      "armorPhysical": -1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 39,
        "max": 41
      },
      "rate": 1.7,
      "range": 150,
      "animationPoint": 0.56,
      "acquisitionRange": 600,
      "projectileSpeed": 0
    },
    "attributes": {
      "primary": 0,
      "strength": {
        "base": 22,
        "gain": 2.8
      },
      "agility": {
        "base": 18,
        "gain": 1.7
      },
      "intelligence": {
        "base": 18,
        "gain": 1.6
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 295,
      "turnRate": 0.5,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": true,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "ethereal",
      "gibTintColor": "#5cc480",
      "glowColor": "#e2e024"
    }
  },
  "npc_dota_hero_death_prophet": {
    "id": 43,
    "name": "npc_dota_hero_death_prophet",
    "team": 1,
    "alias": [
      "dp"
    ],
    "roles": {
      "carry": 1,
      "support": 0,
      "nuker": 1,
      "disabler": 1,
      "jungler": 0,
      "durable": 0,
      "escape": 0,
      "pusher": 3,
      "initiator": 0,
      "complexity": 1
    },
    "abilities": [
      "death_prophet_carrion_swarm",
      "death_prophet_silence",
      "death_prophet_spirit_siphon",
      "death_prophet_exorcism"
    ],
    "talents": [
      "special_bonus_attack_damage_40",
      "special_bonus_magic_resistance_12",
      "special_bonus_unique_death_prophet_3",
      "special_bonus_cast_range_150",
      "special_bonus_hp_500",
      "special_bonus_unique_death_prophet_2",
      "special_bonus_unique_death_prophet_4",
      "special_bonus_unique_death_prophet"
    ],
    "armor": {
      "armorPhysical": 0,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 26,
        "max": 38
      },
      "rate": 1.7,
      "range": 600,
      "animationPoint": 0.56,
      "acquisitionRange": 800,
      "projectileSpeed": 1000
    },
    "attributes": {
      "primary": 2,
      "strength": {
        "base": 19,
        "gain": 2.9
      },
      "agility": {
        "base": 14,
        "gain": 1.4
      },
      "intelligence": {
        "base": 21,
        "gain": 3
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 305,
      "turnRate": 0.5,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": true,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "ethereal",
      "gibTintColor": "#94ce64",
      "glowColor": "#0ff11c"
    }
  },
  "npc_dota_hero_phantom_assassin": {
    "id": 44,
    "name": "npc_dota_hero_phantom_assassin",
    "team": 1,
    "alias": [
      "pa",
      "mortred"
    ],
    "roles": {
      "carry": 3,
      "support": 0,
      "nuker": 0,
      "disabler": 0,
      "jungler": 0,
      "durable": 0,
      "escape": 1,
      "pusher": 0,
      "initiator": 0,
      "complexity": 1
    },
    "abilities": [
      "phantom_assassin_stifling_dagger",
      "phantom_assassin_phantom_strike",
      "phantom_assassin_blur",
      "phantom_assassin_coup_de_grace"
    ],
    "talents": [
      "special_bonus_hp_150",
      "special_bonus_attack_damage_15",
      "special_bonus_corruption_4",
      "special_bonus_cleave_20",
      "special_bonus_lifesteal_20",
      "special_bonus_unique_phantom_assassin",
      "special_bonus_unique_phantom_assassin_2",
      "special_bonus_unique_phantom_assassin_3"
    ],
    "armor": {
      "armorPhysical": 1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 23,
        "max": 25
      },
      "rate": 1.7,
      "range": 150,
      "animationPoint": 0.3,
      "acquisitionRange": 600,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 1,
      "strength": {
        "base": 21,
        "gain": 2.15
      },
      "agility": {
        "base": 23,
        "gain": 3.15
      },
      "intelligence": {
        "base": 15,
        "gain": 1.4
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 305,
      "turnRate": 0.6,
      "hasAggressiveStance": true
    },
    "status": {
      "health": 200,
      "healthRegen": 1.75,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": true,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default",
      "glowColor": "#9a6185"
    }
  },
  "npc_dota_hero_pugna": {
    "id": 45,
    "name": "npc_dota_hero_pugna",
    "team": 1,
    "alias": [],
    "roles": {
      "carry": 0,
      "support": 0,
      "nuker": 2,
      "disabler": 0,
      "jungler": 0,
      "durable": 0,
      "escape": 0,
      "pusher": 2,
      "initiator": 0,
      "complexity": 2
    },
    "abilities": [
      "pugna_nether_blast",
      "pugna_decrepify",
      "pugna_nether_ward",
      "pugna_life_drain"
    ],
    "talents": [
      "special_bonus_movement_speed_25",
      "special_bonus_hp_225",
      "special_bonus_unique_pugna_4",
      "special_bonus_unique_pugna_6",
      "special_bonus_unique_pugna_1",
      "special_bonus_unique_pugna_5",
      "special_bonus_unique_pugna_2",
      "special_bonus_unique_pugna_3"
    ],
    "armor": {
      "armorPhysical": 0,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 19,
        "max": 27
      },
      "rate": 1.7,
      "range": 630,
      "animationPoint": 0.5,
      "acquisitionRange": 800,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 2,
      "strength": {
        "base": 19,
        "gain": 1.8
      },
      "agility": {
        "base": 16,
        "gain": 1
      },
      "intelligence": {
        "base": 24,
        "gain": 4.5
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 335,
      "turnRate": 0.5,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default",
      "glowColor": "#c250a3"
    }
  },
  "npc_dota_hero_templar_assassin": {
    "id": 46,
    "name": "npc_dota_hero_templar_assassin",
    "team": 0,
    "alias": [
      "ta"
    ],
    "roles": {
      "carry": 2,
      "support": 0,
      "nuker": 0,
      "disabler": 0,
      "jungler": 0,
      "durable": 0,
      "escape": 1,
      "pusher": 0,
      "initiator": 0,
      "complexity": 2
    },
    "abilities": [
      "templar_assassin_refraction",
      "templar_assassin_meld",
      "templar_assassin_psi_blades",
      "templar_assassin_trap",
      "templar_assassin_psionic_trap"
    ],
    "talents": [
      "special_bonus_attack_speed_25",
      "special_bonus_unique_templar_assassin_6",
      "special_bonus_armor_7",
      "special_bonus_unique_templar_assassin_3",
      "special_bonus_unique_templar_assassin_4",
      "special_bonus_unique_templar_assassin_2",
      "special_bonus_unique_templar_assassin_5",
      "special_bonus_unique_templar_assassin"
    ],
    "armor": {
      "armorPhysical": 1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 30,
        "max": 36
      },
      "rate": 1.7,
      "range": 140,
      "animationPoint": 0.3,
      "acquisitionRange": 800,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 1,
      "strength": {
        "base": 19,
        "gain": 2.4
      },
      "agility": {
        "base": 23,
        "gain": 2.3
      },
      "intelligence": {
        "base": 20,
        "gain": 2
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 310,
      "turnRate": 0.7,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.75,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default",
      "glowColor": "#f2c8c6"
    }
  },
  "npc_dota_hero_viper": {
    "id": 47,
    "name": "npc_dota_hero_viper",
    "team": 1,
    "alias": [],
    "roles": {
      "carry": 1,
      "support": 0,
      "nuker": 0,
      "disabler": 1,
      "jungler": 0,
      "durable": 2,
      "escape": 0,
      "pusher": 0,
      "initiator": 1,
      "complexity": 1
    },
    "abilities": [
      "viper_poison_attack",
      "viper_nethertoxin",
      "viper_corrosive_skin",
      "viper_viper_strike"
    ],
    "talents": [
      "special_bonus_attack_speed_20",
      "special_bonus_spell_lifesteal_8",
      "special_bonus_attack_range_100",
      "special_bonus_unique_viper_1",
      "special_bonus_unique_viper_2",
      "special_bonus_unique_viper_4",
      "special_bonus_unique_viper_3",
      "special_bonus_attack_damage_120"
    ],
    "armor": {
      "armorPhysical": -2,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 23,
        "max": 25
      },
      "rate": 1.7,
      "range": 575,
      "animationPoint": 0.33,
      "acquisitionRange": 800,
      "projectileSpeed": 1200
    },
    "attributes": {
      "primary": 1,
      "strength": {
        "base": 21,
        "gain": 2.4
      },
      "agility": {
        "base": 21,
        "gain": 2.9
      },
      "intelligence": {
        "base": 15,
        "gain": 1.8
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 275,
      "turnRate": 0.5,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": true,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 0,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "goo",
      "gibTintColor": "#bcff39",
      "glowColor": "#a0e551"
    }
  },
  "npc_dota_hero_luna": {
    "id": 48,
    "name": "npc_dota_hero_luna",
    "team": 0,
    "alias": [],
    "roles": {
      "carry": 2,
      "support": 0,
      "nuker": 2,
      "disabler": 0,
      "jungler": 0,
      "durable": 0,
      "escape": 0,
      "pusher": 1,
      "initiator": 0,
      "complexity": 1
    },
    "abilities": [
      "luna_lucent_beam",
      "luna_moon_glaive",
      "luna_lunar_blessing",
      "luna_eclipse"
    ],
    "talents": [
      "special_bonus_attack_speed_20",
      "special_bonus_cast_range_200",
      "special_bonus_unique_luna_2",
      "special_bonus_unique_luna_3",
      "special_bonus_all_stats_10",
      "special_bonus_unique_luna_1",
      "special_bonus_lifesteal_25",
      "special_bonus_unique_luna_5"
    ],
    "armor": {
      "armorPhysical": 0,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 20,
        "max": 26
      },
      "rate": 1.7,
      "range": 330,
      "animationPoint": 0.46,
      "acquisitionRange": 800,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 1,
      "strength": {
        "base": 16,
        "gain": 2.2
      },
      "agility": {
        "base": 18,
        "gain": 3.3
      },
      "intelligence": {
        "base": 16,
        "gain": 1.85
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 330,
      "turnRate": 0.6,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": true,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default"
    }
  },
  "npc_dota_hero_dragon_knight": {
    "id": 49,
    "name": "npc_dota_hero_dragon_knight",
    "team": 0,
    "alias": [
      "dk"
    ],
    "roles": {
      "carry": 2,
      "support": 0,
      "nuker": 1,
      "disabler": 2,
      "jungler": 0,
      "durable": 2,
      "escape": 0,
      "pusher": 3,
      "initiator": 1,
      "complexity": 1
    },
    "abilities": [
      "dragon_knight_breathe_fire",
      "dragon_knight_dragon_tail",
      "dragon_knight_dragon_blood",
      "dragon_knight_elder_dragon_form"
    ],
    "talents": [
      "special_bonus_mp_regen_2",
      "special_bonus_unique_dragon_knight_3",
      "special_bonus_attack_damage_30",
      "special_bonus_hp_300",
      "special_bonus_gold_income_25",
      "special_bonus_unique_dragon_knight",
      "special_bonus_strength_40",
      "special_bonus_unique_dragon_knight_2"
    ],
    "armor": {
      "armorPhysical": 0,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 31,
        "max": 37
      },
      "rate": 1.7,
      "range": 150,
      "animationPoint": 0.5,
      "acquisitionRange": 600,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 0,
      "strength": {
        "base": 19,
        "gain": 3.1
      },
      "agility": {
        "base": 19,
        "gain": 2
      },
      "intelligence": {
        "base": 15,
        "gain": 1.7
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 280,
      "turnRate": 0.6,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": true,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default",
      "glowColor": "#d18f47"
    }
  },
  "npc_dota_hero_dazzle": {
    "id": 50,
    "name": "npc_dota_hero_dazzle",
    "team": 1,
    "alias": [],
    "roles": {
      "carry": 0,
      "support": 3,
      "nuker": 1,
      "disabler": 1,
      "jungler": 0,
      "durable": 0,
      "escape": 0,
      "pusher": 0,
      "initiator": 0,
      "complexity": 1
    },
    "abilities": [
      "dazzle_poison_touch",
      "dazzle_shallow_grave",
      "dazzle_shadow_wave",
      "dazzle_weave"
    ],
    "talents": [
      "special_bonus_attack_damage_75",
      "special_bonus_hp_200",
      "special_bonus_cast_range_125",
      "special_bonus_unique_dazzle_2",
      "special_bonus_movement_speed_50",
      "special_bonus_unique_dazzle_3",
      "special_bonus_unique_dazzle_1",
      "special_bonus_unique_dazzle_4"
    ],
    "armor": {
      "armorPhysical": -1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 22,
        "max": 28
      },
      "rate": 1.7,
      "range": 550,
      "animationPoint": 0.3,
      "acquisitionRange": 800,
      "projectileSpeed": 1200
    },
    "attributes": {
      "primary": 2,
      "strength": {
        "base": 18,
        "gain": 2.3
      },
      "agility": {
        "base": 21,
        "gain": 1.7
      },
      "intelligence": {
        "base": 25,
        "gain": 3.4
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 310,
      "turnRate": 0.6,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": true,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default",
      "glowColor": "#de3cec"
    }
  },
  "npc_dota_hero_rattletrap": {
    "id": 51,
    "name": "npc_dota_hero_rattletrap",
    "team": 0,
    "alias": [],
    "roles": {
      "carry": 0,
      "support": 0,
      "nuker": 1,
      "disabler": 2,
      "jungler": 0,
      "durable": 1,
      "escape": 0,
      "pusher": 0,
      "initiator": 3,
      "complexity": 2
    },
    "abilities": [
      "rattletrap_battery_assault",
      "rattletrap_power_cogs",
      "rattletrap_rocket_flare",
      "rattletrap_hookshot"
    ],
    "talents": [
      "special_bonus_armor_5",
      "special_bonus_movement_speed_20",
      "special_bonus_strength_15",
      "special_bonus_unique_clockwerk_3",
      "special_bonus_magic_resistance_20",
      "special_bonus_unique_clockwerk_2",
      "special_bonus_unique_clockwerk_4",
      "special_bonus_unique_clockwerk"
    ],
    "armor": {
      "armorPhysical": -1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 24,
        "max": 26
      },
      "rate": 1.7,
      "range": 150,
      "animationPoint": 0.33,
      "acquisitionRange": 600,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 0,
      "strength": {
        "base": 26,
        "gain": 3.2
      },
      "agility": {
        "base": 13,
        "gain": 2.3
      },
      "intelligence": {
        "base": 17,
        "gain": 1.3
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 310,
      "turnRate": 0.6,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "motor",
      "glowColor": "#fcdc40"
    }
  },
  "npc_dota_hero_leshrac": {
    "id": 52,
    "name": "npc_dota_hero_leshrac",
    "team": 1,
    "alias": [],
    "roles": {
      "carry": 1,
      "support": 1,
      "nuker": 3,
      "disabler": 1,
      "jungler": 0,
      "durable": 0,
      "escape": 0,
      "pusher": 3,
      "initiator": 0,
      "complexity": 1
    },
    "abilities": [
      "leshrac_split_earth",
      "leshrac_diabolic_edict",
      "leshrac_lightning_storm",
      "leshrac_pulse_nova"
    ],
    "talents": [
      "special_bonus_armor_5",
      "special_bonus_mp_250",
      "special_bonus_strength_15",
      "special_bonus_movement_speed_30",
      "special_bonus_evasion_25",
      "special_bonus_unique_leshrac_3",
      "special_bonus_unique_leshrac_1",
      "special_bonus_unique_leshrac_2"
    ],
    "armor": {
      "armorPhysical": 0,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 19,
        "max": 23
      },
      "rate": 1.7,
      "range": 600,
      "animationPoint": 0.4,
      "acquisitionRange": 800,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 2,
      "strength": {
        "base": 18,
        "gain": 2.1
      },
      "agility": {
        "base": 23,
        "gain": 1.7
      },
      "intelligence": {
        "base": 22,
        "gain": 3
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 330,
      "turnRate": 0.5,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 4,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default",
      "glowColor": "#0c9db3"
    }
  },
  "npc_dota_hero_furion": {
    "id": 53,
    "name": "npc_dota_hero_furion",
    "team": 0,
    "alias": [
      "np"
    ],
    "roles": {
      "carry": 1,
      "support": 0,
      "nuker": 1,
      "disabler": 0,
      "jungler": 3,
      "durable": 0,
      "escape": 1,
      "pusher": 3,
      "initiator": 0,
      "complexity": 2
    },
    "abilities": [
      "furion_sprout",
      "furion_teleportation",
      "furion_force_of_nature",
      "furion_wrath_of_nature"
    ],
    "talents": [
      "special_bonus_attack_damage_30",
      "special_bonus_movement_speed_35",
      "special_bonus_armor_10",
      "special_bonus_unique_furion_2",
      "special_bonus_attack_speed_40",
      "special_bonus_unique_furion_4",
      "special_bonus_unique_furion_3",
      "special_bonus_unique_furion"
    ],
    "armor": {
      "armorPhysical": 1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 29,
        "max": 43
      },
      "rate": 1.7,
      "range": 600,
      "animationPoint": 0.4,
      "acquisitionRange": 800,
      "projectileSpeed": 1125
    },
    "attributes": {
      "primary": 2,
      "strength": {
        "base": 21,
        "gain": 2.4
      },
      "agility": {
        "base": 18,
        "gain": 2.4
      },
      "intelligence": {
        "base": 23,
        "gain": 2.9
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 290,
      "turnRate": 0.6,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "wood",
      "glowColor": "#d8ff64"
    }
  },
  "npc_dota_hero_life_stealer": {
    "id": 54,
    "name": "npc_dota_hero_life_stealer",
    "team": 1,
    "alias": [],
    "roles": {
      "carry": 2,
      "support": 0,
      "nuker": 0,
      "disabler": 1,
      "jungler": 1,
      "durable": 2,
      "escape": 1,
      "pusher": 0,
      "initiator": 0,
      "complexity": 2
    },
    "abilities": [
      "life_stealer_rage",
      "life_stealer_feast",
      "life_stealer_open_wounds",
      "life_stealer_assimilate",
      "life_stealer_infest",
      "life_stealer_control",
      "life_stealer_consume",
      "life_stealer_assimilate_eject"
    ],
    "talents": [
      "special_bonus_hp_200",
      "special_bonus_attack_speed_20",
      "special_bonus_attack_damage_30",
      "special_bonus_movement_speed_30",
      "special_bonus_evasion_20",
      "special_bonus_unique_lifestealer_2",
      "special_bonus_unique_lifestealer_3",
      "special_bonus_unique_lifestealer"
    ],
    "armor": {
      "armorPhysical": -2,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 27,
        "max": 37
      },
      "rate": 1.85,
      "range": 150,
      "animationPoint": 0.39,
      "acquisitionRange": 600,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 0,
      "strength": {
        "base": 25,
        "gain": 3.1
      },
      "agility": {
        "base": 18,
        "gain": 1.9
      },
      "intelligence": {
        "base": 15,
        "gain": 1.75
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 310,
      "turnRate": 1,
      "hasAggressiveStance": true
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default",
      "glowColor": "#d10401"
    }
  },
  "npc_dota_hero_dark_seer": {
    "id": 55,
    "name": "npc_dota_hero_dark_seer",
    "team": 1,
    "alias": [
      "ds"
    ],
    "roles": {
      "carry": 0,
      "support": 0,
      "nuker": 0,
      "disabler": 1,
      "jungler": 1,
      "durable": 0,
      "escape": 1,
      "pusher": 0,
      "initiator": 1,
      "complexity": 1
    },
    "abilities": [
      "dark_seer_vacuum",
      "dark_seer_ion_shell",
      "dark_seer_surge",
      "dark_seer_wall_of_replica"
    ],
    "talents": [
      "special_bonus_evasion_12",
      "special_bonus_attack_damage_90",
      "special_bonus_hp_regen_12",
      "special_bonus_unique_dark_seer_2",
      "special_bonus_cooldown_reduction_15",
      "special_bonus_unique_dark_seer_3",
      "special_bonus_unique_dark_seer_4",
      "special_bonus_unique_dark_seer"
    ],
    "armor": {
      "armorPhysical": 5,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 33,
        "max": 39
      },
      "rate": 1.7,
      "range": 150,
      "animationPoint": 0.59,
      "acquisitionRange": 600,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 2,
      "strength": {
        "base": 24,
        "gain": 2.9
      },
      "agility": {
        "base": 12,
        "gain": 1.2
      },
      "intelligence": {
        "base": 21,
        "gain": 2.7
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 295,
      "turnRate": 0.6,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default",
      "glowColor": "#cb56ff"
    }
  },
  "npc_dota_hero_clinkz": {
    "id": 56,
    "name": "npc_dota_hero_clinkz",
    "team": 1,
    "alias": [],
    "roles": {
      "carry": 2,
      "support": 0,
      "nuker": 0,
      "disabler": 0,
      "jungler": 0,
      "durable": 0,
      "escape": 3,
      "pusher": 1,
      "initiator": 0,
      "complexity": 2
    },
    "abilities": [
      "clinkz_strafe",
      "clinkz_searing_arrows",
      "clinkz_wind_walk",
      "clinkz_death_pact"
    ],
    "talents": [
      "special_bonus_magic_resistance_12",
      "special_bonus_armor_5",
      "special_bonus_evasion_20",
      "special_bonus_unique_clinkz_1",
      "special_bonus_attack_range_100",
      "special_bonus_hp_regen_20",
      "special_bonus_unique_clinkz_2",
      "special_bonus_unique_clinkz_3"
    ],
    "armor": {
      "armorPhysical": 0,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 15,
        "max": 21
      },
      "rate": 1.7,
      "range": 640,
      "animationPoint": 0.7,
      "acquisitionRange": 800,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 1,
      "strength": {
        "base": 14,
        "gain": 1.9
      },
      "agility": {
        "base": 22,
        "gain": 2.6
      },
      "intelligence": {
        "base": 18,
        "gain": 1.7
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 295,
      "turnRate": 0.5,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.75,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default",
      "glowColor": "#cd3a00"
    }
  },
  "npc_dota_hero_omniknight": {
    "id": 57,
    "name": "npc_dota_hero_omniknight",
    "team": 0,
    "alias": [],
    "roles": {
      "carry": 0,
      "support": 2,
      "nuker": 1,
      "disabler": 0,
      "jungler": 0,
      "durable": 1,
      "escape": 0,
      "pusher": 0,
      "initiator": 0,
      "complexity": 1
    },
    "abilities": [
      "omniknight_purification",
      "omniknight_repel",
      "omniknight_degen_aura",
      "omniknight_guardian_angel"
    ],
    "talents": [
      "special_bonus_gold_income_15",
      "special_bonus_unique_omniknight_4",
      "special_bonus_exp_boost_35",
      "special_bonus_attack_damage_90",
      "special_bonus_unique_omniknight_2",
      "special_bonus_mp_regen_3",
      "special_bonus_unique_omniknight_1",
      "special_bonus_unique_omniknight_3"
    ],
    "armor": {
      "armorPhysical": 1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 31,
        "max": 41
      },
      "rate": 1.7,
      "range": 150,
      "animationPoint": 0.433,
      "acquisitionRange": 600,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 0,
      "strength": {
        "base": 22,
        "gain": 3.1
      },
      "agility": {
        "base": 15,
        "gain": 1.75
      },
      "intelligence": {
        "base": 15,
        "gain": 1.8
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 300,
      "turnRate": 0.6,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": true,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default",
      "glowColor": "#78cdff"
    }
  },
  "npc_dota_hero_enchantress": {
    "id": 58,
    "name": "npc_dota_hero_enchantress",
    "team": 0,
    "alias": [],
    "roles": {
      "carry": 0,
      "support": 2,
      "nuker": 0,
      "disabler": 1,
      "jungler": 3,
      "durable": 1,
      "escape": 0,
      "pusher": 2,
      "initiator": 0,
      "complexity": 2
    },
    "abilities": [
      "enchantress_untouchable",
      "enchantress_enchant",
      "enchantress_natures_attendants",
      "enchantress_impetus"
    ],
    "talents": [
      "special_bonus_magic_resistance_15",
      "special_bonus_movement_speed_25",
      "special_bonus_attack_damage_50",
      "special_bonus_unique_enchantress_2",
      "special_bonus_unique_enchantress_3",
      "special_bonus_unique_enchantress_1",
      "special_bonus_unique_enchantress_4",
      "special_bonus_unique_enchantress_5"
    ],
    "armor": {
      "armorPhysical": -2,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 30,
        "max": 40
      },
      "rate": 1.7,
      "range": 575,
      "animationPoint": 0.3,
      "acquisitionRange": 800,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 2,
      "strength": {
        "base": 19,
        "gain": 1.3
      },
      "agility": {
        "base": 19,
        "gain": 1.8
      },
      "intelligence": {
        "base": 19,
        "gain": 3.1
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 325,
      "turnRate": 0.5,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 4,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default",
      "glowColor": "#d8720b"
    }
  },
  "npc_dota_hero_huskar": {
    "id": 59,
    "name": "npc_dota_hero_huskar",
    "team": 0,
    "alias": [],
    "roles": {
      "carry": 2,
      "support": 0,
      "nuker": 0,
      "disabler": 0,
      "jungler": 0,
      "durable": 2,
      "escape": 0,
      "pusher": 0,
      "initiator": 1,
      "complexity": 1
    },
    "abilities": [
      "huskar_inner_vitality",
      "huskar_burning_spear",
      "huskar_berserkers_blood",
      "huskar_life_break"
    ],
    "talents": [
      "special_bonus_hp_225",
      "special_bonus_attack_damage_20",
      "special_bonus_unique_huskar_2",
      "special_bonus_lifesteal_15",
      "special_bonus_strength_15",
      "special_bonus_unique_huskar",
      "special_bonus_attack_range_150",
      "special_bonus_unique_huskar_5"
    ],
    "armor": {
      "armorPhysical": -2,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 19,
        "max": 24
      },
      "rate": 1.6,
      "range": 400,
      "animationPoint": 0.4,
      "acquisitionRange": 800,
      "projectileSpeed": 1400
    },
    "attributes": {
      "primary": 0,
      "strength": {
        "base": 21,
        "gain": 2.7
      },
      "agility": {
        "base": 15,
        "gain": 1.4
      },
      "intelligence": {
        "base": 18,
        "gain": 1.5
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 290,
      "turnRate": 0.5,
      "hasAggressiveStance": true
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default",
      "glowColor": "#499b99"
    }
  },
  "npc_dota_hero_night_stalker": {
    "id": 60,
    "name": "npc_dota_hero_night_stalker",
    "team": 1,
    "alias": [
      "ns"
    ],
    "roles": {
      "carry": 1,
      "support": 0,
      "nuker": 1,
      "disabler": 2,
      "jungler": 0,
      "durable": 2,
      "escape": 0,
      "pusher": 0,
      "initiator": 2,
      "complexity": 1
    },
    "abilities": [
      "night_stalker_void",
      "night_stalker_crippling_fear",
      "night_stalker_hunter_in_the_night",
      "night_stalker_darkness"
    ],
    "talents": [
      "special_bonus_hp_200",
      "special_bonus_mp_200",
      "special_bonus_strength_15",
      "special_bonus_cast_range_150",
      "special_bonus_movement_speed_45",
      "special_bonus_attack_damage_50",
      "special_bonus_unique_night_stalker_2",
      "special_bonus_unique_night_stalker"
    ],
    "armor": {
      "armorPhysical": 2,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 38,
        "max": 42
      },
      "rate": 1.7,
      "range": 150,
      "animationPoint": 0.55,
      "acquisitionRange": 600,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 0,
      "strength": {
        "base": 23,
        "gain": 3.1
      },
      "agility": {
        "base": 18,
        "gain": 2.25
      },
      "intelligence": {
        "base": 13,
        "gain": 1.6
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 285,
      "turnRate": 0.5,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 3.25,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 800,
      "night": 1800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default",
      "glowColor": "#4669ff"
    }
  },
  "npc_dota_hero_broodmother": {
    "id": 61,
    "name": "npc_dota_hero_broodmother",
    "team": 1,
    "alias": [
      "bm"
    ],
    "roles": {
      "carry": 1,
      "support": 0,
      "nuker": 1,
      "disabler": 0,
      "jungler": 0,
      "durable": 0,
      "escape": 3,
      "pusher": 3,
      "initiator": 0,
      "complexity": 2
    },
    "abilities": [
      "broodmother_spawn_spiderlings",
      "broodmother_spin_web",
      "broodmother_incapacitating_bite",
      "broodmother_insatiable_hunger"
    ],
    "talents": [
      "special_bonus_unique_broodmother_3",
      "special_bonus_hp_200",
      "special_bonus_cooldown_reduction_20",
      "special_bonus_exp_boost_35",
      "special_bonus_unique_broodmother_4",
      "special_bonus_attack_speed_50",
      "special_bonus_unique_broodmother_1",
      "special_bonus_unique_broodmother_2"
    ],
    "armor": {
      "armorPhysical": 0,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 26,
        "max": 32
      },
      "rate": 1.7,
      "range": 150,
      "animationPoint": 0.4,
      "acquisitionRange": 600,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 1,
      "strength": {
        "base": 18,
        "gain": 2.8
      },
      "agility": {
        "base": 15,
        "gain": 2.2
      },
      "intelligence": {
        "base": 18,
        "gain": 2
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 270,
      "turnRate": 0.5,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 8,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "goo",
      "gibTintColor": "#278350",
      "glowColor": "#4a4cd9"
    }
  },
  "npc_dota_hero_bounty_hunter": {
    "id": 62,
    "name": "npc_dota_hero_bounty_hunter",
    "team": 0,
    "alias": [
      "bh"
    ],
    "roles": {
      "carry": 0,
      "support": 0,
      "nuker": 1,
      "disabler": 0,
      "jungler": 0,
      "durable": 0,
      "escape": 2,
      "pusher": 0,
      "initiator": 0,
      "complexity": 1
    },
    "abilities": [
      "bounty_hunter_shuriken_toss",
      "bounty_hunter_jinada",
      "bounty_hunter_wind_walk",
      "bounty_hunter_track"
    ],
    "talents": [
      "special_bonus_movement_speed_25",
      "special_bonus_exp_boost_25",
      "special_bonus_attack_speed_50",
      "special_bonus_hp_350",
      "special_bonus_unique_bounty_hunter_2",
      "special_bonus_unique_bounty_hunter",
      "special_bonus_evasion_50",
      "special_bonus_unique_bounty_hunter_3"
    ],
    "armor": {
      "armorPhysical": 3,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 24,
        "max": 38
      },
      "rate": 1.7,
      "range": 150,
      "animationPoint": 0.59,
      "acquisitionRange": 600,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 1,
      "strength": {
        "base": 18,
        "gain": 2.1
      },
      "agility": {
        "base": 21,
        "gain": 3
      },
      "intelligence": {
        "base": 19,
        "gain": 2
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 315,
      "turnRate": 0.6,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 2,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 1000
    },
    "gameMode": {
      "BotImplemented": true,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default",
      "glowColor": "#ddc93f"
    }
  },
  "npc_dota_hero_weaver": {
    "id": 63,
    "name": "npc_dota_hero_weaver",
    "team": 1,
    "alias": [],
    "roles": {
      "carry": 2,
      "support": 0,
      "nuker": 0,
      "disabler": 0,
      "jungler": 0,
      "durable": 0,
      "escape": 3,
      "pusher": 0,
      "initiator": 0,
      "complexity": 2
    },
    "abilities": [
      "weaver_the_swarm",
      "weaver_shukuchi",
      "weaver_geminate_attack",
      "weaver_time_lapse"
    ],
    "talents": [
      "special_bonus_mana_break_20",
      "special_bonus_exp_boost_35",
      "special_bonus_strength_12",
      "special_bonus_unique_weaver_1",
      "special_bonus_unique_weaver_3",
      "special_bonus_unique_weaver_4",
      "special_bonus_unique_weaver_2",
      "special_bonus_unique_weaver_5"
    ],
    "armor": {
      "armorPhysical": -1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 36,
        "max": 46
      },
      "rate": 1.8,
      "range": 425,
      "animationPoint": 0.64,
      "acquisitionRange": 800,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 1,
      "strength": {
        "base": 16,
        "gain": 1.8
      },
      "agility": {
        "base": 14,
        "gain": 3.1
      },
      "intelligence": {
        "base": 15,
        "gain": 1.8
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 275,
      "turnRate": 0.5,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 2.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 4,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "goo",
      "gibTintColor": "#627c61"
    }
  },
  "npc_dota_hero_jakiro": {
    "id": 64,
    "name": "npc_dota_hero_jakiro",
    "team": 0,
    "alias": [],
    "roles": {
      "carry": 0,
      "support": 1,
      "nuker": 2,
      "disabler": 1,
      "jungler": 0,
      "durable": 0,
      "escape": 0,
      "pusher": 2,
      "initiator": 0,
      "complexity": 1
    },
    "abilities": [
      "jakiro_dual_breath",
      "jakiro_ice_path",
      "jakiro_liquid_fire",
      "jakiro_macropyre"
    ],
    "talents": [
      "special_bonus_exp_boost_30",
      "special_bonus_spell_amplify_8",
      "special_bonus_attack_range_300",
      "special_bonus_unique_jakiro_2",
      "special_bonus_unique_jakiro_4",
      "special_bonus_gold_income_25",
      "special_bonus_unique_jakiro_3",
      "special_bonus_unique_jakiro"
    ],
    "armor": {
      "armorPhysical": 1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 27,
        "max": 35
      },
      "rate": 1.7,
      "range": 400,
      "animationPoint": 0.4,
      "acquisitionRange": 800,
      "projectileSpeed": 1100
    },
    "attributes": {
      "primary": 2,
      "strength": {
        "base": 27,
        "gain": 2.6
      },
      "agility": {
        "base": 10,
        "gain": 1.2
      },
      "intelligence": {
        "base": 26,
        "gain": 2.8
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 290,
      "turnRate": 0.5,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": true,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default",
      "glowColor": "#6b4a35"
    }
  },
  "npc_dota_hero_batrider": {
    "id": 65,
    "name": "npc_dota_hero_batrider",
    "team": 1,
    "alias": [
      "br"
    ],
    "roles": {
      "carry": 0,
      "support": 0,
      "nuker": 0,
      "disabler": 2,
      "jungler": 2,
      "durable": 0,
      "escape": 1,
      "pusher": 0,
      "initiator": 3,
      "complexity": 2
    },
    "abilities": [
      "batrider_sticky_napalm",
      "batrider_flamebreak",
      "batrider_firefly",
      "batrider_flaming_lasso"
    ],
    "talents": [
      "special_bonus_spell_amplify_6",
      "special_bonus_armor_5",
      "special_bonus_unique_batrider_3",
      "special_bonus_hp_300",
      "special_bonus_cooldown_reduction_15",
      "special_bonus_movement_speed_50",
      "special_bonus_unique_batrider_1",
      "special_bonus_unique_batrider_2"
    ],
    "armor": {
      "armorPhysical": 0,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 16,
        "max": 20
      },
      "rate": 1.7,
      "range": 375,
      "animationPoint": 0.3,
      "acquisitionRange": 800,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 2,
      "strength": {
        "base": 28,
        "gain": 2.7
      },
      "agility": {
        "base": 15,
        "gain": 1.5
      },
      "intelligence": {
        "base": 22,
        "gain": 2.5
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 290,
      "turnRate": 1,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 3.25,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1200,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default",
      "glowColor": "#6b4a35"
    }
  },
  "npc_dota_hero_chen": {
    "id": 66,
    "name": "npc_dota_hero_chen",
    "team": 0,
    "alias": [],
    "roles": {
      "carry": 0,
      "support": 2,
      "nuker": 0,
      "disabler": 0,
      "jungler": 3,
      "durable": 0,
      "escape": 0,
      "pusher": 2,
      "initiator": 0,
      "complexity": 3
    },
    "abilities": [
      "chen_penitence",
      "chen_test_of_faith",
      "chen_holy_persuasion",
      "chen_hand_of_god"
    ],
    "talents": [
      "special_bonus_exp_boost_35",
      "special_bonus_cast_range_200",
      "special_bonus_armor_7",
      "special_bonus_unique_chen_3",
      "special_bonus_gold_income_30",
      "special_bonus_unique_chen_4",
      "special_bonus_unique_chen_1",
      "special_bonus_unique_chen_2"
    ],
    "armor": {
      "armorPhysical": -1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 29,
        "max": 39
      },
      "rate": 1.7,
      "range": 650,
      "animationPoint": 0.5,
      "acquisitionRange": 800,
      "projectileSpeed": 1100
    },
    "attributes": {
      "primary": 2,
      "strength": {
        "base": 25,
        "gain": 1.8
      },
      "agility": {
        "base": 15,
        "gain": 2.1
      },
      "intelligence": {
        "base": 19,
        "gain": 2.8
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 310,
      "turnRate": 0.6,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": false,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default",
      "glowColor": "#6b4a35"
    }
  },
  "npc_dota_hero_spectre": {
    "id": 67,
    "name": "npc_dota_hero_spectre",
    "team": 1,
    "alias": [],
    "roles": {
      "carry": 3,
      "support": 0,
      "nuker": 0,
      "disabler": 0,
      "jungler": 0,
      "durable": 1,
      "escape": 1,
      "pusher": 0,
      "initiator": 0,
      "complexity": 2
    },
    "abilities": [
      "spectre_spectral_dagger",
      "spectre_desolate",
      "spectre_dispersion",
      "spectre_reality",
      "spectre_haunt"
    ],
    "talents": [
      "special_bonus_hp_regen_5",
      "special_bonus_unique_spectre_2",
      "special_bonus_all_stats_8",
      "special_bonus_unique_spectre",
      "special_bonus_hp_500",
      "special_bonus_unique_spectre_3",
      "special_bonus_unique_spectre_4",
      "special_bonus_unique_spectre_5"
    ],
    "armor": {
      "armorPhysical": 0,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 23,
        "max": 27
      },
      "rate": 1.7,
      "range": 150,
      "animationPoint": 0.3,
      "acquisitionRange": 600,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 1,
      "strength": {
        "base": 21,
        "gain": 2.3
      },
      "agility": {
        "base": 23,
        "gain": 1.8
      },
      "intelligence": {
        "base": 16,
        "gain": 1.9
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 285,
      "turnRate": 0.5,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 0,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "ethereal",
      "gibTintColor": "#732f5e",
      "glowColor": "#6b4a35"
    }
  },
  "npc_dota_hero_doom_bringer": {
    "id": 69,
    "name": "npc_dota_hero_doom_bringer",
    "team": 1,
    "alias": [
      "db"
    ],
    "roles": {
      "carry": 1,
      "support": 0,
      "nuker": 1,
      "disabler": 2,
      "jungler": 0,
      "durable": 2,
      "escape": 0,
      "pusher": 0,
      "initiator": 2,
      "complexity": 2
    },
    "abilities": [
      "doom_bringer_devour",
      "doom_bringer_scorched_earth",
      "doom_bringer_infernal_blade",
      "doom_bringer_empty1",
      "doom_bringer_empty2",
      "doom_bringer_doom"
    ],
    "talents": [
      "special_bonus_unique_doom_4",
      "special_bonus_unique_doom_6",
      "special_bonus_evasion_20",
      "special_bonus_unique_doom_3",
      "special_bonus_unique_doom_5",
      "special_bonus_unique_doom_2",
      "special_bonus_unique_doom_1",
      "special_bonus_cleave_100"
    ],
    "armor": {
      "armorPhysical": -1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 27,
        "max": 43
      },
      "rate": 2,
      "range": 150,
      "animationPoint": 0.5,
      "acquisitionRange": 600,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 0,
      "strength": {
        "base": 26,
        "gain": 3.5
      },
      "agility": {
        "base": 11,
        "gain": 0.9
      },
      "intelligence": {
        "base": 15,
        "gain": 2.1
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 280,
      "turnRate": 0.5,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default",
      "glowColor": "#6b4a35"
    }
  },
  "npc_dota_hero_ancient_apparition": {
    "id": 68,
    "name": "npc_dota_hero_ancient_apparition",
    "team": 1,
    "alias": [
      "aa"
    ],
    "roles": {
      "carry": 0,
      "support": 2,
      "nuker": 1,
      "disabler": 1,
      "jungler": 0,
      "durable": 0,
      "escape": 0,
      "pusher": 0,
      "initiator": 0,
      "complexity": 2
    },
    "abilities": [
      "ancient_apparition_cold_feet",
      "ancient_apparition_ice_vortex",
      "ancient_apparition_chilling_touch",
      "ancient_apparition_ice_blast",
      "ancient_apparition_ice_blast_release"
    ],
    "talents": [
      "special_bonus_gold_income_15",
      "special_bonus_spell_amplify_10",
      "special_bonus_unique_ancient_apparition_3",
      "special_bonus_hp_regen_20",
      "special_bonus_unique_ancient_apparition_4",
      "special_bonus_unique_ancient_apparition_2",
      "special_bonus_unique_ancient_apparition_6",
      "special_bonus_unique_ancient_apparition_5"
    ],
    "armor": {
      "armorPhysical": -1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 21,
        "max": 31
      },
      "rate": 1.7,
      "range": 675,
      "animationPoint": 0.45,
      "acquisitionRange": 800,
      "projectileSpeed": 1250
    },
    "attributes": {
      "primary": 2,
      "strength": {
        "base": 20,
        "gain": 1.7
      },
      "agility": {
        "base": 20,
        "gain": 2.2
      },
      "intelligence": {
        "base": 23,
        "gain": 2.6
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 295,
      "turnRate": 0.6,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "ice",
      "glowColor": "#354a6b"
    }
  },
  "npc_dota_hero_ursa": {
    "id": 70,
    "name": "npc_dota_hero_ursa",
    "team": 0,
    "alias": [],
    "roles": {
      "carry": 2,
      "support": 0,
      "nuker": 0,
      "disabler": 1,
      "jungler": 1,
      "durable": 1,
      "escape": 0,
      "pusher": 0,
      "initiator": 0,
      "complexity": 1
    },
    "abilities": [
      "ursa_earthshock",
      "ursa_overpower",
      "ursa_fury_swipes",
      "ursa_enrage"
    ],
    "talents": [
      "special_bonus_mp_regen_175",
      "special_bonus_strength_8",
      "special_bonus_agility_16",
      "special_bonus_unique_ursa_4",
      "special_bonus_unique_ursa_3",
      "special_bonus_unique_ursa",
      "special_bonus_unique_ursa_5",
      "special_bonus_unique_ursa_6"
    ],
    "armor": {
      "armorPhysical": 5,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 24,
        "max": 28
      },
      "rate": 1.7,
      "range": 150,
      "animationPoint": 0.3,
      "acquisitionRange": 600,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 1,
      "strength": {
        "base": 24,
        "gain": 3.3
      },
      "agility": {
        "base": 18,
        "gain": 2.1
      },
      "intelligence": {
        "base": 16,
        "gain": 1.5
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 305,
      "turnRate": 0.5,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 2,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default",
      "glowColor": "#6b4a35"
    }
  },
  "npc_dota_hero_spirit_breaker": {
    "id": 71,
    "name": "npc_dota_hero_spirit_breaker",
    "team": 1,
    "alias": [
      "sb"
    ],
    "roles": {
      "carry": 1,
      "support": 0,
      "nuker": 0,
      "disabler": 2,
      "jungler": 0,
      "durable": 2,
      "escape": 1,
      "pusher": 0,
      "initiator": 2,
      "complexity": 1
    },
    "abilities": [
      "spirit_breaker_charge_of_darkness",
      "spirit_breaker_empowering_haste",
      "spirit_breaker_greater_bash",
      "spirit_breaker_nether_strike"
    ],
    "talents": [
      "special_bonus_night_vision_600",
      "special_bonus_armor_5",
      "special_bonus_hp_regen_10",
      "special_bonus_attack_damage_40",
      "special_bonus_unique_spirit_breaker_3",
      "special_bonus_unique_spirit_breaker_2",
      "special_bonus_unique_spirit_breaker_1",
      "special_bonus_hp_800"
    ],
    "armor": {
      "armorPhysical": 2,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 31,
        "max": 41
      },
      "rate": 1.9,
      "range": 150,
      "animationPoint": 0.6,
      "acquisitionRange": 600,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 0,
      "strength": {
        "base": 29,
        "gain": 2.7
      },
      "agility": {
        "base": 17,
        "gain": 1.7
      },
      "intelligence": {
        "base": 14,
        "gain": 1.8
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 280,
      "turnRate": 0.5,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "ethereal",
      "gibTintColor": "#56b2dd",
      "glowColor": "#354a6b"
    }
  },
  "npc_dota_hero_gyrocopter": {
    "id": 72,
    "name": "npc_dota_hero_gyrocopter",
    "team": 0,
    "alias": [],
    "roles": {
      "carry": 3,
      "support": 0,
      "nuker": 1,
      "disabler": 1,
      "jungler": 0,
      "durable": 0,
      "escape": 0,
      "pusher": 0,
      "initiator": 0,
      "complexity": 1
    },
    "abilities": [
      "gyrocopter_rocket_barrage",
      "gyrocopter_homing_missile",
      "gyrocopter_flak_cannon",
      "gyrocopter_call_down"
    ],
    "talents": [
      "special_bonus_attack_damage_20",
      "special_bonus_hp_200",
      "special_bonus_unique_gyrocopter_6",
      "special_bonus_unique_gyrocopter_3",
      "special_bonus_movement_speed_40",
      "special_bonus_unique_gyrocopter_4",
      "special_bonus_unique_gyrocopter_1",
      "special_bonus_unique_gyrocopter_5"
    ],
    "armor": {
      "armorPhysical": 2,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 18,
        "max": 28
      },
      "rate": 1.7,
      "range": 365,
      "animationPoint": 0.2,
      "acquisitionRange": 800,
      "projectileSpeed": 3000
    },
    "attributes": {
      "primary": 1,
      "strength": {
        "base": 19,
        "gain": 2.1
      },
      "agility": {
        "base": 19,
        "gain": 2.8
      },
      "intelligence": {
        "base": 19,
        "gain": 2.1
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 320,
      "turnRate": 0.6,
      "hasAggressiveStance": true
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "motor"
    }
  },
  "npc_dota_hero_alchemist": {
    "id": 73,
    "name": "npc_dota_hero_alchemist",
    "team": 0,
    "alias": [],
    "roles": {
      "carry": 2,
      "support": 1,
      "nuker": 1,
      "disabler": 1,
      "jungler": 0,
      "durable": 2,
      "escape": 0,
      "pusher": 0,
      "initiator": 1,
      "complexity": 1
    },
    "abilities": [
      "alchemist_acid_spray",
      "alchemist_unstable_concoction",
      "alchemist_goblins_greed",
      "alchemist_chemical_rage",
      "alchemist_unstable_concoction_throw"
    ],
    "talents": [
      "special_bonus_attack_speed_25",
      "special_bonus_unique_alchemist",
      "special_bonus_hp_400",
      "special_bonus_attack_damage_50",
      "special_bonus_cleave_30",
      "special_bonus_unique_alchemist_2",
      "special_bonus_unique_alchemist_3",
      "special_bonus_unique_alchemist_4"
    ],
    "armor": {
      "armorPhysical": -1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 24,
        "max": 33
      },
      "rate": 1.7,
      "range": 150,
      "animationPoint": 0.35,
      "acquisitionRange": 600,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 0,
      "strength": {
        "base": 25,
        "gain": 2.1
      },
      "agility": {
        "base": 16,
        "gain": 1.2
      },
      "intelligence": {
        "base": 25,
        "gain": 1.8
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 290,
      "turnRate": 0.6,
      "hasAggressiveStance": true
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default"
    }
  },
  "npc_dota_hero_invoker": {
    "id": 74,
    "name": "npc_dota_hero_invoker",
    "team": 1,
    "alias": [],
    "roles": {
      "carry": 1,
      "support": 0,
      "nuker": 3,
      "disabler": 2,
      "jungler": 0,
      "durable": 0,
      "escape": 1,
      "pusher": 1,
      "initiator": 0,
      "complexity": 3
    },
    "abilities": [
      "invoker_quas",
      "invoker_wex",
      "invoker_exort",
      "invoker_empty1",
      "invoker_empty2",
      "invoker_invoke",
      "invoker_cold_snap",
      "invoker_ghost_walk",
      "invoker_tornado",
      "invoker_emp",
      "invoker_alacrity",
      "invoker_chaos_meteor",
      "invoker_sun_strike",
      "invoker_forge_spirit",
      "invoker_ice_wall",
      "invoker_deafening_blast"
    ],
    "talents": [
      "special_bonus_unique_invoker_8",
      "special_bonus_unique_invoker_6",
      "special_bonus_unique_invoker_1",
      "special_bonus_unique_invoker_9",
      "special_bonus_unique_invoker_4",
      "special_bonus_unique_invoker_5",
      "special_bonus_unique_invoker_2",
      "special_bonus_unique_invoker_3"
    ],
    "armor": {
      "armorPhysical": -1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 21,
        "max": 27
      },
      "rate": 1.7,
      "range": 600,
      "animationPoint": 0.4,
      "acquisitionRange": 800,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 2,
      "strength": {
        "base": 18,
        "gain": 2.2
      },
      "agility": {
        "base": 14,
        "gain": 1.9
      },
      "intelligence": {
        "base": 14,
        "gain": 4
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 280,
      "turnRate": 0.5,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": false,
      "Legs": 2,
      "AbilityDraftDisabled": true,
      "ARDMDisabled": true
    },
    "others": {
      "gibType": "default"
    }
  },
  "npc_dota_hero_silencer": {
    "id": 75,
    "name": "npc_dota_hero_silencer",
    "team": 0,
    "alias": [],
    "roles": {
      "carry": 1,
      "support": 1,
      "nuker": 1,
      "disabler": 2,
      "jungler": 0,
      "durable": 0,
      "escape": 0,
      "pusher": 0,
      "initiator": 2,
      "complexity": 2
    },
    "abilities": [
      "silencer_curse_of_the_silent",
      "silencer_glaives_of_wisdom",
      "silencer_last_word",
      "silencer_global_silence"
    ],
    "talents": [
      "special_bonus_armor_5",
      "special_bonus_attack_speed_25",
      "special_bonus_gold_income_20",
      "special_bonus_unique_silencer_2",
      "special_bonus_attack_range_125",
      "special_bonus_unique_silencer",
      "special_bonus_unique_silencer_3",
      "special_bonus_unique_silencer_4"
    ],
    "armor": {
      "armorPhysical": -1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 18,
        "max": 32
      },
      "rate": 1.7,
      "range": 600,
      "animationPoint": 0.5,
      "acquisitionRange": 800,
      "projectileSpeed": 1000
    },
    "attributes": {
      "primary": 2,
      "strength": {
        "base": 19,
        "gain": 2.5
      },
      "agility": {
        "base": 22,
        "gain": 3
      },
      "intelligence": {
        "base": 25,
        "gain": 2.5
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 295,
      "turnRate": 0.6,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default"
    }
  },
  "npc_dota_hero_obsidian_destroyer": {
    "id": 76,
    "name": "npc_dota_hero_obsidian_destroyer",
    "team": 1,
    "alias": [
      "od"
    ],
    "roles": {
      "carry": 2,
      "support": 0,
      "nuker": 2,
      "disabler": 1,
      "jungler": 0,
      "durable": 0,
      "escape": 0,
      "pusher": 0,
      "initiator": 0,
      "complexity": 2
    },
    "abilities": [
      "obsidian_destroyer_arcane_orb",
      "obsidian_destroyer_astral_imprisonment",
      "obsidian_destroyer_essence_aura",
      "obsidian_destroyer_sanity_eclipse"
    ],
    "talents": [
      "special_bonus_hp_250",
      "special_bonus_attack_speed_20",
      "special_bonus_movement_speed_35",
      "special_bonus_unique_outworld_devourer_2",
      "special_bonus_strength_20",
      "special_bonus_unique_outworld_devourer_3",
      "special_bonus_unique_outworld_devourer",
      "special_bonus_spell_lifesteal_15"
    ],
    "armor": {
      "armorPhysical": 0.5,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 16,
        "max": 31
      },
      "rate": 1.7,
      "range": 450,
      "animationPoint": 0.46,
      "acquisitionRange": 800,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 2,
      "strength": {
        "base": 19,
        "gain": 2.6
      },
      "agility": {
        "base": 24,
        "gain": 2
      },
      "intelligence": {
        "base": 24,
        "gain": 2.7
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 315,
      "turnRate": 0.5,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 4,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "ethereal",
      "gibTintColor": "#25120d"
    }
  },
  "npc_dota_hero_lycan": {
    "id": 77,
    "name": "npc_dota_hero_lycan",
    "team": 1,
    "alias": [],
    "roles": {
      "carry": 2,
      "support": 0,
      "nuker": 0,
      "disabler": 0,
      "jungler": 1,
      "durable": 1,
      "escape": 1,
      "pusher": 3,
      "initiator": 0,
      "complexity": 2
    },
    "abilities": [
      "lycan_summon_wolves",
      "lycan_howl",
      "lycan_feral_impulse",
      "lycan_shapeshift"
    ],
    "talents": [
      "special_bonus_armor_5",
      "special_bonus_attack_damage_20",
      "special_bonus_unique_lycan_3",
      "special_bonus_cooldown_reduction_12",
      "special_bonus_unique_lycan_1",
      "special_bonus_unique_lycan_4",
      "special_bonus_unique_lycan_5",
      "special_bonus_unique_lycan_2"
    ],
    "armor": {
      "armorPhysical": -2,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 30,
        "max": 35
      },
      "rate": 1.7,
      "range": 150,
      "animationPoint": 0.55,
      "acquisitionRange": 600,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 0,
      "strength": {
        "base": 25,
        "gain": 3.3
      },
      "agility": {
        "base": 16,
        "gain": 1
      },
      "intelligence": {
        "base": 17,
        "gain": 1.4
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 300,
      "turnRate": 0.5,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default",
      "glowColor": "#8b0101"
    }
  },
  "npc_dota_hero_brewmaster": {
    "id": 78,
    "name": "npc_dota_hero_brewmaster",
    "team": 0,
    "alias": [
      "bm"
    ],
    "roles": {
      "carry": 1,
      "support": 0,
      "nuker": 1,
      "disabler": 2,
      "jungler": 0,
      "durable": 2,
      "escape": 0,
      "pusher": 0,
      "initiator": 3,
      "complexity": 3
    },
    "abilities": [
      "brewmaster_thunder_clap",
      "brewmaster_drunken_haze",
      "brewmaster_drunken_brawler",
      "brewmaster_primal_split"
    ],
    "talents": [
      "special_bonus_attack_damage_30",
      "special_bonus_hp_200",
      "special_bonus_unique_brewmaster_3",
      "special_bonus_magic_resistance_20",
      "special_bonus_unique_brewmaster",
      "special_bonus_attack_speed_100",
      "special_bonus_unique_brewmaster_2",
      "special_bonus_unique_brewmaster_4"
    ],
    "armor": {
      "armorPhysical": -2,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 29,
        "max": 36
      },
      "rate": 1.7,
      "range": 150,
      "animationPoint": 0.35,
      "acquisitionRange": 600,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 0,
      "strength": {
        "base": 23,
        "gain": 3.2
      },
      "agility": {
        "base": 22,
        "gain": 1.95
      },
      "intelligence": {
        "base": 14,
        "gain": 1.25
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 295,
      "turnRate": 0.6,
      "hasAggressiveStance": true
    },
    "status": {
      "health": 200,
      "healthRegen": 2,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": false,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default",
      "glowColor": "#8b0101"
    }
  },
  "npc_dota_hero_shadow_demon": {
    "id": 79,
    "name": "npc_dota_hero_shadow_demon",
    "team": 1,
    "alias": [
      "sd"
    ],
    "roles": {
      "carry": 0,
      "support": 2,
      "nuker": 1,
      "disabler": 2,
      "jungler": 0,
      "durable": 0,
      "escape": 0,
      "pusher": 0,
      "initiator": 1,
      "complexity": 2
    },
    "abilities": [
      "shadow_demon_disruption",
      "shadow_demon_soul_catcher",
      "shadow_demon_shadow_poison",
      "shadow_demon_shadow_poison_release",
      "shadow_demon_demonic_purge"
    ],
    "talents": [
      "special_bonus_unique_shadow_demon_6",
      "special_bonus_exp_boost_30",
      "special_bonus_movement_speed_35",
      "special_bonus_unique_shadow_demon_4",
      "special_bonus_unique_shadow_demon_2",
      "special_bonus_unique_shadow_demon_3",
      "special_bonus_unique_shadow_demon_1",
      "special_bonus_unique_shadow_demon_7"
    ],
    "armor": {
      "armorPhysical": 0,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 29,
        "max": 33
      },
      "rate": 1.7,
      "range": 500,
      "animationPoint": 0.35,
      "acquisitionRange": 800,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 2,
      "strength": {
        "base": 23,
        "gain": 2.4
      },
      "agility": {
        "base": 18,
        "gain": 2.2
      },
      "intelligence": {
        "base": 21,
        "gain": 2.7
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 295,
      "turnRate": 0.6,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "ethereal",
      "gibTintColor": "#944479",
      "glowColor": "#f2c8c6"
    }
  },
  "npc_dota_hero_lone_druid": {
    "id": 80,
    "name": "npc_dota_hero_lone_druid",
    "team": 0,
    "alias": [
      "ld"
    ],
    "roles": {
      "carry": 2,
      "support": 0,
      "nuker": 0,
      "disabler": 0,
      "jungler": 1,
      "durable": 1,
      "escape": 0,
      "pusher": 3,
      "initiator": 0,
      "complexity": 3
    },
    "abilities": [
      "lone_druid_spirit_bear",
      "lone_druid_rabid",
      "lone_druid_savage_roar",
      "lone_druid_true_form_battle_cry",
      "lone_druid_true_form",
      "lone_druid_true_form_druid"
    ],
    "talents": [
      "special_bonus_hp_250",
      "special_bonus_attack_range_175",
      "special_bonus_unique_lone_druid_4",
      "special_bonus_unique_lone_druid_2",
      "special_bonus_unique_lone_druid_8",
      "special_bonus_unique_lone_druid_6",
      "special_bonus_unique_lone_druid_9",
      "special_bonus_unique_lone_druid_7"
    ],
    "armor": {
      "armorPhysical": 0,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 18,
        "max": 22
      },
      "rate": 1.7,
      "range": 550,
      "animationPoint": 0.33,
      "acquisitionRange": 600,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 1,
      "strength": {
        "base": 18,
        "gain": 2.4
      },
      "agility": {
        "base": 24,
        "gain": 2.7
      },
      "intelligence": {
        "base": 13,
        "gain": 1.4
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 320,
      "turnRate": 0.5,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.75,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": false,
      "Legs": 2,
      "AbilityDraftDisabled": true,
      "ARDMDisabled": true
    },
    "others": {
      "gibType": "default"
    }
  },
  "npc_dota_hero_chaos_knight": {
    "id": 81,
    "name": "npc_dota_hero_chaos_knight",
    "team": 1,
    "alias": [
      "ck"
    ],
    "roles": {
      "carry": 3,
      "support": 0,
      "nuker": 0,
      "disabler": 2,
      "jungler": 0,
      "durable": 2,
      "escape": 0,
      "pusher": 2,
      "initiator": 1,
      "complexity": 1
    },
    "abilities": [
      "chaos_knight_chaos_bolt",
      "chaos_knight_reality_rift",
      "chaos_knight_chaos_strike",
      "chaos_knight_phantasm"
    ],
    "talents": [
      "special_bonus_all_stats_5",
      "special_bonus_movement_speed_20",
      "special_bonus_strength_15",
      "special_bonus_cooldown_reduction_12",
      "special_bonus_gold_income_25",
      "special_bonus_unique_chaos_knight",
      "special_bonus_unique_chaos_knight_2",
      "special_bonus_unique_chaos_knight_3"
    ],
    "armor": {
      "armorPhysical": 1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 29,
        "max": 59
      },
      "rate": 1.7,
      "range": 150,
      "animationPoint": 0.5,
      "acquisitionRange": 600,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 0,
      "strength": {
        "base": 22,
        "gain": 3.2
      },
      "agility": {
        "base": 14,
        "gain": 2.1
      },
      "intelligence": {
        "base": 18,
        "gain": 1.2
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 320,
      "turnRate": 0.5,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": true,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "ethereal",
      "gibTintColor": "#a61d11"
    }
  },
  "npc_dota_hero_meepo": {
    "id": 82,
    "name": "npc_dota_hero_meepo",
    "team": 1,
    "alias": [
      "geomancer",
      "meepwn"
    ],
    "roles": {
      "carry": 2,
      "support": 0,
      "nuker": 2,
      "disabler": 1,
      "jungler": 0,
      "durable": 0,
      "escape": 2,
      "pusher": 1,
      "initiator": 1,
      "complexity": 3
    },
    "abilities": [
      "meepo_earthbind",
      "meepo_poof",
      "meepo_geostrike",
      "meepo_divided_we_stand"
    ],
    "talents": [
      "special_bonus_strength_7",
      "special_bonus_attack_damage_20",
      "special_bonus_lifesteal_10",
      "special_bonus_unique_meepo_2",
      "special_bonus_unique_meepo_3",
      "special_bonus_evasion_15",
      "special_bonus_hp_600",
      "special_bonus_unique_meepo"
    ],
    "armor": {
      "armorPhysical": 3,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 20,
        "max": 26
      },
      "rate": 1.7,
      "range": 150,
      "animationPoint": 0.38,
      "acquisitionRange": 600,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 1,
      "strength": {
        "base": 24,
        "gain": 1.6
      },
      "agility": {
        "base": 23,
        "gain": 2.2
      },
      "intelligence": {
        "base": 20,
        "gain": 1.6
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 310,
      "turnRate": 0.65,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.75,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": false,
      "Legs": 2,
      "AbilityDraftDisabled": true,
      "ARDMDisabled": true
    },
    "others": {
      "gibType": "default"
    }
  },
  "npc_dota_hero_treant": {
    "id": 83,
    "name": "npc_dota_hero_treant",
    "team": 0,
    "alias": [],
    "roles": {
      "carry": 0,
      "support": 3,
      "nuker": 0,
      "disabler": 1,
      "jungler": 0,
      "durable": 1,
      "escape": 1,
      "pusher": 0,
      "initiator": 2,
      "complexity": 2
    },
    "abilities": [
      "treant_natures_guise",
      "treant_leech_seed",
      "treant_living_armor",
      "treant_eyes_in_the_forest",
      "treant_overgrowth"
    ],
    "talents": [
      "special_bonus_unique_treant",
      "special_bonus_cooldown_reduction_10",
      "special_bonus_attack_damage_90",
      "special_bonus_unique_treant_3",
      "special_bonus_unique_treant_4",
      "special_bonus_unique_treant_2",
      "special_bonus_unique_treant_5",
      "special_bonus_unique_treant_7"
    ],
    "armor": {
      "armorPhysical": -2,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 62,
        "max": 70
      },
      "rate": 1.9,
      "range": 150,
      "animationPoint": 0.6,
      "acquisitionRange": 600,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 0,
      "strength": {
        "base": 25,
        "gain": 3.6
      },
      "agility": {
        "base": 15,
        "gain": 2
      },
      "intelligence": {
        "base": 20,
        "gain": 1.8
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 265,
      "turnRate": 0.5,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "wood",
      "gibTintColor": "#00ffb6"
    }
  },
  "npc_dota_hero_ogre_magi": {
    "id": 84,
    "name": "npc_dota_hero_ogre_magi",
    "team": 0,
    "alias": [
      "om"
    ],
    "roles": {
      "carry": 0,
      "support": 2,
      "nuker": 2,
      "disabler": 2,
      "jungler": 0,
      "durable": 1,
      "escape": 0,
      "pusher": 0,
      "initiator": 1,
      "complexity": 1
    },
    "abilities": [
      "ogre_magi_fireblast",
      "ogre_magi_ignite",
      "ogre_magi_bloodlust",
      "ogre_magi_unrefined_fireblast",
      "ogre_magi_multicast"
    ],
    "talents": [
      "special_bonus_gold_income_15",
      "special_bonus_cast_range_100",
      "special_bonus_attack_damage_90",
      "special_bonus_hp_300",
      "special_bonus_strength_40",
      "special_bonus_unique_ogre_magi",
      "special_bonus_movement_speed_90",
      "special_bonus_unique_ogre_magi_2"
    ],
    "armor": {
      "armorPhysical": 6,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 43,
        "max": 49
      },
      "rate": 1.7,
      "range": 150,
      "animationPoint": 0.3,
      "acquisitionRange": 600,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 2,
      "strength": {
        "base": 25,
        "gain": 3.5
      },
      "agility": {
        "base": 14,
        "gain": 1.55
      },
      "intelligence": {
        "base": 15,
        "gain": 2
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 285,
      "turnRate": 0.6,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 4.75,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default"
    }
  },
  "npc_dota_hero_undying": {
    "id": 85,
    "name": "npc_dota_hero_undying",
    "team": 1,
    "alias": [
      "dirge"
    ],
    "roles": {
      "carry": 0,
      "support": 1,
      "nuker": 1,
      "disabler": 1,
      "jungler": 0,
      "durable": 2,
      "escape": 0,
      "pusher": 0,
      "initiator": 0,
      "complexity": 1
    },
    "abilities": [
      "undying_decay",
      "undying_soul_rip",
      "undying_tombstone",
      "undying_flesh_golem"
    ],
    "talents": [
      "special_bonus_cast_range_150",
      "special_bonus_hp_regen_8",
      "special_bonus_unique_undying_3",
      "special_bonus_unique_undying_4",
      "special_bonus_unique_undying",
      "special_bonus_unique_undying_5",
      "special_bonus_reincarnation_200",
      "special_bonus_unique_undying_2"
    ],
    "armor": {
      "armorPhysical": 2,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 35,
        "max": 43
      },
      "rate": 1.7,
      "range": 150,
      "animationPoint": 0.3,
      "acquisitionRange": 600,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 0,
      "strength": {
        "base": 22,
        "gain": 2.4
      },
      "agility": {
        "base": 10,
        "gain": 0.8
      },
      "intelligence": {
        "base": 27,
        "gain": 2.8
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 305,
      "turnRate": 0.6,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "goo",
      "gibTintColor": "#495244"
    }
  },
  "npc_dota_hero_rubick": {
    "id": 86,
    "name": "npc_dota_hero_rubick",
    "team": 0,
    "alias": [
      "rubick"
    ],
    "roles": {
      "carry": 0,
      "support": 2,
      "nuker": 1,
      "disabler": 1,
      "jungler": 0,
      "durable": 0,
      "escape": 0,
      "pusher": 0,
      "initiator": 0,
      "complexity": 3
    },
    "abilities": [
      "rubick_telekinesis",
      "rubick_fade_bolt",
      "rubick_null_field",
      "rubick_empty1",
      "rubick_empty2",
      "rubick_spell_steal",
      "rubick_telekinesis_land",
      "rubick_hidden1",
      "rubick_hidden2",
      "rubick_hidden3"
    ],
    "talents": [
      "special_bonus_hp_200",
      "special_bonus_attack_damage_60",
      "special_bonus_cast_range_100",
      "special_bonus_unique_rubick_2",
      "special_bonus_unique_rubick_3",
      "special_bonus_unique_rubick",
      "special_bonus_unique_rubick_4",
      "special_bonus_unique_rubick_5"
    ],
    "armor": {
      "armorPhysical": -1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 19,
        "max": 29
      },
      "rate": 1.7,
      "range": 550,
      "animationPoint": 0.4,
      "acquisitionRange": 800,
      "projectileSpeed": 1125
    },
    "attributes": {
      "primary": 2,
      "strength": {
        "base": 21,
        "gain": 1.8
      },
      "agility": {
        "base": 14,
        "gain": 1.6
      },
      "intelligence": {
        "base": 25,
        "gain": 2.4
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 290,
      "turnRate": 0.7,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": false,
      "Legs": 2,
      "AbilityDraftDisabled": true,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default"
    }
  },
  "npc_dota_hero_disruptor": {
    "id": 87,
    "name": "npc_dota_hero_disruptor",
    "team": 0,
    "alias": [
      "disruptor"
    ],
    "roles": {
      "carry": 0,
      "support": 2,
      "nuker": 1,
      "disabler": 2,
      "jungler": 0,
      "durable": 0,
      "escape": 0,
      "pusher": 0,
      "initiator": 1,
      "complexity": 2
    },
    "abilities": [
      "disruptor_thunder_strike",
      "disruptor_glimpse",
      "disruptor_kinetic_field",
      "disruptor_static_storm"
    ],
    "talents": [
      "special_bonus_hp_200",
      "special_bonus_unique_disruptor_3",
      "special_bonus_cast_range_150",
      "special_bonus_unique_disruptor_2",
      "special_bonus_gold_income_30",
      "special_bonus_unique_disruptor",
      "special_bonus_unique_disruptor_4",
      "special_bonus_unique_disruptor_5"
    ],
    "armor": {
      "armorPhysical": -1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 29,
        "max": 33
      },
      "rate": 1.7,
      "range": 600,
      "animationPoint": 0.4,
      "acquisitionRange": 800,
      "projectileSpeed": 1200
    },
    "attributes": {
      "primary": 2,
      "strength": {
        "base": 21,
        "gain": 2.2
      },
      "agility": {
        "base": 15,
        "gain": 1.4
      },
      "intelligence": {
        "base": 20,
        "gain": 2.5
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 300,
      "turnRate": 0.5,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default"
    }
  },
  "npc_dota_hero_nyx_assassin": {
    "id": 88,
    "name": "npc_dota_hero_nyx_assassin",
    "team": 1,
    "alias": [
      "na"
    ],
    "roles": {
      "carry": 0,
      "support": 0,
      "nuker": 2,
      "disabler": 2,
      "jungler": 0,
      "durable": 0,
      "escape": 1,
      "pusher": 0,
      "initiator": 2,
      "complexity": 2
    },
    "abilities": [
      "nyx_assassin_impale",
      "nyx_assassin_mana_burn",
      "nyx_assassin_spiked_carapace",
      "nyx_assassin_burrow",
      "nyx_assassin_vendetta",
      "nyx_assassin_unburrow"
    ],
    "talents": [
      "special_bonus_spell_amplify_6",
      "special_bonus_gold_income_10",
      "special_bonus_hp_325",
      "special_bonus_movement_speed_35",
      "special_bonus_unique_nyx",
      "special_bonus_unique_nyx_2",
      "special_bonus_agility_100",
      "special_bonus_unique_nyx_3"
    ],
    "armor": {
      "armorPhysical": 1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 27,
        "max": 31
      },
      "rate": 1.7,
      "range": 150,
      "animationPoint": 0.46,
      "acquisitionRange": 600,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 1,
      "strength": {
        "base": 19,
        "gain": 2.3
      },
      "agility": {
        "base": 19,
        "gain": 2.2
      },
      "intelligence": {
        "base": 18,
        "gain": 2.1
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 295,
      "turnRate": 0.5,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 4.75,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 6,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "goo",
      "gibTintColor": "#348948"
    }
  },
  "npc_dota_hero_naga_siren": {
    "id": 89,
    "name": "npc_dota_hero_naga_siren",
    "team": 0,
    "alias": [
      "naga"
    ],
    "roles": {
      "carry": 3,
      "support": 1,
      "nuker": 0,
      "disabler": 2,
      "jungler": 0,
      "durable": 0,
      "escape": 1,
      "pusher": 2,
      "initiator": 1,
      "complexity": 2
    },
    "abilities": [
      "naga_siren_mirror_image",
      "naga_siren_ensnare",
      "naga_siren_rip_tide",
      "naga_siren_song_of_the_siren",
      "naga_siren_song_of_the_siren_cancel"
    ],
    "talents": [
      "special_bonus_movement_speed_25",
      "special_bonus_unique_naga_siren_4",
      "special_bonus_agility_15",
      "special_bonus_strength_14",
      "special_bonus_unique_naga_siren_2",
      "special_bonus_unique_naga_siren",
      "special_bonus_evasion_30",
      "special_bonus_unique_naga_siren_3"
    ],
    "armor": {
      "armorPhysical": 3,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 23,
        "max": 25
      },
      "rate": 1.7,
      "range": 150,
      "animationPoint": 0.5,
      "acquisitionRange": 600,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 1,
      "strength": {
        "base": 22,
        "gain": 2.8
      },
      "agility": {
        "base": 21,
        "gain": 3.2
      },
      "intelligence": {
        "base": 21,
        "gain": 2
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 315,
      "turnRate": 0.5,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 3,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 0,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default",
      "glowColor": "#9a6185"
    }
  },
  "npc_dota_hero_keeper_of_the_light": {
    "id": 90,
    "name": "npc_dota_hero_keeper_of_the_light",
    "team": 0,
    "alias": [
      "keeper",
      "ezalor",
      "kotl"
    ],
    "roles": {
      "carry": 0,
      "support": 3,
      "nuker": 2,
      "disabler": 1,
      "jungler": 1,
      "durable": 0,
      "escape": 0,
      "pusher": 0,
      "initiator": 0,
      "complexity": 2
    },
    "abilities": [
      "keeper_of_the_light_illuminate",
      "keeper_of_the_light_mana_leak",
      "keeper_of_the_light_chakra_magic",
      "keeper_of_the_light_recall",
      "keeper_of_the_light_blinding_light",
      "keeper_of_the_light_spirit_form",
      "keeper_of_the_light_illuminate_end",
      "keeper_of_the_light_spirit_form_illuminate",
      "keeper_of_the_light_spirit_form_illuminate_end"
    ],
    "talents": [
      "special_bonus_spell_lifesteal_8",
      "special_bonus_movement_speed_25",
      "special_bonus_exp_boost_40",
      "special_bonus_cast_range_350",
      "special_bonus_magic_resistance_40",
      "special_bonus_unique_keeper_of_the_light_2",
      "special_bonus_unique_keeper_of_the_light_3",
      "special_bonus_unique_keeper_of_the_light"
    ],
    "armor": {
      "armorPhysical": -1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 20,
        "max": 27
      },
      "rate": 1.7,
      "range": 600,
      "animationPoint": 0.3,
      "acquisitionRange": 800,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 2,
      "strength": {
        "base": 16,
        "gain": 2.1
      },
      "agility": {
        "base": 15,
        "gain": 1.6
      },
      "intelligence": {
        "base": 23,
        "gain": 2.8
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 335,
      "turnRate": 0.5,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default"
    }
  },
  "npc_dota_hero_wisp": {
    "id": 91,
    "name": "npc_dota_hero_wisp",
    "team": 0,
    "alias": [
      "wisp"
    ],
    "roles": {
      "carry": 0,
      "support": 3,
      "nuker": 1,
      "disabler": 0,
      "jungler": 0,
      "durable": 0,
      "escape": 2,
      "pusher": 0,
      "initiator": 0,
      "complexity": 3
    },
    "abilities": [
      "wisp_tether",
      "wisp_spirits",
      "wisp_overcharge",
      "wisp_relocate",
      "wisp_tether_break",
      "wisp_spirits_in"
    ],
    "talents": [
      "special_bonus_exp_boost_20",
      "special_bonus_attack_damage_45",
      "special_bonus_unique_wisp",
      "special_bonus_unique_wisp_5",
      "special_bonus_gold_income_25",
      "special_bonus_hp_regen_15",
      "special_bonus_unique_wisp_6",
      "special_bonus_unique_wisp_4"
    ],
    "armor": {
      "armorPhysical": -2,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 22,
        "max": 31
      },
      "rate": 1.7,
      "range": 575,
      "animationPoint": 0.15,
      "acquisitionRange": 800,
      "projectileSpeed": 1200
    },
    "attributes": {
      "primary": 0,
      "strength": {
        "base": 17,
        "gain": 2.2
      },
      "agility": {
        "base": 14,
        "gain": 1.6
      },
      "intelligence": {
        "base": 23,
        "gain": 1.7
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 280,
      "turnRate": 0.7,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": false,
      "Legs": 0,
      "AbilityDraftDisabled": true,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "ethereal",
      "gibTintColor": "#abe6ff"
    }
  },
  "npc_dota_hero_visage": {
    "id": 92,
    "name": "npc_dota_hero_visage",
    "team": 1,
    "alias": [
      "visage"
    ],
    "roles": {
      "carry": 0,
      "support": 1,
      "nuker": 2,
      "disabler": 1,
      "jungler": 0,
      "durable": 1,
      "escape": 0,
      "pusher": 1,
      "initiator": 0,
      "complexity": 3
    },
    "abilities": [
      "visage_grave_chill",
      "visage_soul_assumption",
      "visage_gravekeepers_cloak",
      "visage_stone_form_self_cast",
      "visage_summon_familiars"
    ],
    "talents": [
      "special_bonus_cast_range_125",
      "special_bonus_attack_damage_30",
      "special_bonus_exp_boost_40",
      "special_bonus_unique_visage_3",
      "special_bonus_unique_visage_4",
      "special_bonus_unique_visage_2",
      "special_bonus_unique_visage_5",
      "special_bonus_unique_visage_6"
    ],
    "armor": {
      "armorPhysical": -2,
      "magicalResistance": 10
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 23,
        "max": 33
      },
      "rate": 1.7,
      "range": 600,
      "animationPoint": 0.46,
      "acquisitionRange": 800,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 2,
      "strength": {
        "base": 24,
        "gain": 3
      },
      "agility": {
        "base": 11,
        "gain": 1.3
      },
      "intelligence": {
        "base": 22,
        "gain": 2.5
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 285,
      "turnRate": 0.5,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": false,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "ethereal",
      "gibTintColor": "#75d2ad"
    }
  },
  "npc_dota_hero_slark": {
    "id": 93,
    "name": "npc_dota_hero_slark",
    "team": 1,
    "alias": [
      "slark"
    ],
    "roles": {
      "carry": 2,
      "support": 0,
      "nuker": 1,
      "disabler": 1,
      "jungler": 0,
      "durable": 0,
      "escape": 3,
      "pusher": 0,
      "initiator": 0,
      "complexity": 1
    },
    "abilities": [
      "slark_dark_pact",
      "slark_pounce",
      "slark_essence_shift",
      "slark_shadow_dance"
    ],
    "talents": [
      "special_bonus_strength_10",
      "special_bonus_agility_8",
      "special_bonus_attack_speed_30",
      "special_bonus_lifesteal_20",
      "special_bonus_unique_slark_2",
      "special_bonus_unique_slark",
      "special_bonus_unique_slark_3",
      "special_bonus_unique_slark_4"
    ],
    "armor": {
      "armorPhysical": -1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 33,
        "max": 41
      },
      "rate": 1.7,
      "range": 150,
      "animationPoint": 0.5,
      "acquisitionRange": 600,
      "projectileSpeed": 0
    },
    "attributes": {
      "primary": 1,
      "strength": {
        "base": 21,
        "gain": 1.9
      },
      "agility": {
        "base": 21,
        "gain": 1.5
      },
      "intelligence": {
        "base": 16,
        "gain": 1.7
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 295,
      "turnRate": 0.6,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 3.25,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 1800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default"
    }
  },
  "npc_dota_hero_medusa": {
    "id": 94,
    "name": "npc_dota_hero_medusa",
    "team": 1,
    "alias": [
      "medusa",
      "gorgon"
    ],
    "roles": {
      "carry": 3,
      "support": 0,
      "nuker": 0,
      "disabler": 1,
      "jungler": 0,
      "durable": 1,
      "escape": 0,
      "pusher": 0,
      "initiator": 0,
      "complexity": 1
    },
    "abilities": [
      "medusa_split_shot",
      "medusa_mystic_snake",
      "medusa_mana_shield",
      "medusa_stone_gaze"
    ],
    "talents": [
      "special_bonus_attack_damage_20",
      "special_bonus_evasion_15",
      "special_bonus_attack_speed_30",
      "special_bonus_unique_medusa_3",
      "special_bonus_mp_700",
      "special_bonus_unique_medusa",
      "special_bonus_unique_medusa_2",
      "special_bonus_unique_medusa_4"
    ],
    "armor": {
      "armorPhysical": -1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 24,
        "max": 30
      },
      "rate": 1.7,
      "range": 600,
      "animationPoint": 0.5,
      "acquisitionRange": 800,
      "projectileSpeed": 1200
    },
    "attributes": {
      "primary": 1,
      "strength": {
        "base": 15,
        "gain": 1.3
      },
      "agility": {
        "base": 20,
        "gain": 2.5
      },
      "intelligence": {
        "base": 19,
        "gain": 2.1
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 275,
      "turnRate": 0.5,
      "hasAggressiveStance": true
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 0,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default"
    }
  },
  "npc_dota_hero_troll_warlord": {
    "id": 95,
    "name": "npc_dota_hero_troll_warlord",
    "team": 0,
    "alias": [
      "troll",
      "jahrakal"
    ],
    "roles": {
      "carry": 3,
      "support": 0,
      "nuker": 0,
      "disabler": 1,
      "jungler": 0,
      "durable": 1,
      "escape": 0,
      "pusher": 2,
      "initiator": 0,
      "complexity": 2
    },
    "abilities": [
      "troll_warlord_berserkers_rage",
      "troll_warlord_whirling_axes_ranged",
      "troll_warlord_whirling_axes_melee",
      "troll_warlord_fervor",
      "troll_warlord_battle_trance"
    ],
    "talents": [
      "special_bonus_agility_10",
      "special_bonus_hp_250",
      "special_bonus_unique_troll_warlord_2",
      "special_bonus_unique_troll_warlord_3",
      "special_bonus_evasion_20",
      "special_bonus_attack_damage_50",
      "special_bonus_unique_troll_warlord",
      "special_bonus_unique_troll_warlord_4"
    ],
    "armor": {
      "armorPhysical": -1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 17,
        "max": 35
      },
      "rate": 1.7,
      "range": 500,
      "animationPoint": 0.3,
      "acquisitionRange": 800,
      "projectileSpeed": 1200
    },
    "attributes": {
      "primary": 1,
      "strength": {
        "base": 21,
        "gain": 2.5
      },
      "agility": {
        "base": 21,
        "gain": 2.5
      },
      "intelligence": {
        "base": 13,
        "gain": 1
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 295,
      "turnRate": 0.5,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.75,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default"
    }
  },
  "npc_dota_hero_centaur": {
    "id": 96,
    "name": "npc_dota_hero_centaur",
    "team": 0,
    "alias": [
      "centaur"
    ],
    "roles": {
      "carry": 0,
      "support": 0,
      "nuker": 1,
      "disabler": 1,
      "jungler": 0,
      "durable": 3,
      "escape": 1,
      "pusher": 0,
      "initiator": 3,
      "complexity": 1
    },
    "abilities": [
      "centaur_hoof_stomp",
      "centaur_double_edge",
      "centaur_return",
      "centaur_stampede"
    ],
    "talents": [
      "special_bonus_evasion_10",
      "special_bonus_magic_resistance_10",
      "special_bonus_attack_damage_75",
      "special_bonus_unique_centaur_3",
      "special_bonus_unique_centaur_4",
      "special_bonus_strength_20",
      "special_bonus_unique_centaur_1",
      "special_bonus_unique_centaur_2"
    ],
    "armor": {
      "armorPhysical": -1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 36,
        "max": 38
      },
      "rate": 1.7,
      "range": 150,
      "animationPoint": 0.3,
      "acquisitionRange": 600,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 0,
      "strength": {
        "base": 27,
        "gain": 4.3
      },
      "agility": {
        "base": 15,
        "gain": 1
      },
      "intelligence": {
        "base": 15,
        "gain": 1.6
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 295,
      "turnRate": 0.5,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 4,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default"
    }
  },
  "npc_dota_hero_magnataur": {
    "id": 97,
    "name": "npc_dota_hero_magnataur",
    "team": 1,
    "alias": [
      "magnataur",
      "magnus"
    ],
    "roles": {
      "carry": 0,
      "support": 0,
      "nuker": 1,
      "disabler": 2,
      "jungler": 0,
      "durable": 0,
      "escape": 1,
      "pusher": 0,
      "initiator": 3,
      "complexity": 2
    },
    "abilities": [
      "magnataur_shockwave",
      "magnataur_empower",
      "magnataur_skewer",
      "magnataur_reverse_polarity"
    ],
    "talents": [
      "special_bonus_attack_speed_25",
      "special_bonus_hp_200",
      "special_bonus_strength_15",
      "special_bonus_unique_magnus_4",
      "special_bonus_armor_12",
      "special_bonus_unique_magnus_3",
      "special_bonus_unique_magnus_2",
      "special_bonus_unique_magnus_5"
    ],
    "armor": {
      "armorPhysical": 1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 32,
        "max": 44
      },
      "rate": 1.8,
      "range": 150,
      "animationPoint": 0.5,
      "acquisitionRange": 600,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 0,
      "strength": {
        "base": 23,
        "gain": 3.2
      },
      "agility": {
        "base": 15,
        "gain": 2.5
      },
      "intelligence": {
        "base": 19,
        "gain": 1.65
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 305,
      "turnRate": 0.8,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 2,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 4,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default"
    }
  },
  "npc_dota_hero_shredder": {
    "id": 98,
    "name": "npc_dota_hero_shredder",
    "team": 0,
    "alias": [
      "Rizzrack",
      "Shredder",
      "Timbersaw"
    ],
    "roles": {
      "carry": 0,
      "support": 0,
      "nuker": 3,
      "disabler": 0,
      "jungler": 0,
      "durable": 2,
      "escape": 2,
      "pusher": 0,
      "initiator": 0,
      "complexity": 2
    },
    "abilities": [
      "shredder_whirling_death",
      "shredder_timber_chain",
      "shredder_reactive_armor",
      "shredder_chakram_2",
      "shredder_chakram",
      "shredder_return_chakram",
      "shredder_return_chakram_2"
    ],
    "talents": [
      "special_bonus_spell_amplify_6",
      "special_bonus_exp_boost_25",
      "special_bonus_attack_damage_100",
      "special_bonus_unique_timbersaw_2",
      "special_bonus_strength_15",
      "special_bonus_cooldown_reduction_10",
      "special_bonus_unique_timbersaw",
      "special_bonus_unique_timbersaw_3"
    ],
    "armor": {
      "armorPhysical": -2,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 26,
        "max": 30
      },
      "rate": 1.7,
      "range": 150,
      "animationPoint": 0.36,
      "acquisitionRange": 600,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 0,
      "strength": {
        "base": 21,
        "gain": 2.1
      },
      "agility": {
        "base": 16,
        "gain": 1.3
      },
      "intelligence": {
        "base": 21,
        "gain": 2.4
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 285,
      "turnRate": 0.6,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "motor"
    }
  },
  "npc_dota_hero_bristleback": {
    "id": 99,
    "name": "npc_dota_hero_bristleback",
    "team": 0,
    "alias": [
      "Rigwarl",
      "bb"
    ],
    "roles": {
      "carry": 2,
      "support": 0,
      "nuker": 1,
      "disabler": 0,
      "jungler": 0,
      "durable": 3,
      "escape": 0,
      "pusher": 0,
      "initiator": 1,
      "complexity": 1
    },
    "abilities": [
      "bristleback_viscous_nasal_goo",
      "bristleback_quill_spray",
      "bristleback_bristleback",
      "bristleback_warpath"
    ],
    "talents": [
      "special_bonus_movement_speed_20",
      "special_bonus_mp_regen_2",
      "special_bonus_hp_250",
      "special_bonus_unique_bristleback",
      "special_bonus_hp_regen_20",
      "special_bonus_unique_bristleback_2",
      "special_bonus_spell_lifesteal_15",
      "special_bonus_unique_bristleback_3"
    ],
    "armor": {
      "armorPhysical": 0,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 22,
        "max": 32
      },
      "rate": 1.8,
      "range": 150,
      "animationPoint": 0.3,
      "acquisitionRange": 600,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 0,
      "strength": {
        "base": 22,
        "gain": 2.2
      },
      "agility": {
        "base": 17,
        "gain": 1.8
      },
      "intelligence": {
        "base": 14,
        "gain": 2.8
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 285,
      "turnRate": 1,
      "hasAggressiveStance": true
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": true,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "goo",
      "gibTintColor": "#cb1d00"
    }
  },
  "npc_dota_hero_tusk": {
    "id": 100,
    "name": "npc_dota_hero_tusk",
    "team": 0,
    "alias": [
      "Tuskarr"
    ],
    "roles": {
      "carry": 0,
      "support": 0,
      "nuker": 1,
      "disabler": 2,
      "jungler": 0,
      "durable": 0,
      "escape": 0,
      "pusher": 0,
      "initiator": 2,
      "complexity": 1
    },
    "abilities": [
      "tusk_ice_shards",
      "tusk_snowball",
      "tusk_frozen_sigil",
      "tusk_walrus_kick",
      "tusk_walrus_punch",
      "tusk_launch_snowball"
    ],
    "talents": [
      "special_bonus_exp_boost_40",
      "special_bonus_gold_income_15",
      "special_bonus_hp_350",
      "special_bonus_unique_tusk_2",
      "special_bonus_unique_tusk_3",
      "special_bonus_unique_tusk",
      "special_bonus_unique_tusk_4",
      "special_bonus_unique_tusk_5"
    ],
    "armor": {
      "armorPhysical": -1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 27,
        "max": 31
      },
      "rate": 1.7,
      "range": 150,
      "animationPoint": 0.36,
      "acquisitionRange": 600,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 0,
      "strength": {
        "base": 23,
        "gain": 3
      },
      "agility": {
        "base": 23,
        "gain": 2.1
      },
      "intelligence": {
        "base": 18,
        "gain": 1.7
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 295,
      "turnRate": 0.7,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default"
    }
  },
  "npc_dota_hero_skywrath_mage": {
    "id": 101,
    "name": "npc_dota_hero_skywrath_mage",
    "team": 0,
    "alias": [
      "dragonus"
    ],
    "roles": {
      "carry": 0,
      "support": 2,
      "nuker": 3,
      "disabler": 1,
      "jungler": 0,
      "durable": 0,
      "escape": 0,
      "pusher": 0,
      "initiator": 0,
      "complexity": 1
    },
    "abilities": [
      "skywrath_mage_arcane_bolt",
      "skywrath_mage_concussive_shot",
      "skywrath_mage_ancient_seal",
      "skywrath_mage_mystic_flare"
    ],
    "talents": [
      "special_bonus_movement_speed_25",
      "special_bonus_intelligence_8",
      "special_bonus_unique_skywrath",
      "special_bonus_unique_skywrath_2",
      "special_bonus_unique_skywrath_4",
      "special_bonus_unique_skywrath_3",
      "special_bonus_gold_income_50",
      "special_bonus_unique_skywrath_5"
    ],
    "armor": {
      "armorPhysical": -2,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 14,
        "max": 24
      },
      "rate": 1.7,
      "range": 600,
      "animationPoint": 0.4,
      "acquisitionRange": 800,
      "projectileSpeed": 1000
    },
    "attributes": {
      "primary": 2,
      "strength": {
        "base": 21,
        "gain": 1.8
      },
      "agility": {
        "base": 13,
        "gain": 0.8
      },
      "intelligence": {
        "base": 25,
        "gain": 3.6
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 330,
      "turnRate": 0.5,
      "hasAggressiveStance": true
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": true,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default",
      "glowColor": "#c250a3"
    }
  },
  "npc_dota_hero_abaddon": {
    "id": 102,
    "name": "npc_dota_hero_abaddon",
    "team": 1,
    "alias": [
      "Abaddon"
    ],
    "roles": {
      "carry": 1,
      "support": 2,
      "nuker": 0,
      "disabler": 0,
      "jungler": 0,
      "durable": 2,
      "escape": 0,
      "pusher": 0,
      "initiator": 0,
      "complexity": 1
    },
    "abilities": [
      "abaddon_death_coil",
      "abaddon_aphotic_shield",
      "abaddon_frostmourne",
      "abaddon_borrowed_time"
    ],
    "talents": [
      "special_bonus_movement_speed_25",
      "special_bonus_exp_boost_25",
      "special_bonus_armor_8",
      "special_bonus_unique_abaddon_2",
      "special_bonus_cooldown_reduction_20",
      "special_bonus_attack_damage_90",
      "special_bonus_unique_abaddon",
      "special_bonus_unique_abaddon_3"
    ],
    "armor": {
      "armorPhysical": -2,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 32,
        "max": 42
      },
      "rate": 1.7,
      "range": 150,
      "animationPoint": 0.56,
      "acquisitionRange": 600,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 0,
      "strength": {
        "base": 23,
        "gain": 2.6
      },
      "agility": {
        "base": 17,
        "gain": 1.5
      },
      "intelligence": {
        "base": 21,
        "gain": 2
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 310,
      "turnRate": 0.5,
      "hasAggressiveStance": true
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "ethereal",
      "gibTintColor": "#4c9394"
    }
  },
  "npc_dota_hero_elder_titan": {
    "id": 103,
    "name": "npc_dota_hero_elder_titan",
    "team": 0,
    "alias": [
      "TC",
      "Cairne"
    ],
    "roles": {
      "carry": 0,
      "support": 0,
      "nuker": 1,
      "disabler": 1,
      "jungler": 0,
      "durable": 1,
      "escape": 0,
      "pusher": 0,
      "initiator": 2,
      "complexity": 2
    },
    "abilities": [
      "elder_titan_echo_stomp",
      "elder_titan_ancestral_spirit",
      "elder_titan_natural_order",
      "elder_titan_earth_splitter",
      "elder_titan_return_spirit"
    ],
    "talents": [
      "special_bonus_movement_speed_25",
      "special_bonus_hp_200",
      "special_bonus_magic_resistance_15",
      "special_bonus_unique_elder_titan",
      "special_bonus_attack_speed_70",
      "special_bonus_unique_elder_titan_2",
      "special_bonus_unique_elder_titan_3",
      "special_bonus_lifesteal_100"
    ],
    "armor": {
      "armorPhysical": 0,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 23,
        "max": 33
      },
      "rate": 1.7,
      "range": 150,
      "animationPoint": 0.35,
      "acquisitionRange": 600,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 0,
      "strength": {
        "base": 24,
        "gain": 2.6
      },
      "agility": {
        "base": 14,
        "gain": 1.8
      },
      "intelligence": {
        "base": 23,
        "gain": 1.6
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 310,
      "turnRate": 0.5,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default"
    }
  },
  "npc_dota_hero_legion_commander": {
    "id": 104,
    "name": "npc_dota_hero_legion_commander",
    "team": 0,
    "alias": [
      "Tresdin",
      "Legion"
    ],
    "roles": {
      "carry": 1,
      "support": 0,
      "nuker": 1,
      "disabler": 2,
      "jungler": 0,
      "durable": 1,
      "escape": 0,
      "pusher": 0,
      "initiator": 1,
      "complexity": 1
    },
    "abilities": [
      "legion_commander_overwhelming_odds",
      "legion_commander_press_the_attack",
      "legion_commander_moment_of_courage",
      "legion_commander_duel"
    ],
    "talents": [
      "special_bonus_strength_8",
      "special_bonus_exp_boost_25",
      "special_bonus_attack_speed_30",
      "special_bonus_unique_legion_commander_4",
      "special_bonus_movement_speed_50",
      "special_bonus_unique_legion_commander_3",
      "special_bonus_unique_legion_commander",
      "special_bonus_unique_legion_commander_2"
    ],
    "armor": {
      "armorPhysical": -1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 35,
        "max": 39
      },
      "rate": 1.7,
      "range": 150,
      "animationPoint": 0.46,
      "acquisitionRange": 600,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 0,
      "strength": {
        "base": 26,
        "gain": 2.9
      },
      "agility": {
        "base": 18,
        "gain": 1.7
      },
      "intelligence": {
        "base": 20,
        "gain": 2.2
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 315,
      "turnRate": 0.5,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default"
    }
  },
  "npc_dota_hero_ember_spirit": {
    "id": 106,
    "name": "npc_dota_hero_ember_spirit",
    "team": 0,
    "alias": [
      "Xin",
      "Ember"
    ],
    "roles": {
      "carry": 2,
      "support": 0,
      "nuker": 1,
      "disabler": 1,
      "jungler": 0,
      "durable": 0,
      "escape": 3,
      "pusher": 0,
      "initiator": 1,
      "complexity": 2
    },
    "abilities": [
      "ember_spirit_searing_chains",
      "ember_spirit_sleight_of_fist",
      "ember_spirit_flame_guard",
      "ember_spirit_activate_fire_remnant",
      "ember_spirit_fire_remnant"
    ],
    "talents": [
      "special_bonus_attack_damage_25",
      "special_bonus_unique_ember_spirit_1",
      "special_bonus_unique_ember_spirit_3",
      "special_bonus_unique_ember_spirit_2",
      "special_bonus_spell_amplify_10",
      "special_bonus_truestrike",
      "special_bonus_unique_ember_spirit_4",
      "special_bonus_unique_ember_spirit_5"
    ],
    "armor": {
      "armorPhysical": -1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 30,
        "max": 34
      },
      "rate": 1.7,
      "range": 150,
      "animationPoint": 0.4,
      "acquisitionRange": 600,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 1,
      "strength": {
        "base": 20,
        "gain": 2.4
      },
      "agility": {
        "base": 22,
        "gain": 1.8
      },
      "intelligence": {
        "base": 20,
        "gain": 1.8
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 305,
      "turnRate": 0.5,
      "hasAggressiveStance": true
    },
    "status": {
      "health": 200,
      "healthRegen": 2,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "fire"
    }
  },
  "npc_dota_hero_earth_spirit": {
    "id": 107,
    "name": "npc_dota_hero_earth_spirit",
    "team": 0,
    "alias": [
      "Kaolin",
      "Earth"
    ],
    "roles": {
      "carry": 0,
      "support": 0,
      "nuker": 2,
      "disabler": 1,
      "jungler": 0,
      "durable": 1,
      "escape": 2,
      "pusher": 0,
      "initiator": 1,
      "complexity": 3
    },
    "abilities": [
      "earth_spirit_boulder_smash",
      "earth_spirit_rolling_boulder",
      "earth_spirit_geomagnetic_grip",
      "earth_spirit_stone_caller",
      "earth_spirit_petrify",
      "earth_spirit_magnetize"
    ],
    "talents": [
      "special_bonus_intelligence_10",
      "special_bonus_attack_damage_40",
      "special_bonus_armor_7",
      "special_bonus_unique_earth_spirit",
      "special_bonus_spell_amplify_15",
      "special_bonus_gold_income_25",
      "special_bonus_unique_earth_spirit_2",
      "special_bonus_unique_earth_spirit_3"
    ],
    "armor": {
      "armorPhysical": 0,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 25,
        "max": 35
      },
      "rate": 1.7,
      "range": 150,
      "animationPoint": 0.35,
      "acquisitionRange": 600,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 0,
      "strength": {
        "base": 21,
        "gain": 3.5
      },
      "agility": {
        "base": 17,
        "gain": 1.5
      },
      "intelligence": {
        "base": 18,
        "gain": 2.1
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 285,
      "turnRate": 0.6,
      "hasAggressiveStance": true
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": false,
      "Legs": 2,
      "AbilityDraftDisabled": true,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "stone"
    }
  },
  "npc_dota_hero_terrorblade": {
    "id": 109,
    "name": "npc_dota_hero_terrorblade",
    "team": 1,
    "alias": [
      "tb"
    ],
    "roles": {
      "carry": 3,
      "support": 0,
      "nuker": 1,
      "disabler": 0,
      "jungler": 0,
      "durable": 0,
      "escape": 0,
      "pusher": 2,
      "initiator": 0,
      "complexity": 2
    },
    "abilities": [
      "terrorblade_reflection",
      "terrorblade_conjure_image",
      "terrorblade_metamorphosis",
      "terrorblade_sunder"
    ],
    "talents": [
      "special_bonus_movement_speed_20",
      "special_bonus_evasion_10",
      "special_bonus_hp_300",
      "special_bonus_attack_speed_25",
      "special_bonus_all_stats_10",
      "special_bonus_unique_terrorblade_2",
      "special_bonus_unique_terrorblade",
      "special_bonus_unique_terrorblade_3"
    ],
    "armor": {
      "armorPhysical": 7,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 26,
        "max": 32
      },
      "rate": 1.5,
      "range": 150,
      "animationPoint": 0.3,
      "acquisitionRange": 600,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 1,
      "strength": {
        "base": 16,
        "gain": 1.7
      },
      "agility": {
        "base": 22,
        "gain": 4.2
      },
      "intelligence": {
        "base": 19,
        "gain": 1.6
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 310,
      "turnRate": 0.5,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "ethereal",
      "gibTintColor": "#714a5b"
    }
  },
  "npc_dota_hero_phoenix": {
    "id": 110,
    "name": "npc_dota_hero_phoenix",
    "team": 0,
    "alias": [
      "ph"
    ],
    "roles": {
      "carry": 0,
      "support": 1,
      "nuker": 3,
      "disabler": 1,
      "jungler": 0,
      "durable": 0,
      "escape": 2,
      "pusher": 0,
      "initiator": 2,
      "complexity": 2
    },
    "abilities": [
      "phoenix_icarus_dive",
      "phoenix_fire_spirits",
      "phoenix_sun_ray",
      "phoenix_sun_ray_toggle_move",
      "phoenix_supernova",
      "phoenix_launch_fire_spirit",
      "phoenix_icarus_dive_stop",
      "phoenix_sun_ray_stop"
    ],
    "talents": [
      "special_bonus_gold_income_15",
      "special_bonus_spell_amplify_8",
      "special_bonus_unique_phoenix_3",
      "special_bonus_hp_500",
      "special_bonus_unique_phoenix_4",
      "special_bonus_unique_phoenix_2",
      "special_bonus_unique_phoenix_1",
      "special_bonus_unique_phoenix_5"
    ],
    "armor": {
      "armorPhysical": -2,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 26,
        "max": 36
      },
      "rate": 1.7,
      "range": 500,
      "animationPoint": 0.35,
      "acquisitionRange": 800,
      "projectileSpeed": 1100
    },
    "attributes": {
      "primary": 0,
      "strength": {
        "base": 19,
        "gain": 3.2
      },
      "agility": {
        "base": 12,
        "gain": 1.3
      },
      "intelligence": {
        "base": 18,
        "gain": 1.8
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 280,
      "turnRate": 1,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "fire"
    }
  },
  "npc_dota_hero_oracle": {
    "id": 111,
    "name": "npc_dota_hero_oracle",
    "team": 0,
    "alias": [
      "ora"
    ],
    "roles": {
      "carry": 0,
      "support": 3,
      "nuker": 3,
      "disabler": 2,
      "jungler": 0,
      "durable": 0,
      "escape": 1,
      "pusher": 0,
      "initiator": 0,
      "complexity": 3
    },
    "abilities": [
      "oracle_fortunes_end",
      "oracle_fates_edict",
      "oracle_purifying_flames",
      "oracle_false_promise"
    ],
    "talents": [
      "special_bonus_unique_oracle_2",
      "special_bonus_exp_boost_25",
      "special_bonus_cast_range_150",
      "special_bonus_gold_income_20",
      "special_bonus_movement_speed_65",
      "special_bonus_unique_oracle_4",
      "special_bonus_unique_oracle_3",
      "special_bonus_unique_oracle"
    ],
    "armor": {
      "armorPhysical": 0,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 18,
        "max": 24
      },
      "rate": 1.4,
      "range": 620,
      "animationPoint": 0.3,
      "acquisitionRange": 800,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 2,
      "strength": {
        "base": 20,
        "gain": 2.2
      },
      "agility": {
        "base": 15,
        "gain": 1.7
      },
      "intelligence": {
        "base": 21,
        "gain": 3.5
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 305,
      "turnRate": 0.7,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": true,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": false,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default"
    }
  },
  "npc_dota_hero_techies": {
    "id": 105,
    "name": "npc_dota_hero_techies",
    "team": 0,
    "alias": [],
    "roles": {
      "carry": 0,
      "support": 0,
      "nuker": 3,
      "disabler": 1,
      "jungler": 0,
      "durable": 0,
      "escape": 0,
      "pusher": 0,
      "initiator": 0,
      "complexity": 2
    },
    "abilities": [
      "techies_land_mines",
      "techies_stasis_trap",
      "techies_suicide",
      "techies_focused_detonate",
      "techies_minefield_sign",
      "techies_remote_mines"
    ],
    "talents": [
      "special_bonus_exp_boost_30",
      "special_bonus_unique_techies_3",
      "special_bonus_unique_techies",
      "special_bonus_mp_regen_4",
      "special_bonus_movement_speed_60",
      "special_bonus_gold_income_25",
      "special_bonus_attack_damage_251",
      "special_bonus_unique_techies_4"
    ],
    "armor": {
      "armorPhysical": 5,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 9,
        "max": 11
      },
      "rate": 1.7,
      "range": 700,
      "animationPoint": 0.5,
      "acquisitionRange": 800,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 2,
      "strength": {
        "base": 19,
        "gain": 2.3
      },
      "agility": {
        "base": 14,
        "gain": 1.3
      },
      "intelligence": {
        "base": 20,
        "gain": 2.9
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 270,
      "turnRate": 0.5,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": false,
      "Legs": 6,
      "AbilityDraftDisabled": true,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default"
    }
  },
  "npc_dota_hero_winter_wyvern": {
    "id": 112,
    "name": "npc_dota_hero_winter_wyvern",
    "team": 1,
    "alias": [],
    "roles": {
      "carry": 0,
      "support": 3,
      "nuker": 1,
      "disabler": 2,
      "jungler": 0,
      "durable": 0,
      "escape": 0,
      "pusher": 0,
      "initiator": 0,
      "complexity": 2
    },
    "abilities": [
      "winter_wyvern_arctic_burn",
      "winter_wyvern_splinter_blast",
      "winter_wyvern_cold_embrace",
      "winter_wyvern_winters_curse"
    ],
    "talents": [
      "special_bonus_gold_income_15",
      "special_bonus_attack_damage_60",
      "special_bonus_hp_350",
      "special_bonus_night_vision_500",
      "special_bonus_unique_winter_wyvern_1",
      "special_bonus_unique_winter_wyvern_2",
      "special_bonus_unique_winter_wyvern_3",
      "special_bonus_unique_winter_wyvern_4"
    ],
    "armor": {
      "armorPhysical": -1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 12,
        "max": 19
      },
      "rate": 1.7,
      "range": 425,
      "animationPoint": 0.25,
      "acquisitionRange": 800,
      "projectileSpeed": 700
    },
    "attributes": {
      "primary": 2,
      "strength": {
        "base": 26,
        "gain": 2.4
      },
      "agility": {
        "base": 16,
        "gain": 1.9
      },
      "intelligence": {
        "base": 26,
        "gain": 3.1
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 285,
      "turnRate": 0.5,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "ice"
    }
  },
  "npc_dota_hero_arc_warden": {
    "id": 113,
    "name": "npc_dota_hero_arc_warden",
    "team": 1,
    "alias": [
      "zet"
    ],
    "roles": {
      "carry": 3,
      "support": 0,
      "nuker": 1,
      "disabler": 0,
      "jungler": 0,
      "durable": 0,
      "escape": 3,
      "pusher": 0,
      "initiator": 0,
      "complexity": 3
    },
    "abilities": [
      "arc_warden_flux",
      "arc_warden_magnetic_field",
      "arc_warden_spark_wraith",
      "arc_warden_tempest_double"
    ],
    "talents": [
      "special_bonus_cooldown_reduction_8",
      "special_bonus_attack_speed_25",
      "special_bonus_hp_350",
      "special_bonus_unique_arc_warden_5",
      "special_bonus_unique_arc_warden_3",
      "special_bonus_attack_range_125",
      "special_bonus_lifesteal_30",
      "special_bonus_unique_arc_warden"
    ],
    "armor": {
      "armorPhysical": -2,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 31,
        "max": 41
      },
      "rate": 1.7,
      "range": 625,
      "animationPoint": 0.3,
      "acquisitionRange": 800,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 1,
      "strength": {
        "base": 25,
        "gain": 3
      },
      "agility": {
        "base": 15,
        "gain": 1.8
      },
      "intelligence": {
        "base": 24,
        "gain": 2.6
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 280,
      "turnRate": 0.6,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.75,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": false,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "ethereal",
      "gibTintColor": "#6cd1d2",
      "glowColor": "#784094"
    }
  },
  "npc_dota_hero_abyssal_underlord": {
    "id": 108,
    "name": "npc_dota_hero_abyssal_underlord",
    "team": 1,
    "alias": [
      "PitLord",
      "Azgalor"
    ],
    "roles": {
      "carry": 0,
      "support": 1,
      "nuker": 1,
      "disabler": 1,
      "jungler": 0,
      "durable": 1,
      "escape": 2,
      "pusher": 0,
      "initiator": 0,
      "complexity": 2
    },
    "abilities": [
      "abyssal_underlord_firestorm",
      "abyssal_underlord_pit_of_malice",
      "abyssal_underlord_atrophy_aura",
      "abyssal_underlord_dark_rift",
      "abyssal_underlord_cancel_dark_rift"
    ],
    "talents": [
      "special_bonus_unique_underlord_2",
      "special_bonus_movement_speed_30",
      "special_bonus_cast_range_100",
      "special_bonus_unique_underlord_3",
      "special_bonus_attack_speed_70",
      "special_bonus_hp_regen_20",
      "special_bonus_unique_underlord",
      "special_bonus_unique_underlord_4"
    ],
    "armor": {
      "armorPhysical": 1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 37,
        "max": 43
      },
      "rate": 1.7,
      "range": 150,
      "animationPoint": 0.45,
      "acquisitionRange": 600,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 0,
      "strength": {
        "base": 25,
        "gain": 2.9
      },
      "agility": {
        "base": 12,
        "gain": 1.3
      },
      "intelligence": {
        "base": 17,
        "gain": 2.6
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 285,
      "turnRate": 0.6,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default"
    }
  },
  "npc_dota_hero_monkey_king": {
    "id": 114,
    "name": "npc_dota_hero_monkey_king",
    "team": 0,
    "alias": [
      "mk"
    ],
    "roles": {
      "carry": 2,
      "support": 0,
      "nuker": 0,
      "disabler": 1,
      "jungler": 0,
      "durable": 0,
      "escape": 2,
      "pusher": 0,
      "initiator": 1,
      "complexity": 2
    },
    "abilities": [
      "monkey_king_boundless_strike",
      "monkey_king_tree_dance",
      "monkey_king_primal_spring",
      "monkey_king_jingu_mastery",
      "monkey_king_mischief",
      "monkey_king_wukongs_command",
      "monkey_king_primal_spring_early",
      "monkey_king_untransform"
    ],
    "talents": [
      "special_bonus_unique_monkey_king_5",
      "special_bonus_attack_speed_20",
      "special_bonus_unique_monkey_king_7",
      "special_bonus_unique_monkey_king_2",
      "special_bonus_unique_monkey_king",
      "special_bonus_unique_monkey_king_3",
      "special_bonus_unique_monkey_king_4",
      "special_bonus_unique_monkey_king_6"
    ],
    "armor": {
      "armorPhysical": -3,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 29,
        "max": 35
      },
      "rate": 1.7,
      "range": 300,
      "animationPoint": 0.45,
      "acquisitionRange": 600,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 1,
      "strength": {
        "base": 19,
        "gain": 2.8
      },
      "agility": {
        "base": 22,
        "gain": 3.2
      },
      "intelligence": {
        "base": 20,
        "gain": 1.8
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 300,
      "turnRate": 0.6,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 3,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": true,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default"
    }
  },
  "npc_dota_hero_pangolier": {
    "id": 120,
    "name": "npc_dota_hero_pangolier",
    "team": 0,
    "alias": [
      "ar"
    ],
    "roles": {
      "carry": 2,
      "support": 0,
      "nuker": 2,
      "disabler": 1,
      "jungler": 0,
      "durable": 1,
      "escape": 2,
      "pusher": 0,
      "initiator": 2,
      "complexity": 2
    },
    "abilities": [
      "pangolier_swashbuckle",
      "pangolier_shield_crash",
      "pangolier_heartpiercer",
      "pangolier_gyroshell",
      "pangolier_gyroshell_stop"
    ],
    "talents": [
      "special_bonus_mp_regen_150",
      "special_bonus_movement_speed_25",
      "special_bonus_unique_pangolier_2",
      "special_bonus_unique_pangolier_6",
      "special_bonus_unique_pangolier_3",
      "special_bonus_strength_20",
      "special_bonus_unique_pangolier_4",
      "special_bonus_unique_pangolier_5"
    ],
    "armor": {
      "armorPhysical": 1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 0,
      "damage": {
        "type": 0,
        "min": 29,
        "max": 35
      },
      "rate": 1.7,
      "range": 150,
      "animationPoint": 0.33,
      "acquisitionRange": 600,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 1,
      "strength": {
        "base": 17,
        "gain": 2.5
      },
      "agility": {
        "base": 18,
        "gain": 2.8
      },
      "intelligence": {
        "base": 16,
        "gain": 1.9
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 305,
      "turnRate": 1,
      "hasAggressiveStance": true
    },
    "status": {
      "health": 200,
      "healthRegen": 1.75,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default",
      "glowColor": "#5e314c"
    }
  },
  "npc_dota_hero_dark_willow": {
    "id": 119,
    "name": "npc_dota_hero_dark_willow",
    "team": 0,
    "alias": [],
    "roles": {
      "carry": 0,
      "support": 2,
      "nuker": 2,
      "disabler": 1,
      "jungler": 0,
      "durable": 0,
      "escape": 2,
      "pusher": 0,
      "initiator": 0,
      "complexity": 2
    },
    "abilities": [
      "dark_willow_bramble_maze",
      "dark_willow_shadow_realm",
      "dark_willow_cursed_crown",
      "dark_willow_bedlam",
      "dark_willow_terrorize"
    ],
    "talents": [
      "special_bonus_attack_damage_30",
      "special_bonus_cast_range_125",
      "special_bonus_gold_income_15",
      "special_bonus_movement_speed_35",
      "special_bonus_spell_lifesteal_10",
      "special_bonus_unique_dark_willow_1",
      "special_bonus_attack_speed_200",
      "special_bonus_unique_dark_willow_2"
    ],
    "armor": {
      "armorPhysical": -1,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 27,
        "max": 35
      },
      "rate": 1.3,
      "range": 475,
      "animationPoint": 0.3,
      "acquisitionRange": 800,
      "projectileSpeed": 1200
    },
    "attributes": {
      "primary": 2,
      "strength": {
        "base": 20,
        "gain": 1.8
      },
      "agility": {
        "base": 18,
        "gain": 1.6
      },
      "intelligence": {
        "base": 18,
        "gain": 3
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 295,
      "turnRate": 0.7,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": true,
      "CMTournamentIgnore": false,
      "new_player_enable": true,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default",
      "glowColor": "#75f0ff"
    }
  },
  "npc_dota_hero_grimstroke": {
    "id": 121,
    "name": "npc_dota_hero_grimstroke",
    "team": 1,
    "alias": [
      "gs"
    ],
    "roles": {
      "carry": 0,
      "support": 1,
      "nuker": 2,
      "disabler": 2,
      "jungler": 0,
      "durable": 0,
      "escape": 1,
      "pusher": 0,
      "initiator": 0,
      "complexity": 2
    },
    "abilities": [
      "grimstroke_dark_artistry",
      "grimstroke_ink_creature",
      "grimstroke_spirit_walk",
      "grimstroke_soul_chain"
    ],
    "talents": [
      "special_bonus_movement_speed_30",
      "special_bonus_gold_income_15",
      "special_bonus_spell_amplify_12",
      "special_bonus_cast_range_125",
      "special_bonus_unique_grimstroke_3",
      "special_bonus_unique_grimstroke_4",
      "special_bonus_unique_grimstroke_1",
      "special_bonus_unique_grimstroke_2"
    ],
    "armor": {
      "armorPhysical": 0,
      "magicalResistance": 25
    },
    "attack": {
      "capability": 1,
      "damage": {
        "type": 0,
        "min": 27,
        "max": 31
      },
      "rate": 1.7,
      "range": 550,
      "animationPoint": 0.35,
      "acquisitionRange": 800,
      "projectileSpeed": 900
    },
    "attributes": {
      "primary": 2,
      "strength": {
        "base": 21,
        "gain": 2.2
      },
      "agility": {
        "base": 18,
        "gain": 1.9
      },
      "intelligence": {
        "base": 23,
        "gain": 3.3
      }
    },
    "movement": {
      "capabilities": 1,
      "speed": 295,
      "turnRate": 0.6,
      "hasAggressiveStance": false
    },
    "status": {
      "health": 200,
      "healthRegen": 1.5,
      "mana": 75,
      "manaRegen": 0.9
    },
    "vision": {
      "day": 1800,
      "night": 800
    },
    "gameMode": {
      "BotImplemented": false,
      "CMEnabled": false,
      "CMTournamentIgnore": false,
      "new_player_enable": false,
      "Legs": 2,
      "AbilityDraftDisabled": false,
      "ARDMDisabled": false
    },
    "others": {
      "gibType": "default",
      "glowColor": "#f2c8c6"
    }
  }
}