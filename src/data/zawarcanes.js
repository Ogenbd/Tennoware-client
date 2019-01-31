const zawArcanes = [
    {
        abrev: 'a0',
        name: 'BRAVE',
        img: require('../assets/itemimages/brave.png'),
        effects: {},
        currRank: 3,
        description() {
            return `On Channel Kill:\n+${1.25 * (this.currRank + 1)} Energy Regen for ${this.currRank + 1}s.`
        }
    },
    {
        abrev: 'a1',
        name: 'FORCE',
        img: require('../assets/itemimages/force.png'),
        effects: {},
        currRank: 3,
        description() {
            return `On Status Effect:\n${5 + 15 * this.currRank}% chance for ${3 + this.currRank}m Radial Blast for ${50 * (this.currRank + 1)}% Weapon Damage.`
        }
    },
    {
        abrev: 'a2',
        name: 'HUNT',
        img: require('../assets/itemimages/hunt.png'),
        effects: {},
        currRank: 3,
        description() {
            return `On Slam Attack:\n${20 + 10 * this.currRank}% chance to pull in nearby enemies within ${6 + 2 * this.currRank}m.`
        }
    },
    {
        abrev: 'a3',
        name: 'MIGHT',
        img: require('../assets/itemimages/might.png'),
        effects: {},
        currRank: 3,
        description() {
            return `On Finisher:\n${12.5 * (this.currRank + 1)}% chance for +${7.5 * (this.currRank + 1)}% Lifesteal for ${2 * (this.currRank + 1)}s.`
        }
    },
    {
        abrev: 'a4',
        name: 'TRIUMPH',
        img: require('../assets/itemimages/triumph.png'),
        effects: {},
        currRank: 3,
        description() {
            return `On Status Effect:\n${5 * (this.currRank + 1)}% chance for +${50 * (this.currRank + 1)}% Channeling Damage for ${3 * (this.currRank + 1)}s.`
        }
    },
    {
        abrev: 'a5',
        name: 'VALOR',
        img: require('../assets/itemimages/valor.png'),
        effects: {},
        currRank: 3,
        description() {
            return `On Critical Hit:\n${5 * (this.currRank + 1)}% chance for +${50 * (this.currRank + 1)}% Channeling Damage for ${3 * (this.currRank + 1)}s.`
        }
    },
    {
        abrev: 'a6',
        name: 'CONTAGION',
        img: require('../assets/itemimages/contagion.png'),
        effects: {},
        currRank: 3,
        description() {
            return `After a Bullet Jump or Double Jump Air melee launches a projectile that explodes on impact, increasing damage dealt by ${100 * (this.currRank + 1)}% damage after traveling 30m.`
        }
    },
    {
        abrev: 'a7',
        name: 'EPIDEMIC',
        img: require('../assets/itemimages/epidemic.png'),
        effects: {},
        currRank: 3,
        description() {
            return `After a Bullet Jump or Double Jump Slam emits a shockwave forwards that suspends enemies in the air for ${this.currRank + 1}s.`
        }
    }
]

export default zawArcanes;