const abilities = {
    ash: [
        {
            name: 'Shuriken',
            img: require('../assets/warframes/shuriken.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 500,
                            icon: require('../assets/Slash.png')
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
            img: require('../assets/warframes/smokescreen.png'),
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
            img: require('../assets/warframes/teleport.png'),
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
            img: require('../assets/warframes/bladestorm.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 2000,
                            icon: require('../assets/True.png')
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
            img: require('../assets/warframes/landslide.png'),
            details: [
                {
                    strength: [
                        {
                            name: '1st hit damage',
                            base: 350,
                            icon: require('../assets/Impact.png')
                        },
                        {
                            name: '2nd hit damage',
                            base: 700,
                            icon: require('../assets/Impact.png')
                        },
                        {
                            name: '3rd+ hit damage',
                            base: 1400,
                            icon: require('../assets/Impact.png')
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
            img: require('../assets/warframes/tectonics.png'),
            details: [
                {
                    armor: [
                        {
                            name: 'Health',
                            base: 3750
                        }
                    ],
                    strength: [
                        {
                            name: 'Boulder roll damage',
                            suffix: '/s',
                            icon: require('../assets/Impact.png'),
                            base: 600
                        },
                        {
                            name: 'Boulder explosion damage',
                            icon: require('../assets/Puncture.png'),
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
            img: require('../assets/warframes/petrify.png'),
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
            img: require('../assets/warframes/rumblers.png'),
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
                            icon: require('../assets/Impact.png')
                        },
                        {
                            name: 'Rock throw damage',
                            base: 500,
                            icon: require('../assets/Impact.png')
                        },
                        {
                            name: 'Explosion damage',
                            base: 1250,
                            icon: require('../assets/Blast.png')
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
            img: require('../assets/warframes/sonicboom.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 50,
                            icon: require('../assets/Impact.png')
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
            img: require('../assets/warframes/sonar.png'),
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
            img: require('../assets/warframes/silence.png'),
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
            img: require('../assets/warframes/soundquake.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage/s',
                            base: 200,
                            icon: require('../assets/Blast.png')
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
    chroma: [
        {
            name: 'Spectral Scream',
            img: require('../assets/warframes/spectralscream.png'),
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
            img: require('../assets/warframes/elementalward.png'),
            details: [
                {
                    mode: 'Heat',
                    strength: [
                        {
                            name: 'Damage/s',
                            base: 100,
                            icon: require('../assets/Heat.png'),
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
                            icon: require('../assets/Electricity.png')
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
            img: require('../assets/warframes/vexarmor.png'),
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
            img: require('../assets/warframes/effigy.png'),
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
            img: require('../assets/warframes/fireball.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Initial damage',
                            base: 400,
                            icon: require('../assets/Heat.png')
                        },
                        {
                            name: 'Area damage',
                            base: 150,
                            icon: require('../assets/Heat.png')
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
            img: require('../assets/warframes/accelerant.png'),
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
            img: require('../assets/warframes/fireblast.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Wave damage',
                            base: 200,
                            icon: require('../assets/Heat.png')
                        },
                        {
                            name: 'Ring damage/s',
                            base: 225,
                            icon: require('../assets/Heat.png')
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
            img: require('../assets/warframes/worldonfire.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage at 0%',
                            base: 400,
                            icon: require('../assets/Heat.png')
                        },
                        {
                            name: 'Damage at 100%',
                            base: 800,
                            icon: require('../assets/Heat.png')
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
            img: require('../assets/warframes/metamorphosis.png'),
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
            img: require('../assets/warframes/restrage.png'),
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
            img: require('../assets/warframes/pacifyprovoke.png'),
            details: [
                {
                    mode: 'Pacify',
                    strength: [
                        {
                            name: 'Damage reduction',
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
                            name: 'Energy',
                            base: 10
                        }
                    ],
                    channel: [
                        {
                            name: 'Energy drain / enemy /s',
                            base: 0.5
                        }
                    ]
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
                            name: 'Energy',
                            base: 10
                        }
                    ],
                    channel: [
                        {
                            name: 'Energy drain / ability cast',
                            base: 0.5
                        }
                    ]
                },
            ]
        },
        {
            name: 'Mend & Maim',
            img: require('../assets/warframes/mendmaim.png'),
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
                            icon: require('../assets/Slash.png')
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
            img: require('../assets/warframes/slashdash.png'),
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
            img: require('../assets/warframes/radialblind.png'),
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
            img: require('../assets/warframes/radialjavelin.png'),
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
            img: require('../assets/warframes/exaltedblade.png'),
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
            img: require('../assets/warframes/freeze.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Initial damage',
                            base: 350,
                            icon: require('../assets/Cold.png')
                        },
                        {
                            name: 'Area damage',
                            base: 150,
                            icon: require('../assets/Cold.png')
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
            img: require('../assets/warframes/icewave.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 700,
                            icon: require('../assets/Cold.png')
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
            img: require('../assets/warframes/snowglobe.png'),
            details: [
                {
                    armor: [
                        {
                            name: 'Globe health',
                            base: 5000
                        },
                    ],
                    strength: [
                        {
                            name: 'Globe explosion',
                            base: 150,
                            icon: require('../assets/Cold.png')
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
            img: require('../assets/warframes/avalanche.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Initial damage',
                            base: 1500,
                            icon: require('../assets/Cold.png')
                        },
                        {
                            name: 'Explosion damage',
                            base: 400,
                            icon: require('../assets/Cold.png')
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
            img: require('../assets/warframes/shatteredlash.png'),
            details: [
                {
                    mode: 'Tap',
                    strength: [
                        {
                            name: 'Damage',
                            base: 800,
                            icon: require('../assets/Puncture.png')
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
                            icon: require('../assets/Slash.png')
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
            img: require('../assets/warframes/splinterstorm.png'),
            details: [
                {
                    exception: [
                        {
                            name: 'Damage reduction',
                            suffix: '%',
                            base: 70
                        },
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
            img: require('../assets/warframes/spectrorage.png'),
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
            img: require('../assets/warframes/massvitrify.png'),
            details: [
                {
                    armor: [
                        {
                            name: 'Ring segment health',
                            base: 2225
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
    harrow: [
        {
            name: 'Condemn',
            img: require('../assets/warframes/condemn.png'),
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
            img: require('../assets/warframes/penance.png'),
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
                            base: 1.25
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
            img: require('../assets/warframes/thurible.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Energy conversion',
                            suffix: '%',
                            base: 5
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
            img: require('../assets/warframes/covenant.png'),
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
    hydroid: [
        {
            name: 'Tempest Barrage',
            img: require('../assets/warframes/tempestbarrage.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Base damage',
                            base: 150,
                            icon: require('../assets/Impact.png')
                        },
                        {
                            name: 'Charged damage',
                            base: 300,
                            icon: require('../assets/Impact.png')
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
            img: require('../assets/warframes/tidalsurge.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Initial damage',
                            base: 300,
                            icon: require('../assets/Impact.png')
                        },
                        {
                            name: 'Wave crash damage',
                            base: 300,
                            icon: require('../assets/Slash.png')
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
            img: require('../assets/warframes/undertow.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage/s',
                            base: 25,
                            icon: require('../assets/Impact.png')
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
            img: require('../assets/warframes/tentacleswarm.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Contact damage',
                            base: 300,
                            icon: require('../assets/Magnetic.png')
                        },
                        {
                            name: 'Damage/s',
                            base: 200,
                            icon: require('../assets/True.png')
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
            img: require('../assets/warframes/desiccation.png'),
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
            img: require('../assets/warframes/devour.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Initial Damage',
                            base: 125,
                            icon: require('../assets/True.png')
                        },
                        {
                            name: 'Max Damage',
                            base: 250,
                            icon: require('../assets/True.png')
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
            img: require('../assets/warframes/sandstorm.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 500,
                            icon: require('../assets/Slash.png')
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
            img: require('../assets/warframes/scarabswarm.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 200,
                            icon: require('../assets/Corrosive.png')
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
            img: require('../assets/warframes/quiver.png'),
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
            img: require('../assets/warframes/navigator.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Max multiplier',
                            suffix: 'x',
                            base: 5,
                        },
                    ],
                    duration: [
                        {
                            name: 'Multiplier growth/s',
                            suffix: 'x',
                            base: 1
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
            name: 'Prowl',
            img: require('../assets/warframes/prowl.png'),
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
            img: require('../assets/warframes/artemisbow.png'),
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
            img: require('../assets/warframes/whipclaw.png'),
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
            img: require('../assets/warframes/ensnare.png'),
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
                            name: 'Propagationdelay',
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
            img: require('../assets/warframes/venari.png'),
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
                            icon: require('../assets/Slash.png')
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
            img: require('../assets/warframes/strangledome.png'),
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
            img: require('../assets/warframes/banish.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 250,
                            icon: require('../assets/Impact.png')
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
            img: require('../assets/warframes/stasis.png'),
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
            img: require('../assets/warframes/riftsurge.png'),
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
            img: require('../assets/warframes/cataclysm.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 500,
                            icon: require('../assets/Blast.png')
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
            img: require('../assets/warframes/decoy.png'),
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
            img: require('../assets/warframes/invisibility.png'),
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
            img: require('../assets/warframes/switchteleport.png'),
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
            img: require('../assets/warframes/radialdisarm.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 20,
                            icon: require('../assets/Impact.png')
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
            img: require('../assets/warframes/pull.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 300,
                            icon: require('../assets/Magnetic.png')
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
            img: require('../assets/warframes/magnetize.png'),
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
                            icon: require('../assets/Magnetic.png')
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
            img: require('../assets/warframes/polarize.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 400,
                            icon: require('../assets/Magnetic.png')
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
            img: require('../assets/warframes/crush.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 1500,
                            icon: require('../assets/Magnetic.png')
                        },
                        {
                            name: 'Shields gained / enemy / tick',
                            base: 25,
                            icon: require('../assets/Magnetic.png')
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
            img: require('../assets/warframes/ballisticbattery.png'),
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
            img: require('../assets/warframes/shootinggallery.png'),
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
                            name: 'Range',
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
            img: require('../assets/warframes/shattershield.png'),
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
            img: require('../assets/warframes/peacemaker.png'),
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
            img: require('../assets/warframes/hallofmirrors.png'),
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
            img: require('../assets/warframes/slightofhand.png'),
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
            img: require('../assets/warframes/eclipse.png'),
            details: [
                {
                    mode: 'light',
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
            img: require('../assets/warframes/prism.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Minimum damage',
                            base: 250,
                            icon: require('../assets/Radiation.png')
                        },
                        {
                            name: 'Maximum damage',
                            base: 500,
                            icon: require('../assets/Radiation.png')
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
            img: require('../assets/warframes/soulpunch.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 500,
                            icon: require('../assets/Impact.png')
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
            img: require('../assets/warframes/terrify.png'),
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
            img: require('../assets/warframes/desecrate.png'),
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
                            name: 'Energy per corpse',
                            base: 10
                        },
                    ],
                }
            ]
        },
        {
            name: 'Shadows of the Dead',
            img: require('../assets/warframes/shadowsofthedead.png'),
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
    //     frame: [
    // {
    //         name: '',
    //         img: require('../assets/warframes/.png'),
    //         details: [
    //             {
    //                 strength: [
    //                     {
    //                         name: '',
    //                         base: ,
    //                         icon: require('../assets/.png')
    //                     },
    //                 ],
    //                 duration: [
    //                     {
    //                         name: '',
    //                         suffix: 's',
    //                         base: 
    //                     }
    //                 ],
    //                 range: [
    //                     {
    //                         name: '',
    //                         suffix: 'm',
    //                         base: 
    //                     }
    //                 ],
    //                 efficiency: [
    //                     {
    //                         name: 'Energy',
    //                         base: 
    //                     }
    //                 ],
    //             }
    //         ]
    //     },
    //     ],
}

const warframes = [
    {
        name: 'ASH',
        img: require('../assets/warframes/ash.png'),
        polarities: ['madurai', 'madurai'],
        aura: 'madurai',
        exilus: undefined,
        armor: 65,
        energy: 150,
        baseEnergy: 100,
        health: 450,
        baseHealth: 150,
        shields: 300,
        baseShield: 100,
        speed: 1.15,
        abilities: abilities.ash
    },
    {
        name: 'ASH PRIME',
        img: require('../assets/warframes/ash-prime.png'),
        polarities: ['naramon', 'madurai', 'madurai'],
        aura: 'madurai',
        exilus: undefined,
        armor: 150,
        energy: 150,
        baseEnergy: 100,
        health: 450,
        baseHealth: 150,
        shields: 375,
        baseShield: 125,
        speed: 1.2,
        abilities: abilities.ash
    },
    {
        name: 'ATLAS',
        img: require('../assets/warframes/atlas.png'),
        polarities: ['naramon', 'vazarin', 'madurai'],
        aura: 'madurai',
        exilus: undefined,
        armor: 450,
        energy: 225,
        baseEnergy: 150,
        health: 300,
        baseHealth: 100,
        shields: 300,
        baseShield: 100,
        speed: 0.9,
        abilities: abilities.atlas
    },
    {
        name: 'BANSHEE',
        img: require('../assets/warframes/banshee.png'),
        polarities: ['madurai', 'madurai'],
        aura: 'madurai',
        exilus: undefined,
        armor: 15,
        energy: 225,
        baseEnergy: 150,
        health: 300,
        baseHealth: 100,
        shields: 300,
        baseShield: 100,
        speed: 1.1,
        abilities: abilities.banshee
    },
    {
        name: 'BANSHEE PRIME',
        img: require('../assets/warframes/banshee-prime.png'),
        polarities: ['naramon', 'madurai', 'madurai'],
        aura: 'madurai',
        exilus: undefined,
        armor: 65,
        energy: 262,
        baseEnergy: 175,
        health: 300,
        baseHealth: 100,
        shields: 300,
        baseShield: 100,
        speed: 1.15,
        abilities: abilities.banshee
    },
    {
        name: 'CHROMA',
        img: require('../assets/warframes/chroma.png'),
        polarities: ['naramon', 'madurai'],
        aura: 'madurai',
        exilus: undefined,
        armor: 350,
        energy: 225,
        baseEnergy: 150,
        health: 300,
        baseHealth: 100,
        shields: 300,
        baseShield: 100,
        speed: 1,
        abilities: abilities.chroma
    },
    {
        name: 'CHROMA PRIME',
        img: require('../assets/warframes/chroma-prime.png'),
        polarities: ['naramon', 'vazarin', 'madurai', 'naramon'],
        aura: 'madurai',
        exilus: undefined,
        armor: 425,
        energy: 300,
        baseEnergy: 200,
        health: 300,
        baseHealth: 100,
        shields: 300,
        baseShield: 100,
        speed: 1,
        abilities: abilities.chroma
    },
    {
        name: 'EMBER',
        img: require('../assets/warframes/ember.png'),
        polarities: ['naramon', 'naramon'],
        aura: 'madurai',
        exilus: undefined,
        armor: 100,
        energy: 225,
        baseEnergy: 150,
        health: 300,
        baseHealth: 100,
        shields: 300,
        baseShield: 100,
        speed: 1.1,
        abilities: abilities.ember
    },
    {
        name: 'EMBER PRIME',
        img: require('../assets/warframes/ember-prime.png'),
        polarities: ['madurai', 'vazarin'],
        aura: 'madurai',
        exilus: undefined,
        armor: 125,
        energy: 225,
        baseEnergy: 150,
        health: 300,
        baseHealth: 100,
        shields: 375,
        baseShield: 125,
        speed: 1.1,
        abilities: abilities.ember
    },
    {
        name: 'EQUINOX',
        img: require('../assets/warframes/equinox.png'),
        polarities: ['vazarin', 'madurai'],
        aura: 'naramon',
        exilus: undefined,
        armor: 100,
        energy: 225,
        baseEnergy: 150,
        health: 300,
        baseHealth: 100,
        shields: 300,
        baseShield: 100,
        speed: 1.15,
        abilities: abilities.equinox
    },
    {
        name: 'EXCALIBUR',
        img: require('../assets/warframes/excalibur.png'),
        polarities: ['vazarin', 'madurai'],
        aura: undefined,
        exilus: undefined,
        armor: 225,
        energy: 150,
        baseEnergy: 100,
        health: 300,
        baseHealth: 100,
        shields: 300,
        baseShield: 100,
        speed: 1,
        abilities: abilities.excalibur
    },
    {
        name: 'EXCALIBUR PRIME',
        img: require('../assets/warframes/excalibur-prime.png'),
        polarities: ['madurai', 'umbra', 'umbra', 'umbra'],
        aura: 'madurai',
        exilus: undefined,
        armor: 300,
        energy: 225,
        baseEnergy: 150,
        health: 300,
        baseHealth: 100,
        shields: 300,
        baseShield: 100,
        speed: 1,
        abilities: abilities.excalibur
    },
    {
        name: 'EXCALIBUR UMBRA',
        img: require('../assets/warframes/excalibur-umbra.png'),
        polarities: ['vazarin', 'madurai', 'madurai'],
        aura: 'madurai',
        exilus: undefined,
        armor: 300,
        energy: 225,
        baseEnergy: 150,
        health: 300,
        baseHealth: 100,
        shields: 300,
        baseShield: 100,
        speed: 1,
        abilities: abilities.excalibur
    },
    {
        name: 'FROST',
        img: require('../assets/warframes/frost.png'),
        polarities: ['naramon', 'vazarin'],
        aura: 'vazarin',
        exilus: undefined,
        armor: 300,
        energy: 150,
        baseEnergy: 100,
        health: 300,
        baseHealth: 100,
        shields: 450,
        baseShield: 150,
        speed: 0.95,
        abilities: abilities.frost
    },
    {
        name: 'FROST PRIME',
        img: require('../assets/warframes/frost-prime.png'),
        polarities: ['naramon', 'vazarin', 'vazarin'],
        aura: 'vazarin',
        exilus: undefined,
        armor: 300,
        energy: 150,
        baseEnergy: 100,
        health: 300,
        baseHealth: 100,
        shields: 525,
        baseShield: 175,
        speed: 0.95,
        abilities: abilities.frost
    },
    {
        name: 'GARA',
        img: require('../assets/warframes/gara.png'),
        polarities: ['madurai', 'madurai'],
        aura: 'vazarin',
        exilus: undefined,
        armor: 125,
        energy: 225,
        baseEnergy: 150,
        health: 300,
        baseHealth: 100,
        shields: 300,
        baseShield: 100,
        speed: 1.15,
        abilities: abilities.gara
    },
    {
        name: 'HARROW',
        img: require('../assets/warframes/harrow.png'),
        polarities: ['vazarin', 'naramon'],
        aura: 'naramon',
        exilus: undefined,
        armor: 150,
        energy: 150,
        baseEnergy: 100,
        health: 300,
        baseHealth: 100,
        shields: 450,
        baseShield: 150,
        speed: 1,
        abilities: abilities.harrow
    },
    {
        name: 'HYDROID',
        img: require('../assets/warframes/hydroid.png'),
        polarities: ['madurai', 'naramon'],
        aura: 'naramon',
        exilus: undefined,
        armor: 200,
        energy: 188,
        baseEnergy: 125,
        health: 300,
        baseHealth: 100,
        shields: 375,
        baseShield: 125,
        speed: 1.05,
        abilities: abilities.hydroid
    },
    {
        name: 'HYDROID PRIME',
        img: require('../assets/warframes/hydroid-prime.png'),
        polarities: ['madurai', 'naramon'],
        aura: 'naramon',
        exilus: undefined,
        armor: 200,
        energy: 188,
        baseEnergy: 125,
        health: 300,
        baseHealth: 100,
        shields: 375,
        baseShield: 125,
        speed: 1.05,
        abilities: abilities.hydroid
    },
    {
        name: 'INAROS',
        img: require('../assets/warframes/inaros.png'),
        polarities: ['vazarin', 'vazarin'],
        aura: 'naramon',
        exilus: 'naramon',
        armor: 200,
        energy: 150,
        baseEnergy: 100,
        health: 2200,
        baseHealth: 550,
        shields: 0,
        baseShield: 0,
        speed: 1,
        abilities: abilities.inaros
    },
    {
        name: 'IVARA',
        img: require('../assets/warframes/ivara.png'),
        polarities: ['vazarin', 'naramon'],
        aura: 'naramon',
        exilus: undefined,
        armor: 65,
        energy: 262,
        baseEnergy: 175,
        health: 225,
        baseHealth: 75,
        shields: 300,
        baseShield: 100,
        speed: 1.15,
        abilities: abilities.ivara
    },
    {
        name: 'KHORA',
        img: require('../assets/warframes/khora.png'),
        polarities: ['madurai', 'naramon'],
        aura: 'vazarin',
        exilus: 'naramon',
        armor: 275,
        energy: 188,
        baseEnergy: 125,
        health: 375,
        baseHealth: 125,
        shields: 300,
        baseShield: 100,
        speed: 1.05,
        abilities: abilities.khora
    },
    {
        name: 'LIMBO',
        img: require('../assets/warframes/limbo.png'),
        polarities: ['madurai', 'madurai'],
        aura: 'naramon',
        exilus: undefined,
        armor: 65,
        energy: 225,
        baseEnergy: 150,
        health: 300,
        baseHealth: 100,
        shields: 225,
        baseShield: 75,
        speed: 1.15,
        abilities: abilities.limbo
    },
    {
        name: 'LIMBO PRIME',
        img: require('../assets/warframes/limbo-prime.png'),
        polarities: ['madurai', 'madurai', 'naramon', 'vazarin'],
        aura: 'naramon',
        exilus: undefined,
        armor: 85,
        energy: 262,
        baseEnergy: 175,
        health: 300,
        baseHealth: 100,
        shields: 300,
        baseShield: 100,
        speed: 1.15,
        abilities: abilities.limbo
    },
    {
        name: 'LOKI',
        img: require('../assets/warframes/loki.png'),
        polarities: ['vazarin', 'madurai'],
        aura: 'naramon',
        exilus: undefined,
        armor: 65,
        energy: 225,
        baseEnergy: 150,
        health: 225,
        baseHealth: 75,
        shields: 225,
        baseShield: 75,
        speed: 1.25,
        abilities: abilities.loki
    },
    {
        name: 'LOKI PRIME',
        img: require('../assets/warframes/loki-prime.png'),
        polarities: ['vazarin', 'vazarin', 'madurai', 'naramon'],
        aura: 'naramon',
        exilus: undefined,
        armor: 65,
        energy: 262,
        baseEnergy: 175,
        health: 225,
        baseHealth: 75,
        shields: 225,
        baseShield: 75,
        speed: 1.25,
        abilities: abilities.loki
    },
    {
        name: 'MAG',
        img: require('../assets/warframes/mag.png'),
        polarities: ['naramon', 'naramon'],
        aura: 'madurai',
        exilus: undefined,
        armor: 65,
        energy: 188,
        baseEnergy: 125,
        health: 225,
        baseHealth: 75,
        shields: 450,
        baseShield: 150,
        speed: 1,
        abilities: abilities.mag
    },
    {
        name: 'MAG PRIME',
        img: require('../assets/warframes/mag-prime.png'),
        polarities: ['naramon', 'naramon', 'madurai'],
        aura: 'madurai',
        exilus: undefined,
        armor: 65,
        energy: 252,
        baseEnergy: 175,
        health: 300,
        baseHealth: 100,
        shields: 450,
        baseShield: 150,
        speed: 1,
        abilities: abilities.mag
    },
    {
        name: 'MESA',
        img: require('../assets/warframes/mesa.png'),
        polarities: ['naramon', 'naramon'],
        aura: 'madurai',
        exilus: undefined,
        armor: 65,
        energy: 150,
        baseEnergy: 100,
        health: 375,
        baseHealth: 125,
        shields: 225,
        baseShield: 75,
        speed: 1.1,
        abilities: abilities.mesa
    },
    {
        name: 'MIRAGE',
        img: require('../assets/warframes/mirage.png'),
        polarities: ['vazarin', 'madurai'],
        aura: 'naramon',
        exilus: undefined,
        armor: 65,
        energy: 225,
        baseEnergy: 150,
        health: 240,
        baseHealth: 80,
        shields: 240,
        baseShield: 80,
        speed: 1.2,
        abilities: abilities.mirage
    },
    {
        name: 'MIRAGE PRIME',
        img: require('../assets/warframes/mirage-prime.png'),
        polarities: ['vazarin', 'vazarin', 'naramon', 'madurai'],
        aura: 'naramon',
        exilus: undefined,
        armor: 150,
        energy: 225,
        baseEnergy: 150,
        health: 240,
        baseHealth: 80,
        shields: 330,
        baseShield: 110,
        speed: 1.2,
        abilities: abilities.mirage
    },
    {
        name: 'NEKROS',
        img: require('../assets/warframes/nekros.png'),
        polarities: ['vazarin', 'madurai'],
        aura: undefined,
        exilus: undefined,
        armor: 65,
        energy: 150,
        baseEnergy: 100,
        health: 300,
        baseHealth: 100,
        shields: 270,
        baseShield: 90,
        speed: 1.1,
        abilities: abilities.nekros
    },
    {
        name: 'NEKROS PRIME',
        img: require('../assets/warframes/nekros-prime.png'),
        polarities: ['madurai', 'vazarin', 'naramon'],
        aura: undefined,
        exilus: undefined,
        armor: 65,
        energy: 188,
        baseEnergy: 125,
        health: 300,
        baseHealth: 100,
        shields: 450,
        baseShield: 150,
        speed: 1.1,
        abilities: abilities.nekros
    },
    {
        name: 'NEZHA',
        img: require('../assets/warframes/nezha.png'),
        polarities: ['vazarin', 'madurai'],
        aura: 'naramon',
        exilus: undefined,
        armor: 175,
        energy: 225,
        baseEnergy: 150,
        health: 375,
        baseHealth: 125,
        shields: 150,
        baseShield: 50,
        speed: 1.15,
        abilities: abilities.nezha
    },
    {
        name: 'NIDUS',
        img: require('../assets/warframes/nidus.png'),
        polarities: ['madurai', 'vazarin'],
        aura: 'madurai',
        exilus: undefined,
        armor: 450,
        energy: 150,
        baseEnergy: 100,
        health: 450,
        baseHealth: 150,
        shields: 0,
        baseShield: 0,
        speed: 1,
        abilities: abilities.nidus
    },
    {
        name: 'NOVA',
        img: require('../assets/warframes/nova.png'),
        polarities: ['madurai', 'madurai'],
        aura: 'naramon',
        exilus: undefined,
        armor: 65,
        energy: 225,
        baseEnergy: 150,
        health: 300,
        baseHealth: 100,
        shields: 225,
        baseShield: 75,
        speed: 1.2,
        abilities: abilities.nova
    },
    {
        name: 'NOVA PRIME',
        img: require('../assets/warframes/nova-prime.png'),
        polarities: ['madurai', 'madurai', 'madurai'],
        aura: 'naramon',
        exilus: undefined,
        armor: 65,
        energy: 262,
        baseEnergy: 175,
        health: 300,
        baseHealth: 100,
        shields: 300,
        baseShield: 100,
        speed: 1.2,
        abilities: abilities.nova
    },
    {
        name: 'NYX',
        img: require('../assets/warframes/nyx.png'),
        polarities: ['madurai', 'naramon'],
        aura: 'naramon',
        exilus: undefined,
        armor: 15,
        energy: 225,
        baseEnergy: 150,
        health: 300,
        baseHealth: 100,
        shields: 300,
        baseShield: 100,
        speed: 1.1,
        abilities: abilities.nyx
    },
    {
        name: 'NYX PRIME',
        img: require('../assets/warframes/nyx-prime.png'),
        polarities: ['madurai', 'naramon', 'vazarin'],
        aura: 'naramon',
        exilus: undefined,
        armor: 50,
        energy: 225,
        baseEnergy: 150,
        health: 300,
        baseHealth: 100,
        shields: 375,
        baseShield: 125,
        speed: 1.12,
        abilities: abilities.nyx
    },
    {
        name: 'OBERON',
        img: require('../assets/warframes/oberon.png'),
        polarities: ['madurai', 'madurai'],
        aura: 'madurai',
        exilus: undefined,
        armor: 150,
        energy: 225,
        baseEnergy: 150,
        health: 375,
        baseHealth: 125,
        shields: 300,
        baseShield: 100,
        speed: 1,
        abilities: abilities.oberon
    },
    {
        name: 'OBERON PRIME',
        img: require('../assets/warframes/oberon-prime.png'),
        polarities: ['naramon', 'naramon', 'madurai', 'madurai'],
        aura: 'madurai',
        exilus: undefined,
        armor: 225,
        energy: 262,
        baseEnergy: 175,
        health: 375,
        baseHealth: 125,
        shields: 300,
        baseShield: 100,
        speed: 1,
        abilities: abilities.oberon
    },
    {
        name: 'OCTAVIA',
        img: require('../assets/warframes/octavia.png'),
        polarities: ['naramon', 'naramon'],
        aura: 'naramon',
        exilus: undefined,
        armor: 125,
        energy: 225,
        baseEnergy: 150,
        health: 300,
        baseHealth: 100,
        shields: 225,
        baseShield: 75,
        speed: 1.05,
        abilities: abilities.octavia
    },
    {
        name: 'REVENANT',
        img: require('../assets/warframes/revenant.png'),
        polarities: ['madurai', 'vazarin'],
        aura: 'naramon',
        exilus: undefined,
        armor: 105,
        energy: 188,
        baseEnergy: 125,
        health: 300,
        baseHealth: 100,
        shields: 675,
        baseShield: 225,
        speed: 1,
        abilities: abilities.revenant
    },
    {
        name: 'RHINO',
        img: require('../assets/warframes/rhino.png'),
        polarities: ['vazarin', 'vazarin'],
        aura: 'madurai',
        exilus: undefined,
        armor: 190,
        energy: 150,
        baseEnergy: 100,
        health: 300,
        baseHealth: 100,
        shields: 450,
        baseShield: 150,
        speed: 0.95,
        abilities: abilities.rhino
    },
    {
        name: 'RHINO PRIME',
        img: require('../assets/warframes/rhino-prime.png'),
        polarities: ['vazarin', 'vazarin', 'naramon'],
        aura: 'madurai',
        exilus: undefined,
        armor: 275,
        energy: 150,
        baseEnergy: 100,
        health: 300,
        baseHealth: 100,
        shields: 450,
        baseShield: 150,
        speed: 1,
        abilities: abilities.rhino
    },
    {
        name: 'SARYN',
        img: require('../assets/warframes/saryn.png'),
        polarities: ['naramon', 'vazarin'],
        aura: 'vazarin',
        exilus: undefined,
        armor: 225,
        energy: 225,
        baseEnergy: 150,
        health: 375,
        baseHealth: 125,
        shields: 300,
        baseShield: 100,
        speed: 0.95,
        abilities: abilities.saryn
    },
    {
        name: 'SARYN PRIME',
        img: require('../assets/warframes/saryn-prime.png'),
        polarities: ['naramon', 'vazarin'],
        aura: 'vazarin',
        exilus: undefined,
        armor: 225,
        energy: 225,
        baseEnergy: 150,
        health: 375,
        baseHealth: 125,
        shields: 300,
        baseShield: 100,
        speed: 0.95,
        abilities: abilities.saryn
    },
    {
        name: 'TITANIA',
        img: require('../assets/warframes/titania.png'),
        polarities: ['madurai', 'vazarin'],
        aura: 'madurai',
        exilus: undefined,
        armor: 65,
        energy: 150,
        baseEnergy: 100,
        health: 300,
        baseHealth: 100,
        shields: 300,
        baseShield: 100,
        speed: 1,
        abilities: abilities.titania
    },
    {
        name: 'TRINITY',
        img: require('../assets/warframes/trinity.png'),
        polarities: ['vazarin', 'vazarin'],
        aura: 'vazarin',
        exilus: undefined,
        armor: 15,
        energy: 225,
        baseEnergy: 150,
        health: 300,
        baseHealth: 100,
        shields: 300,
        baseShield: 100,
        speed: 1,
        abilities: abilities.trinity
    },
    {
        name: 'TRINITY PRIME',
        img: require('../assets/warframes/trinity-prime.png'),
        polarities: ['vazarin', 'vazarin', 'madurai', 'naramon'],
        aura: 'vazarin',
        exilus: undefined,
        armor: 15,
        energy: 225,
        baseEnergy: 150,
        health: 300,
        baseHealth: 100,
        shields: 450,
        baseShield: 150,
        speed: 1.1,
        abilities: abilities.trinity
    },
    {
        name: 'VALKYR',
        img: require('../assets/warframes/valkyr.png'),
        polarities: ['madurai', 'madurai'],
        aura: 'madurai',
        exilus: undefined,
        armor: 600,
        energy: 150,
        baseEnergy: 100,
        health: 300,
        baseHealth: 100,
        shields: 150,
        baseShield: 50,
        speed: 1.1,
        abilities: abilities.valkyr
    },
    {
        name: 'VALKYR PRIME',
        img: require('../assets/warframes/valkyr-prime.png'),
        polarities: ['madurai', 'madurai', 'madurai'],
        aura: 'madurai',
        exilus: undefined,
        armor: 700,
        energy: 225,
        baseEnergy: 150,
        health: 300,
        baseHealth: 100,
        shields: 150,
        baseShield: 50,
        speed: 1.1,
        abilities: abilities.valkyr
    },
    {
        name: 'VAUBAN',
        img: require('../assets/warframes/vauban.png'),
        polarities: ['naramon', 'madurai'],
        aura: 'naramon',
        exilus: undefined,
        armor: 50,
        energy: 225,
        baseEnergy: 150,
        health: 300,
        baseHealth: 100,
        shields: 225,
        baseShield: 75,
        speed: 1,
        abilities: abilities.vauban
    },
    {
        name: 'VAUBAN PRIME',
        img: require('../assets/warframes/vauban-prime.png'),
        polarities: ['naramon', 'madurai', 'vazarin'],
        aura: 'naramon',
        exilus: undefined,
        armor: 100,
        energy: 225,
        baseEnergy: 150,
        health: 300,
        baseHealth: 100,
        shields: 300,
        baseShield: 100,
        speed: 1,
        abilities: abilities.vauban
    },
    {
        name: 'VOLT',
        img: require('../assets/warframes/volt.png'),
        polarities: ['naramon', 'madurai'],
        aura: 'madurai',
        exilus: undefined,
        armor: 15,
        energy: 150,
        baseEnergy: 100,
        health: 300,
        baseHealth: 100,
        shields: 450,
        baseShield: 150,
        speed: 1,
        abilities: abilities.volt
    },
    {
        name: 'VOLT PRIME',
        img: require('../assets/warframes/volt-prime.png'),
        polarities: ['naramon', 'madurai', 'madurai'],
        aura: 'madurai',
        exilus: undefined,
        armor: 100,
        energy: 300,
        baseEnergy: 200,
        health: 300,
        baseHealth: 100,
        shields: 450,
        baseShield: 150,
        speed: 1,
        abilities: abilities.volt
    },
    {
        name: 'WUKONG',
        img: require('../assets/warframes/wukong.png'),
        polarities: ['naramon', 'vazarin'],
        aura: 'madurai',
        exilus: undefined,
        armor: 225,
        energy: 150,
        baseEnergy: 100,
        health: 300,
        baseHealth: 100,
        shields: 375,
        baseShield: 125,
        speed: 0.95,
        abilities: abilities.wukong
    },
    {
        name: 'ZEPHYR',
        img: require('../assets/warframes/zephyr.png'),
        polarities: ['madurai', 'naramon'],
        aura: 'vazarin',
        exilus: undefined,
        armor: 15,
        energy: 150,
        baseEnergy: 100,
        health: 450,
        baseHealth: 150,
        shields: 450,
        baseShield: 150,
        speed: 1.15,
        abilities: abilities.zephyr
    },
    {
        name: 'ZEPHYR PRIME',
        img: require('../assets/warframes/zephyr-prime.png'),
        polarities: ['madurai', 'madurai', 'vazarin', 'naramon'],
        aura: 'vazarin',
        exilus: undefined,
        armor: 75,
        energy: 225,
        baseEnergy: 150,
        health: 450,
        baseHealth: 150,
        shields: 450,
        baseShield: 150,
        speed: 1.2,
        abilities: abilities.zephyr
    },
    // {
    //     name: '',
    //     img: require('../assets/warframes/.png'),
    //     polarities: [],
    //     aura: '',
    //     exilus: undefined,
    //     armor: ,
    //     energy: ,
    //     baseEnergy: ,
    //     health: ,
    //     baseHealth: ,
    //     shields: ,
    //     baseShield: ,
    //     speed: ,
    //     abilities: abilities.
    // },
]


export default warframes;