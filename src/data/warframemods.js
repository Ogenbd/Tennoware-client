const warframeMods = [
    {
        abrev: 'a4',
        name: 'Agility Drift',
        img: require('../assets/modimages/agility-drift.jpg'),
        type: 'EXILUS',
        exilus: true,
        rarity: 'rare',
        polarity: 'vazarin',
        effects: { airDamage: 0.02, none: 0.01 },
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        description() { return `Reduces damage by ${Math.round(this.effects.airDamage * (this.currRank + 1) * 100)}% when airborne. +${Math.round(this.effects.none * (this.currRank + 1) * 100)}% Evasion` }
    },
    {
        abrev: '',
        name: 'Air Thrusters',
        img: require('../assets/modimages/air-thrusters.jpg'),
        type: 'EXILUS',
        exilus: true,
        conclave: true,
        conclaveOnly: true,
        rarity: 'uncommon',
        polarity: 'naramon',
        effects: { none: [0.25, -0.05] },
        maxRank: 3,
        currRank: 3,
        baseCost: 2,
        description() { return `+${Math.round(this.effects.none[0] * (this.currRank + 1) * 100)}% Slide Boost when Airborne. ${Math.round(this.effects.none[1] * (this.currRank + 1) * 100)}% Mobilty` }
    },
    {
        abrev: 'a7',
        name: 'Armored Agility',
        img: require('../assets/modimages/armored-agility.jpg'),
        type: 'WARFRAME',
        rarity: 'rare',
        polarity: 'vazarin',
        effects: { speed: 0.025, armor: 0.075 },
        maxRank: 5,
        currRank: 5,
        baseCost: 6,
        description() { return `+${Math.round(this.effects.speed * (this.currRank + 1) * 1000) / 10}% Sprint Speed +${Math.round(this.effects.armor * (this.currRank + 1) * 1000) / 10}% Armor` }
    },
    {
        abrev: 'b3',
        name: 'Aviator',
        img: require('../assets/modimages/aviator.jpg'),
        type: 'EXILUS',
        exilus: true,
        rarity: 'common',
        polarity: 'vazarin',
        effects: { airDamage: 0.1 },
        maxRank: 3,
        currRank: 3,
        baseCost: 4,
        description() { return `Reduces damage by ${Math.round(this.effects.airDamage * (this.currRank + 1) * 100)}% when airborne` }
    },
    {
        abrev: 'b8',
        name: 'Brief Respite',
        img: require('../assets/modimages/brief-respite.jpg'),
        type: 'AURA',
        aura: true,
        rarity: 'uncommon',
        polarity: 'zenurik',
        effects: { none: 0.25 },
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `Casting an ability grants shields equal to +${Math.round(this.effects.none * (this.currRank + 1) * 100)}% of the energy spent, while Overshields are inactive` }
    },
    {
        abrev: '',
        name: 'Continuity',
        img: require('../assets/modimages/continuity.jpg'),
        type: 'WARFRAME',
        rarity: 'rare',
        polarity: 'madurai',
        effects: { duration: 0.05 },
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.duration * (this.currRank + 1) * 100)}% Ability Duration` }
    },
    {
        abrev: '',
        name: 'Flow',
        img: require('../assets/modimages/flow.jpg'),
        type: 'WARFRAME',
        rarity: 'rare',
        polarity: 'naramon',
        effects: { energy: 0.25 },
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.energy * (this.currRank + 1) * 100)}% Energy Max` }
    },
    {
        abrev: '',
        name: 'Intensify',
        img: require('../assets/modimages/intensify.jpg'),
        type: 'WARFRAME',
        rarity: 'rare',
        polarity: 'madurai',
        effects: { strength: 0.05 },
        maxRank: 5,
        currRank: 5,
        baseCost: 6,
        description() { return `+${Math.round(this.effects.strength * (this.currRank + 1) * 100)}% Ability Strength` }
    },
    {
        abrev: '',
        name: 'Overextended',
        img: require('../assets/modimages/overextended.jpg'),
        type: 'WARFRAME',
        rarity: 'rare',
        polarity: 'vazarin',
        effects: { range: 0.15, strength: -0.1 },
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `+${Math.round(this.effects.range * (this.currRank + 1) * 100)}% Ability Range ${Math.round(this.effects.strength * (this.currRank + 1) * 100)}% Ability Strength` }
    },
    {
        abrev: '',
        name: 'Physique',
        img: require('../assets/modimages/physique.jpg'),
        type: 'WARFRAME',
        aura: true,
        rarity: 'uncommon',
        polarity: 'vazarin',
        effects: { health: 0.03 },
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `Maximum health increased. +${Math.round(this.effects.health * (this.currRank + 1) * 100)}% Health` }
    },
    {
        abrev: '',
        name: 'Redirection',
        img: require('../assets/modimages/redirection.jpg'),
        type: 'WARFRAME',
        rarity: 'common',
        polarity: 'vazarin',
        effects: { shields: 0.4 },
        maxRank: 10,
        currRank: 10,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.shields * (this.currRank + 1) * 100)}% Shield Capacity` }
    },
    {
        abrev: '',
        name: 'Seeking Shuriken',
        img: require('../assets/modimages/seeking-shuriken.jpg'),
        type: 'ASH',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [0.35, 0.45, 0.55, 0.7, 2] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 0,
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 500,
                            icon: require('../assets/Slash.png')
                        },
                        {
                            name: 'Armor reduction',
                            suffix: '%',
                            base({ augEffects, augRank }) { return Math.round(augEffects.none[augRank] * 1000) / 10 }
                        }
                    ],
                    duration: [
                        {
                            name: 'Armor reduction duration',
                            suffix: 's',
                            base({ augEffects, augRank }) { return augEffects.none[4] * (augRank + 1) }
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                    none: [
                        {
                            name: 'Shurikens',
                            base: 2
                        }
                    ]
                }
            ]
        },
        description() { return `Shuriken Augment: Hits expose weaknesses on enemies, reducing their armor by ${Math.round(this.effects.none[this.currRank] * 100)}% for ${this.effects.none[4] * (this.currRank + 1)} seconds` }
    },
    {
        abrev: '',
        name: 'Steel Fiber',
        img: require('../assets/modimages/steel-fiber.jpg'),
        type: 'WARFRAME',
        rarity: 'common',
        polarity: 'vazarin',
        effects: { armor: 0.1 },
        maxRank: 10,
        currRank: 10,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.armor * (this.currRank + 1) * 100)}% Armor` }
    },
    {
        abrev: '',
        name: 'Streamline',
        img: require('../assets/modimages/streamline.jpg'),
        type: 'WARFRAME',
        rarity: 'rare',
        polarity: 'naramon',
        effects: { efficiency: 0.05 },
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.efficiency * (this.currRank + 1) * 100)}% Ability Efficiency` }
    },
    {
        abrev: '',
        name: 'Stretch',
        img: require('../assets/modimages/stretch.jpg'),
        type: 'WARFRAME',
        rarity: 'uncommon',
        polarity: 'naramon',
        effects: { range: 0.075 },
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.range * (this.currRank + 1) * 1000) / 10}% Ability Range` }
    },
    {
        abrev: '',
        name: 'Transient Fortitude',
        img: require('../assets/modimages/transient-fortitude.jpg'),
        type: 'WARFRAME',
        rarity: 'rare',
        polarity: 'madurai',
        effects: { strength: 0.05, duration: -0.025 },
        maxRank: 10,
        currRank: 10,
        baseCost: 6,
        description() { return `+${Math.round(this.effects.strength * (this.currRank + 1) * 100)}% Ability Strength ${Math.round(this.effects.duration * (this.currRank + 1) * 1000) / 10}% Ability Duration` }
    },
    {
        abrev: '',
        name: 'Vitality',
        img: require('../assets/modimages/vitality.jpg'),
        type: 'WARFRAME',
        rarity: 'common',
        polarity: 'vazarin',
        effects: { health: 0.4 },
        maxRank: 10,
        currRank: 10,
        baseCost: 2,
        description() { return `+${Math.round(this.effects.health * (this.currRank + 1) * 100)}% Health` }
    },
]

export default warframeMods;