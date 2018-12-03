const archgunStats = [
    {
        name: 'CORVAS',
        mastery: 0,
        type: [
            'ARCH-GUN'
        ],
        polarities: [
            'naramon'
        ],
        noise: 'Alarming',
        reload: 5,
        magSize: 25,
        modes: [
            {
                name: 'Uncharged',
                trigger: 'Charge',
                fireRate: 2,
                accuracy: 9.1,
                punchThrough: 0,
                critChance: 0.15,
                critMult: 2,
                status: 0.1,
                damage: 420,
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
                fireRate: 2,
                accuracy: 9.1,
                punchThrough: 0,
                critChance: 0.15,
                critMult: 2,
                status: 0.1,
                damage: 840,
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
        reload: 0.6,
        magSize: 30,
        modes: [
            {
                trigger: 'Burst',
                burst: 3,
                fireRate: 9.09,
                accuracy: 33.3,
                punchThrough: 0,
                critChance: 0.5,
                critMult: 2,
                status: 0.3,
                damage: 200,
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
        mastery: 0,
        type: [
            'ARCH-GUN'
        ],
        polarities: [],
        noise: 'Alarming',
        reload: 0.64,
        magSize: 32,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 8.3,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.25,
                critMult: 2,
                status: 0.1,
                damage: 60,
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
        mastery: 0,
        type: [
            'ARCH-GUN'
        ],
        polarities: [
            'naramon'
        ],
        noise: 'Alarming',
        reload: 2.5,
        magSize: 25,
        modes: [
            {
                trigger: 'Semi-Auto',
                rangeLimit: 450,
                fireRate: 5,
                accuracy: 100,
                punchThrough: 99,
                critChance: 0.15,
                critMult: 2,
                status: 0.1,
                damage: 200,
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
        mastery: 0,
        type: [
            'ARCH-GUN'
        ],
        polarities: [
            'madurai'
        ],
        noise: 'Alarming',
        reload: 6,
        magSize: 60,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 6.25,
                accuracy: 25,
                punchThrough: 0,
                critChance: 0.25,
                critMult: 2,
                status: 0.25,
                damage: 275,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.1
                    },
                    {
                        type: 'Slash',
                        percent: 0.1
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
        name: 'IMPERATOR',
        mastery: 0,
        type: [
            'ARCH-GUN'
        ],
        polarities: [
            'madurai'
        ],
        noise: 'Alarming',
        reload: 5,
        magSize: 250,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 16.7,
                accuracy: 25,
                punchThrough: 0,
                critChance: 0.1,
                critMult: 2,
                status: 0.05,
                damage: 40,
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
        mastery: 0,
        type: [
            'ARCH-GUN'
        ],
        polarities: [],
        noise: 'Alarming',
        reload: 4,
        magSize: 300,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 25,
                accuracy: 25,
                punchThrough: 0,
                critChance: 0.15,
                critMult: 2,
                status: 0.1,
                damage: 40,
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
        name: 'PHAEDRA',
        mastery: 0,
        type: [
            'ARCH-GUN'
        ],
        polarities: [
            'madurai'
        ],
        noise: 'Alarming',
        reload: 5,
        magSize: 250,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 18.75,
                accuracy: 11.8,
                punchThrough: 0,
                critChance: 0.1,
                critMult: 2,
                status: 0.25,
                damage: 45,
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
        mastery: 0,
        type: [
            'ARCH-GUN'
        ],
        polarities: [],
        noise: 'Alarming',
        reload: 4,
        magSize: 100,
        disposition: 3,
        modes: [
            {
                trigger: 'Charge',
                fireRate: 5,
                accuracy: 28.6,
                punchThrough: 0,
                critChance: 0.25,
                critMult: 3,
                status: 0.25,
                damage: 200,
                split: [
                    {
                        type: 'Magnetic',
                        percent: 1
                    }
                ]
            },
            {
                trigger: 'Charge',
                chargeRate: 1,
                accuracy: 28.6,
                punchThrough: 0,
                critChance: 0.25,
                critMult: 3,
                status: 0.25,
                damage: 1800,
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

export default archgunStats;