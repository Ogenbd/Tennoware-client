// currently at abrev 0s
const warframeMods = [
    {
        abrev: 'a0',
        name: 'Abating Link',
        img: require('../assets/modimages/abating-link.jpg'),
        type: 'TRINITY',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [0.25, 0.3, 0.35, 0.45] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 2,
            details: [
                {
                    strength: [
                        {
                            name: 'Armor reduction',
                            suffix: '%',
                            base(augEffects, augRank) { return augEffects.none[augRank] * 100 }
                        }
                    ],
                    none: [
                        {
                            name: 'Damage reduction',
                            suffix: '%',
                            base: 75,
                        },
                        {
                            name: 'Links',
                            base: 3,
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 12
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 20
                        }
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
        description() { return `Link Augment: Reduces Armor Rating by ${Math.round(this.effects.none[this.currRank] * 100)}% on enemies targeted by Link` }
    },
    {
        abrev: 'a1',
        name: 'Accumulating Whipclaw',
        img: require('../assets/modimages/accumulating-whipclaw.jpg'),
        type: 'KHORA',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [0.1, 0.15, 0.2, 0.35] },
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
                            base: 300,
                        },
                        {
                            name: 'Damage bonus after hitting 3+ enemies',
                            suffix: '%',
                            base(augEffects, augRank) { return augEffects.none[augRank] * 100 }
                        },
                    ],
                    range: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 10
                        },
                        {
                            name: 'Explosion radius',
                            suffix: 'm',
                            base: 5
                        },
                    ],
                    none: [
                        {
                            name: 'Damage bonus decay delay',
                            suffix: 's',
                            base: 10
                        },
                        {
                            name: 'Damage bonus cap',
                            suffix: '%',
                            base: 350
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                }
            ]
        },
        description() { return `Whipclaw Augment: hitting 3 enemies will grant a ${Math.round(this.effects.none[this.currRank] * 100)}% stacking bonus to subsequent Whipclaws. Bonus will decay after 10s.` }
    },
    {
        abrev: 'a2',
        name: 'Adaptation',
        img: require('../assets/modimages/adaptation.jpg'),
        type: 'WARFRAME',
        rarity: 'rare',
        polarity: 'vazarin',
        effects: { none: [0.005, 1] },
        maxRank: 10,
        currRank: 10,
        baseCost: 2,
        description() { return `When Damaged: +${Math.round((0.05 + this.effects.none[0] * (this.currRank)) * 1000) / 10}% Resistance to that Damage Type for ${Math.round(10 + this.effects.none[1] * (this.currRank))}s. Stacks up to 90%` }
    },
    {
        abrev: 'a3',
        name: 'Adept Surge',
        img: require('../assets/modimages/adept-surge.jpg'),
        type: 'EXILUS',
        exilus: true,
        conclave: true,
        conclaveOnly: true,
        rarity: 'uncommon',
        polarity: 'naramon',
        effects: { none: [0.025, -25 / 4] },
        maxRank: 3,
        currRank: 3,
        baseCost: 2,
        description() { return `+${Math.round(this.effects.none[0] * (this.currRank + 1) * 1000) / 10}% Mobility. ${Math.round(this.effects.none[1] * (this.currRank + 1))} Health` }
    },
    {
        abrev: 'a4',
        name: 'Adrenaline Boost',
        img: require('../assets/modimages/adrenaline-boost.jpg'),
        type: 'WARFRAME',
        conclave: true,
        conclaveOnly: true,
        rarity: 'rare',
        polarity: 'madurai',
        effects: { energy: 0.0625, health: -0.05 },
        maxRank: 3,
        currRank: 3,
        baseCost: 10,
        description() { return `Increases Energy by +${Math.round(this.effects.energy * (this.currRank + 1) * 1000) / 10}% but reduces Health by ${Math.round(this.effects.health * (this.currRank + 1) * 100)}%` }
    },
    {
        abrev: 'a5',
        name: 'Afterburn',
        img: require('../assets/modimages/afterburn.jpg'),
        type: 'CHROMA',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [25, 100] },
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
                            base: 200
                        },
                        {
                            name: 'Afterburn incremental damage',
                            base(augEffects, augRank) { return augEffects.none[0] * (augRank + 1) }
                        },
                        {
                            name: 'Afterburn maximum damage',
                            base(augEffects, augRank) { return 100 + augEffects.none[1] * (augRank + 1) }
                        },
                    ],
                    none: [
                        {
                            name: 'Status chance',
                            suffix: '%',
                            base: 60
                        }
                    ],
                    range: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 10
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 10
                        }
                    ],
                    channel: [
                        {
                            name: 'Energy drain/s',
                            base: 3
                        }
                    ],
                }
            ]
        },
        description() { return `Spectral Scream Augment: On deactivation, a projectile is launched dealing ${Math.round(this.effects.none[0] * (this.currRank + 1))} damage per second the ability was active, to a max of ${100 + this.effects.none[1] * (this.currRank + 1)} damage` }
    },
    {
        abrev: 'a6',
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
        abrev: 'a7',
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
        abrev: 'a8',
        name: 'Anti-Flak Plating',
        img: require('../assets/modimages/anti-flak-plating.jpg'),
        conclave: true,
        conclaveOnly: true,
        type: 'WARFRAME',
        rarity: 'uncommon',
        polarity: 'vazarin',
        effects: { none: [0.05, 0.025] },
        maxRank: 3,
        currRank: 3,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.none[0] * (this.currRank + 1) * 100)} Blast Resistance, ${Math.round(this.effects.none[1] * (this.currRank + 1) * 1000) / 10} Mobility` }
    },
    {
        abrev: 'a9',
        name: 'Anticipation',
        img: require('../assets/modimages/anticipation.jpg'),
        conclave: true,
        conclaveOnly: true,
        type: 'WARFRAME',
        rarity: 'uncommon',
        polarity: 'vazarin',
        effects: { none: 1 },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Immune to Knockdown for an additional +${this.effects.none * (this.currRank + 1)} after being Knocked Down.,Immune to Stagger for an additional ${this.effects.none * (this.currRank + 1)} after being Staggered.` }
    },
    {
        abrev: 'b0',
        name: 'Antimatter Absorb',
        img: require('../assets/modimages/antimatter-absorb.jpg'),
        type: 'NOVA',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [1, 1.5, 2, 3] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 1,
            details: [
                {
                    strength: [
                        {
                            name: 'Base damage',
                            base: 200,
                            icon: require('../assets/dynamic/damage/Radiation.png')
                        },
                    ],
                    none: [
                        {
                            name: 'Explosion range',
                            suffix: 'm',
                            base: 15
                        }
                    ],
                    range: [
                        {
                            name: 'Absorb range',
                            suffix: 'm',
                            base(augEffects, augRank) { return augEffects.none[augRank] }
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        }
                    ],
                }
            ],
        },
        description() { return `Antimatter Drop Augment: Absorbs enemy bullets within ${this.effects.none[this.currRank]} meters, increasing its damage when it explodes.` }
    },
    {
        abrev: 'b1',
        name: 'Antimatter Mine',
        img: require('../assets/modimages/antimatter-mine.jpg'),
        conclave: true,
        conclaveOnly: true,
        type: 'NOVA',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: 2 },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Antimatter Drop Augment: Creates a fully charged stationary orb that explodes after ${12 - this.effects.none * this.currRank} or within enemy proximity.` }
    },
    {
        abrev: 'b2',
        name: 'Antitoxin',
        img: require('../assets/modimages/antitoxin.jpg'),
        type: 'WARFRAME',
        rarity: 'uncommon',
        polarity: 'vazarin',
        effects: { none: 0.075 },
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.none * (this.currRank + 1) * 1000) / 10}% Toxin Resistance` }
    },
    {
        abrev: 'b3',
        name: 'Armored Acrobatics',
        img: require('../assets/modimages/armored-acrobatics.jpg'),
        conclave: true,
        conclaveOnly: true,
        type: 'EXILUS',
        exilus: true,
        rarity: 'uncommon',
        polarity: 'vazarin',
        effects: { none: [0.05, -0.025] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `+${Math.round(this.effects.none[0] * (this.currRank + 1) * 100)}% Damage Resistance during Bullet Jump,${Math.round(this.effects.none[1] * (this.currRank + 1) * 1000) / 10} Mobility` }
    },
    {
        abrev: 'b4',
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
        abrev: 'b5',
        name: 'Armored Evade',
        img: require('../assets/modimages/armored-evade.jpg'),
        conclave: true,
        conclaveOnly: true,
        type: 'WARFRAME',
        rarity: 'uncommon',
        polarity: 'vazarin',
        effects: { none: [0.1, -0.025] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `+${Math.round(this.effects.none[0] * (this.currRank + 1) * 100)}% Damage Resistance while Dodging,${Math.round(this.effects.none[1] * (this.currRank + 1) * 1000) / 10}% Mobility` }
    },
    {
        abrev: 'b6',
        name: 'Armored Recovery',
        img: require('../assets/modimages/armored-recovery.jpg'),
        conclave: true,
        conclaveOnly: true,
        type: 'WARFRAME',
        rarity: 'uncommon',
        polarity: 'vazarin',
        effects: { none: [0.125, -0.05] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `+${Math.round(this.effects.none[0] * (this.currRank + 1) * 1000) / 10}% Damage Resistance when Knocked Down,${Math.round(this.effects.none[1] * (this.currRank + 1) * 100)}% Slide` }
    },
    {
        abrev: 'b7',
        name: 'Assimilate',
        img: require('../assets/modimages/assimilate.jpg'),
        type: 'NYX',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [30, 40, 45, 50] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 3,
            details: [
                {
                    strength: [
                        {
                            name: 'Passive damage gain',
                            base: 200,
                        },
                        {
                            name: 'Minimum damage',
                            base: 1500,
                            icon: require('../assets/dynamic/damage/Magnetic.png')
                        },
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 5
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                    chennel: [
                        {
                            name: 'Energy drain/s',
                            base: 4
                        }
                    ]
                }
            ]
        },
        description() { return `Absorb Augment: Nyx can move at ${this.effects.none[this.currRank]}% Speed while using Absorb, but the area is reduced by half.` }
    },
    {
        abrev: 'b8',
        name: 'Augur Accord',
        img: require('../assets/modimages/augur-accord.jpg'),
        type: 'WARFRAME',
        rarity: 'uncommon',
        polarity: 'vazarin',
        effects: { shields: 0.3 },
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        set: { setName: 'augur', setMax: 6, setCurr: 1 },
        description() { return [`+${Math.round(this.effects.shields * (this.currRank + 1) * 100)}% Shield Capacity`, `${40 * this.set.setCurr}% Energy spent on abilities is converted to shields.`] }
    },
    {
        abrev: 'b9',
        name: 'Augur Message',
        img: require('../assets/modimages/augur-message.jpg'),
        type: 'WARFRAME',
        rarity: 'common',
        polarity: 'naramon',
        effects: { duration: 0.04 },
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        set: { setName: 'augur', setMax: 6, setCurr: 1 },
        description() { return [`+${Math.round(this.effects.duration * (this.currRank + 1) * 100)}% Ability Duration`, `${40 * this.set.setCurr}% Energy spent on abilities is converted to shields.`] }
    },
    {
        abrev: 'c0',
        name: 'Augur Reach',
        img: require('../assets/modimages/augur-reach.jpg'),
        type: 'WARFRAME',
        rarity: 'uncommon',
        polarity: 'naramon',
        effects: { range: 0.05 },
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        set: { setName: 'augur', setMax: 6, setCurr: 1 },
        description() { return [`+${Math.round(this.effects.range * (this.currRank + 1) * 100)}% Ability Range`, `${40 * this.set.setCurr}% Energy spent on abilities is converted to shields.`] }
    },
    {
        abrev: 'c1',
        name: 'Augur Secrets',
        img: require('../assets/modimages/augur-secrets.jpg'),
        type: 'WARFRAME',
        rarity: 'rare',
        polarity: 'naramon',
        effects: { strength: 0.04 },
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        set: { setName: 'augur', setMax: 6, setCurr: 1 },
        description() { return [`+${Math.round(this.effects.strength * (this.currRank + 1) * 100)}% Ability Strength`, `${40 * this.set.setCurr}% Energy spent on abilities is converted to shields.`] }
    },
    {
        abrev: 'c2',
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
        abrev: 'c3',
        name: 'Ballistic Bullseye',
        img: require('../assets/modimages/ballistic-bullseye.jpg'),
        type: 'MESA',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: 0.25 },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Ballistic Battery Augment: Applies a ${Math.round(this.effects.none * (this.currRank + 1) * 100)}% Status Chance bonus to the shot, based on the amount charged.` }
    },
    {
        abrev: 'c4',
        name: 'Battering Maneuver',
        img: require('../assets/modimages/battering-maneuver.jpg'),
        type: 'EXILUS',
        exilus: true,
        rarity: 'uncommon',
        polarity: 'vazarin',
        effects: { none: [0.03, 0.1] },
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.none[0] * (this.currRank + 1) * 100)}% to Bullet Jump +${Math.round(this.effects.none[0] * (this.currRank + 1) * 100)}% Aim Glide and Wall Latch +${Math.round(this.effects.none[1] * (this.currRank + 1) * 100)}% Impact on Bullet Jump` }
    },
    {
        abrev: 'c5',
        name: 'Beguiling Lantern',
        img: require('../assets/modimages/beguiling-lantern.jpg'),
        type: 'TITANIA',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: 0.25 },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Lantern Augment: Attracted enemies take ${Math.round(this.effects.none * (this.currRank + 1) * 100)}% more Melee Damage.` }
    },
    {
        abrev: 'c6',
        name: 'Blind Rage',
        img: require('../assets/modimages/blind-rage.jpg'),
        type: 'WARFRAME',
        rarity: 'rare',
        polarity: 'madurai',
        effects: { strength: 0.09, efficiency: -0.05 },
        maxRank: 10,
        currRank: 10,
        baseCost: 6,
        description() { return `+${Math.round(this.effects.strength * (this.currRank + 1) * 100)}% Ability Strength ${Math.round(this.effects.efficiency * (this.currRank + 1) * 100)}% Ability Efficiency` }
    },
    {
        abrev: '0f',
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
        abrev: '0g',
        name: 'Calculated Spring',
        img: require('../assets/modimages/calculated-spring.jpg'),
        type: 'EXILUS',
        conclave: true,
        conclaveOnly: true,
        exilus: true,
        rarity: 'uncommon',
        polarity: 'naramon',
        effects: { none: [-0.025, 6.25] },
        maxRank: 3,
        currRank: 3,
        baseCost: 2,
        description() { return `${Math.round(this.effects.none[0] * (this.currRank + 1) * 1000) / 10}% Mobility +${Math.round(this.effects.none[1] * (this.currRank + 1) * 100) / 100}% Health` }
    },
    {
        abrev: '0h',
        name: 'Calm & Frenzy',
        img: require('../assets/modimages/calm-&-frenzy.jpg'),
        type: 'EQUINOX',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [1, 20] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 1,
            details: [
                {
                    mode: 'Rest',
                    none: [
                        {
                            name: 'Wakeup health threshold',
                            suffix: '%',
                            base: 50
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 22
                        }
                    ],
                    range: [
                        {
                            name: 'Cast range',
                            suffix: 'm',
                            base: 50
                        },
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 5
                        },
                        {
                            name: 'Effect spread radius',
                            suffix: 'm',
                            base(augEffects, augRank) { return 1 + augEffects.none[0] * (augRank + 1) }
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                },
                {
                    mode: 'Rage',
                    strength: [
                        {
                            name: 'Enemy damage vulnerability',
                            suffix: '%',
                            base: 50
                        },
                        {
                            name: 'Enemy speed bonus',
                            suffix: '%',
                            base: 20
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 22
                        }
                    ],
                    range: [
                        {
                            name: 'Cast range',
                            suffix: 'm',
                            base: 50
                        },
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 5
                        },
                        {
                            name: 'Effect spread radius',
                            suffix: 'm',
                            base(augEffects, augRank) { return 1 + augEffects.none[0] * (augRank + 1) }
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                },
            ]
        },
        description() { return `Rest & Rage Augment: Killing an affected enemy causes the effect to spread to enemies within ${1 + this.effects.none[0] * (this.currRank + 1)}m for ${20 + this.effects.none[1] * (this.currRank + 1)}% of the remaining duration.` }
    },
    {
        abrev: '0i',
        name: 'Capacitance',
        img: require('../assets/modimages/capacitance.jpg'),
        type: 'VOLT',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: 0.005 },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 3,
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 1200,
                            icon: require('../assets/dynamic/damage/Electricity.png')
                        },
                        {
                            name: 'Shields conversion',
                            suffix: '%',
                            base(augEffects, augRank) { return 0.01 + augEffects.none * augRank }
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 6
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 20
                        },
                        {
                            name: 'Enemy link radius',
                            suffix: 'm',
                            base: 8
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 100
                        },
                    ],
                }
            ]
        },
        description() { return `Discharge Augment: Converts ${Math.round(1 + this.effects.none * (this.currRank + 1))}% of Damage dealt into Shields split between Volt and Squadmates.` }
    },
    {
        abrev: '0j',
        name: 'Cataclysmic Continuum',
        img: require('../assets/modimages/cataclysmic-continuum.jpg'),
        type: 'LIMBO',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [0.3, 0.5, 0.7, 1] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Cataclysm Augment: Duration increased by ${this.effects.none[this.currRank]}s for each enemy killed.` }
    },
    {
        abrev: '0k',
        name: 'Chaos Sphere',
        img: require('../assets/modimages/chaos-sphere.jpg'),
        type: 'NYX',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [0.25, 0.3, 0.4, 0.5] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 2,
            details: [
                {
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 25
                        },
                        {
                            name: 'Chaos sphere duration',
                            suffix: 's',
                            base: 12.5
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 25
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 75
                        }
                    ],
                }
            ]
        },
        description() { return `Chaos Augment: Enemies entering the Effect Range will be inflicted with Chaos. Effect Range lasts for ${this.effects.none[this.currRank]}% of the ability duration and shrinks over time.` }
    },
    {
        abrev: '0l',
        name: 'Chilling Globe',
        img: require('../assets/modimages/chilling-globe.jpg'),
        type: 'FROST',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [[4, 5, 6, 8], [30, 35, 40, 50]] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 2,
            details: [
                {
                    armor: [
                        {
                            name: 'Globe health',
                            base: 3500,
                            mult: 5
                        },
                    ],
                    strength: [
                        {
                            name: 'Globe explosion',
                            base: 150,
                            icon: require('../assets/dynamic/damage/Cold.png')
                        },
                    ],
                    duration: [
                        {
                            name: 'Freeze duration',
                            suffix: 's',
                            base(augEffects, augRank) { return augEffects.none[0][augRank] }
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 5
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
        description() { return `Snow Globe Augment: Enemies that enter have a ${this.effects.none[1][this.currRank]}% chance to become frozen solid for ${this.effects.none[0][this.currRank]}s.` }
    },
    {
        abrev: '0m',
        name: 'Chromatic Blade',
        img: require('../assets/modimages/chromatic-blade.jpg'),
        type: 'EXCALIBUR',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [25, 30, 40, 50] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 3,
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 250
                        },
                        {
                            name: 'Bonus status chance',
                            suffix: '%',
                            base(augEffects, augRank) { return augEffects.none[augRank] }
                        },
                    ],
                    duration: [
                        {
                            name: 'Blind duration',
                            suffix: 's',
                            base: 6
                        }
                    ],
                    range: [
                        {
                            name: 'Blind radius',
                            suffix: 'm',
                            base: 5
                        }
                    ],
                    none: [
                        {
                            name: 'Wave speed',
                            suffix: 'm/s',
                            base: 15
                        },
                        {
                            name: 'Wave range',
                            suffix: 'm',
                            base: 40
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                    channel: [
                        {
                            name: 'Energy drain/s',
                            base: 2.5
                        }
                    ]
                }
            ]
        },
        description() { return `Exalted Blade Augment: Exalted Blade's Damage Type changes depending on Excalibur's Energy Color and Status Chance is increased by ${this.effects.none[this.currRank]}%.` }
    },
    {
        abrev: '0n',
        name: 'Coaction Drift',
        img: require('../assets/modimages/coaction-drift.jpg'),
        type: 'EXILUS',
        exilus: true,
        rarity: 'rare',
        polarity: 'naramon',
        effects: { none: 2.5 },
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        description() { return `+${this.effects.none * (this.currRank + 1)}% Aura Strength ${this.effects.none * (this.currRank + 1)}% Aura Effectiveness` }
    },
    {
        abrev: 'c7',
        name: 'Concentrated Arrow',
        img: require('../assets/modimages/concentrated-arrow.jpg'),
        type: 'IVARA',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: 10 },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 3,
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 160,
                        },
                    ],
                    range: [
                        {
                            name: 'Explosion range',
                            suffix: 'm',
                            base: 7
                        }
                    ],
                    none: [
                        {
                            name: 'Arrows',
                            base: 1
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        },
                        {
                            name: 'Energy / Shot',
                            base: 15
                        },
                    ],
                }
            ]
        },
        description() { return `Artemis Bow Augment: Fires a single arrow that has +${10 + this.effects.none * (this.currRank + 1)}% Critical Chance on Headshots and explodes in a 7m radius. Removes Punch Through.` }
    },
    {
        abrev: 'c8',
        name: 'Conductor',
        img: require('../assets/modimages/conductor.jpg'),
        type: 'OCTAVIA',
        exilus: true,
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [100, 115, 135, 150] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Resonator Augment: Reactivate the ability to command Resonator to move to your aim point at ${this.effects.none[this.currRank]}% Speed.` }
    },
    {
        abrev: 'c9',
        name: 'Constitution',
        img: require('../assets/modimages/constitution.jpg'),
        type: 'WARFRAME',
        rarity: 'rare',
        polarity: 'naramon',
        effects: { none: 0.1, duration: 0.07 },
        maxRank: 3,
        currRank: 3,
        baseCost: 10,
        description() { return `+${Math.round(this.effects.none * (this.currRank + 1) * 100)}% Faster Knockdown Recovery +${Math.round(this.effects.duration * (this.currRank + 1) * 100)}% Ability Duration` }
    },
    {
        abrev: 'd0',
        name: 'Contagion Cloud',
        img: require('../assets/modimages/contagion-cloud.jpg'),
        type: 'SARYN',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [100, 115, 130, 150] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 2,
            details: [
                {
                    strength: [
                        {
                            name: 'Added ranged Damage',
                            suffix: '%',
                            base: 30,
                            icon: require('../assets/dynamic/damage/Toxin.png')
                        },
                        {
                            name: 'Added melee Damage',
                            suffix: '%',
                            base: 60,
                            icon: require('../assets/dynamic/damage/Toxin.png')
                        },
                        {
                            name: 'Cloud damage',
                            base(augEffects, augRank) { return augEffects.none[augRank] },
                            icon: require('../assets/dynamic/damage/Toxin.png')
                        },
                    ],
                    exception: [
                        {
                            name: 'Added block',
                            base: 40,
                        },
                    ],
                    duration: [
                        {
                            name: 'Toxic Lash Duration',
                            suffix: 's',
                            base: 40
                        },
                        {
                            name: 'Cloud duration',
                            suffix: 's',
                            base: 12
                        }
                    ],
                    range: [
                        {
                            name: 'Cloud radius',
                            suffix: 'm',
                            base: 2
                        }
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
        description() { return `Toxic Lash Augment: Create 2m toxic clouds, dealing ${this.effects.none[this.currRank]} Toxin/s for 8s with every kill. Damage is twice as strong for Melee kills.` }
    },
    {
        abrev: 'd1',
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
        abrev: 'd2',
        name: 'Corroding Barrage',
        img: require('../assets/modimages/corroding-barrage.jpg'),
        type: 'HYDROID',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [50, 65, 80, 100] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 0,
            details: [
                {
                    strength: [
                        {
                            name: 'Base damage',
                            base: 150,
                            icon: require('../assets/dynamic/damage/Impact.png')
                        },
                        {
                            name: 'Charged damage',
                            base: 300,
                            icon: require('../assets/dynamic/damage/Impact.png')
                        },
                    ],
                    duration: [
                        {
                            name: 'Base duration',
                            suffix: 's',
                            base: 5
                        },
                        {
                            name: 'Charged duration',
                            suffix: 's',
                            base: 10
                        },
                    ],
                    range: [
                        {
                            name: 'Explosion Radius',
                            suffix: 'm',
                            base: 5
                        }
                    ],
                    none: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 10
                        },
                        {
                            name: 'Corrosive status chance',
                            suffix: '%',
                            base(augEffects, augRank) { return augEffects.none[augRank] }
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Base energy',
                            base: 25
                        },
                        {
                            name: 'Charged energy',
                            base: 50
                        },
                    ],
                }
            ]
        },
        description() { return `Tempest Barrage Augment: Each projectile has a ${this.effects.none[this.currRank]}% chance of inflicting a Corrosive Status Effect.` }
    },
    {
        abrev: 'd3',
        name: 'Corrosive Projection',
        img: require('../assets/modimages/corrosive-projection.jpg'),
        type: 'AURA',
        aura: true,
        rarity: 'uncommon',
        polarity: 'naramon',
        effects: { none: -5 },
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `Enemy armor reduced. ${this.effects.none * (this.currRank + 1)}% Armor` }
    },
    {
        abrev: 'd4',
        name: 'Counter Pulse',
        img: require('../assets/modimages/counter-pulse.jpg'),
        type: 'MAG',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [2, 2.5, 3, 4] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 2,
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 400,
                            icon: require('../assets/dynamic/damage/Magnetic.png')
                        },
                        {
                            name: 'Damage multiplier',
                            suffix: 'x',
                            base: 2.5
                        },
                    ],
                    duration: [
                        {
                            name: 'Pulse expansion time',
                            suffix: 's',
                            base: 5
                        },
                        {
                            name: 'Weapon & robotics disable duration',
                            suffix: 's',
                            base(augEffects, augRank) { return augEffects[augRank] }
                        },
                    ],
                    range: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 8
                        }
                    ],
                    none: [
                        {
                            name: 'Pulse expansion speed',
                            suffix: 'm/s',
                            base: 5.9
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 75
                        }
                    ],
                }
            ]
        },
        description() { return `Polarize Augment: Enemy weapons are jammed and robotics are disabled for ${this.effects.none[this.currRank]}s when hit by Polarize.` }
    },
    {
        abrev: 'd5',
        name: 'Creeping Terrify',
        img: require('../assets/modimages/creeping-terrify.jpg'),
        type: 'NEKROS',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: 10 },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 1,
            details: [
                {
                    strength: [
                        {
                            name: 'Affected enemies',
                            base: 20,
                        },
                        {
                            name: 'Armor reduction',
                            suffix: '%',
                            base: 20,
                        },
                    ],
                    exception: [
                        {
                            name: 'Slow',
                            suffix: '%',
                            base(augEffects, augRank) { return 20 + augEffects.none * (augRank + 1) }
                        }
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 25
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 15
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 75
                        }
                    ],
                }
            ]
        },
        description() { return `Terrify Augment: Affected enemies have ${20 + this.effects.none * (this.currRank + 1)}% reduced Movement Speed.` }
    },
    {
        abrev: 'd6',
        name: 'Cunning Drift',
        img: require('../assets/modimages/cunning-drift.jpg'),
        type: 'EXILUS',
        exilus: true,
        rarity: 'rare',
        polarity: 'madurai',
        effects: { none: [2, -5], range: 0.025 },
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        description() { return `+${this.effects.none[0] * (this.currRank + 1)}% Slide ${this.effects.none[1] * (this.currRank + 1)}% Friction +${Math.round(this.effects.range * (this.currRank + 1) * 1000) / 10}% Ability Range` }
    },
    {
        abrev: 'd7',
        name: 'Curative Undertow',
        img: require('../assets/modimages/curative-undertow.jpg'),
        type: 'HYDROID',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: 5 },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 2,
            details: [
                {
                    strength: [
                        {
                            name: 'Damage/s',
                            base: 25,
                            icon: require('../assets/dynamic/damage/Impact.png')
                        },
                        {
                            name: 'Damage increase/s',
                            suffix: '%',
                            base: 2
                        },
                        {
                            name: 'Healing/1.5s',
                            suffix: '%',
                            base(augEffects, augRank) { return 10 + augEffects.none * (augRank + 1) }
                        },
                    ],
                    range: [
                        {
                            name: 'Puddle radius',
                            suffix: 'm',
                            base: 4
                        },
                        {
                            name: 'Grab range',
                            suffix: 'm',
                            base: 15
                        },
                    ],
                    none: [
                        {
                            name: 'Energy/Heal',
                            base: 5
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 15
                        },
                        {
                            name: 'Grab cost',
                            base: 15
                        },
                        {
                            name: 'Energy / 0.2m moved',
                            base: 1
                        },
                    ],
                    channel: [
                        {
                            name: 'Energy drain/s',
                            base: 2
                        }
                    ]
                }
            ]
        },
        description() { return `Undertow Augment: Allies can enter the pool to regain ${10 + this.effects.none * (this.currRank + 1)}% Health every 1.5s, with each ally in the pool increasing Energy drain on Hydroid.` }
    },
    {
        abrev: 'd8',
        name: 'Dead Eye',
        img: require('../assets/modimages/dead-eye.jpg'),
        type: 'AURA',
        aura: true,
        rarity: 'uncommon',
        polarity: 'madurai',
        effects: { none: 8.75 },
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `Sniper Rifle damage increased.,+${Math.round(this.effects.none * (this.currRank + 1) * 10) / 10}% Damage` }
    },
    {
        abrev: 'd9',
        name: 'Deceptive Bond',
        img: require('../assets/modimages/deceptive-bond.jpg'),
        type: 'LOKI',
        conclave: true,
        conclaveOnly: true,
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: 12.5 },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Decoy Augment: ${this.effects.none * (this.currRank + 1)}% of damage Loki takes is transferred to Decoy, and vice versa.` }
    },
    {
        abrev: 'e0',
        name: 'Defiled Reckoning',
        img: require('../assets/modimages/defiled-reckoning.jpg'),
        type: 'OBERON',
        conclave: true,
        conclaveOnly: true,
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: 2.5 },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Reckoning Augment: Health Orbs become unusable by enemies for ${this.effects.none * (this.currRank + 1)}s.` }
    },
    {
        abrev: 'e1',
        name: 'Despoil',
        img: require('../assets/modimages/despoil.jpg'),
        type: 'NEKROS',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: -2 },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 2,
            details: [
                {
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 25
                        }
                    ],
                    none: [
                        {
                            name: 'Drop chance',
                            suffix: '%',
                            base: 54
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Activation energy cost',
                            base: 10
                        },
                        {
                            name: 'Health / Corpse',
                            base(augEffects, augRank) { return 16 + augEffects.none * augRank }
                        },
                    ],
                }
            ]
        },
        description() { return `Desecrate Augment: No longer consumes Energy, but consumes ${16 + this.effects.none * this.currRank} Health per corpse instead.` }
    },
    {
        abrev: 'e2',
        name: 'Diamond Skin',
        img: require('../assets/modimages/diamond-skin.jpg'),
        type: 'WARFRAME',
        rarity: 'uncommon',
        polarity: 'vazarin',
        effects: { none: 7.5 },
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        description() { return `+${this.effects.none * (this.currRank + 1)}% Radiation Resistance` }
    },
    {
        abrev: 'e3',
        name: 'Discharge Strike',
        img: require('../assets/modimages/discharge-strike.jpg'),
        type: 'NEKROS',
        conclave: true,
        conclaveOnly: true,
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: 6.25 },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Soul Punch Augment: Depletes up to ${this.effects.none * (this.currRank + 1)} Energy from the target.` }
    },
    {
        abrev: 'e4',
        name: 'Duality',
        img: require('../assets/modimages/duality.jpg'),
        type: 'EQUINOX',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [100, 150, 200, 300] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 0,
            details: [
                {
                    mode: 'Night',
                    strength: [
                        {
                            name: 'Bonus armor',
                            base: 250
                        },
                        {
                            name: 'Bonus shields',
                            base: 150
                        },
                    ],
                    duration: [
                        {
                            name: 'Duraion',
                            suffix: 's',
                            base: 25
                        },
                        {
                            name: 'Specter duraion',
                            suffix: 's',
                            base(augEffects, augRank) { return 7 + augRank }
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                },
                {
                    mode: 'Day',
                    strength: [
                        {
                            name: 'Damage bonus',
                            suffix: '%',
                            base: 25
                        },
                        {
                            name: 'Speed bonus',
                            suffix: '%',
                            base: 15
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 25
                        },
                        {
                            name: 'Specter duration',
                            suffix: 's',
                            base(augEffects, augRank) { return 7 + augRank }
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                },
            ]
        },
        description() { return `Metamorphosis Augment: Equinox's other half breaks free for ${7 + this.currRank}s, dealing ${this.effects.none[this.currRank]}% Damage.` }
    },
    {
        abrev: 'e5',
        name: 'Elemental Sandstorm',
        img: require('../assets/modimages/elemental-sandstorm.jpg'),
        type: 'INAROS',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [25, 30, 40, 50] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 2,
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 500,
                            icon: require('../assets/dynamic/damage/Slash.png')
                        },
                        {
                            name: 'Status chance',
                            suffix: '%',
                            base(augEffects, augRank) { return augEffects.none[augRank] }
                        },
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 15
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 75
                        }
                    ],
                    channel: [
                        {
                            name: 'Energy drain/s',
                            base: 10
                        }
                    ]
                }
            ]
        },
        description() { return `Sandstorm Augment: Sandstorm has a ${this.effects.none[this.currRank]}% chance of inflicting Status Effects based on the Damage Types and mods on equipped Melee Weapon.` }
    },
    {
        abrev: 'e6',
        name: 'EMP Aura',
        img: require('../assets/modimages/emp-aura.jpg'),
        type: 'AURA',
        aura: true,
        rarity: 'uncommon',
        polarity: 'vazarin',
        effects: { none: -2.5 },
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `Corpus enemies have reduced Accuracy. ${this.effects.none * (this.currRank + 1)}% Hit Chance` }
    },
    {
        abrev: 'e7',
        name: 'Empowered Blades',
        img: require('../assets/modimages/empowered-blades.jpg'),
        type: 'AURA',
        aura: true,
        rarity: 'rare',
        polarity: 'naramon',
        effects: { none: [10, 15] },
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `Charge attacks get +${this.effects.none[0] * (this.currRank + 1)}% Status Chance and Status Damage but drains ${this.effects.none[1] * (this.currRank + 1)} Shields per hit.` }
    },
    {
        abrev: 'e8',
        name: 'Empowered Quiver',
        img: require('../assets/modimages/empowered-quiver.jpg'),
        type: 'IVARA',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [[75, 80, 90, 100], [50, 65, 80, 100]] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 0,
            details: [
                {
                    mode: 'Cloak',
                    strength: [
                        {
                            name: 'Chance to prevent status effect',
                            suffix: '%',
                            base(augEffects, augRank) { return augEffects.none[1][augRank] }
                        }
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 12
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 2.5
                        }
                    ],
                    none: [
                        {
                            name: 'Max cloaks',
                            base: 3
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                },
                {
                    mode: 'Dashwire',
                    strength: [
                        {
                            name: 'Critical damage bonus while on dashwire',
                            suffix: '%',
                            base(augEffects, augRank) { return augEffects.none[0][augRank] }
                        }
                    ],
                    none: [
                        {
                            name: 'Zipline range',
                            suffix: 'm',
                            base: 100
                        },
                        {
                            name: 'Max ziplines',
                            base: 4
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                },
                {
                    mode: 'Noise',
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 20
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                },
                {
                    mode: 'Sleep',
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 10
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 6
                        }
                    ],
                    none: [
                        {
                            name: 'Wakeup health threshold',
                            suffix: '%',
                            base: 50
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                },
            ]
        },
        description() { return `Quiver Augment: Dashwire grants allies ${this.effects.none[0][this.currRank]}% Critical Damage. Cloak arrow has a ${this.effects.none[1][this.currRank]}% chance to prevent Status Effects.` }
    },
    {
        abrev: 'e9',
        name: 'Endurance Drift',
        img: require('../assets/modimages/endurance-drift.jpg'),
        type: 'EXILUS',
        exilus: true,
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { energy: 0.025, none: 2 },
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.energy * (this.currRank + 1) * 1000) / 10}% Energy Max +${this.effects.none * (this.currRank + 1)}% Parkour Velocity` }
    },
    {
        abrev: 'f0',
        name: 'Enemy Radar',
        img: require('../assets/modimages/enemy-radar.jpg'),
        type: 'AURA',
        aura: true,
        rarity: 'uncommon',
        polarity: 'naramon',
        effects: { none: 5 },
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `Enemies appear on Minimap. +${this.effects.none * (this.currRank + 1)} Enemy Radar` }
    },
    {
        abrev: 'f1',
        name: 'Enemy Sense',
        img: require('../assets/modimages/enemy-sense.jpg'),
        type: 'EXILUS',
        exilus: true,
        rarity: 'rare',
        polarity: 'naramon',
        effects: { none: 5 },
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        description() { return `+${this.effects.none * (this.currRank + 1)} Enemy Radar` }
    },
    {
        abrev: 'f2',
        name: 'Energy Conversion',
        img: require('../assets/modimages/energy-conversion.jpg'),
        type: 'WARFRAME',
        rarity: 'rare',
        polarity: 'madurai',
        effects: { none: 50 / 6 },
        maxRank: 5,
        currRank: 5,
        baseCost: 10,
        description() { return `Energy orbs grant ${Math.round(this.effects.none * (this.currRank + 1))}% more Ability Strength to your next cast.` }
    },
    {
        abrev: 'f3',
        name: 'Energy Siphon',
        img: require('../assets/modimages/energy-siphon.jpg'),
        type: 'AURA',
        aura: true,
        rarity: 'uncommon',
        polarity: 'naramon',
        effects: { none: 0.1 },
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `Warframe Energy regenerates. +${Math.round(this.effects.none * (this.currRank + 1) * 10) / 10} Energy Rate` }
    },
    {
        abrev: 'f4',
        name: 'Energy Transfer',
        img: require('../assets/modimages/energy-transfer.jpg'),
        type: 'EQUINOX',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [50, 65, 80, 100] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Mend & Maim Augment: ${this.effects.none[this.currRank]}% of charge is conserved when switching between forms.` }
    },
    {
        abrev: 'f5',
        name: 'Enveloping Cloud',
        img: require('../assets/modimages/enveloping-cloud.jpg'),
        type: 'WUKONG',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [0.5, 2] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 2,
            details: [
                {
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 25
                        },
                        {
                            name: 'Invisibility duration',
                            suffix: 's',
                            base(augEffects, augRank) { return 6 + augEffects.none[1] * (augRank + 1) }
                        },
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 8
                        },
                        {
                            name: 'Invisibility radius',
                            suffix: 'm',
                            base(augEffects, augRank) { return 2 + augEffects.none[0] * (augRank + 1) }
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        },
                        {
                            name: 'Energy drain / 2.5m',
                            base: 1
                        }
                    ]
                }
            ]
        },
        description() { return `Cloud Walker Augment: Allies within ${2 + this.effects.none[0] * (this.currRank + 1)}m of the cloud become invisible to enemies for ${6 + this.effects.none[1] * (this.currRank + 1)}s.` }
    },
    {
        abrev: 'f6',
        name: 'Equilibrium',
        img: require('../assets/modimages/equilibrium.jpg'),
        type: 'WARFRAME',
        rarity: 'uncommon',
        polarity: 'naramon',
        effects: { none: 10 },
        maxRank: 10,
        currRank: 10,
        baseCost: 4,
        description() { return `Health pickups give +${this.effects.none * (this.currRank + 1)}% Energy. Energy pickups give +${this.effects.none * (this.currRank + 1)}% Health.` }
    },
    {
        abrev: 'f7',
        name: 'Escape Velocity',
        img: require('../assets/modimages/escape-velocity.jpg'),
        type: 'NOVA',
        exilus: true,
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [30, 35, 40, 50] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 2,
            details: [
                {
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 16
                        },
                        {
                            name: 'Speed bonus duration',
                            suffix: 's',
                            base(augEffects, augRank) { return 4 + augRank }
                        },
                    ],
                    range: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 50
                        }
                    ],
                    none: [
                        {
                            name: 'Uses before collapse',
                            base: 4
                        },
                        {
                            name: 'Speed bonus',
                            suffix: '%',
                            base(augEffects, augRank) { return augEffects.none[augRank] }
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 75
                        }
                    ],
                }
            ]
        },
        description() { return `Worm Hole Augment: Allies that travel through wormhole gain a ${this.effects.none[this.currRank]}% Speed bonus for ${4 + this.currRank}s.` }
    },
    {
        abrev: 'f8',
        name: 'Eternal War',
        img: require('../assets/modimages/eternal-war.jpg'),
        type: 'VALKYR',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: 0.25 },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 1,
            details: [
                {
                    strength: [
                        {
                            name: 'Attack speed buff',
                            suffix: '%',
                            base: 50,
                        },
                        {
                            name: 'Armor buff',
                            suffix: '%',
                            base: 50,
                        },
                    ],
                    exception: [
                        {
                            name: 'Slow',
                            suffix: '%',
                            base: 30,
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 15
                        },
                        {
                            name: 'Duration increase from melee kills',
                            suffix: 's',
                            base(augEffects, augRank) { return 1 + augEffects.none * (augRank + 1) }
                        },
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 25
                        }
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
        description() { return `Warcry Augment: While active, Warcry's duration is increased by ${1 + this.effects.none * (this.currRank + 1)}s for each Melee Kill.` }
    },
    {
        abrev: 'f9',
        name: 'Everlasting Ward',
        img: require('../assets/modimages/everlasting-ward.jpg'),
        type: 'CHROMA',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [50, 65, 80, 100] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Elemental Ward Augment: Allies that leave the radius will retain the effect for ${this.effects.none[this.currRank]}% of the remaining duration.` }
    },
    {
        abrev: 'g0',
        name: 'Explosive Legerdemain',
        img: require('../assets/modimages/explosive-legerdemain.jpg'),
        type: 'MIRAGE',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [150, 170, 200, 250, 15] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 1,
            details: [
                {
                    strength: [
                        {
                            name: 'Explosion damage',
                            base: 200,
                        },
                        {
                            name: 'Proximity mine damage',
                            base(augEffects, augRank) { return augEffects.none[augRank] }
                        },
                    ],
                    duration: [
                        {
                            name: 'Trap duration',
                            suffix: 's',
                            base: 18
                        },
                        {
                            name: 'Blind duration',
                            suffix: 's',
                            base: 5
                        },
                    ],
                    none: [
                        {
                            name: 'Jewel duration',
                            suffix: 's',
                            base: 20
                        },
                        {
                            name: 'Proximity mine status chance',
                            suffix: '%',
                            base(augEffects, augRank) { return augEffects.none[4] * (augRank + 1) }
                        },
                    ],
                    range: [
                        {
                            name: 'Ability radius',
                            suffix: 'm',
                            base: 40
                        },
                        {
                            name: 'Jewel charm radius',
                            suffix: 'm',
                            base: 12
                        },
                        {
                            name: 'Explosion radius',
                            suffix: 'm',
                            base: 8
                        },
                        {
                            name: 'Blind radius',
                            suffix: 'm',
                            base: 8
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        }
                    ],
                },
            ]
        },
        description() { return `Sleight of Hand Augment: Ammo and Orbs pickups are turned into proximity mines that deal ${this.effects.none[this.currRank]} Damage with a ${this.effects.none[4] * (this.currRank + 1)}% Proc Chance.` }
    },
    {
        abrev: 'g1',
        name: 'Fast Deflection',
        img: require('../assets/modimages/fast-deflection.jpg'),
        type: 'WARFRAME',
        rarity: 'uncommon',
        polarity: 'vazarin',
        effects: { none: 15 },
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        description() { return `+${this.effects.none * (this.currRank + 1)}% Shield Recharge` }
    },
    {
        abrev: 'g2',
        name: 'Fatal Teleport',
        img: require('../assets/modimages/fatal-teleport.jpg'),
        type: 'ASH',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: 25 },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 2,
            details: [
                {
                    strength: [
                        {
                            name: 'Extra finisher damage',
                            suffix: '%',
                            base(augEffects, augRank) { return 100 + augEffects.none * (augRank + 1) }
                        }
                    ],
                    range: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 60
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                },
            ]
        },
        description() { return `Teleport Augment: Teleport will perform a Finisher on the target, dealing ${100 + this.effects.none * (this.currRank + 1)}% Extra Damage. 50% of Energy cost is refunded on a kill.` }
    },
    {
        abrev: 'g3',
        name: 'Final Act',
        img: require('../assets/modimages/final-act.jpg'),
        type: 'WARFRAME',
        conclave: true,
        conclaveOnly: true,
        rarity: 'rare',
        polarity: 'madurai',
        effects: { none: [7.5, 2] },
        maxRank: 3,
        currRank: 3,
        baseCost: 10,
        description() { return `On Low Health: +${this.effects.none[0] * (this.currRank + 1)}% Ability Strength +${this.effects.none[0] * (this.currRank + 1)}% Casting Speed for ${this.effects.none[1] * (this.currRank + 1)}s` }
    },
    {
        abrev: 'g4',
        name: 'Fire Fright',
        img: require('../assets/modimages/fire-fright.jpg'),
        type: 'EMBER',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: 20 },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Fire Blast Augment: Damage done by Fire Blast has a ${20 + this.effects.none * (this.currRank + 1)}% chance to cause enemies to panic.` }
    },
    {
        abrev: 'g5',
        name: 'Fireball Frenzy',
        img: require('../assets/modimages/fireball-frenzy.jpg'),
        type: 'EMBER',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [50, 65, 80, 100] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 0,
            details: [
                {
                    strength: [
                        {
                            name: 'Initial damage',
                            base: 400,
                            icon: require('../assets/dynamic/damage/Heat.png')
                        },
                        {
                            name: 'Area damage',
                            base: 150,
                            icon: require('../assets/dynamic/damage/Heat.png')
                        },
                        {
                            name: 'Ally bonus damage',
                            suffix: '%',
                            base(augEffects, augRank) { return augEffects.none[augRank] },
                            icon: require('../assets/dynamic/damage/Heat.png')
                        },
                    ],
                    duration: [
                        {
                            name: 'Ally bonus damage duration',
                            suffix: 's',
                            base(augEffects, augRank) { return 28 + 4 * augRank }
                        }
                    ],
                    none: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 5
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                }
            ]
        },
        description() { return `Fireball Augment: Casting on allies will add ${this.effects.none[this.currRank]}% Heat Damage to their attacks for ${28 + 4 * this.currRank}s.` }
    },
    {
        abrev: 'g6',
        name: 'Firequake',
        img: require('../assets/modimages/firequake.jpg'),
        type: 'EMBER',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [50, 65, 80, 100] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `World On Fire Augment: Enemies hit have a ${this.effects.none[this.currRank]}% chance of being knocked down.` }
    },
    {
        abrev: 'g7',
        name: 'Firewalker',
        img: require('../assets/modimages/firewalker.jpg'),
        type: 'EXILUS',
        exilus: true,
        rarity: 'rare',
        polarity: 'madurai',
        effects: { none: [2.2, 25] },
        maxRank: 10,
        currRank: 10,
        baseCost: 2,
        description() { return `+${Math.round(this.effects.none[0] * (this.currRank + 1) * 10) / 10}% to Bullet Jump +${Math.round(this.effects.none[0] * (this.currRank + 1) * 10) / 10}% Aim Glide and Wall Latch +${this.effects.none[1] * (this.currRank + 1)}% Heat on Bullet Jump` }
    },
    {
        abrev: 'g8',
        name: 'Flame Repellent',
        img: require('../assets/modimages/flame-repellent.jpg'),
        type: 'WARFRAME',
        rarity: 'common',
        polarity: 'vazarin',
        effects: { none: 10 },
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        description() { return `+${this.effects.none * (this.currRank + 1)}% Heat Resistance` }
    },
    {
        abrev: 'g9',
        name: 'Flash Accelerant',
        img: require('../assets/modimages/flash-accelerant.jpg'),
        type: 'EMBER',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: 10 },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 1,
            details: [
                {
                    strength: [
                        {
                            name: 'Damage multiplier',
                            suffix: 'x',
                            base: 2.5
                        },
                        {
                            name: 'Heat damage buff',
                            suffix: '%',
                            base: 50
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 30
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 20
                        }
                    ],
                    none: [
                        {
                            name: 'Cast speed bonus',
                            suffix: '%',
                            base: 50
                        },
                        {
                            name: 'Ally cast speed bonus',
                            suffix: '%',
                            base(augEffects, augRank) { return 20 + augEffects.none * augRank }
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        }
                    ],
                }
            ]
        },
        description() { return `Accelerant Augment: Accelerant gives +${20 + this.effects.none * this.currRank}% Casting Speed and +50% Heat damage to allies within range.` }
    },
    {
        abrev: 'h0',
        name: 'Fleeting Expertise',
        img: require('../assets/modimages/fleeting-expertise.jpg'),
        type: 'WARFRAME',
        rarity: 'rare',
        polarity: 'naramon',
        effects: { efficiency: 0.1, duration: -0.1 },
        maxRank: 5,
        currRank: 5,
        baseCost: 6,
        description() { return `+${Math.round(this.effects.efficiency * (this.currRank + 1) * 100)}% Ability Efficiency ${Math.round(this.effects.duration * (this.currRank + 1) * 100)}% Ability Duration` }
    },
    {
        abrev: 'h1',
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
        abrev: 'h2',
        name: 'Follow Through',
        img: require('../assets/modimages/follow-through.jpg'),
        type: 'WARFRAME',
        conclave: true,
        conclaveOnly: true,
        rarity: 'uncommon',
        polarity: 'madurai',
        effects: { none: 2.5 },
        maxRank: 3,
        currRank: 3,
        baseCost: 10,
        description() { return `On Respawn: +${this.effects.energy * (this.currRank + 1)} Energy` }
    },
    {
        abrev: 'h3',
        name: 'Fortitude',
        img: require('../assets/modimages/fortitude.jpg'),
        type: 'WARFRAME',
        rarity: 'rare',
        polarity: 'naramon',
        effects: { none: [5, 20] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `+${this.effects.none[0] * (this.currRank + 1)}% Chance to Resist Knockdown +${this.effects.none[0] * (this.currRank + 1)}% Shield Recharge` }
    },
    {
        abrev: 'h4',
        name: 'Fracturing Crush',
        img: require('../assets/modimages/fracturing-crush.jpg'),
        type: 'MAG',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: 10 },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 3,
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 1500,
                            icon: require('../assets/dynamic/damage/Magnetic.png')
                        },
                        {
                            name: 'Shields gained / enemy / tick',
                            base: 25,
                            icon: require('../assets/dynamic/damage/Magnetic.png')
                        },
                    ],
                    exception: [
                        {
                            name: 'Armor reduction',
                            suffix: '%',
                            base(augEffects, augRank) { return 20 + 10 * augRank }
                        }
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base(augEffects, augRank) { return 4 + augRank }
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 18
                        }
                    ],
                    none: [
                        {
                            name: 'Damage ticks',
                            base: 3
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 100
                        }
                    ],
                }
            ]
        },
        description() { return `Crush Augment: Survivors have their Armor decreased by ${20 + 10 * (this.currRank)}% and become unable to move for ${4 + 1 * this.currRank}s.` }
    },
    {
        abrev: 'h5',
        name: 'Freeze Force',
        img: require('../assets/modimages/freeze-force.jpg'),
        type: 'FROST',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [50, 65, 80, 100] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 0,
            details: [
                {
                    strength: [
                        {
                            name: 'Initial damage',
                            base: 350,
                            icon: require('../assets/dynamic/damage/Cold.png')
                        },
                        {
                            name: 'Area damage',
                            base: 150,
                            icon: require('../assets/dynamic/damage/Cold.png')
                        },
                        {
                            name: 'Ally bonus damage',
                            suffix: '%',
                            base(augEffects, augRank) { return augEffects.none[augRank] },
                            icon: require('../assets/dynamic/damage/Cold.png')
                        },
                    ],
                    duration: [
                        {
                            name: 'Freeze duration',
                            suffix: 's',
                            base: 15
                        },
                        {
                            name: 'Ice patch duration',
                            suffix: 's',
                            base: 12
                        },
                        {
                            name: 'Ally bonus damage duration',
                            suffix: 's',
                            base(augEffects, augRank) { return 28 + 4 * augRank }
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                },
            ]
        },
        description() { return `Freeze Augment: Casting on allies will add ${this.effects.none[this.currRank]}% Cold Damage to their attacks for ${28 + 4 * this.currRank}s.` }
    },
    {
        abrev: 'h6',
        name: 'Funnel Clouds',
        img: require('../assets/modimages/funnel-clouds.jpg'),
        type: 'ZEPHYR',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: 2 },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Tornado Augment: Creates ${this.effects.none * (this.currRank + 1)} additional tornadoes. All tornadoes are 50% their original size and won't pick up enemies.` }
    },
    {
        abrev: 'h7',
        name: 'Furious Javelin',
        img: require('../assets/modimages/furious-javelin.jpg'),
        type: 'EXCALIBUR',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [3, 3, 4, 5] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 2,
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 1000
                        },
                        {
                            name: 'Bonus melee damage / Enemy hit',
                            suffix: '%',
                            base(augEffects, augRank) { return augEffects[augRank] }
                        },
                    ],
                    none: [
                        {
                            name: 'Javelins',
                            base: 12
                        }
                    ],
                    duration: [
                        {
                            name: 'Melee damage buff duration',
                            suffix: 's',
                            base(augEffects, augRank) { return 6 + 2 * augRank }
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 25
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 75
                        }
                    ],
                }
            ]
        },
        description() { return `Radial Javelin Augment: Each enemy hit will increase Excalibur's Melee Damage by ${this.effects.none[this.currRank]}% for ${6 + 2 * this.currRank}s.` }
    },
    {
        abrev: 'h8',
        name: 'Gladiator Aegis',
        img: require('../assets/modimages/gladiator-aegis.jpg'),
        type: 'WARFRAME',
        rarity: 'common',
        polarity: 'vazarin',
        effects: { armor: 0.075 },
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        set: { setName: 'gladiator', setMax: 6, setCurr: 1 },
        description() { return [`+${Math.round(this.effects.armor * (this.currRank + 1) * 1000) / 10}% Armor`, `${15 * this.set.setCurr}% Critical Chance per Combo Multiplier.`] }
    },
    {
        abrev: 'h9',
        name: 'Gladiator Finesse',
        img: require('../assets/modimages/gladiator-finesse.jpg'),
        type: 'WARFRAME',
        rarity: 'rare',
        polarity: 'vazarin',
        effects: { none: 10 },
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        set: { setName: 'gladiator', setMax: 6, setCurr: 1 },
        description() { return [`Drains Energy to stop Lethal Damage with ${this.effects.none * (this.currRank + 1)}% Efficiency.`, `${15 * this.set.setCurr}% Critical Chance per Combo Multiplier.`] }
    },
    {
        abrev: 'i0',
        name: 'Gladiator Resolve',
        img: require('../assets/modimages/gladiator-resolve.jpg'),
        type: 'WARFRAME',
        rarity: 'uncommon',
        polarity: 'vazarin',
        effects: { health: 0.3 },
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        set: { setName: 'gladiator', setMax: 6, setCurr: 1 },
        description() { return [`+${Math.round(this.effects.health * (this.currRank + 1) * 100)}% Health`, `${15 * this.set.setCurr}% Critical Chance per Combo Multiplier.`] }
    },
    {
        abrev: 'i1',
        name: 'Greedy Pull',
        img: require('../assets/modimages/greedy-pull.jpg'),
        type: 'MAG',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: 20 },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Pull Augment: Adds ${40 + this.effects.none * this.currRank}% chance to pull pickups towards Mag.` }
    },
    {
        abrev: 'i2',
        name: 'Growing Power',
        img: require('../assets/modimages/growing-power.jpg'),
        type: 'AURA',
        aura: true,
        rarity: 'rare',
        polarity: 'madurai',
        effects: { growingPower: 25 / 600 },
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `Applying Status Effects with weapons increase Ability Strength by ${Math.round(this.effects.growingPower * (this.currRank + 1) * 1000) / 10}% for ${this.currRank + 1}s.` }
    },
    {
        abrev: 'i3',
        name: 'Guided Effigy',
        img: require('../assets/modimages/guided-effigy.jpg'),
        type: 'CHROMA',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: 500 },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 3,
            details: [
                {
                    strength: [
                        {
                            name: 'Damage/tick',
                            base: 400
                        },
                        {
                            name: 'Sentry health',
                            base: 8000
                        },
                        {
                            name: 'Collision damage',
                            base(augEffects, augRank) { return augEffects.none * (augRank + 1) }
                        },
                    ],
                    none: [
                        {
                            name: 'Chance for an enemy to drop 100% extra credits',
                            suffix: '%',
                            base: 60
                        },
                        {
                            name: 'Tick/s',
                            base: 5
                        },
                        {
                            name: 'Attack range',
                            suffix: 'm',
                            base: 20
                        },
                        {
                            name: 'Stun radius',
                            suffix: 'm',
                            base: 30
                        },
                        {
                            name: 'Knockback radius',
                            suffix: 'm',
                            base: 5
                        },
                        {
                            name: 'Speed increase',
                            suffix: '%',
                            base: 20
                        },
                        {
                            name: 'Armor reduction',
                            suffix: '%',
                            base: 50
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        }
                    ],
                    channel: [
                        {
                            name: 'Energy drain/s',
                            base: 10
                        }
                    ]
                }
            ]
        },
        description() { return `Effigy Augment: Cast and hold to make Effigy move to your aim point. Deals ${this.effects.none * (this.currRank + 1)} Damage/s to enemies in its path and roars on arrival stunning nearby enemies.` }
    },
    {
        abrev: 'i4',
        name: 'Hall Of Malevolence',
        img: require('../assets/modimages/hall-of-malevolence.jpg'),
        type: 'MIRAGE',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [1, 10] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 0,
            details: [
                {
                    strength: [
                        {
                            name: 'Damage by holograms',
                            suffix: '%',
                            base: 20,
                        },
                    ],
                    none: [
                        {
                            name: 'Hologram damage bonus after kill',
                            suffix: '%',
                            base(augEffects, augRank) { return 1 + augEffects.none[0] * (augRank + 1) }
                        },
                        {
                            name: 'Maximum hologram damage bonus',
                            suffix: '%',
                            base(augEffects, augRank) { return 10 + augEffects.none[1] * (augRank + 1) }
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 25
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                }
            ]
        },
        description() { return `Hall of Mirrors Augment: The damage of your doppelgangers is increased by ${1 + this.effects.none[0] * (this.currRank + 1)}% every time you kill an enemy.` }
    },
    {
        abrev: 'i5',
        name: 'Hallowed Eruption',
        img: require('../assets/modimages/hallowed-eruption.jpg'),
        type: 'OBERON',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [30, 50, 70, 100] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Hallowed Ground Augment: The next time this ability is cast it will consume the Hallowed Ground, dealing the remaining damage in a burst with ${this.effects.none[this.currRank]}% Proc Chance of Radiation.` }
    },
    {
        abrev: 'i6',
        name: 'Hallowed Reckoning',
        img: require('../assets/modimages/hallowed-reckoning.jpg'),
        type: 'OBERON',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [[150, 180, 210, 250], [100, 115, 130, 150]] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 3,
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 1250,
                        },
                        {
                            name: 'Extra damage',
                            base: 625,
                        },
                        {
                            name: 'Armor reduction',
                            suffix: '%',
                            base: 30,
                        },
                        {
                            name: 'Hallowed zone armor bonus',
                            base(augEffects, augRank) { return augEffects.none[0][augRank] }
                        },
                        {
                            name: 'Hallowed zone damage/s',
                            base(augEffects, augRank) { return augEffects.none[1][augRank] },
                            icon: require('../assets/dynamic/damage/Radiation.png')
                        },
                    ],
                    duration: [
                        {
                            name: 'Hallowed zone duration',
                            suffix: 's',
                            base(augEffects, augRank) { return 7 + augRank }
                        },
                        {
                            name: 'Blind duration',
                            suffix: 's',
                            base: 4
                        },
                    ],
                    range: [
                        {
                            name: 'Reckoning radius',
                            suffix: 'm',
                            base: 15
                        },
                        {
                            name: 'Blind radius',
                            suffix: 'm',
                            base: 4
                        },
                    ],
                    none: [
                        {
                            name: 'Hallowed zone radius',
                            suffix: 'm',
                            base: 2
                        },
                        {
                            name: 'Health orb drop chance',
                            suffix: '%',
                            base: 50
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 100
                        }
                    ],
                }
            ]
        },
        description() { return `Reckoning Augment: Enemies affected by Reckoning spawn zones that increase Armor by ${this.effects.none[0][this.currRank]} for allies and inflicts ${this.effects.none[1][this.currRank]} Damage to enemies over ${7 + this.currRank}s.` }
    },
    {
        abrev: 'i7',
        name: 'Handspring',
        img: require('../assets/modimages/handspring.jpg'),
        type: 'EXILUS',
        exilus: true,
        rarity: 'rare',
        polarity: 'naramon',
        effects: { none: 40 },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `+${this.effects.none * (this.currRank + 1)}% Faster Knockdown Recovery` }
    },
    {
        abrev: 'i8',
        name: 'Hastened Steps',
        img: require('../assets/modimages/hastened-steps.jpg'),
        type: 'WARFRAME',
        conclave: true,
        conclaveOnly: true,
        rarity: 'rare',
        polarity: 'madurai',
        effects: { none: 5, shields: -0.05 },
        maxRank: 3,
        currRank: 3,
        baseCost: 10,
        description() { return `+${this.effects.none * (this.currRank + 1)}% Sprint Speed ${Math.round(this.effects.shields * (this.currRank + 1) * 100)}% Shield Capacity` }
    },
    {
        abrev: 'i9',
        name: 'Haven',
        img: require('../assets/modimages/haven.jpg'),
        type: 'LIMBO',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: 5 },
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
                            base: 250,
                            icon: require('../assets/dynamic/damage/Impact.png')
                        },
                        {
                            name: 'Ally health restored',
                            suffix: '%',
                            base(augEffects, augRank) { return 5 + augEffects.none * (augRank + 1) }
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 25
                        }
                    ],
                    range: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 35
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                }
            ]
        },
        description() { return `Banish Augment: Allies banished to the rift will have ${5 + this.effects.none * (this.currRank + 1)}% of their Maximum Health restored.` }
    },
    {
        abrev: 'j0',
        name: 'Health Conversion',
        img: require('../assets/modimages/health-conversion.jpg'),
        type: 'WARFRAME',
        rarity: 'rare',
        polarity: 'vazarin',
        effects: { none: 75 },
        maxRank: 5,
        currRank: 5,
        baseCost: 10,
        description() { return `Health Orbs grant ${this.effects.none * (this.currRank + 1)} Armor, stacking up to 3x. Taking damage will consume a stack after 3s.` }
    },
    {
        abrev: 'j2',
        name: 'Heavy Impact',
        img: require('../assets/modimages/heavy-impact.jpg'),
        type: 'EXILUS',
        exilus: true,
        rarity: 'uncommon',
        polarity: 'naramon',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        description() { return `Create ${1 * (this.currRank + 1)}m seismic shockwaves from heavy landings, dealing ${50 * (this.currRank + 1)} Damage and knocking foes off their feet.` }
    },
    {
        abrev: 'j3',
        name: 'Heightened Reflexes',
        img: require('../assets/modimages/heightened-reflexes.jpg'),
        type: 'WARFRAME',
        rarity: 'rare',
        polarity: 'madurai',
        effects: { none: 5, efficiency: -0.05 },
        maxRank: 3,
        currRank: 3,
        baseCost: 10,
        description() { return `+${this.effects.none * (this.currRank + 1)}% Casting Speed ${Math.round(this.effects.efficiency * (this.currRank + 1) * 100)}% Ability Efficiency` }
    },
    {
        abrev: 'j4',
        name: 'Hunter Adrenaline',
        img: require('../assets/modimages/hunter-adrenaline.jpg'),
        type: 'WARFRAME',
        rarity: 'common',
        polarity: 'madurai',
        effects: { none: 7.5 },
        maxRank: 5,
        currRank: 5,
        baseCost: 6,
        set: { setName: 'hunter', setMax: 6, setCurr: 1 },
        description() { return [`Convert +${this.effects.none * (this.currRank + 1)}% of Damage on Health to Energy`, `+${25 * this.set.setCurr}% Companion Damage on enemies effected by Slash proc.`] }
    },
    {
        abrev: 'j5',
        name: 'Hushed Invisibility',
        img: require('../assets/modimages/hushed-invisibility.jpg'),
        type: 'LOKI',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [50, 65, 80, 100] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Invisibility Augment: Weapon noise is reduced by ${this.effects.none[this.currRank]}% while invisible.` }
    },
    {
        abrev: 'j6',
        name: 'Hysterical Assault',
        img: require('../assets/modimages/hysterical-assault.jpg'),
        type: 'VALKYR',
        exilus: true,
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: 7.5 },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 3,
            details: [
                {
                    strength: [
                        {
                            name: 'Base damage',
                            base: 250,
                        },
                    ],
                    none: [
                        {
                            name: 'Lifesteal',
                            suffix: '%',
                            base: 5
                        }
                    ],
                    range: [
                        {
                            name: 'Leap distance',
                            suffix: 'm',
                            base(augEffects, augRank) { return augEffects.none * (augRank + 1) }
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        },
                    ],
                    channel: [
                        {
                            name: 'Minimum energy drain/s',
                            base: 2.5
                        },
                        {
                            name: 'Maximum energy drain/s',
                            base: 15
                        }
                    ]
                }
            ]
        },
        description() { return `Hysteria Augment: Use Secondary Fire to leap onto enemies up to ${this.effects.none * (this.currRank + 1)}m away.` }
    },
    {
        abrev: 'j7',
        name: 'Hysterical Fixation',
        img: require('../assets/modimages/hysterical-fixation.jpg'),
        type: 'VALKYR',
        conclave: true,
        conclaveOnly: true,
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: 5 },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Hysteria Augment: While Hysteria is active, each kill restores ${this.effects.none * (this.currRank + 1)}% Maximum Shields.` }
    },
    {
        abrev: 'j8',
        name: 'Ice Spring',
        img: require('../assets/modimages/ice-spring.jpg'),
        type: 'EXILUS',
        exilus: true,
        rarity: 'rare',
        polarity: 'vazarin',
        effects: { none: [2.2, 25] },
        maxRank: 10,
        currRank: 10,
        baseCost: 2,
        description() { return `+${Math.round(this.effects.none[0] * (this.currRank + 1) * 10) / 10}% to Bullet Jump +${Math.round(this.effects.none[0] * (this.currRank + 1) * 10) / 10}% Aim Glide and Wall Latch +${this.effects.none[1] * (this.currRank + 1)}% Cold on Bullet Jump` }
    },
    {
        abrev: 'j9',
        name: 'Ice Wave Impedance',
        img: require('../assets/modimages/ice-wave-impedance.jpg'),
        type: 'FROST',
        conclave: true,
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: 2 },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 1,
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 700,
                            icon: require('../assets/dynamic/damage/Cold.png')
                        },
                    ],
                    duration: [
                        {
                            name: 'Frozen trail duration',
                            suffix: 's',
                            base(augEffects, augRank) { return 6 + augEffects.none * augRank }
                        }
                    ],
                    range: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 20
                        },
                        {
                            name: 'Initial width',
                            suffix: 'm',
                            base: 3
                        },
                    ],
                    exception: [
                        {
                            name: 'Angle',
                            suffix: '°',
                            base: 45
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        }
                    ],
                }
            ]
        },
        description() { return `Ice Wave Augment: Leaves a frozen trail for ${6 + this.effects.none * this.currRank}s that slows down enemies that come into contact with it.` }
    },
    {
        abrev: 'k0',
        name: 'Icy Avalanche',
        img: require('../assets/modimages/icy-avalanche.jpg'),
        type: 'FROST',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [40, 45, 50, 60] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 3,
            details: [
                {
                    strength: [
                        {
                            name: 'Initial damage',
                            base: 1500,
                            icon: require('../assets/dynamic/damage/Cold.png')
                        },
                        {
                            name: 'Explosion damage',
                            base: 400,
                            icon: require('../assets/dynamic/damage/Cold.png')
                        },
                        {
                            name: 'Armor reduction',
                            suffix: '%',
                            base: 40
                        },
                        {
                            name: 'Ice coat health / Enemy',
                            base(augEffects, augRank) { return augEffects[augRank] }
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 8
                        }
                    ],
                    range: [
                        {
                            name: 'Freeze radius',
                            suffix: 'm',
                            base: 15
                        },
                        {
                            name: 'Explosion radius',
                            suffix: 'm',
                            base: 4.5
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 100
                        }
                    ],
                }
            ]
        },
        description() { return `Avalanche Augment: Grants allies within the radius with a coat of ice that absorbs ${this.effects.none[this.currRank]} Damage per enemy hit.` }
    },
    {
        abrev: 'k1',
        name: 'Infested Impedance',
        img: require('../assets/modimages/infested-impedance.jpg'),
        type: 'AURA',
        aura: true,
        rarity: 'uncommon',
        polarity: 'vazarin',
        effects: { none: -3 },
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `Reduces speed of Infested enemies. ${this.effects.none * (this.currRank + 1)}% Speed` }
    },
    {
        abrev: 'k2',
        name: 'Infiltrate',
        img: require('../assets/modimages/infiltrate.jpg'),
        type: 'IVARA',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: 5 },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 2,
            details: [
                {
                    strength: [
                        {
                            name: 'Headshot bonus',
                            suffix: '%',
                            base: 40,
                        },
                        {
                            name: 'Movment speed bonus',
                            suffix: '%',
                            base(augEffects, augRank) { return 5 + augEffects.none * (augRank + 1) }
                        },
                    ],
                    exception: [
                        {
                            name: 'Loot Chance',
                            suffix: '%',
                            base: 100
                        },
                    ],
                    inverse: [
                        {
                            name: 'Time to pickpocket',
                            suffix: 's',
                            base: 2.5
                        },
                    ],
                    range: [
                        {
                            name: 'Pickpocket radius',
                            suffix: 'm',
                            base: 4
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                    channel: [
                        {
                            name: 'Still energy drain/s',
                            base: 1
                        },
                        {
                            name: 'Moving energy drain/s',
                            base: 3
                        },
                    ]
                }
            ]
        },
        description() { return `Prowl Augment: Ivara is able to bypass laser barriers and gains ${5 + this.effects.none * (this.currRank + 1)}% Movement Speed.` }
    },
    {
        abrev: 'k3',
        name: 'Insatiable',
        img: require('../assets/modimages/insatiable.jpg'),
        type: 'NIDUS',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [35, 40, 50, 60] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Ravenous Augment: Nidus has a ${this.effects.none[this.currRank]}% chance of generating an additional Mutation stack whenever he gains one, while standing in the Ravenous infestation.` }
    },
    {
        abrev: 'k4',
        name: 'Insulation',
        img: require('../assets/modimages/insulation.jpg'),
        type: 'WARFRAME',
        rarity: 'common',
        polarity: 'vazarin',
        effects: { none: 10 },
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        description() { return `+${this.effects.none * (this.currRank + 1)}% Cold Resistance` }
    },
    {
        abrev: 'k5',
        name: 'Intensify',
        family: 'Intensify',
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
        abrev: 'k6',
        name: 'Intruder',
        img: require('../assets/modimages/intruder.jpg'),
        type: 'EXILUS',
        exilus: true,
        rarity: 'common',
        polarity: 'naramon',
        effects: { none: 1 },
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `+${this.effects.none * (this.currRank + 1)}s to Hacking` }
    },
    {
        abrev: 'k7',
        name: 'Iron Shrapnel',
        img: require('../assets/modimages/iron-shrapnel.jpg'),
        type: 'RHINO',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: 20 },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 1,
            details: [
                {
                    armor: [
                        {
                            name: 'Iron skin health',
                            base: 1200,
                            mult: 2.5
                        },

                    ],
                    range: [
                        {
                            name: 'Iron Shrapnel radius',
                            suffix: 'm',
                            base: 8
                        }
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
        description() { return `Iron Skin Augment: Recasting Iron Skin will cause it to detonate, dealing ${40 + this.effects.none * this.currRank}% of its remaining Health as Puncture Damage, and knocking down enemies.` }
    },
    {
        abrev: 'k8',
        name: 'Iron Vault',
        img: require('../assets/modimages/iron-vault.jpg'),
        type: 'WUKONG',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [[8, 10, 12, 15], [300, 350, 400, 500]] },
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
                            base: 800,
                            icon: require('../assets/dynamic/damage/Impact.png')
                        },
                        {
                            name: 'Iron vault bonus damage',
                            suffix: '%',
                            base(augEffects, augRank) { return augEffects[augRank] }
                        },
                    ],
                    none: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 10
                        }
                    ],
                    range: [
                        {
                            name: 'Impact radius',
                            suffix: 'm',
                            base: 2
                        },
                        {
                            name: 'Bonus iron vault slam radius',
                            suffix: 'm',
                            base(augEffects, augRank) { return augEffects[augRank] }
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
        description() { return `Iron Jab Augment: Aiming Iron Jab at the ground launches Wukong into the air. Executing a Slam Attack increases Range by ${this.effects.none[0][this.currRank]}m and applies ${this.effects.none[1][this.currRank]}% Extra Damage.` }
    },
    {
        abrev: 'k9',
        name: 'Ironclad Charge',
        img: require('../assets/modimages/ironclad-charge.jpg'),
        type: 'RHINO',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [12.5, 2] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 0,
            details: [
                {
                    strength: [
                        {
                            name: '1st charge damage',
                            base: 650,
                            icon: require('../assets/dynamic/damage/Impact.png')
                        },
                        {
                            name: '2nd hit damage',
                            base: 1300,
                            icon: require('../assets/dynamic/damage/Impact.png')
                        },
                        {
                            name: '3rd+ hit damage',
                            base: 2600,
                            icon: require('../assets/dynamic/damage/Impact.png')
                        },
                        {
                            name: 'Armor bonus / Hit',
                            suffix: '%',
                            base(augEffects, augRank) { return augEffects * (augRank + 1) }
                        },
                    ],
                    duration: [
                        {
                            name: 'Combo window',
                            suffix: 's',
                            base: 1
                        },
                        {
                            name: 'Armor bonus duration',
                            suffix: 's',
                            base(augEffects, augRank) { return 2 + augEffects * (augRank + 1) }
                        },
                    ],
                    range: [
                        {
                            name: '1st charge range',
                            suffix: 'm',
                            base: 12
                        },
                        {
                            name: '2nd charge range',
                            suffix: 'm',
                            base: 15
                        },
                        {
                            name: '3rd+ charge range',
                            suffix: 'm',
                            base: 18
                        },
                        {
                            name: 'Impact radius',
                            suffix: 'm',
                            base: 2
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy cost of 1st charge',
                            base: 25
                        },
                        {
                            name: 'Energy cost of 2nd charge',
                            base: 12.5
                        },
                        {
                            name: 'Energy cost of 3rd+ charge',
                            base: 6.25
                        },
                    ],
                }
            ]
        },
        description() { return `Rhino Charge Augment: Each enemy hit increases Rhino's Armor Rating by ${this.effects.none[0] * (this.currRank + 1)}% for ${2 + this.effects.none[1] * (this.currRank + 1)}s.` }
    },
    {
        abrev: 'l0',
        name: 'Irradiating Disarm',
        img: require('../assets/modimages/irradiating-disarm.jpg'),
        type: 'LOKI',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [4, 5, 7, 9] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 3,
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 20,
                            icon: require('../assets/dynamic/damage/Impact.png')
                        }
                    ],
                    duration: [
                        {
                            name: 'Confusion duration',
                            suffix: 's',
                            base(augEffects, augRank) { return augEffects[augRank] }
                        }
                    ],
                    range: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 20
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 100
                        }
                    ],
                }
            ]
        },
        description() { return `Radial Disarm Augment: Enemies will be affected by Radiation for ${this.effects.none[this.currRank]}s.` }
    },
    {
        abrev: 'l1',
        name: 'Jet Stream',
        img: require('../assets/modimages/jet-stream.jpg'),
        type: 'ZEPHYR',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [[20, 25, 30, 40], [50, 65, 80, 100]] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 2,
            details: [
                {
                    strength: [
                        {
                            name: 'Movement speed bonus',
                            suffix: '%',
                            base(augEffects, augRank) { return augEffects.none[0][augRank] }
                        },
                        {
                            name: 'Projectile speed bonus',
                            suffix: '%',
                            base(augEffects, augRank) { return augEffects.none[1][augRank] }
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 20
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 6
                        }
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
        description() { return `Turbulence Augment: Turbulence increases Movement Speed by ${this.effects.none[0][this.currRank]}% and Projectile Speed by ${this.effects.none[1][this.currRank]}% for Zephyr and her allies.` }
    },
    {
        abrev: 'l2',
        name: 'Kinetic Collision',
        img: require('../assets/modimages/kinetic-collision.jpg'),
        type: 'VOLT',
        conclave: true,
        conclaveOnly: true,
        rarity: 'rare',
        polarity: 'zenurik',
        effects: {},
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Speed Augment: Running into an opponent increases the duration of Speed by ${this.currRank + 1}s.` }
    },
    {
        abrev: 'l3',
        name: 'Larva Burst',
        img: require('../assets/modimages/larva-burst.jpg'),
        type: 'NIDUS',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [[150, 200, 250, 300], [1, 2, 3, 5]] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 1,
            details: [
                {
                    strength: [
                        {
                            name: 'Detonation damage / Enemy',
                            base(augEffects, augRank) { return augEffects.none[0][augRank] },
                            icon: require('../assets/dynamic/damage/Toxin.png')
                        }
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 7
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 12
                        },
                        {
                            name: 'Detonation radius',
                            suffix: 'm',
                            base(augEffects, augRank) { return augEffects.none[1][augRank] }
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                }
            ]
        },
        description() { return `Larva Augment: Reactivate Larva to detonate and deal ${this.effects.none[0][this.currRank]} Toxin Damage in a ${this.effects.none[1][this.currRank]}m radius. This damage stacks for every enemy grabbed by the Larva.` }
    },
    {
        abrev: 'l4',
        name: 'Lasting Covenant',
        img: require('../assets/modimages/lasting-covenant.jpg'),
        type: 'HARROW',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [1, 1.5, 2, 3] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 3,
            details: [
                {
                    strength: [
                        {
                            name: 'Critical Chance / 100 damage absorbed',
                            suffix: '%',
                            base: 1.5
                        },
                    ],
                    duration: [
                        {
                            name: 'Invulnerabilty duration',
                            suffix: 's',
                            base: 6
                        },
                        {
                            name: 'Critical chance buff duration',
                            suffix: 's',
                            base: 12
                        },
                        {
                            name: 'Headshot kill bonus duration',
                            suffix: 's',
                            base(augEffects, augRank) { return augEffects.none[augRank] }
                        },
                        {
                            name: 'Maximum bonus duration',
                            suffix: 's',
                            base: 36
                        },
                    ],
                    none: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 50
                        },
                        {
                            name: 'Headshot multiplier',
                            suffix: 'x',
                            base: 4
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 100
                        }
                    ],
                }
            ]
        },
        description() { return `Covenant Augment: Headshot kills increase Critical Chance bonus duration by ${this.effects.none[this.currRank]}s.` }
    },
    {
        abrev: 'l5',
        name: 'Lightning Dash',
        img: require('../assets/modimages/lightning-dash.jpg'),
        type: 'EXILUS',
        exilus: true,
        rarity: 'rare',
        polarity: 'madurai',
        effects: { none: [2.2, 25] },
        maxRank: 10,
        currRank: 10,
        baseCost: 2,
        description() { return `+${Math.round(this.effects.none[0] * (this.currRank + 1) * 10) / 10}% to Bullet Jump +$${Math.round(this.effects.none[0] * (this.currRank + 1) * 10) / 10}% Aim Glide and Wall Latch +${this.effects.none[1] * (this.currRank + 1)}% Electricity on Bullet Jump` }
    },
    {
        abrev: 'l6',
        name: 'Lightning Rod',
        img: require('../assets/modimages/lightning-rod.jpg'),
        type: 'WARFRAME',
        rarity: 'common',
        polarity: 'vazarin',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        description() { return `+${10 * (this.currRank + 1)}% Electricity Resistance` }
    },
    {
        abrev: 'l7',
        name: 'Loot Detector',
        img: require('../assets/modimages/loot-detector.jpg'),
        type: 'AURA',
        aura: true,
        rarity: 'uncommon',
        polarity: 'naramon',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `Minimap shows loot crates. +${5 * (this.currRank + 1)} Loot Radar` }
    },
    {
        abrev: 'l8',
        name: 'Maglev',
        img: require('../assets/modimages/maglev.jpg'),
        type: 'EXILUS',
        exilus: true,
        rarity: 'uncommon',
        polarity: 'naramon',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 6,
        description() { return `+${5 * (this.currRank + 1)}% Slide -${5 * (this.currRank + 1)}% Friction` }
    },
    {
        abrev: 'l9',
        name: 'Magnetized Discharge',
        img: require('../assets/modimages/magnetized-discharge.jpg'),
        type: 'MAG',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: 12.5 },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 1,
            details: [
                {
                    strength: [
                        {
                            name: 'Damage multiplier',
                            suffix: 'x',
                            base: 2
                        },
                        {
                            name: 'Explosion damage',
                            base: 300,
                            icon: require('../assets/dynamic/damage/Magnetic.png')
                        },
                        {
                            name: 'Disarm chance',
                            suffix: '%',
                            base(augEffects, augRank) { return augEffects.none * (augRank + 1) },
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 15
                        }
                    ],
                    range: [
                        {
                            name: 'Field radius',
                            suffix: 'm',
                            base: 4
                        },
                        {
                            name: 'Explosion radius',
                            suffix: 'm',
                            base: 15
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        }
                    ],
                }
            ]
        },
        description() { return `Magnetize Augment: Manually detonate Magnetize by recasting on the target. Enemies hit have a ${this.effects.none * (this.currRank + 1)}% chance to become disarmed.` }
    },
    {
        abrev: 'm0',
        name: 'Master Thief',
        img: require('../assets/modimages/master-thief.jpg'),
        type: 'EXILUS',
        exilus: true,
        rarity: 'rare',
        polarity: 'naramon',
        effects: {},
        maxRank: 3,
        currRank: 3,
        baseCost: 10,
        description() { return `+${10 * (this.currRank + 1)}% chance to unlock locked lockers` }
    },
    {
        abrev: '0q',
        name: 'Mecha Empowered',
        img: require('../assets/modimages/mecha-empowered.jpg'),
        type: 'AURA',
        aura: true,
        rarity: 'rare',
        polarity: 'naramon',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        set: { setName: 'mecha', setMax: 4, setCurr: 1 },
        description() { return [`+${25 * (this.currRank + 1)}% Extra Damage against a Marked Enemy`, `Kubrow Marks an enemy every ${60 - (15 * (this.set.setCurr - 1))}s for ${3 * this.set.setCurr}s. Kill them to apply their Status Effects to all enemies within ${7.5 * this.set.setCurr}m.`] }
    },
    {
        abrev: '0r',
        name: 'Mecha Pulse',
        img: require('../assets/modimages/mecha-pulse.jpg'),
        type: 'WARFRAME',
        rarity: 'rare',
        polarity: 'madurai',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        set: { setName: 'mecha', setMax: 4, setCurr: 1 },
        description() { return [`Killing a Marked Enemy grants +${15 * (this.currRank + 1)}% Armor for ${5 * (this.currRank + 1)}s for each enemy within ${7.5 * (this.currRank + 1)}m`, `Kubrow Marks an enemy every ${60 - (15 * (this.set.setCurr - 1))}s for ${3 * this.set.setCurr}s. Kill them to apply their Status Effects to all enemies within ${7.5 * this.set.setCurr}m.`] }
    },
    {
        abrev: 'm1',
        name: 'Mending Splinters',
        img: require('../assets/modimages/mending-splinters.jpg'),
        type: 'GARA',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [1.5, 2, 2.5, 3] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 1,
            details: [
                {
                    exception: [
                        {
                            name: 'Damage reduction',
                            suffix: '%',
                            base: 70
                        },
                    ],
                    strength: [
                        {
                            name: 'Damage multiplier',
                            suffix: '%',
                            base: 35
                        },
                        {
                            name: 'Damage/s',
                            base: 250
                        },
                        {
                            name: 'Health/s / Target',
                            base(augEffects, augRank) { return augEffects.none[augRank] }
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 22
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 2.5
                        },
                        {
                            name: 'Cast range',
                            suffix: 'm',
                            base: 30
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        }
                    ],
                }
            ]
        },
        description() { return `Splinter Storm Augment: For each target affected, Splinter Storm heals ${this.effects.none[this.currRank]} Health/s.` }
    },
    {
        abrev: 'm2',
        name: 'Mesa\'s Waltz',
        img: require('../assets/modimages/mesa\'s-waltz.jpg'),
        type: 'MESA',
        exilus: true,
        conclave: true,
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [35, 40, 45, 50] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Peacemaker Augment: Mesa can move at ${this.effects.none[this.currRank]}% Speed while using Peacemaker.` }
    },
    {
        abrev: 'm3',
        name: 'Mind Freak',
        img: require('../assets/modimages/mind-freak.jpg'),
        type: 'NYX',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [200, 300, 400, 500] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 0,
            details: [
                {
                    strength: [
                        {
                            name: 'Damage bonus',
                            suffix: '%',
                            base(augEffects, augRank) { return augEffects.none[augRank] }
                        }
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 30
                        }
                    ],
                    range: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 60
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                }
            ]
        },
        description() { return `Mind Control Augment: Controlled target inflicts +${this.effects.none[this.currRank]}% Damage.` }
    },
    {
        abrev: 'm4',
        name: 'Mobilize',
        img: require('../assets/modimages/mobilize.jpg'),
        type: 'EXILUS',
        exilus: true,
        rarity: 'uncommon',
        polarity: 'naramon',
        effects: { none: 5 },
        maxRank: 3,
        currRank: 3,
        baseCost: 2,
        description() { return `+${this.effects.none * (this.currRank + 1)}% to Bullet Jump +${this.effects.none * (this.currRank + 1)}% Aim Glide and Wall Latch` }
    },
    {
        abrev: 'm5',
        name: 'Muzzle Flash',
        img: require('../assets/modimages/muzzle-flash.jpg'),
        type: 'MESA',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: {},
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 1,
            details: [
                {
                    strength: [
                        {
                            name: 'Damage bonus',
                            suffix: '%',
                            base: 25,
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 30
                        },
                        {
                            name: 'Blind duration',
                            suffix: 's',
                            base(augEffects, augRank) { return 4 + augRank }
                        },
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 16
                        },
                        {
                            name: 'Blind radius',
                            suffix: 'm',
                            base(augEffects, augRank) { return 5 + augRank }
                        },
                    ],
                    none: [
                        {
                            name: 'Ally rotation interval',
                            suffix: 's',
                            base: 1.5
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        }
                    ],
                }
            ]
        },
        description() { return `Shooting Gallery Augment: Does a burst before switching between players, blinding enemies within ${5 + this.currRank}m for ${4 + this.currRank}s.` }
    },
    {
        abrev: 'm6',
        name: 'Narrow Minded',
        img: require('../assets/modimages/narrow-minded.jpg'),
        type: 'WARFRAME',
        rarity: 'rare',
        polarity: 'vazarin',
        effects: { duration: 0.09, range: -0.06 },
        maxRank: 10,
        currRank: 10,
        baseCost: 6,
        description() { return `+${Math.round(this.effects.duration * (this.currRank + 1) * 100)}% Ability Duration ${Math.round(this.effects.range * (this.currRank + 1) * 100)}% Ability Range` }
    },
    {
        abrev: 'm7',
        name: 'Natural Talent',
        img: require('../assets/modimages/natural-talent.jpg'),
        type: 'WARFRAME',
        rarity: 'rare',
        polarity: 'naramon',
        effects: { none: 12.5 },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Improves Casting Speed on Warframe abilities if applicable. +${this.effects.none * (this.currRank + 1)}% Casting Speed` }
    },
    {
        abrev: 'm8',
        name: 'Negation Swarm',
        img: require('../assets/modimages/negation-swarm.jpg'),
        type: 'INAROS',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [6, 5, 4, 3] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Scarab Swarm Augment: Scarab Armor protects Inaros from Status Effects, consuming ${this.effects.none[this.currRank]}% Bonus Armor for each effect resisted.` }
    },
    {
        abrev: 'm9',
        name: 'Neutron Star',
        img: require('../assets/modimages/neutron-star.jpg'),
        type: 'NOVA',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: {},
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
                            base: 200,
                            icon: require('../assets/dynamic/damage/Slash.png')
                        },
                        {
                            name: 'Detonation damage',
                            base(augEffects, augRank) { return 60 + 20 * augRank },
                            icon: require('../assets/dynamic/damage/Blast.png')
                        },
                    ],
                    duration: [
                        {
                            name: 'Antimatter particles',
                            base: 6
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 12
                        },
                        {
                            name: 'Detonation radius',
                            suffix: 'm',
                            base(augEffects, augRank) { return 4 + 1 * augRank }
                        },
                    ],
                    none: [
                        {
                            name: 'Damage reduction / particle',
                            suffix: '%',
                            base: 5
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                }
            ]
        },
        description() { return `Null Star Augment: Recasting Null Star will make all remaining particles explode, causing ${60 + 20 * this.currRank} Blast Damage with guaranteed Proc in ${4 + 1 * this.currRank}m.` }
    },
    {
        abrev: 'n0',
        name: 'No Current Leap',
        img: require('../assets/modimages/no-current-leap.jpg'),
        type: 'WARFRAME',
        conclave: true,
        conclaveOnly: true,
        rarity: 'uncommon',
        polarity: 'naramon',
        effects: {},
        maxRank: 3,
        currRank: 3,
        baseCost: 2,
        description() { return `+${2.5 * (this.currRank + 1)}% Mobility 0 Energy Rate` }
    },
    {
        abrev: 'n1',
        name: 'Ore Gaze',
        img: require('../assets/modimages/ore-gaze.jpg'),
        type: 'ATLAS',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [10, 15, 20, 25] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 2,
            details: [
                {
                    strength: [
                        {
                            name: 'Additional loot chance',
                            suffix: '%',
                            base(augEffects, augRank) { return augEffects.none[augRank] }
                        }
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 20
                        }
                    ],
                    range: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 15
                        }
                    ],
                    none: [
                        {
                            name: 'Angle',
                            suffix: '°',
                            base: 60
                        },
                        {
                            name: 'Damage vulnerability',
                            suffix: '%',
                            base: 50
                        },
                        {
                            name: 'Rubble drop per enemy',
                            base: 1
                        },
                        {
                            name: 'Rumbler heal',
                            suffix: '%',
                            base: 100
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 75
                        }
                    ],
                }
            ]
        },
        description() { return `Petrify Augment: Petrified enemies are scanned into the Codex and have a ${this.effects.none[this.currRank]}% chance to drop additional loot when killed.` }
    },
    {
        abrev: 'n2',
        name: 'Overcharge Detectors',
        img: require('../assets/modimages/overcharge-detectors.jpg'),
        type: 'EXILUS',
        exilus: true,
        conclave: true,
        conclaveOnly: true,
        rarity: 'uncommon',
        polarity: 'naramon',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `Exposes enemies at maximum Energy Capacity within ${7.5 * (this.currRank + 1)}m.` }
    },
    {
        abrev: 'n3',
        name: 'Overcharged',
        img: require('../assets/modimages/overcharged.jpg'),
        type: 'WARFRAME',
        rarity: 'rare',
        polarity: 'vazarin',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 10,
        description() { return `On Respawn: Converts up to 25 Energy to Overshields at a rate of ${Math.round(1 / 3 * 100 * (this.currRank + 1))}%.` }
    },
    {
        abrev: 'n4',
        name: 'Overextended',
        img: require('../assets/modimages/overextended.jpg'),
        type: 'WARFRAME',
        rarity: 'rare',
        polarity: 'vazarin',
        effects: { range: 0.15, strength: -0.1 },
        maxRank: 5,
        currRank: 5,
        baseCost: 6,
        description() { return `+${Math.round(this.effects.range * (this.currRank + 1) * 100)}% Ability Range ${Math.round(this.effects.strength * (this.currRank + 1) * 100)}% Ability Strength` }
    },
    {
        abrev: 'n5',
        name: 'Pacifying Bolts',
        img: require('../assets/modimages/pacifying-bolts.jpg'),
        type: 'NYX',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: {},
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 1,
            details: [
                {
                    strength: [
                        {
                            name: 'Bolt damage',
                            base: 200,
                            icon: require('../assets/dynamic/damage/Slash.png')
                        },
                        {
                            name: 'Area damage',
                            base: 15,
                            icon: require('../assets/dynamic/damage/Radiation.png')
                        },
                    ],
                    duration: [
                        {
                            name: 'Confusion duration',
                            suffix: 's',
                            base(augEffects, augRank) { return 4 + 2 * augRank }
                        }
                    ],
                    none: [
                        {
                            name: 'Bolts',
                            base: 6
                        },
                        {
                            name: 'Targeting radius',
                            suffix: 'm',
                            base: 60
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        }
                    ],
                }
            ]
        },
        description() { return `Psychic Bolts Augment: Affected enemies will be confused for ${4 + 2 * this.currRank}s.` }
    },
    {
        abrev: 'n6',
        name: 'Pain Threshold',
        img: require('../assets/modimages/pain-threshold.jpg'),
        type: 'EXILUS',
        exilus: true,
        rarity: 'rare',
        polarity: 'naramon',
        effects: {},
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `+${40 * (this.currRank + 1)}% Faster Stagger Recovery` }
    },
    {
        abrev: 'n7',
        name: 'Partitioned Mallet',
        img: require('../assets/modimages/partitioned-mallet.jpg'),
        type: 'OCTAVIA',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [[75, 65, 60, 50], [2.5, 3.5, 4, 5]] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 0,
            details: [
                {
                    strength: [
                        {
                            name: 'Damage multiplier',
                            suffix: 'x',
                            base: 2.5,
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 20
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base(augEffects, augRank) { return augEffects.none[1][augRank] }
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                }
            ]
        },
        description() { return `Mallet Augment: Allows for two simultaneous Mallets, each with ${this.effects.none[0][this.currRank]}% reduced range.` }
    },
    {
        abrev: 'n8',
        name: 'Patagium',
        img: require('../assets/modimages/patagium.jpg'),
        type: 'EXILUS',
        exilus: true,
        rarity: 'uncommon',
        polarity: 'naramon',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `+${15 * (this.currRank + 1)}% Aim Glide and Wall Latch` }
    },
    {
        abrev: 'n9',
        name: 'Path Of Statues',
        img: require('../assets/modimages/path-of-statues.jpg'),
        type: 'ATLAS',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [[7, 8, 10, 12], [4, 5, 5, 6]] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 0,
            details: [
                {
                    strength: [
                        {
                            name: '1st hit damage',
                            base: 350,
                            icon: require('../assets/dynamic/damage/Impact.png')
                        },
                        {
                            name: '2nd hit damage',
                            base: 700,
                            icon: require('../assets/dynamic/damage/Impact.png')
                        },
                        {
                            name: '3rd+ hit damage',
                            base: 1400,
                            icon: require('../assets/dynamic/damage/Impact.png')
                        },
                    ],
                    exception: [
                        {
                            name: 'Combo window',
                            suffix: 's',
                            base: 1
                        }
                    ],
                    duration: [
                        {
                            name: 'Trail duration',
                            suffix: 's',
                            base(augEffects, augRank) { return augEffects.none[0][augRank] }
                        },
                        {
                            name: 'Petrify duration',
                            suffix: 's',
                            base(augEffects, augRank) { return augEffects.none[1][augRank] }
                        },
                    ],
                    range: [
                        {
                            name: '1st hit radius',
                            suffix: 'm',
                            base: 2
                        },
                        {
                            name: '2nd hit radius',
                            suffix: 'm',
                            base: 4
                        },
                        {
                            name: '3rd+ hit radius',
                            suffix: 'm',
                            base: 6
                        },
                    ],
                    none: [
                        {
                            name: 'Dash range',
                            suffix: 'm',
                            base: 15
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy cost of 1st hit',
                            base: 25
                        },
                        {
                            name: 'Energy cost of 2nd hit',
                            base: 12.5
                        },
                        {
                            name: 'Energy cost of 3rd+ hit',
                            base: 6.25
                        },
                    ],
                }
            ]
        },
        description() { return `Landslide Augment: Leave a trail for ${this.effects.none[0][this.currRank]}s that petrifies enemies for ${this.effects.none[1][this.currRank]}s.` }
    },
    {
        abrev: 'o0',
        name: 'Peaceful Provocation',
        img: require('../assets/modimages/peaceful-provocation.jpg'),
        type: 'EQUINOX',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [[20, 30, 35, 40], [6, 9, 12, 15]] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 2,
            details: [
                {
                    mode: 'Pacify',
                    exception: [
                        {
                            name: 'Enemy damage',
                            suffix: '%',
                            base: 50
                        },
                        {
                            name: 'Slow',
                            suffix: '%',
                            base(augEffects, augRank) { return augEffects.none[0][augRank] }
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 16
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 10
                        }
                    ],
                    channel: [
                        {
                            name: 'Energy drain / enemy /s',
                            base: 0.5
                        }
                    ]
                },
                {
                    mode: 'Provoke',
                    exception: [
                        {
                            name: 'Power strength bonus',
                            suffix: '%',
                            base: 20
                        },
                        {
                            name: 'Extra power strength bonus',
                            suffix: '%',
                            base(augEffects, augRank) { return augEffects.none[1][augRank] }
                        },
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 16
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 10
                        }
                    ],
                    channel: [
                        {
                            name: 'Energy drain / ability cast',
                            base: 0.5
                        }
                    ]
                },
            ]
        },
        description() { return `Pacify & Provoke Augment: Pacify converts damage taken into an aura that slows enemies by ${this.effects.none[0][this.currRank]}%. Provoke converts damage done into ${this.effects.none[1][this.currRank]}% extra Ability Strength.` }
    },
    {
        abrev: 'o1',
        name: 'Peculiar Bloom',
        img: require('../assets/modimages/peculiar-bloom.jpg'),
        type: 'WARFRAME',
        rarity: 'uncommon',
        polarity: 'naramon',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `Critical hits cause flowers to grow from the wounds.` }
    },
    {
        abrev: 'o2',
        name: 'Peculiar Growth',
        img: require('../assets/modimages/peculiar-growth.jpg'),
        type: 'WARFRAME',
        rarity: 'uncommon',
        polarity: 'naramon',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `Damaging an enemy will inflate the body part hit for ${this.currRank + 1}s.` }
    },
    {
        abrev: 'o3',
        name: 'Perpetual Vortex',
        img: require('../assets/modimages/perpetual-vortex.jpg'),
        type: 'VAUBAN',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [50, 55, 60, 70] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Vortex Augment: Vortex's duration is increased by ${this.effects.none[this.currRank]}% of its Maximum Duration for each additional Vortex thrown into it.` }
    },
    {
        abrev: 'o4',
        name: 'Phoenix Renewal',
        img: require('../assets/modimages/phoenix-renewal.jpg'),
        type: 'OBERON',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [20, 30, 35, 50] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 2,
            details: [
                {
                    strength: [
                        {
                            name: 'Initial heal',
                            base: 125,
                        },
                        {
                            name: 'Health/s',
                            base: 40,
                        },
                        {
                            name: 'Armor buff',
                            base: 200,
                        },
                        {
                            name: 'Phoenix renewal heal',
                            suffix: '%',
                            base(augEffects, augRank) { return augEffects.none[augRank] }
                        },
                    ],
                    duration: [
                        {
                            name: 'Bleedout slowdown',
                            suffix: '%',
                            base: 45
                        },
                        {
                            name: 'Armor buff duration',
                            suffix: 's',
                            base: 20
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 25
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                    channel: [
                        {
                            name: 'Energy drain/s',
                            base: 2
                        },
                        {
                            name: 'Energy drain /s /ally',
                            base: 3
                        },
                    ]
                }
            ]
        },
        description() { return `Renewal Augment: Taking fatal damage while under the effects of Renewal will instead Heal you or allies to ${this.effects.none[this.currRank]}% Health. This effect triggers only once for each ally every 90s.` }
    },
    {
        abrev: 'o5',
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
        abrev: 'o6',
        name: 'Piercing Navigator',
        img: require('../assets/modimages/piercing-navigator.jpg'),
        type: 'IVARA',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: {},
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Navigator Augment: Each hit increases the projectile's Critical Chance by ${2.5 * (this.currRank + 1)}% up to a max of 50%.` }
    },
    {
        abrev: 'o7',
        name: 'Piercing Roar',
        img: require('../assets/modimages/piercing-roar.jpg'),
        type: 'RHINO',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [10, 15, 20, 25] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 2,
            details: [
                {
                    strength: [
                        {
                            name: 'Damage multiplier',
                            suffix: '%',
                            base: 50,
                        },
                        {
                            name: 'Damage',
                            base: 150,
                            icon: require('../assets/dynamic/damage/Puncture.png')
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 30
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 25
                        },
                        {
                            name: 'Puncture radius',
                            suffix: 'm',
                            base(augEffects, augRank) { return augEffects.none[augRank] }
                        }
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
        description() { return `Roar Augment: Enemies within ${this.effects.none[this.currRank]}m will suffer from a Puncture Proc.` }
    },
    {
        abrev: 'o8',
        name: 'Piercing Step',
        img: require('../assets/modimages/piercing-step.jpg'),
        type: 'EXILUS',
        exilus: true,
        rarity: 'uncommon',
        polarity: 'naramon',
        effects: { none: [0.03, 0.1] },
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.none[0] * (this.currRank + 1) * 100)}% to Bullet Jump +${Math.round(this.effects.none[0] * (this.currRank + 1) * 100)}% Aim Glide and Wall Latch +${Math.round(this.effects.none[1] * (this.currRank + 1) * 100)}% Puncture on Bullet Jump` }
    },
    {
        abrev: 'o9',
        name: 'Pilfering Swarm',
        img: require('../assets/modimages/pilfering-swarm.jpg'),
        type: 'HYDROID',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: {},
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Tentacle Swarm Augment: Enemies held by tentacles have a ${25 * (this.currRank + 1)}% chance at additional drops.` }
    },
    {
        abrev: 'p0',
        name: 'Pistol Amp',
        img: require('../assets/modimages/pistol-amp.jpg'),
        type: 'AURA',
        aura: true,
        rarity: 'uncommon',
        polarity: 'madurai',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `Pistol damage increased. +${4.5 * (this.currRank + 1)}% Damage` }
    },
    {
        abrev: 'p1',
        name: 'Pistol Scavenger',
        img: require('../assets/modimages/pistol-scavenger.jpg'),
        type: 'AURA',
        aura: true,
        rarity: 'uncommon',
        polarity: 'naramon',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `Increased Pistol Ammo recovery. +${25 * (this.currRank + 1)}% Ammo Pickup` }
    },
    {
        abrev: 'p2',
        name: 'Pool Of Life',
        img: require('../assets/modimages/pool-of-life.jpg'),
        type: 'TRINITY',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [10, 15, 20, 25] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 0,
            details: [
                {
                    strength: [
                        {
                            name: 'Lifesteal',
                            suffix: '%',
                            base: 45,
                        },
                        {
                            name: 'Lifesteal cap',
                            base: 400,
                        },
                        {
                            name: 'Chance to drop energy orb',
                            suffix: '%',
                            base(augEffects, augRank) { return augEffects.none[augRank] }
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 12
                        }
                    ],
                    range: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 100
                        }
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
        description() { return `Well of Life Augment: On death, marked enemies will drop ${this.currRank + 1} Health Orbs with a ${this.effects.none[this.currRank]}% chance of dropping an Energy Orb.` }
    },
    {
        abrev: 'p3',
        name: 'Power Donation',
        img: require('../assets/modimages/power-donation.jpg'),
        type: 'AURA',
        aura: true,
        rarity: 'rare',
        polarity: 'madurai',
        effects: { strength: -0.05 },
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        description() { return `${Math.round(this.effects.strength * (this.currRank + 1) * 100)}% Ability Strength +${5 * (this.currRank + 1)}% Ability Strength of Squadmates` }
    },
    {
        abrev: 'p4',
        name: 'Power Drift',
        img: require('../assets/modimages/power-drift.jpg'),
        type: 'EXILUS',
        exilus: true,
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { strength: 0.025 },
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.strength * (this.currRank + 1) * 1000) / 10}% Ability Strength +${5 * (this.currRank + 1)}% Chance to Resist Knockdown` }
    },
    {
        abrev: 'p5',
        name: 'Power Of Three',
        img: require('../assets/modimages/power-of-three.jpg'),
        type: 'IVARA',
        conclave: true,
        conclaveOnly: true,
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [50, 40, 30, 20] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Quiver Augment: Quiver fires three arrows and consumes ${this.effects.none[this.currRank]} more Energy.` }
    },
    {
        abrev: 'p6',
        name: 'Primal Rage',
        img: require('../assets/modimages/primal-rage.jpg'),
        type: 'WUKONG',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [6, 7, 8, 10] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 3,
            details: [
                {
                    strength: [
                        {
                            name: 'Base damage',
                            base: 250,
                        },
                        {
                            name: 'Critical chance bonus / Kill',
                            suffix: '%',
                            base(augEffects, augRank) { return augEffects.none[augRank] }
                        },
                    ],
                    inverse: [
                        {
                            name: 'Critical chance bonus decay/s',
                            suffix: '%',
                            base: 1
                        }
                    ],
                    range: [
                        {
                            name: 'Melee range bonus',
                            suffix: '%',
                            base: 20
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        },
                    ],
                    channel: [
                        {
                            name: 'Energy drain/s',
                            base: 3
                        }
                    ]
                }
            ]
        },
        description() { return `Primal Fury Augment: Killing an enemy increases Critical Chance by ${this.effects.none[this.currRank]}%. The increase decays by 1%/s` }
    },
    {
        abrev: 'p7',
        name: 'Primed Continuity',
        img: require('../assets/modimages/primed-continuity.jpg'),
        type: 'WARFRAME',
        rarity: 'prime',
        polarity: 'madurai',
        effects: { duration: 0.05 },
        maxRank: 10,
        currRank: 10,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.duration * (this.currRank + 1) * 100)}% Ability Duration` }
    },
    {
        abrev: 'p8',
        name: 'Primed Flow',
        img: require('../assets/modimages/primed-flow.jpg'),
        type: 'WARFRAME',
        rarity: 'prime',
        polarity: 'naramon',
        effects: { energy: 0.25 },
        maxRank: 10,
        currRank: 10,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.energy * (this.currRank + 1) * 100)}% Energy Max` }
    },
    {
        abrev: 'p9',
        name: 'Primed Sure Footed',
        img: require('../assets/modimages/primed-sure-footed.jpg'),
        type: 'EXILUS',
        exilus: true,
        rarity: 'prime',
        polarity: 'vazarin',
        effects: {},
        maxRank: 10,
        currRank: 10,
        baseCost: 6,
        description() { return `+${Math.round(9.090909 * (this.currRank + 1))}% Chance to Resist Knockdown` }
    },
    {
        abrev: 'q0',
        name: 'Primed Vigor',
        img: require('../assets/modimages/primed-vigor.jpg'),
        type: 'WARFRAME',
        rarity: 'prime',
        polarity: 'vazarin',
        effects: { health: 0.2, shields: 0.2 },
        maxRank: 10,
        currRank: 10,
        baseCost: 6,
        description() { return `+${Math.round(this.effects.shields * (this.currRank + 1) * 100)}% Shield Capacity +${Math.round(this.effects.health * (this.currRank + 1) * 100)}% Health` }
    },
    {
        abrev: 'q1',
        name: 'Prism Guard',
        img: require('../assets/modimages/prism-guard.jpg'),
        type: 'MIRAGE',
        conclave: true,
        conclaveOnly: true,
        rarity: 'rare',
        polarity: 'zenurik',
        effects: {},
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Prism Augment: Prism follows above Mirage for ${this.currRank + 1}s.` }
    },
    {
        abrev: 'q2',
        name: 'Prolonged Paralysis',
        img: require('../assets/modimages/prolonged-paralysis.jpg'),
        type: 'VALKYR',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: {},
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 2,
            details: [
                {
                    strength: [
                        {
                            name: 'Shield damage multiplier',
                            suffix: 'x',
                            base: 3.5,
                        },
                        {
                            name: 'Stun duration bonus',
                            suffix: '%',
                            base(augEffects, augRank) { return 50 * (augRank + 1) }
                        },
                    ],
                    range: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 10
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 5
                        },
                    ],
                }
            ]
        },
        description() { return `Paralysis Augment: Affected enemies are pulled towards Valkyr and the stun duration is increased by ${50 * (this.currRank + 1)}%.` }
    },
    {
        abrev: 'q3',
        name: 'Provoked',
        img: require('../assets/modimages/provoked.jpg'),
        type: 'WARFRAME',
        rarity: 'uncommon',
        polarity: 'madurai',
        effects: {},
        maxRank: 10,
        currRank: 10,
        baseCost: 4,
        description() { return `+${10 * (this.currRank + 1)}% Damage during Bleedout` }
    },
    {
        abrev: 'q4',
        name: 'Purging Slash',
        img: require('../assets/modimages/purging-slash.jpg'),
        type: 'EXCALIBUR',
        conclave: true,
        conclaveOnly: true,
        rarity: 'rare',
        polarity: 'zenurik',
        effects: {},
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Slash Dash Augment: Allies in the path of Slash Dash have ${this.currRank + 1} debuffs removed and ${25 * (this.currRank + 1)} Shields restored.` }
    },
    {
        abrev: 'q5',
        name: 'Purifying Flames',
        img: require('../assets/modimages/purifying-flames.jpg'),
        type: 'EMBER',
        conclave: true,
        conclaveOnly: true,
        rarity: 'rare',
        polarity: 'zenurik',
        effects: {},
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Fire Blast Augment: Allies that enter the fire will have up to ${this.currRank + 1} debuffs removed.` }
    },
    {
        abrev: 'q6',
        name: 'Push & Pull',
        img: require('../assets/modimages/push-&-pull.jpg'),
        type: 'EQUINOX',
        conclave: true,
        conclaveOnly: true,
        rarity: 'rare',
        polarity: 'zenurik',
        effects: {},
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Metamorphosis Augment: Switching to Day-form staggers enemies within ${1.5 * (this.currRank + 1)}m and knocks them down when switching to Night-form.` }
    },
    {
        abrev: 'q7',
        name: 'Pyroclastic Flow',
        img: require('../assets/modimages/pyroclastic-flow.jpg'),
        type: 'NEZHA',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [[75, 95, 120, 150], [6, 7, 8, 10]] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 0,
            details: [
                {
                    strength: [
                        {
                            name: 'Damage/s',
                            base: 200,
                            icon: require('../assets/dynamic/damage/Heat.png')
                        },
                        {
                            name: 'Explosion damage',
                            base: 1250,
                            icon: require('../assets/dynamic/damage/Heat.png')
                        },
                    ],
                    duration: [
                        {
                            name: 'Buff duration',
                            suffix: 's',
                            base: 30
                        },
                        {
                            name: 'Flame duration',
                            suffix: 's',
                            base: 10
                        },
                        {
                            name: 'Trail duration',
                            suffix: 's',
                            base(augEffects, augRank) { return augEffects.none[1][augRank] }
                        },
                    ],
                    range: [
                        {
                            name: 'Explosion radius',
                            suffix: 'm',
                            base: 6
                        }
                    ],
                    none: [
                        {
                            name: 'Speed bonus',
                            suffix: '%',
                            base: 25
                        },
                        {
                            name: 'Accumulation percentage',
                            suffix: '%',
                            base(augEffects, augRank) { return augEffects.none[0][augRank] }
                        },
                        {
                            name: 'Trail length',
                            suffix: 'm',
                            base: 20
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                }
            ]
        },
        description() { return `Fire Walker Augment: Accumulate ${this.effects.none[0][this.currRank]}% of the damage Fire Walker deals, unleashing it in a trail of fire that lasts ${this.effects.none[1][this.currRank]}s.` }
    },
    {
        abrev: 'q8',
        name: 'Quick Charge',
        img: require('../assets/modimages/quick-charge.jpg'),
        type: 'WARFRAME',
        conclave: true,
        conclaveOnly: true,
        rarity: 'rare',
        polarity: 'vazarin',
        effects: {},
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `${-5 * (this.currRank + 1)}% Shield Recharge ${-5 * (this.currRank + 1)} Shield Capacity` }
    },
    {
        abrev: 'q9',
        name: 'Quick Thinking',
        img: require('../assets/modimages/quick-thinking.jpg'),
        type: 'WARFRAME',
        rarity: 'rare',
        polarity: 'vazarin',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 10,
        description() { return `Drains Energy to stop Lethal Damage with ${40 * (this.currRank + 1)}% Efficiency.` }
    },
    {
        abrev: 'r0',
        name: 'Radiant Finish',
        img: require('../assets/modimages/radiant-finish.jpg'),
        type: 'EXCALIBUR',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [150, 200, 250, 300] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 1,
            details: [
                {
                    strength: [
                        {
                            name: 'Bonus finisher damage',
                            suffix: '%',
                            base(augEffects, augRank) { return augEffects.none[augRank] }
                        }
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 15
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 25
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        }
                    ],
                }
            ]
        },
        description() { return `Radial Blind Augment: Blinded enemies take ${this.effects.none[this.currRank]}% more Finisher Damage.` }
    },
    {
        abrev: 'r1',
        name: 'Rage',
        img: require('../assets/modimages/rage.jpg'),
        type: 'WARFRAME',
        rarity: 'rare',
        polarity: 'madurai',
        effects: {},
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Convert +${10 * (this.currRank + 1)}% of Damage on Health to Energy` }
    },
    {
        abrev: 'r2',
        name: 'Rapid Resilience',
        img: require('../assets/modimages/rapid-resilience.jpg'),
        type: 'WARFRAME',
        rarity: 'rare',
        polarity: 'vazarin',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 6,
        description() { return `-${12.5 * (this.currRank + 1)}% Status Duration on Self` }
    },
    {
        abrev: 'r3',
        name: 'Razorwing Blitz',
        img: require('../assets/modimages/razorwing-blitz.jpg'),
        type: 'TITANIA',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: 2 },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 3,
            details: [
                {
                    strength: [
                        {
                            name: 'Dex Pixia base damage',
                            base: 160,
                        },
                        {
                            name: 'Diwata base damage',
                            base: 200,
                        },
                        {
                            name: 'Razorfly damage',
                            base: 80,
                        },
                        {
                            name: 'Increased flight & fire speed',
                            suffix: '%',
                            base: 25,
                        },
                    ],
                    duration: [
                        {
                            name: 'Blitz duration',
                            suffix: 's',
                            base(augEffects, augRank) { return augEffects.none * (augRank + 1) }
                        }
                    ],
                    none: [
                        {
                            name: 'RazorFlies',
                            base: 6
                        },
                        {
                            name: 'Evasion',
                            suffix: '%',
                            base: 50
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
        description() { return `Razorwing Augment: Flight Speed increased by 25% and Fire Rate increased by 25% for ${this.effects.none * (this.currRank + 1)}s when using abilities. Stacks up to 4x.` }
    },
    {
        abrev: 'r4',
        name: 'Reaping Chakram',
        img: require('../assets/modimages/reaping-chakram.jpg'),
        type: 'NEZHA',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [[1.25, 1.5, 1.75, 2], [0.1, 0.15, 0.2, 0.25]] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Blazing Chakram Augment: Each enemy hit increases the ring's Damage by ${this.effects.none[0][this.currRank]}x and the chance for enemies to drop Health Orbs on death by +${this.effects.none[1][this.currRank]}x.` }
    },
    {
        abrev: 'r5',
        name: 'Recharge Barrier',
        img: require('../assets/modimages/recharge-barrier.jpg'),
        type: 'VOLT',
        conclave: true,
        conclaveOnly: true,
        rarity: 'rare',
        polarity: 'zenurik',
        effects: {},
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Electric Shield Augment: Allies that pass through have ${25 * (this.currRank + 1)} Shields restored.` }
    },
    {
        abrev: 'r6',
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
        abrev: 'r7',
        name: 'Reflection',
        img: require('../assets/modimages/reflection.jpg'),
        type: 'WARFRAME',
        rarity: 'common',
        polarity: 'vazarin',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `${16 * (this.currRank + 1)}% Damage taken is reflected when Blocking attacks while Channeling.` }
    },
    {
        abrev: 'r8',
        name: 'Reflex Guard',
        img: require('../assets/modimages/reflex-guard.jpg'),
        type: 'WARFRAME',
        rarity: 'rare',
        polarity: 'vazarin',
        effects: {},
        maxRank: 10,
        currRank: 10,
        baseCost: 4,
        description() { return `+${5 * (this.currRank + 1)}% Auto Parry Chance` }
    },
    {
        abrev: 'r9',
        name: 'Regenerative Molt',
        img: require('../assets/modimages/regenerative-molt.jpg'),
        type: 'SARYN',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [20, 30, 40, 50] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 1,
            details: [
                {
                    strength: [
                        {
                            name: 'Decoy health',
                            base: 500,
                        },
                        {
                            name: 'Explosion damage',
                            base: 500,
                            icon: require('../assets/dynamic/damage/Toxin.png')
                        },
                        {
                            name: 'Speed multiplier',
                            suffix: 'x',
                            base: 1.5,
                        },
                        {
                            name: 'Health/s',
                            base(augEffects, augRank) { return augEffects.none[augRank] },
                        },
                    ],
                    duration: [
                        {
                            name: 'Decoy duration',
                            suffix: 's',
                            base: 40
                        },
                        {
                            name: 'Speed duration',
                            suffix: 's',
                            base: 5
                        },
                        {
                            name: 'Heal duration',
                            suffix: 's',
                            base: 10
                        },
                    ],
                    range: [
                        {
                            name: 'Explosion radius',
                            suffix: 'm',
                            base: 10
                        }
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
        description() { return `Molt Augment: After casting Molt, Saryn regenerates ${this.effects.none[this.currRank]} Health/s for 10s.` }
    },
    {
        abrev: 's0',
        name: 'Reinforcing Stomp',
        img: require('../assets/modimages/reinforcing-stomp.jpg'),
        type: 'RHINO',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [55, 60, 70, 80] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 3,
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 800,
                            icon: require('../assets/dynamic/damage/Blast.png')
                        },
                        {
                            name: 'Iron skin health restored / Enemy',
                            base(augEffects, augRank) { return augEffects.none[augRank] }
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 8
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 25
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 100
                        },
                    ],
                }
            ]
        },
        description() { return `Rhino Stomp Augment: Iron Skin Health is replenished by ${this.effects.none[this.currRank]} for each enemy affected.` }
    },
    {
        abrev: 's1',
        name: 'Rejuvenation',
        img: require('../assets/modimages/rejuvenation.jpg'),
        type: 'AURA',
        aura: true,
        rarity: 'uncommon',
        polarity: 'vazarin',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `Team Health regenerates. +${0.5 * (this.currRank + 1)} Heal Rate/s` }
    },
    {
        abrev: 's2',
        name: 'Rending Turn',
        img: require('../assets/modimages/rending-turn.jpg'),
        type: 'EXILUS',
        exilus: true,
        rarity: 'uncommon',
        polarity: 'madurai',
        effects: { none: [0.03, 0.1] },
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.none[0] * (this.currRank + 1) * 100)}% to Bullet Jump +${Math.round(this.effects.none[0] * (this.currRank + 1) * 100)}% Aim Glide and Wall Latch +${Math.round(this.effects.none[1] * (this.currRank + 1) * 100)}% Slash on Bullet Jump` }
    },
    {
        abrev: 's3',
        name: 'Repelling Bastille',
        img: require('../assets/modimages/repelling-bastille.jpg'),
        type: 'VAUBAN',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [50, 65, 80, 100] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Bastille Augment: Enemies within the Bastille have a ${this.effects.none[this.currRank]}% chance to be repelled every 4s.` }
    },
    {
        abrev: 's4',
        name: 'Resonance',
        img: require('../assets/modimages/resonance.jpg'),
        type: 'BANSHEE',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [50, 65, 80, 100] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Sonar Augment: Killing an enemy by shooting their weak spot will trigger another Sonar for ${this.effects.none[this.currRank]}% of remaining duration.` }
    },
    {
        abrev: 's5',
        name: 'Resonating Quake',
        img: require('../assets/modimages/resonating-quake.jpg'),
        type: 'BANSHEE',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [10, 12, 15, 20] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 3,
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base(augEffects, augRank) { return 200 * augEffects.none[augRank] },
                            icon: require('../assets/dynamic/damage/Blast.png')
                        },
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 35
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 100
                        }
                    ],
                }
            ]
        },
        description() { return `Sound Quake Augment: Forgoes channeling to create a shockwave that deals ${this.effects.none[this.currRank]}x Damage at the epicenter, gradually weakening as it expands out.` }
    },
    {
        abrev: 's6',
        name: 'Retribution',
        img: require('../assets/modimages/retribution.jpg'),
        type: 'EXILUS',
        exilus: true,
        rarity: 'rare',
        polarity: 'vazarin',
        effects: {},
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `+${15 * (this.currRank + 1)}% Chance to deal Electrical Damage when shield struck by melee enemies. +${20 * (this.currRank + 1)} Electricity` }
    },
    {
        abrev: 's7',
        name: 'Rifle Amp',
        img: require('../assets/modimages/rifle-amp.jpg'),
        type: 'AURA',
        aura: true,
        rarity: 'uncommon',
        polarity: 'madurai',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `Rifle damage increased. +${4.5 * (this.currRank + 1)}% Damage` }
    },
    {
        abrev: 's8',
        name: 'Rifle Scavenger',
        img: require('../assets/modimages/rifle-scavenger.jpg'),
        type: 'AURA',
        aura: true,
        rarity: 'uncommon',
        polarity: 'naramon',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `Increased Rifle Ammo recovery. +${25 * (this.currRank + 1)}% Ammo Pickup` }
    },
    {
        abrev: 's9',
        name: 'Rift Torrent',
        img: require('../assets/modimages/rift-torrent.jpg'),
        type: 'LIMBO',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [15, 20, 25, 30] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 2,
            details: [
                {
                    strength: [
                        {
                            name: 'Damage bonus / Enemy affected',
                            suffix: '%',
                            base(augEffects, augRank) { return augEffects.none[augRank] }
                        }
                    ],
                    duration: [
                        {
                            name: 'Surge duration',
                            suffix: 's',
                            base: 25
                        },
                        {
                            name: 'Banish duration',
                            suffix: 's',
                            base: 18
                        },
                    ],
                    range: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 25
                        },
                        {
                            name: 'Banish radius',
                            suffix: 'm',
                            base: 5
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        }
                    ],
                }
            ]
        },
        description() { return `Rift Surge Augment: Limbo deals ${this.effects.none[this.currRank]}% Extra Damage for each enemy affected by Rift Surge while in the rift.` }
    },
    {
        abrev: 't0',
        name: 'Rime Vault',
        img: require('../assets/modimages/rime-vault.jpg'),
        type: 'EXILUS',
        exilus: true,
        conclave: true,
        conclaveOnly: true,
        rarity: 'rare',
        polarity: 'madurai',
        effects: {},
        maxRank: 0,
        currRank: 0,
        baseCost: 0,
        description() { return `Ice FX on Bullet Jump` }
    },
    {
        abrev: 't1',
        name: 'Rising Skill',
        img: require('../assets/modimages/rising-skill.jpg'),
        type: 'EXILUS',
        exilus: true,
        conclave: true,
        conclaveOnly: true,
        rarity: 'uncommon',
        polarity: 'naramon',
        effects: {},
        maxRank: 3,
        currRank: 3,
        baseCost: 2,
        description() { return `+${2.5 * (this.currRank + 1)}% Mobility -${Math.round(7.5 * (this.currRank + 1))} Shield Capacity` }
    },
    {
        abrev: 't2',
        name: 'Rising Storm',
        img: require('../assets/modimages/rising-storm.jpg'),
        type: 'ASH',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [50, 65, 80, 100] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 3,
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 2000,
                            icon: require('../assets/dynamic/damage/True.png')
                        }
                    ],
                    duration: [
                        {
                            name: 'Extra melee multiplier duration',
                            suffix: '%',
                            base(augEffects, augRank) { return augEffects.none[augRank] }
                        }
                    ],
                    range: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 50
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy / Mark',
                            base: 12
                        },
                        {
                            name: 'Energy / Mark (Invisible)',
                            base: 6
                        }
                    ],
                },
            ]
        },
        description() { return `Blade Storm Augment: Melee multiplier lasts ${this.effects.none[this.currRank]}% longer before it resets.` }
    },
    {
        abrev: 't3',
        name: 'Rolling Guard',
        img: require('../assets/modimages/rolling-guard.jpg'),
        type: 'WARFRAME',
        rarity: 'rare',
        polarity: 'vazarin',
        effects: {},
        maxRank: 10,
        currRank: 10,
        baseCost: 2,
        description() { return `On Dodge: Become invulnerable for ${2 + 0.1 * (this.currRank)}s and remove all Status Effects. ${12 - 0.5 * (this.currRank)}s cooldown.` }
    },
    {
        abrev: 't4',
        name: 'Rumbled',
        img: require('../assets/modimages/rumbled.jpg'),
        type: 'ATLAS',
        conclave: true,
        conclaveOnly: true,
        rarity: 'rare',
        polarity: 'zenurik',
        effects: {},
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Rumblers Augment: Atlas becomes a Rumbler with Rock Armor that can absorb up to ${125 * (this.currRank + 1)} Damage.` }
    },
    {
        abrev: 't5',
        name: 'Rush',
        img: require('../assets/modimages/rush.jpg'),
        type: 'EXILUS',
        exilus: true,
        rarity: 'uncommon',
        polarity: 'naramon',
        effects: { speed: 0.05 },
        maxRank: 5,
        currRank: 5,
        baseCost: 6,
        description() { return `+${5 * (this.currRank + 1)}% Sprint Speed` }
    },
    {
        abrev: 't6',
        name: 'Safeguard',
        img: require('../assets/modimages/safeguard.jpg'),
        type: 'NEZHA',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [20, 30, 40, 50] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Warding Halo Augment: Can now be cast on allies with ${this.effects.none[this.currRank]}% effectiveness.` }
    },
    {
        abrev: 't7',
        name: 'Safeguard Switch',
        img: require('../assets/modimages/safeguard-switch.jpg'),
        type: 'LOKI',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [3, 4, 5, 6] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 2,
            details: [
                {
                    duration: [
                        {
                            name: 'Invulnerability duration',
                            suffix: 's',
                            base(augEffects, augRank) { return augEffects.none[augRank] }
                        },
                    ],
                    range: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 75
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                }
            ]
        },
        description() { return `Switch Teleport Augment: After teleporting with an ally they will be invulnerable for ${this.effects.none[this.currRank]}s.` }
    },
    {
        abrev: 't8',
        name: 'Sapping Reach',
        img: require('../assets/modimages/sapping-reach.jpg'),
        type: 'MAG',
        conclave: true,
        conclaveOnly: true,
        rarity: 'rare',
        polarity: 'zenurik',
        effects: {},
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Pull Augment: Steals up to ${6.25 * (this.currRank + 1)} Energy from the target.` }
    },
    {
        abrev: 't9',
        name: 'Savage Silence',
        img: require('../assets/modimages/savage-silence.jpg'),
        type: 'BANSHEE',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [150, 200, 250, 300] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 2,
            details: [
                {
                    strength: [
                        {
                            name: 'Finisher damage bonus',
                            suffix: '%',
                            base(augEffects, augRank) { return augEffects.none[augRank] }
                        }
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 30
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 20
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 75
                        }
                    ],
                }
            ]
        },
        description() { return `Silence Augment: Finisher Damage is increased by ${this.effects.none[this.currRank]}% while Silence is active.` }
    },
    {
        abrev: 'u0',
        name: 'Savior Decoy',
        img: require('../assets/modimages/savior-decoy.jpg'),
        type: 'LOKI',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [20, 25, 35, 50] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Decoy Augment: If Loki takes fatal damage, Decoy absorbs the damage and swaps locations. Also increases Casting Speed of Decoy by ${this.effects.none[this.currRank]}%` }
    },
    {
        abrev: 'u1',
        name: 'Searing Leap',
        img: require('../assets/modimages/searing-leap.jpg'),
        type: 'EXILUS',
        exilus: true,
        conclave: true,
        conclaveOnly: true,
        rarity: 'rare',
        polarity: 'madurai',
        effects: {},
        maxRank: 0,
        currRank: 0,
        baseCost: 0,
        description() { return `Fire FX on Bullet Jump` }
    },
    {
        abrev: 'u2',
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
                            icon: require('../assets/dynamic/damage/Slash.png')
                        },
                        {
                            name: 'Armor reduction',
                            suffix: '%',
                            base(augEffects, augRank) { return Math.round(augEffects.none[augRank] * 1000) / 10 }
                        }
                    ],
                    duration: [
                        {
                            name: 'Armor reduction duration',
                            suffix: 's',
                            base(augEffects, augRank) { return augEffects.none[4] * (augRank + 1) }
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
        abrev: 'u3',
        name: 'Shield Disruption',
        img: require('../assets/modimages/shield-disruption.jpg'),
        type: 'AURA',
        aura: true,
        rarity: 'uncommon',
        polarity: 'naramon',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `Enemy shields reduced. -${4 * (this.currRank + 1)}% Shield Capacity` }
    },
    {
        abrev: 'u4',
        name: 'Shield Of Shadows',
        img: require('../assets/modimages/shield-of-shadows.jpg'),
        type: 'NEKROS',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [3, 4, 5, 6] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 3,
            details: [
                {
                    strength: [
                        {
                            name: 'Damage bonus',
                            suffix: '%',
                            base: 150,
                        },
                        {
                            name: 'Health & shields bonus',
                            suffix: '%',
                            base: 100,
                        },
                        {
                            name: 'Damage transfer / Shadow',
                            suffix: '%',
                            base(augEffects, augRank) { return augEffects.none[augRank] }
                        },
                    ],
                    none: [
                        {
                            name: 'Maximum damage transfer',
                            suffix: '%',
                            base: 90
                        }
                    ],
                    inverse: [
                        {
                            name: 'Health decay/s',
                            suffix: '%',
                            base: 3
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 100
                        }
                    ],
                }
            ]
        },
        description() { return `Shadows of the Dead Augment: Each Shadow within 50m take ${this.effects.none[this.currRank]}% of the Damage done to Nekros in his stead.` }
    },
    {
        abrev: 'u5',
        name: 'Shield Overload',
        img: require('../assets/modimages/shield-overload.jpg'),
        type: 'MAG',
        conclave: true,
        conclaveOnly: true,
        rarity: 'rare',
        polarity: 'zenurik',
        effects: {},
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Polarize Augment: Increases the time for the target's Shields to regenerate by ${Math.round(2.25 * (this.currRank + 1))}s.` }
    },
    {
        abrev: 'u6',
        name: 'Shock Absorbers',
        img: require('../assets/modimages/shock-absorbers.jpg'),
        type: 'EXILUS',
        exilus: true,
        rarity: 'rare',
        polarity: 'vazarin',
        effects: {},
        maxRank: 3,
        currRank: 3,
        baseCost: 4,
        description() { return `+${5 * (this.currRank + 1)}% Damage Resistance on Knockdown` }
    },
    {
        abrev: 'u7',
        name: 'Shock Trooper',
        img: require('../assets/modimages/shock-trooper.jpg'),
        type: 'VOLT',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [50, 65, 80, 100] },
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
                            base: 200,
                            icon: require('../assets/dynamic/damage/Electricity.png')
                        },
                        {
                            name: 'Ally bonus damage',
                            suffix: '%',
                            base(augEffects, augRank) { return augEffects.none[augRank] },
                            icon: require('../assets/dynamic/damage/Electricity.png')
                        },
                    ],
                    duration: [
                        {
                            name: 'Ally bonus damage duration',
                            suffix: 's',
                            base(augEffects, augRank) { return 28 + 4 * augRank }
                        }
                    ],
                    range: [
                        {
                            name: 'Chain link range',
                            suffix: 'm',
                            base: 15
                        }
                    ],
                    none: [
                        {
                            name: 'Maximum links',
                            base: 5
                        }
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
        description() { return `Shock Augment: Casting on allies will add ${this.effects.none[this.currRank]}% Electricity Damage to their attacks for ${28 + 4 * this.currRank}s.` }
    },
    {
        abrev: 'u8',
        name: 'Shocking Speed',
        img: require('../assets/modimages/shocking-speed.jpg'),
        type: 'VOLT',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [75, 100, 125, 175] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 1,
            details: [
                {
                    strength: [
                        {
                            name: 'Melee & movement speed buff',
                            suffix: '%',
                            base: 50,
                        },
                        {
                            name: 'Reload speed buff',
                            suffix: '%',
                            base: 17,
                        },
                        {
                            name: 'Shocking speed damage',
                            base(augEffects, augRank) { return augEffects.none[augRank] },
                            icon: require('../assets/dynamic/damage/Electricity.png')
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 10
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 25
                        }
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
        description() { return `Speed Augment: Enemies touched while sprinting under the effects of Speed will take ${this.effects.none[this.currRank]} Electricity Damage with guaranteed proc.` }
    },
    {
        abrev: 'u9',
        name: 'Shotgun Amp',
        img: require('../assets/modimages/shotgun-amp.jpg'),
        type: 'AURA',
        aura: true,
        rarity: 'uncommon',
        polarity: 'madurai',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `Shotgun damage increased. +${3 * (this.currRank + 1)}% Damage` }
    },
    {
        abrev: 'v0',
        name: 'Shotgun Scavenger',
        img: require('../assets/modimages/shotgun-scavenger.jpg'),
        type: 'AURA',
        aura: true,
        rarity: 'uncommon',
        polarity: 'naramon',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `Increased Shotgun Ammo recovery. +${25 * (this.currRank + 1)}% Ammo Pickup` }
    },
    {
        abrev: 'v1',
        name: 'Signal Flare',
        img: require('../assets/modimages/signal-flare.jpg'),
        type: 'EXCALIBUR',
        conclave: true,
        conclaveOnly: true,
        rarity: 'rare',
        polarity: 'zenurik',
        effects: {},
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Radial Blind Augment: Enemies blinded are marked on the Minimap for ${3 * (this.currRank + 1)}s.` }
    },
    {
        abrev: 'v2',
        name: 'Singularity',
        img: require('../assets/modimages/singularity.jpg'),
        type: 'NYX',
        conclave: true,
        conclaveOnly: true,
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [9, 11, 13, 15] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Absorb Augment: Creates a ring every 3s that drags in enemies at ${this.effects.none[this.currRank]}m/s.` }
    },
    {
        abrev: 'v3',
        name: 'Smite Infusion',
        img: require('../assets/modimages/smite-infusion.jpg'),
        type: 'OBERON',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [50, 65, 80, 100] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 0,
            details: [
                {
                    strength: [
                        {
                            name: 'Smite damage',
                            base: 500,
                        },
                        {
                            name: 'Orb base damage',
                            base: 150,
                            icon: require('../assets/dynamic/damage/Radiation.png')
                        },
                        {
                            name: 'Ally bonus damage',
                            suffix: '%',
                            base(augEffects, augRank) { return augEffects.none[augRank] },
                            icon: require('../assets/dynamic/damage/Radiation.png')
                        },
                    ],
                    exception: [
                        {
                            name: 'Orbs',
                            base: 6,
                        },
                    ],
                    duration: [
                        {
                            name: 'Maximum orb lifespan',
                            suffix: 's',
                            base: 12
                        },
                        {
                            name: 'Ally bonus damage duration',
                            suffix: 's',
                            base(augEffects, augRank) { return 28 + 4 * augRank }
                        }
                    ],
                    range: [
                        {
                            name: 'Smite range',
                            suffix: 'm',
                            base: 50
                        },
                        {
                            name: 'Orb auto-target radius',
                            suffix: 'm',
                            base: 12.5
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                }
            ]
        },
        description() { return `Smite Augment: Casting on allies will add ${this.effects.none[this.currRank]}% Radiation Damage to their attacks for ${28 + 4 * this.currRank}s.` }
    },
    {
        abrev: 'v4',
        name: 'Smoke Shadow',
        img: require('../assets/modimages/smoke-shadow.jpg'),
        type: 'ASH',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [2, 4, 6, 8] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 1,
            details: [
                {
                    duration: [
                        {
                            name: 'Invisibility duration',
                            suffix: 's',
                            base: 8
                        },
                        {
                            name: 'Ally invisibility duration',
                            suffix: 's',
                            base(augEffects, augRank) { return augEffects.none[augRank] }
                        },
                    ],
                    range: [
                        {
                            name: 'Stagger radius',
                            suffix: 'm',
                            base: 2
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 35
                        }
                    ],
                },
            ]
        },
        description() { return `Smoke Screen Augment: Conceals allies for ${this.effects.none[this.currRank]}s.` }
    },
    {
        abrev: 'v5',
        name: 'Sniper Scavenger',
        img: require('../assets/modimages/sniper-scavenger.jpg'),
        type: 'AURA',
        aura: true,
        rarity: 'uncommon',
        polarity: 'naramon',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `Increased Sniper Ammo recovery. +${25 * (this.currRank + 1)}% Ammo Pickup` }
    },
    {
        abrev: 'v6',
        name: 'Sonic Fracture',
        img: require('../assets/modimages/sonic-fracture.jpg'),
        type: 'BANSHEE',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [[30, 45, 55, 70], [2, 4, 6, 8]] },
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
                            base: 50,
                            icon: require('../assets/dynamic/damage/Impact.png')
                        },
                    ],
                    exception: [
                        {
                            name: 'Armor reduction',
                            suffix: '%',
                            base(augEffects, augRank) { return augEffects.none[0][augRank] }
                        }
                    ],
                    duration: [
                        {
                            name: 'Armor reduction duration',
                            suffix: 's',
                            base(augEffects, augRank) { return augEffects.none[1][augRank] }
                        }
                    ],
                    range: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 15
                        }
                    ],
                    none: [
                        {
                            name: 'Angle',
                            suffix: '°',
                            base: 180
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                }
            ]
        },
        description() { return `Sonic Boom Augment: Enemy Armor is reduced by ${this.effects.none[0][this.currRank]}% for ${this.effects.none[1][this.currRank]}s.` }
    },
    {
        abrev: 'v7',
        name: 'Soul Survivor',
        img: require('../assets/modimages/soul-survivor.jpg'),
        type: 'NEKROS',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [15, 20, 25, 30] },
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
                            icon: require('../assets/dynamic/damage/Impact.png')
                        },
                        {
                            name: 'Downed ally health restore',
                            suffix: '%',
                            base(augEffects, augRank) { return augEffects.none[augRank] }
                        },
                    ],
                    range: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 50
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                }
            ]
        },
        description() { return `Soul Punch Augment: Use on a downed ally to revive him with ${this.effects.none[this.currRank]}% Health. Nekros's Energy will be consumed.` }
    },
    {
        abrev: 'v8',
        name: 'Speed Drift',
        img: require('../assets/modimages/speed-drift.jpg'),
        type: 'EXILUS',
        exilus: true,
        rarity: 'rare',
        polarity: 'madurai',
        effects: { speed: 0.02 },
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.speed * (this.currRank + 1) * 100)}% Sprint Speed +${2.5 * (this.currRank + 1)}% Casting Speed` }
    },
    {
        abrev: 'v9',
        name: 'Speed Holster',
        img: require('../assets/modimages/speed-holster.jpg'),
        type: 'AURA',
        aura: true,
        rarity: 'uncommon',
        polarity: 'naramon',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `Increases weapon draw and holstering speed. +${20 * (this.currRank + 1)}% Holster Speed` }
    },
    {
        abrev: 'w0',
        name: 'Sprint Boost',
        img: require('../assets/modimages/sprint-boost.jpg'),
        type: 'AURA',
        aura: true,
        rarity: 'uncommon',
        polarity: 'naramon',
        effects: { speed: 0.025 },
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `Sprint speed increased. +${2.5 * (this.currRank + 1)}% Sprint Speed` }
    },
    {
        abrev: 'w1',
        name: 'Staggering Shield',
        img: require('../assets/modimages/staggering-shield.jpg'),
        type: 'MESA',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [30, 35, 40, 50] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Shatter Shield Augment: Reflected bullets gain a ${this.effects.none[this.currRank]}% chance of staggering enemies.` }
    },
    {
        abrev: 'w2',
        name: 'Stand United',
        img: require('../assets/modimages/stand-united.jpg'),
        type: 'AURA',
        aura: true,
        rarity: 'uncommon',
        polarity: 'vazarin',
        effects: { armor: 0.0425 },
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `+${4.25 * (this.currRank + 1)}% Armor` }
    },
    {
        abrev: 'w3',
        name: 'Stealth Drift',
        img: require('../assets/modimages/stealth-drift.jpg'),
        type: 'EXILUS',
        exilus: true,
        rarity: 'rare',
        polarity: 'naramon',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        description() { return `+${3 * (this.currRank + 1)} Enemy Radar +${2 * (this.currRank + 1)}% Aim Glide/Latch Time` }
    },
    {
        abrev: 'w4',
        name: 'Steel Charge',
        img: require('../assets/modimages/steel-charge.jpg'),
        type: 'AURA',
        aura: true,
        rarity: 'uncommon',
        polarity: 'madurai',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        description() { return `Melee Weapon damage increased. +${10 * (this.currRank + 1)}% Melee Damage` }
    },
    {
        abrev: 'w5',
        name: 'Steel Fiber',
        family: 'Steel Fiber',
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
        abrev: '0s',
        name: 'Strain Consume',
        img: require('../assets/modimages/strain-consume.jpg'),
        type: 'WARFRAME',
        rarity: 'rare',
        polarity: 'naramon',
        effects: {},
        maxRank: 3,
        currRank: 3,
        baseCost: 2,
        set: { setName: 'strain', setMax: 4, setCurr: 1 },
        description() { return [`Dead maggots within 5m are consumed, restoring ${this.currRank + 1}% Missing Health.`, `Grows up to ${2 * (this.set.setCurr)} Cysts over ${6 * this.set.setCurr}s that erupt every 25s to spawn a maggot.`] }
    },
    {
        abrev: 'w6',
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
        abrev: 'w7',
        name: 'Streamlined Form',
        img: require('../assets/modimages/streamlined-form.jpg'),
        type: 'EXILUS',
        exilus: true,
        rarity: 'rare',
        polarity: 'naramon',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `+${10 * (this.currRank + 1)}% Holster Speed +${2.5 * (this.currRank + 1)}% Slide -${2.5 * (this.currRank + 1)}% Friction` }
    },
    {
        abrev: 'w8',
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
        abrev: 'w9',
        name: 'Sure Footed',
        img: require('../assets/modimages/sure-footed.jpg'),
        type: 'EXILUS',
        exilus: true,
        rarity: 'rare',
        polarity: 'vazarin',
        effects: {},
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `+${15 * (this.currRank + 1)}% Chance to Resist Knockdown` }
    },
    {
        abrev: 'x0',
        name: 'Surging Dash',
        img: require('../assets/modimages/surging-dash.jpg'),
        type: 'EXCALIBUR',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: {},
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
                            base: 250
                        },
                        {
                            name: 'Bonus melee counter / Enemy hit',
                            base(augEffects, augRank) { return augRank + 1 }
                        },
                    ],
                    range: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 12
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                }
            ]
        },
        description() { return `Slash Dash Augment: Each enemy hit during Slash Dash further increases your Melee Counter by ${this.currRank + 1}.` }
    },
    {
        abrev: 'x1',
        name: 'Surplus Diverters',
        img: require('../assets/modimages/surplus-diverters.jpg'),
        type: 'WARFRAME',
        conclave: true,
        conclaveOnly: true,
        rarity: 'rare',
        polarity: 'madurai',
        effects: { none: [2, 3, 4, 6] },
        maxRank: 5,
        currRank: 5,
        baseCost: 10,
        description() { return `Gain +${this.effects.none[this.currRank]} energy, upon replenishing shields completely after they have been deactivated.` }
    },
    {
        abrev: 'x2',
        name: 'Swing Line',
        img: require('../assets/modimages/swing-line.jpg'),
        type: 'VALKYR',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: {},
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Rip Line Augment: After using Rip Line, the next ${this.currRank + 1} Rip Lines will have no Energy cost while Airborne.` }
    },
    {
        abrev: '0p',
        name: 'Synth Reflex',
        img: require('../assets/modimages/synth-reflex.jpg'),
        type: 'EXILUS',
        exilus: true,
        rarity: 'rare',
        polarity: 'madurai',
        effects: {},
        maxRank: 3,
        currRank: 3,
        baseCost: 4,
        set: { setName: 'synth', setMax: 4, setCurr: 1 },
        description() { return [`+${25 * (this.currRank + 1)}% Holster Speed`, `Holstering Primary and Secondary weapons reload ${5 * this.set.setCurr}% of Magazine/s.`] }
    },
    {
        abrev: 'x3',
        name: 'Tactical Retreat',
        img: require('../assets/modimages/tactical-retreat.jpg'),
        type: 'WARFRAME',
        conclave: true,
        conclaveOnly: true,
        rarity: 'rare',
        polarity: 'vazarin',
        effects: { none: [3, 5, 8, 10] },
        maxRank: 3,
        currRank: 3,
        baseCost: 10,
        description() { return `On Low Health: ${this.effects.none[this.currRank]} Mobility for 4s` }
    },
    {
        abrev: 'x4',
        name: 'Target Fixation',
        img: require('../assets/modimages/target-fixation.jpg'),
        type: 'ZEPHYR',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [30, 35, 40, 50] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Tail Wind Augment: Each enemy hit increases Tail Wind Damage by ${this.effects.none[this.currRank]}%. Damage resets upon landing.` }
    },
    {
        abrev: 'x5',
        name: 'Tear Gas',
        img: require('../assets/modimages/tear-gas.jpg'),
        type: 'ASH',
        conclave: true,
        conclaveOnly: true,
        rarity: 'rare',
        polarity: 'zenurik',
        effects: {},
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Smoke Screen Augment: Blinds enemies within ${1 + this.currRank}m for 3s.` }
    },
    {
        abrev: 'x6',
        name: 'Tectonic Fracture',
        img: require('../assets/modimages/tectonic-fracture.jpg'),
        type: 'ATLAS',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [[2, 2, 3, 3], [70, 80, 90, 100]] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Tectonics Augment: Create up to ${this.effects.none[0][this.currRank]} walls with ${this.effects.none[1][this.currRank]}% Health. Walls can no longer be turned into boulders.` }
    },
    {
        abrev: '0o',
        name: 'Tek Collateral',
        img: require('../assets/modimages/tek-collateral.jpg'),
        type: 'WARFRAME',
        rarity: 'rare',
        polarity: 'naramon',
        effects: {},
        maxRank: 3,
        currRank: 3,
        baseCost: 2,
        set: { setName: 'tek', setMax: 4, setCurr: 1 },
        description() { return [`+${25 * (this.currRank + 1)}% Critical Damage when inside the Marked Zone.`, `Mark a 3m zone every ${60 - (15 * (this.set.setCurr - 1))}s that inflicts ${50 * this.set.setCurr} Damage/s to enemies.`] }
    },
    {
        abrev: 'x7',
        name: 'Tempered Bound',
        img: require('../assets/modimages/tempered-bound.jpg'),
        type: 'EXILUS',
        exilus: true,
        conclave: true,
        conclaveOnly: true,
        rarity: 'uncommon',
        polarity: 'naramon',
        effects: {},
        maxRank: 3,
        currRank: 3,
        baseCost: 2,
        description() { return `-${2.5 * (this.currRank + 1)}% Mobility +${Math.round(7.5 * (this.currRank + 1))} Shield Capacity` }
    },
    {
        abrev: 'x8',
        name: 'Tesla Link',
        img: require('../assets/modimages/tesla-link.jpg'),
        type: 'VAUBAN',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [100, 150, 200, 250] },
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
                            base: 150,
                            icon: require('../assets/dynamic/damage/Electricity.png')
                        },
                        {
                            name: 'Link damage',
                            base(augEffects, augRank) { return augEffects.none[augRank] },
                            icon: require('../assets/dynamic/damage/Slash.png')
                        },
                    ],
                    duration: [
                        {
                            name: 'Charges',
                            base: 10
                        }
                    ],
                    none: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 40
                        },
                        {
                            name: 'Uncharged status chance',
                            suffix: '%',
                            base: 10
                        },
                        {
                            name: 'Charged status chance',
                            suffix: '%',
                            base: 100
                        },
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 12
                        }
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
        description() { return `Tesla Augment: Every pair of Teslas will connect forming a beam that will cause ${this.effects.none[this.currRank]} Slash Damage when contacted.` }
    },
    {
        abrev: 'x9',
        name: 'Thief\'s Wit',
        img: require('../assets/modimages/thief\'s-wit.jpg'),
        type: 'EXILUS',
        exilus: true,
        rarity: 'common',
        polarity: 'naramon',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `Highlights mods through the environment as well as the Minimap. +${7 * (this.currRank + 1)} Loot Radar` }
    },
    {
        abrev: 'y0',
        name: 'Tidal Impunity',
        img: require('../assets/modimages/tidal-impunity.jpg'),
        type: 'HYDROID',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [3, 4, 5, 6] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 1,
            details: [
                {
                    strength: [
                        {
                            name: 'Initial damage',
                            base: 300,
                            icon: require('../assets/dynamic/damage/Impact.png')
                        },
                        {
                            name: 'Wave crash damage',
                            base: 300,
                            icon: require('../assets/dynamic/damage/Slash.png')
                        },
                    ],
                    duration: [
                        {
                            name: 'Speed',
                            suffix: 'm/s',
                            base: 30
                        },
                        {
                            name: 'Proc immunity',
                            suffix: 's',
                            base(augEffects, augRank) { return augEffects.none[augRank] }
                        },
                    ],
                    none: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 1
                        }
                    ],
                    range: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 6
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        }
                    ],
                }
            ]
        },
        description() { return `Tidal Surge Augment: Clears Status Effects and grants ${this.effects.none[this.currRank]}s of Proc Immunity for yourself and allies that come in contact with it.` }
    },
    {
        abrev: 'y1',
        name: 'Titanic Rumbler',
        img: require('../assets/modimages/titanic-rumbler.jpg'),
        type: 'ATLAS',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [[1.2, 1.3, 1.4, 1.5,], [1.2, 1.25, 1.3, 1.35], [0.5, 0.55, 0.6, 0.65]] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 3,
            details: [
                {
                    exception: [
                        {
                            name: 'Rumbler armor',
                            base: 500
                        },
                        {
                            name: 'Rumbler health',
                            base(augEffects, augRank) { return 1200 * augEffects.none[0][augRank] }
                        },
                        {
                            name: 'Speed',
                            base(augEffects, augRank) { return 1 * augEffects.none[2][augRank] },
                        },
                    ],
                    strength: [
                        {
                            name: 'Melee damage',
                            base(augEffects, augRank) { return 2000 * augEffects.none[1][augRank] },
                            icon: require('../assets/dynamic/damage/Impact.png')
                        },
                        {
                            name: 'Rock throw damage',
                            base(augEffects, augRank) { return 50 * augEffects.none[1][augRank] },
                            icon: require('../assets/dynamic/damage/Impact.png')
                        },
                        {
                            name: 'Explosion damage',
                            base: 1250,
                            icon: require('../assets/dynamic/damage/Blast.png')
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 45
                        }
                    ],
                    range: [
                        {
                            name: 'Petrify radius',
                            suffix: 'm',
                            base: 6
                        },
                        {
                            name: 'Explosion radius',
                            suffix: 'm',
                            base: 6
                        },
                    ],
                    none: [
                        {
                            name: 'Rumblers',
                            base: 1
                        },
                        {
                            name: 'Petrify duration',
                            suffix: 's',
                            base: 10
                        },
                        {
                            name: 'Rubble on death',
                            base: 1
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 100
                        }
                    ],
                }
            ]
        },
        description() { return `Rumblers Augment: Create a single rumbler with ${this.effects.none[0][this.currRank] * 100}% Health, ${this.effects.none[1][this.currRank] * 100}% Damage, and ${this.effects.none[2][this.currRank] * 100}% Speed that taunts nearby enemies into attacking it.` }
    },
    {
        abrev: 'y2',
        name: 'Total Eclipse',
        img: require('../assets/modimages/total-eclipse.jpg'),
        type: 'MIRAGE',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [[3, 3, 4, 5], [25, 50, 75, 100]] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 2,
            details: [
                {
                    mode: 'Light',
                    strength: [
                        {
                            name: 'Damage bonus',
                            suffix: '%',
                            base: 200,
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 25
                        }
                    ],
                    none: [
                        {
                            name: 'Aura effects',
                            suffix: '%',
                            base(augEffects, augRank) { return augEffects.none[1][augRank] }
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base(augEffects, augRank) { return augEffects.none[0][augRank] }
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                },
                {
                    mode: 'Shadows',
                    exception: [
                        {
                            name: 'Damage reduction',
                            suffix: '%',
                            base: 75,
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 25
                        }
                    ],
                    none: [
                        {
                            name: 'Aura effects',
                            suffix: '%',
                            base(augEffects, augRank) { return augEffects.none[1][augRank] }
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base(augEffects, augRank) { return augEffects.none[0][augRank] }
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                }
            ]
        },
        description() { return `Eclipse Augment: While active, allies within ${this.effects.none[0][this.currRank]}m gain ${this.effects.none[0][this.currRank]}% benefit from Eclipse.` }
    },
    {
        abrev: 'y3',
        name: 'Toxic Flight',
        img: require('../assets/modimages/toxic-flight.jpg'),
        type: 'EXILUS',
        exilus: true,
        rarity: 'rare',
        polarity: 'naramon',
        effects: { none: [2.2, 25] },
        maxRank: 10,
        currRank: 10,
        baseCost: 2,
        description() { return `+${Math.round(this.effects.none[0] * (this.currRank + 1) * 10) / 10}% to Bullet Jump +${Math.round(this.effects.none[0] * (this.currRank + 1) * 10) / 10}% Aim Glide and Wall Latch +${this.effects.none[1] * (this.currRank + 1)}% Toxin on Bullet Jump` }
    },
    {
        abrev: 'y4',
        name: 'Toxin Resistance',
        img: require('../assets/modimages/toxin-resistance.jpg'),
        type: 'AURA',
        aura: true,
        rarity: 'uncommon',
        polarity: 'vazarin',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `Reduced Toxin damage. +${2.5 * (this.currRank + 1)}% Toxin Resistance` }
    },
    {
        abrev: 'y5',
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
        abrev: 'y6',
        name: 'Transistor Shield',
        img: require('../assets/modimages/transistor-shield.jpg'),
        type: 'VOLT',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: {},
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 2,
            details: [
                {
                    strength: [
                        {
                            name: 'Static discharge conversion',
                            suffix: '%',
                            base(augEffects, augRank) { return 25 * (augRank + 1) }
                        }
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 25
                        }
                    ],
                    none: [
                        {
                            name: 'Damage bonus',
                            suffix: '%',
                            base: 50,
                            icon: require('../assets/dynamic/damage/Electricity.png')
                        },
                        {
                            name: 'Critical damage bonus',
                            suffix: '%',
                            base: 200,
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        },
                        {
                            name: 'Energy drain / 4m',
                            base: 1
                        }
                    ],
                }
            ]
        },
        description() { return `Electric Shield Augment: Allies can pick up Electric Shield. ${25 * (this.currRank + 1)}% of damage absorbed will be added to Volt's Static Discharge.` }
    },
    {
        abrev: 'y7',
        name: 'Umbral Fiber',
        family: 'Steel Fiber',
        img: require('../assets/modimages/umbral-fiber.jpg'),
        type: 'WARFRAME',
        rarity: 'prime',
        polarity: 'umbra',
        effects: { armor: [0.1, 0.125, 0.175] },
        maxRank: 10,
        currRank: 10,
        baseCost: 6,
        set: { setName: 'umbral', setMax: 3, setCurr: 1 },
        description() { return [`+${Math.round(this.effects.armor[this.set.setCurr - 1] * (this.currRank + 1) * 1000) / 10}% Armor +${this.currRank + 1}% Tau Resistance`, `Enhance mods in this set.`] }
    },
    {
        abrev: 'y8',
        name: 'Umbral Intensify',
        family: 'Intensify',
        img: require('../assets/modimages/umbral-intensify.jpg'),
        type: 'WARFRAME',
        rarity: 'prime',
        polarity: 'umbra',
        effects: { strength: [0.04, 0.05, 0.06] },
        maxRank: 10,
        currRank: 10,
        baseCost: 6,
        set: { setName: 'umbral', setMax: 3, setCurr: 1 },
        description() { return [`+${Math.round(this.effects.strength[this.set.setCurr - 1] * (this.currRank + 1) * 100)}% Ability Strength +${this.currRank + 1}% Tau Resistance`, `Enhance mods in this set`] }
    },
    {
        abrev: 'y9',
        name: 'Umbral Vitality',
        family: 'Vitality',
        img: require('../assets/modimages/umbral-vitality.jpg'),
        type: 'WARFRAME',
        rarity: 'prime',
        polarity: 'umbra',
        effects: { health: [0.4, 0.5, 0.7] },
        maxRank: 10,
        currRank: 10,
        baseCost: 6,
        set: { setName: 'umbral', setMax: 3, setCurr: 1 },
        description() { return [`+${Math.round(this.effects.health[this.set.setCurr - 1] * (this.currRank + 1) * 100)}% Health +${this.currRank + 1}% Tau Resistance`, `Enhance mods in this set`] }
    },
    {
        abrev: 'z0',
        name: 'Undying Will',
        img: require('../assets/modimages/undying-will.jpg'),
        type: 'WARFRAME',
        rarity: 'rare',
        polarity: 'vazarin',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `+${7 * (this.currRank + 1)}% Bleedout Reduction` }
    },
    {
        abrev: 'z1',
        name: 'Vampire Leech',
        img: require('../assets/modimages/vampire-leech.jpg'),
        type: 'TRINITY',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [85, 100, 120, 150] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Energy Vampire Augment: Excess Energy replenishes Shields by ${this.effects.none[this.currRank]}%.` }
    },
    {
        abrev: 'z2',
        name: 'Venom Dose',
        img: require('../assets/modimages/venom-dose.jpg'),
        type: 'SARYN',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [50, 65, 80, 100] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 0,
            details: [
                {
                    strength: [
                        {
                            name: 'Initial damage',
                            base: 10,
                            icon: require('../assets/dynamic/damage/Corrosive.png')
                        },
                        {
                            name: 'Damage growth / enemy',
                            base: 2,
                        },
                        {
                            name: 'Status chance',
                            suffix: '%',
                            base: 50,
                        },
                        {
                            name: 'Ally bonus damage',
                            suffix: '%',
                            base(augEffects, augRank) { return augEffects.none[augRank] },
                            icon: require('../assets/dynamic/damage/Electricity.png')
                        },
                    ],
                    duration: [
                        {
                            name: 'Ally bonus damage duration',
                            suffix: 's',
                            base(augEffects, augRank) { return 28 + 4 * augRank }
                        }
                    ],
                    exception: [
                        {
                            name: 'Reset decay',
                            suffix: '%',
                            base: 20
                        }
                    ],
                    inverse: [
                        {
                            name: 'Damage decay rate',
                            suffix: '%',
                            base: 10
                        }
                    ],
                    range: [
                        {
                            name: 'Cast range',
                            suffix: 'm',
                            base: 60
                        },
                        {
                            name: 'Spread range',
                            suffix: 'm',
                            base: 16
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
        description() { return `Spores Augment: Casting on allies will add ${this.effects.none[this.currRank]}% Corrosive Damage to their attacks for ${28 + 4 * this.currRank}s.` }
    },
    {
        abrev: 'z3',
        name: 'Venomous Rise',
        img: require('../assets/modimages/venomous-rise.jpg'),
        type: 'EXILUS',
        exilus: true,
        conclave: true,
        conclaveOnly: true,
        rarity: 'rare',
        polarity: 'madurai',
        effects: {},
        maxRank: 0,
        currRank: 0,
        baseCost: 0,
        description() { return `Poison FX on Bullet Jump` }
    },
    {
        abrev: 'z4',
        name: 'Vexing Retaliation',
        img: require('../assets/modimages/vexing-retaliation.jpg'),
        type: 'CHROMA',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [4, 5, 7, 9] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 2,
            details: [
                {
                    strength: [
                        {
                            name: 'Max armor bonus',
                            suffix: '%',
                            base: 350
                        },
                        {
                            name: 'Max damage bonus',
                            suffix: '%',
                            base: 275
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 25
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 18
                        },
                        {
                            name: 'Vexing retaliation radius',
                            suffix: 'm',
                            base(augEffects, augRank) { return augEffects.none[augRank] }
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 75
                        }
                    ],
                }
            ]
        },
        description() { return `Vex Armor Augment: Taking 150 Damage will trigger a ${this.effects.none[this.currRank]}m burst. Shield damage will cause a Puncture Proc while Health damage will cause a Blast Proc.` }
    },
    {
        abrev: 'z5',
        name: 'Vigilante Pursuit',
        img: require('../assets/modimages/vigilante-pursuit.jpg'),
        type: 'EXILUS',
        exilus: true,
        rarity: 'uncommon',
        polarity: 'naramon',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        set: { setName: 'vigilante', setMax: 6, setCurr: 1 },
        description() { return [`+${5 * (this.currRank + 1)} Enemy Radar`, `${5 * this.set.setCurr}% chance to enhance Critical Hits from Primary Weapons`] }
    },
    {
        abrev: 'z6',
        name: 'Vigilante Vigor',
        img: require('../assets/modimages/vigilante-vigor.jpg'),
        type: 'WARFRAME',
        rarity: 'common',
        polarity: 'vazarin',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        set: { setName: 'vigilante', setMax: 6, setCurr: 1 },
        description() { return [`+${10 * (this.currRank + 1)}% Shield Recharge`, `${5 * this.set.setCurr}% chance to enhance Critical Hits from Primary Weapons`] }
    },
    {
        abrev: 'z7',
        name: 'Vigor',
        img: require('../assets/modimages/vigor.jpg'),
        type: 'WARFRAME',
        rarity: 'rare',
        polarity: 'vazarin',
        effects: { health: 0.2, shields: 0.2 },
        maxRank: 5,
        currRank: 5,
        baseCost: 6,
        description() { return `+${Math.round(this.effects.shields * (this.currRank + 1) * 100)}% Shield Capacity +${Math.round(this.effects.health * (this.currRank + 1) * 100)}% Health` }
    },
    {
        abrev: 'z8',
        name: 'Vigorous Swap',
        img: require('../assets/modimages/vigorous-swap.jpg'),
        type: 'WARFRAME',
        rarity: 'rare',
        polarity: 'naramon',
        effects: { none: [15, 20, 25, 30, 35, 40, 50, 60, 70, 85, 100] },
        maxRank: 10,
        currRank: 10,
        baseCost: 2,
        description() { return `On Equip: +${15 * (this.currRank + 1)}% Damage for 3s +${this.effects.none[this.currRank]}% Holster Speed` }
    },
    {
        abrev: 'z9',
        name: 'Vital Systems Bypass',
        img: require('../assets/modimages/vital-systems-bypass.jpg'),
        type: 'WARFRAME',
        conclave: true,
        conclaveOnly: true,
        rarity: 'rare',
        polarity: 'naramon',
        effects: {},
        maxRank: 3,
        currRank: 3,
        baseCost: 10,
        description() { return `+${0.25 * (this.currRank + 1)} Heal Rate/s +${12.5 * (this.currRank + 1)}% Shield Recharge Delay` }
    },
    {
        abrev: '0a',
        name: 'Vitality',
        family: 'Vitality',
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
    {
        abrev: '0b',
        name: 'Voltaic Lance',
        img: require('../assets/modimages/voltaic-lance.jpg'),
        type: 'EXILUS',
        exilus: true,
        conclave: true,
        conclaveOnly: true,
        rarity: 'rare',
        polarity: 'madurai',
        effects: {},
        maxRank: 0,
        currRank: 0,
        baseCost: 0,
        description() { return `Electrical FX on Bullet Jump` }
    },
    {
        abrev: '0c',
        name: 'Ward Recovery',
        img: require('../assets/modimages/ward-recovery.jpg'),
        type: 'NEZHA',
        conclave: true,
        conclaveOnly: true,
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [35, 40, 45, 50] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Warding Halo Augment: ${this.effects.none[this.currRank]}% of the casting cost returned based on how much protection is left.` }
    },
    {
        abrev: '0d',
        name: 'Warding Thurible',
        img: require('../assets/modimages/warding-thurible.jpg'),
        type: 'HARROW',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [[15, 25, 30, 40], [0.2, 0.3, 0.5, 0.5]] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 2,
            details: [
                {
                    strength: [
                        {
                            name: 'Energy conversion',
                            suffix: '%',
                            base: 5
                        },
                        {
                            name: 'Additional energy charge when damaged',
                            base(augEffects, augRank) { return augEffects.none[1][augRank] }
                        },
                    ],
                    exception: [
                        {
                            name: 'Damage reduction while channeling',
                            suffix: '%',
                            base(augEffects, augRank) { return augEffects.none[0][augRank] }
                        }
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 35
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 20
                        }
                    ],
                    none: [
                        {
                            name: 'Headshot multiplier',
                            suffix: 'x',
                            base: 4
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                }
            ]
        },
        description() { return `Thurible Augment: Allies in range take ${this.effects.none[0][this.currRank]}% less Damage while channeling Thurible and grant ${this.effects.none[1][this.currRank]} additional Energy charge whenever damaged.` }
    },
    {
        abrev: '0e',
        name: 'Warm Coat',
        img: require('../assets/modimages/warm-coat.jpg'),
        type: 'EXILUS',
        exilus: true,
        rarity: 'common',
        polarity: 'vazarin',
        effects: {},
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `+${3 * (this.currRank + 1)}% Shield Resistance to Ice Levels` }
    }
]

export default warframeMods;