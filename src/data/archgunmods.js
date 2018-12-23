//abrev at c6

const archgunMods = [
    {
        abrev: 'c6',
        name: 'Ammo Chain',
        img: require('../assets/modimages/unavail.jpg'),
        type: 'ARCH-GUN',
        rarity: 'common',
        polarity: 'madurai',
        effects: { maxAmmo: 0.1667 },
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `+${Math.round(this.effects.maxAmmo * (this.currRank + 1) * 100)}% Ammo Maximum` }
    },
    {
        abrev: 'a0',
        name: 'Automatic Trigger',
        img: require('../assets/modimages/automatic-trigger.jpg'),
        type: 'ARCH-GUN',
        rarity: 'rare',
        polarity: 'madurai',
        effects: { fireRate: 0.1 },
        maxRank: 5,
        currRank: 5,
        baseCost: 10,
        description() { return `+${Math.round(this.effects.fireRate * (this.currRank + 1) * 100)}% Fire Rate` }
    },
    {
        abrev: 'c5',
        name: 'Arch-Gun Ace',
        img: require('../assets/modimages/arch-gun-ace.jpg'),
        type: 'ARCH-GUN',
        rarity: 'rare',
        polarity: 'madurai',
        effects: { fireRate: 0.0833, reload: 0.1666 },
        conditional: { headshotKill: true },
        maxRank: 5,
        currRank: 5,
        baseCost: 6,
        description() { return `On Headshot Kill: +${Math.round(this.effects.fireRate * (this.currRank + 1) * 100)}% Fire/Charge Rate +${Math.round(this.effects.reload * (this.currRank + 1) * 100)}% Reload Speed for ${1.5 * (this.currRank + 1)}s` }
    },
    {
        abrev: 'b6',
        name: 'Charged Bullets',
        img: require('../assets/modimages/charged-bullets.jpg'),
        type: 'ARCH-GUN',
        rarity: 'rare',
        polarity: 'madurai',
        effects: { elemental: { damage: 0.15, type: 'Electricity' }, status: 0.15 },
        maxRank: 3,
        currRank: 3,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.elemental.damage * (this.currRank + 1) * 100)}% Electricity\n+${Math.round(this.effects.status * (this.currRank + 1) * 100)}% Status Chance` }
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
        img: require('../assets/modimages/contamination-casing.jpg'),
        type: 'ARCH-GUN',
        rarity: 'rare',
        polarity: 'madurai',
        effects: { elemental: { damage: 0.15, type: 'Toxin' }, status: 0.15 },
        maxRank: 3,
        currRank: 3,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.elemental.damage * (this.currRank + 1) * 100)}% Toxin\n+${Math.round(this.effects.status * (this.currRank + 1) * 100)}% Status Chance` }
    },
    {
        abrev: 'b9',
        name: 'Critical Focus',
        img: require('../assets/modimages/critical-focus.jpg'),
        type: 'ARCH-GUN',
        rarity: 'rare',
        polarity: 'madurai',
        effects: { critChance: 0.1, critMult: 0.1 },
        conditional: { aiming: true },
        maxRank: 5,
        currRank: 5,
        baseCost: 6,
        description() { return `+${Math.round(this.effects.critChance * (this.currRank + 1) * 1000) / 10}% Critical Chance and Damage while aiming.` }
    },
    {
        abrev: 'c3',
        name: 'Deadly Efficiency',
        img: require('../assets/modimages/deadly-efficiency.jpg'),
        type: 'ARCH-GUN',
        rarity: 'rare',
        polarity: 'madurai',
        effects: { baseDamage: 0.2 },
        conditional: { reload: true },
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        description() { return `On Realod From Empty: +${Math.round(this.effects.baseDamage * (this.currRank + 1) * 100)}% Damage for ${1.5 * (this.currRank + 1)}s.` }
    },
    {
        abrev: 'a3',
        name: 'Dual Rounds',
        img: require('../assets/modimages/dual-rounds.jpg'),
        type: 'ARCH-GUN',
        rarity: 'rare',
        polarity: 'madurai',
        effects: { Multishot: 0.1 },
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
        effects: { critMult: 0.2 },
        maxRank: 3,
        currRank: 3,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.critMult * (this.currRank + 1) * 100)}% Critical Damage` }
    },
    {
        abrev: 'b7',
        name: 'Hypothermic Shell',
        img: require('../assets/modimages/hypothermic-shell.jpg'),
        type: 'ARCH-GUN',
        rarity: 'rare',
        polarity: 'madurai',
        effects: { elemental: { damage: 0.15, type: 'Cold' }, status: 0.15 },
        maxRank: 3,
        currRank: 3,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.elemental.damage * (this.currRank + 1) * 100)}% Cold\n+${Math.round(this.effects.status * (this.currRank + 1) * 100)}% Status Chance` }
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
        description() { return `+${Math.round(this.effects.elemental.damage * (this.currRank + 1) * 100)}% Heat\n+${Math.round(this.effects.status * (this.currRank + 1) * 100)}% Status Chance` }
    },
    {
        abrev: 'c0',
        name: 'Marked Target',
        img: require('../assets/modimages/marked-target.jpg'),
        type: 'ARCH-GUN',
        rarity: 'rare',
        polarity: 'naramon',
        effects: { status: 0.2 },
        conditional: { aiming: true },
        maxRank: 5,
        currRank: 5,
        baseCost: 6,
        description() { return `+${Math.round(this.effects.status * (this.currRank + 1) * 100)}% Status Chance while aiming.` }
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
        effects: { critChance: 0.25 },
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
        abrev: 'c2',
        name: 'Quick Reload',
        img: require('../assets/modimages/unavail.jpg'),
        type: 'ARCH-GUN',
        rarity: 'uncommon',
        polarity: 'naramon',
        effects: { reload: 0.25 },
        maxRank: 3,
        currRank: 3,
        baseCost: 2,
        description() { return `+${Math.round(this.effects.reload * (this.currRank + 1) * 100)}% Reload Speed` }
    },
    {
        abrev: 'c1',
        name: 'Resolute Focus',
        img: require('../assets/modimages/resolute-focus.jpg'),
        type: 'ARCH-GUN',
        rarity: 'uncommon',
        polarity: 'naramon',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        description() { return `+${Math.round(100 / 6 * (this.currRank + 1))}% Chance to resist Staggers/Knockdowns and -${Math.round(50 / 6 * (this.currRank + 1))}% Spread when Aiming.` }
    },
    {
        abrev: 'b2',
        name: 'Rubedo-Lined Barrel',
        img: require('../assets/modimages/rubedo-lined-barrel.jpg'),
        type: 'ARCH-GUN',
        rarity: 'uncommon',
        polarity: 'madurai',
        effects: { baseDamage: 0.1667 },
        maxRank: 5,
        currRank: 5,
        baseCost: 6,
        description() { return `+${Math.round(this.effects.baseDamage * (this.currRank + 1) * 1000) / 10}% Damage` }
    },
    {
        abrev: 'c4',
        name: 'Sabot Rounds',
        img: require('../assets/modimages/sabot-rounds.jpg'),
        type: 'ARCH-GUN',
        rarity: 'rare',
        polarity: 'naramon',
        effects: { baseDamage: 0.1, punchThrough: 0.5 },
        maxRank: 5,
        currRank: 5,
        baseCost: 10,
        description() { return `+${Math.round(this.effects.baseDamage * (this.currRank + 1) * 100)}% Damage\n+${this.effects.punchThrough * (this.currRank + 1)} Punch Through` }
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