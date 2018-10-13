const secondaryMods = [
    {
        abrev: 'a0',
        name: 'Air Recon',
        type: 'PISTOL',
        rarity: 'uncommon',
        polarity: 'naramon',
        effects: { none: 0.15 },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Decrease zoom by -${Math.round(this.effects.none * (this.currRank + 1) * 100)}% during Aim Glide` }
    },
    {
        abrev: 'ri',
        name: 'Riven Mod',
        img: require('../assets/squareriven.jpg'),
        type: 'PISTOL',
        rarity: 'riven',
        polarity: 'madurai',
        effects: [],
        maxRank: 8,
        currRank: 8,
        baseCost: 10,
        effectOne: 'None',
        numOne: '',
        effectTwo: 'None',
        numTwo: '',
        effectThree: 'None',
        numThree: '',
        effectFour: 'None',
        numFour: '',
        desc: '',
        description() { return this.desc }
    },
]

export default secondaryMods;