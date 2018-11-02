const sentinelMods = [
    {
        abrev: 'a0',
        name: 'Accelerated Deflection',
        img: require('../assets/modimages/accelerated-deflection.jpg'),
        type: 'ROBOTIC',
        rarity: 'uncommon',
        polarity: 'vazarin',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        description() { return `+${15 * (this.currRank + 1)}% Shield Recharge` }
    },
    {
        abrev: 'a1',
        name: 'Ambush',
        img: require('../assets/modimages/ambush.jpg'),
        type: 'SHADE',
        rarity: 'rare',
        polarity: 'penjaga',
        effects: {},
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `When Ghost invisibility is broken, Shade's owner is granted ${30 * (this.currRank + 1)}% Damage for 3s.` }
    },
    {
        abrev: 'a2',
        name: 'Ammo Case',
        img: require('../assets/modimages/ammo-case.jpg'),
        type: 'CARRIER',
        rarity: 'common',
        polarity: 'penjaga',
        effects: { none: [5, 4, 3.5, 3, 2.5, 2] },
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `Increases Ammo Capacity by ${5 * (this.currRank + 1)}% and converts Ammo Pickups into ammo for equipped weapons after ${this.effects.none[this.currRank]}s.` }
    },
    {
        abrev: 'a3',
        name: 'Animal Instinct',
        img: require('../assets/modimages/animal-instinct.jpg'),
        type: 'ROBOTIC',
        rarity: 'rare',
        polarity: 'naramon',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 6,
        description() { return `+${5 * (this.currRank + 1)} Loot Radar +${3 * (this.currRank + 1)} Enemy Radar` }
    },
    {
        abrev: 'a4',
        name: 'Arc Coil',
        img: require('../assets/modimages/arc-coil.jpg'),
        type: 'DIRIGA',
        rarity: 'common',
        polarity: 'penjaga',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `Sentinel will zap up to ${2 + this.currRank} enemies within 10m, dealing 100 Electricity Damage with a 10% Status Chance.` }
    },
    {
        abrev: 'a5',
        name: 'Calculated Redirection',
        img: require('../assets/modimages/calculated-redirection.jpg'),
        type: 'ROBOTIC',
        rarity: 'common',
        polarity: 'vazarin',
        effects: { shields: 0.25 },
        maxRank: 10,
        currRank: 10,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.shields * (this.currRank + 1) * 100)}% Shield Capacity` }
    },
    {
        abrev: 'a6',
        name: 'Calculated Shot',
        img: require('../assets/modimages/calculated-shot.jpg'),
        type: 'DIRIGA',
        rarity: 'common',
        polarity: 'penjaga',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 0,
        description() { return `Sentinel charges a powerful shot and fires at the first enemy within ${40 + (6 * this.currRank)}m.` }
    },
    {
        abrev: 'a7',
        name: 'Coolant Leak',
        img: require('../assets/modimages/coolant-leak.jpg'),
        type: 'ROBOTIC',
        rarity: 'rare',
        polarity: 'penjaga',
        effects: {},
        maxRank: 0,
        currRank: 0,
        baseCost: 4,
        description() { return `Sentinel has a 3m freeze aura, slowing incoming enemies by 10%.` }
    },
    {
        abrev: 'a8',
        name: 'Crowd Dispersion',
        img: require('../assets/modimages/crowd-dispersion.jpg'),
        type: 'WYRM',
        rarity: 'common',
        polarity: 'penjaga',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `Unleashes a ${6 + 0.8 * this.currRank}m radial knockdown when multiple enemies are nearby, dealing ${6 + 0.8 * this.currRank} Damage.` }
    },
    {
        abrev: 'a9',
        name: 'Detect Vulnerability',
        img: require('../assets/modimages/detect-vulnerability.jpg'),
        type: 'HELIOS',
        rarity: 'rare',
        polarity: 'penjaga',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 6,
        description() { return `Upon completing research on an enemy, subsequent scans will reveal their weak points.` }
    },
    {
        abrev: 'b0',
        name: 'Electro Pulse',
        img: require('../assets/modimages/electro-pulse.jpg'),
        type: 'DIRIGA',
        rarity: 'common',
        polarity: 'penjaga',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `Every ${10 - this.currRank}s, Sentinel will continually zap an enemy within 15m, trapping them in a stunned state.` }
    },
    {
        abrev: 'b1',
        name: 'Energy Generator',
        img: require('../assets/modimages/energy-generator.jpg'),
        type: 'DETHCUBE',
        rarity: 'rare',
        polarity: 'penjaga',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        description() { return `Dethcube drops an Energy Orb after assisting in ${15 - this.currRank} kills.` }
    },
    {
        abrev: 'b2',
        name: 'Enhanced Vitality',
        img: require('../assets/modimages/enhanced-vitality.jpg'),
        type: 'ROBOTIC',
        rarity: 'common',
        polarity: 'vazarin',
        effects: { health: 0.2 },
        maxRank: 10,
        currRank: 10,
        baseCost: 2,
        description() { return `+${Math.round(this.effects.health * (this.currRank + 1) * 100)}% Health` }
    },
    {
        abrev: 'b3',
        name: 'Fatal Attraction',
        img: require('../assets/modimages/fatal-attraction.jpg'),
        type: 'DJINN',
        rarity: 'common',
        polarity: 'penjaga',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `Enemies within ${10 + 2 * this.currRank}m will be attracted. Once they come within ${3.5 + 0.5 * this.currRank}m, explode for ${100 + 25 * this.currRank} Damage.` }
    },
    {
        abrev: 'b4',
        name: 'Fired Up',
        img: require('../assets/modimages/fired-up.jpg'),
        type: 'ROBOTIC',
        rarity: 'rare',
        polarity: 'madurai',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 6,
        description() { return `+${10 * (this.currRank + 1)}% Heat at Max Overheat` }
    },
    {
        abrev: 'b5',
        name: 'Ghost',
        img: require('../assets/modimages/ghost.jpg'),
        type: 'SHADE',
        rarity: 'common',
        polarity: 'penjaga',
        effects: { none: [5.8, 6.7, 7.5, 8.3, 9.2, 10] },
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `Cloaks owner when enemies are within ${this.effects.none[this.currRank]}m. The cloak is disrupted if owner attacks.` }
    },
    {
        abrev: 'b6',
        name: 'Guardian',
        img: require('../assets/modimages/guardian.jpg'),
        type: 'ROBOTIC',
        rarity: 'common',
        polarity: 'penjaga',
        effects: { none: [58, 67, 75, 83, 92, 100] },
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `Boosts owner's shield by ${this.effects.none[this.currRank]}% when it runs out.` }
    },
    {
        abrev: 'b7',
        name: 'Investigator',
        img: require('../assets/modimages/investigator.jpg'),
        type: 'HELIOS',
        rarity: 'common',
        polarity: 'penjaga',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        description() { return `Helios Sentinel will scan objects and enemies within ${20 + 6 * this.currRank}m over ${5 - 0.6 * this.currRank}s. This consumes codex scanner charges.` }
    },
    {
        abrev: 'b8',
        name: 'Looter',
        img: require('../assets/modimages/looter.jpg'),
        type: 'CARRIER',
        rarity: 'rare',
        polarity: 'penjaga',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `Destroys loot crates within ${4.5 + 1.5 * (this.currRank)}m.` }
    },
    {
        abrev: 'b9',
        name: 'Medi-Ray',
        img: require('../assets/modimages/medi-ray.jpg'),
        type: 'ROBOTIC',
        rarity: 'uncommon',
        polarity: 'penjaga',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 0,
        description() { return `Sentinel will occasionally heal its owner,,restoring ${2 * (this.currRank + 1)}% health over 4s` }
    },
    {
        abrev: 'c0',
        name: 'Metal Fiber',
        img: require('../assets/modimages/metal-fiber.jpg'),
        type: 'ROBOTIC',
        rarity: 'common',
        polarity: 'vazarin',
        effects: { armor: 0.1 },
        maxRank: 10,
        currRank: 10,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.armor * (this.currRank + 1) * 100)}% Armor` }
    },
    {
        abrev: 'c1',
        name: 'Molecular Conversion',
        img: require('../assets/modimages/molecular-conversion.jpg'),
        type: 'TAXON',
        rarity: 'common',
        polarity: 'penjaga',
        effects: { none: [50, 75, 100, 125, 150, 200] },
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `Blast enemies within 10m, converting ${this.effects.none[this.currRank]} Damage into Shields for the Warframe.` }
    },
    {
        abrev: 'c2',
        name: 'Negate',
        img: require('../assets/modimages/negate.jpg'),
        type: 'WYRM',
        rarity: 'rare',
        polarity: 'penjaga',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        description() { return `Sentinel prevents Status Effects from applying to its owner once every ${15 - this.currRank * 2}s.` }
    },
    {
        abrev: 'c3',
        name: 'Primed Regen',
        img: require('../assets/modimages/primed-regen.jpg'),
        type: 'ROBOTIC',
        rarity: 'prime',
        polarity: 'penjaga',
        effects: { none: [1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3] },
        maxRank: 10,
        currRank: 10,
        baseCost: 4,
        description() { return `If killed, regenerates ${this.effects.none[this.currRank]}x with ${50 + 5 * this.currRank}% Max Health and is invulnerable for ${this.currRank + 1}s.` }
    },
    {
        abrev: 'c4',
        name: 'Reawaken',
        img: require('../assets/modimages/reawaken.jpg'),
        type: 'DJINN',
        rarity: 'rare',
        polarity: 'penjaga',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        description() { return `Upon death, automatically revives itself after ${165 - 15 * this.currRank}s.` }
    },
    {
        abrev: 'c5',
        name: 'Regen',
        img: require('../assets/modimages/regen.jpg'),
        type: '',
        rarity: 'common',
        polarity: 'penjaga',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `If killed, regenerates 1x with ${58 + 8 * this.currRank}% Max Health and is invulnerable for ${this.currRank + 1}s.` }
    },
    {
        abrev: 'c6',
        name: 'Retarget',
        img: require('../assets/modimages/retarget.jpg'),
        type: 'TAXON',
        rarity: 'common',
        polarity: 'penjaga',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 0,
        description() { return `Sentinel will attack first visible enemy within ${17.5 + 2.5 * this.currRank}m.` }
    },
    {
        abrev: 'c7',
        name: 'Revenge',
        img: require('../assets/modimages/revenge.jpg'),
        type: 'SHADE',
        rarity: 'common',
        polarity: 'penjaga',
        effects: { none: [5.8, 6.6, 7.5, 8.3, 9.1, 10] },
        maxRank: 5,
        currRank: 5,
        baseCost: 0,
        description() { return `Sentinel will not attack an enemy unless that enemy has attacked the Sentinel's master within ${this.effects.none[this.currRank]}m.` }
    },
    {
        abrev: 'c8',
        name: 'Sacrifice',
        img: require('../assets/modimages/sacrifice.jpg'),
        type: 'ROBOTIC',
        rarity: 'rare',
        polarity: 'penjaga',
        effects: {},
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Sentinel takes ${7 - this.currRank * 1}s to revive its downed owner to ${25 * (this.currRank + 1)}% health and shields, destroying itself after the process.` }
    },
    {
        abrev: 'c8',
        name: 'Sanctuary',
        img: require('../assets/modimages/sanctuary.jpg'),
        type: 'ROBOTIC',
        rarity: 'rare',
        polarity: 'vazarin',
        effects: {},
        maxRank: 10,
        currRank: 10,
        baseCost: 6,
        description() { return `Creates a shield with ${100 + 50 * this.currRank} Health around the player when they are reviving fallen allies.` }
    },
    {
        abrev: 'c9',
        name: 'Self Destruct',
        img: require('../assets/modimages/self-destruct.jpg'),
        type: 'ROBOTIC',
        rarity: 'rare',
        polarity: 'madurai',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `Explodes on death, dealing ${100 * (this.currRank + 1)} Blast Damage in a ${3 * (this.currRank + 1)}m radius and knocking down nearby enemies.` }
    },
    {
        abrev: 'd0',
        name: 'Shield Charger',
        img: require('../assets/modimages/shield-charger.jpg'),
        type: 'ROBOTICS',
        rarity: 'rare',
        polarity: 'penjaga',
        effects: { shields: 0.1 },
        maxRank: 5,
        currRank: 5,
        baseCost: 0,
        description() { return `Increases Max Shields by ${Math.round(this.effects.shields * (this.currRank + 1) * 100)}% and Shield Regeneration by ${10 * (this.currRank + 1)}% for 5s.` }
    },
    {
        abrev: 'd1',
        name: 'Spare Parts',
        img: require('../assets/modimages/spare-parts.jpg'),
        type: 'ROBOTIC',
        rarity: 'uncommon',
        polarity: 'naramon',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `+${7.5 * (this.currRank + 1)}% Rare Item Drop Chance On Death` }
    },
    {
        abrev: 'd2',
        name: 'Striker',
        img: require('../assets/modimages/striker.jpg'),
        type: 'CARRIER',
        rarity: 'common',
        polarity: 'penjaga',
        effects: { none: [5.8, 6.6, 7.5, 8.3, 9.1, 10] },
        maxRank: 5,
        currRank: 5,
        baseCost: 0,
        description() { return `Carrier will attack the first visible enemy within ${this.effects.none[this.currRank]}m.` }
    },
    {
        abrev: 'd3',
        name: 'Swift Deth',
        img: require('../assets/modimages/swift-deth.jpg'),
        type: 'DETHCUBE',
        rarity: 'common',
        polarity: 'penjaga',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 0,
        description() { return `Sentinel will attack the first visible enemy within ${17.5 + 2.5 * this.currRank}m.` }
    },
    {
        abrev: 'd4',
        name: 'Targeting Receptor',
        img: require('../assets/modimages/targeting-receptor.jpg'),
        type: 'HELIOS',
        rarity: 'common',
        polarity: 'penjaga',
        effects: { none: [1, 2, 3, 3] },
        maxRank: 3,
        currRank: 3,
        baseCost: 0,
        description() { return `Causes the Helios Sentinel to attack targets within 10m with ${this.effects.none[this.currRank]} glaives.` }
    },
    {
        abrev: 'd5',
        name: 'Thumper',
        img: require('../assets/modimages/thumper.jpg'),
        type: 'DJINN',
        rarity: 'common',
        polarity: 'penjaga',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 0,
        description() { return `Djinn will attack the first visible enemy within ${35 + 5 * this.currRank}m.` }
    },
    {
        abrev: 'd6',
        name: 'Vacuum',
        img: require('../assets/modimages/vacuum.jpg'),
        type: 'ROBOTIC',
        rarity: 'common',
        polarity: 'penjaga',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `Detects and collects items within ${6.5 + 1 * this.currRank}m for its master, including mods.` }
    },
    {
        abrev: 'd7',
        name: 'Vaporize',
        img: require('../assets/modimages/vaporize.jpg'),
        type: 'DETHCUBE',
        rarity: 'common',
        polarity: 'penjaga',
        effects: { none: [[2.3, 2.6, 3, 3.3, 3.6, 4], [150, 300, 450, 600, 600, 600]] },
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `Sentinel will deal ${this.effects.none[1][this.currRank]} Damage to an enemy within ${this.effects.none[0][this.currRank]}m.` }
    },
    {
        abrev: 'd8',
        name: 'Warrior',
        img: require('../assets/modimages/warrior.jpg'),
        type: 'WYRM',
        rarity: 'common',
        polarity: 'penjaga',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 0,
        description() { return `Sentinel will attack first visible enemy within ${17.5 + 2.5 * this.currRank}m.` }
    }
]

export default sentinelMods