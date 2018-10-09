export const secondaryWeapons = [
    {
        name: 'ACRID',
        img: require('../assets/weapons/secondary/acrid.png'),
        mastery: 7,
        type: ['PISTOL', 'ACRID'],
        polarities: [],
        noise: 'Alarming',
        reload: 1.2,
        magSize: 15,
        maxAmmo: 210,
        disposition: 5,
        modes: [
            {
                trigger: 'Semi-Auto',
                fireRate: 6.67,
                accuracy: 12.5,
                punchThrough: 0,
                critChance: 0.05,
                critMult: 2,
                status: 0.1,
                damage: 35,
                split: [
                    {
                        type: 'Toxin',
                        percent: 1
                    }
                ]
            }
        ]
    },
]