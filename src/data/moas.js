const moas = {
    base: {
        health: 100,
        shields: 100,
        armor: 100
    },
    first: [
        {
            name: 'DRIMPER',
            img: require('../assets/itemimages/drimper-bracket.png'),
            desc: 'Penjaga x4.',
            polarities: ['penjaga', 'penjaga', 'penjaga', 'penjaga']
        },
        {
            name: 'GAUTH',
            img: require('../assets/itemimages/gauth-bracket.png'),
            desc: 'Penjaga x4, Naramon x1.',
            polarities: ['penjaga', 'penjaga', 'penjaga', 'penjaga', 'naramon']
        },
        {
            name: 'JONSIN',
            img: require('../assets/itemimages/jonsin-bracket.png'),
            desc: 'Penjaga x4, Madurai x1.',
            polarities: ['penjaga', 'penjaga', 'penjaga', 'penjaga', 'madurai']
        },
        {
            name: 'TIAN',
            img: require('../assets/itemimages/tian-bracket.png'),
            desc: 'Penjaga x4, vazarin x1.',
            polarities: ['penjaga', 'penjaga', 'penjaga', 'penjaga', 'vazarin']
        },
    ],
    second: [
        {
            name: 'DREX',
            img: require('../assets/itemimages/drex-core.png'),
            desc: '+10% Health, +15% Shields, +5% Armor.',
            health: 0.1,
            shields: 0.15,
            armor: 0.05,
        },
        {
            name: 'ALCROM',
            img: require('../assets/itemimages/alcrom-core.png'),
            desc: '+10% Health, +10% Shields, +10% Armor.',
            health: 0.1,
            shields: 0.1,
            armor: 0.1,
        },
        {
            name: 'KRISYS',
            img: require('../assets/itemimages/krisys-core.png'),
            desc: '+10% Health, +5% Shields, 15% Armor.',
            health: 0.1,
            shields: 0.05,
            armor: 0.15,
        },
    ],
    third: [
        {
            name: 'AEGRON',
            img: require('../assets/itemimages/aegron-gyro.png'),
            desc: '-5% Health, +5% Shields, +10% Armor.',
            health: -0.05,
            shields: 0.05,
            armor: 0.1,
        },
        {
            name: 'ATHECA',
            img: require('../assets/itemimages/atheca-gyro.png'),
            desc: '+20% Health, -5% Shields, -5% Armor.',
            health: 0.2,
            shields: -0.05,
            armor: -0.05,
        },
        {
            name: 'HARPEN',
            img: require('../assets/itemimages/harpen-gyro.png'),
            desc: '+5% Health, +10% Shields, -5% Armor.',
            health: 0.05,
            shields: 0.1,
            armor: -0.05,
        },
        {
            name: 'HEXTRA',
            img: require('../assets/itemimages/hextra-gyro.png'),
            desc: '+10% Health, +5% Shields, -5% Armor.',
            health: 0.1,
            shields: 0.05,
            armor: -0.05,
        },
        {
            name: 'MUNIT',
            img: require('../assets/itemimages/munit-gyro.png'),
            desc: '+10% Health, -5% Shields, +5% Armor.',
            health: 0.1,
            shields: -0.05,
            armor: 0.05,
        },
        {
            name: 'PHAZOR',
            img: require('../assets/itemimages/phazor-gyro.png'),
            desc: '-5% Health, +10% Shields, +5% Armor.',
            health: -0.05,
            shields: 0.1,
            armor: 0.05,
        },
        {
            name: 'TRUX',
            img: require('../assets/itemimages/trux-gyro.png'),
            desc: '+5% Health, -5% Shields, +10% Armor.',
            health: 0.05,
            shields: -0.05,
            armor: 0.1,
        },
    ]
}

export default moas;