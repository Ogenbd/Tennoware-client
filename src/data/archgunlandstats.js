const archgunLandStats = [
    {
        name: 'CORVAS',
        mastery: 1,
        type: [
            'ARCH-GUN'
        ],
        polarities: [
            'naramon'
        ],
        noise: 'Alarming',
        reload: 2,
        magSize: 25,
        maxAmmo: 100,
        modes: [
            {
                name: 'Uncharged',
                trigger: 'Charge',
                fireRate: 2,
                pellets: 12,
                accuracy: 9.1,
                punchThrough: 0,
                critChance: 0.4,
                critMult: 2.6,
                status: 0.14,
                falloffMin: 60,
                falloffMax: 120,
                damage: 480,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.8
                    },
                    {
                        type: 'Slash',
                        percent: 0.1
                    },
                    {
                        type: 'Puncture',
                        percent: 0.1
                    }
                ]
            },
            {
                name: 'Charged',
                trigger: 'Charge',
                chargeRate: 0.5,
                pellets: 12,
                accuracy: 9.1,
                punchThrough: 0,
                critChance: 0.4,
                critMult: 2.6,
                status: 0.14,
                falloffMin: 60,
                falloffMax: 120,
                damage: 960,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.8
                    },
                    {
                        type: 'Slash',
                        percent: 0.1
                    },
                    {
                        type: 'Puncture',
                        percent: 0.1
                    }
                ]
            },
        ]
    },
    {
        name: 'CYNGAS',
        mastery: 4,
        type: [
            'ARCH-GUN'
        ],
        polarities: [],
        noise: 'Alarming',
        reload: 1.2,
        magSize: 30,
        maxAmmo: 480,
        modes: [
            {
                trigger: 'Burst',
                burst: 3,
                fireRate: 9.09,
                accuracy: 33.3,
                punchThrough: 0,
                critChance: 0.2,
                critMult: 2.2,
                status: 0.3,
                damage: 120,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.33
                    },
                    {
                        type: 'Slash',
                        percent: 0.34
                    },
                    {
                        type: 'Puncture',
                        percent: 0.33
                    }
                ]
            }
        ]
    },
    {
        name: 'DUAL DECURION',
        mastery: 1,
        type: [
            'ARCH-GUN'
        ],
        polarities: [],
        noise: 'Alarming',
        reload: 1.4,
        magSize: 32,
        maxAmmo: 512,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 8.3,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.28,
                critMult: 2.2,
                status: 0.14,
                damage: 110,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.45
                    },
                    {
                        type: 'Slash',
                        percent: 0.275
                    },
                    {
                        type: 'Puncture',
                        percent: 0.275
                    }
                ]
            }
        ]
    },
    {
        name: 'FLUCTUS',
        mastery: 2,
        type: [
            'ARCH-GUN'
        ],
        polarities: [
            'naramon'
        ],
        noise: 'Alarming',
        reload: 2,
        magSize: 25,
        maxAmmo: 160,
        modes: [
            {
                trigger: 'Semi-Auto',
                rangeLimit: 450,
                fireRate: 5,
                accuracy: 100,
                punchThrough: 99,
                critChance: 0.22,
                critMult: 2,
                status: 0.16,
                damage: 250,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.2
                    },
                    {
                        type: 'Slash',
                        percent: 0.7
                    },
                    {
                        type: 'Puncture',
                        percent: 0.1
                    }
                ]
            }
        ]
    },
    {
        name: 'GRATTLER',
        mastery: 4,
        type: [
            'ARCH-GUN'
        ],
        polarities: [
            'madurai'
        ],
        noise: 'Alarming',
        reload: 2,
        magSize: 30,
        maxAmmo: 210,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 6.25,
                accuracy: 25,
                punchThrough: 0,
                critChance: 0.25,
                critMult: 2,
                status: 0.25,
                damage: 305,
                split: [
                    {
                        type: 'Impact',
                        percent: 10 / 305
                    },
                    {
                        type: 'Slash',
                        percent: 10 / 305
                    },
                    {
                        type: 'Puncture',
                        percent: 80 / 305
                    },
                    {
                        type: 'Blast',
                        percent: 205 / 305
                    }
                ]
            }
        ]
    },
    {
        name: 'IMPERATOR',
        mastery: 0,
        type: [
            'ARCH-GUN'
        ],
        polarities: [
            'madurai'
        ],
        noise: 'Alarming',
        reload: 2,
        magSize: 200,
        maxAmmo: 800,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 16.7,
                accuracy: 25,
                punchThrough: 0,
                critChance: 0.24,
                critMult: 2,
                status: 0.12,
                damage: 50,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.4
                    },
                    {
                        type: 'Slash',
                        percent: 0.25
                    },
                    {
                        type: 'Puncture',
                        percent: 0.35
                    }
                ]
            }
        ]
    },
    {
        name: 'IMPERATOR VANDAL',
        mastery: 5,
        type: [
            'ARCH-GUN'
        ],
        polarities: [
            'madurai'
        ],
        noise: 'Alarming',
        reload: 4,
        magSize: 300,
        maxAmmo: 1200,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 25,
                accuracy: 25,
                punchThrough: 0,
                critChance: 0.28,
                critMult: 2.4,
                status: 0.12,
                damage: 50,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.4
                    },
                    {
                        type: 'Slash',
                        percent: 0.25
                    },
                    {
                        type: 'Puncture',
                        percent: 0.35
                    }
                ]
            }
        ]
    },
    {
        name: 'LARKSPUR',
        mastery: 8,
        type: [
            'ARCH-GUN'
        ],
        polarities: [
            'madurai'
        ],
        noise: 'Alarming',
        reload: 2.5,
        magSize: 100,
        maxAmmo: 400,
        modes: [
            {
                name: 'Primary',
                trigger: 'Held',
                fireRate: 12,
                accuracy: 8.3,
                punchThrough: 0,
                critChance: 0.1,
                critMult: 1.4,
                status: 0.5,
                damage: 90,
                split: [
                    {
                        type: 'Impact',
                        percent: 10 / 90
                    },
                    {
                        type: 'Radiation',
                        percent: 80 / 90
                    }
                ]
            },
            {
                name: 'Secondary',
                trigger: 'Charge',
                fireRate: 1,
                chargeRate: 0.5,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.26,
                critMult: 2.2,
                status: 0.34,
                damage: 1750,
                split: [
                    {
                        type: 'Impact',
                        percent: 200 / 1750
                    },
                    {
                        type: 'Blast',
                        percent: 250 / 1750
                    },
                    {
                        type: 'Radiation',
                        percent: 1300 / 1750
                    }
                ]
            }
        ]
    },
    {
        name: 'PHAEDRA',
        mastery: 3,
        type: [
            'ARCH-GUN'
        ],
        polarities: [
            'madurai'
        ],
        noise: 'Alarming',
        reload: 2,
        magSize: 240,
        maxAmmo: 960,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 18.75,
                accuracy: 11.8,
                punchThrough: 0,
                critChance: 0.14,
                critMult: 2,
                status: 0.3,
                damage: 56,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.25
                    },
                    {
                        type: 'Slash',
                        percent: 0.1
                    },
                    {
                        type: 'Puncture',
                        percent: 0.65
                    }
                ]
            }
        ]
    },
    {
        name: 'VELOCITUS',
        mastery: 4,
        type: [
            'ARCH-GUN'
        ],
        polarities: [],
        noise: 'Alarming',
        reload: 2,
        magSize: 10,
        maxAmmo: 60,
        disposition: 3,
        modes: [
            {
                name: 'Uncharged',
                trigger: 'Charge',
                fireRate: 5,
                accuracy: 28.6,
                punchThrough: 0,
                critChance: 0.3,
                critMult: 3,
                status: 0.25,
                damage: 66.667,
                split: [
                    {
                        type: 'Magnetic',
                        percent: 1
                    }
                ]
            },
            {
                name: 'Charged',
                trigger: 'Charge',
                chargeRate: 1,
                accuracy: 28.6,
                punchThrough: 0,
                critChance: 0.3,
                critMult: 3,
                status: 0.25,
                damage: 1200,
                split: [
                    {
                        type: 'Magnetic',
                        percent: 1
                    }
                ]
            },
        ]
    }
]

export default archgunLandStats;