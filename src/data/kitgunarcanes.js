const kitgunArcanes = [
    {
        abrev: 'a0',
        name: 'BOLT',
        img: require('../assets/itemimages/bolt.png'),
        effects: {},
        currRank: 3,
        description() {
            return `On Headshot Kill:\n+${12.5 * (this.currRank + 1)}% chance for +${7.5 * (this.currRank + 1)} Ability Strength and Efficiency on the next Ability used within ${this.currRank + 1}s.`
        }
    },
    {
        abrev: 'a1',
        name: 'CHARGE',
        img: require('../assets/itemimages/charge.png'),
        effects: {},
        currRank: 3,
        description() {
            return `Converts weapon magazine to rechargable.\nBattery Recharge Delay is reduced by +${12.5 * (this.currRank + 1)}%.`
        }
    },
    {
        abrev: 'a2',
        name: 'SEEKER',
        img: require('../assets/itemimages/seeker.png'),
        effects: {},
        currRank: 3,
        description() {
            return `On Headshot Kill:\n+${25 * (this.currRank + 1)}% chance for ${this.currRank + 1} projectiles burst from the target and seek the heads of nearby enemies.`
        }
    },
    {
        abrev: 'a3',
        name: 'SOAR',
        img: require('../assets/itemimages/soar.png'),
        effects: {},
        currRank: 3,
        description() {
            return `+${12.5 * (this.currRank + 1)}% Accuracy while Airborne\n${-12.5 * (this.currRank + 1)} Weapon Recoil while Airborne\n+${1.25 * (this.currRank + 1)} Aim Glide/Latch Time.`
        }
    },
]

export default kitgunArcanes;