const sentinelWeaponStats = [
    {
        name: 'ARTAX',
        mastery: 0,
        mods: 'primary',
        type: [
            'RIFLE',
            'ASSAULT RIFLE',
            'BEAM'
        ],
        polarities: [],
        noise: 'Alarming',
        reload: 1.5,
        magSize: 100,
        disposition: 3,
        modes: [
            {
                trigger: 'Held',
                fireRate: 1,
                accuracy: 12.5,
                punchThrough: 0,
                critChance: 0.02,
                critMult: 1.5,
                status: 0.03,
                damage: 5,
                split: [
                    {
                        type: 'Cold',
                        percent: 1
                    }
                ]
            }
        ]
    },
    {
        name: 'BURST LASER',
        mastery: 0,
        mods: 'secondary',
        type: [
            'PISTOL'
        ],
        polarities: [],
        noise: 'Alarming',
        reload: 0.01,
        magSize: 15,
        disposition: 5,
        modes: [
            {
                trigger: 'Burst',
                burst: 3,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.025,
                critMult: 1.25,
                status: 0.02,
                damage: 7,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.1
                    },
                    {
                        type: 'Slash',
                        percent: 0.04
                    },
                    {
                        type: 'Puncture',
                        percent: 0.86
                    }
                ]
            }
        ]
    },
    {
        name: 'CRYOTRA',
        mastery: 3,
        mods: 'primary',
        type: [
            'RIFLE',
            'ASSAULT RIFLE',
            'BEAM'
        ],
        polarities: ['madurai'],
        noise: 'Alarming',
        reload: 4,
        magSize: 80,
        disposition: 3,
        modes: [
            {
                trigger: 'Held',
                fireRate: 1,
                accuracy: 12.5,
                punchThrough: 0,
                critChance: 0.05,
                critMult: 2,
                status: 0.35,
                damage: 10,
                split: [
                    {
                        type: 'Cold',
                        percent: 1
                    }
                ]
            }
        ]
    },
    {
        name: 'DECONSTRUCTOR',
        mastery: 0,
        mods: 'melee',
        type: [
            'THROWN MELEE'
        ],
        polarities: [],
        disposition: 4,
        modes: [
            {
                speed: 1.3,
                critChance: 0,
                critMult: 0,
                status: 0.25,
                damage: 50,
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
        name: 'DECONSTRUCTOR PRIME',
        mastery: 8,
        mods: 'melee',
        type: [
            'THROWN MELEE'
        ],
        polarities: [],
        disposition: 4,
        modes: [
            {
                speed: 1.33,
                critChance: 0,
                critMult: 0,
                status: 0.25,
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
        name: 'DETH MACHINE RIFLE',
        mastery: 0,
        mods: 'primary',
        type: [
            'RIFLE',
            'ASSAULT RIFLE'
        ],
        polarities: [],
        noise: 'Alarming',
        reload: 2,
        magSize: 100,
        disposition: 5,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 8.3,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.05,
                critMult: 2,
                status: 0.01,
                damage: 5,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.1
                    },
                    {
                        type: 'Slash',
                        percent: 0.85
                    },
                    {
                        type: 'Puncture',
                        percent: 0.05
                    }
                ]
            }
        ]
    },
    {
        name: 'LASER RIFLE',
        mastery: 0,
        mods: 'primary',
        type: [
            'RIFLE',
            'ASSAULT RIFLE'
        ],
        polarities: [],
        noise: 'Alarming',
        reload: 1.2,
        magSize: 5,
        disposition: 4,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 6.7,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.025,
                critMult: 1.25,
                status: 0.02,
                damage: 8,
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
        name: 'MULTRON',
        mastery: 3,
        mods: 'primary',
        type: [
            'RIFLE',
            'ASSAULT RIFLE'
        ],
        polarities: ['madurai'],
        noise: 'Alarming',
        reload: 3,
        magSize: 60,
        disposition: 3,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 3.33,
                accuracy: 18.2,
                punchThrough: 0.1,
                critChance: 0.125,
                critMult: 1.8,
                status: 0.05,
                damage: 5,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.25
                    },
                    {
                        type: 'Puncture',
                        percent: 0.75
                    }
                ]
            }
        ]
    },
    {
        name: 'PRIME LASER RIFLE',
        mastery: 0,
        mods: 'primary',
        type: [
            'RIFLE',
            'ASSAULT RIFLE'
        ],
        polarities: [],
        noise: 'Alarming',
        reload: 1.2,
        magSize: 5,
        disposition: 4,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 10,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.15,
                critMult: 1.5,
                status: 0.05,
                damage: 12,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.1
                    },
                    {
                        type: 'Slash',
                        percent: 0.2
                    },
                    {
                        type: 'Puncture',
                        percent: 0.7
                    }
                ]
            }
        ]
    },
    {
        name: 'PRISMA BURST LASER',
        mastery: 0,
        mods: 'secondary',
        type: [
            'PISTOL'
        ],
        polarities: [],
        noise: 'Alarming',
        reload: 0.01,
        magSize: 15,
        disposition: 5,
        modes: [
            {
                trigger: 'Burst',
                burst: 3,
                fireRate: 1.61,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.05,
                critMult: 2,
                status: 0.1,
                damage: 10,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.1
                    },
                    {
                        type: 'Slash',
                        percent: 0.05
                    },
                    {
                        type: 'Puncture',
                        percent: 0.85
                    }
                ]
            }
        ]
    },
    {
        name: 'STINGER',
        mastery: 0,
        mods: 'primary',
        type: [
            'RIFLE',
            'ASSAULT RIFLE',
            'PROJECTILE'
        ],
        polarities: [],
        noise: 'Alarming',
        reload: 1.2,
        magSize: 4,
        disposition: 5,
        modes: [
            {
                trigger: 'Semi-Auto',
                fireRate: 3.33,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.025,
                critMult: 1.5,
                status: 0.05,
                damage: 15,
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
        name: 'SWEEPER',
        mastery: 0,
        mods: 'primary',
        type: [
            'SHOTGUN'
        ],
        polarities: [
            'madurai',
            'madurai'
        ],
        noise: 'Alarming',
        reload: 2.3,
        magSize: 10,
        disposition: 3,
        modes: [
            {
                trigger: 'Auto',
                pellets: 6,
                fireRate: 1,
                accuracy: 3.3,
                punchThrough: 0,
                critChance: 0.05,
                critMult: 1.5,
                status: 0.14,
                damage: 42,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.85
                    },
                    {
                        type: 'Slash',
                        percent: 0.1
                    },
                    {
                        type: 'Puncture',
                        percent: 0.05
                    }
                ]
            }
        ]
    },
    {
        name: 'SWEEPER PRIME',
        mastery: 0,
        mods: 'primary',
        type: [
            'SHOTGUN'
        ],
        polarities: [
            'madurai'
        ],
        noise: 'Alarming',
        reload: 2,
        magSize: 20,
        disposition: 3,
        modes: [
            {
                trigger: 'Auto',
                pellets: 6,
                fireRate: 1,
                accuracy: 3.3,
                punchThrough: 0,
                critChance: 0.05,
                critMult: 2,
                status: 0.15,
                damage: 60,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.85
                    },
                    {
                        type: 'Slash',
                        percent: 0.1
                    },
                    {
                        type: 'Puncture',
                        percent: 0.05
                    }
                ]
            }
        ]
    },
    {
        name: 'TAZICOR',
        mastery: 3,
        mods: 'primary',
        type: [
            'RIFLE',
            'ASSAULT RIFLE',
        ],
        polarities: [],
        noise: 'Alarming',
        reload: 2.5,
        magSize: 4,
        disposition: 3,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 8.33,
                accuracy: 25,
                punchThrough: 0,
                critChance: 0.02,
                critMult: 1.5,
                status: 0.15,
                damage: 6,
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
        name: 'VULCAX',
        mastery: 3,
        mods: 'primary',
        type: [
            'RIFLE',
            'ASSAULT RIFLE',
        ],
        polarities: [],
        noise: 'Alarming',
        reload: 6,
        magSize: 1,
        disposition: 3,
        modes: [
            {
                trigger: 'Charge',
                chargeRate: 1,
                accuracy: 100,
                punchThrough: 1,
                critChance: 0.2,
                critMult: 2.5,
                status: 0.1,
                damage: 35,
                split: [
                    {
                        type: 'Heat',
                        percent: 1
                    }
                ]
            }
        ]
    },
    {
        name: 'VULKLOK',
        mastery: 0,
        mods: 'primary',
        type: [
            'RIFLE',
            'ASSAULT RIFLE',
            'SNIPER'
        ],
        polarities: [],
        noise: 'Alarming',
        reload: 2,
        magSize: 10,
        disposition: 4,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 0.15,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.35,
                critMult: 2.5,
                status: 0.25,
                damage: 85,
                split: [
                    {
                        type: 'Electricity',
                        percent: 1
                    }
                ]
            }
        ]
    }
]

export default sentinelWeaponStats;