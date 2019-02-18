// abrev at c9
const warframeArcanes = [
    {
        abrev: 'a0',
        name: 'ACCELERATION',
        img: require('../assets/itemimages/acceleration.png'),
        effects: { fireRate: 0.15 },
        currRank: 3,
        description() {
            return `On Critical Hit:\n${5 * (this.currRank + 1)}% chance for +${Math.round(this.effects.fireRate * (this.currRank + 1) * 100)}% Fire Rate to Primary Weapons for ${1.5 * (this.currRank + 1)}s.`
        }
    },
    {
        abrev: 'a1',
        name: 'AEGIS',
        img: require('../assets/itemimages/aegis.png'),
        effects: {},
        currRank: 3,
        description() {
            return `On Damaged:\n${1.5 * (this.currRank + 1)}% chance for +${15 * (this.currRank + 1)} Shields Per Second for ${5 * (this.currRank + 1)}s.`
        }
    },
    {
        abrev: 'a2',
        name: 'AGILITY',
        img: require('../assets/itemimages/agility.png'),
        effects: {},
        currRank: 3,
        description() {
            return `On Damaged:\n${3 * (this.currRank + 1)}% chance for +${10 * (this.currRank + 1)}% Parkour Velocity for ${2 * (this.currRank + 1)}s.`
        }
    },
    {
        abrev: 'a3',
        name: 'ARACHNE',
        img: require('../assets/itemimages/arachne.png'),
        effects: {},
        currRank: 3,
        description() {
            return `On Wall Latch for 2s:\n+${25 * (this.currRank + 1)}% Damage for ${5 * (this.currRank + 1)}s.`
        }
    },
    {
        abrev: 'a4',
        name: 'AVENGER',
        img: require('../assets/itemimages/avenger.png'),
        effects: {},
        currRank: 3,
        description() {
            return `On Damaged:\n${3.5 * (this.currRank + 1)}% chance for +${7.5 * (this.currRank + 1)}% Critical Chance for ${2 * (this.currRank + 1)}s.`
        }
    },
    {
        abrev: 'a5',
        name: 'AWAKENING',
        img: require('../assets/itemimages/awakening.png'),
        effects: {},
        currRank: 3,
        description() {
            return `On Reload:\n${10 * (this.currRank + 1)}% chance for +${25 * (this.currRank + 1)}% Damage to Pistols for ${4 * (this.currRank + 1)}s.`
        }
    },
    {
        abrev: 'a6',
        name: 'BARRIER',
        img: require('../assets/itemimages/barrier.png'),
        effects: {},
        currRank: 3,
        description() {
            return `On Damaged:\n${this.currRank + 1}% chance to instantly restore all Shields.`
        }
    },
    {
        abrev: 'a7',
        name: 'CONSEQUENCE',
        img: require('../assets/itemimages/consequence.png'),
        effects: {},
        currRank: 3,
        description() {
            return `On Headshot:\n${25 * (this.currRank + 1)}% chance for +${10 * (this.currRank + 1)} Parkour Velocity for ${3 * (this.currRank + 1)}s.`
        }
    },
    {
        abrev: 'a8',
        name: 'DEFLECTION',
        img: require('../assets/itemimages/deflection.png'),
        effects: {},
        currRank: 3,
        description() {
            return `+${20 * (this.currRank + 1)}% chance to resist a Slash Damage effect.`
        }
    },
    {
        abrev: 'a9',
        name: 'ENERGIZE',
        img: require('../assets/itemimages/energize.png'),
        effects: {},
        currRank: 3,
        description() {
            return `On Energy Pickup:\n${10 * (this.currRank + 1)}% chance to replenish ${25 * (this.currRank + 1)} additional Energy to you and nearby allies.`
        }
    },
    {
        abrev: 'b0',
        name: 'ERUPTION',
        img: require('../assets/itemimages/eruption.png'),
        effects: {},
        currRank: 3,
        description() {
            return `On Energy Pickup:\n${5 * (this.currRank + 1)}% chance to Knockdown nearby enemies.`
        }
    },
    {
        abrev: 'b1',
        name: 'FURY',
        img: require('../assets/itemimages/fury.png'),
        effects: {},
        currRank: 3,
        description() {
            return `On Critical Hit:\n${10 * (this.currRank + 1)}% chance for +${30 * (this.currRank + 1)}% Melee Damage for ${3 * (this.currRank + 1)}s.`
        }
    },
    {
        abrev: 'b3',
        name: 'GRACE',
        img: require('../assets/itemimages/grace.png'),
        effects: {},
        currRank: 3,
        description() {
            return `On Damaged:\n${1.5 * (this.currRank + 1)}% chance for +${2 * (this.currRank + 1)}% Health Regeneration/s for ${1.5 * (this.currRank + 1)}s.`
        }
    },
    {
        abrev: 'b4',
        name: 'GUARDIAN',
        img: require('../assets/itemimages/guardian.png'),
        effects: {},
        currRank: 3,
        description() {
            return `On Damaged:\n${5 * (this.currRank + 1)}% chance for +${150 * (this.currRank + 1)} Armor for ${5 * (this.currRank + 1)}s.`
        }
    },
    {
        abrev: 'b5',
        name: 'HEALING',
        img: require('../assets/itemimages/healing.png'),
        effects: {},
        currRank: 3,
        description() {
            return `+${20 * (this.currRank + 1)}% chance to resist a Radiation Damage effect.`
        }
    },
    {
        abrev: 'b6',
        name: 'ICE',
        img: require('../assets/itemimages/ice.png'),
        effects: {},
        currRank: 3,
        description() {
            return `+${20 * (this.currRank + 1)}% chance to resist a Heat Damage effect.`
        }
    },
    {
        abrev: 'b7',
        name: 'MOMENTUM',
        img: require('../assets/itemimages/momentum.png'),
        effects: {},
        currRank: 3,
        description() {
            return `On Critical Hit:\n${10 * (this.currRank + 1)}% chance for +${25 * (this.currRank + 1)}% Reload Speed to Sniper Rifles for ${2 * (this.currRank + 1)}s.`
        }
    },
    {
        abrev: 'b8',
        name: 'NULLIFIER',
        img: require('../assets/itemimages/nullifier.png'),
        effects: {},
        currRank: 3,
        description() {
            return `+${20 * (this.currRank + 1)}% chance to resist a Magnetic Damage effect.`
        }
    },
    {
        abrev: 'b9',
        name: 'PHANTASM',
        img: require('../assets/itemimages/phantasm.png'),
        effects: {},
        currRank: 3,
        description() {
            return `On Parry:\n${8 * (this.currRank + 1)}% chance for +${10 * (this.currRank + 1)}% Speed for ${3 * (this.currRank + 1)}s.`
        }
    },
    {
        abrev: 'c0',
        name: 'PRECISION',
        img: require('../assets/itemimages/precision.png'),
        effects: {},
        currRank: 3,
        description() {
            return `On Headshot:\n${20 * (this.currRank + 1)}% chance for +${30 * (this.currRank + 1)}% Damage to Pistols for ${2 * (this.currRank + 1)}s.`
        }
    },
    {
        abrev: 'c1',
        name: 'PULSE',
        img: require('../assets/itemimages/pulse.png'),
        effects: {},
        currRank: 3,
        description() {
            return `On Health Pickup:\n${5 * (this.currRank + 1)}% chance to Heal nearby allies.`
        }
    },
    {
        abrev: 'c2',
        name: 'RAGE',
        img: require('../assets/itemimages/rage.png'),
        effects: {},
        currRank: 3,
        description() {
            return `On Headshot:\n${2.5 * (this.currRank + 1)}% chance for +${30 * (this.currRank + 1)}% Damage to Primary Weapons for ${4 * (this.currRank + 1)}s.`
        }
    },
    {
        abrev: 'c3',
        name: 'RESISTANCE',
        img: require('../assets/itemimages/resistance.png'),
        effects: {},
        currRank: 3,
        description() {
            return `+${20 * (this.currRank + 1)}% chance to resist a Toxin Damage effect.`
        }
    },
    {
        abrev: 'c4',
        name: 'STRIKE',
        img: require('../assets/itemimages/strike.png'),
        effects: {},
        currRank: 3,
        description() {
            return `On Hit:\n${2.5 * (this.currRank + 1)}% chance for +${10 * (this.currRank + 1)}% Attack Speed to Melee Weapons for ${3 * (this.currRank + 1)}s.`
        }
    },
    {
        abrev: 'c5',
        name: 'TEMPO',
        img: require('../assets/itemimages/tempo.png'),
        effects: {},
        currRank: 3,
        description() {
            return `On Critical Hit:\n${2.5 * (this.currRank + 1)}% chance for +${15 * (this.currRank + 1)}% Fire Rate to Shotguns for ${2 * (this.currRank + 1)}s.`
        }
    },
    {
        abrev: 'c6',
        name: 'TRICKERY',
        img: require('../assets/itemimages/trickery.png'),
        effects: {},
        currRank: 3,
        description() {
            return `On Finisher:\n${2.5 * (this.currRank + 1)}% chance to become invisible for ${5 * (this.currRank + 1)}s.`
        }
    },
    {
        abrev: 'c7',
        name: 'ULTIMATUM',
        img: require('../assets/itemimages/ultimatum.png'),
        effects: {},
        currRank: 3,
        description() {
            return `On Finisher:\n${25 * (this.currRank + 1)}% chance for +${150 * (this.currRank + 1)} Armor for ${5 * (this.currRank + 1)}s.`
        }
    },
    {
        abrev: 'c8',
        name: 'VELOCITY',
        img: require('../assets/itemimages/velocity.png'),
        effects: {},
        currRank: 3,
        description() {
            return `On Critical Hit:\n${15 * (this.currRank + 1)}% chance for +${20 * (this.currRank + 1)}% Fire Rate to Pistols for ${1.5 * (this.currRank + 1)}s.`
        }
    },
    {
        abrev: 'b2',
        name: 'VICTORY',
        img: require('../assets/itemimages/victory.png'),
        effects: {},
        currRank: 3,
        description() {
            return `On Headshot Kill:\n${12.5 * (this.currRank + 1)}% chance for +${0.5 * (this.currRank + 1)}% Heatlth Regeneration/s for ${1.5 * (this.currRank + 1)}s.`
        }
    },
    {
        abrev: 'c9',
        name: 'WARMTH',
        img: require('../assets/itemimages/warmth.png'),
        effects: {},
        currRank: 3,
        description() {
            return `+${20 * (this.currRank + 1)}% chance to resist a Cold Damage effect.`
        }
    }
]

export default warframeArcanes;