const archwingMods = [
    {
        abrev: 'a0',
        name: 'Afterburner',
        img: require('../assets/modimages/afterburner.jpg'),
        type: 'ELYTRON',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [[6, 8, 10, 12], [200, 300, 400, 500]] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 1,
            details: [
                {
                    strength: [
                        {
                            name: 'Flame damage',
                            base(augEffects, augRank) { return augEffects.none[1][augRank] }
                        }
                    ],
                    duration: [
                        {
                            name: 'Contrail duration',
                            suffix: 's',
                            base: 16
                        },
                        {
                            name: 'Flame duration',
                            suffix: 's',
                            base(augEffects, augRank) { return augEffects.none[0][augRank] }
                        },
                        {
                            name: 'Vent duration',
                            suffix: 's',
                            base: 9
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        },
                    ],
                }
            ]
        },
        description() { return `Core Vent Augment: Blast Damage ignites exhaust fumes for ${this.effects.none[0][this.currRank]}s. Enemies passing through the flames take ${this.effects.none[0][this.currRank]} Heat Damage.` }
    },
    {
        abrev: 'a1',
        name: 'Argon Plating',
        img: require('../assets/modimages/argon-plating.jpg'),
        type: 'ARCHWING',
        rarity: 'common',
        polarity: 'vazarin',
        effects: { armor: 0.15 },
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.armor * (this.currRank + 1) * 100)}% Armor` }
    },
    {
        abrev: 'a2',
        name: 'Auxiliary Power',
        img: require('../assets/modimages/auxiliary-power.jpg'),
        type: 'ARCHWING',
        rarity: 'uncommon',
        polarity: 'madurai',
        effects: { energy: 0.15 },
        maxRank: 5,
        currRank: 5,
        baseCost: 6,
        description() { return `+${Math.round(this.effects.energy * (this.currRank + 1) * 100)}% Energy Max` }
    },
    {
        abrev: 'a3',
        name: 'Cold Snap',
        img: require('../assets/modimages/cold-snap.jpg'),
        type: 'ITZAL',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [2, 3, 4, 5] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 2,
            details: [
                {
                    strength: [
                        {
                            name: 'Explosion damage',
                            base: 1500,
                            icon: require('../assets/general/Blast.png')
                        },
                    ],
                    duration: [
                        {
                            name: 'Freeze duration',
                            suffix: 's',
                            base(augEffects, augRank) { return augEffects.none[augRank] }
                        }
                    ],
                    range: [
                        {
                            name: 'Radius in archwing',
                            suffix: 'm',
                            base: 140
                        },
                        {
                            name: 'Radius in landscape',
                            suffix: 'm',
                            base: 14
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 75
                        },
                    ],
                }
            ]
        },
        description() { return `Cosmic Crush Augment: The black hole saps the area of heat, freezing enemies in range. Enemies near the black hole are completely frozen for ${this.effects.none[this.currRank]}s.` }
    },
    {
        abrev: 'a4',
        name: 'Efficient Transferral',
        img: require('../assets/modimages/efficient-transferral.jpg'),
        type: 'ARCHWING',
        rarity: 'rare',
        polarity: 'vazarin',
        effects: { duration: 0.075 },
        maxRank: 3,
        currRank: 3,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.duration * (this.currRank + 1) * 1000) / 10}% Ability Duration` }
    },
    {
        abrev: 'a5',
        name: 'Energy Amplifier',
        img: require('../assets/modimages/energy-amplifier.jpg'),
        type: 'ARCHWING',
        rarity: 'uncommon',
        polarity: 'naramon',
        effects: { range: 0.1 },
        maxRank: 5,
        currRank: 5,
        baseCost: 6,
        description() { return `+${Math.round(this.effects.range * (this.currRank + 1) * 100)}% Ability Range` }
    },
    {
        abrev: 'a6',
        name: 'Energy Field',
        img: require('../assets/modimages/energy-field.jpg'),
        type: 'ODONATA',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [80, 100, 120, 140] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 0,
            details: [
                {
                    none: [
                        {
                            name: 'Heat damage bonus',
                            suffix: '%',
                            base: 50,
                            icon: require('../assets/general/Heat.png')
                        },
                        {
                            name: 'Critical damage multiplier',
                            suffix: 'x',
                            base: 2,
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 22
                        },
                    ],
                    range: [
                        {
                            name: 'Radius in archwing',
                            suffix: 'm',
                            base(augEffects, augRank) { return augEffects.none[augRank] }
                        },
                        {
                            name: 'Radius in landscape',
                            suffix: 'm',
                            base(augEffects, augRank) { return augEffects.none[augRank] / 10 }
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        },
                    ],
                }
            ]
        },
        description() { return `Energy Shell Augment: Energy Shell applies to allies within ${this.effects.none[this.currRank]}m.` }
    },
    {
        abrev: 'a7',
        name: 'Energy Inversion',
        img: require('../assets/modimages/energy-inversion.jpg'),
        type: 'ARCHWING',
        rarity: 'common',
        polarity: 'vazarin',
        effects: { shields: 0.3 },
        maxRank: 3,
        currRank: 3,
        baseCost: 2,
        description() { return `+${Math.round(this.effects.shields * (this.currRank + 1) * 100)}% Shield Capacity` }
    },
    {
        abrev: 'a8',
        name: 'Enhanced Durability',
        img: require('../assets/modimages/enhanced-durability.jpg'),
        type: 'ARCHWING',
        rarity: 'uncommon',
        polarity: 'vazarin',
        effects: { health: 0.25 },
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.health * (this.currRank + 1) * 100)}% Health` }
    },
    {
        abrev: 'a9',
        name: 'Hyperion Thrusters',
        img: require('../assets/modimages/hyperion-thrusters.jpg'),
        type: 'ARCHWING',
        rarity: 'rare',
        polarity: 'naramon',
        effects: { speed: 0.025 },
        maxRank: 10,
        currRank: 10,
        baseCost: 10,
        description() { return `+${Math.round(this.effects.speed * (this.currRank + 1) * 1000) / 10}% Flight Speed` }
    },
    {
        abrev: 'b0',
        name: 'Kinetic Diversion',
        img: require('../assets/modimages/kinetic-diversion.jpg'),
        type: 'ARCHWING',
        rarity: 'rare',
        polarity: 'madurai',
        effects: {},
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Convert +${10 * (this.currRank + 1)}% of Damage on Health to Energy` }
    },
    {
        abrev: 'b1',
        name: 'Morphic Transformer',
        family: 'Morphic Transformer',
        img: require('../assets/modimages/morphic-transformer.jpg'),
        type: 'ARCHWING',
        rarity: 'rare',
        polarity: 'madurai',
        effects: { strength: 0.05 },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `+${Math.round(this.effects.strength * (this.currRank + 1) * 100)}% Ability Strength` }
    },
    {
        abrev: 'b2',
        name: 'Primed Morphic Transformer',
        family: 'Morphic Transformer',
        img: require('../assets/modimages/primed-morphic-transformer.jpg'),
        type: 'ARCHWING',
        rarity: 'prime',
        polarity: 'madurai',
        effects: { strength: 0.05 },
        maxRank: 10,
        currRank: 10,
        baseCost: 6,
        description() { return `+${Math.round(this.effects.strength * (this.currRank + 1) * 100)}% Ability Strength` }
    },
    {
        abrev: 'b3',
        name: 'Superior Defenses',
        img: require('../assets/modimages/superior-defenses.jpg'),
        type: 'ARCHWING',
        rarity: 'uncommon',
        polarity: 'vazarin',
        effects: {},
        maxRank: 3,
        currRank: 3,
        baseCost: 4,
        description() { return `+${25 * (this.currRank + 1)}% Shield Recharge` }
    },
    {
        abrev: 'b4',
        name: 'System Reroute',
        img: require('../assets/modimages/system-reroute.jpg'),
        type: 'ARCHWING',
        rarity: 'rare',
        polarity: 'naramon',
        effects: {efficiency: 0.05},
        maxRank: 10,
        currRank: 10,
        baseCost: 6,
        description() { return `+${Math.round(this.effects.efficiency * (this.currRank + 1) * 100)}% Ability Efficiency` }
    },
]

export default archwingMods;