const meleeStats = [
  {
    name: 'ACK & BRUNT',
    mastery: 3,
    type: [
      'SWORD & SHIELD',
      'ACK & BRUNT'
    ],
    polarities: [],
    stance: 'madurai',
    disposition: 3,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.8333,
        slide: 107,
        wall: 200,
        slam: 50,
        critChance: 0.2,
        critMult: 2,
        status: 0.1,
        damage: 50,
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
    name: 'AMPHIS',
    mastery: 0,
    type: [
      'STAVES',
      'AMPHIS'
    ],
    polarities: [
      'naramon'
    ],
    stance: 'madurai',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        speed: 1.25,
        slide: 118,
        wall: 92,
        slam: 55,
        critChance: 0.075,
        critMult: 1.5,
        status: 0.1,
        damage: 55,
        split: [
          {
            type: 'Impact',
            percent: 0.7
          },
          {
            type: 'Slash',
            percent: 0.14909090909090908
          },
          {
            type: 'Puncture',
            percent: 0.1509090909090909
          }
        ]
      }
    ]
  },
  {
    name: 'ANKU',
    mastery: 3,
    type: [
      'SCYTHES',
      'ANKU'
    ],
    polarities: [
      'madurai'
    ],
    stance: 'zenurik',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        speed: 1.0833,
        slide: 140,
        wall: 140,
        slam: 70,
        critChance: 0.2,
        critMult: 2,
        status: 0.1,
        damage: 70,
        split: [
          {
            type: 'Impact',
            percent: 0.15
          },
          {
            type: 'Slash',
            percent: 0.05
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
    name: 'ANKYROS',
    mastery: 0,
    type: [
      'FISTS',
      'ANKYROS'
    ],
    polarities: [],
    stance: 'vazarin',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        speed: 1.1667,
        slide: 90,
        wall: 90,
        slam: 30,
        critChance: 0.2,
        critMult: 2,
        status: 0.1,
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
        ]
      }
    ]
  },
  {
    name: 'ANKYROS PRIME',
    mastery: 0,
    type: [
      'FISTS',
      'ANKYROS PRIME'
    ],
    polarities: [
      'madurai',
      'madurai'
    ],
    stance: 'unairu',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        speed: 1.25,
        slide: 114,
        wall: 114,
        slam: 38,
        critChance: 0.2,
        critMult: 2,
        status: 0.15,
        damage: 38,
        split: [
          {
            type: 'Impact',
            percent: 0.7000000000000001
          },
          {
            type: 'Slash',
            percent: 0.15
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
    name: 'ARCA TITRON',
    mastery: 10,
    type: [
      'HAMMERS',
      'ARCA TITRON'
    ],
    polarities: [
      'madurai',
      'naramon'
    ],
    stance: 'madurai',
    disposition: 3,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.7333,
        slide: 360,
        wall: 360,
        slam: 180,
        critChance: 0.24,
        critMult: 2,
        status: 0.38,
        damage: 180,
        split: [
          {
            type: 'Impact',
            percent: 0.65
          },
          {
            type: 'Slash',
            percent: 0.35
          }
        ]
      }
    ]
  },
  {
    name: 'ATTERAX',
    mastery: 2,
    type: [
      'WHIPS',
      'ATTERAX'
    ],
    polarities: [],
    stance: 'vazarin',
    disposition: 1,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.9167,
        slide: 96,
        wall: 180,
        slam: 45,
        critChance: 0.25,
        critMult: 3,
        status: 0.2,
        damage: 45,
        split: [
          {
            type: 'Impact',
            percent: 0.05
          },
          {
            type: 'Slash',
            percent: 0.9
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
    name: 'BO',
    mastery: 0,
    type: [
      'STAVES',
      'BO'
    ],
    polarities: [
      'vazarin'
    ],
    stance: 'unairu',
    disposition: 4,
    channelMult: 1.5,
    modes: [
      {
        speed: 1,
        slide: 107,
        wall: 83,
        slam: 50,
        critChance: 0.125,
        critMult: 2,
        status: 0.2,
        damage: 50,
        split: [
          {
            type: 'Impact',
            percent: 0.9
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
    name: 'BO PRIME',
    mastery: 5,
    type: [
      'STAVES',
      'BO PRIME'
    ],
    polarities: [
      'vazarin',
      'madurai'
    ],
    stance: 'unairu',
    disposition: 4,
    channelMult: 1.5,
    modes: [
      {
        speed: 1.0833,
        slide: 161,
        wall: 125,
        slam: 75,
        critChance: 0.125,
        critMult: 2,
        status: 0.25,
        damage: 75,
        split: [
          {
            type: 'Impact',
            percent: 0.9
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
    name: 'BOLTACE',
    mastery: 2,
    type: [
      'TONFAS',
      'BOLTACE'
    ],
    polarities: [],
    stance: 'madurai',
    disposition: 3,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.9167,
        slide: 510,
        wall: 340,
        slam: 85,
        critChance: 0.05,
        critMult: 1.5,
        status: 0.25,
        damage: 85,
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
    name: 'BROKEN SCEPTER',
    mastery: 5,
    type: [
      'STAVES',
      'BROKEN SCEPTER'
    ],
    polarities: [
      'naramon'
    ],
    stance: 'unairu',
    disposition: 4,
    channelMult: 1.5,
    modes: [
      {
        speed: 1.25,
        slide: 129,
        wall: 100,
        slam: 60,
        critChance: 0.1,
        critMult: 2,
        status: 0.3,
        damage: 60,
        split: [
          {
            type: 'Impact',
            percent: 0.7
          },
          {
            type: 'Slash',
            percent: 0.2
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
    name: 'BROKEN WAR',
    mastery: 10,
    type: [
      'SWORDS',
      'BROKEN WAR'
    ],
    polarities: [
      'madurai',
      'naramon'
    ],
    stance: 'madurai',
    disposition: 2,
    channelMult: 1.5,
    modes: [
      {
        speed: 1,
        slide: 193,
        wall: 360,
        slam: 90,
        critChance: 0.15,
        critMult: 1.5,
        status: 0.1,
        damage: 90,
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
    name: 'CASSOWAR',
    mastery: 5,
    type: [
      'POLEARMS',
      'CASSOWAR'
    ],
    polarities: [
      'madurai',
      'vazarin'
    ],
    stance: 'zenurik',
    disposition: 3,
    channelMult: 1.5,
    modes: [
      {
        speed: 1.1667,
        slide: 156,
        wall: 117,
        slam: 70,
        critChance: 0.06,
        critMult: 1.4,
        status: 0.28,
        damage: 70,
        split: [
          {
            type: 'Impact',
            percent: 0.22
          },
          {
            type: 'Slash',
            percent: 0.44
          },
          {
            type: 'Puncture',
            percent: 0.34
          }
        ]
      }
    ]
  },
  {
    name: 'CAUSTACYST',
    mastery: 7,
    type: [
      'SCYTHES',
      'CAUSTACYST'
    ],
    polarities: [
      'madurai'
    ],
    stance: 'zenurik',
    disposition: 4,
    channelMult: 1.5,
    modes: [
      {
        speed: 1,
        slide: 150,
        wall: 150,
        slam: 75,
        critChance: 0.05,
        critMult: 2,
        status: 0.3,
        damage: 75,
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
    name: 'CERAMIC DAGGER',
    mastery: 3,
    type: [
      'DAGGERS',
      'CERAMIC DAGGER'
    ],
    polarities: [
      'madurai'
    ],
    stance: 'madurai',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        speed: 1,
        slide: 75,
        wall: 105,
        slam: 35,
        critChance: 0.05,
        critMult: 1.5,
        status: 0.1,
        damage: 35,
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
    name: 'CERATA',
    mastery: 3,
    type: [
      'GLAIVES',
      'CERATA'
    ],
    polarities: [
      'madurai',
      'vazarin'
    ],
    stance: 'naramon',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        name: 'Melee',
        speed: 1,
        slide: 220,
        wall: 132,
        slam: 44,
        critChance: 0.15,
        critMult: 2,
        status: 0.3,
        damage: 44,
        split: [
          {
            type: 'Toxin',
            percent: 1
          }
        ]
      },
      {
        name: 'Throw',
        speed: 1,
        critChance: 0.15,
        critMult: 2,
        status: 0.3,
        damage: 350,
        split: [
          {
            type: 'Impact',
            percent: 20 / 350
          },
          {
            type: 'Puncture',
            percent: 160 / 350
          },
          {
            type: 'Slash',
            percent: 20 / 350
          },
          {
            type: 'Toxin',
            percent: 150 / 350
          },
        ]
      },
      {
        name: 'Charged Throw',
        speed: 1,
        critChance: 0.15,
        critMult: 2,
        status: 0.33,
        damage: 640,
        split: [
          {
            type: 'Impact',
            percent: 0.065625
          },
          {
            type: 'Puncture',
            percent: 0.525
          },
          {
            type: 'Slash',
            percent: 0.065625
          },
          {
            type: 'Toxin',
            percent: 0.34375
          },
        ]
      }
    ]
  },
  {
    name: 'COBRA & CRANE',
    mastery: 10,
    type: [
      'SWORD & SHIELD',
      'COBRA & CRANE'
    ],
    polarities: [],
    stance: 'madurai',
    disposition: 3,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.9167,
        slide: 214,
        wall: 400,
        slam: 100,
        critChance: 0.1,
        critMult: 1.5,
        status: 0.36,
        damage: 100,
        split: [
          {
            type: 'Impact',
            percent: 0.9
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
    name: 'CRONUS',
    mastery: 0,
    type: [
      'SWORDS',
      'CRONUS'
    ],
    polarities: [
      'madurai'
    ],
    stance: 'madurai',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.9167,
        slide: 75,
        wall: 140,
        slam: 35,
        critChance: 0.05,
        critMult: 1.5,
        status: 0.1,
        damage: 35,
        split: [
          {
            type: 'Impact',
            percent: 0.3
          },
          {
            type: 'Slash',
            percent: 0.5485714285714286
          },
          {
            type: 'Puncture',
            percent: 0.1514285714285714
          }
        ]
      }
    ]
  },
  {
    name: 'DAKRA PRIME',
    mastery: 6,
    type: [
      'SWORDS',
      'DAKRA PRIME'
    ],
    polarities: [
      'madurai',
      'naramon'
    ],
    stance: 'madurai',
    disposition: 4,
    channelMult: 1.5,
    modes: [
      {
        speed: 1,
        slide: 129,
        wall: 240,
        slam: 60,
        critChance: 0.15,
        critMult: 1.5,
        status: 0.1,
        damage: 60,
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
    name: 'DARK DAGGER',
    mastery: 0,
    type: [
      'DAGGERS',
      'DARK DAGGER'
    ],
    polarities: [],
    stance: 'unairu',
    disposition: 1,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.9167,
        slide: 75,
        wall: 105,
        slam: 35,
        critChance: 0.05,
        critMult: 1.5,
        status: 0.1,
        damage: 35,
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
    name: 'DARK SPLIT-SWORD (DUAL SWORDS)',
    mastery: 5,
    type: [
      'DUAL SWORDS',
      'DARK SPLIT-SWORD'
    ],
    polarities: ['madurai'],
    stance: 'zenurik',
    modes: [
      {
        speed: 1.17,
        slide: 390,
        wall: 260,
        slam: 130,
        critChance: 0.25,
        critMult: 2.5,
        status: 0.15,
        damage: 65,
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
    name: 'DARK SPLIT-SWORD (HEAVY BLADE)',
    mastery: 5,
    type: [
      'HEAVY BLADES',
      'DARK SPLIT-SWORD'
    ],
    polarities: ['madurai'],
    stance: 'zenurik',
    modes: [
      {
        speed: 0.917,
        slide: 180,
        wall: 180,
        slam: 180,
        critChance: 0.1,
        critMult: 2,
        status: 0.25,
        damage: 90,
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
    name: 'DARK SWORD',
    mastery: 0,
    type: [
      'SWORDS',
      'DARK SWORD'
    ],
    polarities: [],
    stance: 'unairu',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.8333,
        slide: 79,
        wall: 148,
        slam: 37,
        critChance: 0.05,
        critMult: 1.5,
        status: 0.1,
        damage: 37,
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
    name: 'DESERT WIND',
    mastery: 0,
    type: [
      'SERENE STORM',
      'DESERT WIND'
    ],
    polarities: [
      'madurai',
      'madurai',
      'vazarin'
    ],
    stance: undefined,
    disposition: 0,
    channelMult: 1.5,
    exalted: true,
    modes: [
      {
        speed: 1,
        slide: 750,
        wall: 750,
        slam: 250,
        critChance: 0.5,
        critMult: 2,
        status: 0.1,
        damage: 250,
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
    name: 'DESTREZA',
    mastery: 7,
    type: [
      'RAPIERS',
      'DESTREZA'
    ],
    polarities: [
      'madurai'
    ],
    stance: 'naramon',
    disposition: 4,
    channelMult: 1.5,
    modes: [
      {
        speed: 1,
        slide: 161,
        wall: 300,
        slam: 75,
        critChance: 0.2,
        critMult: 2,
        status: 0.05,
        damage: 75,
        split: [
          {
            type: 'Impact',
            percent: 0.025333333333333333
          },
          {
            type: 'Slash',
            percent: 0.12533333333333332
          },
          {
            type: 'Puncture',
            percent: 0.8506666666666667
          }
        ]
      }
    ]
  },
  {
    name: 'DESTREZA PRIME',
    mastery: 10,
    type: [
      'RAPIERS',
      'DESTREZA PRIME'
    ],
    polarities: [
      'madurai',
      'madurai'
    ],
    stance: 'naramon',
    disposition: 4,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.9167,
        slide: 163,
        wall: 304,
        slam: 76,
        critChance: 0.24,
        critMult: 3,
        status: 0.18,
        damage: 76,
        split: [
          {
            type: 'Impact',
            percent: 0.11973684210526316
          },
          {
            type: 'Slash',
            percent: 0.18026315789473682
          },
          {
            type: 'Puncture',
            percent: 0.7000000000000001
          }
        ]
      }
    ]
  },
  {
    name: 'DEX DAKRA',
    mastery: 6,
    type: [
      'DUAL SWORDS',
      'DEX DAKRA'
    ],
    polarities: [
      'naramon'
    ],
    stance: 'zenurik',
    disposition: 4,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.8833,
        slide: 390,
        wall: 260,
        slam: 65,
        critChance: 0.1,
        critMult: 2,
        status: 0.2,
        damage: 65,
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
    name: 'DIWATA',
    mastery: 6,
    type: [
      'DIWATA'
    ],
    polarities: [
      'madurai',
      'madurai',
      'naramon'
    ],
    stance: undefined,
    disposition: 0,
    channelMult: 1.5,
    exalted: true,
    modes: [
      {
        speed: 1.08,
        slide: 429,
        wall: 200,
        critChance: 0.2,
        critMult: 2,
        status: 0.1,
        damage: 200,
        split: [
          {
            type: 'Impact',
            percent: 0.15
          },
          {
            type: 'Slash',
            percent: 0.1
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
    name: 'DRAGON NIKANA',
    mastery: 8,
    type: [
      'NIKANAS',
      'DRAGON NIKANA'
    ],
    polarities: [
      'madurai',
      'vazarin'
    ],
    stance: 'madurai',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        speed: 1,
        slide: 182,
        wall: 182,
        slam: 85,
        critChance: 0.15,
        critMult: 2,
        status: 0.15,
        damage: 85,
        split: [
          {
            type: 'Impact',
            percent: 0.05
          },
          {
            type: 'Slash',
            percent: 0.85
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
    name: 'DUAL CLEAVERS',
    mastery: 3,
    type: [
      'DUAL SWORDS',
      'DUAL CLEAVERS'
    ],
    polarities: [
      'madurai'
    ],
    stance: 'naramon',
    disposition: 3,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.8333,
        slide: 210,
        wall: 140,
        slam: 35,
        critChance: 0.25,
        critMult: 3,
        status: 0.1,
        damage: 35,
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
    name: 'DUAL ETHER',
    mastery: 0,
    type: [
      'DUAL SWORDS',
      'DUAL ETHER'
    ],
    polarities: [],
    stance: 'zenurik',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        speed: 1,
        slide: 240,
        wall: 160,
        slam: 40,
        critChance: 0.05,
        critMult: 1.5,
        status: 0.1,
        damage: 40,
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
    name: 'DUAL HEAT SWORDS',
    mastery: 0,
    type: [
      'DUAL SWORDS',
      'DUAL HEAT SWORDS'
    ],
    polarities: [
      'naramon'
    ],
    stance: undefined,
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.9167,
        slide: 270,
        wall: 180,
        slam: 45,
        critChance: 0.05,
        critMult: 1.5,
        status: 0.1,
        damage: 45,
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
    name: 'DUAL ICHOR',
    mastery: 6,
    type: [
      'DUAL SWORDS',
      'DUAL ICHOR'
    ],
    polarities: [
      'vazarin'
    ],
    stance: 'zenurik',
    disposition: 4,
    channelMult: 1.5,
    modes: [
      {
        speed: 1.0833,
        slide: 210,
        wall: 140,
        slam: 35,
        critChance: 0.25,
        critMult: 3,
        status: 0.15,
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
    name: 'DUAL KAMAS',
    mastery: 1,
    type: [
      'DUAL SWORDS',
      'DUAL KAMAS'
    ],
    polarities: [],
    stance: 'naramon',
    disposition: 2,
    channelMult: 1.5,
    modes: [
      {
        speed: 1.1667,
        slide: 252,
        wall: 168,
        slam: 42,
        critChance: 0.05,
        critMult: 1.5,
        status: 0.075,
        damage: 42,
        split: [
          {
            type: 'Impact',
            percent: 0.05
          },
          {
            type: 'Slash',
            percent: 0.8500000000000001
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
    name: 'DUAL KAMAS PRIME',
    mastery: 6,
    type: [
      'DUAL SWORDS',
      'DUAL KAMAS PRIME'
    ],
    polarities: [
      'madurai'
    ],
    stance: 'naramon',
    disposition: 2,
    channelMult: 1.5,
    modes: [
      {
        speed: 1.1667,
        slide: 420,
        wall: 280,
        slam: 70,
        critChance: 0.15,
        critMult: 2,
        status: 0.2,
        damage: 70,
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
      }
    ]
  },
  {
    name: 'DUAL KERES',
    mastery: 7,
    type: [
      'DUAL SWORDS',
      'DUAL KERES'
    ],
    polarities: [],
    stance: 'naramon',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        speed: 1.25,
        slide: 264,
        wall: 176,
        slam: 44,
        critChance: 0.28,
        critMult: 2.5999999,
        status: 0.14,
        damage: 44,
        split: [
          {
            type: 'Impact',
            percent: 0.12045454545454545
          },
          {
            type: 'Slash',
            percent: 0.5795454545454546
          },
          {
            type: 'Puncture',
            percent: 0.3
          }
        ]
      }
    ]
  },
  {
    name: 'DUAL RAZA',
    mastery: 6,
    type: [
      'DUAL SWORDS',
      'DUAL RAZA'
    ],
    polarities: [],
    stance: 'naramon',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.9167,
        slide: 288,
        wall: 192,
        slam: 48,
        critChance: 0.2,
        critMult: 3,
        status: 0.05,
        damage: 48,
        split: [
          {
            type: 'Impact',
            percent: 0.09999999999999999
          },
          {
            type: 'Slash',
            percent: 0.6
          },
          {
            type: 'Puncture',
            percent: 0.3
          }
        ]
      }
    ]
  },
  {
    name: 'DUAL SKANA',
    mastery: 0,
    type: [
      'DUAL SWORDS',
      'DUAL SKANA'
    ],
    polarities: [],
    stance: 'naramon',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.8333,
        slide: 192,
        wall: 128,
        slam: 32,
        critChance: 0.05,
        critMult: 1.5,
        status: 0.1,
        damage: 32,
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
    name: 'DUAL ZOREN',
    mastery: 2,
    type: [
      'DUAL SWORDS',
      'DUAL ZOREN'
    ],
    polarities: [
      'vazarin'
    ],
    stance: 'zenurik',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        speed: 1.1667,
        slide: 180,
        wall: 120,
        slam: 30,
        critChance: 0.25,
        critMult: 3,
        status: 0.05,
        damage: 30,
        split: [
          {
            type: 'Impact',
            percent: 0.05
          },
          {
            type: 'Slash',
            percent: 0.9
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
    name: 'ENDURA',
    mastery: 7,
    type: [
      'RAPIERS',
      'ENDURA'
    ],
    polarities: [
      'madurai'
    ],
    stance: 'naramon',
    disposition: 3,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.9167,
        slide: 204,
        wall: 380,
        slam: 95,
        critChance: 0.05,
        critMult: 2,
        status: 0.25,
        damage: 95,
        split: [
          {
            type: 'Impact',
            percent: 0.05
          },
          {
            type: 'Slash',
            percent: 0.25
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
    name: 'ETHER DAGGERS',
    mastery: 0,
    type: [
      'DUAL DAGGERS',
      'ETHER DAGGERS'
    ],
    polarities: [
      'vazarin'
    ],
    stance: 'zenurik',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.8333,
        slide: 225,
        wall: 180,
        slam: 45,
        critChance: 0.05,
        critMult: 1.5,
        status: 0.15,
        damage: 45,
        split: [
          {
            type: 'Impact',
            percent: 0.1511111111111111
          },
          {
            type: 'Slash',
            percent: 0.7
          },
          {
            type: 'Puncture',
            percent: 0.1511111111111111
          }
        ]
      }
    ]
  },
  {
    name: 'ETHER REAPER',
    mastery: 3,
    type: [
      'SCYTHES',
      'ETHER REAPER'
    ],
    polarities: [
      'madurai'
    ],
    stance: 'zenurik',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        speed: 1.0833,
        slide: 130,
        wall: 130,
        slam: 65,
        critChance: 0.15,
        critMult: 2,
        status: 0.15,
        damage: 65,
        split: [
          {
            type: 'Impact',
            percent: 0.15076923076923077
          },
          {
            type: 'Slash',
            percent: 0.7
          },
          {
            type: 'Puncture',
            percent: 0.15076923076923077
          }
        ]
      }
    ]
  },
  {
    name: 'ETHER SWORD',
    mastery: 0,
    type: [
      'SWORDS',
      'ETHER SWORD'
    ],
    polarities: [],
    stance: 'unairu',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        speed: 1,
        slide: 79,
        wall: 148,
        slam: 37,
        critChance: 0.05,
        critMult: 1.5,
        status: 0.1,
        damage: 37,
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
    name: 'EXALTED BLADE',
    mastery: 0,
    type: [
      'EXALTED BLADE'
    ],
    polarities: ['madurai', 'madurai', 'naramon'],
    stance: undefined,
    disposition: 0,
    channelMult: 1.5,
    exalted: true,
    modes: [
      {
        name: 'Regular',
        speed: 0.833,
        slide: 536,
        wall: 1000,
        slam: 250,
        critChance: 0.15,
        critMult: 2,
        status: 0.1,
        damage: 250,
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
      },
      {
        name: 'Chromatic Cold',
        speed: 0.833,
        slide: 536,
        wall: 1000,
        slam: 250,
        critChance: 0.15,
        critMult: 2,
        status: 0.1,
        damage: 250,
        split: [
          {
            type: 'Cold',
            percent: 1
          }
        ]
      },
      {
        name: 'Chromatic Electricity',
        speed: 0.833,
        slide: 536,
        wall: 1000,
        slam: 250,
        critChance: 0.15,
        critMult: 2,
        status: 0.1,
        damage: 250,
        split: [
          {
            type: 'Electricity',
            percent: 1
          }
        ]
      },
      {
        name: 'Chromatic Heat',
        speed: 0.833,
        slide: 536,
        wall: 1000,
        slam: 250,
        critChance: 0.15,
        critMult: 2,
        status: 0.1,
        damage: 250,
        split: [
          {
            type: 'Heat',
            percent: 1
          }
        ]
      },
      {
        name: 'Chromatic Toxin',
        speed: 0.833,
        slide: 536,
        wall: 1000,
        slam: 250,
        critChance: 0.15,
        critMult: 2,
        status: 0.1,
        damage: 250,
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
    name: 'EXALTED UMBRA BLADE',
    mastery: 0,
    type: [
      'EXALTED BLADE'
    ],
    polarities: ['umbra', 'umbra'],
    stance: undefined,
    disposition: 0,
    channelMult: 1.5,
    exalted: true,
    modes: [
      {
        name: 'Regular',
        speed: 0.833,
        slide: 536,
        wall: 1000,
        slam: 250,
        critChance: 0.15,
        critMult: 2,
        status: 0.1,
        damage: 250,
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
      },
      {
        name: 'Chromatic Cold',
        speed: 0.833,
        slide: 536,
        wall: 1000,
        slam: 250,
        critChance: 0.15,
        critMult: 2,
        status: 0.1,
        damage: 250,
        split: [
          {
            type: 'Cold',
            percent: 1
          }
        ]
      },
      {
        name: 'Chromatic Electricity',
        speed: 0.833,
        slide: 536,
        wall: 1000,
        slam: 250,
        critChance: 0.15,
        critMult: 2,
        status: 0.1,
        damage: 250,
        split: [
          {
            type: 'Electricity',
            percent: 1
          }
        ]
      },
      {
        name: 'Chromatic Heat',
        speed: 0.833,
        slide: 536,
        wall: 1000,
        slam: 250,
        critChance: 0.15,
        critMult: 2,
        status: 0.1,
        damage: 250,
        split: [
          {
            type: 'Heat',
            percent: 1
          }
        ]
      },
      {
        name: 'Chromatic Toxin',
        speed: 0.833,
        slide: 536,
        wall: 1000,
        slam: 250,
        critChance: 0.15,
        critMult: 2,
        status: 0.1,
        damage: 250,
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
    name: 'FALCOR',
    mastery: 8,
    type: [
      'GLAIVES',
      'FALCOR'
    ],
    polarities: [],
    stance: 'naramon',
    disposition: 3,
    channelMult: 1.5,
    modes: [
      {
        name: 'Melee',
        speed: 0.8333,
        slide: 390,
        wall: 234,
        slam: 78,
        critChance: 0.12,
        critMult: 1.6,
        status: 0.28,
        damage: 78,
        split: [
          {
            type: 'Impact',
            percent: 12 / 78
          },
          {
            type: 'Slash',
            percent: 4 / 78
          },
          {
            type: 'Puncture',
            percent: 34 / 78
          },
          {
            type: 'Electricity',
            percent: 28 / 78
          }
        ]
      },
      {
        name: 'Throw',
        speed: 0.8333,
        critChance: 0.12,
        critMult: 1.6,
        status: 0.28,
        damage: 665,
        split: [
          {
            type: 'Impact',
            percent: 50 / 665
          },
          {
            type: 'Slash',
            percent: 100 / 665
          },
          {
            type: 'Puncture',
            percent: 80 / 665
          },
          {
            type: 'Electricity',
            percent: 435 / 665
          }
        ]
      },
      {
        name: 'Charged Throw',
        speed: 0.8333,
        critChance: 0.14,
        critMult: 1.8,
        status: 0.3,
        damage: 1365,
        split: [
          {
            type: 'Impact',
            percent: 110 / 1365
          },
          {
            type: 'Slash',
            percent: 180 / 1365
          },
          {
            type: 'Puncture',
            percent: 180 / 1365
          },
          {
            type: 'Electricity',
            percent: 895 / 1365
          }
        ]
      },
    ]
  },
  {
    name: 'FANG',
    mastery: 0,
    type: [
      'DUAL DAGGERS',
      'FANG'
    ],
    polarities: [
      'vazarin'
    ],
    stance: 'unairu',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.9167,
        slide: 150,
        wall: 120,
        slam: 30,
        critChance: 0.05,
        critMult: 1.5,
        status: 0.08,
        damage: 30,
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
    name: 'FANG PRIME',
    mastery: 0,
    type: [
      'DUAL DAGGERS',
      'FANG PRIME'
    ],
    polarities: [
      'vazarin'
    ],
    stance: 'unairu',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        speed: 1,
        slide: 180,
        wall: 144,
        slam: 36,
        critChance: 0.05,
        critMult: 1.5,
        status: 0.05,
        damage: 36,
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
    name: 'FRAGOR',
    mastery: 2,
    type: [
      'HAMMERS',
      'FRAGOR'
    ],
    polarities: [],
    stance: 'madurai',
    disposition: 3,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.8333,
        slide: 230,
        wall: 230,
        slam: 115,
        critChance: 0.2,
        critMult: 2,
        status: 0.1,
        damage: 115,
        split: [
          {
            type: 'Impact',
            percent: 0.7
          },
          {
            type: 'Slash',
            percent: 0.14956521739130435
          },
          {
            type: 'Puncture',
            percent: 0.15043478260869567
          }
        ]
      }
    ]
  },
  {
    name: 'FRAGOR PRIME',
    mastery: 7,
    type: [
      'HAMMERS',
      'FRAGOR PRIME'
    ],
    polarities: [
      'madurai'
    ],
    stance: 'madurai',
    disposition: 3,
    channelMult: 1.75,
    modes: [
      {
        speed: 0.8,
        slide: 260,
        wall: 260,
        slam: 130,
        critChance: 0.35,
        critMult: 2.5,
        status: 0.1,
        damage: 130,
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
        ]
      }
    ]
  },
  {
    name: 'FURAX',
    mastery: 0,
    type: [
      'FISTS',
      'FURAX'
    ],
    polarities: [],
    stance: 'vazarin',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        speed: 1,
        slide: 105,
        wall: 105,
        slam: 35,
        critChance: 0.2,
        critMult: 2,
        status: 0.1,
        damage: 35,
        split: [
          {
            type: 'Impact',
            percent: 0.7
          },
          {
            type: 'Slash',
            percent: 0.14857142857142858
          },
          {
            type: 'Puncture',
            percent: 0.1514285714285714
          }
        ]
      }
    ]
  },
  {
    name: 'FURAX WRAITH',
    mastery: 3,
    type: [
      'FISTS',
      'FURAX WRAITH'
    ],
    polarities: [],
    stance: 'vazarin',
    disposition: 5,
    channelMult: 1.75,
    modes: [
      {
        speed: 1.0833,
        slide: 105,
        wall: 105,
        slam: 35,
        critChance: 0.25,
        critMult: 2.5,
        status: 0.1,
        damage: 35,
        split: [
          {
            type: 'Impact',
            percent: 0.7
          },
          {
            type: 'Slash',
            percent: 0.14857142857142858
          },
          {
            type: 'Puncture',
            percent: 0.1514285714285714
          }
        ]
      }
    ]
  },
  {
    name: 'GALATINE',
    mastery: 3,
    type: [
      'HEAVY BLADES',
      'GALATINE'
    ],
    polarities: [
      'naramon'
    ],
    stance: 'vazarin',
    disposition: 1,
    channelMult: 1.5,
    modes: [
      {
        speed: 1,
        slide: 250,
        wall: 250,
        slam: 125,
        critChance: 0.1,
        critMult: 2,
        status: 0.2,
        damage: 125,
        split: [
          {
            type: 'Impact',
            percent: 0.0248
          },
          {
            type: 'Slash',
            percent: 0.9504
          },
          {
            type: 'Puncture',
            percent: 0.0248
          }
        ]
      }
    ]
  },
  {
    name: 'GALATINE PRIME',
    mastery: 13,
    type: [
      'HEAVY BLADES',
      'GALATINE PRIME'
    ],
    polarities: [
      'madurai',
      'madurai'
    ],
    stance: 'vazarin',
    disposition: 1,
    channelMult: 1.5,
    modes: [
      {
        speed: 1,
        slide: 330,
        wall: 330,
        slam: 165,
        critChance: 0.2,
        critMult: 2,
        status: 0.2,
        damage: 165,
        split: [
          {
            type: 'Impact',
            percent: 0.024848484848484845
          },
          {
            type: 'Slash',
            percent: 0.9503030303030304
          },
          {
            type: 'Puncture',
            percent: 0.024848484848484845
          }
        ]
      }
    ]
  },
  {
    name: 'GALVACORD',
    mastery: 6,
    type: [
      'WHIPS',
      'GALVACORD'
    ],
    polarities: [],
    stance: 'vazarin',
    disposition: 3,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.75,
        slide: 171,
        wall: 320,
        slam: 80,
        critChance: 0.12,
        critMult: 1.8,
        status: 0.3,
        damage: 80,
        split: [
          {
            type: 'Impact',
            percent: 0.075
          },
          {
            type: 'Slash',
            percent: 0.275
          },
          {
            type: 'Puncture',
            percent: 0.175
          },
          {
            type: 'Electricity',
            percent: 0.475
          }
        ]
      }
    ]
  },
  {
    name: 'GARUDA\'S TALONS',
    mastery: 0,
    type: [
      'CLAWS',
      'GARUDA\'S TALONS'
    ],
    polarities: ['madurai', 'naramon'],
    stance: 'madurai',
    disposition: 3,
    channelMult: 1.5,
    modes: [
      {
        speed: 1,
        slide: 216,
        wall: 216,
        slam: 300,
        critChance: 0.1,
        critMult: 2,
        status: 0.3,
        damage: 72,
        split: [
          {
            type: 'Impact',
            percent: 5.8 / 72
          },
          {
            type: 'Slash',
            percent: 0.7
          },
          {
            type: 'Puncture',
            percent: 15.8 / 72
          }
        ]
      }
    ]
  },
  {
    name: 'GAZAL MACHETE',
    mastery: 5,
    type: [
      'MACHETES',
      'GAZAL MACHETE'
    ],
    polarities: [
      'madurai'
    ],
    stance: 'zenurik',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        speed: 1.0833,
        slide: 156,
        wall: 208,
        slam: 52,
        critChance: 0.1,
        critMult: 2,
        status: 0.25,
        damage: 52,
        split: [
          {
            type: 'Impact',
            percent: 0.1
          },
          {
            type: 'Slash',
            percent: 0.75
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
    name: 'GLAIVE',
    mastery: 1,
    type: [
      'GLAIVES',
      'GLAIVE'
    ],
    polarities: [
      'madurai',
      'naramon'
    ],
    stance: 'naramon',
    disposition: 4,
    channelMult: 1.5,
    modes: [
      {
        name: 'Melee',
        speed: 1,
        slide: 225,
        wall: 135,
        slam: 45,
        critChance: 0.1,
        critMult: 2,
        status: 0.1,
        damage: 35,
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
      },
      {
        name: 'Throw',
        speed: 1,
        critChance: 0.1,
        critMult: 2,
        status: 0.1,
        damage: 35,
        split: [
          {
            type: 'Impact',
            percent: 0.12
          },
          {
            type: 'Slash',
            percent: 0.56
          },
          {
            type: 'Puncture',
            percent: 0.12
          },
          {
            type: 'Blast',
            percent: 0.2
          },
        ]
      },
      {
        name: 'Charged Throw',
        speed: 1,
        critChance: 0.11,
        critMult: 2.1,
        status: 0.11,
        damage: 700,
        split: [
          {
            type: 'Impact',
            percent: 60 / 700
          },
          {
            type: 'Slash',
            percent: 0.4
          },
          {
            type: 'Puncture',
            percent: 60 / 700
          },
          {
            type: 'Blast',
            percent: 300 / 700
          },
        ]
      }
    ]
  },
  {
    name: 'GLAIVE PRIME',
    mastery: 10,
    type: [
      'GLAIVES',
      'GLAIVE PRIME'
    ],
    polarities: [
      'madurai',
      'naramon'
    ],
    stance: 'naramon',
    disposition: 4,
    channelMult: 1.5,
    modes: [
      {
        name: 'Melee',
        speed: 1.25,
        slide: 250,
        wall: 150,
        slam: 50,
        critChance: 0.15,
        critMult: 2,
        status: 0.3,
        damage: 50,
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
      },
      {
        name: 'Throw',
        speed: 1.25,
        critChance: 0.15,
        critMult: 2,
        status: 0.3,
        damage: 425,
        split: [
          {
            type: 'Impact',
            percent: 37.5 / 425
          },
          {
            type: 'Slash',
            percent: 175 / 425
          },
          {
            type: 'Puncture',
            percent: 37.5 / 425
          },
          {
            type: 'Blast',
            percent: 175 / 425
          },
        ]
      },
      {
        name: 'Charged Throw',
        speed: 1.25,
        critChance: 0.18,
        critMult: 2.2,
        status: 0.33,
        damage: 960,
        split: [
          {
            type: 'Impact',
            percent: 75 / 960
          },
          {
            type: 'Slash',
            percent: 350 / 960
          },
          {
            type: 'Puncture',
            percent: 75 / 960
          },
          {
            type: 'Blast',
            percent: 460 / 960
          },
        ]
      },
    ]
  },
  {
    name: 'GRAM',
    mastery: 2,
    type: [
      'HEAVY BLADES',
      'GRAM'
    ],
    polarities: [],
    stance: 'madurai',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.95,
        slide: 200,
        wall: 200,
        slam: 100,
        critChance: 0.15,
        critMult: 2,
        status: 0.15,
        damage: 100,
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
    name: 'GRAM PRIME',
    mastery: 14,
    type: [
      'HEAVY BLADES',
      'GRAM PRIME'
    ],
    polarities: [
      'madurai',
      'madurai'
    ],
    stance: 'vazarin',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.8,
        slide: 360,
        wall: 360,
        slam: 180,
        critChance: 0.32,
        critMult: 2.5999999,
        status: 0.32,
        damage: 180,
        split: [
          {
            type: 'Impact',
            percent: 0.2
          },
          {
            type: 'Slash',
            percent: 0.75
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
    name: 'GUANDAO',
    mastery: 4,
    type: [
      'POLEARMS',
      'GUANDAO'
    ],
    polarities: [
      'vazarin',
      'madurai'
    ],
    stance: 'zenurik',
    disposition: 3,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.8333,
        slide: 200,
        wall: 150,
        slam: 90,
        critChance: 0.24,
        critMult: 2.2,
        status: 0.04,
        damage: 90,
        split: [
          {
            type: 'Impact',
            percent: 0.25
          },
          {
            type: 'Slash',
            percent: 0.7
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
    name: 'GUNSEN',
    mastery: 10,
    type: [
      'WARFANS',
      'GUNSEN'
    ],
    polarities: [
      'madurai'
    ],
    stance: 'naramon',
    disposition: 3,
    channelMult: 1.5,
    modes: [
      {
        speed: 1.1667,
        slide: 107,
        wall: 200,
        slam: 50,
        critChance: 0.16,
        critMult: 2,
        status: 0.28,
        damage: 50,
        split: [
          {
            type: 'Impact',
            percent: 0.08
          },
          {
            type: 'Slash',
            percent: 0.8
          },
          {
            type: 'Puncture',
            percent: 0.12
          }
        ]
      }
    ]
  },
  {
    name: 'HALIKAR',
    mastery: 7,
    type: [
      'GLAIVES',
      'HALIKAR'
    ],
    polarities: [
      'madurai',
      'naramon'
    ],
    stance: 'naramon',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        name: 'Melee',
        speed: 1.1667,
        slide: 225,
        wall: 135,
        slam: 45,
        critChance: 0.1,
        critMult: 2,
        status: 0.2,
        damage: 45,
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
        name: 'Throw',
        speed: 1.1667,
        critChance: 0.1,
        critMult: 2,
        status: 0.2,
        damage: 350,
        split: [
          {
            type: 'Impact',
            percent: 20 / 350
          },
          {
            type: 'Slash',
            percent: 20 / 350
          },
          {
            type: 'Puncture',
            percent: 160 / 350
          },
          {
            type: 'Blast',
            percent: 150 / 350
          },
        ]
      },
      {
        name: 'Charged Throw',
        speed: 1.1667,
        critChance: 0.1,
        critMult: 2,
        status: 0.25,
        damage: 900,
        split: [
          {
            type: 'Impact',
            percent: 46 / 900
          },
          {
            type: 'Slash',
            percent: 46 / 900
          },
          {
            type: 'Puncture',
            percent: 368 / 900
          },
          {
            type: 'Blast',
            percent: 440 / 900
          },
        ]
      }
    ]
  },
  {
    name: 'HATE',
    mastery: 2,
    type: [
      'SCYTHES',
      'HATE'
    ],
    polarities: [],
    stance: 'naramon',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.9167,
        slide: 140,
        wall: 140,
        slam: 70,
        critChance: 0.2,
        critMult: 2.5,
        status: 0.15,
        damage: 70,
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
    name: 'HEAT DAGGER',
    mastery: 0,
    type: [
      'DAGGERS',
      'HEAT DAGGER'
    ],
    polarities: [
      'naramon'
    ],
    stance: 'madurai',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.75,
        slide: 96,
        wall: 135,
        slam: 45,
        critChance: 0.05,
        critMult: 1.5,
        status: 0.05,
        damage: 45,
        split: [
          {
            type: 'Impact',
            percent: 0.05111111111111111
          },
          {
            type: 'Slash',
            percent: 0.1488888888888889
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
    name: 'HEAT SWORD',
    mastery: 0,
    type: [
      'SWORDS',
      'HEAT SWORD'
    ],
    polarities: [
      'naramon'
    ],
    stance: 'madurai',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.9167,
        slide: 94,
        wall: 176,
        slam: 44,
        critChance: 0.05,
        critMult: 1.5,
        status: 0.2,
        damage: 44,
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
    name: 'HELIOCOR',
    mastery: 9,
    type: [
      'HAMMERS',
      'HELIOCOR'
    ],
    polarities: [],
    stance: 'madurai',
    disposition: 3,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.8333,
        slide: 280,
        wall: 280,
        slam: 140,
        critChance: 0.25,
        critMult: 2,
        status: 0.025,
        damage: 140,
        split: [
          {
            type: 'Impact',
            percent: 0.85
          },
          {
            type: 'Slash',
            percent: 0.05
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
    name: 'HIRUDO',
    mastery: 7,
    type: [
      'SPARRING',
      'HIRUDO'
    ],
    polarities: [
      'madurai'
    ],
    stance: 'naramon',
    disposition: 1,
    channelMult: 1.5,
    modes: [
      {
        speed: 1,
        slide: 220,
        wall: 165,
        slam: 55,
        critChance: 0.15,
        critMult: 3,
        status: 0.05,
        damage: 55,
        split: [
          {
            type: 'Impact',
            percent: 0.1509090909090909
          },
          {
            type: 'Slash',
            percent: 0.049090909090909095
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
    name: 'IRON STAFF',
    mastery: 0,
    type: [
      'PRIMAL FURY',
      'IRON STAFF'
    ],
    polarities: [
      'madurai',
      'naramon',
      'naramon'
    ],
    stance: undefined,
    disposition: 0,
    channelMult: 1.5,
    exalted: true,
    modes: [
      {
        speed: 1,
        slide: 536,
        wall: 417,
        slam: 250,
        critChance: 0.25,
        critMult: 2,
        status: 0.1,
        damage: 250,
        split: [
          {
            type: 'Impact',
            percent: 0.85
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
    name: 'JAT KITTAG',
    mastery: 5,
    type: [
      'HAMMERS',
      'JAT KITTAG'
    ],
    polarities: [
      'madurai',
      'naramon'
    ],
    stance: 'madurai',
    disposition: 1,
    channelMult: 1.5,
    modes: [
      {
        speed: 1,
        slide: 260,
        wall: 260,
        slam: 130,
        critChance: 0.15,
        critMult: 2,
        status: 0.25,
        damage: 130,
        split: [
          {
            type: 'Impact',
            percent: 0.8
          },
          {
            type: 'Slash',
            percent: 0.05
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
    name: 'JAT KUSAR',
    mastery: 10,
    type: [
      'BLADE AND WHIPS',
      'JAT KUSAR'
    ],
    polarities: [
      'madurai',
      'madurai'
    ],
    stance: 'madurai',
    disposition: 2,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.8333,
        slide: 171,
        wall: 320,
        slam: 80,
        critChance: 0.35,
        critMult: 2.5,
        status: 0.05,
        damage: 80,
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
    name: 'JAW SWORD',
    mastery: 1,
    type: [
      'SWORDS',
      'JAW SWORD'
    ],
    polarities: [
      'madurai'
    ],
    stance: 'unairu',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.9167,
        slide: 94,
        wall: 176,
        slam: 44,
        critChance: 0.05,
        critMult: 1.5,
        status: 0.1,
        damage: 44,
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
      }
    ]
  },
  {
    name: 'KAMA',
    mastery: 1,
    type: [
      'MACHETES',
      'KAMA'
    ],
    polarities: [
      'madurai',
      'madurai'
    ],
    stance: 'zenurik',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        speed: 1.1667,
        slide: 135,
        wall: 180,
        slam: 45,
        critChance: 0.05,
        critMult: 1.5,
        status: 0.02,
        damage: 45,
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
    name: 'KARYST',
    mastery: 0,
    type: [
      'DAGGERS',
      'KARYST'
    ],
    polarities: [
      'naramon'
    ],
    stance: 'madurai',
    disposition: 4,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.75,
        slide: 107,
        wall: 150,
        slam: 50,
        critChance: 0.1,
        critMult: 2,
        status: 0.15,
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
    name: 'KESHEG',
    mastery: 7,
    type: [
      'POLEARMS',
      'KESHEG'
    ],
    polarities: [
      'madurai'
    ],
    stance: 'zenurik',
    disposition: 4,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.8333,
        slide: 233,
        wall: 175,
        slam: 105,
        critChance: 0.075,
        critMult: 2.5,
        status: 0.1,
        damage: 105,
        split: [
          {
            type: 'Impact',
            percent: 0.4
          },
          {
            type: 'Slash',
            percent: 0.5
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
    name: 'KESTREL',
    mastery: 0,
    type: [
      'GLAIVES',
      'KESTREL'
    ],
    polarities: [
      'madurai',
      'naramon'
    ],
    stance: 'naramon',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        name: 'Melee',
        speed: 1.0833,
        slide: 175,
        wall: 105,
        slam: 35,
        critChance: 0.1,
        critMult: 2,
        status: 0.1,
        damage: 35,
        split: [
          {
            type: 'Impact',
            percent: 0.7
          },
          {
            type: 'Slash',
            percent: 0.14857142857142858
          },
          {
            type: 'Puncture',
            percent: 0.1514285714285714
          }
        ]
      },
      {
        name: 'Throw',
        speed: 1.0833,
        critChance: 0.1,
        critMult: 2,
        status: 0.1,
        damage: 250,
        split: [
          {
            type: 'Impact',
            percent: 0.48
          },
          {
            type: 'Slash',
            percent: 0.06
          },
          {
            type: 'Puncture',
            percent: 0.06
          },
          {
            type: 'Blast',
            percent: 0.4
          },
        ]
      },
      {
        name: 'Charged Throw',
        speed: 1.0833,
        critChance: 0.12,
        critMult: 2.2,
        status: 0.12,
        damage: 370,
        split: [
          {
            type: 'Impact',
            percent: 176 / 370
          },
          {
            type: 'Slash',
            percent: 22 / 370
          },
          {
            type: 'Puncture',
            percent: 22 / 370
          },
          {
            type: 'Blast',
            percent: 150 / 370
          },
        ]
      }
    ]
  },
  {
    name: 'KOGAKE',
    mastery: 0,
    type: [
      'SPARRING',
      'KOGAKE'
    ],
    polarities: [],
    stance: 'naramon',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.9167,
        slide: 140,
        wall: 105,
        slam: 35,
        critChance: 0.2,
        critMult: 2,
        status: 0.1,
        damage: 35,
        split: [
          {
            type: 'Impact',
            percent: 0.7
          },
          {
            type: 'Slash',
            percent: 0.14857142857142858
          },
          {
            type: 'Puncture',
            percent: 0.1514285714285714
          }
        ]
      }
    ]
  },
  {
    name: 'KOGAKE PRIME',
    mastery: 10,
    type: [
      'SPARRING',
      'KOGAKE PRIME'
    ],
    polarities: [
      'madurai',
      'madurai',
      'madurai'
    ],
    stance: 'naramon',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.9167,
        slide: 280,
        wall: 210,
        slam: 70,
        critChance: 0.16,
        critMult: 1.8,
        status: 0.34,
        damage: 70,
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
        ]
      }
    ]
  },
  {
    name: 'KRESKA',
    mastery: 6,
    type: [
      'MACHETES',
      'KRESKA'
    ],
    polarities: [
      'madurai'
    ],
    stance: 'zenurik',
    disposition: 3,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.9167,
        slide: 210,
        wall: 280,
        slam: 70,
        critChance: 0.14,
        critMult: 2,
        status: 0.22,
        damage: 70,
        split: [
          {
            type: 'Impact',
            percent: 10 / 70
          },
          {
            type: 'Slash',
            percent: 15 / 70
          },
          {
            type: 'Puncture',
            percent: 5 / 70
          },
          {
            type: 'Heat',
            percent: 40 / 70
          }
        ]
      }
    ]
  },
  {
    name: 'KROHKUR',
    mastery: 5,
    type: [
      'SWORDS',
      'KROHKUR'
    ],
    polarities: [],
    stance: 'madurai',
    disposition: 4,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.8333,
        slide: 150,
        wall: 280,
        slam: 70,
        critChance: 0.29,
        critMult: 1.7,
        status: 0.19,
        damage: 70,
        split: [
          {
            type: 'Impact',
            percent: 0.12
          },
          {
            type: 'Slash',
            percent: 0.7
          },
          {
            type: 'Puncture',
            percent: 0.18
          }
        ]
      }
    ]
  },
  {
    name: 'KRONEN',
    mastery: 3,
    type: [
      'TONFAS',
      'KRONEN'
    ],
    polarities: [],
    stance: 'madurai',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        speed: 1.0833,
        slide: 390,
        wall: 260,
        slam: 65,
        critChance: 0.05,
        critMult: 1.5,
        status: 0.2,
        damage: 65,
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
    name: 'KRONEN PRIME',
    mastery: 8,
    type: [
      'TONFAS',
      'KRONEN PRIME'
    ],
    polarities: [
      'madurai',
      'naramon'
    ],
    stance: 'madurai',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        speed: 1.1667,
        slide: 396,
        wall: 264,
        slam: 66,
        critChance: 0.12,
        critMult: 2,
        status: 0.24,
        damage: 66,
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
    name: 'LACERA',
    mastery: 7,
    type: [
      'BLADE AND WHIPS',
      'LACERA'
    ],
    polarities: [
      'naramon'
    ],
    stance: 'madurai',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.9167,
        slide: 171,
        wall: 320,
        slam: 80,
        critChance: 0.025,
        critMult: 2,
        status: 0.45,
        damage: 80,
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
    name: 'LECTA',
    mastery: 0,
    type: [
      'WHIPS',
      'LECTA'
    ],
    polarities: [],
    stance: 'vazarin',
    disposition: 1,
    channelMult: 1.5,
    modes: [
      {
        speed: 1,
        slide: 96,
        wall: 180,
        slam: 45,
        critChance: 0.05,
        critMult: 1.5,
        status: 0.25,
        damage: 45,
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
    name: 'LESION',
    mastery: 7,
    type: [
      'POLEARMS',
      'LESION'
    ],
    polarities: [
      'madurai'
    ],
    stance: 'zenurik',
    disposition: 1,
    channelMult: 1.5,
    modes: [
      {
        speed: 1,
        slide: 222,
        wall: 167,
        slam: 100,
        critChance: 0.05,
        critMult: 2,
        status: 0.3,
        damage: 100,
        split: [
          {
            type: 'Impact',
            percent: 0.2
          },
          {
            type: 'Slash',
            percent: 0.75
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
    name: 'MACHETE',
    mastery: 1,
    type: [
      'MACHETES',
      'MACHETE'
    ],
    polarities: [],
    stance: 'zenurik',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.9167,
        slide: 75,
        wall: 100,
        slam: 25,
        critChance: 0.05,
        critMult: 1.5,
        status: 0.1,
        damage: 25,
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
    name: 'MACHETE WRAITH',
    mastery: 1,
    type: [
      'MACHETES',
      'MACHETE WRAITH'
    ],
    polarities: [
      'madurai',
      'madurai'
    ],
    stance: 'zenurik',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        speed: 1.0833,
        slide: 135,
        wall: 180,
        slam: 45,
        critChance: 0.05,
        critMult: 1.5,
        status: 0.1,
        damage: 45,
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
    name: 'MAGISTAR',
    mastery: 1,
    type: [
      'HAMMERS',
      'MAGISTAR'
    ],
    polarities: [],
    stance: 'vazarin',
    disposition: 3,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.8333,
        slide: 160,
        wall: 160,
        slam: 80,
        critChance: 0.2,
        critMult: 2,
        status: 0.1,
        damage: 80,
        split: [
          {
            type: 'Impact',
            percent: 0.8
          },
          {
            type: 'Slash',
            percent: 0.05
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
    name: 'MIOS',
    mastery: 8,
    type: [
      'BLADE AND WHIPS',
      'MIOS'
    ],
    polarities: [
      'madurai'
    ],
    stance: 'madurai',
    disposition: 3,
    channelMult: 1.5,
    modes: [
      {
        speed: 1.0833,
        slide: 171,
        wall: 320,
        slam: 80,
        critChance: 0.15,
        critMult: 2,
        status: 0.25,
        damage: 80,
        split: [
          {
            type: 'Impact',
            percent: 0.3
          },
          {
            type: 'Slash',
            percent: 0.45
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
    name: 'MIRE',
    mastery: 0,
    type: [
      'SWORDS',
      'MIRE'
    ],
    polarities: [],
    stance: 'madurai',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        speed: 1.0833,
        slide: 83,
        wall: 154,
        slam: 39,
        critChance: 0.05,
        critMult: 1.5,
        status: 0.1,
        damage: 35,
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
    name: 'MK1-BO',
    mastery: 0,
    type: [
      'STAVES',
      'MK1-BO'
    ],
    polarities: ['vazarin'],
    stance: 'unairu',
    modes: [
      {
        speed: 1,
        slide: 96,
        wall: 75,
        slam: 45,
        critChance: 0.125,
        critMult: 2,
        status: 0.2,
        damage: 45,
        split: [
          {
            type: 'Impact',
            percent: 0.9
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
    name: 'MK1-FURAX',
    mastery: 0,
    type: [
      'FISTS',
      'MK1-FURAX'
    ],
    polarities: [],
    stance: 'vazarin',
    modes: [
      {
        speed: 1,
        slide: 90,
        wall: 90,
        slam: 30,
        critChance: 0.2,
        critMult: 2,
        status: 0.1,
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
        ]
      }
    ]
  },
  {
    name: 'NAMI SKYLA',
    mastery: 0,
    type: [
      'DUAL SWORDS',
      'NAMI SKYLA'
    ],
    polarities: [],
    stance: 'naramon',
    disposition: 4,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.9167,
        slide: 300,
        wall: 200,
        slam: 50,
        critChance: 0.05,
        critMult: 1.5,
        status: 0.1,
        damage: 50,
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
    name: 'NAMI SKYLA PRIME',
    mastery: 11,
    type: [
      'DUAL SWORDS',
      'NAMI SKYLA PRIME'
    ],
    polarities: [
      'madurai',
      'madurai',
      'vazarin'
    ],
    stance: 'naramon',
    disposition: 4,
    channelMult: 1.5,
    modes: [
      {
        speed: 1.3333,
        slide: 360,
        wall: 240,
        slam: 60,
        critChance: 0.2,
        critMult: 1.5,
        status: 0.3,
        damage: 60,
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
    name: 'NAMI SOLO',
    mastery: 0,
    type: [
      'MACHETES',
      'NAMI SOLO'
    ],
    polarities: [
      'madurai'
    ],
    stance: 'zenurik',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        speed: 1,
        slide: 105,
        wall: 140,
        slam: 35,
        critChance: 0.15,
        critMult: 2,
        status: 0.25,
        damage: 35,
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
    name: 'NIKANA',
    mastery: 4,
    type: [
      'NIKANAS',
      'NIKANA'
    ],
    polarities: [
      'madurai',
      'vazarin'
    ],
    stance: 'madurai',
    disposition: 1,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.9167,
        slide: 96,
        wall: 96,
        slam: 45,
        critChance: 0.1,
        critMult: 2,
        status: 0.1,
        damage: 45,
        split: [
          {
            type: 'Impact',
            percent: 0.05
          },
          {
            type: 'Slash',
            percent: 0.85
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
    name: 'NIKANA PRIME',
    mastery: 0,
    type: [
      'NIKANAS',
      'NIKANA PRIME'
    ],
    polarities: [
      'madurai',
      'vazarin'
    ],
    stance: 'madurai',
    disposition: 1,
    channelMult: 1.5,
    modes: [
      {
        speed: 1.0833,
        slide: 204,
        wall: 204,
        slam: 95,
        critChance: 0.2,
        critMult: 2,
        status: 0.2,
        damage: 95,
        split: [
          {
            type: 'Impact',
            percent: 0.05
          },
          {
            type: 'Slash',
            percent: 0.9
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
    name: 'NINKONDI',
    mastery: 0,
    type: [
      'NUNCHAKU',
      'NINKONDI'
    ],
    polarities: [],
    stance: 'vazarin',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        speed: 1,
        slide: 96,
        wall: 180,
        slam: 45,
        critChance: 0.1,
        critMult: 2,
        status: 0.35,
        damage: 45,
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
    name: 'OBEX',
    mastery: 0,
    type: [
      'SPARRING',
      'OBEX'
    ],
    polarities: [],
    stance: 'naramon',
    disposition: 3,
    channelMult: 1.5,
    modes: [
      {
        speed: 1,
        slide: 100,
        wall: 75,
        slam: 25,
        critChance: 0.25,
        critMult: 2,
        status: 0.1,
        damage: 25,
        split: [
          {
            type: 'Impact',
            percent: 0.7
          },
          {
            type: 'Slash',
            percent: 0.14800000000000002
          },
          {
            type: 'Puncture',
            percent: 0.152
          }
        ]
      }
    ]
  },
  {
    name: 'OHMA',
    mastery: 8,
    type: [
      'TONFAS',
      'OHMA'
    ],
    polarities: [],
    stance: 'naramon',
    disposition: 3,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.9167,
        slide: 600,
        wall: 400,
        slam: 100,
        critChance: 0.15,
        critMult: 2,
        status: 0.3,
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
    name: 'OKINA',
    mastery: 5,
    type: [
      'DUAL DAGGERS',
      'OKINA'
    ],
    polarities: [
      'madurai'
    ],
    stance: 'vazarin',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        speed: 1.0833,
        slide: 200,
        wall: 160,
        slam: 40,
        critChance: 0.05,
        critMult: 2,
        status: 0.15,
        damage: 40,
        split: [
          {
            type: 'Impact',
            percent: 0.05
          },
          {
            type: 'Slash',
            percent: 0.5
          },
          {
            type: 'Puncture',
            percent: 0.45
          }
        ]
      }
    ]
  },
  {
    name: 'ORTHOS',
    mastery: 2,
    type: [
      'POLEARMS',
      'ORTHOS'
    ],
    polarities: [],
    stance: 'naramon',
    disposition: 1,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.9167,
        slide: 111,
        wall: 83,
        slam: 50,
        critChance: 0.05,
        critMult: 1.5,
        status: 0.15,
        damage: 50,
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
    name: 'ORTHOS PRIME',
    mastery: 2,
    type: [
      'POLEARMS',
      'ORTHOS PRIME'
    ],
    polarities: [],
    stance: 'zenurik',
    disposition: 1,
    channelMult: 1.5,
    modes: [
      {
        speed: 1.1667,
        slide: 144,
        wall: 108,
        slam: 65,
        critChance: 0.1,
        critMult: 2,
        status: 0.15,
        damage: 65,
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
    name: 'ORVIUS',
    mastery: 5,
    type: [
      'GLAIVES',
      'ORVIUS'
    ],
    polarities: [
      'naramon',
      'madurai'
    ],
    stance: 'naramon',
    disposition: 4,
    channelMult: 1.5,
    modes: [
      {
        name: 'Melee',
        speed: 0.75,
        slide: 350,
        wall: 210,
        slam: 70,
        critChance: 0.15,
        critMult: 2,
        status: 0.15,
        damage: 70,
        split: [
          {
            type: 'Impact',
            percent: 0.2
          },
          {
            type: 'Slash',
            percent: 0.75
          },
          {
            type: 'Puncture',
            percent: 0.05
          }
        ]
      },
      {
        name: 'Throw',
        speed: 0.75,
        critChance: 0.15,
        critMult: 2,
        status: 0.15,
        damage: 350,
        split: [
          {
            type: 'Impact',
            percent: 40/350
          },
          {
            type: 'Slash',
            percent: 150/350
          },
          {
            type: 'Puncture',
            percent: 10/350
          },
          {
            type: 'Cold',
            percent: 150/350
          }
        ]
      },
      {
        name: 'Charged Throw',
        speed: 0.75,
        critChance: 0.17,
        critMult: 2.2,
        status: 0.17,
        damage: 800,
        split: [
          {
            type: 'Impact',
            percent: 0.11
          },
          {
            type: 'Slash',
            percent: 0.4125
          },
          {
            type: 'Puncture',
            percent: 0.0275
          },
          {
            type: 'Cold',
            percent: 0.45
          }
        ]
      }
    ]
  },
  {
    name: 'PANGOLIN SWORD',
    mastery: 2,
    type: [
      'SWORDS',
      'PANGOLIN SWORD'
    ],
    polarities: [
      'madurai'
    ],
    stance: 'madurai',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.9167,
        slide: 79,
        wall: 148,
        slam: 37,
        critChance: 0.05,
        critMult: 1.5,
        status: 0.12,
        damage: 37,
        split: [
          {
            type: 'Impact',
            percent: 0.05
          },
          {
            type: 'Slash',
            percent: 0.8
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
    name: 'PARACESIS',
    mastery: 10,
    type: [
      'HEAVY BLADES',
      'PARACESIS'
    ],
    polarities: [],
    stance: 'vazarin',
    disposition: 3,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.9167,
        slide: 288,
        wall: 288,
        slam: 144,
        critChance: 0.31,
        critMult: 2.6,
        status: 0.12,
        damage: 144,
        split: [
          {
            type: 'Impact',
            percent: 0.22013888888888888
          },
          {
            type: 'Slash',
            percent: 0.7
          },
          {
            type: 'Puncture',
            percent: 0.0798611111111111
          }
        ]
      }
    ]
  },
  {
    name: 'PLASMA SWORD',
    mastery: 0,
    type: [
      'SWORDS',
      'PLASMA SWORD'
    ],
    polarities: [],
    stance: 'unairu',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.6667,
        slide: 75,
        wall: 140,
        slam: 35,
        critChance: 0.15,
        critMult: 2,
        status: 0.15,
        damage: 35,
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
    name: 'PRISMA DUAL CLEAVERS',
    mastery: 3,
    type: [
      'DUAL SWORDS',
      'PRISMA DUAL CLEAVERS'
    ],
    polarities: [
      'madurai'
    ],
    stance: 'naramon',
    disposition: 3,
    channelMult: 1.5,
    modes: [
      {
        speed: 1,
        slide: 210,
        wall: 140,
        slam: 35,
        critChance: 0.25,
        critMult: 3,
        status: 0.25,
        damage: 35,
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
    name: 'PRISMA MACHETE',
    mastery: 7,
    type: [
      'MACHETES',
      'PRISMA MACHETE'
    ],
    polarities: [],
    stance: 'zenurik',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.9167,
        slide: 567,
        wall: 756,
        slam: 189,
        critChance: 0.15,
        critMult: 1.9,
        status: 0.31,
        damage: 25,
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
    name: 'PRISMA OBEX',
    mastery: 0,
    type: [
      'SPARRING',
      'PRISMA OBEX'
    ],
    polarities: [],
    stance: 'naramon',
    disposition: 3,
    channelMult: 1.5,
    modes: [
      {
        speed: 1.3333,
        slide: 100,
        wall: 75,
        slam: 25,
        critChance: 0.25,
        critMult: 2,
        status: 0.3,
        damage: 25,
        split: [
          {
            type: 'Impact',
            percent: 0.7
          },
          {
            type: 'Slash',
            percent: 0.148
          },
          {
            type: 'Puncture',
            percent: 0.152
          }
        ]
      }
    ]
  },
  {
    name: 'PRISMA SKANA',
    mastery: 0,
    type: [
      'SWORDS',
      'PRISMA SKANA'
    ],
    polarities: [],
    stance: 'madurai',
    disposition: 4,
    channelMult: 1.5,
    modes: [
      {
        speed: 1,
        slide: 75,
        wall: 140,
        slam: 35,
        critChance: 0.2,
        critMult: 2,
        status: 0.1,
        damage: 35,
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
    name: 'PROVA',
    mastery: 3,
    type: [
      'MACHETES',
      'PROVA'
    ],
    polarities: [],
    stance: 'zenurik',
    disposition: 4,
    channelMult: 1.5,
    modes: [
      {
        speed: 1,
        slide: 105,
        wall: 140,
        slam: 35,
        critChance: 0.05,
        critMult: 1.5,
        status: 0.1,
        damage: 35,
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
    name: 'PROVA VANDAL',
    mastery: 3,
    type: [
      'MACHETES',
      'PROVA VANDAL'
    ],
    polarities: [],
    stance: 'zenurik',
    disposition: 4,
    channelMult: 1.5,
    modes: [
      {
        speed: 1,
        slide: 144,
        wall: 192,
        slam: 48,
        critChance: 0.05,
        critMult: 1.5,
        status: 0.2,
        damage: 48,
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
    name: 'PUPACYST',
    mastery: 7,
    type: [
      'POLEARMS',
      'PUPACYST'
    ],
    polarities: [
      'madurai'
    ],
    stance: 'zenurik',
    disposition: 3,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.8333,
        slide: 193,
        wall: 150,
        slam: 90,
        critChance: 0.13,
        critMult: 1.5,
        status: 0.27,
        damage: 90,
        split: [
          {
            type: 'Impact',
            percent: 47 / 90
          },
          {
            type: 'Viral',
            percent: 43 / 43
          }
        ]
      }
    ]
  },
  {
    name: 'RAKTA DARK DAGGER',
    mastery: 8,
    type: [
      'DAGGERS',
      'RAKTA DARK DAGGER'
    ],
    polarities: [
      'madurai'
    ],
    stance: 'naramon',
    disposition: 1,
    channelMult: 1.5,
    modes: [
      {
        speed: 1,
        slide: 107,
        wall: 150,
        slam: 50,
        critChance: 0.05,
        critMult: 1.5,
        status: 0.1,
        damage: 50,
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
    name: 'REAPER PRIME',
    mastery: 2,
    type: [
      'SCYTHES',
      'REAPER PRIME'
    ],
    polarities: [],
    stance: 'naramon',
    disposition: 4,
    channelMult: 1.5,
    modes: [
      {
        speed: 1.0833,
        slide: 150,
        wall: 150,
        slam: 75,
        critChance: 0.2,
        critMult: 2,
        status: 0.12,
        damage: 75,
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
    name: 'REDEEMER',
    mastery: 4,
    type: [
      'GUNBLADE',
      'REDEEMER'
    ],
    polarities: [],
    stance: 'madurai',
    disposition: 4,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.8333,
        slide: 180,
        wall: 240,
        slam: 60,
        critChance: 0.05,
        critMult: 1.5,
        status: 0.1,
        damage: 60,
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
      },
      {
        name: 'Charge Shotgun',
        speed: 0.8333,
        critChance: 0,
        critMult: 1.5,
        status: 0.1,
        pellets: 10,
        damage: 300,
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
    name: 'REDEEMER PRIME',
    mastery: 10,
    type: [
      'GUNBLADE',
      'REDEEMER PRIME'
    ],
    polarities: [
      'madurai',
      'madurai'
    ],
    stance: 'madurai',
    disposition: 4,
    channelMult: 1.5,
    modes: [
      {
        name: 'Regular',
        speed: 0.9167,
        slide: 240,
        wall: 320,
        slam: 80,
        critChance: 0.16,
        critMult: 2.2,
        status: 0.28,
        damage: 80,
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
      },
      {
        name: 'Charge Shotgun',
        speed: 0.9167,
        critChance: 0,
        critMult: 2.2,
        status: 0.28,
        pellets: 10,
        damage: 300,
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
    name: 'RIPKAS',
    mastery: 3,
    type: [
      'CLAWS',
      'RIPKAS'
    ],
    polarities: [
      'madurai'
    ],
    stance: 'madurai',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.8333,
        slide: 165,
        wall: 165,
        slam: 55,
        critChance: 0.2,
        critMult: 2,
        status: 0.15,
        damage: 55,
        split: [
          {
            type: 'Impact',
            percent: 0.050909090909090904
          },
          {
            type: 'Slash',
            percent: 0.8509090909090908
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
    name: 'SANCTI MAGISTAR',
    mastery: 8,
    type: [
      'HAMMERS',
      'SANCTI MAGISTAR'
    ],
    polarities: [
      'madurai'
    ],
    stance: 'vazarin',
    disposition: 3,
    channelMult: 1.5,
    modes: [
      {
        speed: 1,
        slide: 240,
        wall: 240,
        slam: 120,
        critChance: 0.2,
        critMult: 2,
        status: 0.1,
        damage: 120,
        split: [
          {
            type: 'Impact',
            percent: 0.8
          },
          {
            type: 'Slash',
            percent: 0.05
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
    name: 'SARPA',
    mastery: 8,
    type: [
      'GUNBLADE',
      'SARPA'
    ],
    polarities: [
      'vazarin'
    ],
    stance: 'madurai',
    disposition: 4,
    channelMult: 1.5,
    modes: [
      {
        name: 'Regular',
        speed: 1,
        slide: 210,
        wall: 280,
        slam: 70,
        critChance: 0.05,
        critMult: 1.5,
        status: 0.1,
        damage: 70,
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
      },
      {
        name: 'Charge Burst',
        speed: 1,
        critChance: 0.05,
        critMult: 1.5,
        status: 0.1,
        damage: 70,
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
    name: 'SCINDO',
    mastery: 2,
    type: [
      'HEAVY BLADES',
      'SCINDO'
    ],
    polarities: [],
    stance: 'madurai',
    disposition: 3,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.9167,
        slide: 200,
        wall: 200,
        slam: 100,
        critChance: 0.15,
        critMult: 1.5,
        status: 0.1,
        damage: 100,
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
    name: 'SCINDO PRIME',
    mastery: 4,
    type: [
      'HEAVY BLADES',
      'SCINDO PRIME'
    ],
    polarities: [
      'madurai'
    ],
    stance: 'madurai',
    disposition: 3,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.9667,
        slide: 260,
        wall: 260,
        slam: 130,
        critChance: 0.2,
        critMult: 2,
        status: 0.15,
        damage: 130,
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
    name: 'SCOLIAC',
    mastery: 6,
    type: [
      'WHIPS',
      'SCOLIAC'
    ],
    polarities: [
      'madurai'
    ],
    stance: 'zenurik',
    disposition: 4,
    channelMult: 1.5,
    modes: [
      {
        speed: 1.25,
        slide: 118,
        wall: 220,
        slam: 55,
        critChance: 0.05,
        critMult: 1.5,
        status: 0.15,
        damage: 55,
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
    name: 'SECURA LECTA',
    mastery: 8,
    type: [
      'WHIPS',
      'SECURA LECTA'
    ],
    polarities: [
      'vazarin'
    ],
    stance: 'vazarin',
    disposition: 1,
    channelMult: 1.5,
    modes: [
      {
        speed: 1.25,
        slide: 161,
        wall: 300,
        slam: 75,
        critChance: 0.05,
        critMult: 1.5,
        status: 0.25,
        damage: 75,
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
    name: 'SERRO',
    mastery: 2,
    type: [
      'POLEARMS',
      'SERRO'
    ],
    polarities: [
      'madurai'
    ],
    stance: 'naramon',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.9167,
        slide: 167,
        wall: 125,
        slam: 75,
        critChance: 0.05,
        critMult: 1.5,
        status: 0.25,
        damage: 75,
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
    name: 'SHAKU',
    mastery: 0,
    type: [
      'NUNCHAKU',
      'SHAKU'
    ],
    polarities: [],
    stance: 'vazarin',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        speed: 1.1667,
        slide: 118,
        wall: 220,
        slam: 55,
        critChance: 0.075,
        critMult: 2,
        status: 0.25,
        damage: 55,
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
    name: 'SHEEV',
    mastery: 0,
    type: [
      'DAGGERS',
      'SHEEV'
    ],
    polarities: [
      'naramon'
    ],
    stance: 'madurai',
    disposition: 4,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.6667,
        slide: 96,
        wall: 135,
        slam: 45,
        critChance: 0.05,
        critMult: 2,
        status: 0.25,
        damage: 45,
        split: [
          {
            type: 'Impact',
            percent: 0.05
          },
          {
            type: 'Slash',
            percent: 0.9
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
    name: 'SIBEAR',
    mastery: 6,
    type: [
      'HAMMERS',
      'SIBEAR'
    ],
    polarities: [
      'vazarin'
    ],
    stance: 'madurai',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        speed: 1,
        slide: 260,
        wall: 260,
        slam: 130,
        critChance: 0.15,
        critMult: 2,
        status: 0.1,
        damage: 130,
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
    name: 'SIGMA & OCTANTIS',
    mastery: 0,
    type: [
      'SWORD & SHIELD',
      'SIGMA & OCTANTIS'
    ],
    polarities: [],
    stance: 'madurai',
    disposition: 3,
    channelMult: 1.5,
    modes: [
      {
        speed: 1.0833,
        slide: 129,
        wall: 240,
        slam: 60,
        critChance: 0.28,
        critMult: 2.2,
        status: 0.16,
        damage: 60,
        split: [
          {
            type: 'Impact',
            percent: 0.22
          },
          {
            type: 'Slash',
            percent: 0.62
          },
          {
            type: 'Puncture',
            percent: 0.16
          }
        ]
      }
    ]
  },
  {
    name: 'SILVA & AEGIS',
    mastery: 0,
    type: [
      'SWORD & SHIELD',
      'SILVA & AEGIS'
    ],
    polarities: [],
    stance: 'madurai',
    disposition: 3,
    channelMult: 1.5,
    modes: [
      {
        speed: 1,
        slide: 75,
        wall: 140,
        slam: 35,
        critChance: 0.05,
        critMult: 1.5,
        status: 0.2,
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
    name: 'SILVA & AEGIS PRIME',
    mastery: 12,
    type: [
      'SWORD & SHIELD',
      'SILVA & AEGIS PRIME'
    ],
    polarities: [
      'madurai',
      'vazarin',
      'vazarin'
    ],
    stance: 'madurai',
    disposition: 3,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.75,
        slide: 257,
        wall: 480,
        slam: 120,
        critChance: 0.15,
        critMult: 2,
        status: 0.25,
        damage: 120,
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
    name: 'SKANA',
    mastery: 0,
    type: [
      'SWORDS',
      'SKANA'
    ],
    polarities: [],
    stance: 'madurai',
    disposition: 4,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.8333,
        slide: 75,
        wall: 140,
        slam: 35,
        critChance: 0.05,
        critMult: 1.5,
        status: 0.1,
        damage: 35,
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
    name: 'SKANA PRIME',
    mastery: 0,
    type: [
      'SWORDS',
      'SKANA PRIME'
    ],
    polarities: [
      'madurai',
      'naramon'
    ],
    stance: 'madurai',
    disposition: 4,
    channelMult: 1.5,
    modes: [
      {
        speed: 1,
        slide: 90,
        wall: 168,
        slam: 42,
        critChance: 0.1,
        critMult: 1.5,
        status: 0.1,
        damage: 42,
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
    name: 'SKIAJATI',
    mastery: 11,
    type: [
      'NIKANAS',
      'SKIAJATI'
    ],
    polarities: [
      'umbra',
      'umbra'
    ],
    stance: 'madurai',
    disposition: 3,
    channelMult: 1.5,
    modes: [
      {
        speed: 1.1667,
        slide: 165,
        wall: 165,
        slam: 77,
        critChance: 0.15,
        critMult: 1.9,
        status: 0.27,
        damage: 77,
        split: [
          {
            type: 'Impact',
            percent: 0.15064935064935064
          },
          {
            type: 'Slash',
            percent: 0.7805194805194805
          },
          {
            type: 'Puncture',
            percent: 0.07012987012987014
          }
        ]
      }
    ]
  },
  {
    name: 'SYDON',
    mastery: 2,
    type: [
      'POLEARMS',
      'SYDON'
    ],
    polarities: [],
    stance: 'zenurik',
    disposition: 2,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.9167,
        slide: 167,
        wall: 125,
        slam: 75,
        critChance: 0.1,
        critMult: 2,
        status: 0.25,
        damage: 75,
        split: [
          {
            type: 'Impact',
            percent: 0.050666666666666665
          },
          {
            type: 'Puncture',
            percent: 0.9506666666666667
          }
        ]
      }
    ]
  },
  {
    name: 'SYNOID HELIOCOR',
    mastery: 9,
    type: [
      'HAMMERS',
      'SYNOID HELIOCOR'
    ],
    polarities: [],
    stance: 'madurai',
    disposition: 3,
    channelMult: 1.75,
    modes: [
      {
        speed: 1.0833,
        slide: 240,
        wall: 240,
        slam: 120,
        critChance: 0.1,
        critMult: 2,
        status: 0.2,
        damage: 120,
        split: [
          {
            type: 'Impact',
            percent: 0.85
          },
          {
            type: 'Slash',
            percent: 0.05
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
    name: 'TEKKO',
    mastery: 2,
    type: [
      'FISTS',
      'TEKKO'
    ],
    polarities: [
      'madurai'
    ],
    stance: 'vazarin',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.9167,
        slide: 135,
        wall: 135,
        slam: 45,
        critChance: 0.3,
        critMult: 2,
        status: 0.1,
        damage: 45,
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
    name: 'TELOS BOLTACE',
    mastery: 8,
    type: [
      'TONFAS',
      'TELOS BOLTACE'
    ],
    polarities: [
      'naramon'
    ],
    stance: 'madurai',
    disposition: 3,
    channelMult: 1.5,
    modes: [
      {
        speed: 1.0833,
        slide: 510,
        wall: 340,
        slam: 85,
        critChance: 0.1,
        critMult: 2,
        status: 0.25,
        damage: 85,
        split: [
          {
            type: 'Impact',
            percent: 0.1
          },
          {
            type: 'Slash',
            percent: 0.049411764705882356
          },
          {
            type: 'Puncture',
            percent: 0.8505882352941176
          }
        ]
      }
    ]
  },
  {
    name: 'TIPEDO',
    mastery: 3,
    type: [
      'STAVES',
      'TIPEDO'
    ],
    polarities: [
      'vazarin'
    ],
    stance: 'unairu',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        speed: 1.3333,
        slide: 107,
        wall: 83,
        slam: 50,
        critChance: 0.2,
        critMult: 2,
        status: 0.2,
        damage: 50,
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
    name: 'TONBO',
    mastery: 3,
    type: [
      'POLEARMS',
      'TONBO'
    ],
    polarities: [
      'madurai'
    ],
    stance: 'zenurik',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        speed: 1,
        slide: 178,
        wall: 133,
        slam: 80,
        critChance: 0.05,
        critMult: 2,
        status: 0.25,
        damage: 80,
        split: [
          {
            type: 'Impact',
            percent: 0.1
          },
          {
            type: 'Slash',
            percent: 0.75
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
    name: 'TWIN BASOLK',
    mastery: 3,
    type: [
      'DUAL SWORDS',
      'TWIN BASOLK'
    ],
    polarities: [
      'madurai'
    ],
    stance: 'zenurik',
    disposition: 4,
    channelMult: 1.5,
    modes: [
      {
        speed: 1,
        slide: 390,
        wall: 260,
        slam: 65,
        critChance: 0.05,
        critMult: 2,
        status: 0.4,
        damage: 65,
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
    name: 'TWIN KROHKUR',
    mastery: 6,
    type: [
      'DUAL SWORDS',
      'TWIN KROHKUR'
    ],
    polarities: [],
    stance: 'naramon',
    disposition: 5,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.9167,
        slide: 420,
        wall: 280,
        slam: 70,
        critChance: 0.19,
        critMult: 1.7,
        status: 0.33,
        damage: 70,
        split: [
          {
            type: 'Impact',
            percent: 0.12000000000000001
          },
          {
            type: 'Slash',
            percent: 0.7
          },
          {
            type: 'Puncture',
            percent: 0.18
          }
        ]
      }
    ]
  },
  {
    name: 'VALKYR TALONS',
    mastery: 0,
    type: [
      'HYSTERIA',
      'VALKYR TALONS'
    ],
    polarities: [
      'madurai',
      'naramon',
      'naramon'
    ],
    stance: undefined,
    disposition: 0,
    channelMult: 1.5,
    exalted: true,
    modes: [
      {
        speed: 1.5,
        slide: 750,
        wall: 750,
        slam: 250,
        critChance: 0.5,
        critMult: 2,
        status: 0.1,
        damage: 250,
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
    name: 'VAYKOR SYDON',
    mastery: 8,
    type: [
      'POLEARMS',
      'VAYKOR SYDON'
    ],
    polarities: [
      'madurai'
    ],
    stance: 'zenurik',
    disposition: 2,
    channelMult: 1.5,
    modes: [
      {
        speed: 1.0833,
        slide: 189,
        wall: 142,
        slam: 85,
        critChance: 0.15,
        critMult: 2,
        status: 0.25,
        damage: 85,
        split: [
          {
            type: 'Impact',
            percent: 0.05058823529411764
          },
          {
            type: 'Puncture',
            percent: 0.9505882352941176
          }
        ]
      }
    ]
  },
  {
    name: 'VENKA',
    mastery: 3,
    type: [
      'CLAWS',
      'VENKA'
    ],
    polarities: [],
    stance: 'madurai',
    disposition: 1,
    channelMult: 1.5,
    modes: [
      {
        speed: 1,
        slide: 111,
        wall: 111,
        slam: 37,
        critChance: 0.15,
        critMult: 2,
        status: 0.15,
        damage: 37,
        split: [
          {
            type: 'Impact',
            percent: 0.05
          },
          {
            type: 'Slash',
            percent: 0.7
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
    name: 'VENKA PRIME',
    mastery: 8,
    type: [
      'CLAWS',
      'VENKA PRIME'
    ],
    polarities: [
      'naramon',
      'madurai'
    ],
    stance: 'madurai',
    disposition: 1,
    channelMult: 1.5,
    step: 0.75,
    modes: [
      {
        speed: 1.05,
        slide: 165,
        wall: 165,
        slam: 55,
        critChance: 0.25,
        critMult: 2.5,
        status: 0.15,
        damage: 55,
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
      }
    ]
  },
  {
    name: 'VOLNUS',
    mastery: 4,
    type: [
      'HAMMERS',
      'VOLNUS'
    ],
    polarities: [
      'madurai'
    ],
    stance: 'madurai',
    disposition: 4,
    channelMult: 1.5,
    modes: [
      {
        speed: 1.2,
        slide: 200,
        wall: 200,
        slam: 100,
        critChance: 0.18,
        critMult: 1.6,
        status: 0.3,
        damage: 100,
        split: [
          {
            type: 'Impact',
            percent: 0.22
          },
          {
            type: 'Slash',
            percent: 0.46
          },
          {
            type: 'Puncture',
            percent: 0.32
          }
        ]
      }
    ]
  },
  {
    name: 'WAR',
    mastery: 10,
    type: [
      'HEAVY BLADES',
      'WAR'
    ],
    polarities: [
      'naramon'
    ],
    stance: 'vazarin',
    disposition: 1,
    channelMult: 1.5,
    modes: [
      {
        speed: 0.9167,
        slide: 280,
        wall: 280,
        slam: 140,
        critChance: 0.2,
        critMult: 2,
        status: 0.2,
        damage: 140,
        split: [
          {
            type: 'Impact',
            percent: 0.8
          },
          {
            type: 'Slash',
            percent: 0.175
          },
          {
            type: 'Puncture',
            percent: 0.025
          }
        ]
      }
    ]
  },
  {
    name: 'ZENISTAR',
    mastery: 6,
    type: [
      'HEAVY BLADES',
      'ZENISTAR'
    ],
    polarities: [
      'madurai'
    ],
    stance: 'madurai',
    disposition: 1,
    channelMult: 1.5,
    modes: [
      {
        name: 'Undeployed',
        speed: 0.8333,
        slide: 260,
        wall: 260,
        slam: 130,
        critChance: 0.05,
        critMult: 2,
        status: 0.25,
        damage: 130,
        split: [
          {
            type: 'Heat',
            percent: 1
          }
        ]
      },
      {
        name: 'Deployed',
        speed: 0.8333,
        slide: 260,
        wall: 260,
        slam: 130,
        critChance: 0.05,
        critMult: 2,
        status: 0.25,
        damage: 130,
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
      },
      {
        name: 'Disc Aura',
        speed: 0.8333,
        critChance: 0.05,
        critMult: 2,
        status: 0.5,
        damage: 50,
        split: [
          {
            type: 'Heat',
            percent: 1
          }
        ]
      },
      {
        name: 'Disc Explosion',
        speed: 0.8333,
        critChance: 0.05,
        critMult: 2,
        status: 0.25,
        damage: 350,
        split: [
          {
            type: 'Heat',
            percent: 1
          }
        ]
      },
    ]
  }
]

export default meleeStats;