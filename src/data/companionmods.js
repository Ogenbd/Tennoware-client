// at abrev i6

const companionMods = [
    {
        abrev: 'a0',
        name: 'Accelerated Deflection',
        img: require('../assets/modimages/accelerated-deflection.jpg'),
        type: 'SENTINEL',
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
        type: 'ALL',
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
        name: 'Assault Mode',
        family: 'attack',
        img: require('../assets/modimages/assault-mode.jpg'),
        type: 'SENTINEL',
        rarity: 'common',
        polarity: 'penjaga',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 0,
        description() { return `Sentinel will attack first visible enemy within ${17.5 + (2.5 * this.currRank)}m.` }
    },
    {
        abrev: 'a6',
        name: 'Bite',
        img: require('../assets/modimages/bite.jpg'),
        type: 'BEAST',
        rarity: 'rare',
        polarity: 'madurai',
        effects: { critChance: 0.3, critMult: 0.2 },
        maxRank: 10,
        currRank: 10,
        baseCost: 6,
        description() { return `+${Math.round(this.effects.critChance * (this.currRank + 1) * 100)}% Critical Chance +${Math.round(this.effects.critMult * (this.currRank + 1) * 100)}% Critical Damage` }
    },
    {
        abrev: 'a7',
        name: 'Calculated Redirection',
        img: require('../assets/modimages/calculated-redirection.jpg'),
        type: 'SENTINEL',
        rarity: 'common',
        polarity: 'vazarin',
        effects: { shields: 0.25 },
        maxRank: 10,
        currRank: 10,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.shields * (this.currRank + 1) * 100)}% Shield Capacity` }
    },
    {
        abrev: 'a8',
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
        abrev: 'a9',
        name: 'Cat\'s Eye',
        img: require('../assets/modimages/cat\'s-eye.jpg'),
        type: 'ADARZA KAVAT',
        rarity: 'rare',
        polarity: 'penjaga',
        effects: { none: [15, 20, 22, 25] },
        maxRank: 3,
        currRank: 3,
        baseCost: 0,
        description() { return `Adarza Kavat grants ${15 * (this.currRank + 1)}% increased critical chance for ${4 + 2 * this.currRank}s to allies within ${this.effects.none[this.currRank]}m every ${50 - 10 * this.currRank}s.` }
    },
    {
        abrev: 'b0',
        name: 'Charm',
        img: require('../assets/modimages/charm.jpg'),
        type: 'SMEETA KAVAT',
        rarity: 'rare',
        polarity: 'penjaga',
        effects: {},
        maxRank: 3,
        currRank: 3,
        baseCost: 0,
        description() { return `Smeeta Kavat has a ${7 * (this.currRank + 1)}% chance every ${30 - 1 * this.currRank}s to bestow its owner with good fortune.` }
    },
    {
        abrev: 'b1',
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
        abrev: 'b2',
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
        abrev: 'b3',
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
        abrev: 'b4',
        name: 'Dig',
        img: require('../assets/modimages/dig.jpg'),
        type: 'SAHASA KUBROW',
        rarity: 'rare',
        polarity: 'penjaga',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 0,
        description() { return `The kubrow sniffs out buried objects and digs them up. +${45 * (this.currRank + 1)}% Success Chance` }
    },
    {
        abrev: 'b5',
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
        abrev: 'b6',
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
        abrev: 'b7',
        name: 'Enhanced Vitality',
        img: require('../assets/modimages/enhanced-vitality.jpg'),
        type: 'SENTINEL',
        rarity: 'common',
        polarity: 'vazarin',
        effects: { health: 0.2 },
        maxRank: 10,
        currRank: 10,
        baseCost: 2,
        description() { return `+${Math.round(this.effects.health * (this.currRank + 1) * 100)}% Health` }
    },
    {
        abrev: 'b8',
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
        abrev: 'b9',
        name: 'Fetch',
        img: require('../assets/modimages/fetch.jpg'),
        type: 'BEAST',
        rarity: 'uncommon',
        polarity: 'penjaga',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `${8.5 + this.currRank}m Companion Gather-Link. Detects and collects items, including mods.` }
    },
    {
        abrev: 'c0',
        name: 'Fired Up',
        img: require('../assets/modimages/fired-up.jpg'),
        type: 'SENTINEL',
        rarity: 'rare',
        polarity: 'madurai',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 6,
        description() { return `+${10 * (this.currRank + 1)}% Heat at Max Overheat` }
    },
    {
        abrev: 'i3',
        name: 'Flame Gland',
        img: require('../assets/modimages/unavail.jpg'),
        type: 'BEAST',
        rarity: 'rare',
        polarity: 'madurai',
        effects: { elemental: { damage: 0.15, type: 'Heat' }, status: 0.15 },
        maxRank: 3,
        currRank: 3,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.elemental.damage * (this.currRank + 1) * 100)}% Heat +${Math.round(this.effects.status * (this.currRank + 1) * 100)}% Status Chance` }
    },
    {
        abrev: 'i4',
        name: 'Frost Jaw',
        img: require('../assets/modimages/unavail.jpg'),
        type: 'BEAST',
        rarity: 'rare',
        polarity: 'madurai',
        effects: { elemental: { damage: 0.15, type: 'Cold' }, status: 0.15 },
        maxRank: 3,
        currRank: 3,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.elemental.damage * (this.currRank + 1) * 100)}% Cold +${Math.round(this.effects.status * (this.currRank + 1) * 100)}% Status Chance` }
    },
    {
        abrev: 'c1',
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
        abrev: 'c2',
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
        abrev: 'i2',
        name: 'Hastened Deflection',
        img: require('../assets/modimages/hastened-deflection.jpg'),
        type: 'Beast',
        rarity: 'uncommon',
        polarity: 'vazarin',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        description() { return `+${15 * (this.currRank + 1)}% Shield Recharge` }
    },
    {
        abrev: 'c3',
        name: 'Howl',
        img: require('../assets/modimages/howl.jpg'),
        type: 'RAKSA KUBROW',
        rarity: 'rare',
        polarity: 'penjaga',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 0,
        description() { return `The kubrow cries out with a blood-curdling howl that strikes fear into ${5 + 2 * this.currRank} enemies within ${4 * (this.currRank + 1)}m for ${6 + 2 * this.currRank}s.` }
    },
    {
        abrev: 'c4',
        name: 'Hunt',
        img: require('../assets/modimages/hunt.jpg'),
        type: 'HURAS KUBROW',
        rarity: 'rare',
        polarity: 'penjaga',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 0,
        description() { return `The kubrow charges ahead to attack an enemy, dealing ${35 + 25 * this.currRank} Damage to all in its path.` }
    },
    {
        abrev: 'c5',
        name: 'Hunter Command',
        img: require('../assets/modimages/hunter-command.jpg'),
        type: 'BEAST',
        rarity: 'rare',
        polarity: 'madurai',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        set: { setName: 'hunter', setMax: 6, setCurr: 1 },
        description() {
            return [`Applying a Slash Status to an enemy causes the Companion to attack them for ${this.currRank + 1}s.`, `+${25 * this.set.setCurr}% Companion Damage on enemies effected by Slash proc.`]
        }
    },
    {
        abrev: 'c6',
        name: 'Hunter Recovery',
        img: require('../assets/modimages/hunter-recovery.jpg'),
        type: 'BEAST',
        rarity: 'common',
        polarity: 'madurai',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        set: { setName: 'hunter', setMax: 6, setCurr: 1 },
        description() {
            return [`+${5 * (this.currRank + 1)}% Companion Lifesteal-Link`, `+${25 * this.set.setCurr}% Companion Damage on enemies effected by Slash proc.`]
        }
    },
    {
        abrev: 'c7',
        name: 'Hunter Synergy',
        img: require('../assets/modimages/hunter-synergy.jpg'),
        type: 'BEAST',
        rarity: 'uncommon',
        polarity: 'madurai',
        effects: { critLink: 0.05 },
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        set: { setName: 'hunter', setMax: 6, setCurr: 1 },
        description() {
            return [`+${5 * (this.currRank + 1)}% Critical Chance-Link`, `+${25 * this.set.setCurr}% Companion Damage on enemies effected by Slash proc.`]
        }
    },
    {
        abrev: 'c8',
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
        abrev: 'c9',
        name: 'Link Armor',
        img: require('../assets/modimages/link-armor.jpg'),
        type: 'COMPANION',
        rarity: 'uncommon',
        polarity: 'vazarin',
        effects: { armorLink: 0.1 },
        maxRank: 10,
        currRank: 10,
        baseCost: 4,
        description() { return `+${10 * (this.currRank + 1)}% Armor-Link` }
    },
    {
        abrev: 'd0',
        name: 'Link Health',
        img: require('../assets/modimages/link-health.jpg'),
        type: 'COMPANION',
        rarity: 'uncommon',
        polarity: 'vazarin',
        effects: { healthLink: 0.15 },
        maxRank: 10,
        currRank: 10,
        baseCost: 2,
        description() { return `+${15 * (this.currRank + 1)}% Health-Link` }
    },
    {
        abrev: 'd1',
        name: 'Link Shields',
        img: require('../assets/modimages/link-shields.jpg'),
        type: 'COMPANION',
        rarity: 'uncommon',
        polarity: 'vazarin',
        effects: { shieldsLink: 0.1 },
        maxRank: 10,
        currRank: 10,
        baseCost: 4,
        description() { return `+${10 * (this.currRank + 1)}% Shield-Link` }
    },
    {
        abrev: 'd2',
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
        abrev: 'd3',
        name: 'Loyal Companion',
        img: require('../assets/modimages/loyal-companion.jpg'),
        type: 'COMPANION',
        rarity: 'common',
        polarity: 'vazarin',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `+${15 * (this.currRank + 1)}% Bleedout-Link` }
    },
    {
        abrev: 'd4',
        name: 'Maul',
        img: require('../assets/modimages/maul.jpg'),
        type: 'BEAST',
        rarity: 'uncommon',
        polarity: 'madurai',
        effects: { baseDamage: 0.3 },
        maxRank: 10,
        currRank: 10,
        baseCost: 4,
        description() { return `+${30 * (this.currRank + 1)}% Melee Damage` }
    },
    {
        abrev: 'd5',
        name: 'Mecha Overdrive',
        img: require('../assets/modimages/mecha-overdrive.jpg'),
        type: 'KUBROW',
        rarity: 'rare',
        polarity: 'madurai',
        effects: { statusLink: 0.1 },
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        set: { setName: 'mecha', setMax: 4, setCurr: 1 },
        description() { return [`+${Math.round(this.effects.statusLink * (this.currRank + 1) * 100)}% Status-Link +${15 * (this.currRank + 1)}% Status Duration`, `Kubrow Marks an enemy every ${60 - (15 * (this.set.setCurr - 1))}s for ${3 * this.set.setCurr}s. Kill them to apply their Status Effects to all enemies within ${7.5 * this.set.setCurr}m.`] }
    },
    {
        abrev: 'd6',
        name: 'Mecha Recharge',
        img: require('../assets/modimages/mecha-recharge.jpg'),
        type: 'KUBROW',
        rarity: 'rare',
        polarity: 'madurai',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        set: { setName: 'mecha', setMax: 4, setCurr: 1 },
        description() { return [`+${15 * (this.currRank + 1)}% Shield Recharge`, `Kubrow Marks an enemy every ${60 - (15 * (this.set.setCurr - 1))}s for ${3 * this.set.setCurr}s. Kill them to apply their Status Effects to all enemies within ${7.5 * this.set.setCurr}m.`] }
    },
    {
        abrev: 'd7',
        name: 'Medi-Pet Kit',
        img: require('../assets/modimages/medi-pet-kit.jpg'),
        type: 'COMPANION',
        rarity: 'rare',
        polarity: 'vazarin',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        description() { return `+${this.currRank + 1} Heal Rate/s +${12 * (this.currRank + 1)}% Bleedout Reduction` }
    },
    {
        abrev: 'd8',
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
        abrev: 'd9',
        name: 'Metal Fiber',
        img: require('../assets/modimages/metal-fiber.jpg'),
        type: 'SENTINEL',
        rarity: 'common',
        polarity: 'vazarin',
        effects: { armor: 0.1 },
        maxRank: 10,
        currRank: 10,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.armor * (this.currRank + 1) * 100)}% Armor` }
    },
    {
        abrev: 'e0',
        name: 'Mischief',
        img: require('../assets/modimages/mischief.jpg'),
        type: 'SMEETA KAVAT',
        rarity: 'rare',
        polarity: 'penjaga',
        effects: {},
        maxRank: 3,
        currRank: 3,
        baseCost: 0,
        description() { return `Allows Smeeta Kavat to become invisible for ${6 + 1 * this.currRank}s every ${10 - 1 * this.currRank}s while a decoy kavat draws fire. Decoy has a ${5 * this.currRank}% chance to evade damage.` }
    },
    {
        abrev: 'e1',
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
        abrev: 'e2',
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
        abrev: 'e3',
        name: 'Neutralize',
        img: require('../assets/modimages/neutralize.jpg'),
        type: 'CHESA KUBROW',
        rarity: 'rare',
        polarity: 'penjaga',
        effects: { none: [10, 13, 17, 20, 20, 20] },
        maxRank: 5,
        currRank: 5,
        baseCost: 0,
        description() { return `The kubrow bites the hand of an enemy within ${this.effects.none[this.currRank]}m, causing them to drop their weapon.` }
    },
    {
        abrev: 'e4',
        name: 'Pack Leader',
        img: require('../assets/modimages/pack-leader.jpg'),
        type: 'COMPANION',
        rarity: 'common',
        polarity: 'madurai',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 4,
        description() { return `Heals your pet by a percentage of the damage you deal with Melee Attacks. +${6 * (this.currRank + 1)}% Lifesteal-Link` }
    },
    {
        abrev: 'e5',
        name: 'Pounce',
        img: require('../assets/modimages/pounce.jpg'),
        type: 'KAVAT',
        rarity: 'uncommon',
        polarity: 'madurai',
        effects: {},
        maxRank: 3,
        currRank: 3,
        baseCost: 2,
        description() { return `The Kavat pounces at an enemy, stunning them for a short duration.` }
    },
    {
        abrev: 'e6',
        name: 'Primed Regen',
        img: require('../assets/modimages/primed-regen.jpg'),
        type: 'SENTINEL',
        rarity: 'prime',
        polarity: 'penjaga',
        effects: { none: [1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3] },
        maxRank: 10,
        currRank: 10,
        baseCost: 4,
        description() { return `If killed, regenerates ${this.effects.none[this.currRank]}x with ${50 + 5 * this.currRank}% Max Health and is invulnerable for ${this.currRank + 1}s.` }
    },
    {
        abrev: 'e7',
        name: 'Proboscis',
        img: require('../assets/modimages/proboscis.jpg'),
        type: 'HELMINTH',
        rarity: 'rare',
        polarity: 'penjaga',
        effects: { none: [[15, 20, 25, 30, 30, 30], [25, 50, 75, 100, 100, 100]] },
        maxRank: 5,
        currRank: 5,
        baseCost: 0,
        description() { return `Helminth Charger whips a proboscis out at an enemy within ${this.effects.none[0][this.currRank]}m, pulling them back and dealing ${this.effects.none[1][this.currRank]} damage.` }
    },
    {
        abrev: 'e8',
        name: 'Protect',
        img: require('../assets/modimages/protect.jpg'),
        type: 'RAKSA KUBROW',
        rarity: 'rare',
        polarity: 'penjaga',
        effects: { none: [91, 133, 175, 216, 258, 300] },
        maxRank: 5,
        currRank: 5,
        baseCost: 0,
        description() { return `The kubrow comes to the defense of its master, replenishing their shields by ${this.effects.none[this.currRank]}.` }
    },
    {
        abrev: 'e9',
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
        abrev: 'f0',
        name: 'Reflect',
        img: require('../assets/modimages/reflect.jpg'),
        type: 'ADARZA KAVAT',
        rarity: 'rare',
        polarity: 'penjaga',
        effects: {},
        maxRank: 3,
        currRank: 3,
        baseCost: 0,
        description() { return `Adarza Kavat has a ${10 * (this.currRank + 1)}% chance to reflect damage back to an enemy, amplifying it by ${15 * (this.currRank + 1)}%.` }
    },
    {
        abrev: 'f1',
        name: 'Regen',
        img: require('../assets/modimages/regen.jpg'),
        type: 'SENTINEL',
        rarity: 'common',
        polarity: 'penjaga',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `If killed, regenerates 1x with ${58 + 8 * this.currRank}% Max Health and is invulnerable for ${this.currRank + 1}s.` }
    },
    {
        abrev: 'f2',
        name: 'Retarget',
        family: 'attack',
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
        abrev: 'f3',
        name: 'Retrieve',
        img: require('../assets/modimages/retrieve.jpg'),
        type: 'CHESA KUBROW',
        rarity: 'common',
        polarity: 'penjaga',
        effects: { none: [10, 12, 14, 16, 18, 18] },
        maxRank: 5,
        currRank: 5,
        baseCost: 0,
        description() { return `The kubrow sniffs out loot hidden in crates and dropped by enemies within ${this.effects.none[this.currRank]}m, retrieving these items for its master.` }
    },
    {
        abrev: 'f4',
        name: 'Revenge',
        family: 'attack',
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
        abrev: 'f5',
        name: 'Sacrifice',
        img: require('../assets/modimages/sacrifice.jpg'),
        type: 'SENTINEL',
        rarity: 'rare',
        polarity: 'penjaga',
        effects: {},
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        description() { return `Sentinel takes ${7 - this.currRank * 1}s to revive its downed owner to ${25 * (this.currRank + 1)}% health and shields, destroying itself after the process.` }
    },
    {
        abrev: 'f6',
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
        abrev: 'f7',
        name: 'Scan Lifeforms',
        img: require('../assets/modimages/scan-lifeforms.jpg'),
        type: 'OXYLUS',
        rarity: 'common',
        polarity: 'penjaga',
        effects: {},
        maxRank: 3,
        currRank: 3,
        baseCost: 0,
        description() { return `+${1 + this.currRank} Maximum Active Conservation Encounters` }
    },
    {
        abrev: 'f8',
        name: 'Scan Matter',
        img: require('../assets/modimages/scan-matter.jpg'),
        type: 'OXYLUS',
        rarity: 'common',
        polarity: 'penjaga',
        effects: {},
        maxRank: 3,
        currRank: 3,
        baseCost: 0,
        description() { return `Resource containers within ${60}m are revealed on the Minimap for ${8}s every ${30}s.` }
    },
    {
        abrev: 'f9',
        name: 'Scavenge',
        img: require('../assets/modimages/scavenge.jpg'),
        type: 'BEAST',
        rarity: 'common',
        polarity: 'penjaga',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 0,
        description() { return `+${15 * (this.currRank + 1)}% chance for the pet to pry open a locked locker.` }
    },
    {
        abrev: 'g0',
        name: 'Self Destruct',
        img: require('../assets/modimages/self-destruct.jpg'),
        type: 'SENTINEL',
        rarity: 'rare',
        polarity: 'madurai',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `Explodes on death, dealing ${100 * (this.currRank + 1)} Blast Damage in a ${3 * (this.currRank + 1)}m radius and knocking down nearby enemies.` }
    },
    {
        abrev: 'g1',
        name: 'Sense Danger',
        img: require('../assets/modimages/sense-danger.jpg'),
        type: 'KAVAT',
        rarity: 'uncommon',
        polarity: 'penjaga',
        effects: {},
        maxRank: 3,
        currRank: 3,
        baseCost: 2,
        description() { return `The Kavat alerts their master of nearby enemies.` }
    },
    {
        abrev: 'g2',
        name: 'Sharpened Claws',
        img: require('../assets/modimages/sharpened-claws.jpg'),
        type: 'KAVAT',
        rarity: 'uncommon',
        polarity: 'madurai',
        effects: {},
        maxRank: 3,
        currRank: 3,
        baseCost: 2,
        description() { return `A vicious attack dealing ${150 + 50 * this.currRank}% damage that sunders armor by ${30 * (this.currRank + 1)}% and rends flesh.` }
    },
    {
        abrev: 'g3',
        name: 'Shelter',
        img: require('../assets/modimages/shelter.jpg'),
        type: 'BEAST',
        rarity: 'uncommon',
        polarity: 'vazarin',
        effects: {},
        maxRank: 10,
        currRank: 10,
        baseCost: 6,
        description() { return `Creates a shield with ${100 + 50 * this.currRank} Health around the player when they are reviving fallen allies.` }
    },
    {
        abrev: 'g4',
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
        abrev: 'i5',
        name: 'Shock Collar',
        img: require('../assets/modimages/unavail.jpg'),
        type: 'BEAST',
        rarity: 'rare',
        polarity: 'madurai',
        effects: { elemental: { damage: 0.15, type: 'Electricity' }, status: 0.15 },
        maxRank: 3,
        currRank: 3,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.elemental.damage * (this.currRank + 1) * 100)}% Electricity +${Math.round(this.effects.status * (this.currRank + 1) * 100)}% Status Chance` }
    },
    {
        abrev: 'g5',
        name: 'Spare Parts',
        img: require('../assets/modimages/spare-parts.jpg'),
        type: 'SENTINEL',
        rarity: 'uncommon',
        polarity: 'naramon',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `+${7.5 * (this.currRank + 1)}% Rare Item Drop Chance On Death` }
    },
    {
        abrev: 'g6',
        name: 'Stalk',
        img: require('../assets/modimages/stalk.jpg'),
        type: 'HURAS KUBROW',
        rarity: 'rare',
        polarity: 'penjaga',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 0,
        description() { return `The kubrow cloaks itself and its master to stalk down its prey when they are within ${14 + 2 * this.currRank}m.` }
    },
    {
        abrev: 'g7',
        name: 'Striker',
        family: 'attack',
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
        abrev: 'g8',
        name: 'Swift Deth',
        family: 'attack',
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
        abrev: 'g9',
        name: 'Swipe',
        img: require('../assets/modimages/swipe.jpg'),
        type: 'KAVAT',
        rarity: 'uncommon',
        polarity: 'madurai',
        effects: {},
        maxRank: 3,
        currRank: 3,
        baseCost: 2,
        description() { return `Strikes ${this.currRank + 1} additional enemies and increases Attack Range by ${0.5 * (this.currRank + 1)}m.` }
    },
    {
        abrev: 'h0',
        name: 'Synth Deconstruct',
        img: require('../assets/modimages/synth-deconstruct.jpg'),
        type: 'SENTINEL',
        rarity: 'rare',
        polarity: 'madurai',
        effects: { none: [2, 5, 10, 15, 20, 25] },
        maxRank: 5,
        currRank: 5,
        baseCost: 4, set: { setName: 'synth', setMax: 4, setCurr: 1 },
        description() { return [`Enemies injured by Sentinel have ${this.effects.none[this.currRank]}% chance to drop a Health Orb when killed.`, `Holstering Primary and Secondary weapons reload ${5 * this.set.setCurr}% of Magazine/s.`] }
    },
    {
        abrev: 'h1',
        name: 'Synth Fiber',
        img: require('../assets/modimages/synth-fiber.jpg'),
        type: 'SENTINEL',
        rarity: 'rare',
        polarity: 'madurai',
        effects: {},
        maxRank: 3,
        currRank: 3,
        baseCost: 4, set: { setName: 'synth', setMax: 4, setCurr: 1 },
        description() { return [`Health Orbs increase Armor for Sentinel by ${25 * (this.currRank + 1)}% for ${3 * (this.currRank + 1)}s.`, `Holstering Primary and Secondary weapons reload ${5 * this.set.setCurr}% of Magazine/s.`] }
    },
    {
        abrev: 'h2',
        name: 'Targeting Receptor',
        family: 'attack',
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
        abrev: 'h3',
        name: 'Tek Assault',
        img: require('../assets/modimages/tek-assault.jpg'),
        type: 'KAVAT',
        rarity: 'rare',
        polarity: 'madurai',
        effects: {},
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        set: { setName: 'tek', setMax: 4, setCurr: 1 },
        description() { return [`Kavat has ${15 * (this.currRank + 1)}% chance to ignore Lethal Damage and be immune for ${this.currRank + 1}`, `Mark a 3m zone every ${60 - (15 * (this.set.setCurr - 1))}s that inflicts ${50 * this.set.setCurr} Damage/s to enemies.`] }
    },
    {
        abrev: 'h4',
        name: 'Tek Enhance',
        img: require('../assets/modimages/tek-enhance.jpg'),
        type: 'KAVAT',
        rarity: 'rare',
        polarity: 'madurai',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 6,
        set: { setName: 'tek', setMax: 4, setCurr: 1 },
        description() { return [`+${5 * (this.currRank + 1)}% Kavat Ability Duration`, `Mark a 3m zone every ${60 - (15 * (this.set.setCurr - 1))}s that inflicts ${50 * this.set.setCurr} Damage/s to enemies.`] }
    },
    {
        abrev: 'h5',
        name: 'Territorial Aggression',
        img: require('../assets/modimages/territorial-aggression.jpg'),
        type: 'KAVAT',
        rarity: 'uncommon',
        polarity: 'penjaga',
        effects: {},
        maxRank: 3,
        currRank: 3,
        baseCost: 2,
        description() { return `The Kavat marks their territory, pacifying any wild creature within it.` }
    },
    {
        abrev: 'h6',
        name: 'Thumper',
        family: 'attack',
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
        abrev: 'h7',
        name: 'Trample',
        img: require('../assets/modimages/trample.jpg'),
        type: 'HELMINTH',
        rarity: 'rare',
        polarity: 'penjaga',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 0,
        description() { return `The Helminth Charger rushes an enemy, dealing ${35 + 25 * this.currRank} Damage to all in its path.` }
    },
    {
        abrev: 'h8',
        name: 'Unleashed',
        img: require('../assets/modimages/unleashed.jpg'),
        type: 'SUNIKA KUBROW',
        rarity: 'rare',
        polarity: 'penjaga',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 0,
        description() { return `The kubrow grapples a VIP target within ${35 + 5 * this.currRank}m, forcing them to the ground.` }
    },
    {
        abrev: 'h9',
        name: 'Vacuum',
        img: require('../assets/modimages/vacuum.jpg'),
        type: 'ROBOTIC',
        rarity: 'common',
        polarity: 'penjaga',
        effects: {},
        maxRank: 5,
        currRank: 5,
        baseCost: 2,
        description() { return `${8.5 + this.currRank}m Companion Gather-Link. Detects and collects items, including mods.` }
    },
    {
        abrev: 'i0',
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
        abrev: 'i6',
        name: 'Venom Teeth',
        img: require('../assets/modimages/unavail.jpg'),
        type: 'BEAST',
        rarity: 'rare',
        polarity: 'madurai',
        effects: { elemental: { damage: 0.15, type: 'Toxin' }, status: 0.15 },
        maxRank: 3,
        currRank: 3,
        baseCost: 4,
        description() { return `+${Math.round(this.effects.elemental.damage * (this.currRank + 1) * 100)}% Toxin +${Math.round(this.effects.status * (this.currRank + 1) * 100)}% Status Chance` }
    },
    {
        abrev: 'i1',
        name: 'Warrior',
        family: 'attack',
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

export default companionMods;