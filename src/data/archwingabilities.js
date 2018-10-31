const abilities = {
    amesha: [
        {
            name: 'Watchful Swarm',
            img: require('../assets/archwings/watchfulswarm.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Drones',
                            base: 15,
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
            name: 'Benevolent Decoy',
            img: require('../assets/archwings/benevolentdecoy.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Healing Multiplier',
                            suffix: 'x',
                            base: 1.5,
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
                            name: 'Bubble radius',
                            suffix: 'm',
                            base: 80
                        },
                        {
                            name: 'Heal radius',
                            suffix: 'm',
                            base: 100
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
            name: 'Warding Grace',
            img: require('../assets/archwings/wardinggrace.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Slow',
                            suffix: '%',
                            base: 50,
                        },
                    ],
                    range: [
                        {
                            name: 'Radius in archwing',
                            suffix: 'm',
                            base: 400
                        },
                        {
                            name: 'Radius in landscape',
                            suffix: 'm',
                            base: 40
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
                            base: 10
                        },
                    ],
                }
            ]
        },{
            name: 'Vengful Rush',
            img: require('../assets/archwings/vengfulrush.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage conversion',
                            suffix: '%',
                            base: 100,
                        },
                        {
                            name: 'Ability bonus',
                            suffix: '%',
                            base: 10,
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
                            name: 'Radius in archwing',
                            suffix: 'm',
                            base: 400
                        },
                        {
                            name: 'Radius in landscape',
                            suffix: 'm',
                            base: 40
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
    odonata: [
        {
            name: 'Energy Shell',
            img: require('../assets/archwings/energyshell.png'),
            details: [
                {
                    none: [
                        {
                            name: 'Heat damage bonus',
                            suffix: '%',
                            base: 50,
                            icon: require('../assets/Heat.png')
                        },
                        {
                            name: 'Critical damage multiplier',
                            suffix: 'x',
                            base: 2,
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 22
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
            name: 'Disarray',
            img: require('../assets/archwings/disarray.png'),
            details: [
                {
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 8
                        },
                    ],
                    range: [
                        {
                            name: 'Radius in archwing',
                            suffix: 'm',
                            base: 180
                        },
                        {
                            name: 'Radius in landscape',
                            suffix: 'm',
                            base: 18
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
            name: 'Seeking Fire',
            img: require('../assets/archwings/seekingfire.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Volleys',
                            base: 8,
                        },
                        {
                            name: 'Initial damage',
                            base: 300,
                            icon: require('../assets/Blast.png')
                        },
                        {
                            name: 'Area damage',
                            base: 40,
                            icon: require('../assets/Blast.png')
                        },
                    ],
                    range: [
                        {
                            name: 'Radius in archwing',
                            suffix: 'm',
                            base: 480
                        },
                        {
                            name: 'Radius in landscape',
                            suffix: 'm',
                            base: 48
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
            name: 'Repel',
            img: require('../assets/archwings/repel.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 1500,
                            icon: require('../assets/Impact.png')
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 11
                        },
                    ],
                    range: [
                        {
                            name: 'Radius in archwing',
                            suffix: 'm',
                            base: 140
                        },
                        {
                            name: 'Radius in landscape',
                            suffix: 'm',
                            base: 140
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
    elytron: [
        {
            name: 'Bloomer',
            img: require('../assets/archwings/bloomer.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Damage',
                            base: 1000,
                            icon: require('../assets/Blast.png')
                        },
                    ],
                    range: [
                        {
                            name: 'Explosion radius in archwing',
                            suffix: 'm',
                            base: 240
                        },
                        {
                            name: 'Explosion radius in landscape',
                            suffix: 'm',
                            base: 24
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
            name: 'Core Vent',
            img: require('../assets/archwings/corevent.png'),
            details: [
                {
                    duration: [
                        {
                            name: 'Contrail duration',
                            suffix: 's',
                            base: 16
                        },
                        {
                            name: 'Vent duration',
                            suffix: 's',
                            base: 9
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
            name: 'Thumper',
            img: require('../assets/archwings/thumper.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Explosion damage',
                            base: 500,
                            icon: require('../assets/Blast.png')
                        },
                    ],
                    duration: [
                        {
                            name: 'Explosions/s',
                            suffix: 's',
                            base: 3
                        },
                        {
                            name: 'Barrage duration',
                            suffix: 's',
                            base: 45
                        },
                    ],
                    range: [
                        {
                            name: 'Barrage radius in archwing',
                            suffix: 'm',
                            base: 180
                        },
                        {
                            name: 'Barrage radius in landscape',
                            suffix: 'm',
                            base: 18
                        },
                        {
                            name: 'Explosion radius in archwing',
                            suffix: 'm',
                            base: 80
                        },
                        {
                            name: 'Explosion radius in landscape',
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
            name: 'Warhead',
            img: require('../assets/archwings/warhead.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Explosion damage',
                            suffix: '',
                            base: 1750,
                            icon: require('../assets/Blast.png')
                        },
                    ],
                    range: [
                        {
                            name: 'Explosion radius in archwing',
                            suffix: 'm',
                            base: 240
                        },
                        {
                            name: 'Explosion radius in landscape',
                            suffix: 'm',
                            base: 24
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
    itzal: [
        {
            name: 'Blink',
            img: require('../assets/archwings/blink.png'),
            details: [
                {
                    duration: [
                        {
                            name: 'Stun duration in archwing',
                            suffix: 's',
                            base: 15
                        },
                    ],
                    none:[
                        {
                            name: 'Stun duration in landscape',
                            suffix: 's',
                            base: 3
                        },
                    ],
                    range: [
                        {
                            name: 'Teleportation range in archwing',
                            suffix: 'm',
                            base: 400
                        },
                        {
                            name: 'Teleportation range in landscape',
                            suffix: 'm',
                            base: 40
                        },
                        {
                            name: 'Stun radius in archwing',
                            suffix: 'm',
                            base: 200
                        },
                        {
                            name: 'Stun radius in landscape',
                            suffix: 'm',
                            base: 20
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
            name: 'Penumbra',
            img: require('../assets/archwings/penumbra.png'),
            details: [
                {
                    range: [
                        {
                            name: 'Cloaking field radius in archwing',
                            suffix: 'm',
                            base: 76
                        },
                        {
                            name: 'Cloaking field radius in landscape',
                            suffix: 'm',
                            base: 7.6
                        },
                    ],
                    efficiency: [
                        {
                            name: 'Energy',
                            base: 15
                        },
                    ],
                    channel: [
                        {
                            name: 'Energy drain/s',
                            base: 5
                        },
                    ],
                }
            ]
        },
        {
            name: 'Cosmic Crush',
            img: require('../assets/archwings/cosmiccrush.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Explosion damage',
                            base: 1500,
                            icon: require('../assets/Blast.png')
                        },
                    ],
                    range: [
                        {
                            name: 'Radius in archwing',
                            suffix: 'm',
                            base: 140
                        },
                        {
                            name: 'Radius in landscape',
                            suffix: 'm',
                            base: 14
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
            name: 'Fighter Escort',
            img: require('../assets/archwings/fighterescort.png'),
            details: [
                {
                    strength: [
                        {
                            name: 'Drones',
                            base: 8,
                        },
                        {
                            name: 'Explosion damage',
                            base: 2500,
                            icon: require('../assets/Blast.png')
                        },
                    ],
                    duration: [
                        {
                            name: 'Duration',
                            suffix: 's',
                            base: 30
                        },
                    ],
                    range: [
                        {
                            name: 'Explosion radius in archwing',
                            suffix: 'm',
                            base: 160
                        },
                        {
                            name: 'Explosion radius in landscape',
                            suffix: 'm',
                            base: 16
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
    // frame: [
        // {
        //     name: '',
        //     img: require('../assets/archwings/.png'),
        //     details: [
        //         {
        //             strength: [
        //                 {
        //                     name: '',
        //                     suffix: '',
        //                     base: ,
        //                     icon: require('../assets/.png')
        //                 },
        //             ],
        //             duration: [
        //                 {
        //                     name: '',
        //                     suffix: 's',
        //                     base: 
        //                 },
        //             ],
        //             range: [
        //                 {
        //                     name: '',
        //                     suffix: 'm',
        //                     base: 
        //                 },
        //             ],
        //             efficiency: [
        //                 {
        //                     name: 'Energy',
        //                     base: 
        //                 },
        //             ],
        //         }
        //     ]
        // },
    // ],
}

export default abilities;