const zaws = {
    first: [
        {
            name: 'BALLA',
            img: require('../assets/itemimages/balla.png'),
            oneHanded: { type: 'DAGGERS', polarity: 'madurai' },
            twoHanded: { type: 'STAVES', polarity: 'madurai' },
            speed: 0.0833,
            critChance: 0.18,
            critMult: 2,
            status: 0.18,
            damage: 68,
            split: [
                {
                    type: 'Impact',
                    percent: 0.05
                },
                {
                    type: 'Slash',
                    percent: 0.35
                },
                {
                    type: 'Puncture',
                    percent: 0.6
                }
            ]
        },
        {
            name: 'CYATH',
            img: require('../assets/itemimages/cyath.png'),
            oneHanded: { type: 'MACHETES', polarity: 'zenurik' },
            twoHanded: { type: 'POLEARMS', polarity: 'naramon' },
            speed: 0,
            critChance: 0.18,
            critMult: 2,
            status: 0.18,
            damage: 72,
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
            name: 'DEHTAT',
            img: require('../assets/itemimages/dehtat.png'),
            oneHanded: { type: 'RAPIERS', polarity: 'naramon' },
            twoHanded: { type: 'POLEARMS', polarity: 'naramon' },
            speed: 0.0833,
            critChance: 0.18,
            critMult: 2,
            status: 0.18,
            damage: 68,
            split: [
                {
                    type: 'Impact',
                    percent: 0.1
                },
                {
                    type: 'Slash',
                    percent: 0.4
                },
                {
                    type: 'Puncture',
                    percent: 0.5
                }
            ]
        },
        {
            name: 'DOKRAHM',
            img: require('../assets/itemimages/dokrahm.png'),
            oneHanded: { type: 'SCYTHES', polarity: 'zenurik' },
            twoHanded: { type: 'HEAVY BLADES', polarity: 'madurai' },
            speed: 0.0833,
            critChance: 0.18,
            critMult: 2,
            status: 0.18,
            damage: 68,
            split: [
                {
                    type: 'Impact',
                    percent: 0.15
                },
                {
                    type: 'Slash',
                    percent: 0.5
                },
                {
                    type: 'Puncture',
                    percent: 0.35
                }
            ]
        },
        {
            name: 'KRONSH',
            img: require('../assets/itemimages/kronsh.png'),
            oneHanded: { type: 'MACHETES', polarity: 'zenurik' },
            twoHanded: { type: 'POLEARMS', polarity: 'naramon' },
            speed: -0.0666,
            critChance: 0.18,
            critMult: 2,
            status: 0.18,
            damage: 86,
            split: [
                {
                    type: 'Impact',
                    percent: 0.7
                },
                {
                    type: 'Slash',
                    percent: 0.3
                }
            ]
        },
        {
            name: 'MEWAN',
            img: require('../assets/itemimages/mewan.png'),
            oneHanded: { type: 'SWORDS', polarity: 'madurai' },
            twoHanded: { type: 'POLEARMS', polarity: 'naramon' },
            speed: -0.0666,
            critChance: 0.18,
            critMult: 2,
            status: 0.18,
            damage: 86,
            split: [
                {
                    type: 'Impact',
                    percent: 0.25
                },
                {
                    type: 'Slash',
                    percent: 0.4
                },
                {
                    type: 'Puncture',
                    percent: 0.35
                }
            ]
        },
        {
            name: 'OOLTHA',
            img: require('../assets/itemimages/ooltha.png'),
            oneHanded: { type: 'SWRODS', polarity: 'madurai' },
            twoHanded: { type: 'STAVES', polarity: 'madurai' },
            speed: 0,
            critChance: 0.18,
            critMult: 2,
            status: 0.18,
            damage: 72,
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
        },
        {
            name: 'PLAGUE KEEWAR',
            img: require('../assets/itemimages/plague-keewar.png'),
            oneHanded: { type: 'SCYTHES', polarity: 'zenurik' },
            twoHanded: { type: 'STAVES', polarity: 'madurai' },
            speed: -0.0333,
            critChance: 0.18,
            critMult: 2,
            status: 0.22,
            damage: 79,
            split: [
                {
                    type: 'Impact',
                    percent: 0.28
                },
                {
                    type: 'Slash',
                    percent: 0.33
                },
                {
                    type: 'Puncture',
                    percent: 0.14
                },
                {
                    type: 'Viral',
                    percent: 0.25
                }
            ]
        },
        {
            name: 'PLAGUE KRIPATH',
            img: require('../assets/itemimages/plague-kripath.png'),
            oneHanded: { type: 'RAPIERS', polarity: 'naramon' },
            twoHanded: { type: 'POLEARMS', polarity: 'naramon' },
            speed: 0.03333,
            critChance: 0.22,
            critMult: 2.2,
            status: 0.18,
            damage: 70,
            split: [
                {
                    type: 'Impact',
                    percent: 0.14
                },
                {
                    type: 'Slash',
                    percent: 0.21
                },
                {
                    type: 'Puncture',
                    percent: 0.36
                },
                {
                    type: 'Viral',
                    percent: 0.29
                }
            ]
        },
        {
            name: 'RABVEE',
            img: require('../assets/itemimages/rabvee.png'),
            oneHanded: { type: 'MACHETES', polarity: 'zenurik' },
            twoHanded: { type: 'HAMMERS', polarity: 'madurai' },
            speed: -0.06666,
            critChance: 0.18,
            critMult: 2,
            status: 0.18,
            damage: 86,
            split: [
                {
                    type: 'Impact',
                    percent: 0.6
                },
                {
                    type: 'Slash',
                    percent: 0.35
                },
                {
                    type: 'Puncture',
                    percent: 0.05
                }
            ]
        },
        {
            name: 'SEPFAHN',
            img: require('../assets/itemimages/sepfahn.png'),
            oneHanded: { type: 'NIKANAS', polarity: 'madurai' },
            twoHanded: { type: 'STAVES', polarity: 'madurai' },
            speed: 0,
            critChance: 0.2,
            critMult: 2,
            status: 0.2,
            damage: 72,
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
    ],
    second: [
        {
            name: 'PEYE',
            img: require('../assets/itemimages/peye.png'),
            grip: true,
            speed: 1,
            damage: -4
        },
        {
            name: 'PLAGUE AKWIN',
            img: require('../assets/itemimages/plague-akwin.png'),
            grip: true,
            speed: 0.95,
            damage: -2
        },
        {
            name: 'LAKA',
            img: require('../assets/itemimages/laka.png'),
            grip: true,
            speed: 0.917,
            damage: 0
        },
        {
            name: 'KWATH',
            img: require('../assets/itemimages/kwath.png'),
            grip: true,
            speed: 0.85,
            damage: 14
        },
        {
            name: 'KORB',
            img: require('../assets/itemimages/korb.png'),
            grip: true,
            speed: 0.783,
            damage: 28
        },
        {
            name: 'SEEKALLA',
            img: require('../assets/itemimages/seekalla.png'),
            grip: false,
            speed: 1,
            damage: -4
        },
        {
            name: 'JAYAP',
            img: require('../assets/itemimages/jayap.png'),
            grip: false,
            speed: 0.917,
            damage: 0
        },
        {
            name: 'PLAGUE BOKWIN',
            img: require('../assets/itemimages/plague-bokwin.png'),
            grip: false,
            speed: 0.883,
            damage: 7
        },
        {
            name: 'KROOSTRA',
            img: require('../assets/itemimages/kroostra.png'),
            grip: false,
            speed: 0.85,
            damage: 14
        },
        {
            name: 'SHTUNG',
            img: require('../assets/itemimages/shtung.png'),
            grip: false,
            speed: 0.783,
            damage: 28
        }
    ],
    third: [
        {
            name: 'JAI',
            img: require('../assets/itemimages/jai.png'),
            type: 0,
            speed: 0.0833,
            critChance: 0,
            status: 0,
            damage: -4,
        },
        {
            name: 'RUHANG',
            img: require('../assets/itemimages/ruhang.png'),
            type: 2,
            speed: -0.0666,
            critChance: 0,
            status: 0,
            damage: 14,
        },
        {
            name: 'JAI II',
            img: require('../assets/itemimages/jai-ii.png'),
            type: 1,
            speed: 0.1666,
            critChance: 0,
            status: 0,
            damage: -8,
        },
        {
            name: 'RUHANG II',
            img: require('../assets/itemimages/ruhang-ii.png'),
            type: 3,
            speed: -0.1333,
            critChance: 0,
            status: 0,
            damage: 28,
        },
        {
            name: 'VARGEET JAI',
            img: require('../assets/itemimages/vargeet-jai.png'),
            type: 0,
            speed: 0.0833,
            critChance: 0.07,
            status: -0.04,
            damage: -4
        },
        {
            name: 'VARGEET RUHANG',
            img: require('../assets/itemimages/vargeet-ruhang.png'),
            type: 2,
            speed: -0.0666,
            critChance: 0.07,
            status: -0.04,
            damage: 14
        },
        {
            name: 'EKWANA JAI',
            img: require('../assets/itemimages/ekwana-jai.png'),
            type: 0,
            speed: 0.0833,
            critChance: -0.04,
            status: 0.07,
            damage: -4
        },
        {
            name: 'EKWANA RUHANG',
            img: require('../assets/itemimages/ekwana-ruhang.png'),
            type: 2,
            speed: -0.0666,
            critChance: -0.04,
            status: 0.07,
            damage: 14
        },
        {
            name: 'VARGEET II JAI',
            img: require('../assets/itemimages/vargeet-ii-jai.png'),
            type: 0,
            speed: 0.0833,
            critChance: 0.14,
            status: -0.08,
            damage: -4
        },
        {
            name: 'VARGEET II RUHANG',
            img: require('../assets/itemimages/vargeet-ii-ruhang.png'),
            type: 2,
            speed: -0.0666,
            critChance: 0.14,
            status: -0.08,
            damage: 14
        },
        {
            name: 'EKWANA II JAI',
            img: require('../assets/itemimages/ekwana-ii-jai.png'),
            type: 0,
            speed: 0.0833,
            critChance: -0.08,
            status: 0.14,
            damage: -4
        },
        {
            name: 'EKWANA II RUHANG',
            img: require('../assets/itemimages/ekwana-ii-ruhang.png'),
            type: 2,
            speed: -0.0666,
            critChance: -0.08,
            status: 0.14,
            damage: 14
        },
        {
            name: 'VARGEET JAI II',
            img: require('../assets/itemimages/vargeet-jai-ii.png'),
            type: 1,
            speed: 0.1666,
            critChance: 0.07,
            status: -0.04,
            damage: -8
        },
        {
            name: 'VARGEET RUHANG II',
            img: require('../assets/itemimages/vargeet-ruhang-ii.png'),
            type: 3,
            speed: -0.1333,
            critChance: 0.07,
            status: -0.04,
            damage: 28
        },
        {
            name: 'EKWANA JAI II',
            img: require('../assets/itemimages/ekwana-jai-ii.png'),
            type: 1,
            speed: 0.1666,
            critChance: -0.04,
            status: 0.07,
            damage: -8
        },
        {
            name: 'EKWANA RUHANG II',
            img: require('../assets/itemimages/ekwana-ruhang-ii.png'),
            type: 3,
            speed: -0.1333,
            critChance: -0.04,
            status: 0.07,
            damage: 28
        }
    ],
    specials: [
        {
            balla: {
                korb: {
                    slide: 197,
                    wall: 276
                },
                kwath: {
                    slide: 167,
                    wall: 234
                },
                laka: {
                    slide: 137,
                    wall: 192
                },
                peye: {
                    slide: 129,
                    wall: 180
                },
                akwin: {
                    slide: 133,
                    wall: 186
                },
                jayap: {
                    slide: 161,
                    wall: 126
                },
                kroostra: {
                    slide: 197,
                    wall: 153
                },
                seekalla: {
                    slide: 152,
                    wall: 117
                },
                shtung: {
                    slide: 232,
                    wall: 180
                },
                bokwin: {
                    slide: 179,
                    wall: 139
                }
            },
            cyath: {
                korb: {
                    slide: 288,
                    wall: 384
                },
                kwath: {
                    slide: 246,
                    wall: 328
                },
                laka: {
                    slide: 204,
                    wall: 272
                },
                peye: {
                    slide: 192,
                    wall: 256
                },
                akwin: {
                    slide: 198,
                    wall: 264
                },
                jayap: {
                    slide: 178,
                    wall: 133
                },
                kroostra: {
                    slide: 214,
                    wall: 161
                },
                seekalla: {
                    slide: 167,
                    wall: 126
                },
                shtung: {
                    slide: 251,
                    wall: 188
                },
                bokwin: {
                    slide: 197,
                    wall: 147
                }
            },
            dehtat: {
                korb: {
                    slide: 197,
                    wall: 368
                },
                kwath: {
                    slide: 167,
                    wall: 312
                },
                laka: {
                    slide: 137,
                    wall: 256
                },
                peye: {
                    slide: 129,
                    wall: 240
                },
                akwin: {
                    slide: 133,
                    wall: 248
                },
                jayap: {
                    slide: 167,
                    wall: 126
                },
                kroostra: {
                    slide: 204,
                    wall: 153
                },
                seekalla: {
                    slide: 156,
                    wall: 117
                },
                shtung: {
                    slide: 240,
                    wall: 180
                },
                bokwin: {
                    slide: 186,
                    wall: 139
                }
            },
            dokrahm: {
                korb: {
                    slide: 184,
                    wall: 184
                },
                kwath: {
                    slide: 156,
                    wall: 156
                },
                laka: {
                    slide: 128,
                    wall: 128
                },
                peye: {
                    slide: 120,
                    wall: 120
                },
                akwin: {
                    slide: 124,
                    wall: 124
                },
                jayap: {
                    slide: 217,
                    wall: 217
                },
                kroostra: {
                    slide: 265,
                    wall: 265
                },
                seekalla: {
                    slide: 204,
                    wall: 204
                },
                shtung: {
                    slide: 312,
                    wall: 312
                },
                bokwin: {
                    slide: 241,
                    wall: 241
                }
            },
            kronsh: {
                korb: {
                    slide: 330,
                    wall: 440
                },
                kwath: {
                    slide: 288,
                    wall: 384
                },
                laka: {
                    slide: 246,
                    wall: 328
                },
                peye: {
                    slide: 234,
                    wall: 312
                },
                akwin: {
                    slide: 240,
                    wall: 320
                },
                jayap: {
                    slide: 214,
                    wall: 161
                },
                kroostra: {
                    slide: 251,
                    wall: 188
                },
                seekalla: {
                    slide: 204,
                    wall: 153
                },
                shtung: {
                    slide: 287,
                    wall: 215
                },
                bokwin: {
                    slide: 233,
                    wall: 174
                }
            },
            mewan: {
                korb: {
                    slide: 236,
                    wall: 440
                },
                kwath: {
                    slide: 206,
                    wall: 384
                },
                laka: {
                    slide: 176,
                    wall: 328
                },
                peye: {
                    slide: 167,
                    wall: 312
                },
                akwin: {
                    slide: 171,
                    wall: 320
                },
                jayap: {
                    slide: 214,
                    wall: 161
                },
                kroostra: {
                    slide: 251,
                    wall: 188
                },
                seekalla: {
                    slide: 204,
                    wall: 153
                },
                shtung: {
                    slide: 287,
                    wall: 215
                },
                bokwin: {
                    slide: 233,
                    wall: 174
                }
            },
            ooltha: {
                korb: {
                    slide: 206,
                    wall: 384
                },
                kwath: {
                    slide: 176,
                    wall: 328
                },
                laka: {
                    slide: 146,
                    wall: 272
                },
                peye: {
                    slide: 137,
                    wall: 256
                },
                akwin: {
                    slide: 141,
                    wall: 264
                },
                jayap: {
                    slide: 172,
                    wall: 133
                },
                kroostra: {
                    slide: 207,
                    wall: 161
                },
                seekalla: {
                    slide: 161,
                    wall: 126
                },
                shtung: {
                    slide: 243,
                    wall: 188
                },
                bokwin: {
                    slide: 189,
                    wall: 147
                }
            },
            keewar: {
                korb: {
                    slide: 206,
                    wall: 206
                },
                kwath: {
                    slide: 178,
                    wall: 178
                },
                laka: {
                    slide: 150,
                    wall: 150
                },
                peye: {
                    slide: 142,
                    wall: 142
                },
                akwin: {
                    slide: 146,
                    wall: 146
                },
                jayap: {
                    slide: 189,
                    wall: 147
                },
                kroostra: {
                    slide: 225,
                    wall: 174
                },
                seekalla: {
                    slide: 179,
                    wall: 139
                },
                shtung: {
                    slide: 260,
                    wall: 202
                },
                bokwin: {
                    slide: 207,
                    wall: 161
                }
            },
            kripath: {
                korb: {
                    slide: 201,
                    wall: 376
                },
                kwath: {
                    slide: 171,
                    wall: 320
                },
                laka: {
                    slide: 141,
                    wall: 264
                },
                peye: {
                    slide: 133,
                    wall: 248
                },
                akwin: {
                    slide: 137,
                    wall: 256
                },
                jayap: {
                    slide: 173,
                    wall: 129
                },
                kroostra: {
                    slide: 210,
                    wall: 156
                },
                seekalla: {
                    slide: 162,
                    wall: 121
                },
                shtung: {
                    slide: 246,
                    wall: 185
                },
                bokwin: {
                    slide: 191,
                    wall: 143
                }
            },
            rabvee: {
                korb: {
                    slide: 330,
                    wall: 440
                },
                kwath: {
                    slide: 288,
                    wall: 384
                },
                laka: {
                    slide: 246,
                    wall: 328
                },
                peye: {
                    slide: 234,
                    wall: 312
                },
                akwin: {
                    slide: 240,
                    wall: 320
                },
                jayap: {
                    slide: 278,
                    wall: 278
                },
                kroostra: {
                    slide: 326,
                    wall: 326
                },
                seekalla: {
                    slide: 265,
                    wall: 265
                },
                shtung: {
                    slide: 374,
                    wall: 374
                },
                bokwin: {
                    slide: 302,
                    wall: 302
                }
            },
            sepfahn: {
                korb: {
                    slide: 206,
                    wall: 206
                },
                kwath: {
                    slide: 176,
                    wall: 176
                },
                laka: {
                    slide: 146,
                    wall: 146
                },
                peye: {
                    slide: 137,
                    wall: 137
                },
                akwin: {
                    slide: 141,
                    wall: 141
                },
                jayap: {
                    slide: 172,
                    wall: 133
                },
                kroostra: {
                    slide: 207,
                    wall: 161
                },
                seekalla: {
                    slide: 161,
                    wall: 126
                },
                shtung: {
                    slide: 243,
                    wall: 188
                },
                bokwin: {
                    slide: 189,
                    wall: 147
                }
            }
        },
        {
            balla: {
                korb: {
                    slide: 189,
                    wall: 264
                },
                kwath: {
                    slide: 159,
                    wall: 222
                },
                laka: {
                    slide: 129,
                    wall: 180
                },
                peye: {
                    slide: 120,
                    wall: 168
                },
                akwin: {
                    slide: 124,
                    wall: 174
                },
                jayap: {
                    slide: 152,
                    wall: 117
                },
                kroostra: {
                    slide: 187,
                    wall: 145
                },
                seekalla: {
                    slide: 141,
                    wall: 109
                },
                shtung: {
                    slide: 223,
                    wall: 173
                },
                bokwin: {
                    slide: 167,
                    wall: 132
                }
            },
            cyath: {
                korb: {
                    slide: 276,
                    wall: 368
                },
                kwath: {
                    slide: 234,
                    wall: 312
                },
                laka: {
                    slide: 192,
                    wall: 256
                },
                peye: {
                    slide: 180,
                    wall: 240
                },
                akwin: {
                    slide: 186,
                    wall: 248
                },
                jayap: {
                    slide: 167,
                    wall: 126
                },
                kroostra: {
                    slide: 204,
                    wall: 153
                },
                seekalla: {
                    slide: 156,
                    wall: 117
                },
                shtung: {
                    slide: 240,
                    wall: 180
                },
                bokwin: {
                    slide: 186,
                    wall: 139
                }
            },
            dehtat: {
                korb: {
                    slide: 189,
                    wall: 352
                },
                kwath: {
                    slide: 159,
                    wall: 296
                },
                laka: {
                    slide: 129,
                    wall: 240
                },
                peye: {
                    slide: 120,
                    wall: 224
                },
                akwin: {
                    slide: 124,
                    wall: 232
                },
                jayap: {
                    slide: 156,
                    wall: 117
                },
                kroostra: {
                    slide: 193,
                    wall: 145
                },
                seekalla: {
                    slide: 146,
                    wall: 109
                },
                shtung: {
                    slide: 231,
                    wall: 173
                },
                bokwin: {
                    slide: 175,
                    wall: 132
                }
            },
            dokrahm: {
                korb: {
                    slide: 176,
                    wall: 176
                },
                kwath: {
                    slide: 148,
                    wall: 148
                },
                laka: {
                    slide: 120,
                    wall: 120
                },
                peye: {
                    slide: 112,
                    wall: 112
                },
                akwin: {
                    slide: 116,
                    wall: 116
                },
                jayap: {
                    slide: 204,
                    wall: 204
                },
                kroostra: {
                    slide: 251,
                    wall: 251
                },
                seekalla: {
                    slide: 190,
                    wall: 190
                },
                shtung: {
                    slide: 299,
                    wall: 299
                },
                bokwin: {
                    slide: 227,
                    wall: 227
                }
            },
            kronsh: {
                korb: {
                    slide: 318,
                    wall: 424
                },
                kwath: {
                    slide: 276,
                    wall: 368
                },
                laka: {
                    slide: 234,
                    wall: 312
                },
                peye: {
                    slide: 222,
                    wall: 296
                },
                akwin: {
                    slide: 228,
                    wall: 304
                },
                jayap: {
                    slide: 204,
                    wall: 153
                },
                kroostra: {
                    slide: 240,
                    wall: 180
                },
                seekalla: {
                    slide: 193,
                    wall: 145
                },
                shtung: {
                    slide: 278,
                    wall: 208
                },
                bokwin: {
                    slide: 223,
                    wall: 167
                }
            },
            mewan: {
                korb: {
                    slide: 227,
                    wall: 424
                },
                kwath: {
                    slide: 197,
                    wall: 368
                },
                laka: {
                    slide: 167,
                    wall: 312
                },
                peye: {
                    slide: 159,
                    wall: 296
                },
                akwin: {
                    slide: 163,
                    wall: 304
                },
                jayap: {
                    slide: 204,
                    wall: 153
                },
                kroostra: {
                    slide: 240,
                    wall: 180
                },
                seekalla: {
                    slide: 193,
                    wall: 145
                },
                shtung: {
                    slide: 278,
                    wall: 208
                },
                bokwin: {
                    slide: 223,
                    wall: 167
                }
            },
            ooltha: {
                korb: {
                    slide: 197,
                    wall: 368
                },
                kwath: {
                    slide: 167,
                    wall: 312
                },
                laka: {
                    slide: 137,
                    wall: 256
                },
                peye: {
                    slide: 129,
                    wall: 240
                },
                akwin: {
                    slide: 133,
                    wall: 248
                },
                jayap: {
                    slide: 161,
                    wall: 126
                },
                kroostra: {
                    slide: 197,
                    wall: 153
                },
                seekalla: {
                    slide: 152,
                    wall: 117
                },
                shtung: {
                    slide: 232,
                    wall: 180
                },
                bokwin: {
                    slide: 179,
                    wall: 139
                }
            },
            keewar: {
                korb: {
                    slide: 198,
                    wall: 198
                },
                kwath: {
                    slide: 170,
                    wall: 170
                },
                laka: {
                    slide: 142,
                    wall: 142
                },
                peye: {
                    slide: 134,
                    wall: 134
                },
                akwin: {
                    slide: 138,
                    wall: 138
                },
                jayap: {
                    slide: 179,
                    wall: 139
                },
                kroostra: {
                    slide: 214,
                    wall: 167
                },
                seekalla: {
                    slide: 169,
                    wall: 132
                },
                shtung: {
                    slide: 250,
                    wall: 194
                },
                bokwin: {
                    slide: 197,
                    wall: 153
                }
            },
            kripath: {
                korb: {
                    slide: 193,
                    wall: 360
                },
                kwath: {
                    slide: 163,
                    wall: 304
                },
                laka: {
                    slide: 133,
                    wall: 248
                },
                peye: {
                    slide: 124,
                    wall: 232
                },
                akwin: {
                    slide: 129,
                    wall: 240
                },
                jayap: {
                    slide: 162,
                    wall: 121
                },
                kroostra: {
                    slide: 199,
                    wall: 149
                },
                seekalla: {
                    slide: 152,
                    wall: 114
                },
                shtung: {
                    slide: 235,
                    wall: 176
                },
                bokwin: {
                    slide: 180,
                    wall: 135
                }
            },
            rabvee: {
                korb: {
                    slide: 318,
                    wall: 424
                },
                kwath: {
                    slide: 276,
                    wall: 368
                },
                laka: {
                    slide: 234,
                    wall: 312
                },
                peye: {
                    slide: 222,
                    wall: 296
                },
                akwin: {
                    slide: 228,
                    wall: 304
                },
                jayap: {
                    slide: 265,
                    wall: 265
                },
                kroostra: {
                    slide: 312,
                    wall: 312
                },
                seekalla: {
                    slide: 251,
                    wall: 251
                },
                shtung: {
                    slide: 360,
                    wall: 360
                },
                bokwin: {
                    slide: 289,
                    wall: 289
                }
            },
            sepfahn: {
                korb: {
                    slide: 197,
                    wall: 197
                },
                kwath: {
                    slide: 167,
                    wall: 167
                },
                laka: {
                    slide: 137,
                    wall: 137
                },
                peye: {
                    slide: 129,
                    wall: 129
                },
                akwin: {
                    slide: 133,
                    wall: 133
                },
                jayap: {
                    slide: 161,
                    wall: 126
                },
                kroostra: {
                    slide: 197,
                    wall: 153
                },
                seekalla: {
                    slide: 152,
                    wall: 117
                },
                shtung: {
                    slide: 232,
                    wall: 180
                },
                bokwin: {
                    slide: 179,
                    wall: 139
                }
            }
        },
        {
            balla: {
                korb: {
                    slide: 236,
                    wall: 330
                },
                kwath: {
                    slide: 206,
                    wall: 288
                },
                laka: {
                    slide: 176,
                    wall: 246
                },
                peye: {
                    slide: 167,
                    wall: 234
                },
                akwin: {
                    slide: 171,
                    wall: 240
                },
                jayap: {
                    slide: 207,
                    wall: 161
                },
                kroostra: {
                    slide: 243,
                    wall: 188
                },
                seekalla: {
                    slide: 197,
                    wall: 153
                },
                shtung: {
                    slide: 278,
                    wall: 215
                },
                bokwin: {
                    slide: 225,
                    wall: 174
                }
            },
            cyath: {
                korb: {
                    slide: 342,
                    wall: 456
                },
                kwath: {
                    slide: 300,
                    wall: 400
                },
                laka: {
                    slide: 258,
                    wall: 344
                },
                peye: {
                    slide: 246,
                    wall: 328
                },
                akwin: {
                    slide: 252,
                    wall: 336
                },
                jayap: {
                    slide: 225,
                    wall: 168
                },
                kroostra: {
                    slide: 261,
                    wall: 197
                },
                seekalla: {
                    slide: 214,
                    wall: 161
                },
                shtung: {
                    slide: 298,
                    wall: 224
                },
                bokwin: {
                    slide: 244,
                    wall: 182
                }
            },
            dehtat: {
                korb: {
                    slide: 236,
                    wall: 440
                },
                kwath: {
                    slide: 206,
                    wall: 384
                },
                laka: {
                    slide: 176,
                    wall: 328
                },
                peye: {
                    slide: 167,
                    wall: 312
                },
                akwin: {
                    slide: 171,
                    wall: 320
                },
                jayap: {
                    slide: 214,
                    wall: 161
                },
                kroostra: {
                    slide: 251,
                    wall: 188
                },
                seekalla: {
                    slide: 204,
                    wall: 153
                },
                shtung: {
                    slide: 287,
                    wall: 215
                },
                bokwin: {
                    slide: 233,
                    wall: 174
                }
            },
            dokrahm: {
                korb: {
                    slide: 220,
                    wall: 220
                },
                kwath: {
                    slide: 192,
                    wall: 192
                },
                laka: {
                    slide: 164,
                    wall: 164
                },
                peye: {
                    slide: 156,
                    wall: 156
                },
                akwin: {
                    slide: 160,
                    wall: 160
                },
                jayap: {
                    slide: 278,
                    wall: 278
                },
                kroostra: {
                    slide: 326,
                    wall: 326
                },
                seekalla: {
                    slide: 265,
                    wall: 265
                },
                shtung: {
                    slide: 374,
                    wall: 374
                },
                bokwin: {
                    slide: 302,
                    wall: 302
                }
            },
            kronsh: {
                korb: {
                    slide: 384,
                    wall: 512
                },
                kwath: {
                    slide: 342,
                    wall: 456
                },
                laka: {
                    slide: 300,
                    wall: 400
                },
                peye: {
                    slide: 288,
                    wall: 384
                },
                akwin: {
                    slide: 294,
                    wall: 392
                },
                jayap: {
                    slide: 261,
                    wall: 197
                },
                kroostra: {
                    slide: 298,
                    wall: 224
                },
                seekalla: {
                    slide: 251,
                    wall: 188
                },
                shtung: {
                    slide: 335,
                    wall: 251
                },
                bokwin: {
                    slide: 280,
                    wall: 210
                }
            },
            mewan: {
                korb: {
                    slide: 274,
                    wall: 512
                },
                kwath: {
                    slide: 244,
                    wall: 456
                },
                laka: {
                    slide: 214,
                    wall: 400
                },
                peye: {
                    slide: 206,
                    wall: 384
                },
                akwin: {
                    slide: 210,
                    wall: 392
                },
                jayap: {
                    slide: 261,
                    wall: 197
                },
                kroostra: {
                    slide: 298,
                    wall: 224
                },
                seekalla: {
                    slide: 251,
                    wall: 188
                },
                shtung: {
                    slide: 335,
                    wall: 251
                },
                bokwin: {
                    slide: 280,
                    wall: 210
                }
            },
            ooltha: {
                korb: {
                    slide: 244,
                    wall: 456
                },
                kwath: {
                    slide: 214,
                    wall: 400
                },
                laka: {
                    slide: 184,
                    wall: 344
                },
                peye: {
                    slide: 176,
                    wall: 328
                },
                akwin: {
                    slide: 180,
                    wall: 336
                },
                jayap: {
                    slide: 217,
                    wall: 168
                },
                kroostra: {
                    slide: 252,
                    wall: 197
                },
                seekalla: {
                    slide: 207,
                    wall: 161
                },
                shtung: {
                    slide: 287,
                    wall: 224
                },
                bokwin: {
                    slide: 234,
                    wall: 182
                }
            },
            keewar: {
                korb: {
                    slide: 242,
                    wall: 242
                },
                kwath: {
                    slide: 214,
                    wall: 214
                },
                laka: {
                    slide: 186,
                    wall: 186
                },
                peye: {
                    slide: 178,
                    wall: 178
                },
                akwin: {
                    slide: 182,
                    wall: 182
                },
                jayap: {
                    slide: 234,
                    wall: 182
                },
                kroostra: {
                    slide: 270,
                    wall: 210
                },
                seekalla: {
                    slide: 225,
                    wall: 174
                },
                shtung: {
                    slide: 305,
                    wall: 238
                },
                bokwin: {
                    slide: 252,
                    wall: 197
                }
            },
            kripath: {
                korb: {
                    slide: 240,
                    wall: 448
                },
                kwath: {
                    slide: 210,
                    wall: 392
                },
                laka: {
                    slide: 180,
                    wall: 336
                },
                peye: {
                    slide: 171,
                    wall: 320
                },
                akwin: {
                    slide: 176,
                    wall: 328
                },
                jayap: {
                    slide: 220,
                    wall: 165
                },
                kroostra: {
                    slide: 257,
                    wall: 192
                },
                seekalla: {
                    slide: 210,
                    wall: 156
                },
                shtung: {
                    slide: 293,
                    wall: 220
                },
                bokwin: {
                    slide: 238,
                    wall: 179
                }
            },
            rabvee: {
                korb: {
                    slide: 384,
                    wall: 512
                },
                kwath: {
                    slide: 342,
                    wall: 456
                },
                laka: {
                    slide: 300,
                    wall: 400
                },
                peye: {
                    slide: 288,
                    wall: 384
                },
                akwin: {
                    slide: 294,
                    wall: 392
                },
                jayap: {
                    slide: 340,
                    wall: 340
                },
                kroostra: {
                    slide: 387,
                    wall: 387
                },
                seekalla: {
                    slide: 326,
                    wall: 326
                },
                shtung: {
                    slide: 435,
                    wall: 435
                },
                bokwin: {
                    slide: 363,
                    wall: 363
                }
            },
            sepfahn: {
                korb: {
                    slide: 244,
                    wall: 244
                },
                kwath: {
                    slide: 214,
                    wall: 214
                },
                laka: {
                    slide: 184,
                    wall: 184
                },
                peye: {
                    slide: 176,
                    wall: 176
                },
                akwin: {
                    slide: 180,
                    wall: 180
                },
                jayap: {
                    slide: 217,
                    wall: 168
                },
                kroostra: {
                    slide: 252,
                    wall: 197
                },
                seekalla: {
                    slide: 207,
                    wall: 161
                },
                shtung: {
                    slide: 287,
                    wall: 224
                },
                bokwin: {
                    slide: 234,
                    wall: 182
                }
            },
        },
        {
            balla: {
                korb: {
                    slide: 266,
                    wall: 372
                },
                kwath: {
                    slide: 236,
                    wall: 330
                },
                laka: {
                    slide: 206,
                    wall: 288
                },
                peye: {
                    slide: 197,
                    wall: 276
                },
                akwin: {
                    slide: 201,
                    wall: 282
                },
                jayap: {
                    slide: 243,
                    wall: 188
                },
                kroostra: {
                    slide: 278,
                    wall: 215
                },
                seekalla: {
                    slide: 232,
                    wall: 180
                },
                shtung: {
                    slide: 313,
                    wall: 244
                },
                bokwin: {
                    slide: 260,
                    wall: 202
                }
            },
            cyath: {
                korb: {
                    slide: 384,
                    wall: 512
                },
                kwath: {
                    slide: 342,
                    wall: 456
                },
                laka: {
                    slide: 300,
                    wall: 400
                },
                peye: {
                    slide: 288,
                    wall: 384
                },
                akwin: {
                    slide: 294,
                    wall: 392
                },
                jayap: {
                    slide: 261,
                    wall: 197
                },
                kroostra: {
                    slide: 298,
                    wall: 224
                },
                seekalla: {
                    slide: 251,
                    wall: 188
                },
                shtung: {
                    slide: 335,
                    wall: 251
                },
                bokwin: {
                    slide: 280,
                    wall: 210
                }
            },
            dehtat: {
                korb: {
                    slide: 266,
                    wall: 496
                },
                kwath: {
                    slide: 236,
                    wall: 440
                },
                laka: {
                    slide: 206,
                    wall: 384
                },
                peye: {
                    slide: 197,
                    wall: 368
                },
                akwin: {
                    slide: 201,
                    wall: 376
                },
                jayap: {
                    slide: 251,
                    wall: 188
                },
                kroostra: {
                    slide: 287,
                    wall: 215
                },
                seekalla: {
                    slide: 240,
                    wall: 180
                },
                shtung: {
                    slide: 325,
                    wall: 244
                },
                bokwin: {
                    slide: 270,
                    wall: 202
                }
            },
            dokrahm: {
                korb: {
                    slide: 248,
                    wall: 248
                },
                kwath: {
                    slide: 220,
                    wall: 220
                },
                laka: {
                    slide: 192,
                    wall: 192
                },
                peye: {
                    slide: 184,
                    wall: 184
                },
                akwin: {
                    slide: 188,
                    wall: 188
                },
                jayap: {
                    slide: 326,
                    wall: 326
                },
                kroostra: {
                    slide: 374,
                    wall: 374
                },
                seekalla: {
                    slide: 312,
                    wall: 312
                },
                shtung: {
                    slide: 421,
                    wall: 421
                },
                bokwin: {
                    slide: 350,
                    wall: 350
                }
            },
            kronsh: {
                korb: {
                    slide: 426,
                    wall: 568
                },
                kwath: {
                    slide: 384,
                    wall: 512
                },
                laka: {
                    slide: 342,
                    wall: 456
                },
                peye: {
                    slide: 330,
                    wall: 440
                },
                akwin: {
                    slide: 336,
                    wall: 448
                },
                jayap: {
                    slide: 298,
                    wall: 224
                },
                kroostra: {
                    slide: 335,
                    wall: 251
                },
                seekalla: {
                    slide: 287,
                    wall: 215
                },
                shtung: {
                    slide: 372,
                    wall: 279
                },
                bokwin: {
                    slide: 317,
                    wall: 238
                }
            },
            mewan: {
                korb: {
                    slide: 304,
                    wall: 568
                },
                kwath: {
                    slide: 274,
                    wall: 512
                },
                laka: {
                    slide: 244,
                    wall: 456
                },
                peye: {
                    slide: 236,
                    wall: 440
                },
                akwin: {
                    slide: 240,
                    wall: 448
                },
                jayap: {
                    slide: 298,
                    wall: 224
                },
                kroostra: {
                    slide: 335,
                    wall: 251
                },
                seekalla: {
                    slide: 287,
                    wall: 215
                },
                shtung: {
                    slide: 372,
                    wall: 279
                },
                bokwin: {
                    slide: 317,
                    wall: 238
                }
            },
            ooltha: {
                korb: {
                    slide: 274,
                    wall: 512
                },
                kwath: {
                    slide: 244,
                    wall: 456
                },
                laka: {
                    slide: 214,
                    wall: 400
                },
                peye: {
                    slide: 206,
                    wall: 384
                },
                akwin: {
                    slide: 210,
                    wall: 392
                },
                jayap: {
                    slide: 252,
                    wall: 197
                },
                kroostra: {
                    slide: 287,
                    wall: 224
                },
                seekalla: {
                    slide: 243,
                    wall: 188
                },
                shtung: {
                    slide: 323,
                    wall: 251
                },
                bokwin: {
                    slide: 270,
                    wall: 210
                }
            },
            keewar: {
                korb: {
                    slide: 270,
                    wall: 270
                },
                kwath: {
                    slide: 242,
                    wall: 242
                },
                laka: {
                    slide: 214,
                    wall: 214
                },
                peye: {
                    slide: 206,
                    wall: 206
                },
                akwin: {
                    slide: 210,
                    wall: 210
                },
                jayap: {
                    slide: 270,
                    wall: 210
                },
                kroostra: {
                    slide: 306,
                    wall: 238
                },
                seekalla: {
                    slide: 260,
                    wall: 202
                },
                shtung: {
                    slide: 341,
                    wall: 265
                },
                bokwin: {
                    slide: 287,
                    wall: 224
                }
            },
            kripath: {
                korb: {
                    slide: 270,
                    wall: 504
                },
                kwath: {
                    slide: 240,
                    wall: 448
                },
                laka: {
                    slide: 210,
                    wall: 392
                },
                peye: {
                    slide: 201,
                    wall: 376
                },
                akwin: {
                    slide: 206,
                    wall: 384
                },
                jayap: {
                    slide: 257,
                    wall: 192
                },
                kroostra: {
                    slide: 293,
                    wall: 220
                },
                seekalla: {
                    slide: 246,
                    wall: 185
                },
                shtung: {
                    slide: 330,
                    wall: 247
                },
                bokwin: {
                    slide: 274,
                    wall: 206
                }
            },
            rabvee: {
                korb: {
                    slide: 426,
                    wall: 568
                },
                kwath: {
                    slide: 384,
                    wall: 512
                },
                laka: {
                    slide: 342,
                    wall: 456
                },
                peye: {
                    slide: 330,
                    wall: 440
                },
                akwin: {
                    slide: 336,
                    wall: 448
                },
                jayap: {
                    slide: 387,
                    wall: 387
                },
                kroostra: {
                    slide: 435,
                    wall: 435
                },
                seekalla: {
                    slide: 374,
                    wall: 374
                },
                shtung: {
                    slide: 482,
                    wall: 482
                },
                bokwin: {
                    slide: 411,
                    wall: 411
                }
            },
            sepfahn: {
                korb: {
                    slide: 274,
                    wall: 274
                },
                kwath: {
                    slide: 244,
                    wall: 244
                },
                laka: {
                    slide: 214,
                    wall: 214
                },
                peye: {
                    slide: 206,
                    wall: 206
                },
                akwin: {
                    slide: 210,
                    wall: 210
                },
                jayap: {
                    slide: 252,
                    wall: 197
                },
                kroostra: {
                    slide: 287,
                    wall: 224
                },
                seekalla: {
                    slide: 243,
                    wall: 188
                },
                shtung: {
                    slide: 323,
                    wall: 251
                },
                bokwin: {
                    slide: 270,
                    wall: 210
                }
            },
        }
    ]
}

export default zaws;