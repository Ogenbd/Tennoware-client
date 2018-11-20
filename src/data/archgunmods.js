//abrev at b8

const archgunMods = [
    {
        abrev: 'a0',
        name: 'Automatic Trigger',
        img: require('../assets/modimages/automatic-trigger.jpg'),
        type: 'ARCH-GUN',
        rarity: 'rare',
        polarity: 'madurai',
        effects: { fireRate: 0.075 },
        maxRank: 5,
        currRank: 5,
        baseCost: 10,
        description() { return `+${Math.round(this.effects.fireRate * (this.currRank + 1) * 1000) / 10}% Fire Rate` }
    },
    {
        abrev: 'b6',
        name: 'Charged Bullets',
        img: require('../assets/modimages/unavail.jpg'),
        type: 'ARCH-GUN',
        rarity: 'rare',
        polarity: 'madurai',
        effects: { elemental: { damage: 0.15, type: 'Electicity' }, status: 0.15 },
        maxRank: 3,
        currRank: 3,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.elemental.damage * (this.currRank + 1) * 100)}% Electricity +${Math.round(this.effects.status * (this.currRank + 1) * 100)}% Status Chance` }
    },
    {
        abrev: 'a1',
        name: 'Combustion Rounds',
        img: require('../assets/modimages/combustion-rounds.jpg'),
        type: 'ARCH-GUN',
        rarity: 'uncommon',
        polarity: 'madurai',
        effects: { elemental: { damage: 0.2, type: 'Heat' } },
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.elemental.damage * (this.currRank + 1) * 100)}% Heat` }
    },
    {
        abrev: 'a2',
        name: 'Comet Blast',
        img: require('../assets/modimages/comet-blast.jpg'),
        type: 'ARCH-GUN',
        rarity: 'rare',
        polarity: 'naramon',
        effects: { impact: 0.15 },
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `+${Math.round(this.effects.impact * (this.currRank + 1) * 100)}% Impact` }
    },
    {
        abrev: 'b8',
        name: 'Contamination Casing',
        img: require('../assets/modimages/unavail.jpg'),
        type: 'ARCH-GUN',
        rarity: 'rare',
        polarity: 'madurai',
        effects: { elemental: { damage: 0.15, type: 'Toxin' }, status: 0.15 },
        maxRank: 3,
        currRank: 3,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.elemental.damage * (this.currRank + 1) * 100)}% Toxin +${Math.round(this.effects.status * (this.currRank + 1) * 100)}% Status Chance` }
    },
    {
        abrev: 'a3',
        name: 'Dual Rounds',
        img: require('../assets/modimages/dual-rounds.jpg'),
        type: 'ARCH-GUN',
        rarity: 'rare',
        polarity: 'madurai',
        effects: { Multishot: 0.05 },
        maxRank: 5,
        currRank: 5,
        baseCost: 6,
        description() { return `+${Math.round(this.effects.Multishot * (this.currRank + 1) * 100)}% Multishot` }
    },
    {
        abrev: 'a4',
        name: 'Electrified Barrel',
        img: require('../assets/modimages/electrified-barrel.jpg'),
        type: 'ARCH-GUN',
        rarity: 'uncommon',
        polarity: 'naramon',
        effects: { elemental: { damage: 0.2, type: 'Electricity' } },
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.elemental.damage * (this.currRank + 1) * 100)}% Electricity` }
    },
    {
        abrev: 'a5',
        name: 'Hollowed Bullets',
        img: require('../assets/modimages/hollowed-bullets.jpg'),
        type: 'ARCH-GUN',
        rarity: 'rare',
        polarity: 'madurai',
        effects: { critMult: 0.15 },
        maxRank: 3,
        currRank: 3,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.critMult * (this.currRank + 1) * 100)}% Critical Damage` }
    },
    {
        abrev: 'b7',
        name: 'Hypothermic Shell',
        img: require('../assets/modimages/unavail.jpg'),
        type: 'ARCH-GUN',
        rarity: 'rare',
        polarity: 'madurai',
        effects: { elemental: { damage: 0.15, type: 'Cold' }, status: 0.15 },
        maxRank: 3,
        currRank: 3,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.elemental.damage * (this.currRank + 1) * 100)}% Cold +${Math.round(this.effects.status * (this.currRank + 1) * 100)}% Status Chance` }
    },
    {
        abrev: 'a6',
        name: 'Magazine Extension',
        img: require('../assets/modimages/magazine-extension.jpg'),
        type: 'ARCH-GUN',
        rarity: 'common',
        polarity: 'naramon',
        effects: { magSize: 0.1 },
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.magSize * (this.currRank + 1) * 100)}% Magazine Capacity` }
    },
    {
        abrev: 'a7',
        name: 'Magma Chamber',
        img: require('../assets/modimages/magma-chamber.jpg'),
        type: 'ARCH-GUN',
        rarity: 'rare',
        polarity: 'madurai',
        effects: { elemental: { damage: 0.15, type: 'Heat' }, status: 0.15 },
        maxRank: 3,
        currRank: 3,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.elemental.damage * (this.currRank + 1) * 100)}% Heat +${Math.round(this.effects.status * (this.currRank + 1) * 100)}% Status Chance` }
    },
    {
        abrev: 'a8',
        name: 'Modified Munitions',
        img: require('../assets/modimages/modified-munitions.jpg'),
        type: 'ARCH-GUN',
        rarity: 'uncommon',
        polarity: 'vazarin',
        effects: { status: 0.1 },
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.status * (this.currRank + 1) * 100)}% Status Chance` }
    },
    {
        abrev: 'a9',
        name: 'Parallax Scope',
        img: require('../assets/modimages/parallax-scope.jpg'),
        type: 'ARCH-GUN',
        rarity: 'common',
        polarity: 'naramon',
        effects: { critChance: 0.2 },
        maxRank: 3,
        currRank: 3,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.critChance * (this.currRank + 1) * 100)}% Critical Chance` }
    },
    {
        abrev: 'b0',
        name: 'Polar Magazine',
        img: require('../assets/modimages/polar-magazine.jpg'),
        type: 'ARCH-GUN',
        rarity: 'uncommon',
        polarity: 'vazarin',
        effects: { elemental: { damage: 0.2, type: 'Cold' } },
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.elemental.damage * (this.currRank + 1) * 100)}% Cold` }
    },
    {
        abrev: 'b1',
        name: 'Quasar Drill',
        img: require('../assets/modimages/quasar-drill.jpg'),
        type: 'ARCH-GUN',
        rarity: 'rare',
        polarity: 'naramon',
        effects: { puncture: 0.15 },
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `+${Math.round(this.effects.puncture * (this.currRank + 1) * 100)}% Puncture` }
    },
    {
        abrev: 'b2',
        name: 'Rubedo-Lined Barrel',
        img: require('../assets/modimages/rubedo-lined-barrel.jpg'),
        type: 'ARCH-GUN',
        rarity: 'uncommon',
        polarity: 'madurai',
        effects: { baseDamage: 0.1 },
        maxRank: 5,
        currRank: 5,
        baseCost: 6,
        description() { return `+${Math.round(this.effects.baseDamage * (this.currRank + 1) * 100)}% Damage` }
    },
    {
        abrev: 'b3',
        name: 'Shell Rush',
        img: require('../assets/modimages/shell-rush.jpg'),
        type: 'ARCH-GUN',
        rarity: 'uncommon',
        polarity: 'vazarin',
        effects: { chargeRate: 0.125 },
        maxRank: 3,
        currRank: 3,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.chargeRate * (this.currRank + 1) * 100)}% Charge Rate` }
    },
    {
        abrev: 'b4',
        name: 'Venomous Clip',
        img: require('../assets/modimages/venomous-clip.jpg'),
        type: 'ARCH-GUN',
        rarity: 'uncommon',
        polarity: 'vazarin',
        effects: { elemental: { damage: 0.2, type: 'Toxin' } },
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.elemental.damage * (this.currRank + 1) * 100)}% Toxin` }
    },
    {
        abrev: 'b5',
        name: 'Zodiac Shred',
        img: require('../assets/modimages/zodiac-shred.jpg'),
        type: 'ARCH-GUN',
        rarity: 'rare',
        polarity: 'naramon',
        effects: { slash: 0.15 },
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `+${Math.round(this.effects.slash * (this.currRank + 1) * 100)}% Slash` }
    }
]

export default archgunMods;