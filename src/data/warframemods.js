const warframeMods = [
    {
        abrev: 'a7',
        name: 'Armored Agility',
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
        abrev: 'b3',
        name: 'Aviator',
        type: 'EXILUS',
        rarity: 'common',
        polarity: 'vazarin',
        effects: { none: 0.1 },
        maxRank: 3,
        currRank: 3,
        baseCost: 4,
        description() { return `Reduced damage by ${Math.round(this.effects.none * (this.currRank + 1) * 100)}% while airborne` }
    },
    {
        abrev: 'b8',
        name: 'Brief Respite',
        type: 'AURA',
        rarity: 'uncommon',
        polarity: 'zenurik',
        effects: { none: 0.25 },
        maxRank: 5,
        currRank: 5,
        baseCost: -2,
        description() { return `Casting an ability grants shields equal to +${Math.round(this.effects.none * (this.currRank + 1) * 100)}% of the energy spent, while Overshields are inactive` }
    },
    {
        abrev: 'dontforgettosetit',
        name: 'Seeking Shuriken',
        type: 'ASH',
        rarity: 'rare',
        polarity: 'zenurik',
        effects: { none: [0.35, 0.45, 0.55, 0.7, 2] },
        maxRank: 3,
        currRank: 3,
        baseCost: 6,
        augment: {
            ability: 0,
            details: {
                strength:
                    [
                        {
                            name: 'Armor Reduction',
                            base() { return this.effects.none[this.currRank] }
                        }
                    ],
                duration:
                    [
                        {
                            name: 'Duration',
                            base() { return this.effects.none[4] * (this.currRank + 1) }
                        }
                    ]
            }
        },
        description() { return `Shuriken Augment: Hits expose weaknesses on enemies, reducing their armor by ${Math.round(this.effects.none[this.currRank] * 100)}% for ${this.effects.none[4] * (this.currRank + 1)} seconds` }
    },
]

export default warframeMods;