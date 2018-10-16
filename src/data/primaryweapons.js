const primaryWeapons = [
    {
        name: 'AMPREX',
        img: require('../assets/weapons/primary/amprex.png'),
        mastery: 10,
        type: ['RIFLE', 'BEAM', 'ASSAULT RIFLE'],
        polarities: [],
        noise: 'Alarming',
        reload: 2.6,
        magSize: 100,
        maxAmmo: 700,
        disposition: 3,
        modes: [
            {
                trigger: 'Held',
                rangeLimit: 18,
                fireRate: 12,
                accuracy: 12.5,
                punchThrough: 0,
                ammoCost: 0.5,
                critChance: 0.32,
                critMult: 2.2,
                status: 0.22,
                damage: 22,
                split: [
                    {
                        type: 'Electricity',
                        percent: 1
                    }
                ]
            }
        ]
    },
    {
        name: 'ARCA PLASMOR',
        img: require('../assets/weapons/primary/arcaplasmor.png'),
        mastery: 10,
        type: ['SHOTGUN'],
        polarities: ['madurai', 'madurai'],
        noise: 'Alarming',
        reload: 2.8,
        magSize: 10,
        maxAmmo: 48,
        disposition: 3,
        modes: [
            {
                trigger: 'Semi-Auto',
                fireRate: 1.1,
                accuracy: 9.1,
                punchThrough: 0,
                critChance: 0.22,
                critMult: 1.6,
                status: 0.28,
                falloffMin: 10,
                falloffMax: 20,
                damage: 600,
                split: [
                    {
                        type: 'Radiation',
                        percent: 1
                    }
                ]
            }
        ]
    },
    {
        name: 'ARGONAK',
        img: require('../assets/weapons/primary/argonak.png'),
        mastery: 7,
        type: ['RIFLE', 'ASSAULT RIFLE'],
        polarities: ['madurai', 'naramon'],
        noise: 'Alarming',
        reload: 2.4,
        magSize: 43,
        maxAmmo: 473,
        disposition: 3,
        modes: [
            {
                name: 'Semi-Auto',
                trigger: 'Semi-Auto',
                fireRate: 4.33,
                accuracy: 28.6,
                punchThrough: 0,
                critChance: 0.27,
                critMult: 2.3,
                status: 0.19,
                damage: 57,
                split: [
                    {
                        type: 'Impact',
                        percent: 24.5 / 57
                    },
                    {
                        type: 'Puncture',
                        percent: 6.3 / 57
                    },
                    {
                        type: 'Slash',
                        percent: 26.2 / 57
                    }
                ]
            },
            {
                name: 'Auto',
                trigger: 'Auto',
                fireRate: 6,
                accuracy: 28.6,
                punchThrough: 0,
                critChance: 0.09,
                critMult: 1.5,
                status: 0.27,
                damage: 57,
                split: [
                    {
                        type: 'Impact',
                        percent: 24.5 / 57
                    },
                    {
                        type: 'Puncture',
                        percent: 6.3 / 57
                    },
                    {
                        type: 'Slash',
                        percent: 26.2 / 57
                    }
                ]
            },
        ]
    },
    {
        name: 'ARTEMIS BOW',
        img: require('../assets/weapons/primary/artemisbow.png'),
        mastery: 0,
        type: ['RIFLE', 'BOW', 'PROJECTILE'],
        polarities: ['madurai', 'madurai', 'naramon'],
        noise: 'Silent',
        reload: 0.9,
        magSize: 1,
        bow: true,
        exalted: true,
        modes: [
            {
                name: 'Normal',
                trigger: 'Charge',
                chargeRate: 1,
                accuracy: 100,
                punchThrough: 1,
                critChance: 0.25,
                critMult: 2,
                status: 0.2,
                damage: 1680,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.14
                    },
                    {
                        type: 'Puncture',
                        percent: 0.8
                    },
                    {
                        type: 'Slash',
                        percent: 0.06
                    },
                ]
            }
        ]
    },
    {
        name: 'ASTILLA',
        img: require('../assets/weapons/primary/astilla.png'),
        mastery: 10,
        type: ['SHOTGUN'],
        polarities: ['madurai', 'naramon'],
        noise: 'Alarming',
        reload: 2,
        magSize: 16,
        maxAmmo: 112,
        disposition: 4,
        modes: [
            {
                name: 'Total',
                trigger: 'Auto',
                fireRate: 4.33,
                accuracy: 25,
                punchThrough: 0,
                critChance: 0.17,
                critMult: 1.9,
                status: 0.33,
                falloffMin: 30,
                falloffMax: 60,
                damage: 190,
                split: [
                    {
                        type: 'Impact',
                        percent: 70 / 190
                    },
                    {
                        type: 'Puncture',
                        percent: 42 / 190
                    },
                    {
                        type: 'Slash',
                        percent: 78 / 190
                    },
                ]
            },
            {
                name: 'Glass Explosion',
                trigger: 'Auto',
                fireRate: 4.33,
                accuracy: 25,
                punchThrough: 0,
                critChance: 0.17,
                critMult: 1.9,
                status: 0.33,
                falloffMin: 30,
                falloffMax: 60,
                damage: 120,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.37
                    },
                    {
                        type: 'Puncture',
                        percent: 0.22
                    },
                    {
                        type: 'Slash',
                        percent: 0.41
                    },
                ]
            },
            {
                name: 'Slug',
                trigger: 'Auto',
                fireRate: 4.33,
                accuracy: 25,
                punchThrough: 0,
                critChance: 0.17,
                critMult: 1.9,
                status: 0.33,
                falloffMin: 30,
                falloffMax: 60,
                damage: 70,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.37
                    },
                    {
                        type: 'Puncture',
                        percent: 0.22
                    },
                    {
                        type: 'Slash',
                        percent: 0.41
                    },
                ]
            },
        ]
    },
    {
        name: 'ATTICA',
        img: require('../assets/weapons/primary/attica.png'),
        mastery: 7,
        type: ['RIFLE', 'BOW', 'PROJECTILE'],
        polarities: ['madurai'],
        noise: 'Silent',
        reload: 2.8,
        magSize: 20,
        maxAmmo: 540,
        disposition: 5,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 3.67,
                accuracy: 40,
                punchThrough: 0,
                critChance: 0.25,
                critMult: 3,
                status: 0.1,
                damage: 80,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.05
                    },
                    {
                        type: 'Puncture',
                        percent: 0.75
                    },
                    {
                        type: 'Slash',
                        percent: 0.2
                    },
                ]
            }
        ]
    },
    {
        name: 'BAZA',
        img: require('../assets/weapons/primary/baza.png'),
        mastery: 0,
        type: ['RIFLE', 'ASSAULT RIFLE'],
        polarities: ['madurai'],
        noise: 'Silent',
        reload: 1.4,
        magSize: 40,
        maxAmmo: 800,
        disposition: 3,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 16.67,
                accuracy: 80,
                punchThrough: 0,
                critChance: 0.26,
                critMult: 3,
                status: 0.1,
                falloffMin: 22,
                falloffMax: 34,
                damage: 16,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.3625
                    },
                    {
                        type: 'Puncture',
                        percent: 0.41875
                    },
                    {
                        type: 'Slash',
                        percent: 0.21875
                    },
                ]
            }
        ]
    },
    {
        name: 'BOAR',
        img: require('../assets/weapons/primary/boar.png'),
        mastery: 2,
        type: ['SHOTGUN'],
        polarities: [],
        noise: 'Alarming',
        reload: 2.7,
        magSize: 20,
        maxAmmo: 120,
        disposition: 5,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 4.17,
                pellets: 8,
                accuracy: 5,
                punchThrough: 0,
                critChance: 0.1,
                critMult: 1.5,
                status: 0.2,
                falloffMin: 15,
                falloffMax: 25,
                damage: 176,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.55
                    },
                    {
                        type: 'Puncture',
                        percent: 0.15
                    },
                    {
                        type: 'Slash',
                        percent: 0.3
                    },
                ]
            }
        ]
    },
    {
        name: 'BOAR PRIME',
        img: require('../assets/weapons/primary/boarprime.png'),
        mastery: 11,
        type: ['SHOTGUN'],
        polarities: [],
        noise: 'Alarming',
        reload: 2.75,
        magSize: 20,
        maxAmmo: 120,
        disposition: 5,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 4.67,
                pellets: 8,
                accuracy: 5,
                punchThrough: 0,
                critChance: 0.15,
                critMult: 2,
                status: 0.3,
                falloffMin: 18,
                falloffMax: 25,
                damage: 320,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.65
                    },
                    {
                        type: 'Puncture',
                        percent: 0.15
                    },
                    {
                        type: 'Slash',
                        percent: 0.2
                    },
                ]
            }
        ]
    },
    {
        name: 'BOLTOR',
        img: require('../assets/weapons/primary/boltor.png'),
        mastery: 2,
        type: ['RIFLE', 'ASSAULT RIFLE', 'PROJECTILE'],
        polarities: ['vazarin'],
        noise: 'Alarming',
        reload: 2.6,
        magSize: 60,
        maxAmmo: 540,
        disposition: 2,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 8.75,
                accuracy: 25,
                punchThrough: 0,
                critChance: 0.1,
                critMult: 1.8,
                status: 0.14,
                damage: 25,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.1
                    },
                    {
                        type: 'Puncture',
                        percent: 0.8
                    },
                    {
                        type: 'Slash',
                        percent: 0.1
                    },
                ]
            }
        ]
    },
    {
        name: 'BOLTOR PRIME',
        img: require('../assets/weapons/primary/boltorprime.png'),
        mastery: 13,
        type: ['RIFLE', 'ASSAULT RIFLE', 'PROJECTILE'],
        polarities: ['vazarin', 'madurai'],
        noise: 'Alarming',
        reload: 2.4,
        magSize: 60,
        maxAmmo: 540,
        disposition: 2,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 10,
                accuracy: 50,
                punchThrough: 0,
                critChance: 0.12,
                critMult: 2,
                status: 0.34,
                damage: 46,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.1
                    },
                    {
                        type: 'Puncture',
                        percent: 0.9
                    },
                ]
            }
        ]
    },
    {
        name: 'BRATON',
        img: require('../assets/weapons/primary/braton.png'),
        mastery: 0,
        type: ['RIFLE', 'ASSAULT RIFLE'],
        polarities: [],
        noise: 'Alarming',
        reload: 2,
        magSize: 45,
        maxAmmo: 540,
        disposition: 3,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 8.75,
                accuracy: 28.6,
                punchThrough: 0,
                critChance: 0.12,
                critMult: 1.6,
                status: 0.06,
                damage: 24,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.33
                    },
                    {
                        type: 'Puncture',
                        percent: 0.33
                    },
                    {
                        type: 'Slash',
                        percent: 0.34
                    },
                ]
            }
        ]
    },
    {
        name: 'BRATON PRIME',
        img: require('../assets/weapons/primary/bratonprime.png'),
        mastery: 8,
        type: ['RIFLE', 'ASSAULT RIFLE'],
        polarities: [],
        noise: 'Alarming',
        reload: 2.15,
        magSize: 75,
        maxAmmo: 600,
        disposition: 3,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 9.58,
                accuracy: 28.6,
                punchThrough: 0,
                critChance: 0.12,
                critMult: 2,
                status: 0.26,
                damage: 35,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.05
                    },
                    {
                        type: 'Puncture',
                        percent: 0.35
                    },
                    {
                        type: 'Slash',
                        percent: 0.6
                    },
                ]
            }
        ]
    },
    {
        name: 'BRATON VANDAL',
        img: require('../assets/weapons/primary/bratonvandal.png'),
        mastery: 4,
        type: ['RIFLE', 'ASSAULT RIFLE'],
        polarities: ['madurai'],
        noise: 'Alarming',
        reload: 1.75,
        magSize: 50,
        maxAmmo: 550,
        disposition: 3,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 7.5,
                accuracy: 33.3,
                punchThrough: 0,
                critChance: 0.16,
                critMult: 2,
                status: 0.16,
                damage: 35,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.35
                    },
                    {
                        type: 'Puncture',
                        percent: 0.05
                    },
                    {
                        type: 'Slash',
                        percent: 0.6
                    },
                ]
            }
        ]
    },
    {
        name: 'BURSTON',
        img: require('../assets/weapons/primary/burston.png'),
        mastery: 0,
        type: ['RIFLE', 'ASSAULT RIFLE'],
        polarities: ['madurai'],
        noise: 'Alarming',
        reload: 2,
        magSize: 45,
        maxAmmo: 540,
        disposition: 4,
        modes: [
            {
                trigger: 'Burst',
                burst: 3,
                fireRate: 7.83,
                accuracy: 25,
                punchThrough: 0,
                critChance: 0.06,
                critMult: 1.6,
                status: 0.18,
                damage: 30,
                split: [
                    {
                        type: 'Impact',
                        percent: (1 / 3)
                    },
                    {
                        type: 'Puncture',
                        percent: (1 / 3)
                    },
                    {
                        type: 'Slash',
                        percent: (1 / 3)
                    },
                ]
            }
        ]
    },
    {
        name: 'BURSTON PRIME',
        img: require('../assets/weapons/primary/burstonprime.png'),
        mastery: 12,
        type: ['RIFLE', 'ASSAULT RIFLE', 'BURSTON PRIME'],
        polarities: ['madurai'],
        noise: 'Alarming',
        reload: 2,
        magSize: 45,
        maxAmmo: 540,
        disposition: 4,
        modes: [
            {
                trigger: 'Burst',
                burst: 3,
                fireRate: 13.64,
                accuracy: 25,
                punchThrough: 0,
                critChance: 0.18,
                critMult: 1.8,
                status: 0.3,
                damage: 36,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.3
                    },
                    {
                        type: 'Puncture',
                        percent: 0.3
                    },
                    {
                        type: 'Slash',
                        percent: 0.4
                    },
                ]
            }
        ]
    },
    {
        name: 'BUZLOK',
        img: require('../assets/weapons/primary/buzlok.png'),
        mastery: 11,
        type: ['RIFLE', 'ASSAULT RIFLE', 'PROJECTILE'],
        polarities: [],
        noise: 'Alarming',
        reload: 3,
        magSize: 50,
        maxAmmo: 540,
        disposition: 5,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 6.25,
                accuracy: 13.3,
                punchThrough: 0,
                critChance: 0.23,
                critMult: 2.5,
                status: 0.21,
                damage: 60,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.5
                    },
                    {
                        type: 'Puncture',
                        percent: 0.4
                    },
                    {
                        type: 'Slash',
                        percent: 0.1
                    },
                ]
            }
        ]
    },
    {
        name: 'CERNOS',
        img: require('../assets/weapons/primary/cernos.png'),
        mastery: 6,
        type: ['RIFLE', 'BOW', 'PROJECTILE'],
        polarities: ['madurai'],
        noise: 'Silent',
        reload: 0.6,
        magSize: 1,
        maxAmmo: 72,
        bow: true,
        disposition: 2,
        modes: [
            {
                name: 'Charged',
                trigger: 'Charge',
                accuracy: 16.7,
                punchThrough: 1,
                critChance: 0.36,
                critMult: 2,
                status: 0.18,
                damage: 220,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.9
                    },
                    {
                        type: 'Puncture',
                        percent: 0.05
                    },
                    {
                        type: 'Slash',
                        percent: 0.05
                    },
                ]
            },
            {
                name: 'Uncharged',
                trigger: 'Charge',
                accuracy: 16.7,
                punchThrough: 0,
                critChance: 0.18,
                critMult: 1.5,
                status: 0.18,
                damage: 110,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.9
                    },
                    {
                        type: 'Puncture',
                        percent: 0.05
                    },
                    {
                        type: 'Slash',
                        percent: 0.05
                    },
                ]
            }
        ]
    },
    {
        name: 'CERNOS PRIME',
        img: require('../assets/weapons/primary/cernosprime.png'),
        mastery: 12,
        type: ['RIFLE', 'BOW', 'PROJECTILE'],
        polarities: ['madurai', 'madurai'],
        noise: 'Silent',
        reload: 0.65,
        magSize: 1,
        maxAmmo: 72,
        bow: true,
        disposition: 2,
        modes: [
            {
                name: 'Charged',
                trigger: 'Charge',
                chargeRate: 0.5,
                pellets: 3,
                accuracy: 16.7,
                punchThrough: 1,
                critChance: 0.35,
                critMult: 2,
                status: 0.3,
                damage: 360,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.9
                    },
                    {
                        type: 'Puncture',
                        percent: 0.05
                    },
                    {
                        type: 'Slash',
                        percent: 0.05
                    },
                ]
            },
            {
                name: 'Uncharged',
                trigger: 'Charge',
                chargeRate: 0.5,
                pellets: 3,
                accuracy: 16.7,
                punchThrough: 0,
                critChance: 0.175,
                critMult: 1.5,
                status: 0.3,
                damage: 180,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.9
                    },
                    {
                        type: 'Puncture',
                        percent: 0.05
                    },
                    {
                        type: 'Slash',
                        percent: 0.05
                    },
                ]
            },
        ]
    },
    {
        name: 'CONVECTRIX',
        img: require('../assets/weapons/primary/convectrix.png'),
        mastery: 7,
        type: ['SHOTGUN', 'BEAM'],
        polarities: [],
        noise: 'Alarming',
        reload: 2,
        magSize: 70,
        maxAmmo: 700,
        disposition: 5,
        modes: [
            {
                trigger: 'Held',
                fireRate: 12,
                rangeLimit: 30,
                pellets: 2,
                accuracy: 50,
                punchThrough: 0,
                critChance: 0.16,
                critMult: 2.4,
                status: 0.3,
                ammoCost: 0.5,
                damage: 24,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.1
                    },
                    {
                        type: 'Puncture',
                        percent: 0.1
                    },
                    {
                        type: 'Slash',
                        percent: 0.8
                    },
                ]
            }
        ]
    },
    {
        name: 'CORINTH',
        img: require('../assets/weapons/primary/corinth.png'),
        mastery: 10,
        type: ['SHOTGUN'],
        polarities: ['madurai', 'madurai'],
        noise: 'Alarming',
        reload: 2.3,
        magSize: 5,
        maxAmmo: 132,
        disposition: 3,
        modes: [
            {
                name: 'Buckshot',
                trigger: 'Semi-Auto',
                fireRate: 1.17,
                pellets: 6,
                accuracy: 9.1,
                punchThrough: 0,
                critChance: 0.3,
                critMult: 2.8,
                status: 0.12,
                falloffMin: 18,
                falloffMax: 36,
                damage: 540,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.28
                    },
                    {
                        type: 'Puncture',
                        percent: 0.42
                    },
                    {
                        type: 'Slash',
                        percent: 0.3
                    },
                ]
            },
            {
                name: 'Air Burst',
                trigger: 'Semi-Auto',
                fireRate: 1.17,
                accuracy: 9.1,
                punchThrough: 0,
                critChance: 0.04,
                critMult: 1.6,
                status: 0.28,
                damage: 404,
                split: [
                    {
                        type: 'Blast',
                        percent: 1
                    },
                ]
            }
        ]
    },
    {
        name: 'DAIKYU',
        img: require('../assets/weapons/primary/daikyu.png'),
        mastery: 10,
        type: ['RIFLE', 'BOW', 'PROJECTILE', 'DAIKYU'],
        polarities: ['madurai'],
        noise: 'Silent',
        reload: 0.6,
        magSize: 1,
        maxAmmo: 72,
        bow: true,
        disposition: 4,
        modes: [
            {
                trigger: 'Charge',
                chargeRate: 1,
                accuracy: 16.7,
                punchThrough: 3,
                critChance: 0.2,
                critMult: 2,
                status: 0.5,
                damage: 460,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.3
                    },
                    {
                        type: 'Puncture',
                        percent: 0.4
                    },
                    {
                        type: 'Slash',
                        percent: 0.3
                    },
                ]
            }
        ]
    },
    {
        name: 'DERA',
        img: require('../assets/weapons/primary/dera.png'),
        mastery: 4,
        type: ['RIFLE', 'ASSAULT RIFLE', 'PROJECTILE'],
        polarities: [],
        noise: 'Alarming',
        reload: 1.8,
        magSize: 45,
        maxAmmo: 540,
        disposition: 4,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 11.25,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.08,
                critMult: 1.6,
                status: 0.22,
                damage: 30,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.2
                    },
                    {
                        type: 'Puncture',
                        percent: 0.75
                    },
                    {
                        type: 'Slash',
                        percent: 0.05
                    },
                ]
            }
        ]
    },
    {
        name: 'DERA VANDAL',
        img: require('../assets/weapons/primary/deravandal.png'),
        mastery: 7,
        type: ['RIFLE', 'ASSAULT RIFLE', 'PROJECTILE'],
        polarities: [],
        noise: 'Alarming',
        reload: 1.8,
        magSize: 60,
        maxAmmo: 540,
        disposition: 4,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 11.25,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.08,
                critMult: 2,
                status: 0.3,
                damage: 32,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.2
                    },
                    {
                        type: 'Puncture',
                        percent: 0.75
                    },
                    {
                        type: 'Slash',
                        percent: 0.05
                    },
                ]
            }
        ]
    },
    {
        name: 'DEX SYBARIS',
        img: require('../assets/weapons/primary/dexsybaris.png'),
        mastery: 7,
        type: ['RIFLE', 'ASSAULT RIFLE'],
        polarities: [],
        noise: 'Alarming',
        reload: 1.5,
        magSize: 14,
        maxAmmo: 540,
        disposition: 2,
        modes: [
            {
                trigger: 'Burst',
                burst: 2,
                fireRate: 4.17,
                accuracy: 28.6,
                punchThrough: 0,
                critChance: 0.35,
                critMult: 2,
                status: 0.1,
                damage: 75,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.3
                    },
                    {
                        type: 'Puncture',
                        percent: 0.25
                    },
                    {
                        type: 'Slash',
                        percent: 0.45
                    },
                ]
            }
        ]
    },
    {
        name: 'DRAKGOON',
        img: require('../assets/weapons/primary/drakgoon.png'),
        mastery: 5,
        type: ['SHOTGUN', 'DRAKGOON'],
        polarities: [],
        noise: 'Alarming',
        reload: 2.3,
        magSize: 7,
        maxAmmo: 120,
        disposition: 5,
        modes: [
            {
                name: 'Charged',
                trigger: 'Charge',
                fireRate: 3.33,
                chargeRate: 0.5,
                pellets: 10,
                accuracy: 1.4,
                punchThrough: 2,
                critChance: 0.075,
                critMult: 2,
                status: 0.23,
                damage: 700,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.1
                    },
                    {
                        type: 'Puncture',
                        percent: 0.1
                    },
                    {
                        type: 'Slash',
                        percent: 0.8
                    },
                ]
            },
            {
                name: 'Uncharged',
                trigger: 'Charge',
                fireRate: 3.33,
                pellets: 10,
                accuracy: 1.4,
                punchThrough: 1.5,
                critChance: 0.075,
                critMult: 2,
                status: 0.23,
                damage: 400,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.1
                    },
                    {
                        type: 'Puncture',
                        percent: 0.1
                    },
                    {
                        type: 'Slash',
                        percent: 0.8
                    },
                ]
            }
        ]
    },
    {
        name: 'DREAD',
        img: require('../assets/weapons/primary/dread.png'),
        mastery: 5,
        type: ['RIFLE', 'BOW'],
        polarities: ['madurai', 'madurai'],
        noise: 'Alarming',
        reload: 0.7,
        magSize: 1,
        maxAmmo: 72,
        bow: true,
        disposition: 2,
        modes: [
            {
                name: 'Charged',
                trigger: 'Charge',
                chargeRate: 0.5,
                accuracy: 16.7,
                punchThrough: 2.5,
                critChance: 0.5,
                critMult: 2,
                status: 0.2,
                damage: 200,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.05
                    },
                    {
                        type: 'Puncture',
                        percent: 0.05
                    },
                    {
                        type: 'Slash',
                        percent: 0.9
                    },
                ]
            },
            {
                name: 'Uncharged',
                trigger: 'Charge',
                accuracy: 16.7,
                punchThrough: 0,
                critChance: 0.25,
                critMult: 2,
                status: 0.2,
                damage: 130,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.05
                    },
                    {
                        type: 'Puncture',
                        percent: 0.05
                    },
                    {
                        type: 'Slash',
                        percent: 0.9
                    },
                ]
            }
        ]
    },
    {
        name: 'FERROX',
        img: require('../assets/weapons/primary/ferrox.png'),
        mastery: 14,
        type: ['RIFLE', 'ASSAULT RIFLE', 'PROJECTILE'],
        polarities: ['madurai', 'vazarin'],
        noise: 'Alarming',
        reload: 1.8,
        magSize: 10,
        maxAmmo: 540,
        disposition: 3,
        modes: [
            {
                name: 'Charged',
                trigger: 'Charge',
                fireRate: 1.33,
                chargeRate: 0.5,
                accuracy: 16.7,
                punchThrough: 1.5,
                critChance: 0.32,
                critMult: 2.8,
                status: 0.1,
                damage: 350,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.1
                    },
                    {
                        type: 'Puncture',
                        percent: 0.7
                    },
                    {
                        type: 'Slash',
                        percent: 0.2
                    },
                ]
            },
            {
                name: 'Throw',
                trigger: 'Charge',
                singleProjectile: true,
                fireRate: 1,
                chargeRate: 0.5,
                accuracy: 16.7,
                punchThrough: 0,
                critChance: 0.04,
                critMult: 2,
                status: (1 / 3),
                damage: 650,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.7
                    },
                    {
                        type: 'Puncture',
                        percent: (72.5 / 650)
                    },
                    {
                        type: 'Slash',
                        percent: (122.5 / 650)
                    },
                ]
            },
            {
                name: 'Tether',
                trigger: 'Semi-Auto',
                singleProjectile: true,
                fireRate: 0.2,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0,
                critMult: 2,
                status: 0.1,
                damage: 150,
                split: [
                    {
                        type: 'Electricity',
                        percent: 1
                    }
                ]
            }
        ]
    },
    {
        name: 'FLUX RIFLE',
        img: require('../assets/weapons/primary/fluxrifle.png'),
        mastery: 6,
        type: ['RIFLE', 'BEAM', 'ASSAULT RIFLE'],
        polarities: [],
        noise: 'Alarming',
        reload: 2.25,
        magSize: 50,
        disposition: 5,
        modes: [
            {
                trigger: 'Held',
                fireRate: 12,
                rangeLimit: 30,
                accuracy: 100,
                punchThrough: 0.5,
                critChance: 0.1,
                critMult: 2,
                status: 0.24,
                ammoCost: 0.5,
                damage: 22,
                split: [
                    {
                        type: 'Puncture',
                        percent: 0.22
                    },
                    {
                        type: 'Slash',
                        percent: 0.78
                    },
                ]
            }
        ]
    },
    {
        name: 'GLAXION',
        img: require('../assets/weapons/primary/glaxion.png'),
        mastery: 8,
        type: ['RIFLE', 'BEAM', 'ASSAULT RIFLE'],
        polarities: [],
        noise: 'Alarming',
        reload: 2.2,
        magSize: 80,
        maxAmmo: 720,
        disposition: 5,
        modes: [
            {
                trigger: 'Held',
                fireRate: 12,
                rangeLimit: 24,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.08,
                critMult: 2,
                status: 0.34,
                ammoCost: 0.5,
                damage: 26,
                split: [
                    {
                        type: 'Cold',
                        percent: 1
                    },
                ]
            }
        ]
    },
    {
        name: 'GORGON',
        img: require('../assets/weapons/primary/gorgon.png'),
        mastery: 3,
        type: ['RIFLE', 'ASSAULT RIFLE'],
        polarities: [],
        noise: 'Alarming',
        reload: 4.2,
        magSize: 90,
        maxAmmo: 540,
        disposition: 4,
        modes: [
            {
                trigger: 'Auto-Spool',
                fireRate: 12.5,
                accuracy: 12.5,
                punchThrough: 0,
                critChance: 0.17,
                critMult: 1.5,
                status: 0.09,
                damage: 25,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.75
                    },
                    {
                        type: 'Puncture',
                        percent: 0.15
                    },
                    {
                        type: 'Slash',
                        percent: 0.1
                    },
                ]
            }
        ]
    },
    {
        name: 'GORGON WRAITH',
        img: require('../assets/weapons/primary/gorgonwraith.png'),
        mastery: 7,
        type: ['RIFLE', 'ASSAULT RIFLE'],
        polarities: [],
        noise: 'Alarming',
        reload: 3,
        magSize: 90,
        maxAmmo: 900,
        disposition: 4,
        modes: [
            {
                trigger: 'Auto-Spool',
                fireRate: 13.3,
                accuracy: 16.7,
                punchThrough: 0,
                critChance: 0.15,
                critMult: 1.9,
                status: 0.21,
                damage: 27,
                split: [
                    {
                        type: 'Impact',
                        percent: (23 / 27)
                    },
                    {
                        type: 'Puncture',
                        percent: 0.1
                    },
                    {
                        type: 'Slash',
                        percent: (1.3 / 27)
                    },
                ]
            }
        ]
    },
    {
        name: 'GRAKATA',
        img: require('../assets/weapons/primary/grakata.png'),
        mastery: 5,
        type: ['RIFLE', 'ASSAULT RIFLE'],
        polarities: [],
        noise: 'Alarming',
        reload: 2.4,
        magSize: 60,
        maxAmmo: 750,
        disposition: 3,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 20,
                accuracy: 28.6,
                punchThrough: 0,
                critChance: 0.25,
                critMult: 2,
                status: 0.2,
                damage: 11,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.4
                    },
                    {
                        type: 'Puncture',
                        percent: (3.7 / 11)
                    },
                    {
                        type: 'Slash',
                        percent: (2.9 / 11)
                    },
                ]
            }
        ]
    },
    {
        name: 'GRINLOK',
        img: require('../assets/weapons/primary/grinlok.png'),
        mastery: 7,
        type: ['RIFLE', 'ASSAULT RIFLE', 'GRINLOK'],
        polarities: ['madurai'],
        noise: 'Alarming',
        reload: 1.7,
        magSize: 9,
        maxAmmo: 540,
        disposition: 4,
        modes: [
            {
                trigger: 'Semi-Auto',
                fireRate: 1.67,
                accuracy: 44.4,
                punchThrough: 0,
                critChance: 0.15,
                critMult: 2.5,
                status: 0.35,
                damage: 187,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.5
                    },
                    {
                        type: 'Puncture',
                        percent: 0.1
                    },
                    {
                        type: 'Slash',
                        percent: 0.4
                    },
                ]
            }
        ]
    },
    {
        name: 'HARPAK',
        img: require('../assets/weapons/primary/harpak.png'),
        mastery: 7,
        type: ['RIFLE', 'ASSAULT RIFLE', 'PROJECTILE'],
        polarities: ['madurai'],
        noise: 'Alarming',
        reload: 2,
        magSize: 45,
        maxAmmo: 540,
        disposition: 5,
        modes: [
            {
                name: 'Primary',
                trigger: 'Burst',
                burst: 3,
                fireRate: 6,
                accuracy: 18.2,
                punchThrough: 0,
                critChance: 0.2,
                critMult: 2.3,
                status: 0.17,
                damage: 50,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.1
                    },
                    {
                        type: 'Puncture',
                        percent: 0.75
                    },
                    {
                        type: 'Slash',
                        percent: 0.15
                    },
                ]
            },
            {
                name: 'Harpoon',
                trigger: 'Semi-Auto',
                fireRate: 1.5,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.25,
                critMult: 2.3,
                status: 0.13,
                damage: 100,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.4
                    },
                    {
                        type: 'Puncture',
                        percent: 0.5
                    },
                    {
                        type: 'Slash',
                        percent: 0.1
                    },
                ]
            }
        ]
    },
    {
        name: 'HEK',
        img: require('../assets/weapons/primary/hek.png'),
        mastery: 4,
        type: ['SHOTGUN', 'HEK'],
        polarities: [],
        noise: 'Alarming',
        reload: 2,
        magSize: 4,
        maxAmmo: 120,
        disposition: 1,
        modes: [
            {
                trigger: 'Semi-Auto',
                fireRate: 2.17,
                pellets: 7,
                accuracy: 9.1,
                punchThrough: 0,
                critChance: 0.1,
                critMult: 2,
                status: 0.25,
                falloffMin: 10,
                falloffMax: 20,
                damage: 525,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.15
                    },
                    {
                        type: 'Puncture',
                        percent: 0.65
                    },
                    {
                        type: 'Slash',
                        percent: 0.2
                    },
                ]
            }
        ]
    },
    {
        name: 'HEMA',
        img: require('../assets/weapons/primary/hema.png'),
        mastery: 7,
        type: ['RIFLE', 'ASSAULT RIFLE', 'PROJECTILE'],
        polarities: ['madurai'],
        noise: 'Alarming',
        reload: 2,
        magSize: 60,
        disposition: 3,
        modes: [
            {
                trigger: 'Burst',
                burst: 3,
                fireRate: 6,
                accuracy: 20,
                punchThrough: 0,
                critChance: 0.11,
                critMult: 2,
                status: 0.25,
                damage: 47,
                split: [
                    {
                        type: 'Viral',
                        percent: 1
                    }
                ]
            }
        ]
    },
    {
        name: 'HIND',
        img: require('../assets/weapons/primary/hind.png'),
        mastery: 0,
        type: ['RIFLE', 'ASSAULT RIFLE'],
        polarities: ['madurai'],
        noise: 'Alarming',
        reload: 2,
        magSize: 65,
        maxAmmo: 540,
        disposition: 5,
        modes: [
            {
                name: 'Burst',
                trigger: 'Burst',
                burst: 5,
                fireRate: 6.25,
                accuracy: 33.3,
                punchThrough: 0,
                critChance: 0.07,
                critMult: 1.5,
                status: 0.15,
                damage: 30,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.25
                    },
                    {
                        type: 'Puncture',
                        percent: 0.25
                    },
                    {
                        type: 'Slash',
                        percent: 0.5
                    },
                ]
            },
            {
                name: 'Semi-Auto',
                trigger: 'Semi-Auto',
                fireRate: 2.5,
                accuracy: 28.6,
                punchThrough: 0,
                critChance: 0.15,
                critMult: 2,
                status: 0.1,
                damage: 60,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.2
                    },
                    {
                        type: 'Puncture',
                        percent: 0.2
                    },
                    {
                        type: 'Slash',
                        percent: 0.6
                    },
                ]
            }
        ]
    },
    {
        name: 'IGNIS',
        img: require('../assets/weapons/primary/ignis.png'),
        mastery: 5,
        type: ['RIFLE', 'BEAM', 'ASSAULT RIFLE', 'EXPLOSIVE'],
        polarities: [],
        noise: 'Alarming',
        reload: 2,
        magSize: 150,
        maxAmmo: 750,
        disposition: 2,
        modes: [
            {
                trigger: 'Held',
                fireRate: 8,
                rangeLimit: 20,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.11,
                critMult: 2,
                status: 0.27,
                damage: 33,
                split: [
                    {
                        type: 'Heat',
                        percent: 1
                    },
                ]
            }
        ]
    },
    {
        name: 'IGNIS WRAITH',
        img: require('../assets/weapons/primary/igniswraith.png'),
        mastery: 9,
        type: ['RIFLE', 'BEAM', 'ASSAULT RIFLE', 'EXPLOSIVE'],
        polarities: [],
        noise: 'Alarming',
        reload: 1.7,
        magSize: 200,
        maxAmmo: 800,
        disposition: 2,
        modes: [
            {
                trigger: 'Held',
                fireRate: 8,
                rangeLimit: 27,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.17,
                critMult: 2.5,
                status: 0.29,
                damage: 35,
                split: [
                    {
                        type: 'Heat',
                        percent: 1
                    },
                ]
            }
        ]
    },
    {
        name: 'JAVLOK',
        img: require('../assets/weapons/primary/javlok.png'),
        mastery: 7,
        type: ['RIFLE', 'ASSAULT RIFLE', 'PROJECTILE', 'EXPLOSIVE'],
        polarities: ['madurai', 'madurai'],
        noise: 'Alarming',
        reload: 1.9,
        magSize: 6,
        maxAmmo: 300,
        disposition: 3,
        modes: [
            {
                name: 'Total',
                trigger: 'Charge',
                fireRate: 3.33,
                chargeRate: 0.3,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.2,
                critMult: 2,
                status: 0.25,
                damage: 280,
                split: [
                    {
                        type: 'Heat',
                        percent: 1
                    },
                ]
            },
            {
                name: 'Impact',
                trigger: 'Charge',
                fireRate: 3.33,
                chargeRate: 0.3,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.2,
                critMult: 2,
                status: 0.25,
                damage: 230,
                split: [
                    {
                        type: 'Heat',
                        percent: 1
                    },
                ]
            },
            {
                name: 'Explosion',
                trigger: 'Charge',
                fireRate: 3.33,
                chargeRate: 0.3,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.2,
                critMult: 2,
                status: 0.25,
                damage: 50,
                split: [
                    {
                        type: 'Heat',
                        percent: 1
                    },
                ]
            },
            {
                name: 'Throw',
                trigger: 'Charge',
                singleProjectile: true,
                fireRate: 1,
                chargeRate: 0.5,
                accuracy: 16.7,
                punchThrough: 0,
                critChance: 0.2,
                critMult: 2,
                status: 0.25,
                damage: 150,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.3
                    },
                    {
                        type: 'Puncture',
                        percent: 0.5
                    },
                    {
                        type: 'Slash',
                        percent: 0.2
                    },
                ]
            },
            {
                name: 'Throw Explosion',
                trigger: 'Charge',
                singleProjectile: true,
                fireRate: 1,
                chargeRate: 0.5,
                accuracy: 16.7,
                punchThrough: 0,
                critChance: 0.2,
                critMult: 2,
                status: 0.25,
                damage: 300,
                split: [
                    {
                        type: 'Heat',
                        percent: 1
                    },
                ]
            },
        ]
    },
    {
        name: 'KARAK',
        img: require('../assets/weapons/primary/karak.png'),
        mastery: 1,
        type: ['RIFLE', 'ASSAULT RIFLE'],
        polarities: ['madurai'],
        noise: 'Alarming',
        reload: 2,
        magSize: 30,
        maxAmmo: 540,
        disposition: 4,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 11.67,
                accuracy: 28.6,
                punchThrough: 0,
                critChance: 0.09,
                critMult: 1.5,
                status: 0.15,
                damage: 29,
                split: [
                    {
                        type: 'Impact',
                        percent: (13 / 29)
                    },
                    {
                        type: 'Puncture',
                        percent: 0.3
                    },
                    {
                        type: 'Slash',
                        percent: (7.3 / 29)
                    },
                ]
            }
        ]
    },
    {
        name: 'KARAK WRAITH',
        img: require('../assets/weapons/primary/karakwraith.png'),
        mastery: 7,
        type: ['RIFLE', 'ASSAULT RIFLE'],
        polarities: ['madurai'],
        noise: 'Alarming',
        reload: 2,
        magSize: 60,
        maxAmmo: 540,
        disposition: 4,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 11.67,
                accuracy: 28.6,
                punchThrough: 0,
                critChance: 0.13,
                critMult: 2,
                status: 0.25,
                damage: 31,
                split: [
                    {
                        type: 'Impact',
                        percent: (14.05 / 31)
                    },
                    {
                        type: 'Puncture',
                        percent: (9.3 / 31)
                    },
                    {
                        type: 'Slash',
                        percent: (7.75 / 31)
                    },
                ]
            }
        ]
    },
    {
        name: 'KOHM',
        img: require('../assets/weapons/primary/kohm.png'),
        mastery: 5,
        type: ['SHOTGUN'],
        polarities: ['vazarin'],
        noise: 'Alarming',
        reload: 2,
        magSize: 245,
        maxAmmo: 960,
        disposition: 5,
        modes: [
            {
                name: 'Fully Spooled',
                trigger: 'Auto-Spool',
                fireRate: 3.67,
                pellets: 12,
                accuracy: 3.6,
                punchThrough: 1.5,
                critChance: 0.11,
                critMult: 2.3,
                status: 0.25,
                falloffMin: 15,
                falloffMax: 25,
                ammoCost: 4,
                damage: 360,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.2
                    },
                    {
                        type: 'Puncture',
                        percent: 0.2
                    },
                    {
                        type: 'Slash',
                        percent: 0.6
                    },
                ]
            },
            {
                name: 'First Shot',
                trigger: 'Auto-Spool',
                fireRate: 3.67,
                accuracy: 3.6,
                punchThrough: 1.5,
                critChance: 0.11,
                critMult: 2.3,
                status: 0.25,
                falloffMin: 15,
                falloffMax: 25,
                damage: 30,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.2
                    },
                    {
                        type: 'Puncture',
                        percent: 0.2
                    },
                    {
                        type: 'Slash',
                        percent: 0.6
                    },
                ]
            }
        ]
    },
    {
        name: 'LANKA',
        img: require('../assets/weapons/primary/lanka.png'),
        mastery: 10,
        type: ['RIFLE', 'SNIPER', 'PROJECTILE', 'LANKA'],
        zoom: [
            {
                name: 'No Zoom'
            },
            {
                name: '3x Zoom',
                effect: 20
            },
            {
                name: '5x Zoom',
                effect: 30
            },
            {
                name: '8x Zoom',
                effect: 50
            },
        ],
        polarities: [],
        noise: 'Alarming',
        reload: 2,
        magSize: 10,
        maxAmmo: 72,
        disposition: 3,
        modes: [
            {
                name: 'Charged',
                trigger: 'Charge',
                fireRate: 1,
                chargeRate: 1,
                accuracy: 100,
                punchThrough: 5,
                critChance: 0.25,
                critMult: 2,
                status: 0.25,
                damage: 525,
                split: [
                    {
                        type: 'Electricity',
                        percent: 1
                    },
                ]
            },
            {
                name: 'Uncharged',
                trigger: 'Charge',
                fireRate: 1,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.25,
                critMult: 2,
                status: 0.25,
                damage: 200,
                split: [
                    {
                        type: 'Electricity',
                        percent: 1
                    },
                ]
            }
        ]
    },
    {
        name: 'LATRON',
        img: require('../assets/weapons/primary/latron.png'),
        mastery: 0,
        type: ['RIFLE', 'ASSAULT RIFLE', 'LATRON'],
        polarities: ['madurai'],
        noise: 'Alarming',
        reload: 2.4,
        magSize: 15,
        maxAmmo: 540,
        disposition: 3,
        modes: [
            {
                trigger: 'Semi-Auto',
                fireRate: 4.17,
                accuracy: 28.6,
                punchThrough: 0,
                critChance: 0.12,
                critMult: 2,
                status: 0.12,
                damage: 55,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.15
                    },
                    {
                        type: 'Puncture',
                        percent: 0.7
                    },
                    {
                        type: 'Slash',
                        percent: 0.15
                    },
                ]
            }
        ]
    },
    {
        name: 'LATRON PRIME',
        img: require('../assets/weapons/primary/latronprime.png'),
        mastery: 10,
        type: ['RIFLE', 'ASSAULT RIFLE', 'LATRON'],
        polarities: ['madurai', 'naramon'],
        noise: 'Alarming',
        reload: 2.4,
        magSize: 15,
        maxAmmo: 540,
        disposition: 3,
        modes: [
            {
                trigger: 'Semi-Auto',
                fireRate: 4.17,
                accuracy: 28.6,
                punchThrough: 0,
                critChance: 0.22,
                critMult: 2.8,
                status: 0.26,
                damage: 90,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.1
                    },
                    {
                        type: 'Puncture',
                        percent: 0.8
                    },
                    {
                        type: 'Slash',
                        percent: 0.1
                    },
                ]
            }
        ]
    },
    {
        name: 'LATRON WRAITH',
        img: require('../assets/weapons/primary/latronwraith.png'),
        mastery: 7,
        type: ['RIFLE', 'ASSAULT RIFLE', 'LATRON'],
        polarities: ['madurai'],
        noise: 'Alarming',
        reload: 2.4,
        magSize: 15,
        maxAmmo: 540,
        disposition: 3,
        modes: [
            {
                trigger: 'Semi-Auto',
                fireRate: 5.42,
                accuracy: 28.6,
                punchThrough: 0,
                critChance: 0.26,
                critMult: 2.8,
                status: 0.14,
                damage: 60,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.25
                    },
                    {
                        type: 'Puncture',
                        percent: 0.7
                    },
                    {
                        type: 'Slash',
                        percent: 0.05
                    },
                ]
            }
        ]
    },
    {
        name: 'LENZ',
        img: require('../assets/weapons/primary/lenz.png'),
        mastery: 8,
        type: ['RIFLE', 'BOW', 'PROJECTILE'],
        polarities: ['naramon', 'naramon'],
        noise: 'Alarming',
        reload: 0.6,
        magSize: 1,
        maxAmmo: 6,
        bow: true,
        disposition: 3,
        modes: [
            {
                name: 'Explosion',
                trigger: 'Charge',
                chargeRate: 1.2,
                accuracy: 16.7,
                punchThrough: 0,
                critChance: 0.5,
                critMult: 2,
                status: 0.05,
                damage: 660,
                split: [
                    {
                        type: 'Blast',
                        percent: 1
                    },
                ]
            },
            {
                name: 'Bubble',
                trigger: 'Charge',
                chargeRate: 1.2,
                accuracy: 16.7,
                punchThrough: 0,
                critChance: 0.5,
                critMult: 2,
                status: 0.05,
                damage: 10,
                split: [
                    {
                        type: 'Cold',
                        percent: 1
                    },
                ]
            },
            {
                name: 'Projectile',
                trigger: 'Charge',
                chargeRate: 1.2,
                accuracy: 16.7,
                punchThrough: 0,
                critChance: 0.5,
                critMult: 2,
                status: 0.05,
                damage: 50,
                split: [
                    {
                        type: 'Impact',
                        percent: 1
                    },
                ]
            }
        ]
    },
    {
        name: 'MITER',
        img: require('../assets/weapons/primary/miter.png'),
        mastery: 6,
        type: ['RIFLE', 'ASSAULT RIFLE', 'PROJECTILE', 'MITER'],
        polarities: ['naramon'],
        noise: 'Alarming',
        reload: 2,
        magSize: 20,
        maxAmmo: 72,
        disposition: 5,
        modes: [
            {
                name: 'Charged',
                trigger: 'Charge',
                fireRate: 2.5,
                chargeRate: 0.75,
                accuracy: 100,
                punchThrough: 2.5,
                critChance: 0.1,
                critMult: 2,
                status: 0.5,
                damage: 250,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.05
                    },
                    {
                        type: 'Puncture',
                        percent: 0.05
                    },
                    {
                        type: 'Slash',
                        percent: 0.9
                    },
                ]
            },
            {
                name: 'Uncharged',
                trigger: 'Charge',
                fireRate: 2.5,
                chargeRate: 0.75,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.05,
                critMult: 2,
                status: 0.25,
                damage: 100,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.05
                    },
                    {
                        type: 'Puncture',
                        percent: 0.05
                    },
                    {
                        type: 'Slash',
                        percent: 0.9
                    },
                ]
            }
        ]
    },
    {
        name: 'MK1-BRATON',
        img: require('../assets/weapons/primary/braton.png'),
        mastery: 0,
        type: ['RIFLE', 'ASSAULT RIFLE'],
        polarities: [],
        noise: 'Alarming',
        reload: 2,
        magSize: 60,
        maxAmmo: 540,
        disposition: 3,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 7.5,
                accuracy: 40,
                punchThrough: 0,
                critChance: 0.08,
                critMult: 1.5,
                status: 0.05,
                damage: 18,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.25
                    },
                    {
                        type: 'Puncture',
                        percent: 0.25
                    },
                    {
                        type: 'Slash',
                        percent: 0.5
                    },
                ]
            }
        ]
    },
    {
        name: 'MK1-PARIS',
        img: require('../assets/weapons/primary/paris.png'),
        mastery: 0,
        type: ['RIFLE', 'BOW', 'PROJECTILE'],
        polarities: ['naramon'],
        noise: 'Alarming',
        reload: 0.55,
        magSize: 1,
        maxAmmo: 72,
        bow: true,
        disposition: 3,
        modes: [
            {
                name: 'Charged',
                trigger: 'Charge',
                chargeRate: 0.5,
                accuracy: 16.7,
                punchThrough: 2,
                critChance: 0.3,
                critMult: 2,
                status: 0.15,
                damage: 120,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.05
                    },
                    {
                        type: 'Puncture',
                        percent: 0.8
                    },
                    {
                        type: 'Slash',
                        percent: 0.15
                    },
                ]
            },
            {
                name: 'Uncharged',
                trigger: 'Charge',
                chargeRate: 0.5,
                accuracy: 16.7,
                punchThrough: 0,
                critChance: 0.15,
                critMult: 1.5,
                status: 0.15,
                damage: 100,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.05
                    },
                    {
                        type: 'Puncture',
                        percent: 0.8
                    },
                    {
                        type: 'Slash',
                        percent: 0.15
                    },
                ]
            }
        ]
    },
    {
        name: 'MK1-STRUN',
        img: require('../assets/weapons/primary/strun.png'),
        mastery: 0,
        type: ['SHOTGUN'],
        polarities: ['naramon'],
        noise: 'Alarming',
        reload: 3.75,
        magSize: 6,
        maxAmmo: 120,
        disposition: 5,
        modes: [
            {
                trigger: 'Semi-Auto',
                fireRate: 2.08,
                pellets: 10,
                accuracy: 4,
                punchThrough: 0,
                critChance: 0.075,
                critMult: 2,
                status: 0.2,
                falloffMin: 15,
                falloffMax: 25,
                damage: 180,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.55
                    },
                    {
                        type: 'Puncture',
                        percent: 0.15
                    },
                    {
                        type: 'Slash',
                        percent: 0.3
                    },
                ]
            }
        ]
    },
    {
        name: 'MUTALIST CERNOS',
        img: require('../assets/weapons/primary/mutalistcernos.png'),
        mastery: 7,
        type: ['RIFLE', 'BOW', 'PROJECTILE'],
        polarities: ['naramon'],
        noise: 'Silent',
        reload: 0.6,
        magSize: 1,
        maxAmmo: 72,
        bow: true,
        disposition: 4,
        modes: [
            {
                name: 'Charged',
                trigger: 'Charge',
                chargeRate: 0.5,
                accuracy: 16.7,
                punchThrough: 1,
                critChance: 0.15,
                critMult: 2,
                status: 0.49,
                damage: 225,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.9
                    },
                    {
                        type: 'Puncture',
                        percent: 0.05
                    },
                    {
                        type: 'Slash',
                        percent: 0.05
                    },
                ]
            },
            {
                name: 'Uncharged',
                trigger: 'Charge',
                chargeRate: 0.5,
                accuracy: 16.7,
                punchThrough: 0,
                critChance: 0.1,
                critMult: 1.5,
                status: 0.49,
                damage: 120,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.9
                    },
                    {
                        type: 'Puncture',
                        percent: 0.05
                    },
                    {
                        type: 'Slash',
                        percent: 0.05
                    },
                ]
            },
            {
                name: 'Toxin Cloud',
                trigger: 'Charge',
                accuracy: 16.7,
                punchThrough: 0,
                critChance: 0.1,
                critMult: 1.5,
                status: 0.49,
                damage: 50,
                split: [
                    {
                        type: 'Toxin',
                        percent: 1
                    }
                ]
            }
        ]
    },
    {
        name: 'MUTALIST QUANTA',
        img: require('../assets/weapons/primary/mutalistquanta.png'),
        mastery: 2,
        type: ['RIFLE', 'ASSAULT RIFLE'],
        polarities: ['vazarin'],
        noise: 'Alarming',
        reload: 3,
        magSize: 60,
        maxAmmo: 540,
        disposition: 5,
        modes: [
            {
                name: 'Primary',
                trigger: 'Auto',
                fireRate: 10,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.025,
                critMult: 1.5,
                status: 0.15,
                damage: 25,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.1
                    },
                    {
                        type: 'Puncture',
                        percent: 0.6
                    },
                    {
                        type: 'Slash',
                        percent: 0.3
                    },
                ]
            },
            {
                name: 'Infested Orb',
                trigger: 'Semi-Auto',
                fireRate: 10,
                accuracy: 25,
                punchThrough: 0,
                critChance: 0.025,
                critMult: 1.5,
                status: 1,
                ammoCost: 5,
                damage: 20,
                split: [
                    {
                        type: 'Radiation',
                        percent: 1
                    }
                ]
            },
            {
                name: 'Orb Explosion',
                trigger: 'Semi-Auto',
                fireRate: 10,
                accuracy: 25,
                punchThrough: 0,
                critChance: 0.05,
                critMult: 1.5,
                status: 0,
                damage: 100,
                split: [
                    {
                        type: 'Electricity',
                        percent: 1
                    }
                ]
            }
        ]
    },
    {
        name: 'OGRIS',
        img: require('../assets/weapons/primary/ogris.png'),
        mastery: 9,
        type: ['RIFLE', 'ASSAULT RIFLE', 'PROJECTILE', 'EXPLOSIVE', 'UNIQUE', 'OGRIS'],
        polarities: [],
        noise: 'Alarming',
        reload: 2.5,
        magSize: 5,
        maxAmmo: 20,
        disposition: 4,
        modes: [
            {
                name: 'Explosion',
                trigger: 'Charge',
                fireRate: 1.5,
                chargeRate: 0.3,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.05,
                critMult: 2,
                status: 0.35,
                damage: 600,
                split: [
                    {
                        type: 'Blast',
                        percent: 1
                    }
                ]
            },
            {
                name: 'Rocket Impact',
                trigger: 'Charge',
                fireRate: 1.5,
                chargeRate: 0.3,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.05,
                critMult: 2,
                status: 0.35,
                damage: 100,
                split: [
                    {
                        type: 'Blast',
                        percent: 1
                    }
                ]
            },
        ]
    },
    {
        name: 'OPTICOR',
        img: require('../assets/weapons/primary/opticor.png'),
        mastery: 14,
        type: ['RIFLE', 'ASSAULT RIFLE', 'EXPLOSIVE'],
        polarities: ['madurai'],
        noise: 'Alarming',
        reload: 2,
        magSize: 5,
        maxAmmo: 200,
        disposition: 4,
        modes: [
            {
                name: 'Charged Shot',
                trigger: 'Charge',
                fireRate: 1,
                chargeRate: 2,
                accuracy: 100,
                punchThrough: 1,
                critChance: 0.2,
                critMult: 2.5,
                status: 0.2,
                damage: 1000,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.1
                    },
                    {
                        type: 'Puncture',
                        percent: 0.85
                    },
                    {
                        type: 'Slash',
                        percent: 0.05
                    },
                ]
            },
            {
                name: 'Impact Area Damage',
                trigger: 'Charge',
                fireRate: 1,
                chargeRate: 2,
                accuracy: 100,
                critChance: 0.2,
                critMult: 2.5,
                status: 0.2,
                damage: 1000,
                split: [
                    {
                        type: 'Magnetic',
                        percent: 1
                    }
                ]
            }
        ]
    },
    {
        name: 'PANTHERA',
        img: require('../assets/weapons/primary/panthera.png'),
        mastery: 7,
        type: ['RIFLE', 'ASSAULT RIFLE', 'BEAM', 'PROJECTILE', 'PANTHERA'],
        polarities: ['naramon'],
        noise: 'Alarming',
        reload: 2,
        magSize: 60,
        maxAmmo: 540,
        disposition: 5,
        modes: [
            {
                name: 'Primary',
                trigger: 'Auto',
                fireRate: 3,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.12,
                critMult: 2,
                status: 0.24,
                ammoCost: 2,
                damage: 100,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.2
                    },
                    {
                        type: 'Puncture',
                        percent: 0.1
                    },
                    {
                        type: 'Slash',
                        percent: 0.7
                    },
                ]
            },
            {
                name: 'Beam',
                trigger: 'Held',
                fireRate: 2,
                rangeLimit: 5,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.25,
                critMult: 2,
                status: 0.35,
                ammoCost: 1,
                damage: 100,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.1
                    },
                    {
                        type: 'Puncture',
                        percent: 0.1
                    },
                    {
                        type: 'Slash',
                        percent: 0.8
                    },
                ]
            }
        ]
    },
    {
        name: 'PARACYST',
        img: require('../assets/weapons/primary/paracyst.png'),
        mastery: 7,
        type: ['RIFLE', 'ASSAULT RIFLE', 'PROJECTILE'],
        polarities: ['vazarin'],
        noise: 'Alarming',
        reload: 2,
        magSize: 60,
        maxAmmo: 540,
        disposition: 5,
        modes: [
            {
                name: 'Primary',
                trigger: 'Burst',
                burst: 3,
                fireRate: 11.11,
                accuracy: 50,
                punchThrough: 0,
                critChance: 0.1,
                critMult: 2,
                status: 0.3,
                damage: 33,
                split: [
                    {
                        type: 'Toxin',
                        percent: 1
                    }
                ]
            },
            {
                name: 'Harpoon',
                trigger: 'Burst/Charge',
                burst: 3,
                fireRate: 11.11,
                accuracy: 50,
                punchThrough: 0,
                critChance: 0.1,
                critMult: 2,
                status: 0.3,
                damage: 33,
                split: [
                    {
                        type: 'Toxin',
                        percent: 1
                    }
                ]
            }
        ]
    },
    {
        name: 'PARIS',
        img: require('../assets/weapons/primary/paris.png'),
        mastery: 3,
        type: ['RIFLE', 'BOW'],
        polarities: ['naramon'],
        noise: 'Silent',
        reload: 0.7,
        magSize: 1,
        maxAmmo: 72,
        bow: true,
        disposition: 3,
        modes: [
            {
                name: 'Charged',
                trigger: 'Charge',
                chargeRate: 0.5,
                accuracy: 16.7,
                punchThrough: 2,
                critChance: 0.3,
                critMult: 2,
                status: 0.1,
                damage: 180,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.05
                    },
                    {
                        type: 'Puncture',
                        percent: 0.8
                    },
                    {
                        type: 'Slash',
                        percent: 0.15
                    },
                ]
            },
            {
                name: 'Uncharged',
                trigger: 'Charge',
                accuracy: 16.7,
                punchThrough: 0,
                critChance: 0.2,
                critMult: 1.5,
                status: 0.1,
                damage: 120,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.05
                    },
                    {
                        type: 'Puncture',
                        percent: 0.8
                    },
                    {
                        type: 'Slash',
                        percent: 0.15
                    },
                ]
            }
        ]
    },
    {
        name: 'PARIS PRIME',
        img: require('../assets/weapons/primary/parisprime.png'),
        mastery: 8,
        type: ['RIFLE', 'BOW'],
        polarities: ['naramon', 'madurai'],
        noise: 'Silent',
        reload: 0.7,
        magSize: 1,
        maxAmmo: 72,
        bow: true,
        disposition: 3,
        modes: [
            {
                name: 'Charged',
                trigger: 'Charge',
                chargeRate: 0.5,
                accuracy: 16.7,
                punchThrough: 2,
                critChance: 0.45,
                critMult: 2,
                status: 0.2,
                damage: 260,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.025
                    },
                    {
                        type: 'Puncture',
                        percent: 0.8
                    },
                    {
                        type: 'Slash',
                        percent: 0.175
                    },
                ]
            },
            {
                name: 'Uncharged',
                trigger: 'Charge',
                accuracy: 16.7,
                punchThrough: 0,
                critChance: 0.25,
                critMult: 2,
                status: 0.2,
                damage: 130,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.025
                    },
                    {
                        type: 'Puncture',
                        percent: 0.8
                    },
                    {
                        type: 'Slash',
                        percent: 0.175
                    },
                ]
            }
        ]
    },
    {
        name: 'PENTA',
        img: require('../assets/weapons/primary/penta.png'),
        mastery: 6,
        type: ['RIFLE', 'ASSAULT RIFLE', 'EXPLOSIVE', 'UNIQUE', 'PENTA'],
        polarities: [],
        noise: 'Silent',
        reload: 2.5,
        magSize: 5,
        maxAmmo: 20,
        disposition: 4,
        modes: [
            {
                name: 'Detonation',
                trigger: 'Active',
                fireRate: 1,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.1,
                critMult: 2,
                status: 0.1,
                damage: 350,
                split: [
                    {
                        type: 'Blast',
                        percent: 1
                    }
                ]
            },
            {
                name: 'Grenade Impact',
                trigger: 'Semi-Auto',
                fireRate: 1,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.1,
                critMult: 2,
                status: 0.1,
                damage: 75,
                split: [
                    {
                        type: 'Impact',
                        percent: 1
                    }
                ]
            }
        ]
    },
    {
        name: 'PHAGE',
        img: require('../assets/weapons/primary/phage.png'),
        mastery: 11,
        type: ['SHOTGUN', 'BEAM'],
        polarities: ['naramon'],
        noise: 'Alarming',
        reload: 2,
        magSize: 90,
        maxAmmo: 720,
        disposition: 5,
        modes: [
            {
                trigger: 'Held',
                rangeLimit: 25,
                fireRate: 12,
                pellets: 7,
                accuracy: 50,
                punchThrough: 0.5,
                ammoCost: 0.5,
                critChance: 0.19,
                critMult: 2,
                status: 0.31,
                damage: 30,
                split: [
                    {
                        type: 'Viral',
                        percent: 1
                    }
                ]
            }
        ]
    },
    {
        name: 'PHANTASMA',
        img: require('../assets/weapons/primary/phantasma.png'),
        mastery: 9,
        type: ['SHOTGUN', 'BEAM'],
        polarities: ['naramon', 'madurai'],
        noise: 'Alarming',
        reload: 0.5,
        magSize: 11,
        maxAmmo: 275,
        disposition: 3,
        modes: [
            {
                name: 'Primary',
                trigger: 'Held',
                rangeLimit: 20,
                fireRate: 12,
                pellets: 5,
                accuracy: 100,
                punchThrough: 0.5,
                ammoCost: 0.5,
                critChance: 0.03,
                critMult: 1.5,
                status: 0.37,
                damage: 74,
                split: [
                    {
                        type: 'Impact',
                        percent: 1 / 3
                    },
                    {
                        type: 'Radiation',
                        percent: 2 / 3
                    }
                ]
            },
            {
                name: 'Plasma Bomb',
                trigger: 'Charge',
                fireRate: 2,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.03,
                critMult: 1.5,
                status: 0.37,
                damage: 88,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.17
                    },
                    {
                        type: 'Radiation',
                        percent: 0.83
                    }
                ]
            }
        ]
    },
    {
        name: 'PRISMA GORGON',
        img: require('../assets/weapons/primary/prismagorgon.png'),
        mastery: 11,
        type: ['RIFLE', 'ASSAULT RIFLE'],
        polarities: [],
        noise: 'Alarming',
        reload: 3,
        magSize: 120,
        maxAmmo: 840,
        disposition: 4,
        modes: [
            {
                trigger: 'Auto-Spool',
                fireRate: 14.17,
                accuracy: 20,
                punchThrough: 0,
                critChance: 0.3,
                critMult: 2.3,
                status: 0.15,
                damage: 23,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.75
                    },
                    {
                        type: 'Puncture',
                        percent: 0.15
                    },
                    {
                        type: 'Slash',
                        percent: 0.1
                    },
                ]
            }
        ]
    },
    {
        name: 'PRISMA GRAKATA',
        img: require('../assets/weapons/primary/prismagrakata.png'),
        mastery: 11,
        type: ['RIFLE', 'ASSAULT RIFLE'],
        polarities: [],
        noise: 'Alarming',
        reload: 2,
        magSize: 120,
        maxAmmo: 1000,
        disposition: 3,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 21.67,
                accuracy: 28.6,
                punchThrough: 0,
                critChance: 0.25,
                critMult: 2.5,
                status: 0.21,
                damage: 15,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.4
                    },
                    {
                        type: 'Puncture',
                        percent: 1 / 3
                    },
                    {
                        type: 'Slash',
                        percent: 4 / 15
                    },
                ]
            }
        ]
    },
    {
        name: 'PRISMA TETRA',
        img: require('../assets/weapons/primary/prismatetra.png'),
        mastery: 4,
        type: ['RIFLE', 'ASSAULT RIFLE', 'PROJECTILE', 'TETRA'],
        polarities: [],
        noise: 'Alarming',
        reload: 2,
        magSize: 60,
        maxAmmo: 540,
        disposition: 5,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 7.08,
                accuracy: 18.2,
                punchThrough: 0,
                critChance: 0.1,
                critMult: 2,
                status: 0.24,
                damage: 38,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.2
                    },
                    {
                        type: 'Puncture',
                        percent: 0.8
                    }
                ]
            }
        ]
    },
    {
        name: 'QUANTA',
        img: require('../assets/weapons/primary/quanta.png'),
        mastery: 4,
        type: ['RIFLE', 'ASSAULT RIFLE', 'PROJECTILE', 'BEAM'],
        polarities: ['vazarin'],
        noise: 'Alarming',
        reload: 2,
        magSize: 60,
        maxAmmo: 540,
        disposition: 2,
        modes: [
            {
                name: 'Beam',
                trigger: 'Held',
                fireRate: 12,
                rangeLimit: 50,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.16,
                critMult: 2.2,
                status: 0.16,
                damage: 20,
                split: [
                    {
                        type: 'Electricity',
                        percent: 1
                    }
                ]
            },
            {
                name: 'Cube Explosion',
                trigger: 'Semi-Auto',
                fireRate: 12,
                rangeLimit: 50,
                accuracy: 25,
                punchThrough: 0,
                critChance: 0.05,
                critMult: 1.5,
                status: 0.26,
                damage: 600,
                split: [
                    {
                        type: 'Blast',
                        percent: 1
                    }
                ]
            }
        ]
    },
    {
        name: 'QUANTA VANDAL',
        img: require('../assets/weapons/primary/quantavandal.png'),
        mastery: 10,
        type: ['RIFLE', 'ASSAULT RIFLE', 'PROJECTILE', 'BEAM'],
        polarities: ['madurai'],
        noise: 'Alarming',
        reload: 1.8,
        magSize: 80,
        maxAmmo: 560,
        disposition: 2,
        modes: [
            {
                name: 'Beam',
                trigger: 'Held',
                fireRate: 12,
                rangeLimit: 50,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.22,
                critMult: 2.4,
                status: 0.3,
                damage: 26,
                split: [
                    {
                        type: 'Electricity',
                        percent: 1
                    }
                ]
            },
            {
                name: 'Cube Explosion',
                trigger: 'Semi-Auto',
                fireRate: 12,
                rangeLimit: 50,
                accuracy: 25,
                punchThrough: 0,
                critChance: 0.05,
                critMult: 1.5,
                status: 0.26,
                damage: 600,
                split: [
                    {
                        type: 'Blast',
                        percent: 1
                    }
                ]
            }
        ]
    },
    {
        name: 'QUARTAKK',
        img: require('../assets/weapons/primary/quartakk.png'),
        mastery: 10,
        type: ['RIFLE', 'ASSAULT RIFLE'],
        polarities: [],
        noise: 'Alarming',
        reload: 1.9,
        magSize: 84,
        maxAmmo: 840,
        disposition: 4,
        modes: [
            {
                trigger: 'Burst',
                burst: 4,
                fireRate: 6.33,
                accuracy: 90.9,
                punchThrough: 0.5,
                critChance: 0.19,
                critMult: 2.3,
                status: 0.27,
                damage: 49,
                split: [
                    {
                        type: 'Impact',
                        percent: 18.1 / 49
                    },
                    {
                        type: 'Puncture',
                        percent: 14.2 / 49
                    },
                    {
                        type: 'Slash',
                        percent: 16.7 / 49
                    },
                ]
            }
        ]
    },
    {
        name: 'RAKTA CERNOS',
        img: require('../assets/weapons/primary/raktacernos.png'),
        mastery: 12,
        type: ['RIFLE', 'BOW', 'PROJECTILE'],
        polarities: ['madurai', 'madurai', 'naramon'],
        noise: 'Silent',
        reload: 0.6,
        magSize: 1,
        maxAmmo: 72,
        bow: true,
        disposition: 2,
        modes: [
            {
                name: 'Charged',
                trigger: 'Charge',
                accuracy: 16.7,
                chargeRate: 0.25,
                critChance: 0.35,
                critMult: 2,
                status: 0.15,
                punchThrough: 1,
                damage: 250,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.9
                    },
                    {
                        type: 'Puncture',
                        percent: 0.05
                    },
                    {
                        type: 'Slash',
                        percent: 0.05
                    },
                ]
            },
            {
                name: 'Uncharged',
                trigger: 'Charge',
                accuracy: 16.7,
                critChance: 0.175,
                critMult: 2,
                status: 0.15,
                damage: 150,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.9
                    },
                    {
                        type: 'Puncture',
                        percent: 0.05
                    },
                    {
                        type: 'Slash',
                        percent: 0.05
                    },
                ]
            }
        ]
    },
    {
        name: 'RUBICO',
        img: require('../assets/weapons/primary/rubico.png'),
        mastery: 6,
        type: ['RIFLE', 'SNIPER', 'RUBICO'],
        zoom: [
            {
                name: 'No Zoom'
            },
            {
                name: '3.5x Zoom',
                effect: 0.35
            },
            {
                name: '6x Zoom',
                effect: 0.5
            }
        ],
        polarities: [],
        noise: 'Alarming',
        reload: 2.4,
        magSize: 5,
        maxAmmo: 72,
        disposition: 3,
        modes: [
            {
                trigger: 'Semi-Auto',
                fireRate: 2.67,
                accuracy: 13.3,
                punchThrough: 1,
                critChance: 0.3,
                critMult: 3,
                status: 0.12,
                damage: 180,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.8
                    },
                    {
                        type: 'Puncture',
                        percent: 0.15
                    },
                    {
                        type: 'Slash',
                        percent: 0.05
                    },
                ]
            }
        ]
    },
    {
        name: 'RUBICO PRIME',
        img: require('../assets/weapons/primary/rubicoprime.png'),
        mastery: 12,
        type: ['RIFLE', 'SNIPER', 'RUBICO'],
        zoom: [
            {
                name: 'No Zoom'
            },
            {
                name: '2.5x Zoom',
                effect: 0.35
            },
            {
                name: '5x Zoom',
                effect: 0.5
            }
        ],
        polarities: ['madurai', 'madurai'],
        noise: 'Alarming',
        reload: 2,
        magSize: 5,
        maxAmmo: 72,
        disposition: 3,
        modes: [
            {
                trigger: 'Semi-Auto',
                fireRate: 2.67,
                accuracy: 13.3,
                punchThrough: 1,
                critChance: 0.3,
                critMult: 3,
                status: 0.12,
                damage: 187,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.8
                    },
                    {
                        type: 'Puncture',
                        percent: 0.15
                    },
                    {
                        type: 'Slash',
                        percent: 0.05
                    },
                ]
            }
        ]
    },
    {
        name: 'SANCTI TIGRIS',
        img: require('../assets/weapons/primary/sanctitigris.png'),
        mastery: 12,
        type: ['SHOTGUN'],
        polarities: ['vazarin', 'naramon', 'madurai'],
        noise: 'Alarming',
        reload: 1.5,
        magSize: 2,
        maxAmmo: 120,
        disposition: 1,
        modes: [
            {
                trigger: 'Duplex',
                fireRate: 2,
                pellets: 6,
                accuracy: 6.5,
                punchThrough: 0,
                critChance: 0.15,
                critMult: 1.5,
                status: 0.28,
                falloffMin: 8,
                falloffMax: 20,
                damage: 1260,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.1
                    },
                    {
                        type: 'Puncture',
                        percent: 0.1
                    },
                    {
                        type: 'Slash',
                        percent: 0.8
                    },
                ]
            }
        ]
    },
    {
        name: 'SCOURGE',
        img: require('../assets/weapons/primary/scourge.png'),
        mastery: 6,
        type: ['RIFLE', 'ASSAULT RIFLE', 'PROJECTILE', 'EXPLOSIVE'],
        polarities: ['naramon', 'madurai'],
        noise: 'Alarming',
        reload: 2.5,
        magSize: 20,
        maxAmmo: 100,
        disposition: 3,
        modes: [
            {
                name: 'Projectile Total',
                trigger: 'Auto',
                fireRate: 2.67,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.2,
                critMult: 1.5,
                status: 0.3,
                damage: 100,
                split: [
                    {
                        type: 'Corrosive',
                        percent: 1
                    }
                ]
            },
            {
                name: 'Projectile Impact',
                trigger: 'Auto',
                fireRate: 2.67,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.2,
                critMult: 1.5,
                status: 0.3,
                damage: 70,
                split: [
                    {
                        type: 'Corrosive',
                        percent: 1
                    }
                ]
            },
            {
                name: 'Projectile Explosion',
                trigger: 'Auto',
                fireRate: 2.67,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.2,
                critMult: 1.5,
                status: 0.3,
                damage: 70,
                split: [
                    {
                        type: 'Corrosive',
                        percent: 1
                    }
                ]
            },
            {
                name: 'Spear Throw',
                trigger: 'Charge',
                singleProjectile: true,
                fireRate: 1,
                chargeRate: 0.5,
                accuracy: 16.7,
                punchThrough: 0,
                critChance: 0.04,
                critMult: 2,
                status: 0.3,
                damage: 700,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.65
                    },
                    {
                        type: 'Puncture',
                        percent: 7 * 0.725
                    },
                    {
                        type: 'Slash',
                        percent: 0.175
                    },
                    {
                        type: 'Corrosive',
                        percent: 5 / 70
                    }
                ]
            }
        ]
    },
    {
        name: 'SECURA PENTA',
        img: require('../assets/weapons/primary/securapenta.png'),
        mastery: 12,
        type: ['RIFLE', 'ASSAULT RIFLE', 'EXPLOSIVE', 'UNIQUE', 'PENTA'],
        polarities: ['naramon', 'vazarin', 'madurai'],
        noise: 'Silent/Alarming',
        reload: 2.5,
        magSize: 7,
        maxAmmo: 28,
        disposition: 4,
        modes: [
            {
                name: 'Detonation',
                trigger: 'Active',
                fireRate: 2,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.26,
                critMult: 2,
                status: 0.26,
                damage: 300,
                split: [
                    {
                        type: 'Blast',
                        percent: 1
                    }
                ]
            },
            {
                name: 'Grenade Impact',
                trigger: 'Semi-Auto',
                fireRate: 2,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.26,
                critMult: 2,
                status: 0.26,
                damage: 75,
                split: [
                    {
                        type: 'Impact',
                        percent: 1
                    }
                ]
            }
        ]
    },
    {
        name: 'SIMULOR',
        img: require('../assets/weapons/primary/simulor.png'),
        mastery: 5,
        type: ['RIFLE', 'ASSAULT RIFLE'],
        polarities: ['vazarin', 'naramon'],
        noise: 'Alarming',
        reload: 3,
        magSize: 10,
        maxAmmo: 60,
        disposition: 1,
        modes: [
            {
                name: 'Orb Detonation',
                trigger: 'Active',
                fireRate: 2,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.12,
                critMult: 2,
                status: 0.3,
                damage: 75,
                split: [
                    {
                        type: 'Electricity',
                        percent: 1
                    }
                ]
            },
            {
                name: 'Orb Merge',
                trigger: 'Semi-Auto',
                fireRate: 2,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.12,
                critMult: 2,
                status: 0.3,
                damage: 75,
                split: [
                    {
                        type: 'Magnetic',
                        percent: 1
                    }
                ]
            },
            {
                name: 'Orb Damage',
                trigger: 'Semi-Auto',
                fireRate: 2,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.12,
                critMult: 2,
                status: 0.3,
                damage: 50,
                split: [
                    {
                        type: 'Magnetic',
                        percent: 1
                    }
                ]
            }
        ]
    },
    {
        name: 'SNIPETRON',
        img: require('../assets/weapons/primary/snipetron.png'),
        mastery: 0,
        type: ['RIFLE', 'SNIPER'],
        headshotDamage: true,
        zoom: [
            {
                name: 'No Zoom'
            },
            {
                name: '2.5x Zoom',
                effect: 30
            },
            {
                name: '6x Zoom',
                effect: 50
            }
        ],
        polarities: ['madurai'],
        noise: 'Alarming',
        reload: 3.5,
        magSize: 4,
        maxAmmo: 72,
        disposition: 4,
        modes: [
            {
                trigger: 'Semi-Auto',
                fireRate: 2,
                accuracy: 13.3,
                punchThrough: 2.5,
                critChance: 0.3,
                critMult: 1.5,
                status: 0.12,
                damage: 180,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.1
                    },
                    {
                        type: 'Puncture',
                        percent: 0.8
                    },
                    {
                        type: 'Slash',
                        percent: 0.1
                    },
                ]
            }
        ]
    },
    {
        name: 'SNIPETRON VANDAL',
        img: require('../assets/weapons/primary/snipetronvandal.png'),
        mastery: 5,
        type: ['RIFLE', 'SNIPER'],
        headshotDamage: true,
        zoom: [
            {
                name: 'No Zoom'
            },
            {
                name: '2.5x Zoom',
                effect: 30
            },
            {
                name: '6x Zoom',
                effect: 50
            }
        ],
        polarities: ['madurai'],
        noise: 'Alarming',
        reload: 2,
        magSize: 6,
        maxAmmo: 72,
        disposition: 4,
        modes: [
            {
                trigger: 'Semi-Auto',
                fireRate: 2,
                accuracy: 13.3,
                punchThrough: 3,
                critChance: 0.28,
                critMult: 2,
                status: 0.16,
                damage: 200,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.05
                    },
                    {
                        type: 'Puncture',
                        percent: 0.9
                    },
                    {
                        type: 'Slash',
                        percent: 0.05
                    },
                ]
            }
        ]
    },
    {
        name: 'SOBEK',
        img: require('../assets/weapons/primary/sobek.png'),
        mastery: 7,
        type: ['SHOTGUN', 'SOBEK'],
        polarities: [],
        noise: 'Alarming',
        reload: 2.7,
        magSize: 20,
        maxAmmo: 240,
        disposition: 5,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 2.5,
                pellets: 5,
                accuracy: 9.1,
                punchThrough: 0,
                critChance: 0.11,
                critMult: 2,
                status: 0.27,
                falloffMin: 20,
                falloffMax: 30,
                damage: 350,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.75
                    },
                    {
                        type: 'Puncture',
                        percent: 0.125
                    },
                    {
                        type: 'Slash',
                        percent: 0.125
                    },
                ]
            }
        ]
    },
    {
        name: 'SOMA',
        img: require('../assets/weapons/primary/soma.png'),
        mastery: 6,
        type: ['RIFLE', 'ASSAULT RIFLE'],
        polarities: ['madurai', 'madurai'],
        noise: 'Alarming',
        reload: 3,
        magSize: 100,
        maxAmmo: 540,
        disposition: 1,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 15,
                accuracy: 28.6,
                punchThrough: 0,
                critChance: 0.3,
                critMult: 3,
                status: 0.07,
                damage: 12,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.1
                    },
                    {
                        type: 'Puncture',
                        percent: 0.4
                    },
                    {
                        type: 'Slash',
                        percent: 0.5
                    },
                ]
            }
        ]
    },
    {
        name: 'SOMA PRIME',
        img: require('../assets/weapons/primary/somaprime.png'),
        mastery: 7,
        type: ['RIFLE', 'ASSAULT RIFLE'],
        polarities: ['madurai', 'madurai'],
        noise: 'Alarming',
        reload: 3,
        magSize: 200,
        maxAmmo: 800,
        disposition: 1,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 15,
                accuracy: 28.6,
                punchThrough: 0,
                critChance: 0.3,
                critMult: 3,
                status: 0.1,
                damage: 12,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.1
                    },
                    {
                        type: 'Puncture',
                        percent: 0.4
                    },
                    {
                        type: 'Slash',
                        percent: 0.5
                    },
                ]
            }
        ]
    },
    {
        name: 'STRADAVAR',
        img: require('../assets/weapons/primary/stradavar.png'),
        mastery: 8,
        type: ['RIFLE', 'ASSAULT RIFLE'],
        polarities: ['madurai', 'madurai'],
        noise: 'Alarming',
        reload: 2,
        magSize: 65,
        maxAmmo: 540,
        disposition: 4,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 10,
                accuracy: 14.3,
                punchThrough: 0,
                critChance: 0.24,
                critMult: 2,
                status: 0.12,
                damage: 28,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.35
                    },
                    {
                        type: 'Puncture',
                        percent: 0.35
                    },
                    {
                        type: 'Slash',
                        percent: 0.3
                    },
                ]
            },
            {
                trigger: 'Semi-Auto',
                fireRate: 5,
                accuracy: 28.6,
                punchThrough: 0,
                critChance: 0.28,
                critMult: 2,
                status: 0.16,
                damage: 50,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.15
                    },
                    {
                        type: 'Puncture',
                        percent: 0.6
                    },
                    {
                        type: 'Slash',
                        percent: 0.25
                    },
                ]
            }
        ]
    },
    {
        name: 'STRUN',
        img: require('../assets/weapons/primary/strun.png'),
        mastery: 1,
        type: ['SHOTGUN'],
        polarities: ['naramon'],
        noise: 'Alarming',
        reload: 3.75,
        magSize: 6,
        maxAmmo: 120,
        disposition: 5,
        modes: [
            {
                trigger: 'Semi-Auto',
                fireRate: 2.5,
                pellets: 12,
                accuracy: 4,
                punchThrough: 0,
                critChance: 0.075,
                critMult: 1.5,
                status: 0.2,
                falloffMin: 12,
                falloffMax: 25,
                damage: 300,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.55
                    },
                    {
                        type: 'Puncture',
                        percent: 0.15
                    },
                    {
                        type: 'Slash',
                        percent: 0.3
                    },
                ]
            }
        ]
    },
    {
        name: 'STRUN WRAITH',
        img: require('../assets/weapons/primary/strunwraith.png'),
        mastery: 1,
        type: ['SHOTGUN'],
        polarities: ['naramon'],
        noise: 'Alarming',
        reload: 5,
        magSize: 10,
        maxAmmo: 120,
        disposition: 5,
        modes: [
            {
                trigger: 'Semi-Auto',
                fireRate: 2.5,
                pellets: 12,
                accuracy: 6.7,
                punchThrough: 0,
                critChance: 0.18,
                critMult: 2.2,
                status: 0.4,
                falloffMin: 15,
                falloffMax: 30,
                damage: 400,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.65
                    },
                    {
                        type: 'Puncture',
                        percent: 0.15
                    },
                    {
                        type: 'Slash',
                        percent: 0.2
                    },
                ]
            }
        ]
    },
    {
        name: 'SUPRA',
        img: require('../assets/weapons/primary/supra.png'),
        mastery: 12,
        type: ['RIFLE', 'ASSAULT RIFLE', 'SUPRA'],
        polarities: [],
        noise: 'Alarming',
        reload: 3,
        magSize: 180,
        maxAmmo: 1080,
        disposition: 4,
        modes: [
            {
                trigger: 'Auto-Spool',
                fireRate: 12.5,
                accuracy: 14.3,
                punchThrough: 0,
                critChance: 0.12,
                critMult: 1.8,
                status: 0.3,
                damage: 40,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.1
                    },
                    {
                        type: 'Puncture',
                        percent: 0.75
                    },
                    {
                        type: 'Slash',
                        percent: 0.15
                    },
                ]
            }
        ]
    },
    {
        name: 'SUPRA VANDAL',
        img: require('../assets/weapons/primary/supravandal.png'),
        mastery: 14,
        type: ['RIFLE', 'ASSAULT RIFLE', 'SUPRA'],
        polarities: ['madurai', 'madurai'],
        noise: 'Alarming',
        reload: 3,
        magSize: 300,
        maxAmmo: 1600,
        disposition: 4,
        modes: [
            {
                trigger: 'Auto-Spool',
                fireRate: 12.5,
                accuracy: 26.6,
                punchThrough: 0,
                critChance: 0.16,
                critMult: 2,
                status: 0.3,
                damage: 40,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.1
                    },
                    {
                        type: 'Puncture',
                        percent: 0.75
                    },
                    {
                        type: 'Slash',
                        percent: 0.15
                    },
                ]
            }
        ]
    },
    {
        name: 'SYBARIS',
        img: require('../assets/weapons/primary/sybaris.png'),
        mastery: 5,
        type: ['RIFLE', 'ASSAULT RIFLE', 'SYBARIS'],
        polarities: [],
        noise: 'Alarming',
        reload: 2,
        magSize: 10,
        maxAmmo: 540,
        disposition: 2,
        modes: [
            {
                trigger: 'Burst',
                burst: 2,
                fireRate: 3.98,
                accuracy: 28.6,
                punchThrough: 0,
                critChance: 0.25,
                critMult: 2,
                status: 0.1,
                damage: 80,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.33
                    },
                    {
                        type: 'Puncture',
                        percent: 0.33
                    },
                    {
                        type: 'Slash',
                        percent: 0.34
                    },
                ]
            }
        ]
    },
    {
        name: 'SYBARIS PRIME',
        img: require('../assets/weapons/primary/sybarisprime.png'),
        mastery: 12,
        type: ['RIFLE', 'ASSAULT RIFLE', 'SYBARIS'],
        polarities: ['naramon', 'naramon', 'madurai'],
        noise: 'Alarming',
        reload: 2,
        magSize: 20,
        maxAmmo: 540,
        disposition: 2,
        modes: [
            {
                trigger: 'Burst',
                burst: 2,
                fireRate: 4.72,
                accuracy: 25,
                punchThrough: 0,
                critChance: 0.3,
                critMult: 2,
                status: 0.25,
                damage: 88,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.33
                    },
                    {
                        type: 'Puncture',
                        percent: 0.33
                    },
                    {
                        type: 'Slash',
                        percent: 0.34
                    },
                ]
            }
        ]
    },
    {
        name: 'SYNAPSE',
        img: require('../assets/weapons/primary/synapse.png'),
        mastery: 11,
        type: ['RIFLE', 'BEAM', 'ASSAULT RIFLE'],
        polarities: [],
        noise: 'Alarming',
        reload: 1.5,
        magSize: 70,
        maxAmmo: 540,
        disposition: 5,
        modes: [
            {
                trigger: 'Held',
                fireRate: 12,
                rangeLimit: 27,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.39,
                critMult: 2.7,
                status: 0.13,
                ammoCost: 0.5,
                damage: 20,
                split: [
                    {
                        type: 'Corrosive',
                        percent: 1
                    },
                ]
            }
        ]
    },
    {
        name: 'SYNOID SIMULOR',
        img: require('../assets/weapons/primary/synoidsimulor.png'),
        mastery: 5,
        type: ['RIFLE', 'ASSAULT RIFLE'],
        polarities: ['madurai', 'vazarin', 'naramon'],
        noise: 'Alarming',
        reload: 2,
        magSize: 15,
        maxAmmo: 75,
        disposition: 1,
        modes: [
            {
                name: 'Orb Detonation',
                trigger: 'Active',
                fireRate: 2.67,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.5,
                critMult: 2,
                status: 0.35,
                damage: 75,
                split: [
                    {
                        type: 'Electricity',
                        percent: 1
                    }
                ]
            },
            {
                name: 'Orb Merge',
                trigger: 'Semi-Auto',
                fireRate: 2.67,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.5,
                critMult: 2,
                status: 0.35,
                damage: 50,
                split: [
                    {
                        type: 'Magnetic',
                        percent: 1
                    }
                ]
            },
            {
                name: 'Orb Damage',
                trigger: 'Semi-Auto',
                fireRate: 2.67,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.5,
                critMult: 2,
                status: 0.35,
                damage: 20,
                split: [
                    {
                        type: 'Magnetic',
                        percent: 1
                    }
                ]
            }
        ]
    },
    {
        name: 'TELOS BOLTOR',
        img: require('../assets/weapons/primary/telosboltor.png'),
        mastery: 12,
        type: ['RIFLE', 'ASSAULT RIFLE', 'PROJECTILE'],
        polarities: ['vazarin', 'madurai'],
        noise: 'Alarming',
        reload: 2.4,
        magSize: 90,
        maxAmmo: 540,
        disposition: 2,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 9.33,
                accuracy: 25,
                punchThrough: 0,
                critChance: 0.3,
                critMult: 2.4,
                status: 0.16,
                damage: 30,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.1
                    },
                    {
                        type: 'Puncture',
                        percent: 0.9
                    }
                ]
            }
        ]
    },
    {
        name: 'TENORA',
        img: require('../assets/weapons/primary/tenora.png'),
        mastery: 10,
        type: ['RIFLE', 'ASSAULT RIFLE'],
        polarities: [],
        noise: 'Alarming',
        reload: 2.5,
        magSize: 150,
        maxAmmo: 900,
        disposition: 3,
        modes: [
            {
                name: 'Primary',
                trigger: 'Auto-Spool',
                fireRate: 11.67,
                accuracy: 12.5,
                punchThrough: 0,
                critChance: 0.28,
                critMult: 2,
                status: 0.16,
                damage: 24,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.3
                    },
                    {
                        type: 'Puncture',
                        percent: 0.4
                    },
                    {
                        type: 'Slash',
                        percent: 0.3
                    },
                ]
            },
            {
                name: 'Secondary',
                trigger: 'Charge',
                fireRate: 10,
                chargeRate: 0.8,
                accuracy: 12.5,
                punchThrough: 1,
                critChance: 0.34,
                critMult: 3,
                status: 0.11,
                ammoCost: 10,
                damage: 240,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.2
                    },
                    {
                        type: 'Puncture',
                        percent: 0.6
                    },
                    {
                        type: 'Slash',
                        percent: 0.2
                    },
                ]
            }
        ]
    },
    {
        name: 'TETRA',
        img: require('../assets/weapons/primary/tetra.png'),
        mastery: 3,
        type: ['RIFLE', 'ASSAULT RIFLE', 'PROJECTILE', 'TETRA'],
        polarities: [],
        noise: 'Alarming',
        reload: 2,
        magSize: 60,
        maxAmmo: 540,
        disposition: 5,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 6.67,
                accuracy: 18.2,
                punchThrough: 0,
                critChance: 0.04,
                critMult: 1.5,
                status: 0.20,
                damage: 32,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.2
                    },
                    {
                        type: 'Puncture',
                        percent: 0.8
                    }
                ]
            }
        ]
    },
    {
        name: 'TIBERON',
        img: require('../assets/weapons/primary/tiberon.png'),
        mastery: 10,
        type: ['RIFLE', 'ASSAULT RIFLE'],
        polarities: [],
        noise: 'Alarming',
        reload: 2,
        magSize: 30,
        maxAmmo: 540,
        disposition: 5,
        modes: [
            {
                trigger: 'Burst',
                burst: 3,
                fireRate: 9.09,
                accuracy: 33.3,
                punchThrough: 0,
                critChance: 0.26,
                critMult: 2.4,
                status: 0.16,
                damage: 44,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.25
                    },
                    {
                        type: 'Puncture',
                        percent: 0.5
                    },
                    {
                        type: 'Slash',
                        percent: 0.25
                    }
                ]
            }
        ]
    },
    {
        name: 'TIBERON PRIME',
        img: require('../assets/weapons/primary/tiberonprime.png'),
        mastery: 14,
        type: ['RIFLE', 'ASSAULT RIFLE'],
        polarities: ['madurai', 'naramon', 'naramon'],
        noise: 'Alarming',
        reload: 2,
        magSize: 42,
        maxAmmo: 540,
        disposition: 5,
        modes: [
            {
                name: 'Burst',
                trigger: 'Burst',
                burst: 3,
                fireRate: 7.38,
                accuracy: 33.3,
                punchThrough: 0,
                critChance: 0.2,
                critMult: 3,
                status: 0.2,
                damage: 46,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.3
                    },
                    {
                        type: 'Puncture',
                        percent: 0.4
                    },
                    {
                        type: 'Slash',
                        percent: 0.3
                    }
                ]
            },
            {
                name: 'Semi-Auto',
                trigger: 'Semi-Auto',
                fireRate: 6,
                accuracy: 33.3,
                punchThrough: 0,
                critChance: 0.3,
                critMult: 3.4,
                status: 0.18,
                damage: 46,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.3
                    },
                    {
                        type: 'Puncture',
                        percent: 0.4
                    },
                    {
                        type: 'Slash',
                        percent: 0.3
                    }
                ]
            },
            {
                name: 'Auto',
                trigger: 'Auto',
                fireRate: 8.33,
                accuracy: 33.3,
                punchThrough: 0,
                critChance: 0.16,
                critMult: 2.8,
                status: 0.32,
                damage: 46,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.3
                    },
                    {
                        type: 'Puncture',
                        percent: 0.4
                    },
                    {
                        type: 'Slash',
                        percent: 0.3
                    }
                ]
            }
        ]
    },
    {
        name: 'TIGRIS',
        img: require('../assets/weapons/primary/tigris.png'),
        mastery: 7,
        type: ['SHOTGUN'],
        polarities: [],
        noise: 'Alarming',
        reload: 1.8,
        magSize: 2,
        maxAmmo: 120,
        disposition: 1,
        modes: [
            {
                trigger: 'Duplex',
                fireRate: 2,
                pellets: 5,
                accuracy: 9.1,
                punchThrough: 0,
                critChance: 0.1,
                critMult: 2,
                status: 0.28,
                falloffMin: 10,
                falloffMax: 20,
                damage: 1050,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.1
                    },
                    {
                        type: 'Puncture',
                        percent: 0.1
                    },
                    {
                        type: 'Slash',
                        percent: 0.8
                    },
                ]
            }
        ]
    },
    {
        name: 'TIGRIS PRIME',
        img: require('../assets/weapons/primary/tigrisprime.png'),
        mastery: 13,
        type: ['SHOTGUN'],
        polarities: ['madurai', 'naramon'],
        noise: 'Alarming',
        reload: 1.8,
        magSize: 2,
        maxAmmo: 120,
        disposition: 1,
        modes: [
            {
                trigger: 'Duplex',
                fireRate: 2,
                pellets: 8,
                accuracy: 9.1,
                punchThrough: 0,
                critChance: 0.1,
                critMult: 2,
                status: 0.3,
                falloffMin: 8,
                falloffMax: 20,
                damage: 1560,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.1
                    },
                    {
                        type: 'Puncture',
                        percent: 0.1
                    },
                    {
                        type: 'Slash',
                        percent: 0.8
                    },
                ]
            }
        ]
    },
    {
        name: 'TONKOR',
        img: require('../assets/weapons/primary/tonkor.png'),
        mastery: 5,
        type: ['RIFLE', 'ASSAULT RIFLE', 'PROJECTILE', 'EXPLOSIVE', 'UNIQUE', 'TONKOR'],
        polarities: [],
        noise: 'Alarming',
        reload: 2,
        magSize: 2,
        maxAmmo: 40,
        disposition: 1,
        modes: [
            {
                name: 'Explosion',
                trigger: 'Semi-Auto',
                fireRate: 2,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.25,
                critMult: 2.5,
                status: 0.1,
                damage: 325,
                split: [
                    {
                        type: 'Blast',
                        percent: 1
                    }
                ]
            },
            {
                name: 'Grenade Impact',
                trigger: 'Semi-Auto',
                fireRate: 2,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.25,
                critMult: 2.5,
                status: 0.1,
                damage: 75,
                split: [
                    {
                        type: 'Puncture',
                        percent: 1
                    }
                ]
            },
        ]
    },
    {
        name: 'TORID',
        img: require('../assets/weapons/primary/torid.png'),
        mastery: 4,
        type: ['RIFLE', 'ASSAULT RIFLE', 'PROJECTILE', 'EXPLOSIVE', 'UNIQUE'],
        polarities: [],
        noise: 'Alarming',
        reload: 1.7,
        magSize: 5,
        maxAmmo: 60,
        disposition: 4,
        modes: [
            {
                name: 'Poison Cloud',
                trigger: 'Semi-Auto',
                fireRate: 1.5,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.15,
                critMult: 2,
                status: 0.23,
                damage: 400,
                split: [
                    {
                        type: 'Toxin',
                        percent: 1
                    }
                ]
            },
            {
                name: 'Grenade Impact',
                trigger: 'Semi-Auto',
                fireRate: 1.5,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.15,
                critMult: 2,
                status: 0.23,
                damage: 100,
                split: [
                    {
                        type: 'Toxin',
                        percent: 1
                    }
                ]
            },
        ]
    },
    {
        name: 'VAYKOR HEK',
        img: require('../assets/weapons/primary/vaykorhek.png'),
        mastery: 12,
        type: ['SHOTGUN', 'HEK'],
        polarities: ['vazarin', 'madurai'],
        noise: 'Alarming',
        reload: 2.25,
        magSize: 8,
        maxAmmo: 120,
        disposition: 1,
        modes: [
            {
                trigger: 'Semi-Auto',
                fireRate: 3,
                pellets: 7,
                accuracy: 9.1,
                punchThrough: 0,
                critChance: 0.25,
                critMult: 2,
                status: 0.25,
                falloffMin: 10,
                falloffMax: 25,
                damage: 525,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.15
                    },
                    {
                        type: 'Puncture',
                        percent: 0.65
                    },
                    {
                        type: 'Slash',
                        percent: 0.2
                    },
                ]
            }
        ]
    },
    {
        name: 'VECTIS',
        img: require('../assets/weapons/primary/vectis.png'),
        mastery: 2,
        type: ['RIFLE', 'SNIPER'],
        headshotDamage: true,
        zoom: [
            {
                name: 'No Zoom'
            },
            {
                name: '3x Zoom',
                effect: 30
            },
            {
                name: '4.5x Zoom',
                effect: 50
            }
        ],
        polarities: ['madurai'],
        noise: 'Alarming',
        reload: 1,
        magSize: 1,
        maxAmmo: 72,
        disposition: 3,
        modes: [
            {
                trigger: 'Semi-Auto',
                fireRate: 1.5,
                accuracy: 13.3,
                punchThrough: 1,
                critChance: 0.25,
                critMult: 2,
                status: 0.3,
                damage: 225,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.4
                    },
                    {
                        type: 'Puncture',
                        percent: 0.35
                    },
                    {
                        type: 'Slash',
                        percent: 0.25
                    },
                ]
            }
        ]
    },
    {
        name: 'VECTIS PRIME',
        img: require('../assets/weapons/primary/vectisprime.png'),
        mastery: 14,
        type: ['RIFLE', 'SNIPER'],
        headshotDamage: true,
        zoom: [
            {
                name: 'No Zoom'
            },
            {
                name: '3.5x Zoom',
                effect: 40
            },
            {
                name: '6x Zoom',
                effect: 60
            }
        ],
        polarities: ['madurai', 'naramon'],
        noise: 'Alarming',
        reload: 0.85,
        magSize: 2,
        maxAmmo: 72,
        disposition: 3,
        modes: [
            {
                trigger: 'Semi-Auto',
                fireRate: 2.67,
                accuracy: 13.3,
                punchThrough: 1,
                critChance: 0.3,
                critMult: 2,
                status: 0.3,
                damage: 350,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.15
                    },
                    {
                        type: 'Puncture',
                        percent: 0.45
                    },
                    {
                        type: 'Slash',
                        percent: 0.4
                    },
                ]
            }
        ]
    },
    {
        name: 'VELDT',
        img: require('../assets/weapons/primary/veldt.png'),
        mastery: 8,
        type: ['RIFLE', 'ASSAULT RIFLE'],
        polarities: ['naramon'],
        noise: 'Alarming',
        reload: 1.8,
        magSize: 16,
        maxAmmo: 528,
        disposition: 3,
        modes: [
            {
                trigger: 'Semi-Auto',
                fireRate: 3.67,
                accuracy: 32,
                punchThrough: 0,
                critChance: 0.22,
                critMult: 2.2,
                status: 0.22,
                damage: 90,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.26
                    },
                    {
                        type: 'Puncture',
                        percent: 0.26
                    },
                    {
                        type: 'Slash',
                        percent: 0.48
                    },
                ]
            }
        ]
    },
    {
        name: 'VULKAR',
        img: require('../assets/weapons/primary/vulkar.png'),
        mastery: 3,
        type: ['RIFLE', 'SNIPER', 'VULKAR'],
        headshotDamage: true,
        zoom: [
            {
                name: 'No Zoom'
            },
            {
                name: '2.5x Zoom',
                effect: 35
            },
            {
                name: '4x Zoom',
                effect: 55
            },
            {
                name: '8x Zoom',
                effect: 70
            }
        ],
        polarities: [],
        noise: 'Alarming',
        reload: 3,
        magSize: 6,
        maxAmmo: 72,
        disposition: 5,
        modes: [
            {
                trigger: 'Semi-Auto',
                fireRate: 1.5,
                accuracy: 13.3,
                punchThrough: 1,
                critChance: 0.2,
                critMult: 2,
                status: 0.25,
                damage: 225,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.8
                    },
                    {
                        type: 'Puncture',
                        percent: 0.15
                    },
                    {
                        type: 'Slash',
                        percent: 0.05
                    },
                ]
            }
        ]
    },
    {
        name: 'VULKAR WRAITH',
        img: require('../assets/weapons/primary/vulkarwraith.png'),
        mastery: 7,
        type: ['RIFLE', 'SNIPER', 'VULKAR'],
        headshotDamage: true,
        zoom: [
            {
                name: 'No Zoom'
            },
            {
                name: '2.5x Zoom',
                effect: 35
            },
            {
                name: '4x Zoom',
                effect: 55
            },
            {
                name: '8x Zoom',
                effect: 70
            }
        ],
        polarities: ['madurai'],
        noise: 'Alarming',
        reload: 3,
        magSize: 8,
        maxAmmo: 72,
        disposition: 5,
        modes: [
            {
                trigger: 'Semi-Auto',
                fireRate: 2,
                accuracy: 13.3,
                punchThrough: 1,
                critChance: 0.2,
                critMult: 2,
                status: 0.25,
                damage: 273,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.9
                    },
                    {
                        type: 'Puncture',
                        percent: 0.1
                    },
                ]
            }
        ]
    },
    {
        name: 'ZARR',
        img: require('../assets/weapons/primary/zarr.png'),
        mastery: 7,
        type: ['RIFLE', 'ASSAULT RIFLE', 'PROJECTILE', 'EXPLOSIVE', 'UNIQUE'],
        polarities: ['madurai'],
        noise: 'Alarming',
        reload: 2.3,
        magSize: 3,
        maxAmmo: 84,
        disposition: 3,
        modes: [
            {
                name: 'Cannon',
                trigger: 'Semi-Auto',
                fireRate: 1.67,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.17,
                critMult: 2.5,
                status: 0.29,
                damage: 200,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.125
                    },
                    {
                        type: 'Blast',
                        percent: 0.875
                    },
                ]
            },
            {
                name: 'Barrage',
                trigger: 'Semi-Auto',
                fireRate: 3,
                pellets: 10,
                accuracy: 1.4,
                punchThrough: 1.6,
                critChance: 0.17,
                critMult: 2.5,
                status: 0.29,
                damage: 800,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.3
                    },
                    {
                        type: 'Puncture',
                        percent: 0.5
                    },
                    {
                        type: 'Slash',
                        percent: 0.2
                    },
                ]
            },
        ]
    },
    {
        name: 'ZENITH',
        img: require('../assets/weapons/primary/zenith.png'),
        mastery: 10,
        type: ['RIFLE', 'ASSAULT RIFLE'],
        polarities: ['naramon', 'madurai'],
        noise: 'Alarming',
        reload: 1.4,
        magSize: 90,
        maxAmmo: 540,
        disposition: 3,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 10.83,
                accuracy: 33.3,
                punchThrough: 0,
                critChance: 0.1,
                critMult: 2,
                status: 0.34,
                damage: 30,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.15
                    },
                    {
                        type: 'Puncture',
                        percent: 0.2
                    },
                    {
                        type: 'Slash',
                        percent: 0.65
                    },
                ]
            },
            {
                trigger: 'Semi-Auto',
                fireRate: 3,
                accuracy: 33.3,
                punchThrough: 0,
                critChance: 0.35,
                critMult: 2.5,
                status: 0.08,
                ammoCost: 5,
                damage: 15,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.1
                    },
                    {
                        type: 'Puncture',
                        percent: 0.8
                    },
                    {
                        type: 'Slash',
                        percent: 0.1
                    },
                ]
            }
        ]
    },
    {
        name: 'ZHUGE',
        img: require('../assets/weapons/primary/zhuge.png'),
        mastery: 7,
        type: ['RIFLE', 'BOW', 'PROJECTILE'],
        polarities: ['madurai'],
        noise: 'Silent',
        reload: 2.5,
        magSize: 20,
        maxAmmo: 540,
        disposition: 3,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 4.17,
                accuracy: 40,
                punchThrough: 0,
                critChance: 0.2,
                critMult: 2,
                status: 0.35,
                damage: 100,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.05
                    },
                    {
                        type: 'Puncture',
                        percent: 0.75
                    },
                    {
                        type: 'Slash',
                        percent: 0.2
                    },
                ]
            }
        ]
    },
]

export default primaryWeapons;
