const beasts = [
    {
        name: 'ADARZA KAVAT',
        img: require('../assets/companions/adarza-kavat.png'),
        type: [
            'KAVAT',
            'ADARZA KAVAT'
        ],
        polarities: ['penjaga', 'penjaga'],
        armor: 50,
        health: 240,
        baseHealth: 40,
        shields: 210,
        baseShields: 70,
        critChance: 0.2,
        critMult: 2,
        status: 0.075,
        damage: 80,
        split: [
            {
                type: 'Slash',
                percent: 1
            }
        ]
    },
    {
        name: 'CHESA KUBROW',
        img: require('../assets/companions/chesa-kubrow.png'),
        type: [
            'CHESA KUBROW'
        ],
        polarities: ['penjaga', 'penjaga', 'vazarin'],
        armor: 50,
        health: 375,
        baseHealth: 125,
        shields: 225,
        baseShields: 75,
        critChance: 0.1,
        critMult: 3,
        status: 0.05,
        damage: 304,
        split: [
            {
                type: 'Slash',
                percent: 1
            }
        ]
    },
    {
        name: 'HELMINTH CHARGER',
        img: require('../assets/companions/helminth-charger.png'),
        type: [
            'HELMINTH CHARGER'
        ],
        polarities: ['penjaga', 'penjaga', 'madurai'],
        armor: 50,
        health: 285,
        baseHealth: 95,
        shields: 255,
        baseShields: 85,
        critChance: 0.1,
        critMult: 3,
        status: 0.05,
        damage: 349.6,
        split: [
            {
                type: 'Slash',
                percent: 304 / 349.6
            },
            {
                type: 'Toxin',
                percent: 45.6 / 349.6
            },
        ]
    },
    {
        name: 'HURAS KUBROW',
        img: require('../assets/companions/huras-kubrow.png'),
        type: [
            'HURAS KUBROW'
        ],
        polarities: ['penjaga', 'penjaga', 'madurai'],
        armor: 50,
        health: 225,
        baseHealth: 75,
        shields: 375,
        baseShields: 125,
        critChance: 0.1,
        critMult: 3,
        status: 0.05,
        damage: 304,
        split: [
            {
                type: 'Slash',
                percent: 1
            }
        ]
    },
    {
        name: 'RAKSA KUBROW',
        img: require('../assets/companions/raksa-kubrow.png'),
        type: [
            'RAKSA KUBROW'
        ],
        polarities: ['penjaga', 'penjaga', 'vazarin'],
        armor: 50,
        health: 300,
        baseHealth: 100,
        shields: 300,
        baseShields: 100,
        critChance: 0.1,
        critMult: 3,
        status: 0.05,
        damage: 304,
        split: [
            {
                type: 'Slash',
                percent: 1
            }
        ]
    },
    {
        name: 'SAHASA KUBROW',
        img: require('../assets/companions/sahasa-kubrow.png'),
        type: [
            'SAHASA KUBROW'
        ],
        polarities: ['penjaga', 'penjaga', 'vazarin'],
        armor: 50,
        health: 375,
        baseHealth: 125,
        shields: 225,
        baseShields: 75,
        critChance: 0.1,
        critMult: 3,
        status: 0.05,
        damage: 304,
        split: [
            {
                type: 'Slash',
                percent: 1
            }
        ]
    },
    {
        name: 'SMEETA KAVAT',
        img: require('../assets/companions/smeeta-kavat.png'),
        type: [
            'KAVAT',
            'SMEETA KAVAT'
        ],
        polarities: ['penjaga', 'penjaga'],
        armor: 50,
        health: 300,
        baseHealth: 50,
        shields: 180,
        baseShields: 60,
        critChance: 0.2,
        critMult: 2,
        status: 0.075,
        damage: 80,
        split: [
            {
                type: 'Slash',
                percent: 1
            }
        ]
    },
    {
        name: 'SUNIKA KUBROW',
        img: require('../assets/companions/sunika-kubrow.png'),
        type: [
            'SUNIKA KUBROW'
        ],
        polarities: ['penjaga', 'penjaga', 'vazarin'],
        armor: 50,
        health: 330,
        baseHealth: 110,
        shields: 270,
        baseShields: 90,
        critChance: 0.1,
        critMult: 3,
        status: 0.05,
        damage: 304,
        split: [
            {
                type: 'Slash',
                percent: 1
            }
        ]
    }
]

export default beasts;