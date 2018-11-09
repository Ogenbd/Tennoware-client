const secondaryWeapons = [
    {
        name: 'ACRID',
        img: require('../assets/itemimages/acrid.png'),
        mastery: 7,
        type: [
            'PISTOL', 'ACRID'
        ],
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
                accuracy: 100,
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
    {
        name: 'AFURIS',
        img: require('../assets/itemimages/afuris.png'),
        mastery: 4,
        type: [
            'PISTOL'
        ],
        polarities: [
            'naramon'
        ],
        noise: 'Alarming',
        reload: 2,
        magSize: 70,
        maxAmmo: 210,
        disposition: 5,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 12.5,
                accuracy: 15.4,
                punchThrough: 0,
                critChance: 0.05,
                critMult: 2,
                status: 0.12,
                damage: 20,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.15
                    },
                    {
                        type: 'Slash',
                        percent: 0.15
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
        name: 'AKBOLTO',
        img: require('../assets/itemimages/akbolto.png'),
        mastery: 9,
        type: [
            'PISTOL'
        ],
        polarities: [
            'vazarin'
        ],
        noise: 'Alarming',
        reload: 2.6,
        magSize: 30,
        maxAmmo: 210,
        disposition: 2,
        modes: [
            {
                trigger: 'Semi-Auto',
                fireRate: 10,
                accuracy: 26.7,
                punchThrough: 0,
                critChance: 0.16,
                critMult: 2.4000001,
                status: 0.022,
                damage: 40,
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
        name: 'AKBOLTO PRIME',
        img: require('../assets/itemimages/akbolto-prime.png'),
        mastery: 13,
        type: [
            'PISTOL'
        ],
        polarities: [
            'naramon',
            'madurai',
            'madurai',
            'madurai'
        ],
        noise: 'Alarming',
        reload: 1.3,
        magSize: 40,
        maxAmmo: 210,
        disposition: 2,
        modes: [
            {
                trigger: 'Semi-Auto',
                fireRate: 7,
                accuracy: 26.7,
                punchThrough: 0,
                critChance: 0.36,
                critMult: 2.8,
                status: 0.14,
                damage: 32,
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
        name: 'AKBRONCO',
        img: require('../assets/itemimages/akbronco.png'),
        mastery: 2,
        type: [
            'PISTOL'
        ],
        polarities: [
            'madurai'
        ],
        noise: 'Alarming',
        reload: 2.25,
        magSize: 4,
        maxAmmo: 210,
        disposition: 4,
        modes: [
            {
                trigger: 'Semi-Auto',
                fireRate: 8.33,
                accuracy: 3.7,
                pellets: 7,
                punchThrough: 0,
                critChance: 0.06,
                critMult: 2,
                status: 0.22,
                falloffMin: 7,
                falloffMax: 14,
                damage: 280,
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
            }
        ]
    },
    {
        name: 'AKBRONCO PRIME',
        img: require('../assets/itemimages/akbronco-prime.png'),
        mastery: 10,
        type: [
            'PISTOL'
        ],
        polarities: [
            'madurai',
            'madurai'
        ],
        noise: 'Alarming',
        reload: 2.25,
        magSize: 8,
        maxAmmo: 210,
        disposition: 4,
        modes: [
            {
                trigger: 'Semi-Auto',
                fireRate: 4.33,
                accuracy: 3.7,
                punchThrough: 0,
                pellets: 7,
                critChance: 0.06,
                critMult: 2,
                status: 0.3,
                falloffMin: 9,
                falloffMax: 18,
                damage: 350,
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
            }
        ]
    },
    {
        name: 'AKJAGARA',
        img: require('../assets/itemimages/akjagara.png'),
        mastery: 8,
        type: [
            'PISTOL'
        ],
        polarities: [
            'naramon'
        ],
        noise: 'Alarming',
        reload: 2.25,
        magSize: 36,
        maxAmmo: 210,
        disposition: 5,
        modes: [
            {
                trigger: 'Burst',
                burst: 2,
                fireRate: 8.33,
                accuracy: 15.4,
                punchThrough: 0,
                ammoCost: 0,
                critChance: 0.06,
                critMult: 2,
                status: 0.28,
                damage: 30,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.15
                    },
                    {
                        type: 'Slash',
                        percent: 0.7
                    },
                    {
                        type: 'Puncture',
                        percent: 0.15
                    }
                ],
            }
        ]
    },
    {
        name: 'AKLATO',
        img: require('../assets/itemimages/aklato.png'),
        mastery: 3,
        type: [
            'PISTOL'
        ],
        polarities: [],
        noise: 'Alarming',
        reload: 2.4,
        magSize: 30,
        maxAmmo: 210,
        disposition: 5,
        modes: [
            {
                trigger: 'Semi-Auto',
                fireRate: 7.5,
                accuracy: 11.1,
                punchThrough: 0,
                critChance: 0.1,
                critMult: 1.8,
                status: 0.06,
                damage: 30,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.15
                    },
                    {
                        type: 'Slash',
                        percent: 0.6
                    },
                    {
                        type: 'Puncture',
                        percent: 0.25
                    }
                ]
            }
        ]
    },
    {
        name: 'AKLEX',
        img: require('../assets/itemimages/aklex.png'),
        mastery: 4,
        type: [
            'PISTOL'
        ],
        polarities: [],
        noise: 'Alarming',
        reload: 3,
        magSize: 12,
        maxAmmo: 210,
        disposition: 3,
        modes: [
            {
                trigger: 'Semi-Auto',
                fireRate: 1.58,
                accuracy: 9.8,
                punchThrough: 0,
                critChance: 0.2,
                critMult: 2,
                status: 0.1,
                damage: 130,
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
        name: 'AKLEX PRIME',
        img: require('../assets/itemimages/aklex-prime.png'),
        mastery: 15,
        type: [
            'PISTOL'
        ],
        polarities: [],
        noise: 'Alarming',
        reload: 3,
        magSize: 16,
        maxAmmo: 210,
        disposition: 3,
        modes: [
            {
                trigger: 'Semi-Auto',
                fireRate: 2.67,
                accuracy: 9.8,
                punchThrough: 0,
                critChance: 0.25,
                critMult: 2,
                status: 0.25,
                damage: 150,
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
        name: 'AKMAGNUS',
        img: require('../assets/itemimages/akmagnus.png'),
        mastery: 12,
        type: [
            'PISTOL'
        ],
        polarities: [],
        noise: 'Alarming',
        reload: 2.4,
        magSize: 16,
        disposition: 4,
        modes: [
            {
                trigger: 'Semi-Auto',
                fireRate: 6.17,
                accuracy: 11.1,
                punchThrough: 0,
                critChance: 0.22,
                critMult: 2,
                status: 0.22,
                damage: 76,
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
        name: 'AKSOMATI',
        img: require('../assets/itemimages/aksomati.png'),
        mastery: 9,
        type: [
            'PISTOL'
        ],
        polarities: [
            'naramon'
        ],
        noise: 'Alarming',
        reload: 1.4,
        magSize: 70,
        maxAmmo: 420,
        disposition: 4,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 12.5,
                accuracy: 15.4,
                punchThrough: 0,
                ammoCost: 0,
                critChance: 0.24,
                critMult: 3,
                status: 0.08,
                damage: 18,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.1
                    },
                    {
                        type: 'Slash',
                        percent: 0.5
                    },
                    {
                        type: 'Puncture',
                        percent: 0.4
                    }
                ]
            }
        ]
    },
    {
        name: 'AKSTILETTO',
        img: require('../assets/itemimages/akstiletto.png'),
        mastery: 8,
        type: [
            'PISTOL'
        ],
        polarities: [
            'naramon'
        ],
        noise: 'Alarming',
        reload: 1.1,
        magSize: 28,
        maxAmmo: 210,
        disposition: 1,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 10,
                accuracy: 23.5,
                punchThrough: 0,
                critChance: 0.18,
                critMult: 1.8,
                status: 0.18,
                damage: 28,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.6
                    },
                    {
                        type: 'Slash',
                        percent: 0.3
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
        name: 'AKSTILETTO PRIME',
        img: require('../assets/itemimages/akstiletto-prime.png'),
        mastery: 10,
        type: [
            'PISTOL'
        ],
        polarities: [
            'naramon',
            'madurai'
        ],
        noise: 'Alarming',
        reload: 1.1,
        magSize: 40,
        maxAmmo: 400,
        disposition: 1,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 7.08,
                accuracy: 23.5,
                punchThrough: 0,
                critChance: 0.15,
                critMult: 2,
                status: 0.3,
                damage: 36,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.6
                    },
                    {
                        type: 'Slash',
                        percent: 0.3
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
        name: 'AKVASTO',
        img: require('../assets/itemimages/akvasto.png'),
        mastery: 8,
        type: [
            'PISTOL'
        ],
        polarities: [],
        noise: 'Alarming',
        reload: 2,
        magSize: 12,
        maxAmmo: 210,
        disposition: 4,
        modes: [
            {
                trigger: 'Semi-Auto',
                fireRate: 8.67,
                accuracy: 11.1,
                punchThrough: 0,
                critChance: 0.16,
                critMult: 1.8,
                status: 0.12,
                damage: 58,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.25
                    },
                    {
                        type: 'Slash',
                        percent: 0.5
                    },
                    {
                        type: 'Puncture',
                        percent: 0.25
                    }
                ]
            }
        ]
    },
    {
        name: 'AKZANI',
        img: require('../assets/itemimages/akzani.png'),
        mastery: 4,
        type: [
            'PISTOL'
        ],
        polarities: [
            'naramon'
        ],
        noise: 'Alarming',
        reload: 2,
        magSize: 100,
        maxAmmo: 400,
        disposition: 5,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 20,
                accuracy: 16.7,
                punchThrough: 0,
                critChance: 0.14,
                critMult: 2,
                status: 0.14,
                damage: 12,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.15
                    },
                    {
                        type: 'Slash',
                        percent: 0.15
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
        name: 'ANGSTRUM',
        img: require('../assets/itemimages/angstrum.png'),
        mastery: 4,
        type: [
            'PISTOL',
            'EXPLOSIVE'
        ],
        polarities: [
            'vazarin'
        ],
        noise: 'Alarming',
        reload: 2.5,
        magSize: 1,
        maxAmmo: 18,
        disposition: 5,
        modes: [
            {
                name: 'Single Rocket Impact',
                trigger: 'Charge',
                chargeRate: 0.5,
                fireRate: 2,
                accuracy: 26.7,
                punchThrough: 0,
                critChance: 0.16,
                critMult: 2,
                status: 0.22,
                damage: 200,
                split: [
                    {
                        type: 'Blast',
                        percent: 1
                    }
                ]
            },
            {
                name: 'Single Rocket Explosion',
                trigger: 'Charge',
                chargeRate: 0.5,
                fireRate: 2,
                accuracy: 26.7,
                punchThrough: 0,
                critChance: 0.16,
                critMult: 2,
                status: 0.22,
                damage: 250,
                split: [
                    {
                        type: 'Blast',
                        percent: 1
                    }
                ]
            },
            {
                name: 'Full Charge Total',
                trigger: 'Charge',
                chargeRate: 1.5,
                accuracy: 26.7,
                punchThrough: 0,
                critChance: 0.16,
                critMult: 2,
                status: 0.22,
                damage: 1350,
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
        name: 'ARCA SCISCO',
        img: require('../assets/itemimages/arca-scisco.png'),
        mastery: 10,
        type: [
            'PISTOL'
        ],
        polarities: [
            'madurai',
            'madurai'
        ],
        noise: 'Alarming',
        reload: 2.2,
        magSize: 36,
        maxAmmo: 288,
        disposition: 3,
        modes: [
            {
                trigger: 'Semi-Auto',
                fireRate: 4.67,
                accuracy: 32,
                punchThrough: 0,
                critChance: 0.18,
                critMult: 1.6,
                status: 0.26,
                damage: 60,
                split: [
                    {
                        type: 'Slash',
                        percent: 0.4
                    },
                    {
                        type: 'Puncture',
                        percent: 0.6
                    }
                ]
            }
        ]
    },
    {
        name: 'ATOMOS',
        img: require('../assets/itemimages/atomos.png'),
        mastery: 5,
        type: [
            'PISTOL'
        ],
        polarities: [
            'vazarin'
        ],
        noise: 'Alarming',
        reload: 2,
        magSize: 70,
        maxAmmo: 300,
        disposition: 2,
        modes: [
            {
                trigger: 'Held',
                rangeLimit: 15,
                fireRate: 8,
                accuracy: 12.5,
                punchThrough: 0,
                critChance: 0.15,
                critMult: 1.7,
                status: 0.21,
                damage: 29,
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
        name: 'AZIMA',
        img: require('../assets/itemimages/azima.png'),
        mastery: 6,
        type: [
            'PISTOL'
        ],
        polarities: [
            'naramon',
            'madurai'
        ],
        noise: 'Alarming',
        reload: 1.4,
        magSize: 75,
        maxAmmo: 525,
        disposition: 5,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 10,
                accuracy: 15.4,
                punchThrough: 0,
                critChance: 0.16,
                critMult: 2,
                status: 0.16,
                damage: 20,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.1
                    },
                    {
                        type: 'Slash',
                        percent: 0.65
                    },
                    {
                        type: 'Puncture',
                        percent: 0.25
                    }
                ]
            }
        ]
    },
    {
        name: 'BALLISTICA',
        img: require('../assets/itemimages/ballistica.png'),
        mastery: 2,
        type: [
            'PISTOL'
        ],
        polarities: [
            'vazarin'
        ],
        noise: 'Silent',
        reload: 2,
        magSize: 16,
        disposition: 2,
        modes: [
            {
                name: 'Charged Shot',
                trigger: 'Charge',
                chargeRate: 1,
                accuracy: 4,
                punchThrough: 0,
                critChance: 0.025,
                critMult: 1.5,
                status: 0.025,
                damage: 100,
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
            },
            {
                name: 'Burst Shot',
                trigger: 'Burst',
                burst: 4,
                accuracy: 4,
                punchThrough: 0,
                critChance: 0.025,
                critMult: 1.5,
                status: 0.025,
                damage: 25,
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
            },
        ]
    },
    {
        name: 'BALLISTICA PRIME',
        img: require('../assets/itemimages/ballistica-prime.png'),
        mastery: 14,
        type: [
            'PISTOL'
        ],
        polarities: [
            'naramon',
            'madurai',
            'madurai'
        ],
        noise: 'Silent',
        reload: 1.2,
        magSize: 32,
        maxAmmo: 210,
        disposition: 2,
        modes: [
            {
                name: 'Charged Shot',
                trigger: 'Charge',
                chargeRate: 0.8,
                accuracy: 4,
                punchThrough: 0,
                critChance: 0.2,
                critMult: 2,
                status: 0.2,
                damage: 304,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.05
                    },
                    {
                        type: 'Slash',
                        percent: 0.4
                    },
                    {
                        type: 'Puncture',
                        percent: 0.55
                    }
                ]
            },
            {
                name: 'Burst Shot',
                trigger: 'Burst',
                burst: 4,
                accuracy: 4,
                punchThrough: 0,
                critChance: 0.2,
                critMult: 2,
                status: 0.2,
                damage: 152,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.05
                    },
                    {
                        type: 'Slash',
                        percent: 0.4
                    },
                    {
                        type: 'Puncture',
                        percent: 0.55
                    }
                ]
            },
        ]
    },
    {
        name: 'BOLTO',
        img: require('../assets/itemimages/bolto.png'),
        mastery: 7,
        type: [
            'PISTOL',
            'BOLTO'
        ],
        polarities: [
            'vazarin'
        ],
        noise: 'Alarming',
        reload: 1.3,
        magSize: 15,
        maxAmmo: 210,
        disposition: 5,
        modes: [
            {
                trigger: 'Semi-Auto',
                fireRate: 6.83,
                accuracy: 26.7,
                punchThrough: 0,
                critChance: 0.16,
                critMult: 2.4,
                status: 0.022,
                damage: 40,
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
        name: 'BRAKK',
        img: require('../assets/itemimages/brakk.png'),
        mastery: 6,
        type: [
            'PISTOL'
        ],
        polarities: [
            'naramon',
            'madurai'
        ],
        noise: 'Alarming',
        reload: 1.05,
        magSize: 5,
        maxAmmo: 210,
        disposition: 1,
        modes: [
            {
                trigger: 'Semi-Auto',
                pellets: 10,
                fireRate: 5,
                accuracy: 5.6,
                punchThrough: 0,
                ammoCost: 0,
                critChance: 0.17,
                critMult: 2,
                status: 0.17,
                falloffMin: 11,
                falloffMax: 22,
                damage: 200,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.45
                    },
                    {
                        type: 'Slash',
                        percent: 0.3
                    },
                    {
                        type: 'Puncture',
                        percent: 0.25
                    }
                ]
            }
        ]
    },
    {
        name: 'BRONCO',
        img: require('../assets/itemimages/bronco.png'),
        mastery: 0,
        type: [
            'PISTOL'
        ],
        polarities: [],
        noise: 'Alarming',
        reload: 1.05,
        magSize: 2,
        maxAmmo: 210,
        disposition: 4,
        modes: [
            {
                trigger: 'Semi-Auto',
                pellets: 7,
                fireRate: 5,
                accuracy: 3.7,
                punchThrough: 0,
                critChance: 0.06,
                critMult: 2,
                status: 0.22,
                falloffMin: 7,
                falloffMax: 14,
                damage: 280,
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
            }
        ]
    },
    {
        name: 'BRONCO PRIME',
        img: require('../assets/itemimages/bronco-prime.png'),
        mastery: 4,
        type: [
            'PISTOL'
        ],
        polarities: [],
        noise: 'Alarming',
        reload: 2,
        magSize: 4,
        maxAmmo: 210,
        disposition: 4,
        modes: [
            {
                trigger: 'Semi-Auto',
                pellets: 7,
                fireRate: 4.17,
                accuracy: 3.7,
                punchThrough: 0,
                critChance: 0.06,
                critMult: 2,
                status: 0.3,
                falloffMin: 9,
                falloffMax: 18,
                damage: 350,
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
            }
        ]
    },
    {
        name: 'CASTANAS',
        img: require('../assets/itemimages/castanas.png'),
        mastery: 3,
        type: [
            'PISTOL',
            'EXPLOSIVE'
        ],
        polarities: [
            'madurai',
            'madurai'
        ],
        noise: 'Silent',
        reload: 1,
        magSize: 2,
        maxAmmo: 18,
        disposition: 5,
        modes: [
            {
                trigger: 'Active',
                fireRate: 3.33,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.08,
                critMult: 1.5,
                status: 0.22,
                damage: 160,
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
        name: 'CESTRA',
        img: require('../assets/itemimages/cestra.png'),
        mastery: 4,
        type: [
            'PISTOL'
        ],
        polarities: [],
        noise: 'Alarming',
        reload: 2,
        magSize: 60,
        maxAmmo: 420,
        disposition: 5,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 5,
                accuracy: 33.3,
                punchThrough: 0,
                critChance: 0.06,
                critMult: 1.6,
                status: 0.2,
                damage: 26,
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
        name: 'CYCRON',
        img: require('../assets/itemimages/cycron.png'),
        mastery: 8,
        type: [
            'PISTOL',
            'BEAM'
        ],
        polarities: [
            'naramon',
            'naramon'
        ],
        noise: 'Alarming',
        reload: 1,
        magSize: 40,
        maxAmmo: 40,
        disposition: 3,
        modes: [
            {
                trigger: 'Held',
                rangeLimit: 24,
                fireRate: 12,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.12,
                critMult: 1.8,
                status: 0.3,
                damage: 23,
                split: [
                    {
                        type: 'Slash',
                        percent: 5 / 23
                    },
                    {
                        type: 'Puncture',
                        percent: 8 / 23
                    },
                    {
                        type: 'Radiation',
                        percent: 10 / 23
                    }
                ]
            }
        ]
    },
    {
        name: 'DESPAIR',
        img: require('../assets/itemimages/despair.png'),
        mastery: 4,
        type: [
            'PISTOL',
            'THROWN',
            'DESPAIR'
        ],
        polarities: [
            'madurai',
            'madurai'
        ],
        noise: 'Silent',
        reload: 0.75,
        magSize: 10,
        maxAmmo: 210,
        disposition: 4,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 3.33,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.16,
                critMult: 1.6,
                status: 0.16,
                damage: 58,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.05
                    },
                    {
                        type: 'Slash',
                        percent: 0.15
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
        name: 'DETRON',
        img: require('../assets/itemimages/detron.png'),
        mastery: 6,
        type: [
            'PISTOL',
            'DETRON'
        ],
        polarities: [],
        noise: 'Alarming',
        reload: 1.05,
        magSize: 5,
        maxAmmo: 210,
        disposition: 3,
        modes: [
            {
                trigger: 'Semi-Auto',
                pellets: 7,
                fireRate: 3.33,
                accuracy: 7.1,
                punchThrough: 0,
                critChance: 0.04,
                critMult: 1.5,
                status: 0.3,
                falloffMin: 13,
                falloffMax: 22,
                damage: 280,
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
        name: 'DEX FURIS',
        img: require('../assets/itemimages/dex-furis.png'),
        mastery: 10,
        type: [
            'PISTOL'
        ],
        polarities: [
            'naramon'
        ],
        noise: 'Alarming',
        reload: 2,
        magSize: 100,
        maxAmmo: 400,
        disposition: 5,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 20,
                accuracy: 15.4,
                punchThrough: 0,
                critChance: 0.14,
                critMult: 2,
                status: 0.28,
                damage: 16,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.15
                    },
                    {
                        type: 'Slash',
                        percent: 0.15
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
        name: 'DUAL CESTRA',
        img: require('../assets/itemimages/dual-cestra.png'),
        mastery: 7,
        type: [
            'PISTOL'
        ],
        polarities: [
            'madurai'
        ],
        noise: 'Alarming',
        reload: 3.5,
        magSize: 120,
        maxAmmo: 480,
        disposition: 5,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 12.5,
                accuracy: 20,
                punchThrough: 0,
                critChance: 0.06,
                critMult: 1.6,
                status: 0.2,
                damage: 26,
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
        name: 'DUAL TOXOCYST',
        img: require('../assets/itemimages/dual-toxocyst.png'),
        mastery: 11,
        type: [
            'PISTOL'
        ],
        polarities: [],
        noise: 'Alarming',
        reload: 2.35,
        magSize: 12,
        maxAmmo: 72,
        disposition: 4,
        modes: [
            {
                trigger: 'Semi-Auto',
                fireRate: 1,
                accuracy: 16,
                punchThrough: 0,
                critChance: 0.05,
                critMult: 2,
                status: 0.37,
                damage: 75,
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
        name: 'EMBOLIST',
        img: require('../assets/itemimages/embolist.png'),
        mastery: 9,
        type: [
            'PISTOL',
            'BEAM',
            'EMBOLIST'
        ],
        polarities: [
            'naramon'
        ],
        noise: 'Alarming',
        reload: 1.3,
        magSize: 33,
        maxAmmo: 210,
        disposition: 5,
        modes: [
            {
                trigger: 'Held',
                rangeLimit: 9,
                fireRate: 8,
                accuracy: 100,
                punchThrough: 0,
                ammoCost: 0.5,
                critChance: 0.03,
                critMult: 1.5,
                status: 0.41,
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
    {
        name: 'EUPHONA PRIME',
        img: require('../assets/itemimages/euphona-prime.png'),
        mastery: 14,
        type: [
            'PISTOL'
        ],
        polarities: [
            'madurai',
            'madurai',
            'madurai'
        ],
        noise: 'Alarming',
        reload: 2,
        magSize: 5,
        maxAmmo: 40,
        disposition: 2,
        modes: [
            {
                name: 'Slug',
                trigger: 'Semi-Auto',
                fireRate: 1.5,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.3,
                critMult: 2.5,
                status: 0.02,
                damage: 325,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.9
                    },
                    {
                        type: 'Slash',
                        percent: 0.05
                    },
                    {
                        type: 'Puncture',
                        percent: 0.05
                    }
                ]
            },
            {
                name: 'Scatter Shot',
                trigger: 'Semi-Auto',
                pellets: 10,
                fireRate: 1.5,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.02,
                critMult: 2,
                status: 0.3,
                falloffMin: 6,
                falloffMax: 12,
                damage: 880,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.05
                    },
                    {
                        type: 'Slash',
                        percent: 0.75
                    },
                    {
                        type: 'Puncture',
                        percent: 0.2
                    }
                ]
            },
        ]
    },
    {
        name: 'FURIS',
        img: require('../assets/itemimages/furis.png'),
        mastery: 2,
        type: [
            'PISTOL',
            'FURIS'
        ],
        polarities: [
            'naramon'
        ],
        noise: 'Alarming',
        reload: 1.4,
        magSize: 35,
        maxAmmo: 210,
        disposition: 5,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 10,
                accuracy: 22.2,
                punchThrough: 0,
                critChance: 0.05,
                critMult: 2,
                status: 0.12,
                damage: 20,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.15
                    },
                    {
                        type: 'Slash',
                        percent: 0.15
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
        name: 'FUSILAI',
        img: require('../assets/itemimages/fusilai.png'),
        mastery: 7,
        type: [
            'PISTOL',
            'THROWN'
        ],
        polarities: [
            'madurai'
        ],
        noise: 'Silent',
        reload: 0.8,
        magSize: 6,
        maxAmmo: 72,
        disposition: 4,
        modes: [
            {
                name: 'Auto',
                trigger: 'Auto',
                fireRate: 2.83,
                accuracy: 100,
                punchThrough: 0,
                ammoCost: 0,
                critChance: 0.23,
                critMult: 1.7,
                status: 0.29,
                damage: 77,
                split: [
                    {
                        type: 'Slash',
                        percent: 0.6
                    },
                    {
                        type: 'Puncture',
                        percent: 0.4
                    }
                ]
            },
            {
                name: 'Fan',
                trigger: 'Semi-Auto',
                fireRate: 2.83,
                accuracy: 100,
                punchThrough: 0,
                ammoCost: 3,
                critChance: 0.03,
                critMult: 1.5,
                status: 0.37,
                damage: 231,
                split: [
                    {
                        type: 'Slash',
                        percent: 0.6
                    },
                    {
                        type: 'Puncture',
                        percent: 0.4
                    }
                ]
            },
        ]
    },
    {
        name: 'GAMMACOR',
        img: require('../assets/itemimages/gammacor.png'),
        mastery: 2,
        type: [
            'PISTOL',
            'BEAM'
        ],
        polarities: [
            'vazarin'
        ],
        noise: 'Alarming',
        reload: 1.4,
        magSize: 60,
        maxAmmo: 240,
        disposition: 1,
        modes: [
            {
                trigger: 'Held',
                rangeLimit: 25,
                fireRate: 12,
                accuracy: 100,
                punchThrough: 0,
                ammoCost: 0.5,
                critChance: 0.08,
                critMult: 1.8,
                status: 0.2,
                damage: 16,
                split: [
                    {
                        type: 'Magnetic',
                        percent: 16
                    }
                ]
            }
        ]
    },
    {
        name: 'HIKOU',
        img: require('../assets/itemimages/hikou.png'),
        mastery: 2,
        type: [
            'PISTOL',
            'THROWN'
        ],
        polarities: [
            'madurai',
            'madurai'
        ],
        noise: 'Silent',
        reload: 0.75,
        magSize: 20,
        maxAmmo: 210,
        disposition: 1,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 6.67,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.04,
                critMult: 1.6,
                status: 0.1,
                damage: 26,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.1
                    },
                    {
                        type: 'Slash',
                        percent: 0.3
                    },
                    {
                        type: 'Puncture',
                        percent: 0.6
                    }
                ]
            }
        ]
    },
    {
        name: 'HIKOU PRIME',
        img: require('../assets/itemimages/hikou-prime.png'),
        mastery: 4,
        type: [
            'PISTOL',
            'THROWN'
        ],
        polarities: [
            'madurai',
            'madurai'
        ],
        noise: 'Silent',
        reload: 0.5,
        magSize: 26,
        maxAmmo: 210,
        disposition: 1,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 5.83,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.06,
                critMult: 1.8,
                status: 0.28,
                damage: 36,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.5
                    },
                    {
                        type: 'Slash',
                        percent: 0.1
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
        name: 'HYSTRIX',
        img: require('../assets/itemimages/hystrix.png'),
        mastery: 7,
        type: [
            'PISTOL'
        ],
        polarities: [
            'madurai'
        ],
        noise: 'Alarming',
        reload: 1.7,
        magSize: 16,
        maxAmmo: 320,
        disposition: 3,
        modes: [
            {
                name: 'Poison/Ice Quill',
                trigger: 'Auto',
                fireRate: 7,
                accuracy: 14.3,
                punchThrough: 0,
                critChance: 0.24,
                critMult: 2.2,
                status: 0.1,
                damage: 36,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.06
                    },
                    {
                        type: 'Slash',
                        percent: 0.08
                    },
                    {
                        type: 'Puncture',
                        percent: 0.86
                    }
                ]
            },
            {
                name: 'Fire/Electric Quill',
                trigger: 'Auto',
                fireRate: 7,
                accuracy: 14.3,
                punchThrough: 0,
                critChance: 0.24,
                critMult: 2.2,
                status: 0.1,
                damage: 40,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.06
                    },
                    {
                        type: 'Slash',
                        percent: 0.08
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
        name: 'KNELL',
        img: require('../assets/itemimages/knell.png'),
        mastery: 10,
        type: [
            'PISTOL'
        ],
        polarities: [],
        noise: 'Alarming',
        reload: 1,
        magSize: 1,
        maxAmmo: 10,
        disposition: 3,
        modes: [
            {
                trigger: 'Semi-Auto',
                fireRate: 4,
                accuracy: 32,
                punchThrough: 0,
                critChance: 0.2,
                critMult: 1.5,
                status: 0.05,
                damage: 150,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.42
                    },
                    {
                        type: 'Slash',
                        percent: 0.12
                    },
                    {
                        type: 'Puncture',
                        percent: 0.46
                    }
                ]
            }
        ]
    },
    {
        name: 'KOHMAK',
        img: require('../assets/itemimages/kohmak.png'),
        mastery: 5,
        type: [
            'PISTOL'
        ],
        polarities: [],
        noise: 'Alarming',
        reload: 2,
        magSize: 40,
        disposition: 5,
        modes: [
            {
                name: 'Single Pellet',
                trigger: 'Auto-Spool',
                fireRate: 5,
                accuracy: 3.6,
                punchThrough: 1.5,
                critChance: 0.11,
                critMult: 2,
                status: 0.23,
                falloffMin: 12,
                falloffMax: 24,
                damage: 30,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.2
                    },
                    {
                        type: 'Slash',
                        percent: 0.6
                    },
                    {
                        type: 'Puncture',
                        percent: 0.2
                    }
                ]
            },
            {
                name: 'Fully Spooled',
                trigger: 'Auto-Spool',
                fireRate: 5,
                pellets: 5,
                accuracy: 3.6,
                punchThrough: 1.5,
                ammoCost: 1.67,
                critChance: 0.11,
                critMult: 2,
                status: 0.23,
                falloffMin: 12,
                falloffMax: 24,
                damage: 150,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.2
                    },
                    {
                        type: 'Slash',
                        percent: 0.6
                    },
                    {
                        type: 'Puncture',
                        percent: 0.2
                    }
                ]
            }
        ]
    },
    {
        name: 'KRAKEN',
        img: require('../assets/itemimages/kraken.png'),
        mastery: 0,
        type: [
            'PISTOL'
        ],
        polarities: [],
        noise: 'Alarming',
        reload: 2.45,
        magSize: 14,
        maxAmmo: 210,
        disposition: 5,
        modes: [
            {
                trigger: 'Burst',
                burst: 2,
                fireRate: 4.42,
                accuracy: 16,
                punchThrough: 0,
                critChance: 0.05,
                critMult: 2,
                status: 0.13,
                damage: 49,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.75
                    },
                    {
                        type: 'Slash',
                        percent: 0.125
                    },
                    {
                        type: 'Puncture',
                        percent: 0.125
                    }
                ],
            }
        ]
    },
    {
        name: 'KULSTAR',
        img: require('../assets/itemimages/kulstar.png'),
        mastery: 5,
        type: [
            'PISTOL',
            'EXPLOSIVE'
        ],
        polarities: [
            'vazarin'
        ],
        noise: 'Alarming',
        reload: 2,
        magSize: 3,
        maxAmmo: 15,
        disposition: 3,
        modes: [
            {
                name: 'Rocket Impact',
                trigger: 'Semi-Auto',
                fireRate: 2,
                accuracy: 26.7,
                punchThrough: 0,
                critChance: 0.17,
                critMult: 2.3,
                status: 0.19,
                damage: 200,
                split: [
                    {
                        type: 'Impact',
                        percent: 1
                    }
                ]
            },
            {
                name: 'Rocket Explosion',
                trigger: 'Semi-Auto',
                fireRate: 2,
                accuracy: 26.7,
                punchThrough: 0,
                critChance: 0.17,
                critMult: 2.3,
                status: 0.19,
                damage: 300,
                split: [
                    {
                        type: 'Blast',
                        percent: 1
                    }
                ]
            },
            {
                name: 'Cluster Bombs',
                trigger: 'Semi-Auto',
                fireRate: 2,
                accuracy: 26.7,
                punchThrough: 0,
                critChance: 0.17,
                critMult: 2.3,
                status: 0.19,
                damage: 225,
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
        name: 'KUNAI',
        img: require('../assets/itemimages/kunai.png'),
        mastery: 2,
        type: [
            'PISTOL',
            'THROWN',
            'KUNAI'
        ],
        polarities: [
            'madurai',
            'madurai'
        ],
        noise: 'Silent',
        reload: 0.75,
        magSize: 10,
        maxAmmo: 210,
        disposition: 5,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 3.33,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.08,
                critMult: 1.6,
                status: 0.08,
                damage: 46,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.1
                    },
                    {
                        type: 'Slash',
                        percent: 0.15
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
        name: 'LATO',
        img: require('../assets/itemimages/lato.png'),
        mastery: 0,
        type: [
            'PISTOL'
        ],
        polarities: [],
        noise: 'Alarming',
        reload: 1,
        magSize: 15,
        maxAmmo: 210,
        disposition: 5,
        modes: [
            {
                trigger: 'Semi-Auto',
                fireRate: 6.67,
                accuracy: 18.2,
                punchThrough: 0,
                critChance: 0.1,
                critMult: 1.8,
                status: 0.06,
                damage: 30,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.25
                    },
                    {
                        type: 'Slash',
                        percent: 0.5
                    },
                    {
                        type: 'Puncture',
                        percent: 0.25
                    }
                ]
            }
        ]
    },
    {
        name: 'LATO PRIME',
        img: require('../assets/itemimages/lato-prime.png'),
        mastery: 14,
        type: [
            'PISTOL'
        ],
        polarities: [
            'madurai',
            'naramon'
        ],
        noise: 'Alarming',
        reload: 1,
        magSize: 20,
        maxAmmo: 210,
        disposition: 5,
        modes: [
            {
                trigger: 'Semi-Auto',
                fireRate: 6.67,
                accuracy: 18.2,
                punchThrough: 0,
                critChance: 0.3,
                critMult: 2,
                status: 0.2,
                damage: 48,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.1
                    },
                    {
                        type: 'Slash',
                        percent: 0.7
                    },
                    {
                        type: 'Puncture',
                        percent: 0.2
                    }
                ]
            }
        ]
    },
    {
        name: 'LATO VANDAL',
        img: require('../assets/itemimages/lato-vandal.png'),
        mastery: 7,
        type: [
            'PISTOL'
        ],
        polarities: [
            'madurai'
        ],
        noise: 'Alarming',
        reload: 1,
        magSize: 15,
        maxAmmo: 210,
        disposition: 5,
        modes: [
            {
                trigger: 'Semi-Auto',
                fireRate: 5,
                accuracy: 23,
                punchThrough: 0,
                critChance: 0.26,
                critMult: 2.4,
                status: 0.1,
                damage: 46,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.15
                    },
                    {
                        type: 'Slash',
                        percent: 0.6
                    },
                    {
                        type: 'Puncture',
                        percent: 0.25
                    }
                ]
            }
        ]
    },
    {
        name: 'LEX',
        img: require('../assets/itemimages/lex.png'),
        mastery: 3,
        type: [
            'PISTOL'
        ],
        polarities: [
            'madurai'
        ],
        noise: 'Alarming',
        reload: 2.35,
        magSize: 6,
        maxAmmo: 210,
        disposition: 1,
        modes: [
            {
                trigger: 'Semi-Auto',
                fireRate: 1.08,
                accuracy: 16,
                punchThrough: 0,
                critChance: 0.2,
                critMult: 2,
                status: 0.1,
                damage: 130,
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
        name: 'LEX PRIME',
        img: require('../assets/itemimages/lex-prime.png'),
        mastery: 8,
        type: [
            'PISTOL'
        ],
        polarities: [
            'madurai'
        ],
        noise: 'Alarming',
        reload: 2.35,
        magSize: 8,
        maxAmmo: 210,
        disposition: 1,
        modes: [
            {
                trigger: 'Semi-Auto',
                fireRate: 2.08,
                accuracy: 16,
                punchThrough: 0,
                critChance: 0.25,
                critMult: 2,
                status: 0.25,
                damage: 150,
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
        name: 'MAGNUS',
        img: require('../assets/itemimages/magnus.png'),
        mastery: 10,
        type: [
            'PISTOL'
        ],
        polarities: [
            'madurai'
        ],
        noise: 'Alarming',
        reload: 1.4,
        magSize: 8,
        maxAmmo: 210,
        disposition: 5,
        modes: [
            {
                trigger: 'Semi-Auto',
                rangeLimit: 0,
                fireRate: 5.83,
                accuracy: 16,
                punchThrough: 0,
                ammoCost: 0,
                critChance: 0.22,
                critMult: 2,
                status: 0.22,
                falloffMin: 0,
                falloffMax: 0,
                damage: 76,
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
        name: 'MARA DETRON',
        img: require('../assets/itemimages/mara-detron.png'),
        mastery: 9,
        type: [
            'PISTOL',
            'DETRON'
        ],
        polarities: [],
        noise: 'Alarming',
        reload: 1.05,
        magSize: 8,
        disposition: 3,
        modes: [
            {
                trigger: 'Semi-Auto',
                pellets: 7,
                fireRate: 3.33,
                accuracy: 13.3,
                punchThrough: 0,
                critChance: 0.08,
                critMult: 1.5,
                status: 0.32,
                falloffMin: 16,
                falloffMax: 30,
                damage: 280,
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
        name: 'MARELOK',
        img: require('../assets/itemimages/marelok.png'),
        mastery: 7,
        type: [
            'PISTOL',
            'MARELOK'
        ],
        polarities: [
            'madurai'
        ],
        noise: 'Alarming',
        reload: 1.67,
        magSize: 6,
        disposition: 1,
        modes: [
            {
                trigger: 'Semi-Auto',
                fireRate: 2,
                accuracy: 10,
                punchThrough: 0,
                critChance: 0.15,
                critMult: 1.5,
                status: 0.3,
                damage: 160,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.5
                    },
                    {
                        type: 'Slash',
                        percent: 0.4
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
        name: 'MK1-FURIS',
        img: require('../assets/itemimages/mk1-furis.png'),
        mastery: 0,
        type: [
            'PISTOL'
        ],
        polarities: [],
        noise: 'Alarming',
        reload: 1.4,
        magSize: 35,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 8.33,
                accuracy: 22.2,
                punchThrough: 0,
                critChance: 0.05,
                critMult: 2,
                status: 0.01,
                damage: 13,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.15
                    },
                    {
                        type: 'Slash',
                        percent: 0.15
                    },
                    {
                        type: 'Puncture',
                        percent: 0.7
                    },
                ]
            }
        ]
    },
    {
        name: 'MK1-KUNAI',
        img: require('../assets/itemimages/mk1-kunai.png'),
        mastery: 0,
        type: [
            'PISTOL',
            'THROWN',
            'KUNAI'
        ],
        polarities: [],
        noise: 'Silent',
        reload: 0.75,
        magSize: 10,
        modes: [
            {
                trigger: 'Auto',
                rangeLimit: 0,
                fireRate: 3.33,
                accuracy: 100,
                punchThrough: 0,
                ammoCost: 0,
                critChance: 0.05,
                critMult: 2,
                status: 0.025,
                falloffMin: 0,
                falloffMax: 0,
                damage: 40,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.1
                    },
                    {
                        type: 'Slash',
                        percent: 0.15
                    },
                    {
                        type: 'Puncture',
                        percent: 0.75
                    },
                ]
            }
        ]
    },
    {
        name: 'NUKOR',
        img: require('../assets/itemimages/nukor.png'),
        mastery: 4,
        type: [
            'PISTOL',
            'BEAM'
        ],
        polarities: [],
        noise: 'Alarming',
        reload: 2,
        magSize: 50,
        maxAmmo: 210,
        disposition: 5,
        modes: [
            {
                trigger: 'Held',
                rangeLimit: 25,
                fireRate: 10,
                accuracy: 100,
                punchThrough: 0,
                ammoCost: 0.5,
                critChance: 0.03,
                critMult: 4,
                status: 0.29,
                damage: 22,
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
        name: 'PANDERO',
        img: require('../assets/itemimages/pandero.png'),
        mastery: 8,
        type: [
            'PISTOL'
        ],
        polarities: [],
        noise: 'Alarming',
        reload: 1,
        magSize: 8,
        maxAmmo: 210,
        disposition: 3,
        modes: [
            {
                trigger: 'Semi-Auto',
                fireRate: 3,
                accuracy: 16,
                punchThrough: 0,
                critChance: 0.3,
                critMult: 2.8,
                status: 0.1,
                damage: 72,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.25
                    },
                    {
                        type: 'Slash',
                        percent: 0.5
                    },
                    {
                        type: 'Puncture',
                        percent: 0.25
                    }
                ]
            }
        ]
    },
    {
        name: 'POX',
        img: require('../assets/itemimages/pox.png'),
        mastery: 9,
        type: [
            'PISTOL',
            'EXPLOSIVE'
        ],
        polarities: [
            'madurai',
            'madurai'
        ],
        noise: 'Silent',
        reload: 1,
        magSize: 4,
        maxAmmo: 20,
        disposition: 2,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 2.08,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.01,
                critMult: 2,
                status: 0.35,
                damage: 150,
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
        name: 'PRISMA ANGSTRUM',
        img: require('../assets/itemimages/prisma-angstrum.png'),
        mastery: 8,
        type: [
            'PISTOL',
            'EXPLOSIVE'
        ],
        polarities: [
            'vazarin'
        ],
        noise: 'Alarming',
        reload: 1.8,
        magSize: 3,
        maxAmmo: 18,
        disposition: 5,
        modes: [
            {
                name: 'Single Rocket Impact',
                trigger: 'Charge',
                chargeRate: 0.2,
                fireRate: 2,
                accuracy: 26.7,
                punchThrough: 0,
                critChance: 0.18,
                critMult: 2.2,
                status: 0.26,
                damage: 200,
                split: [
                    {
                        type: 'Blast',
                        percent: 1
                    }
                ]
            },
            {
                name: 'Single Rocket Explosion',
                trigger: 'Charge',
                chargeRate: 0.2,
                fireRate: 2,
                accuracy: 26.7,
                punchThrough: 0,
                critChance: 0.18,
                critMult: 2.2,
                status: 0.26,
                damage: 250,
                split: [
                    {
                        type: 'Blast',
                        percent: 1
                    }
                ]
            },
            {
                name: 'Full Charge Total',
                trigger: 'Charge',
                chargeRate: 0.6,
                accuracy: 26.7,
                punchThrough: 0,
                critChance: 0.18,
                critMult: 2.2,
                status: 0.26,
                damage: 1350,
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
        name: 'PRISMA TWIN GREMLINS',
        img: require('../assets/itemimages/prisma-twin-gremlins.png'),
        mastery: 11,
        type: [
            'PISTOL'
        ],
        polarities: [
            'madurai'
        ],
        noise: 'Alarming',
        reload: 0.9,
        magSize: 70,
        maxAmmo: 600,
        disposition: 5,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 8.83,
                accuracy: 36.4,
                punchThrough: 0,
                critChance: 0.23,
                critMult: 1.9,
                status: 0.23,
                damage: 27,
                split: [
                    {
                        type: 'Impact',
                        percent: 3 / 27
                    },
                    {
                        type: 'Slash',
                        percent: 11.3 / 27
                    },
                    {
                        type: 'Puncture',
                        percent: 12.7 / 27
                    }
                ]
            }
        ]
    },
    {
        name: 'PYRANA',
        img: require('../assets/itemimages/pyrana.png'),
        mastery: 12,
        type: [
            'PISTOL'
        ],
        polarities: [],
        noise: 'Alarming',
        reload: 2,
        magSize: 10,
        maxAmmo: 210,
        disposition: 4,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 4.17,
                accuracy: 5,
                punchThrough: 0,
                critChance: 0.2,
                critMult: 2,
                status: 0.1,
                falloffMin: 15,
                falloffMax: 30,
                damage: 264,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.1
                    },
                    {
                        type: 'Slash',
                        percent: 0.8
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
        name: 'PYRANA PRIME',
        img: require('../assets/itemimages/pyrana-prime.png'),
        mastery: 13,
        type: [
            'PISTOL'
        ],
        polarities: [
            'madurai',
            'madurai'
        ],
        noise: 'Alarming',
        reload: 1.6,
        magSize: 12,
        maxAmmo: 210,
        disposition: 4,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 4,
                accuracy: 6.1,
                punchThrough: 0,
                ammoCost: 0,
                critChance: 0.24,
                critMult: 2.2,
                status: 0.12,
                falloffMin: 18,
                falloffMax: 36,
                damage: 240,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.08
                    },
                    {
                        type: 'Slash',
                        percent: 0.84
                    },
                    {
                        type: 'Puncture',
                        percent: 0.08
                    }
                ]
            }
        ]
    },
    {
        name: 'RAKTA BALLISTICA',
        img: require('../assets/itemimages/rakta-ballistica.png'),
        mastery: 6,
        type: [
            'PISTOL'
        ],
        polarities: [
            'vazarin',
            'madurai'
        ],
        noise: 'Silent',
        reload: 2,
        magSize: 20,
        maxAmmo: 210,
        disposition: 2,
        modes: [
            {
                name: 'Charged Shot',
                trigger: 'Charge',
                chargeRate: 1,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.2,
                critMult: 1.5,
                status: 0.1,
                damage: 300,
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
                        percent: 0.9
                    }
                ]
            },
            {
                name: 'Burst Shot',
                trigger: 'Burst',
                burst: 4,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.05,
                critMult: 1.5,
                status: 0.025,
                damage: 75,
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
                        percent: 0.9
                    }
                ]
            }
        ]
    },
    {
        name: 'SANCTI CASTANAS',
        img: require('../assets/itemimages/sancti-castanas.png'),
        mastery: 10,
        type: [
            'PISTOL',
            'EXPLOSIVE'
        ],
        polarities: [
            'madurai',
            'madurai',
            'vazarin'
        ],
        noise: 'Silent',
        reload: 1,
        magSize: 2,
        maxAmmo: 18,
        disposition: 5,
        modes: [
            {
                trigger: 'Active',
                rangeLimit: 0,
                fireRate: 3.33,
                accuracy: 100,
                punchThrough: 0,
                ammoCost: 0,
                critChance: 0.24,
                critMult: 2,
                status: 0.34,
                falloffMin: 0,
                falloffMax: 0,
                damage: 300,
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
        name: 'SECURA DUAL CESTRA',
        img: require('../assets/itemimages/secura-dual-cestra.png'),
        mastery: 10,
        type: [
            'PISTOL'
        ],
        polarities: [
            'madurai',
            'naramon'
        ],
        noise: 'Alarming',
        reload: 3.5,
        magSize: 120,
        maxAmmo: 480,
        disposition: 5,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 7.5,
                accuracy: 20,
                punchThrough: 0,
                critChance: 0.16,
                critMult: 1.6,
                status: 0.28,
                damage: 28,
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
        name: 'SEER',
        img: require('../assets/itemimages/seer.png'),
        mastery: 0,
        type: [
            'PISTOL'
        ],
        polarities: [],
        noise: 'Alarming',
        reload: 2.8,
        magSize: 8,
        maxAmmo: 210,
        disposition: 5,
        modes: [
            {
                trigger: 'Semi-Auto',
                fireRate: 2,
                accuracy: 16,
                punchThrough: 0,
                critChance: 0.05,
                critMult: 1.5,
                status: 0.13,
                damage: 101,
                split: [
                    {
                        type: 'Impact',
                        percent: 1 / 3
                    },
                    {
                        type: 'Slash',
                        percent: 1 / 3
                    },
                    {
                        type: 'Puncture',
                        percent: 1 / 3
                    }
                ]
            }
        ]
    },
    {
        name: 'SICARUS',
        img: require('../assets/itemimages/sicarus.png'),
        mastery: 3,
        type: [
            'PISTOL'
        ],
        polarities: [
            'madurai'
        ],
        noise: 'Alarming',
        reload: 2,
        magSize: 15,
        disposition: 5,
        modes: [
            {
                trigger: 'Burst',
                burst: 3,
                fireRate: 7.39,
                accuracy: 20,
                punchThrough: 0,
                critChance: 0.16,
                critMult: 2,
                status: 0.06,
                damage: 30,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.7
                    },
                    {
                        type: 'Slash',
                        percent: 0.15
                    },
                    {
                        type: 'Puncture',
                        percent: 0.15
                    }
                ],
            }
        ]
    },
    {
        name: 'SICARUS PRIME',
        img: require('../assets/itemimages/sicarus-prime.png'),
        mastery: 14,
        type: [
            'PISTOL'
        ],
        polarities: [
            'madurai'
        ],
        noise: 'Alarming',
        reload: 2,
        magSize: 24,
        maxAmmo: 210,
        disposition: 5,
        modes: [
            {
                trigger: 'Burst',
                burst: 3,
                fireRate: 9.38,
                accuracy: 25,
                punchThrough: 0,
                critChance: 0.25,
                critMult: 2,
                status: 0.2,
                damage: 50,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.4
                    },
                    {
                        type: 'Slash',
                        percent: 0.3
                    },
                    {
                        type: 'Puncture',
                        percent: 0.3
                    }
                ],
            }
        ]
    },
    {
        name: 'SONICOR',
        img: require('../assets/itemimages/sonicor.png'),
        mastery: 2,
        type: [
            'PISTOL'
        ],
        polarities: [
            'vazarin'
        ],
        noise: 'Alarming',
        reload: 3,
        magSize: 15,
        maxAmmo: 150,
        disposition: 1,
        modes: [
            {
                name: 'Projectile Impact',
                trigger: 'Semi-Auto',
                rangeLimit: 15,
                fireRate: 1.25,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0,
                critMult: 2,
                status: 0,
                damage: 150,
                split: [
                    {
                        type: 'Impact',
                        percent: 1
                    }
                ]
            },
            {
                name: 'Explosion',
                trigger: 'Semi-Auto',
                rangeLimit: 15,
                fireRate: 1.25,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.1,
                critMult: 2,
                status: 0,
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
        name: 'SPECTRA',
        img: require('../assets/itemimages/spectra.png'),
        mastery: 4,
        type: [
            'PISTOL',
            'BEAM',
            'SPECTRA'
        ],
        polarities: [],
        noise: 'Alarming',
        reload: 1.8,
        magSize: 60,
        maxAmmo: 360,
        disposition: 5,
        modes: [
            {
                trigger: 'Held',
                rangeLimit: 18,
                fireRate: 12,
                accuracy: 100,
                punchThrough: 0.5,
                ammoCost: 0.5,
                critChance: 0.14,
                critMult: 2,
                status: 0.22,
                damage: 18,
                split: [
                    {
                        type: 'Slash',
                        percent: 0.58
                    },
                    {
                        type: 'Puncture',
                        percent: 0.42
                    }
                ]
            }
        ]
    },
    {
        name: 'SPIRA',
        img: require('../assets/itemimages/spira.png'),
        mastery: 8,
        type: [
            'PISTOL',
            'THROWN'
        ],
        polarities: [
            'madurai',
            'madurai'
        ],
        noise: 'Silent',
        reload: 1,
        magSize: 10,
        maxAmmo: 210,
        disposition: 1,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 2.5,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.3,
                critMult: 2,
                status: 0.08,
                damage: 82,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.1
                    },
                    {
                        type: 'Slash',
                        percent: 0.3
                    },
                    {
                        type: 'Puncture',
                        percent: 0.6
                    }
                ]
            }
        ]
    },
    {
        name: 'SPIRA PRIME',
        img: require('../assets/itemimages/spira-prime.png'),
        mastery: 10,
        type: [
            'PISTOL'
        ],
        polarities: [
            'madurai',
            'madurai'
        ],
        noise: 'Silent',
        reload: 0.75,
        magSize: 12,
        maxAmmo: 210,
        disposition: 1,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 3.33,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.3,
                critMult: 3,
                status: 0.14,
                damage: 60,
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
        name: 'STATICOR',
        img: require('../assets/itemimages/staticor.png'),
        mastery: 10,
        type: [
            'PISTOL',
            'STATICOR'
        ],
        polarities: [
            'naramon'
        ],
        noise: 'Alarming',
        reload: 1.5,
        magSize: 0,
        maxAmmo: 270,
        disposition: 1,
        modes: [
            {
                name: 'Uncharged',
                trigger: 'Charge',
                fireRate: 3.5,
                accuracy: 16.7,
                punchThrough: 0,
                critChance: 0.14,
                critMult: 2.2,
                status: 0.28,
                damage: 132,
                split: [
                    {
                        type: 'Radiation',
                        percent: 1
                    }
                ]
            },
            {
                name: 'Charged',
                trigger: 'Charge',
                chargeRate: 3,
                accuracy: 16.7,
                punchThrough: 0,
                ammoCost: 5,
                critChance: 0.14,
                critMult: 2.2,
                status: 0.28,
                damage: 528,
                split: [
                    {
                        type: 'Radiation',
                        percent: 1
                    }
                ]
            },
        ]
    },
    {
        name: 'STUBBA',
        img: require('../assets/itemimages/stubba.png'),
        mastery: 7,
        type: [
            'PISTOL'
        ],
        polarities: [],
        noise: 'Alarming',
        reload: 1.3,
        magSize: 57,
        maxAmmo: 399,
        disposition: 4,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 6.33,
                accuracy: 16,
                punchThrough: 0,
                critChance: 0.23,
                critMult: 1.9,
                status: 0.13,
                damage: 33,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.43
                    },
                    {
                        type: 'Slash',
                        percent: 0.47
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
        name: 'STUG',
        img: require('../assets/itemimages/stug.png'),
        mastery: 2,
        type: [
            'PISTOL'
        ],
        polarities: [
            'vazarin'
        ],
        noise: 'Alarming',
        reload: 2,
        magSize: 20,
        disposition: 5,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 4,
                accuracy: 100,
                punchThrough: 0,
                ammoCost: 0,
                critChance: 0.05,
                critMult: 1.5,
                status: 0,
                damage: 156,
                split: [
                    {
                        type: 'Corrosive',
                        percent: 1
                    }
                ]
            },
            {
                trigger: 'Charge',
                chargeRate: 3,
                accuracy: 100,
                punchThrough: 0,
                ammoCost: 6,
                critChance: 0.05,
                critMult: 1.5,
                status: 0,
                damage: 936,
                split: [
                    {
                        type: 'Corrosive',
                        percent: 1
                    }
                ]
            },
        ]
    },
    {
        name: 'SYNOID GAMMACOR',
        img: require('../assets/itemimages/synoid-gammacor.png'),
        mastery: 7,
        type: [
            'PISTOL',
            'BEAM'
        ],
        polarities: [
            'vazarin',
            'naramon'
        ],
        noise: 'Alarming',
        reload: 1.8,
        magSize: 80,
        maxAmmo: 400,
        disposition: 1,
        modes: [
            {
                trigger: 'Held',
                rangeLimit: 30,
                fireRate: 12,
                accuracy: 100,
                punchThrough: 0,
                ammoCost: 0.5,
                critChance: 0.2,
                critMult: 2,
                status: 0.28,
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
        name: 'TALONS',
        img: require('../assets/itemimages/talons.png'),
        mastery: 8,
        type: [
            'PISTOL',
            'EXPLOSIVE'
        ],
        polarities: [
            'madurai',
            'madurai'
        ],
        noise: 'Silent',
        reload: 1,
        magSize: 4,
        maxAmmo: 12,
        disposition: 5,
        modes: [
            {
                trigger: 'Active',
                fireRate: 3.33,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.22,
                critMult: 2,
                status: 0.26,
                damage: 120,
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
        name: 'TELOS AKBOLTO',
        img: require('../assets/itemimages/telos-akbolto.png'),
        mastery: 11,
        type: [
            'PISTOL'
        ],
        polarities: [
            'vazarin',
            'naramon'
        ],
        noise: 'Alarming',
        reload: 2.6,
        magSize: 30,
        maxAmmo: 210,
        disposition: 2,
        modes: [
            {
                trigger: 'Semi-Auto',
                fireRate: 10,
                accuracy: 26.7,
                punchThrough: 0,
                critChance: 0.13,
                critMult: 2,
                status: 0.29,
                damage: 47,
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
        name: 'TWIN GRAKATAS',
        img: require('../assets/itemimages/twin-grakatas.png'),
        mastery: 9,
        type: [
            'PISTOL'
        ],
        polarities: [
            'naramon'
        ],
        noise: 'Alarming',
        reload: 3,
        magSize: 60,
        maxAmmo: 1200,
        disposition: 2,
        modes: [
            {
                trigger: 'Auto',
                pellets: 2,
                fireRate: 20,
                accuracy: 28.6,
                punchThrough: 0,
                ammoCost: 2,
                critChance: 0.25,
                critMult: 2.7,
                status: 0.11,
                damage: 20,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.4
                    },
                    {
                        type: 'Slash',
                        percent: 0.265
                    },
                    {
                        type: 'Puncture',
                        percent: 0.335
                    }
                ]
            }
        ]
    },
    {
        name: 'TWIN GREMLINS',
        img: require('../assets/itemimages/twin-gremlins.png'),
        mastery: 5,
        type: [
            'PISTOL'
        ],
        polarities: [
            'madurai'
        ],
        noise: 'Alarming',
        reload: 1.1,
        magSize: 30,
        maxAmmo: 210,
        disposition: 5,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 5,
                accuracy: 16.7,
                punchThrough: 0,
                critChance: 0.15,
                critMult: 1.5,
                status: 0.15,
                damage: 36,
                split: [
                    {
                        type: 'Impact',
                        percent: 1/3
                    },
                    {
                        type: 'Slash',
                        percent: 1/3
                    },
                    {
                        type: 'Puncture',
                        percent: 1/3
                    }
                ]
            }
        ]
    },
    {
        name: 'TWIN KOHMAK',
        img: require('../assets/itemimages/twin-kohmak.png'),
        mastery: 10,
        type: [
            'PISTOL'
        ],
        polarities: [
            'vazarin'
        ],
        noise: 'Alarming',
        reload: 2.2,
        magSize: 80,
        maxAmmo: 240,
        disposition: 3,
        modes: [
            {
                name: 'Single Pellet',
                trigger: 'Auto-Spool',
                fireRate: 6.67,
                accuracy: 3,
                punchThrough: 1.5,
                critChance: 0.11,
                critMult: 2,
                status: 0.23,
                falloffMin: 12,
                falloffMax: 24,
                damage: 30,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.2
                    },
                    {
                        type: 'Slash',
                        percent: 0.6
                    },
                    {
                        type: 'Puncture',
                        percent: 0.2
                    }
                ]
            },
            {
                name: 'Fully Spooled',
                trigger: 'Auto-Spool',
                pellets: 5,
                fireRate: 6.67,
                accuracy: 3,
                punchThrough: 1.5,
                critChance: 0.11,
                critMult: 2,
                status: 0.23,
                ammoCost: 1.67,
                falloffMin: 12,
                falloffMax: 24,
                damage: 150,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.2
                    },
                    {
                        type: 'Slash',
                        percent: 0.6
                    },
                    {
                        type: 'Puncture',
                        percent: 0.2
                    }
                ]
            }
        ]
    },
    {
        name: 'TWIN ROGGA',
        img: require('../assets/itemimages/twin-rogga.png'),
        mastery: 9,
        type: [
            'PISTOL'
        ],
        polarities: [
            'naramon',
            'madurai'
        ],
        noise: 'Alarming',
        reload: 1.5,
        magSize: 2,
        maxAmmo: 120,
        disposition: 3,
        modes: [
            {
                trigger: 'Semi-Auto',
                pellets: 15,
                fireRate: 2.5,
                accuracy: 4.3,
                punchThrough: 0,
                critChance: 0.1,
                critMult: 2,
                status: 0.33,
                falloffMin: 10,
                falloffMax: 20,
                damage: 705,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.4
                    },
                    {
                        type: 'Slash',
                        percent: 0.1
                    },
                    {
                        type: 'Puncture',
                        percent: 0.5
                    }
                ]
            }
        ]
    },
    {
        name: 'TWIN VIPERS',
        img: require('../assets/itemimages/twin-vipers.png'),
        mastery: 5,
        type: [
            'PISTOL'
        ],
        polarities: [
            'naramon'
        ],
        noise: 'Alarming',
        reload: 2,
        magSize: 28,
        maxAmmo: 420,
        disposition: 5,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 25,
                accuracy: 15.4,
                punchThrough: 0,
                critChance: 0.15,
                critMult: 1.5,
                status: 0.11,
                damage: 17,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.6
                    },
                    {
                        type: 'Slash',
                        percent: 0.3
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
        name: 'TWIN VIPERS WRAITH',
        img: require('../assets/itemimages/twin-vipers-wraith.png'),
        mastery: 7,
        type: [
            'PISTOL'
        ],
        polarities: [
            'naramon'
        ],
        noise: 'Alarming',
        reload: 2,
        magSize: 40,
        maxAmmo: 440,
        disposition: 5,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 25,
                accuracy: 11.1,
                punchThrough: 0,
                ammoCost: 0,
                critChance: 0.19,
                critMult: 2,
                status: 0.09,
                damage: 18,
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
            }
        ]
    },
    {
        name: 'TYSIS',
        img: require('../assets/itemimages/tysis.png'),
        mastery: 9,
        type: [
            'PISTOL'
        ],
        polarities: [],
        noise: 'Alarming',
        reload: 1.2,
        magSize: 11,
        maxAmmo: 210,
        disposition: 5,
        modes: [
            {
                trigger: 'Semi-Auto',
                fireRate: 2.5,
                accuracy: 100,
                punchThrough: 0,
                critChance: 0.03,
                critMult: 1.5,
                status: 0.5,
                damage: 79,
                split: [
                    {
                        type: 'Corrosive',
                        percent: 1
                    }
                ]
            }
        ]
    },
    {
        name: 'VASTO',
        img: require('../assets/itemimages/vasto.png'),
        mastery: 4,
        type: [
            'PISTOL'
        ],
        polarities: [
            'madurai'
        ],
        noise: 'Alarming',
        reload: 1,
        magSize: 6,
        maxAmmo: 210,
        disposition: 5,
        modes: [
            {
                trigger: 'Semi-Auto',
                fireRate: 5,
                accuracy: 16,
                punchThrough: 0,
                critChance: 0.2,
                critMult: 1.8,
                status: 0.08,
                damage: 58,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.25
                    },
                    {
                        type: 'Slash',
                        percent: 0.5
                    },
                    {
                        type: 'Puncture',
                        percent: 0.25
                    }
                ]
            }
        ]
    },
    {
        name: 'VASTO PRIME',
        img: require('../assets/itemimages/vasto-prime.png'),
        mastery: 10,
        type: [
            'PISTOL'
        ],
        polarities: [
            'madurai',
            'madurai'
        ],
        noise: 'Alarming',
        reload: 1,
        magSize: 6,
        disposition: 5,
        modes: [
            {
                trigger: 'Semi-Auto',
                fireRate: 5.42,
                accuracy: 16,
                punchThrough: 0,
                critChance: 0.22,
                critMult: 2.4000001,
                status: 0.22,
                damage: 66,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.15
                    },
                    {
                        type: 'Slash',
                        percent: 0.7
                    },
                    {
                        type: 'Puncture',
                        percent: 0.15
                    }
                ]
            }
        ]
    },
    {
        name: 'VAYKOR MARELOK',
        img: require('../assets/itemimages/vaykor-marelok.png'),
        mastery: 10,
        type: [
            'PISTOL',
            'MARELOK'
        ],
        polarities: [
            'madurai',
            'vazarin'
        ],
        noise: 'Alarming',
        reload: 1.67,
        magSize: 10,
        disposition: 1,
        modes: [
            {
                trigger: 'Semi-Auto',
                fireRate: 2,
                accuracy: 10,
                punchThrough: 0,
                critChance: 0.2,
                critMult: 1.5,
                status: 0.35,
                damage: 160,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.6
                    },
                    {
                        type: 'Slash',
                        percent: 0.3
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
        name: 'VIPER',
        img: require('../assets/itemimages/viper.png'),
        mastery: 4,
        type: [
            'PISTOL',
            'VIPER'
        ],
        polarities: [
            'madurai'
        ],
        noise: 'Alarming',
        reload: 0.7,
        magSize: 14,
        maxAmmo: 420,
        disposition: 5,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 14.38,
                accuracy: 15.4,
                punchThrough: 0,
                critChance: 0.15,
                critMult: 1.5,
                status: 0.11,
                damage: 17,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.6
                    },
                    {
                        type: 'Slash',
                        percent: 0.3
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
        name: 'VIPER WRAITH',
        img: require('../assets/itemimages/viper-wraith.png'),
        mastery: 4,
        type: [
            'PISTOL',
            'VIPER'
        ],
        polarities: [
            'naramon'
        ],
        noise: 'Alarming',
        reload: 0.8,
        magSize: 20,
        maxAmmo: 420,
        disposition: 5,
        modes: [
            {
                trigger: 'Auto',
                fireRate: 14.38,
                accuracy: 28.6,
                punchThrough: 0,
                critChance: 0.19,
                critMult: 2,
                status: 0.09,
                damage: 18,
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
            }
        ]
    },
    {
        name: 'ZAKTI',
        img: require('../assets/itemimages/zakti.png'),
        mastery: 10,
        type: [
            'PISTOL',
            'EXPLOSIVE'
        ],
        polarities: [
            'naramon',
            'naramon'
        ],
        noise: 'Alarming',
        reload: 0.8,
        magSize: 3,
        maxAmmo: 210,
        disposition: 3,
        modes: [
            {
                name: 'Total',
                trigger: 'Semi-Auto',
                fireRate: 5,
                accuracy: 26.7,
                punchThrough: 0,
                critChance: 0.02,
                critMult: 1.5,
                status: 0.2,
                damage: 110,
                split: [
                    {
                        type: 'Gas',
                        percent: 80/110
                    },
                    {
                        type: 'Impact',
                        percent: 12/110
                    },
                    {
                        type: 'Puncture',
                        percent: 18/110
                    }
                ]
            },
            {
                name: 'Gas Cloud',
                trigger: 'Semi-Auto',
                fireRate: 5,
                accuracy: 26.7,
                punchThrough: 0,
                critChance: 0.02,
                critMult: 1.5,
                status: 0.2,
                damage: 30,
                split: [
                    {
                        type: 'Gas',
                        percent: 1
                    },
                ]
            },
            {
                name: 'Dart',
                trigger: 'Semi-Auto',
                fireRate: 5,
                accuracy: 26.7,
                punchThrough: 0,
                critChance: 0.02,
                critMult: 1.5,
                status: 0.2,
                damage: 30,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.4
                    },
                    {
                        type: 'Puncture',
                        percent: 0.6
                    }
                ]
            }
        ]
    },
    {
        name: 'ZYLOK',
        img: require('../assets/itemimages/zylok.png'),
        mastery: 6,
        type: [
            'PISTOL'
        ],
        polarities: [],
        noise: 'Alarming',
        reload: 1.2,
        magSize: 8,
        disposition: 3,
        modes: [
            {
                trigger: 'Duplex',
                fireRate: 1.5,
                accuracy: 23.5,
                punchThrough: 0,
                critChance: 0.08,
                critMult: 2,
                status: 0.26,
                damage: 140,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.32+120
                    },
                    {
                        type: 'Slash',
                        percent: 0.56
                    },
                    {
                        type: 'Puncture',
                        percent: 0.12
                    }
                ]
            }
        ]
    }
]

export default secondaryWeapons;