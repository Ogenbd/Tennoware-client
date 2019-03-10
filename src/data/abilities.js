const abilities = {
    ash: [
        {
            name: 'Shuriken',
            img: require('../assets/itemimages/shuriken.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 500,
                            icon: require('../assets/dynamic/damage/Slash.png')
                        }
                    ],
                    none: [
                        {
                            name: 'Shurikens',
                            base: 2
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                },
            ]
        },
        {
            name: 'Smoke Screen',
            img: require('../assets/itemimages/smokescreen.png'),
            details: [
                {
                    duration: [
                        {
                            name: 'Invisibility duration',
                            suffix: 's',
                            base: 8
                        }
                    ],
                    range: [
                        {
                            name: 'Stagger radius',
                            suffix: 'm',
                            base: 2
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 35
                        }
                    ],
                },
            ]
        },
        {
            name: 'Teleport',
            img: require('../assets/itemimages/teleport.png'),
            details: [
                {
                    range: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 60
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                },
            ]
        },
        {
            name: 'Blade Storm',
            img: require('../assets/itemimages/bladestorm.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 2000,
                            icon: require('../assets/dynamic/damage/True.png')
                        }
                    ],
                    range: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 50
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy / Mark',
                            base: 12
                        },
                        {
                            name: 'Energy / Mark (Invisible)',
                            base: 6
                        }
                    ],
                },
            ]
        },
    ],
    atlas: [
        {
            name: 'Landslide',
            img: require('../assets/itemimages/landslide.png'),
            details: [
                {
                    strength: [
                        {
                            name: '1st hit damage',
                            base: 350,
                            icon: require('../assets/dynamic/damage/Impact.png')
                        },
                        {
                            name: '2nd hit damage',
                            base: 700,
                            icon: require('../assets/dynamic/damage/Impact.png')
                        },
                        {
                            name: '3rd+ hit damage',
                            base: 1400,
                            icon: require('../assets/dynamic/damage/Impact.png')
                        },
                    ],
                    exception: [
                        {
                            name: 'Combo window',
                            suffix: 's',
                            base: 1
                        }
                    ],
                    range: [
                        {
                            name: '1st hit radius',
                            suffix: 'm',
                            base: 2
                        },
                        {
                            name: '2nd hit radius',
                            suffix: 'm',
                            base: 4
                        },
                        {
                            name: '3rd+ hit radius',
                            suffix: 'm',
                            base: 6
                        },
                    ],
                    none: [
                        {
                            name: 'Dash range',
                            suffix: 'm',
                            base: 15
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy cost of 1st hit',
                            base: 25
                        },
                        {
                            name: 'Energy cost of 2nd hit',
                            base: 12.5
                        },
                        {
                            name: 'Energy cost of 3rd+ hit',
                            base: 6.25
                        },
                    ],
                }
            ]
        },
        {
            name: 'Tectonics',
            img: require('../assets/itemimages/tectonics.png'),
            details: [
                {
                    armor: [
                        {
                            name: 'Health',
                            base: 1500,
                            mult: 5
                        }
                    ],
                    strength: [
                        {
                            name: 'Boulder roll damage',
                            suffix: '/s',
                            icon: require('../assets/dynamic/damage/Impact.png'),
                            base: 600
                        },
                        {
                            name: 'Boulder explosion damage',
                            icon: require('../assets/dynamic/damage/Puncture.png'),
                            base: 500
                        },
                    ],
                    range: [
                        {
                            name: 'Boulder explosion radius',
                            suffix: 'm',
                            base: 5
                        }
                    ],
                    none: [
                        {
                            name: 'Invulnerability duration',
                            suffix: 's',
                            base: 4
                        },
                        {
                            name: 'Boulder roll distance',
                            suffix: 'm',
                            base: 15
                        },
                        {
                            name: 'Petrified boulder roll distance',
                            suffix: 'm',
                            base: 30
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        }
                    ],
                }
            ]
        },
        {
            name: 'Petrify',
            img: require('../assets/itemimages/petrify.png'),
            details: [
                {
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 20
                        }
                    ],
                    range: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 15
                        }
                    ],
                    none: [
                        {
                            name: 'Angle',
                            suffix: '°',
                            base: 60
                        },
                        {
                            name: 'Damage vulnerability',
                            suffix: '%',
                            base: 50
                        },
                        {
                            name: 'Rubble drop per enemy',
                            base: 1
                        },
                        {
                            name: 'Rumbler heal',
                            suffix: '%',
                            base: 100
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 75
                        }
                    ],
                }
            ]
        },
        {
            name: 'Rumblers',
            img: require('../assets/itemimages/rumblers.png'),
            details: [
                {
                    exception: [
                        {
                            name: 'Rumbler armor',
                            base: 500
                        },
                        {
                            name: 'Rumbler health',
                            base: 1200
                        },
                        {
                            name: 'Speed',
                            base: 1
                        },
                    ],
                    strength: [
                        {
                            name: 'Melee damage',
                            base: 2000,
                            icon: require('../assets/dynamic/damage/Impact.png')
                        },
                        {
                            name: 'Rock throw damage',
                            base: 500,
                            icon: require('../assets/dynamic/damage/Impact.png')
                        },
                        {
                            name: 'Explosion damage',
                            base: 1250,
                            icon: require('../assets/dynamic/damage/Blast.png')
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 45
                        }
                    ],
                    range: [
                        {
                            name: 'Petrify radius',
                            suffix: 'm',
                            base: 6
                        },
                        {
                            name: 'Explosion radius',
                            suffix: 'm',
                            base: 6
                        },
                    ],
                    none: [
                        {
                            name: 'Rumblers',
                            base: 2
                        },
                        {
                            name: 'Petrify duration',
                            suffix: 's',
                            base: 10
                        },
                        {
                            name: 'Rubble on death',
                            base: 1
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 100
                        }
                    ],
                }
            ]
        }
    ],
    banshee: [
        {
            name: 'Sonic Boom',
            img: require('../assets/itemimages/sonicboom.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 50,
                            icon: require('../assets/dynamic/damage/Impact.png')
                        },
                    ],
                    range: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 15
                        }
                    ],
                    none: [
                        {
                            name: 'Angle',
                            suffix: '°',
                            base: 180
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                }
            ]
        },
        {
            name: 'Sonar',
            img: require('../assets/itemimages/sonar.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage Multiplier',
                            suffix: 'x',
                            base: 5
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 30
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 35
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        }
                    ],
                }
            ]
        },
        {
            name: 'Silence',
            img: require('../assets/itemimages/silence.png'),
            details: [
                {
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 30
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 20
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 75
                        }
                    ],
                }
            ]
        },
        {
            name: 'Sound Quake',
            img: require('../assets/itemimages/soundquake.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage/s',
                            base: 200,
                            icon: require('../assets/dynamic/damage/Blast.png')
                        },
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 20
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                    channel: [
                        {
                            name: 'Energy drain/s',
                            base: 12
                        }
                    ]
                }
            ]
        },
    ],
    baruuk: [
        {
            name: 'Elude',
            img: require('../assets/itemimages/elude.png'),
            details: [
                {
                    exception: [
                        {
                            name: 'Angle',
                            base: 180
                        },
                    ],
                    channel: [
                        {
                            name: 'Energy drain/s',
                            base: 2.5
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Activation Cost',
                            base: 25
                        },
                    ],
                },
            ]
        },
        {
            name: 'Lull',
            img: require('../assets/itemimages/lull.png'),
            details: [
                {
                    duration: [
                        {
                            name: 'Wave duration',
                            suffix: 's',
                            base: 5
                        },
                        {
                            name: 'Sleep duration',
                            suffix: 's',
                            base: 25
                        },
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 25
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        },
                    ],
                }
            ]
        },
        {
            name: 'Desolate Hands',
            img: require('../assets/itemimages/desolatehands.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 250,
                        },
                        {
                            name: 'Charges',
                            base: 8,
                        },
                    ],
                    range: [
                        {
                            name: 'Seek radius',
                            suffix: 'm',
                            base: 4
                        },
                        {
                            name: 'Seek radius /w Elude',
                            suffix: 'm',
                            base: 8
                        },
                    ],
                    none: [
                        {
                            name: 'Explosion Radius',
                            suffix: 'm',
                            base: 3
                        },
                        {
                            name: 'Damage reduction / charge',
                            suffix: '%',
                            base: 10
                        },
                        {
                            name: 'Maximum damage reduction',
                            suffix: '%',
                            base: 90
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 75
                        },
                    ],
                }
            ]
        },
        {
            name: 'Serene Storm',
            img: require('../assets/itemimages/serenestorm.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 250,
                        }
                    ],
                    exception: [
                        {
                            name: 'Damage reduction while active',
                            suffix: '%',
                            base: 25,
                        }
                    ]
                }
            ]
        },
    ],
    chroma: [
        {
            name: 'Spectral Scream',
            img: require('../assets/itemimages/spectralscream.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 200
                        },
                    ],
                    none: [
                        {
                            name: 'Status chance',
                            suffix: '%',
                            base: 60
                        }
                    ],
                    range: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 10
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 10
                        }
                    ],
                    channel: [
                        {
                            name: 'Energy drain/s',
                            base: 3
                        }
                    ],
                }
            ]
        },
        {
            name: 'Elemental Ward',
            img: require('../assets/itemimages/elementalward.png'),
            details: [
                {
                    mode: 'Heat',
                    strength: [
                        {
                            name: 'Damage/s',
                            base: 100,
                            icon: require('../assets/dynamic/damage/Heat.png'),
                        },
                        {
                            name: 'Health bonus',
                            base: 200,
                            suffix: '%'
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 25
                        }
                    ],
                    range: [
                        {
                            name: 'Health Aura radius',
                            suffix: 'm',
                            base: 12
                        }
                    ],
                    none: [
                        {
                            name: 'Status chance',
                            suffix: '%',
                            base: 10
                        },
                        {
                            name: 'Burn aura radius',
                            suffix: 'm',
                            base: 5
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        }
                    ],
                },
                {
                    mode: 'Electricity',
                    strength: [
                        {
                            name: 'Damage reflection multiplier',
                            base: 10,
                            suffix: 'x'
                        },
                        {
                            name: 'Shield bonus',
                            base: 100,
                            suffix: '%'
                        },
                        {
                            name: 'Status chance',
                            base: 25,
                            suffix: '%'
                        },
                        {
                            name: 'Minimum arc damage',
                            base: 200,
                            icon: require('../assets/dynamic/damage/Electricity.png')
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 25
                        }
                    ],
                    range: [
                        {
                            name: 'Aura radius',
                            suffix: 'm',
                            base: 12
                        },
                        {
                            name: 'Discharge range',
                            suffix: 'm',
                            base: 10
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        }
                    ],
                },
                {
                    mode: 'Toxin',
                    strength: [
                        {
                            name: 'Damage chance for 5% of enemy max health /s',
                            base: 50,
                            suffix: '%'
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 25
                        },
                        {
                            name: 'Holster rate bonus',
                            suffix: '%',
                            base: 35
                        },
                        {
                            name: 'Reload speed bonus',
                            suffix: '%',
                            base: 35
                        },
                    ],
                    range: [
                        {
                            name: 'Aura radius',
                            suffix: 'm',
                            base: 12
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        }
                    ],
                },
                {
                    mode: 'Cold',
                    strength: [
                        {
                            name: 'Damage reflection multiplier',
                            base: 3,
                            suffix: 'x'
                        },
                        {
                            name: 'Armor bonus',
                            base: 150,
                            suffix: '%'
                        },
                        {
                            name: 'Status chance',
                            base: 25,
                            suffix: '%'
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 25
                        },
                    ],
                    range: [
                        {
                            name: 'Aura radius',
                            suffix: 'm',
                            base: 12
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        }
                    ],
                },
            ]
        },
        {
            name: 'Vex Armor',
            img: require('../assets/itemimages/vexarmor.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Max armor bonus',
                            suffix: '%',
                            base: 350
                        },
                        {
                            name: 'Max damage bonus',
                            suffix: '%',
                            base: 275
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 25
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 18
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 75
                        }
                    ],
                }
            ]
        },
        {
            name: 'Effigy',
            img: require('../assets/itemimages/effigy.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage/tick',
                            base: 400
                        },
                        {
                            name: 'Sentry health',
                            base: 8000
                        },
                    ],
                    none: [
                        {
                            name: 'Chance for an enemy to drop 100% extra credits',
                            suffix: '%',
                            base: 60
                        },
                        {
                            name: 'Tick/s',
                            base: 5
                        },
                        {
                            name: 'Attack range',
                            suffix: 'm',
                            base: 20
                        },
                        {
                            name: 'Stun radius',
                            suffix: 'm',
                            base: 30
                        },
                        {
                            name: 'Knockback radius',
                            suffix: 'm',
                            base: 5
                        },
                        {
                            name: 'Speed increase',
                            suffix: '%',
                            base: 20
                        },
                        {
                            name: 'Armor reduction',
                            suffix: '%',
                            base: 50
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        }
                    ],
                    channel: [
                        {
                            name: 'Energy drain/s',
                            base: 10
                        }
                    ]
                }
            ]
        },
    ],
    ember: [
        {
            name: 'Fireball',
            img: require('../assets/itemimages/fireball.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Initial damage',
                            base: 400,
                            icon: require('../assets/dynamic/damage/Heat.png')
                        },
                        {
                            name: 'Area damage',
                            base: 150,
                            icon: require('../assets/dynamic/damage/Heat.png')
                        },
                    ],
                    none: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 5
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                }
            ]
        },
        {
            name: 'Accelerant',
            img: require('../assets/itemimages/accelerant.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage multiplier',
                            suffix: 'x',
                            base: 2.5
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 30
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 20
                        }
                    ],
                    none: [
                        {
                            name: 'Cast speed bonus',
                            suffix: '%',
                            base: 50
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        }
                    ],
                }
            ]
        },
        {
            name: 'Fire Blast',
            img: require('../assets/itemimages/fireblast.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Wave damage',
                            base: 200,
                            icon: require('../assets/dynamic/damage/Heat.png')
                        },
                        {
                            name: 'Ring damage/s',
                            base: 225,
                            icon: require('../assets/dynamic/damage/Heat.png')
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 20
                        }
                    ],
                    none: [
                        {
                            name: 'Wave radius',
                            suffix: 'm',
                            base: 15
                        },
                        {
                            name: 'Ring radius',
                            suffix: 'm',
                            base: 4
                        },
                        {
                            name: 'Bonus weapon heat damage',
                            suffix: '%',
                            base: 50
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 75
                        }
                    ],
                }
            ]
        },
        {
            name: 'World On Fire',
            img: require('../assets/itemimages/worldonfire.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage at 0%',
                            base: 400,
                            icon: require('../assets/dynamic/damage/Heat.png')
                        },
                        {
                            name: 'Damage at 100%',
                            base: 800,
                            icon: require('../assets/dynamic/damage/Heat.png')
                        },
                        {
                            name: 'Status chance',
                            suffix: '%',
                            base: 35,
                        },
                    ],
                    range: [
                        {
                            name: 'Radius at 0%',
                            suffix: 'm',
                            base: 15
                        },
                        {
                            name: 'Radius at 100%',
                            suffix: 'm',
                            base: 7.5
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        }
                    ],
                    channel: [
                        {
                            name: 'Energy drain/s at 0%',
                            base: 3
                        },
                        {
                            name: 'Energy drain/s at 100%',
                            base: 6
                        },
                    ],
                }
            ]
        },
    ],
    equinox: [
        {
            name: 'Metamorphosis',
            img: require('../assets/itemimages/metamorphosis.png'),
            details: [
                {
                    mode: 'Night',
                    strength: [
                        {
                            name: 'Bonus armor',
                            base: 250
                        },
                        {
                            name: 'Bonus shields',
                            base: 150
                        },
                    ],
                    duration: [
                        {
                            name: 'Duraion',
                            suffix: 's',
                            base: 25
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                },
                {
                    mode: 'Day',
                    strength: [
                        {
                            name: 'Damage bonus',
                            suffix: '%',
                            base: 25
                        },
                        {
                            name: 'Speed bonus',
                            suffix: '%',
                            base: 15
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 25
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                },
            ]
        },
        {
            name: 'Rest & Rage',
            img: require('../assets/itemimages/restrage.png'),
            details: [
                {
                    mode: 'Rest',
                    none: [
                        {
                            name: 'Wakeup health threshold',
                            suffix: '%',
                            base: 50
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 22
                        }
                    ],
                    range: [
                        {
                            name: 'Cast range',
                            suffix: 'm',
                            base: 50
                        },
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 5
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                },
                {
                    mode: 'Rage',
                    strength: [
                        {
                            name: 'Enemy damage vulnerability',
                            suffix: '%',
                            base: 50
                        },
                        {
                            name: 'Enemy speed bonus',
                            suffix: '%',
                            base: 20
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 22
                        }
                    ],
                    range: [
                        {
                            name: 'Cast range',
                            suffix: 'm',
                            base: 50
                        },
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 5
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                },
            ]
        },
        {
            name: 'Pacify & Provoke',
            img: require('../assets/itemimages/pacifyprovoke.png'),
            details: [
                {
                    mode: 'Pacify',
                    exception: [
                        {
                            name: 'Enemy damage',
                            suffix: '%',
                            base: 50
                        },
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 16
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Activation energy cost',
                            base: 10
                        },
                        {
                            name: 'Energy drain / enemy /s',
                            base: 0.5
                        }
                    ],
                },
                {
                    mode: 'Provoke',
                    exception: [
                        {
                            name: 'Power strength bonus',
                            suffix: '%',
                            base: 20
                        },
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 16
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Activation energy cost',
                            base: 10
                        },
                        {
                            name: 'Energy / ability cast',
                            base: 0.5
                        }
                    ],
                },
            ]
        },
        {
            name: 'Mend & Maim',
            img: require('../assets/itemimages/mendmaim.png'),
            details: [
                {
                    mode: 'Mend',
                    strength: [
                        {
                            name: 'Shields / Kill',
                            base: 25
                        },
                    ],
                    none: [
                        {
                            name: 'Hitpoint conversion',
                            suffix: '%',
                            base: 75
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 18
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        }
                    ],
                    channel: [
                        {
                            name: 'Energy drain/s',
                            base: 3.5
                        }
                    ],
                },
                {
                    mode: 'Maim',
                    strength: [
                        {
                            name: 'Aura damage',
                            base: 150,
                            icon: require('../assets/dynamic/damage/Slash.png')
                        },
                    ],
                    none: [
                        {
                            name: 'Damage conversion',
                            suffix: '%',
                            base: 75
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 18
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        }
                    ],
                    channel: [
                        {
                            name: 'Energy drain/s',
                            base: 3.5
                        }
                    ],
                }
            ]
        },
    ],
    excalibur: [
        {
            name: 'Slash Dash',
            img: require('../assets/itemimages/slashdash.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 250
                        },
                    ],
                    range: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 12
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                }
            ]
        },
        {
            name: 'Radial Blind',
            img: require('../assets/itemimages/radialblind.png'),
            details: [
                {
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 15
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 25
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        }
                    ],
                }
            ]
        },
        {
            name: 'Radial Javelin',
            img: require('../assets/itemimages/radialjavelin.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 1000
                        },
                    ],
                    none: [
                        {
                            name: 'Javelins',
                            base: 12
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 25
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 75
                        }
                    ],
                }
            ]
        },
        {
            name: 'Exalted Blade',
            img: require('../assets/itemimages/exaltedblade.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 250
                        },
                    ],
                    duration: [
                        {
                            name: 'Blind duration',
                            suffix: 's',
                            base: 6
                        }
                    ],
                    range: [
                        {
                            name: 'Blind radius',
                            suffix: 'm',
                            base: 5
                        }
                    ],
                    none: [
                        {
                            name: 'Wave speed',
                            suffix: 'm/s',
                            base: 15
                        },
                        {
                            name: 'Wave range',
                            suffix: 'm',
                            base: 40
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                    channel: [
                        {
                            name: 'Energy drain/s',
                            base: 2.5
                        }
                    ]
                }
            ]
        }
    ],
    frost: [
        {
            name: 'Freeze',
            img: require('../assets/itemimages/freeze.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Initial damage',
                            base: 350,
                            icon: require('../assets/dynamic/damage/Cold.png')
                        },
                        {
                            name: 'Area damage',
                            base: 150,
                            icon: require('../assets/dynamic/damage/Cold.png')
                        },
                    ],
                    duration: [
                        {
                            name: 'Freeze duration',
                            suffix: 's',
                            base: 15
                        },
                        {
                            name: 'Ice patch duration',
                            suffix: 's',
                            base: 12
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                },
            ]
        },
        {
            name: 'Ice wave',
            img: require('../assets/itemimages/icewave.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 700,
                            icon: require('../assets/dynamic/damage/Cold.png')
                        },
                    ],
                    range: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 20
                        },
                        {
                            name: 'Initial width',
                            suffix: 'm',
                            base: 3
                        },
                    ],
                    exception: [
                        {
                            name: 'Angle',
                            suffix: '°',
                            base: 45
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        }
                    ],
                }
            ]
        },
        {
            name: 'Snow Globe',
            img: require('../assets/itemimages/snowglobe.png'),
            details: [
                {
                    armor: [
                        {
                            name: 'Globe health',
                            base: 3500,
                            mult: 5
                        },
                    ],
                    strength: [
                        {
                            name: 'Globe explosion',
                            base: 150,
                            icon: require('../assets/dynamic/damage/Cold.png')
                        },
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 5
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        },
                    ],
                }
            ]
        },
        {
            name: 'Avalanche',
            img: require('../assets/itemimages/avalanche.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Initial damage',
                            base: 1500,
                            icon: require('../assets/dynamic/damage/Cold.png')
                        },
                        {
                            name: 'Explosion damage',
                            base: 400,
                            icon: require('../assets/dynamic/damage/Cold.png')
                        },
                        {
                            name: 'Armor reduction',
                            suffix: '%',
                            base: 40
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 8
                        }
                    ],
                    range: [
                        {
                            name: 'Freeze radius',
                            suffix: 'm',
                            base: 15
                        },
                        {
                            name: 'Explosion radius',
                            suffix: 'm',
                            base: 4.5
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 100
                        }
                    ],
                }
            ]
        },
    ],
    gara: [
        {
            name: 'Shattered Lash',
            img: require('../assets/itemimages/shatteredlash.png'),
            details: [
                {
                    mode: 'Tap',
                    strength: [
                        {
                            name: 'Damage',
                            base: 800,
                            icon: require('../assets/dynamic/damage/Puncture.png')
                        },
                    ],
                    range: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 10
                        }
                    ],
                    none: [
                        {
                            name: 'Thrust radius',
                            suffix: 'm',
                            base: 0.75
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                },
                {
                    mode: 'Hold',
                    strength: [
                        {
                            name: 'Damage',
                            base: 800,
                            icon: require('../assets/dynamic/damage/Slash.png')
                        },
                    ],
                    range: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 10
                        }
                    ],
                    none: [
                        {
                            name: 'Sweep arc',
                            suffix: '°',
                            base: 225
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                }
            ]
        },
        {
            name: 'Splinter Storm',
            img: require('../assets/itemimages/splinterstorm.png'),
            details: [
                {
                    exception: [
                        {
                            name: 'Damage reduction',
                            suffix: '%',
                            base: 70
                        },
                    ],
                    strength: [
                        {
                            name: 'Damage multiplier',
                            suffix: '%',
                            base: 35
                        },
                        {
                            name: 'Damage/s',
                            base: 250
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 22
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 2.5
                        },
                        {
                            name: 'Cast range',
                            suffix: 'm',
                            base: 30
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        }
                    ],
                }
            ]
        },
        {
            name: 'Spectrorage',
            img: require('../assets/itemimages/spectrorage.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Mirror damage',
                            base: 800
                        },
                        {
                            name: 'Collapse damage',
                            base: 1500
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 22
                        }
                    ],
                    range: [
                        {
                            name: 'Charm radius',
                            suffix: 'm',
                            base: 4
                        },
                        {
                            name: 'Number of mirrors',
                            base: 12
                        },
                        {
                            name: 'Collapse threshold',
                            base: 6
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 75
                        }
                    ],
                }
            ]
        },
        {
            name: 'Mass Vitrify',
            img: require('../assets/itemimages/massvitrify.png'),
            details: [
                {
                    armor: [
                        {
                            name: 'Ring segment health',
                            base: 1600,
                            mult: 5
                        },
                    ],
                    strength: [
                        {
                            name: 'Crystallized enemy damage multiplier',
                            suffix: '%',
                            base: 50
                        },
                    ],
                    duration: [
                        {
                            name: 'Wall expantion time',
                            suffix: 's',
                            base: 3
                        },
                        {
                            name: 'Enemy crystallization duration',
                            suffix: 's',
                            base: 16
                        },
                    ],
                    range: [
                        {
                            name: 'Initial ring radius',
                            suffix: 'm',
                            base: 2
                        },
                        {
                            name: 'Max ring radius',
                            suffix: 'm',
                            base: 11
                        },
                        {
                            name: 'Segment explosion radius',
                            suffix: 'm',
                            base: 8
                        },
                        {
                            name: 'Shatter explosion radius',
                            suffix: 'm',
                            base: 15
                        },
                    ],
                    none: [
                        {
                            name: 'Initial ring height',
                            suffix: 'm',
                            base: 3
                        },
                        {
                            name: 'Max ring height',
                            suffix: 'm',
                            base: 12
                        },
                        {
                            name: 'Enemy crystallization time',
                            suffix: 's',
                            base: 3
                        },
                        {
                            name: 'Ring segments',
                            base: 12
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 75
                        }
                    ],
                    channel: [
                        {
                            name: 'Initial energy drain/s',
                            base: 3
                        },
                        {
                            name: 'Max energy drain/s',
                            base: 5
                        },
                    ]
                }
            ]
        },
    ],
    garuda: [
        {
            name: 'Dread Mirror',
            img: require('../assets/itemimages/dreadmirror.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage conversion multiplier',
                            suffix: 'x',
                            base: 2,
                        },
                    ],
                    duration: [
                        {
                            name: 'Mirror duration',
                            suffix: 's',
                            base: 20
                        },
                    ],
                    range: [
                        {
                            name: 'Pounce range',
                            suffix: 'm',
                            base: 30
                        },
                        {
                            name: 'Dread heart explosion radius',
                            suffix: 'm',
                            base: 10
                        },
                    ],
                    none: [
                        {
                            name: 'Victim health to shield conversion',
                            suffix: '%',
                            base: 10,
                        },
                        {
                            name: 'Instant kill threshold',
                            suffix: '%',
                            base: 40,
                        },
                        {
                            name: 'Dread heart charge damage/s',
                            suffix: '%',
                            base: 50,
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        },
                        {
                            name: 'Dread heart charge energy/s',
                            base: 50
                        },
                    ],
                }
            ]
        },
        {
            name: 'Blood Alter',
            img: require('../assets/itemimages/bloodalter.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Health absorb/s',
                            suffix: '%',
                            base: 25,
                        },
                    ],
                    none: [
                        {
                            name: 'Damage/s',
                            suffix: '%',
                            base: 1,
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 15
                        },
                    ],
                    range: [
                        {
                            name: 'Pounce range',
                            suffix: 'm',
                            base: 30
                        },
                        {
                            name: 'Alter heal Radius',
                            suffix: 'm',
                            base: 8
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        },
                    ],
                }
            ]
        },
        {
            name: 'Bloodletting',
            img: require('../assets/itemimages/bloodletting.png'),
            details: [
                {
                    none: [
                        {
                            name: 'Health deduction',
                            suffix: '%',
                            base: 50
                        },
                    ],
                    exception: [
                        {
                            name: 'Energy gain',
                            suffix: '%',
                            base: 25
                        },
                    ],
                }
            ]
        },
        // 50% = 16%
        // 80% = 20%
        // 100% = 25%
        // 130% = 35%
        // 160% = 62%
        // 170% = 83%
        // 175(?)190(?)% = 100%
        {
            name: 'Seeking Talons',
            img: require('../assets/itemimages/seekingtalons.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 150,
                        },
                    ],
                    exception: [
                        {
                            name: 'Bleed chance',
                            suffix: '%',
                            base: 50,
                        },
                    ],
                    duration: [
                        {
                            name: 'Mark duration',
                            suffix: 's',
                            base: 10
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 100
                        },
                    ],
                }
            ]
        },
    ],
    harrow: [
        {
            name: 'Condemn',
            img: require('../assets/itemimages/condemn.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Shields / Enemy',
                            base: 150
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 6
                        }
                    ],
                    range: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 20
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                }
            ]
        },
        {
            name: 'Penance',
            img: require('../assets/itemimages/penance.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Lifesteal on hit',
                            suffix: '%',
                            base: 5
                        },
                        {
                            name: 'Fire rate bonus',
                            suffix: '%',
                            base: 35
                        },
                        {
                            name: 'Reload speed bonus',
                            suffix: '%',
                            base: 70
                        },
                    ],
                    duration: [
                        {
                            name: 'Base duration',
                            suffix: 's',
                            base: 4
                        },
                        {
                            name: 'Extra duration / 100 shields',
                            suffix: 's',
                            base: 1.54
                        },
                    ],
                    none: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 50
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        }
                    ],
                }
            ]
        },
        {
            name: 'Thurible',
            img: require('../assets/itemimages/thurible.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Energy conversion',
                            suffix: '%',
                            base: 10
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 35
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 20
                        }
                    ],
                    none: [
                        {
                            name: 'Headshot multiplier',
                            suffix: 'x',
                            base: 4
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                }
            ]
        },
        {
            name: 'Covenant',
            img: require('../assets/itemimages/covenant.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Critical Chance / 100 damage absorbed',
                            suffix: '%',
                            base: 1.5
                        },
                    ],
                    duration: [
                        {
                            name: 'Invulnerabilty duration',
                            suffix: 's',
                            base: 6
                        },
                        {
                            name: 'Critical chance buff duration',
                            suffix: 's',
                            base: 12
                        },
                    ],
                    none: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 50
                        },
                        {
                            name: 'Headshot multiplier',
                            suffix: 'x',
                            base: 4
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 100
                        }
                    ],
                }
            ]
        },
    ],
    hildryn: [
        {
            name: 'Balefire',
            img: require('../assets/itemimages/balefire.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 500,
                            icon: require('../assets/dynamic/damage/Electricity.png')
                        }
                    ],
                    range: [
                        {
                            name: 'Explosion Radius',
                            suffix: 'm',
                            base: 2
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Activation shield cost',
                            base: 50
                        },
                        {
                            name: 'Shields/Shot',
                            base: 100
                        },
                    ],
                }
            ]
        },
        {
            name: 'Shield Pillage',
            img: require('../assets/itemimages/shieldpillage.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Shield/Armor drain/Enemy',
                            suffix: '%',
                            base: 25,
                        }
                    ],
                    duration: [
                        {
                            name: 'Pulse duration',
                            suffix: 's',
                            base: 2
                        }
                    ],
                    range: [
                        {
                            name: 'Pulse max radius',
                            suffix: 'm',
                            base: 8
                        }
                    ],
                    none: [
                        {
                            name: 'Chance to cleanse status',
                            suffix: '%',
                            base: 100
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Shield cost',
                            base: 150
                        }
                    ],
                }
            ]
        },
        {
            name: 'Haven',
            img: require('../assets/itemimages/haven.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Ally shield capacity bonus',
                            base: 500,
                        },
                        {
                            name: 'Damage/s',
                            base: 200,
                            icon: require('../assets/dynamic/damage/Radiation.png')
                        },
                    ],
                    duration: [
                        {
                            name: 'Shield recharge rate',
                            suffix: '%',
                            base: 80
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 15
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Activation shield cost',
                            base: 250
                        }
                    ],
                    channel: [
                        {
                            name: 'Shield cost/Ally/s',
                            base: 5
                        },
                        {
                            name: 'Shield cost/Enemy/s',
                            base: 25
                        },
                    ],
                }
            ]
        },
        {
            name: 'Aegis Storm',
            img: require('../assets/itemimages/aegisstorm.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage /s',
                            base: 200,
                            icon: require('../assets/dynamic/damage/Radiation.png')
                        },
                        {
                            name: 'Slam damage',
                            base: 500,
                            icon: require('../assets/dynamic/damage/Impact.png')
                        },
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 15
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Activation shield cost',
                            base: 100
                        }
                    ],
                    channel: [
                        {
                            name: 'Shield cost/s',
                            base: 25
                        },
                        {
                            name: 'Shield cost/Enemy/s',
                            base: 25
                        },
                    ],
                }
            ]
        },
    ],
    hydroid: [
        {
            name: 'Tempest Barrage',
            img: require('../assets/itemimages/tempestbarrage.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Base damage',
                            base: 150,
                            icon: require('../assets/dynamic/damage/Impact.png')
                        },
                        {
                            name: 'Charged damage',
                            base: 300,
                            icon: require('../assets/dynamic/damage/Impact.png')
                        },
                    ],
                    duration: [
                        {
                            name: 'Base duration',
                            suffix: 's',
                            base: 5
                        },
                        {
                            name: 'Charged duration',
                            suffix: 's',
                            base: 10
                        },
                    ],
                    range: [
                        {
                            name: 'Explosion Radius',
                            suffix: 'm',
                            base: 5
                        }
                    ],
                    none: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 10
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Base energy',
                            base: 25
                        },
                        {
                            name: 'Charged energy',
                            base: 50
                        },
                    ],
                }
            ]
        },
        {
            name: 'Tidal Surge',
            img: require('../assets/itemimages/tidalsurge.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Initial damage',
                            base: 300,
                            icon: require('../assets/dynamic/damage/Impact.png')
                        },
                        {
                            name: 'Wave crash damage',
                            base: 300,
                            icon: require('../assets/dynamic/damage/Slash.png')
                        },
                    ],
                    duration: [
                        {
                            name: 'Speed',
                            suffix: 'm/s',
                            base: 30
                        }
                    ],
                    none: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 1
                        }
                    ],
                    range: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 6
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        }
                    ],
                }
            ]
        },
        {
            name: 'Undertow',
            img: require('../assets/itemimages/undertow.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage/s',
                            base: 25,
                            icon: require('../assets/dynamic/damage/Impact.png')
                        },
                        {
                            name: 'Damage increase/s',
                            suffix: '%',
                            base: 2
                        },
                    ],
                    range: [
                        {
                            name: 'Puddle radius',
                            suffix: 'm',
                            base: 4
                        },
                        {
                            name: 'Grab range',
                            suffix: 'm',
                            base: 15
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 15
                        },
                        {
                            name: 'Grab cost',
                            base: 15
                        },
                        {
                            name: 'Energy / 0.2m moved',
                            base: 1
                        },
                    ],
                    channel: [
                        {
                            name: 'Energy drain/s',
                            base: 2
                        }
                    ]
                }
            ]
        },
        {
            name: 'Tentacle Swarm',
            img: require('../assets/itemimages/tentacleswarm.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Contact damage',
                            base: 300,
                            icon: require('../assets/dynamic/damage/Magnetic.png')
                        },
                        {
                            name: 'Damage/s',
                            base: 200,
                            icon: require('../assets/dynamic/damage/True.png')
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 20
                        }
                    ],
                    range: [
                        {
                            name: 'Base radius',
                            suffix: 'm',
                            base: 5
                        },
                        {
                            name: 'Charged radius',
                            suffix: 'm',
                            base: 15
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Base energy',
                            base: 50
                        },
                        {
                            name: 'Charged energy',
                            base: 100
                        },
                    ],
                }
            ]
        },
    ],
    inaros: [
        {
            name: 'Desiccation',
            img: require('../assets/itemimages/desiccation.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 150,
                        },
                        {
                            name: 'Damage/s',
                            base: 8,
                        },
                    ],
                    none: [
                        {
                            name: 'Lifesteal',
                            suffix: '%',
                            base: 25
                        }
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 8
                        }
                    ],
                    range: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 15
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                }
            ]
        },
        {
            name: 'Devour',
            img: require('../assets/itemimages/devour.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Initial Damage',
                            base: 125,
                            icon: require('../assets/dynamic/damage/True.png')
                        },
                        {
                            name: 'Max Damage',
                            base: 250,
                            icon: require('../assets/dynamic/damage/True.png')
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 30
                        }
                    ],
                    range: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 50
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        }
                    ],
                }
            ]
        },
        {
            name: 'Sandstorm',
            img: require('../assets/itemimages/sandstorm.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 500,
                            icon: require('../assets/dynamic/damage/Slash.png')
                        },
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 15
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 75
                        }
                    ],
                    channel: [
                        {
                            name: 'Energy drain/s',
                            base: 10
                        }
                    ]
                }
            ]
        },
        {
            name: 'Scarab Swarm',
            img: require('../assets/itemimages/scarabswarm.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 200,
                            icon: require('../assets/dynamic/damage/Corrosive.png')
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 15
                        }
                    ],
                    range: [
                        {
                            name: 'Cast range',
                            suffix: 'm',
                            base: 30
                        },
                        {
                            name: 'Heal radius',
                            suffix: 'm',
                            base: 15
                        },
                    ],
                    none: [
                        {
                            name: 'Spread radius',
                            suffix: 'm',
                            base: 5
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                }
            ]
        },
    ],
    ivara: [
        {
            name: 'Quiver',
            img: require('../assets/itemimages/quiver.png'),
            details: [
                {
                    mode: 'Cloak',
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 12
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 2.5
                        }
                    ],
                    none: [
                        {
                            name: 'Max cloaks',
                            base: 3
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                },
                {
                    mode: 'Dashwire',
                    none: [
                        {
                            name: 'Zipline range',
                            suffix: 'm',
                            base: 100
                        },
                        {
                            name: 'Max ziplines',
                            base: 4
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                },
                {
                    mode: 'Noise',
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 20
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                },
                {
                    mode: 'Sleep',
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 10
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 6
                        }
                    ],
                    none: [
                        {
                            name: 'Wakeup health threshold',
                            suffix: '%',
                            base: 50
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                },
            ]
        },
        {
            name: 'Navigator',
            img: require('../assets/itemimages/navigator.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Max multiplier',
                            suffix: 'x',
                            base: 5,
                        },
                    ],
                    exception: [
                        {
                            name: 'Multiplier growth/s',
                            base: 1
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                    channel: [
                        {
                            name: 'Base energy/s',
                            base: 3
                        }
                    ],
                }
            ]
        },
        {
            name: 'Prowl',
            img: require('../assets/itemimages/prowl.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Headshot bonus',
                            suffix: '%',
                            base: 40,
                        },
                    ],
                    exception: [
                        {
                            name: 'Loot Chance',
                            suffix: '%',
                            base: 100
                        },
                    ],
                    inverse: [
                        {
                            name: 'Time to pickpocket',
                            suffix: 's',
                            base: 2.5
                        },
                    ],
                    range: [
                        {
                            name: 'Pickpocket radius',
                            suffix: 'm',
                            base: 4
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                    channel: [
                        {
                            name: 'Still energy drain/s',
                            base: 1
                        },
                        {
                            name: 'Moving energy drain/s',
                            base: 3
                        },
                    ]
                }
            ]
        },
        {
            name: 'Artemis Bow',
            img: require('../assets/itemimages/artemisbow.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 160,
                        },
                    ],
                    none: [
                        {
                            name: 'Arrows',
                            base: 7
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        },
                        {
                            name: 'Energy / Shot',
                            base: 15
                        },
                    ],
                }
            ]
        },
    ],
    khora: [
        {
            name: 'Whipclaw',
            img: require('../assets/itemimages/whipclaw.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 300,
                        },
                    ],
                    range: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 10
                        },
                        {
                            name: 'Explosion radius',
                            suffix: 'm',
                            base: 5
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                }
            ]
        },
        {
            name: 'Ensnare',
            img: require('../assets/itemimages/ensnare.png'),
            details: [
                {
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 15
                        }
                    ],
                    inverse: [
                        {
                            name: 'Propagation delay',
                            suffix: 's',
                            base: 0.5
                        }
                    ],
                    range: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 30
                        },
                        {
                            name: 'Propogation radius',
                            suffix: 'm',
                            base: 10
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        }
                    ],
                }
            ]
        },
        {
            name: 'Venari',
            img: require('../assets/itemimages/venari.png'),
            details: [
                {
                    mode: 'Attack',
                    strength: [
                        {
                            name: 'Speed Multiplier',
                            suffix: 'x',
                            base: 1.15,
                        },
                        {
                            name: 'Snare damage',
                            base: 350,
                            icon: require('../assets/dynamic/damage/Slash.png')
                        },
                    ],
                    none: [
                        {
                            name: 'Snare duration',
                            suffix: 's',
                            base: 2.5
                        },
                        {
                            name: 'Hits / snare',
                            base: 5
                        },
                        {
                            name: 'Snare cooldown',
                            suffix: 's',
                            base: 3
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Command energy',
                            base: 25
                        },
                        {
                            name: 'Revive energy',
                            base: 50
                        },
                    ],
                },
                {
                    mode: 'Protect',
                    strength: [
                        {
                            name: 'Speed Multiplier',
                            suffix: 'x',
                            base: 1.15,
                        },
                    ],
                    none: [
                        {
                            name: 'Tail whip cooldown',
                            suffix: 's',
                            base: 3
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Command energy',
                            base: 25
                        },
                        {
                            name: 'Revive energy',
                            base: 50
                        },
                    ],
                },
                {
                    mode: 'Heal',
                    strength: [
                        {
                            name: 'Speed Multiplier',
                            suffix: 'x',
                            base: 1.15,
                        },
                        {
                            name: 'Health/s',
                            base: 50,
                        },
                    ],
                    none: [
                        {
                            name: 'Heal aura radius',
                            suffix: 'm',
                            base: 10
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Command energy',
                            base: 25
                        },
                        {
                            name: 'Revive energy',
                            base: 50
                        },
                    ],
                }
            ]
        },
        {
            name: 'Strangledome',
            img: require('../assets/itemimages/strangledome.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage/s',
                            base: 250,
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 20
                        }
                    ],
                    range: [
                        {
                            name: 'Dome radius',
                            suffix: 'm',
                            base: 5
                        },
                        {
                            name: 'Grab radius',
                            suffix: 'm',
                            base: 10
                        },
                    ],
                    none: [
                        {
                            name: 'Dome limit',
                            base: 2
                        },
                        {
                            name: 'Damage multiplier',
                            suffix: 'x',
                            base: 2
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 100
                        }
                    ],
                }
            ]
        },
    ],
    limbo: [
        {
            name: 'Banish',
            img: require('../assets/itemimages/banish.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 250,
                            icon: require('../assets/dynamic/damage/Impact.png')
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 25
                        }
                    ],
                    range: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 35
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                }
            ]
        },
        {
            name: 'Stasis',
            img: require('../assets/itemimages/stasis.png'),
            details: [
                {
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 15
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        }
                    ],
                }
            ]
        },
        {
            name: 'Rift Surge',
            img: require('../assets/itemimages/riftsurge.png'),
            details: [
                {
                    duration: [
                        {
                            name: 'Surge duration',
                            suffix: 's',
                            base: 25
                        },
                        {
                            name: 'Banish duration',
                            suffix: 's',
                            base: 18
                        },
                    ],
                    range: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 25
                        },
                        {
                            name: 'Banish radius',
                            suffix: 'm',
                            base: 5
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        }
                    ],
                }
            ]
        },
        {
            name: 'Cataclysm',
            img: require('../assets/itemimages/cataclysm.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 500,
                            icon: require('../assets/dynamic/damage/Blast.png')
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 30
                        }
                    ],
                    range: [
                        {
                            name: 'Initial radius',
                            suffix: 'm',
                            base: 16
                        },
                        {
                            name: 'Final radius',
                            suffix: 'm',
                            base: 5
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 100
                        }
                    ],
                }
            ]
        },
    ],
    loki: [
        {
            name: 'Decoy',
            img: require('../assets/itemimages/decoy.png'),
            details: [
                {
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 25
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                }
            ]
        },
        {
            name: 'Invisibility',
            img: require('../assets/itemimages/invisibility.png'),
            details: [
                {
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 12
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        }
                    ],
                }
            ]
        },
        {
            name: 'Switch Teleport',
            img: require('../assets/itemimages/switchteleport.png'),
            details: [
                {
                    range: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 75
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                }
            ]
        },
        {
            name: 'Radial Disarm',
            img: require('../assets/itemimages/radialdisarm.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 500,
                            icon: require('../assets/dynamic/damage/Impact.png')
                        }
                    ],
                    range: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 20
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 100
                        }
                    ],
                }
            ]
        },
    ],
    mag: [
        {
            name: 'Pull',
            img: require('../assets/itemimages/pull.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 300,
                            icon: require('../assets/dynamic/damage/Magnetic.png')
                        },
                    ],
                    range: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 25
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                }
            ]
        },
        {
            name: 'Magnetize',
            img: require('../assets/itemimages/magnetize.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage multiplier',
                            suffix: 'x',
                            base: 2
                        },
                        {
                            name: 'Explosion damage',
                            base: 300,
                            icon: require('../assets/dynamic/damage/Magnetic.png')
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 15
                        }
                    ],
                    range: [
                        {
                            name: 'Field radius',
                            suffix: 'm',
                            base: 4
                        },
                        {
                            name: 'Explosion radius',
                            suffix: 'm',
                            base: 15
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        }
                    ],
                }
            ]
        },
        {
            name: 'Polarize',
            img: require('../assets/itemimages/polarize.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 400,
                            icon: require('../assets/dynamic/damage/Magnetic.png')
                        },
                        {
                            name: 'Damage multiplier',
                            suffix: 'x',
                            base: 2.5
                        },
                    ],
                    duration: [
                        {
                            name: 'Pulse expansion time',
                            suffix: 's',
                            base: 5
                        }
                    ],
                    range: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 8
                        }
                    ],
                    none: [
                        {
                            name: 'Pulse expansion speed',
                            suffix: 'm/s',
                            base: 5.9
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 75
                        }
                    ],
                }
            ]
        },
        {
            name: 'Crush',
            img: require('../assets/itemimages/crush.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 1500,
                            icon: require('../assets/dynamic/damage/Magnetic.png')
                        },
                        {
                            name: 'Shields gained / enemy / tick',
                            base: 25,
                            icon: require('../assets/dynamic/damage/Magnetic.png')
                        },
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 18
                        }
                    ],
                    none: [
                        {
                            name: 'Damage ticks',
                            base: 3
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 100
                        }
                    ],
                }
            ]
        },
    ],
    mesa: [
        {
            name: 'Ballistic Battery',
            img: require('../assets/itemimages/ballisticbattery.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage conversion',
                            suffix: '%',
                            base: 70,
                        },
                        {
                            name: 'Max converted damage / hit',
                            base: 140,
                        },
                        {
                            name: 'Max stored damage',
                            base: 1600,
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                }
            ]
        },
        {
            name: 'Shooting Gallery',
            img: require('../assets/itemimages/shootinggallery.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage bonus',
                            suffix: '%',
                            base: 25,
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 30
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 16
                        }
                    ],
                    none: [
                        {
                            name: 'Ally rotation interval',
                            suffix: 's',
                            base: 1.5
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        }
                    ],
                }
            ]
        },
        {
            name: 'Shatter Shield',
            img: require('../assets/itemimages/shattershield.png'),
            details: [
                {
                    exception: [
                        {
                            name: 'Ranged damage reduction',
                            base: 80,
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 25
                        }
                    ],
                    range: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 11
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 75
                        }
                    ],
                }
            ]
        },
        {
            name: 'Peacemaker',
            img: require('../assets/itemimages/peacemaker.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage bonus',
                            suffix: '%',
                            base: 150,
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                    channel: [
                        {
                            name: 'Energy drain/s',
                            base: 15
                        }
                    ]
                }
            ]
        },
    ],
    mirage: [
        {
            name: 'Hall of Mirrors',
            img: require('../assets/itemimages/hallofmirrors.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage by holograms',
                            suffix: '%',
                            base: 20,
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 25
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                }
            ]
        },
        {
            name: 'Slight of Hand',
            img: require('../assets/itemimages/slightofhand.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Explosion damage',
                            base: 200,
                        },
                    ],
                    duration: [
                        {
                            name: 'Trap duration',
                            suffix: 's',
                            base: 18
                        },
                        {
                            name: 'Blind duration',
                            suffix: 's',
                            base: 5
                        },
                    ],
                    none: [
                        {
                            name: 'Jewel duration',
                            suffix: 's',
                            base: 20
                        }
                    ],
                    range: [
                        {
                            name: 'Ability radius',
                            suffix: 'm',
                            base: 40
                        },
                        {
                            name: 'Jewel charm radius',
                            suffix: 'm',
                            base: 12
                        },
                        {
                            name: 'Explosion radius',
                            suffix: 'm',
                            base: 8
                        },
                        {
                            name: 'Blind radius',
                            suffix: 'm',
                            base: 8
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        }
                    ],
                },
            ]
        },
        {
            name: 'Eclipse',
            img: require('../assets/itemimages/eclipse.png'),
            details: [
                {
                    mode: 'Light',
                    strength: [
                        {
                            name: 'Damage bonus',
                            suffix: '%',
                            base: 200,
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 25
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                },
                {
                    mode: 'Shadows',
                    exception: [
                        {
                            name: 'Damage reduction',
                            suffix: '%',
                            base: 75,
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 25
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                }
            ]
        },
        {
            name: 'Prism',
            img: require('../assets/itemimages/prism.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Minimum damage',
                            base: 250,
                            icon: require('../assets/dynamic/damage/Radiation.png')
                        },
                        {
                            name: 'Maximum damage',
                            base: 500,
                            icon: require('../assets/dynamic/damage/Radiation.png')
                        },
                    ],
                    duration: [
                        {
                            name: 'Prism duration',
                            suffix: 's',
                            base: 12
                        },
                        {
                            name: 'Blind duration',
                            suffix: 's',
                            base: 15
                        },
                    ],
                    range: [
                        {
                            name: 'Laser range',
                            suffix: 'm',
                            base: 30
                        },
                        {
                            name: 'Blind radius',
                            suffix: 'm',
                            base: 25
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        }
                    ],
                    channel: [
                        {
                            name: 'Energy drain/s',
                            base: 10
                        }
                    ]
                }
            ]
        },
    ],
    nekros: [
        {
            name: 'Soul Punch',
            img: require('../assets/itemimages/soulpunch.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 500,
                            icon: require('../assets/dynamic/damage/Impact.png')
                        },
                    ],
                    range: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 50
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                }
            ]
        },
        {
            name: 'Terrify',
            img: require('../assets/itemimages/terrify.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Affected enemies',
                            base: 20,
                        },
                        {
                            name: 'Armor reduction',
                            suffix: '%',
                            base: 20,
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 25
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 15
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 75
                        }
                    ],
                }
            ]
        },
        {
            name: 'Desecrate',
            img: require('../assets/itemimages/desecrate.png'),
            details: [
                {
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 25
                        }
                    ],
                    none: [
                        {
                            name: 'Drop chance',
                            suffix: '%',
                            base: 54
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Activation cost',
                            base: 10
                        },
                        {
                            name: 'Energy / Corpse',
                            base: 10
                        },
                    ],
                }
            ]
        },
        {
            name: 'Shadows of the Dead',
            img: require('../assets/itemimages/shadowsofthedead.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage bonus',
                            suffix: '%',
                            base: 150,
                        },
                        {
                            name: 'Health & shields bonus',
                            suffix: '%',
                            base: 100,
                        },
                    ],
                    inverse: [
                        {
                            name: 'Health decay/s',
                            suffix: '%',
                            base: 3
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 100
                        }
                    ],
                }
            ]
        },
    ],
    nezha: [
        {
            name: 'Firewalker',
            img: require('../assets/itemimages/firewalker.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage/s',
                            base: 200,
                            icon: require('../assets/dynamic/damage/Heat.png')
                        },
                        {
                            name: 'Explosion damage',
                            base: 1250,
                            icon: require('../assets/dynamic/damage/Heat.png')
                        },
                    ],
                    duration: [
                        {
                            name: 'Buff duration',
                            suffix: 's',
                            base: 30
                        },
                        {
                            name: 'Flame duration',
                            suffix: 's',
                            base: 10
                        },
                    ],
                    range: [
                        {
                            name: 'Explosion radius',
                            suffix: 'm',
                            base: 6
                        }
                    ],
                    none: [
                        {
                            name: 'Speed bonus',
                            suffix: '%',
                            base: 25
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                }
            ]
        },
        {
            name: 'Blazing Chakram',
            img: require('../assets/itemimages/blazingchakram.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 250,
                            icon: require('../assets/dynamic/damage/Heat.png')
                        },
                        {
                            name: 'Charge damage',
                            base: 1000,
                            icon: require('../assets/dynamic/damage/Heat.png')
                        },
                        {
                            name: 'Damage vulnerability',
                            suffix: '%',
                            base: 100,
                        },
                    ],
                    none: [
                        {
                            name: 'Health orb chance',
                            suffix: '%',
                            base: 100
                        },
                        {
                            name: 'Energy orb chance',
                            suffix: '%',
                            base: 35
                        }
                    ],
                    duration: [
                        {
                            name: 'Debuff duration',
                            suffix: 's',
                            base: 15
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                }
            ]
        },
        {
            name: 'Warding Halo',
            img: require('../assets/itemimages/wardinghalo.png'),
            details: [
                {
                    armor: [
                        {
                            name: 'Health',
                            base: 999.5,
                            mult: 2.5,
                            icon: require('../assets/dynamic/damage/Slash.png')
                        },
                    ],
                    strength: [
                        {
                            name: 'Damage/s',
                            base: 125,
                        },
                    ],
                    range: [
                        {
                            name: 'Knockback radius',
                            suffix: 'm',
                            base: 2
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 75
                        }
                    ],
                }
            ]
        },
        {
            name: 'Divine Spears',
            img: require('../assets/itemimages/divinespears.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Impale damage',
                            base: 600,
                            icon: require('../assets/dynamic/damage/Puncture.png')
                        },
                        {
                            name: 'Slam damage',
                            base: 600,
                            icon: require('../assets/dynamic/damage/Impact.png')
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 12
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 19
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 100
                        }
                    ],
                }
            ]
        },
    ],
    nidus: [
        {
            name: 'Virulence',
            img: require('../assets/itemimages/virulence.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Base damage',
                            base: 200,
                        },
                    ],
                    range: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 16
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 40
                        }
                    ],
                }
            ]
        },
        {
            name: 'Larva',
            img: require('../assets/itemimages/larva.png'),
            details: [
                {
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 7
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 12
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                }
            ]
        },
        {
            name: 'Parasitic Link',
            img: require('../assets/itemimages/parasiticlink.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Strength bonus',
                            base: 25,
                            suffix: '%'
                        },
                    ],
                    exception: [
                        {
                            name: 'Damage redirection',
                            base: 50,
                            suffix: '%'
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 60
                        }
                    ],
                    range: [
                        {
                            name: 'Ally link',
                            suffix: 'm',
                            base: 40
                        },
                        {
                            name: 'Enemy link',
                            suffix: 'm',
                            base: 20
                        },
                    ],
                    none: [
                        {
                            name: 'Mutation cost',
                            base: 1
                        }
                    ],
                }
            ]
        },
        {
            name: 'Ravenous',
            img: require('../assets/itemimages/ravenous.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Base maggot explosion',
                            base: 150,
                            icon: require('../assets/dynamic/damage/Blast.png')
                        },
                        {
                            name: 'Health regen/s',
                            base: 20,
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 40
                        }
                    ],
                    range: [
                        {
                            name: 'Maggot explosion radius',
                            suffix: 'm',
                            base: 4
                        }
                    ],
                    none: [
                        {
                            name: 'Infestation patch radius',
                            suffix: 'm',
                            base: 8
                        },
                        {
                            name: 'Mutation cost',
                            base: 3
                        }
                    ],
                }
            ]
        },
    ],
    nova: [
        {
            name: 'Null Star',
            img: require('../assets/itemimages/nullstar.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 200,
                            icon: require('../assets/dynamic/damage/Slash.png')
                        },
                    ],
                    duration: [
                        {
                            name: 'Antimatter particles',
                            base: 6
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 12
                        }
                    ],
                    none: [
                        {
                            name: 'Damage reduction / particle',
                            suffix: '%',
                            base: 5
                        },
                        {
                            name: 'Maximum Damage reduction',
                            suffix: '%',
                            base: 90
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                }
            ]
        },
        {
            name: 'Antimatter Drop',
            img: require('../assets/itemimages/antimatterdrop.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Base damage',
                            base: 200,
                            icon: require('../assets/dynamic/damage/Radiation.png')
                        },
                    ],
                    none: [
                        {
                            name: 'Explosion Range',
                            suffix: 'm',
                            base: 15
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        }
                    ],
                }
            ]
        },
        {
            name: 'Worm Hole',
            img: require('../assets/itemimages/wormhole.png'),
            details: [
                {
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 16
                        }
                    ],
                    range: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 50
                        }
                    ],
                    none: [
                        {
                            name: 'Uses before collapse',
                            base: 4
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 75
                        }
                    ],
                }
            ]
        },
        {
            name: 'Molecular Prime',
            img: require('../assets/itemimages/molecularprime.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'On-death explosion',
                            base: 800,
                            icon: require('../assets/dynamic/damage/Blast.png')
                        },
                    ],
                    exception: [
                        {
                            name: 'Slow',
                            suffix: '%',
                            base: 30
                        }
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 6
                        },
                        {
                            name: 'Damage vulnerability duration',
                            suffix: 's',
                            base: 30
                        },
                    ],
                    none: [
                        {
                            name: 'Damage vulnerability',
                            suffix: 'x',
                            base: 2
                        }
                    ],
                    range: [
                        {
                            name: 'On-death explosion radius',
                            suffix: 'm',
                            base: 10
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 100
                        }
                    ],
                }
            ]
        },
    ],
    nyx: [
        {
            name: 'Mind Control',
            img: require('../assets/itemimages/mindcontrol.png'),
            details: [
                {
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 30
                        }
                    ],
                    range: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 60
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                }
            ]
        },
        {
            name: 'Psychic Bolts',
            img: require('../assets/itemimages/psychicbolts.png'),
            details: [
                {
                    exception: [
                        {
                            name: 'Debuff amount',
                            suffix: '%',
                            base: 80,
                        }
                    ],
                    duration: [
                        {
                            name: 'Debuff duration',
                            suffix: 's',
                            base: 11
                        }
                    ],
                    none: [
                        {
                            name: 'Bolts',
                            base: 6
                        },
                        {
                            name: 'Targeting radius',
                            suffix: 'm',
                            base: 60
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        }
                    ],
                }
            ]
        },
        {
            name: 'Chaos',
            img: require('../assets/itemimages/chaos.png'),
            details: [
                {
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 25
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 25
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 75
                        }
                    ],
                }
            ]
        },
        {
            name: 'Absorb',
            img: require('../assets/itemimages/absorb.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Passive damage gain',
                            base: 200,
                        },
                        {
                            name: 'Minimum damage',
                            base: 1500,
                        },
                    ],
                    duration: [
                        {
                            name: 'Buff duration',
                            suffix: 's',
                            base: 8
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 10
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                    chennel: [
                        {
                            name: 'Energy drain/s',
                            base: 4
                        }
                    ]
                }
            ]
        },
    ],
    oberon: [
        {
            name: 'Smite',
            img: require('../assets/itemimages/smite.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Smite damage',
                            base: 500,
                        },
                        {
                            name: 'Orb base damage',
                            base: 150,
                            icon: require('../assets/dynamic/damage/Radiation.png')
                        },
                    ],
                    exception: [
                        {
                            name: 'Orbs',
                            base: 6,
                        },
                    ],
                    duration: [
                        {
                            name: 'Maximum orb lifespan',
                            suffix: 's',
                            base: 12
                        }
                    ],
                    range: [
                        {
                            name: 'Smite range',
                            suffix: 'm',
                            base: 50
                        },
                        {
                            name: 'Orb auto-target radius',
                            suffix: 'm',
                            base: 12.5
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                }
            ]
        },
        {
            name: 'Hallowed Ground',
            img: require('../assets/itemimages/hallowedground.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage / tick',
                            base: 100,
                            icon: require('../assets/dynamic/damage/Radiation.png')
                        },
                        {
                            name: 'Status chance',
                            suffix: '%',
                            base: 15,
                        },
                    ],
                    none: [
                        {
                            name: 'Ticks/s',
                            base: 2
                        }
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 20
                        }
                    ],
                    exception: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 15
                        },
                        {
                            name: 'Angle',
                            base: 180
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        }
                    ],
                }
            ]
        },
        {
            name: 'Renewal',
            img: require('../assets/itemimages/renewal.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Initial heal',
                            base: 125,
                        },
                        {
                            name: 'Health/s',
                            base: 40,
                        },
                        {
                            name: 'Armor buff',
                            base: 200,
                        },
                    ],
                    duration: [
                        {
                            name: 'Bleedout slowdown',
                            suffix: '%',
                            base: 45
                        },
                        {
                            name: 'Armor buff duration',
                            suffix: 's',
                            base: 20
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 25
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                    channel: [
                        {
                            name: 'Energy drain/s',
                            base: 2
                        },
                        {
                            name: 'Energy drain /s /ally',
                            base: 3
                        },
                    ]
                }
            ]
        },
        {
            name: 'Reckoning',
            img: require('../assets/itemimages/reckoning.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 1250,
                        },
                        {
                            name: 'Extra damage',
                            base: 625,
                        },
                        {
                            name: 'Armor reduction',
                            suffix: '%',
                            base: 30,
                        },
                    ],
                    duration: [
                        {
                            name: 'Blind duration',
                            suffix: 's',
                            base: 4
                        }
                    ],
                    range: [
                        {
                            name: 'Reckoning radius',
                            suffix: 'm',
                            base: 15
                        },
                        {
                            name: 'Blind radius',
                            suffix: 'm',
                            base: 4
                        },
                    ],
                    none: [
                        {
                            name: 'Health orb drop chance',
                            suffix: '%',
                            base: 50
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 100
                        }
                    ],
                }
            ]
        },
    ],
    octavia: [
        {
            name: 'Mallet',
            img: require('../assets/itemimages/mallet.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage multiplier',
                            suffix: 'x',
                            base: 2.5,
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 20
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 10
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                }
            ]
        },
        {
            name: 'Resonator',
            img: require('../assets/itemimages/resonator.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage / Beat',
                            base: 125,
                            icon: require('../assets/dynamic/damage/Blast.png')
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 20
                        }
                    ],
                    range: [
                        {
                            name: 'Minimum charm radius',
                            suffix: 'm',
                            base: 6
                        },
                        {
                            name: 'Maximum charm radius',
                            suffix: 'm',
                            base: 15
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        }
                    ],
                }
            ]
        },
        {
            name: 'Metronome',
            img: require('../assets/itemimages/metronome.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Armor bonus',
                            suffix: '%',
                            base: 35,
                        },
                        {
                            name: 'Speed bonus',
                            suffix: '%',
                            base: 30,
                        },
                        {
                            name: 'Multishot bonus',
                            suffix: '%',
                            base: 30,
                        },
                        {
                            name: 'Melee damage bonus',
                            suffix: '%',
                            base: 30,
                        },
                    ],
                    duration: [
                        {
                            name: 'Metronome duration',
                            suffix: 's',
                            base: 20
                        },
                        {
                            name: 'Individual buff duration',
                            suffix: 's',
                            base: 15
                        },
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 12
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 75
                        }
                    ],
                }
            ]
        },
        {
            name: 'Amp',
            img: require('../assets/itemimages/amp.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Minimum damage multiplier',
                            suffix: 'x',
                            base: 0.25,
                        },
                        {
                            name: 'Maximum damage multiplier',
                            suffix: 'x',
                            base: 2,
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 30
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 14
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 100
                        }
                    ],
                }
            ]
        },
    ],
    revenant: [
        {
            name: 'Enthrall',
            img: require('../assets/itemimages/enthrall.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Pillar damage/s',
                            base: 1000,
                            icon: require('../assets/dynamic/damage/Puncture.png')
                        },
                        {
                            name: 'Projectile damage',
                            base: 1000,
                            icon: require('../assets/dynamic/damage/Impact.png')
                        },
                    ],
                    duration: [
                        {
                            name: 'Thrall duration',
                            suffix: 's',
                            base: 30
                        },
                        {
                            name: 'Pillar duration',
                            suffix: 's',
                            base: 10
                        },
                    ],
                    range: [
                        {
                            name: 'Enthrall range',
                            suffix: 'm',
                            base: 25
                        },
                        {
                            name: 'Pillar radius',
                            suffix: 'm',
                            base: 2
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                }
            ]
        },
        {
            name: 'Mesmer Skin',
            img: require('../assets/itemimages/mesmerskin.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Charges',
                            base: 6,
                        },
                    ],
                    duration: [
                        {
                            name: 'Stun duration',
                            suffix: 's',
                            base: 5
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        }
                    ],
                }
            ]
        },
        {
            name: 'Reave',
            img: require('../assets/itemimages/reave.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Health & shields drain',
                            suffix: '%',
                            base: 8,
                        },
                        {
                            name: 'Health & shields drain from thralls',
                            suffix: '%',
                            base: 40,
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 1
                        }
                    ],
                    range: [
                        {
                            name: 'Wave width',
                            suffix: 'm',
                            base: 6
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        },
                        {
                            name: 'Energy (during Danse Macabre)',
                            base: 25
                        },
                    ],
                }
            ]
        },
        {
            name: 'Danse Macabre',
            img: require('../assets/itemimages/dansemacabre.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage/s',
                            base: 1250,
                        },
                        {
                            name: 'Boosted damage/s',
                            base: 2500,
                        },
                    ],
                    range: [
                        {
                            name: 'Beam radius',
                            suffix: 'm',
                            base: 0.1
                        },
                        {
                            name: 'Boosted beam radius',
                            suffix: 'm',
                            base: 0.2
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        }
                    ],
                    channel: [
                        {
                            name: 'Energy drain/s',
                            base: 20
                        },
                        {
                            name: 'Boosted energy drain/s',
                            base: 40
                        }
                    ]
                }
            ]
        },
    ],
    rhino: [
        {
            name: 'Rhino Charge',
            img: require('../assets/itemimages/rhinocharge.png'),
            details: [
                {
                    strength: [
                        {
                            name: '1st charge damage',
                            base: 650,
                            icon: require('../assets/dynamic/damage/Impact.png')
                        },
                        {
                            name: '2nd hit damage',
                            base: 1300,
                            icon: require('../assets/dynamic/damage/Impact.png')
                        },
                        {
                            name: '3rd+ hit damage',
                            base: 2600,
                            icon: require('../assets/dynamic/damage/Impact.png')
                        },
                    ],
                    duration: [
                        {
                            name: 'Combo window',
                            suffix: 's',
                            base: 1
                        }
                    ],
                    range: [
                        {
                            name: '1st charge range',
                            suffix: 'm',
                            base: 12
                        },
                        {
                            name: '2nd charge range',
                            suffix: 'm',
                            base: 15
                        },
                        {
                            name: '3rd+ charge range',
                            suffix: 'm',
                            base: 18
                        },
                        {
                            name: 'Impact radius',
                            suffix: 'm',
                            base: 2
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy cost of 1st charge',
                            base: 25
                        },
                        {
                            name: 'Energy cost of 2nd charge',
                            base: 12.5
                        },
                        {
                            name: 'Energy cost of 3rd+ charge',
                            base: 6.25
                        },
                    ],
                }
            ]
        },
        {
            name: 'Iron Skin',
            img: require('../assets/itemimages/ironskin.png'),
            details: [
                {
                    armor: [
                        {
                            name: 'Iron skin health',
                            base: 1200,
                            mult: 2.5
                        },

                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        },
                    ],
                }
            ]
        },
        {
            name: 'Roar',
            img: require('../assets/itemimages/roar.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage multiplier',
                            suffix: '%',
                            base: 50,
                        },

                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 30
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 25
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 75
                        },
                    ],
                }
            ]
        },
        {
            name: 'Rhino Stomp',
            img: require('../assets/itemimages/rhinostomp.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 800,
                            icon: require('../assets/dynamic/damage/Blast.png')
                        },

                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 8
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 25
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 100
                        },
                    ],
                }
            ]
        },
    ],
    saryn: [
        {
            name: 'Spores',
            img: require('../assets/itemimages/spores.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Initial damage',
                            base: 10,
                            icon: require('../assets/dynamic/damage/Corrosive.png')
                        },
                        {
                            name: 'Damage growth / enemy',
                            base: 2,
                        },
                        {
                            name: 'Status chance',
                            suffix: '%',
                            base: 50,
                        },
                    ],
                    exception: [
                        {
                            name: 'Reset decay',
                            suffix: '%',
                            base: 20
                        }
                    ],
                    inverse: [
                        {
                            name: 'Damage decay rate',
                            suffix: '%',
                            base: 10
                        }
                    ],
                    range: [
                        {
                            name: 'Cast range',
                            suffix: 'm',
                            base: 60
                        },
                        {
                            name: 'Spread range',
                            suffix: 'm',
                            base: 16
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        },
                    ],
                }
            ]
        },
        {
            name: 'Molt',
            img: require('../assets/itemimages/molt.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Decoy health',
                            base: 500,
                        },
                        {
                            name: 'Explosion damage',
                            base: 500,
                            icon: require('../assets/dynamic/damage/Toxin.png')
                        },
                        {
                            name: 'Speed multiplier',
                            suffix: 'x',
                            base: 1.5,
                        },
                    ],
                    duration: [
                        {
                            name: 'Decoy duration',
                            suffix: 's',
                            base: 40
                        },
                        {
                            name: 'Speed duration',
                            suffix: 's',
                            base: 5
                        },
                    ],
                    range: [
                        {
                            name: 'Explosion radius',
                            suffix: 'm',
                            base: 10
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        },
                    ],
                }
            ]
        },
        {
            name: 'Toxic Lash',
            img: require('../assets/itemimages/toxiclash.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Added ranged Damage',
                            suffix: '%',
                            base: 30,
                            icon: require('../assets/dynamic/damage/Toxin.png')
                        },
                        {
                            name: 'Added melee Damage',
                            suffix: '%',
                            base: 60,
                            icon: require('../assets/dynamic/damage/Toxin.png')
                        },
                    ],
                    exception: [
                        {
                            name: 'Added block',
                            base: 40,
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 40
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        },
                    ],
                }
            ]
        },
        {
            name: 'Miasma',
            img: require('../assets/itemimages/miasma.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage/s',
                            base: 150,
                            icon: require('../assets/dynamic/damage/Viral.png')
                        },
                        {
                            name: 'Infected damage/s',
                            base: 600,
                            icon: require('../assets/dynamic/damage/Viral.png')
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 6
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 20
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 75
                        },
                    ],
                }
            ]
        },
    ],
    titania: [
        {
            name: 'Spellbind',
            img: require('../assets/itemimages/spellbind.png'),
            details: [
                {
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 16
                        }
                    ],
                    range: [
                        {
                            name: 'Cast range',
                            suffix: 'm',
                            base: 50
                        },
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 5
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        },
                    ],
                }
            ]
        },
        {
            name: 'Tribute',
            img: require('../assets/itemimages/tribute.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            suffix: '',
                            base: 500,
                        },

                    ],
                    none: [
                        {
                            name: 'Damage debuff',
                            suffix: '%',
                            base: 25
                        }
                    ],
                    duration: [
                        {
                            name: 'Debuff duration',
                            suffix: 's',
                            base: 12
                        }
                    ],
                    range: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 25
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        },
                    ],
                }
            ]
        },
        {
            name: 'Lantern',
            img: require('../assets/itemimages/lantern.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage/s',
                            base: 350,
                        },
                        {
                            name: 'Explosion damage',
                            base: 2500,
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 25
                        }
                    ],
                    range: [
                        {
                            name: 'Cast range',
                            suffix: 'm',
                            base: 25
                        },
                        {
                            name: 'Charm radius',
                            suffix: 'm',
                            base: 20
                        },
                        {
                            name: 'Damage radius',
                            suffix: 'm',
                            base: 2.5
                        },
                        {
                            name: 'Explosion radius',
                            suffix: 'm',
                            base: 8
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 75
                        },
                    ],
                }
            ]
        },
        {
            name: 'Razorwing',
            img: require('../assets/itemimages/razorwing.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Dex Pixia base damage',
                            base: 160,
                        },
                        {
                            name: 'Diwata base damage',
                            base: 200,
                        },
                        {
                            name: 'Razorfly damage',
                            base: 80,
                        },
                    ],
                    none: [
                        {
                            name: 'Razorflies',
                            base: 6
                        },
                        {
                            name: 'Evasion',
                            suffix: '%',
                            base: 50
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        },
                    ],
                    channel: [
                        {
                            name: 'Energy drain/s',
                            base: 5
                        },
                    ]
                }
            ]
        },
    ],
    trinity: [
        {
            name: 'Well of Life',
            img: require('../assets/itemimages/welloflife.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Lifesteal',
                            suffix: '%',
                            base: 45,
                        },
                        {
                            name: 'Lifesteal cap',
                            base: 400,
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 12
                        }
                    ],
                    range: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 100
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        },
                    ],
                }
            ]
        },
        {
            name: 'Energy Vampire',
            img: require('../assets/itemimages/energyvampire.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage percentage',
                            suffix: '%',
                            base: 6.25,
                        },
                        {
                            name: 'Restored energy / Pulse',
                            base: 25,
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 9
                        }
                    ],
                    range: [
                        {
                            name: 'Cast range',
                            suffix: 'm',
                            base: 100
                        },
                        {
                            name: 'Pulse range',
                            suffix: 'm',
                            base: 25
                        },
                    ],
                    none: [
                        {
                            name: 'Pulses / cast',
                            base: 4
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        },
                    ],
                }
            ]
        },
        {
            name: 'Link',
            img: require('../assets/itemimages/link.png'),
            details: [
                {
                    none: [
                        {
                            name: 'Damage reduction',
                            suffix: '%',
                            base: 75,
                        },
                        {
                            name: 'Links',
                            base: 3,
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 12
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 20
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 75
                        },
                    ],
                }
            ]
        },
        {
            name: 'Blessing',
            img: require('../assets/itemimages/blessing.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Health & shields restoration',
                            suffix: '%',
                            base: 80,
                        },
                    ],
                    exception: [
                        {
                            name: 'Damage reduction',
                            suffix: '%',
                            base: 50
                        }
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 10
                        }
                    ],
                    none: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 50
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 100
                        },
                    ],
                }
            ]
        },
    ],
    valkyr: [
        {
            name: 'Rip Line',
            img: require('../assets/itemimages/ripline.png'),
            details: [
                {
                    strength: [
                        {
                            name: '1st rip line damage',
                            base: 600,
                            icon: require('../assets/dynamic/damage/Slash.png')
                        },
                        {
                            name: '2nd rip line damage',
                            base: 1200,
                            icon: require('../assets/dynamic/damage/Slash.png')
                        },
                        {
                            name: '3rd+ rip line damage',
                            base: 2400,
                            icon: require('../assets/dynamic/damage/Slash.png')
                        },
                    ],
                    exception: [
                        {
                            name: 'Combo window',
                            suffix: 's',
                            base: 1
                        }
                    ],
                    range: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 75
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy cost of 1st charge',
                            base: 25
                        },
                        {
                            name: 'Energy cost of 2nd charge',
                            base: 12.5
                        },
                        {
                            name: 'Energy cost of 3rd+ charge',
                            base: 6.25
                        },
                    ],
                }
            ]
        },
        {
            name: 'Warcry',
            img: require('../assets/itemimages/warcry.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Attack speed buff',
                            suffix: '%',
                            base: 50,
                        },
                        {
                            name: 'Armor buff',
                            suffix: '%',
                            base: 50,
                        },
                    ],
                    exception: [
                        {
                            name: 'Slow',
                            suffix: '%',
                            base: 30,
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 15
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 25
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 75
                        },
                    ],
                }
            ]
        },
        {
            name: 'Paralysis',
            img: require('../assets/itemimages/paralysis.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Shield damage multiplier',
                            suffix: 'x',
                            base: 3.5,
                        },
                    ],
                    range: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 10
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 5
                        },
                    ],
                }
            ]
        },
        {
            name: 'Hysteria',
            img: require('../assets/itemimages/hysteria.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Base damage',
                            base: 250,
                        },
                    ],
                    none: [
                        {
                            name: 'Lifesteal',
                            suffix: '%',
                            base: 5
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        },
                    ],
                    channel: [
                        {
                            name: 'Minimum energy drain/s',
                            base: 2.5
                        },
                        {
                            name: 'Maximum energy drain/s',
                            base: 15
                        }
                    ]
                }
            ]
        },
    ],
    vauban: [
        {
            name: 'Tesla',
            img: require('../assets/itemimages/tesla.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 150,
                            icon: require('../assets/dynamic/damage/Electricity.png')
                        },
                    ],
                    duration: [
                        {
                            name: 'Charges',
                            base: 10
                        }
                    ],
                    none: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 40
                        },
                        {
                            name: 'Uncharged status chance',
                            suffix: '%',
                            base: 10
                        },
                        {
                            name: 'Charged status chance',
                            suffix: '%',
                            base: 100
                        },
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 12
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        },
                    ],
                }
            ]
        },
        {
            name: 'Minelayer',
            img: require('../assets/itemimages/minelayer.png'),
            details: [
                {
                    mode: 'Bounce',
                    strength: [
                        {
                            name: 'Damage',
                            base: 175,
                            icon: require('../assets/dynamic/damage/Impact.png')
                        },
                    ],
                    none: [
                        {
                            name: 'Charges',
                            base: 4
                        },
                        {
                            name: 'Mine duration',
                            suffix: 's',
                            base: 300
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        },
                    ],
                },
                {
                    mode: 'Trip Laser',
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 30
                        }
                    ],
                    none: [
                        {
                            name: 'Laser length',
                            suffix: 'm',
                            base: 10
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        },
                    ],
                },
                {
                    mode: 'Shred',
                    strength: [
                        {
                            name: 'Damage',
                            suffix: '',
                            base: 400,
                            icon: require('../assets/dynamic/damage/Blast.png')
                        },
                        {
                            name: 'Armor reduction',
                            suffix: '%',
                            base: 40,
                        },
                    ],
                    duration: [
                        {
                            name: 'Armor debuff',
                            suffix: 's',
                            base: 4
                        }
                    ],
                    range: [
                        {
                            name: 'Explosion radius',
                            suffix: 'm',
                            base: 6
                        }
                    ],
                    none: [
                        {
                            name: 'Mine duration',
                            suffix: 's',
                            base: 300
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        },
                    ],
                },
                {
                    mode: 'Concuss',
                    duration: [
                        {
                            name: 'Deafen duration',
                            suffix: 's',
                            base: 8
                        }
                    ],
                    range: [
                        {
                            name: 'Explosion radius',
                            suffix: 'm',
                            base: 6
                        }
                    ],
                    none: [
                        {
                            name: 'Mine duration',
                            suffix: 's',
                            base: 300
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        },
                    ],
                },
            ]
        },
        {
            name: 'Bastille',
            img: require('../assets/itemimages/bastille.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Affected enemies',
                            base: 12,
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 15
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 10
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 75
                        },
                    ],
                }
            ]
        },
        {
            name: 'Vortex',
            img: require('../assets/itemimages/vortex.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage/s',
                            base: 50,
                            icon: require('../assets/dynamic/damage/Magnetic.png')
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 12
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 6
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 100
                        },
                    ],
                }
            ]
        },
    ],
    volt: [
        {
            name: 'Shock',
            img: require('../assets/itemimages/shock.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 200,
                            icon: require('../assets/dynamic/damage/Electricity.png')
                        },
                    ],
                    range: [
                        {
                            name: 'Chain link range',
                            suffix: 'm',
                            base: 15
                        }
                    ],
                    none: [
                        {
                            name: 'Maximum links',
                            base: 5
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        },
                    ],
                }
            ]
        },
        {
            name: 'Speed',
            img: require('../assets/itemimages/speed.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Melee & movement speed buff',
                            suffix: '%',
                            base: 50,
                        },
                        {
                            name: 'Reload speed buff',
                            suffix: '%',
                            base: 17,
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 10
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 25
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        },
                    ],
                }
            ]
        },
        {
            name: 'Electric Shield',
            img: require('../assets/itemimages/electricshield.png'),
            details: [
                {
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 25
                        }
                    ],
                    none: [
                        {
                            name: 'Damage bonus',
                            suffix: '%',
                            base: 50,
                            icon: require('../assets/dynamic/damage/Electricity.png')
                        },
                        {
                            name: 'Critical damage bonus',
                            suffix: '%',
                            base: 200,
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        },
                        {
                            name: 'Energy drain / 4m',
                            base: 1
                        }
                    ],
                }
            ]
        },
        {
            name: 'Discharge',
            img: require('../assets/itemimages/discharge.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 1200,
                            icon: require('../assets/dynamic/damage/Electricity.png')
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 6
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 20
                        },
                        {
                            name: 'Enemy link radius',
                            suffix: 'm',
                            base: 8
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 100
                        },
                    ],
                }
            ]
        },
    ],
    wukong: [
        {
            name: 'Iron Jab',
            img: require('../assets/itemimages/ironjab.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 800,
                            icon: require('../assets/dynamic/damage/Impact.png')
                        },
                    ],
                    none: [
                        {
                            name: 'Range',
                            suffix: 'm',
                            base: 10
                        }
                    ],
                    range: [
                        {
                            name: 'Impact radius',
                            suffix: 'm',
                            base: 2
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        },
                    ],
                }
            ]
        },
        {
            name: 'Defy',
            img: require('../assets/itemimages/defy.png'),
            details: [
                {
                    duration: [
                        {
                            name: 'Invulnerability duration',
                            suffix: 's',
                            base: 5
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        },
                    ],
                    channel: [
                        {
                            name: 'Energy drain/s',
                            base: 5
                        }
                    ]
                }
            ]
        },
        {
            name: 'Cloud Walker',
            img: require('../assets/itemimages/cloudwalker.png'),
            details: [
                {
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 25
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 8
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        },
                        {
                            name: 'Energy drain / 2.5m',
                            base: 1
                        }
                    ]
                }
            ]
        },
        {
            name: 'Primal Fury',
            img: require('../assets/itemimages/primalfury.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Base damage',
                            base: 250,
                        },
                    ],
                    range: [
                        {
                            name: 'Melee range bonus',
                            suffix: '%',
                            base: 20
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        },
                    ],
                    channel: [
                        {
                            name: 'Energy drain/s',
                            base: 3
                        }
                    ]
                }
            ]
        },
    ],
    zephyr: [
        {
            name: 'Tail Wind',
            img: require('../assets/itemimages/tailwind.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 500,
                        },
                    ],
                    duration: [
                        {
                            name: 'Speed',
                            suffix: 'm/s',
                            base: 30
                        },
                        {
                            name: 'Hover height',
                            suffix: 'm',
                            base: 12.5
                        },
                    ],
                    range: [
                        {
                            name: 'Contact radius',
                            suffix: 'm',
                            base: 2
                        },
                        {
                            name: 'Explosion radius',
                            suffix: 'm',
                            base: 7
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 25
                        },
                        {
                            name: 'Energy while airborne',
                            base: 12.5
                        },
                    ],
                }
            ]
        },
        {
            name: 'Airburst',
            img: require('../assets/itemimages/airburst.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 500,
                        },
                    ],
                    range: [
                        {
                            name: 'Explosion radius',
                            suffix: 'm',
                            base: 8
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 50
                        },
                        {
                            name: 'Energy while airborne',
                            base: 25
                        },
                    ],
                }
            ]
        },
        {
            name: 'Turbulence',
            img: require('../assets/itemimages/turbulence.png'),
            details: [
                {
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 20
                        }
                    ],
                    range: [
                        {
                            name: 'Radius',
                            suffix: 'm',
                            base: 6
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 75
                        },
                    ],
                }
            ]
        },
        {
            name: 'Tornado',
            img: require('../assets/itemimages/tornado.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 120,
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 20
                        }
                    ],
                    range: [
                        {
                            name: 'Spawn radius',
                            suffix: 'm',
                            base: 25
                        }
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 100
                        },
                    ],
                }
            ]
        },
    ],
    // frame: [
    //     {
    //         name: '',
    //         img: require('../assets/itemimages/.png'),
    //         details: [
    //             {
    //                 strength: [
    //                     {
    //                         name: '',
    //                         suffix: '',
    //                         base: ,
    //                         icon: require('../assets/.png')
    //                     },
    //                 ],
    //                 duration: [
    //                     {
    //                         name: '',
    //                         suffix: 's',
    //                         base: 
    //                     },
    //                 ],
    //                 range: [
    //                     {
    //                         name: '',
    //                         suffix: 'm',
    //                         base: 
    //                     },
    //                 ],
    //                 efficiency: [
    //                     {
    //                         name: 'Energy',
    //                         base: 
    //                     },
    //                 ],
    //             }
    //         ]
    //     },
    // ],
}

export default abilities;