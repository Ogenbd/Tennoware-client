//abrev at b7

const archmeleeMods = [
    {
        abrev: 'a0',
        name: 'Astral Autopsy',
        img: require('../assets/modimages/astral-autopsy.jpg'),
        type: 'ARCH-MELEE',
        rarity: 'rare',
        polarity: 'vazarin',
        effects: {},
        maxRank: 0,
        currRank: 0,
        baseCost: 10,
        description() { return `Fatal strikes against an enemy also perform a Codex Scan. Scans require an equipped Codex Scanner and an available charge.` }
    },
    {
        abrev: 'a1',
        name: 'Astral Slash',
        img: require('../assets/modimages/astral-slash.jpg'),
        type: 'ARCH-MELEE',
        rarity: 'rare',
        polarity: 'naramon',
        effects: { slash: 0.15 },
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `+${Math.round(this.effects.slash * (this.currRank + 1) * 100)}% Slash` }
    },
    {
        abrev: 'a2',
        name: 'Blazing Steel',
        img: require('../assets/modimages/blazing-steel.jpg'),
        type: 'ARCH-MELEE',
        rarity: 'uncommon',
        polarity: 'madurai',
        effects: { elemental: { damage: 0.2, type: 'Heat' } },
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.elemental.damage * (this.currRank + 1) * 100)}% Heat` }
    },
    {
        abrev: 'a3',
        name: 'Bleeding Edge',
        img: require('../assets/modimages/bleeding-edge.jpg'),
        type: 'ARCH-MELEE',
        rarity: 'common',
        polarity: 'madurai',
        effects: { critMult: 0.1 },
        maxRank: 10,
        currRank: 10,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.critMult * (this.currRank + 1) * 100)}% Critical Damage` }
    },
    {
        abrev: 'b5',
        name: 'Cryo Coating',
        img: require('../assets/modimages/unavail.jpg'),
        type: 'ARCH-MELEE',
        rarity: 'rare',
        polarity: 'madurai',
        effects: { elemental: { damage: 0.15, type: 'Cold' }, status: 0.15 },
        maxRank: 3,
        currRank: 3,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.elemental.damage * (this.currRank + 1) * 100)}% Cold +${Math.round(this.effects.status * (this.currRank + 1) * 100)}% Status Chance` }
    },
    {
        abrev: 'a4',
        name: 'Cutting Edge',
        img: require('../assets/modimages/cutting-edge.jpg'),
        type: 'ARCH-MELEE',
        rarity: 'common',
        polarity: 'madurai',
        effects: { baseDamage: 0.1 },
        maxRank: 5,
        currRank: 5,
        baseCost: 6,
        description() { return `+${Math.round(this.effects.baseDamage * (this.currRank + 1) * 100)}% Melee Damage` }
    },

    {
        abrev: 'a5',
        name: 'Extend',
        img: require('../assets/modimages/extend.jpg'),
        type: 'ARCH-MELEE',
        rarity: 'common',
        polarity: 'madurai',
        effects: { range: 0.2 },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `+${Math.round(this.effects.range * (this.currRank + 1) * 100)}% Range` }
    },
    {
        abrev: 'a6',
        name: 'Furor',
        img: require('../assets/modimages/furor.jpg'),
        type: 'ARCH-MELEE',
        rarity: 'uncommon',
        polarity: 'madurai',
        effects: { attackSpeed: 0.025 },
        maxRank: 3,
        currRank: 3,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.range * (this.currRank + 1) * 1000) / 10}% Attack Speed` }
    },
    {
        abrev: 'a7',
        name: 'Galvanized Blade',
        img: require('../assets/modimages/galvanized-blade.jpg'),
        type: 'ARCH-MELEE',
        rarity: 'uncommon',
        polarity: 'naramon',
        effects: { elemental: { damage: 0.2, type: 'Electricity' } },
        maxRank: 5,
        currRank: 5,
        baseCost: 6,
        description() { return `+${Math.round(this.effects.elemental.damage * (this.currRank + 1) * 100)}% Electricity` }
    },
    {
        abrev: 'a8',
        name: 'Glacial Edge',
        img: require('../assets/modimages/glacial-edge.jpg'),
        type: 'ARCH-MELEE',
        rarity: 'uncommon',
        polarity: 'vazarin',
        effects: { elemental: { damage: 0.2, type: 'Cold' } },
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.elemental.damage * (this.currRank + 1) * 100)}% Cold` }
    },
    {
        abrev: 'b7',
        name: 'Infectious Injection',
        img: require('../assets/modimages/unavail.jpg'),
        type: 'ARCH-MELEE',
        rarity: 'rare',
        polarity: 'madurai',
        effects: { elemental: { damage: 0.15, type: 'Toxin' }, status: 0.15 },
        maxRank: 3,
        currRank: 3,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.elemental.damage * (this.currRank + 1) * 100)}% Toxin +${Math.round(this.effects.status * (this.currRank + 1) * 100)}% Status Chance` }
    },
    {
        abrev: 'b6',
        name: 'Ion Infusion',
        img: require('../assets/modimages/unavail.jpg'),
        type: 'ARCH-MELEE',
        rarity: 'rare',
        polarity: 'madurai',
        effects: { elemental: { damage: 0.15, type: 'Electricity' }, status: 0.15 },
        maxRank: 3,
        currRank: 3,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.elemental.damage * (this.currRank + 1) * 100)}% Electricity +${Math.round(this.effects.status * (this.currRank + 1) * 100)}% Status Chance` }
    },
    {
        abrev: 'a9',
        name: 'Meteor Crash',
        img: require('../assets/modimages/meteor-crash.jpg'),
        type: 'ARCH-MELEE',
        rarity: 'rare',
        polarity: 'naramon',
        effects: { impact: 0.15 },
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `+${Math.round(this.effects.impact * (this.currRank + 1) * 100)}% Impact` }
    },
    {
        abrev: 'b0',
        name: 'Nebula Bore',
        img: require('../assets/modimages/nebula-bore.jpg'),
        type: 'ARCH-MELEE',
        rarity: 'rare',
        polarity: 'naramon',
        effects: { puncture: 0.15 },
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `+${Math.round(this.effects.puncture * (this.currRank + 1) * 100)}% Puncture` }
    },
    {
        abrev: 'b1',
        name: 'Poisonous Sting',
        img: require('../assets/modimages/poisonous-sting.jpg'),
        type: 'ARCH-MELEE',
        rarity: 'uncommon',
        polarity: 'naramon',
        effects: { elemental: { damage: 0.2, type: 'Toxin' } },
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.elemental.damage * (this.currRank + 1) * 100)}% Toxin` }
    },
    {
        abrev: 'b2',
        name: 'Searing Steel',
        img: require('../assets/modimages/searing-steel.jpg'),
        type: 'ARCH-MELEE',
        rarity: 'rare',
        polarity: 'madurai',
        effects: { elemental: { damage: 0.15, type: 'Heat' }, status: 0.15 },
        maxRank: 3,
        currRank: 3,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.elemental.damage * (this.currRank + 1) * 100)}% Heat +${Math.round(this.effects.status * (this.currRank + 1) * 100)}% Status Chance` }
    },
    {
        abrev: 'b3',
        name: 'Sudden Impact',
        img: require('../assets/modimages/sudden-impact.jpg'),
        type: 'ARCH-MELEE',
        rarity: 'common',
        polarity: 'vazarin',
        effects: {status: 0.1},
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.status * (this.currRank + 1) * 100)}% Status Chance` }
    },
    {
        abrev: 'b4',
        name: 'Tempered Blade',
        img: require('../assets/modimages/tempered-blade.jpg'),
        type: 'ARCH-MELEE',
        rarity: 'common',
        polarity: 'madurai',
        effects: {critChance: 0.25},
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.critChance * (this.currRank + 1) * 100)}% Critical Chance` }
    },
]

export default archmeleeMods