const kitguns = {
    first: [
        {
            name: 'CATCHMOON',
            img: require('../assets/itemimages/catchmoon.png'),
            desc: 'Fires a wide-radius Magnetic energy projectile with a very short half-life.'
        },
        {
            name: 'GAZE',
            img: require('../assets/itemimages/gaze.png'),
            desc: 'A persistent cutting beam of pure energy.'
        },
        {
            name: 'RATTLEGUTS',
            img: require('../assets/itemimages/rattleguts.png'),
            desc: 'Let \'er rip, rapid-fire.'
        },
        {
            name: 'TOMBFINGER',
            img: require('../assets/itemimages/tombfinger.png'),
            desc: 'Reach out and blast someone. Lots of someones. One shot, big effect.'
        },
    ],
    second: [
        {
            name: 'HAYMAKER',
            img: require('../assets/itemimages/haymaker.png'),
            desc: 'Minimum rate-of-fire; minimum range for beam weapons. Maximum damage.'
        },
        {
            name: 'LOVETAP',
            img: require('../assets/itemimages/lovetap.png'),
            desc: 'Slower rate-of-fire; lower range for beam weapons. Greater damage.'
        },
        {
            name: 'RAMBLE',
            img: require('../assets/itemimages/ramble.png'),
            desc: 'Increased rate-of-fire; increased range for beam weapons. Reduced damage.'
        },
        {
            name: 'GIBBER',
            img: require('../assets/itemimages/gibber.png'),
            desc: 'Maximum rate-of-fire; maximum range for beam weapons. Minimum damage.'
        },
    ],
    third: [
        {
            name: 'SPLAT',
            img: require('../assets/itemimages/splat.png'),
            desc: 'High-capacity loader with maximum Critical Chance and minimum Status Chance.'
        },
        {
            name: 'KILLSTREAM',
            img: require('../assets/itemimages/killstream.png'),
            desc: 'A fast-loader with maximum Critical Chance and minimum Status Chance.'
        },
        {
            name: 'STITCH',
            img: require('../assets/itemimages/stitch.png'),
            desc: 'Maximum capacity loader with increased Critical Chance and lowered Status Chance.'
        },
        {
            name: 'BASHRACK',
            img: require('../assets/itemimages/bashrack.png'),
            desc: 'High-capacity loader with increased Critical Chance and lowered Status Chance.'
        },
        {
            name: 'SLAPNEEDLE',
            img: require('../assets/itemimages/slapneedle.png'),
            desc: 'A fast-loader with increased Critical Chance and lowered Status Chance.'
        },
        {
            name: 'ZIPNEEDLE',
            img: require('../assets/itemimages/zipneedle.png'),
            desc: 'Quickest load-speed with increased Critical Chance and lowered Status Chance.'
        },
        {
            name: 'BELLOWS',
            img: require('../assets/itemimages/bellows.png'),
            desc: 'Maximum-capacity ammo storage.'
        },
        {
            name: 'DEEPBREATH',
            img: require('../assets/itemimages/deepbreath.png'),
            desc: 'A high-capacity ammo reservoir.'
        },
        {
            name: 'SLAP',
            img: require('../assets/itemimages/slap.png'),
            desc: 'Fast loader with reduced Ammo Capacity.'
        },
        {
            name: 'ZIP',
            img: require('../assets/itemimages/zip.png'),
            desc: 'Quickest load-speed with lowest Ammo Capacity.'
        },
        {
            name: 'THUNDERDRUM',
            img: require('../assets/itemimages/thunderdrum.png'),
            desc: 'Maximum-capacity loader with increased Status Chance and lowered Critical Chance.'
        },
        {
            name: 'SPARKFIRE',
            img: require('../assets/itemimages/sparkfire.png'),
            desc: 'High-capacity loader with increased Status Chance and lowered Critical Chance.'
        },
        {
            name: 'SWIFTFIRE',
            img: require('../assets/itemimages/swiftfire.png'),
            desc: 'A fast-loader with increased Status Chance and lowered Critical Chance.'
        },
        {
            name: 'ZIPFIRE',
            img: require('../assets/itemimages/zipfire.png'),
            desc: 'Quickest load-speed with increased Status Chance and lowered Critical Chance.'
        },
        {
            name: 'RAMFLARE',
            img: require('../assets/itemimages/ramflare.png'),
            desc: 'High-capacity loader with maximum Status Chance and minimum Critical Chance.'
        },
        {
            name: 'FLUTTERFIRE',
            img: require('../assets/itemimages/flutterfire.png'),
            desc: 'A fast-loader with maximum Status Chance and minimum Critical Chance.'
        },
    ],
    gripCombo: {
        catchmoon: {
            type: [
                'PISTOL'
            ],
            accuracy: 5.9,
            noise: 'Alarming',
            trigger: 'Semi-Auto',
            falloffMin: 20,
            falloffMax: 40,
            punchThrough: 0,
            gibber: {
                fireRate: 3.17,
                damage: 160,
                split: [
                    {
                        type: 'Impact',
                        percent: 41 / 160
                    },
                    {
                        type: 'Heat',
                        percent: 119 / 160
                    },
                ]
              },
            haymaker: {
                fireRate: 1.17,
                damage: 460,
                split: [
                    {
                        type: 'Impact',
                        percent: 191 / 460
                    },
                    {
                        type: 'Heat',
                        percent: 269 / 460
                    },
                ]
            },
            lovetap: {
                fireRate: 1.5,
                damage: 358,
                split: [
                    {
                        type: 'Impact',
                        percent: 140 / 358
                    },
                    {
                        type: 'Heat',
                        percent: 218 / 358
                    },
                ]
            },
            ramble: {
                fireRate: 2.5,
                damage: 208,
                split: [
                    {
                        type: 'Impact',
                        percent: 65 / 208
                    },
                    {
                        type: 'Heat',
                        percent: 143 / 208
                    },
                ]
            },
        },
        gaze: {
            type: [
                'PISTOL',
                'BEAM'
            ],
            accuracy: 100,
            noise: 'Alarming',
            trigger: 'Held',
            punchThrough: 1,
            ammoCost: 0.5,
            gibber: {
                fireRate: 12,
                rangeLimit: 40,
                damage: 16,
                split: [
                    {
                        type: 'Puncture',
                        percent: 0.375
                    },
                    {
                        type: 'Radiation',
                        percent: 0.625
                    },
                ]
            },
            haymaker: {
                fireRate: 12,
                rangeLimit: 21,
                damage: 20,
                split: [
                    {
                        type: 'Puncture',
                        percent: 0.4
                    },
                    {
                        type: 'Radiation',
                        percent: 0.6
                    },
                ]
            },
            lovetap: {
                fireRate: 12,
                rangeLimit: 24,
                damage: 19,
                split: [
                    {
                        type: 'Puncture',
                        percent: 7.5 / 19
                    },
                    {
                        type: 'Radiation',
                        percent: 11.5 / 19
                    },
                ]
            },
            ramble: {
                fireRate: 12,
                rangeLimit: 37,
                damage: 17,
                split: [
                    {
                        type: 'Puncture',
                        percent: 6.5 / 17
                    },
                    {
                        type: 'Radiation',
                        percent: 10.5 / 17
                    },
                ]
            },
        },
        rattleguts: {
            type: [
                'PISTOL'
            ],
            accuracy: 20,
            noise: 'Alarming',
            trigger: 'Auto',
            punchThrough: 0,
            gibber: {
                fireRate: 11,
                damage: 22,
                split: [
                    {
                        type: 'Puncture',
                        percent: 7 / 22
                    },
                    {
                        type: 'Slash',
                        percent: 5 / 22
                    },
                    {
                        type: 'Radiation',
                        percent: 10 / 22
                    },
                ]
            },
            haymaker: {
                fireRate: 3.67,
                damage: 71,
                split: [
                    {
                        type: 'Impact',
                        percent: 11.5 / 71
                    },
                    {
                        type: 'Puncture',
                        percent: 19.5 / 71
                    },
                    {
                        type: 'Slash',
                        percent: 17.5 / 71
                    },
                    {
                        type: 'Radiation',
                        percent: 22.5 / 71
                    },
                ]
            },
            lovetap: {
                fireRate: 5.17,
                damage: 52,
                split: [
                    {
                        type: 'Impact',
                        percent: 6.75 / 52
                    },
                    {
                        type: 'Puncture',
                        percent: 14.75 / 52
                    },
                    {
                        type: 'Slash',
                        percent: 12.75 / 52
                    },
                    {
                        type: 'Radiation',
                        percent: 17.75 / 52
                    },
                ]
            },
            ramble: {
                fireRate: 8.83,
                damage: 27,
                split: [
                    {
                        type: 'Impact',
                        percent: 0.5 / 27
                    },
                    {
                        type: 'Puncture',
                        percent: 8.5 / 27
                    },
                    {
                        type: 'Slash',
                        percent: 6.5 / 27
                    },
                    {
                        type: 'Radiation',
                        percent: 11.5 / 27
                    },
                ]
            },
        },
        tombfinger: {
            type: [
                'PISTOL'
            ],
            accuracy: 50,
            noise: 'Alarming',
            trigger: 'Semi-Auto',
            punchThrough: 0,
            gibber: {
                fireRate: 4.5,
                damage: 36,
                split: [
                    {
                        type: 'Impact',
                        percent: 8 / 36
                    },
                    {
                        type: 'Puncture',
                        percent: 1 / 36
                    },
                    {
                        type: 'Radiation',
                        percent: 27 / 36
                    },
                ]
            },
            haymaker: {
                fireRate: 2.17,
                damage: 180,
                split: [
                    {
                        type: 'Impact',
                        percent: 32 / 180
                    },
                    {
                        type: 'Puncture',
                        percent: 25 / 180
                    },
                    {
                        type: 'Radiation',
                        percent: 123 / 180
                    },
                ]
            },
            lovetap: {
                fireRate: 2.5,
                damage: 132,
                split: [
                    {
                        type: 'Impact',
                        percent: 24 / 132
                    },
                    {
                        type: 'Puncture',
                        percent: 17 / 132
                    },
                    {
                        type: 'Radiation',
                        percent: 91 / 132
                    },
                ]
            },
            ramble: {
                fireRate: 3.67,
                damage: 60,
                split: [
                    {
                        type: 'Impact',
                        percent: 12 / 60
                    },
                    {
                        type: 'Puncture',
                        percent: 5 / 60
                    },
                    {
                        type: 'Radiation',
                        percent: 43 / 60
                    },
                ]
            },
        }
    },
    loaderCombo: {
        catchmoon: {
            bashrack: {
                magSize: 11,
                reload: 1.7,
                critChance: 0.28,
                critMult: 2.1,
                status: 0.17
            },
            bellows: {
                magSize: 13,
                reload: 2.1,
                critChance: 0.21,
                critMult: 2,
                status: 0.21
            },
            deepbreath: {
                magSize: 11,
                reload: 1.7,
                critChance: 0.21,
                critMult: 2,
                status: 0.21
            },
            flutterfire: {
                magSize: 7,
                reload: 1.3,
                critChance: 0.13,
                critMult: 1.7,
                status: 0.35
            },
            killstream: {
                magSize: 7,
                reload: 1.3,
                critChance: 0.35,
                critMult: 2.3,
                status: 0.13
            },
            ramflare: {
                magSize: 11,
                reload: 1.7,
                critChance: 0.13,
                critMult: 1.7,
                status: 0.35
            },
            slap: {
                magSize: 7,
                reload: 1.3,
                critChance: 0.21,
                critMult: 2,
                status: 0.21
            },
            slapneedle: {
                magSize: 7,
                reload: 1.3,
                critChance: 0.28,
                critMult: 2.1,
                status: 0.17
            },
            sparkfire: {
                magSize: 11,
                reload: 1.7,
                critChance: 0.17,
                critMult: 1.9,
                status: 0.28
            },
            splat: {
                magSize: 11,
                reload: 1.7,
                critChance: 0.35,
                critMult: 2.3,
                status: 0.13
            },
            stitch: {
                magSize: 13,
                reload: 2.1,
                critChance: 0.28,
                critMult: 2.1,
                status: 0.17
            },
            swiftfire: {
                magSize: 7,
                reload: 1.3,
                critChance: 0.17,
                critMult: 1.9,
                status: 0.28
            },
            thunderdrum: {
                magSize: 13,
                reload: 2.1,
                critChance: 0.17,
                critMult: 1.9,
                status: 0.28
            },
            zip: {
                magSize: 5,
                reload: 0.9,
                critChance: 0.21,
                critMult: 2,
                status: 0.21
            },
            zipfire: {
                magSize: 5,
                reload: 0.9,
                critChance: 0.17,
                critMult: 1.9,
                status: 0.28
            },
            zipneedle: {
                magSize: 5,
                reload: 0.9,
                critChance: 0.28,
                critMult: 2.1,
                status: 0.17
            }
        },
        gaze: {
            bashrack: {
                magSize: 43,
                reload: 1.7,
                critChance: 0.32,
                critMult: 2.1,
                status: 0.21
            },
            bellows: {
                magSize: 51,
                reload: 2.1,
                critChance: 0.25,
                critMult: 2,
                status: 0.25
            },
            deepbreath: {
                magSize: 43,
                reload: 1.7,
                critChance: 0.25,
                critMult: 2,
                status: 0.25
            },
            flutterfire: {
                magSize: 31,
                reload: 1.3,
                critChance: 0.17,
                critMult: 1.7,
                status: 0.39
            },
            killstream: {
                magSize: 31,
                reload: 1.3,
                critChance: 0.39,
                critMult: 2.3,
                status: 0.17
            },
            ramflare: {
                magSize: 43,
                reload: 1.7,
                critChance: 0.17,
                critMult: 1.7,
                status: 0.39
            },
            slap: {
                magSize: 31,
                reload: 1.3,
                critChance: 0.25,
                critMult: 2,
                status: 0.25
            },
            slapneedle: {
                magSize: 31,
                reload: 1.3,
                critChance: 0.32,
                critMult: 2.1,
                status: 0.21
            },
            sparkfire: {
                magSize: 43,
                reload: 1.7,
                critChance: 0.21,
                critMult: 1.9,
                status: 0.32
            },
            splat: {
                magSize: 43,
                reload: 1.7,
                critChance: 0.39,
                critMult: 2.3,
                status: 0.17
            },
            stitch: {
                magSize: 51,
                reload: 2.1,
                critChance: 0.32,
                critMult: 2.1,
                status: 0.21
            },
            swiftfire: {
                magSize: 31,
                reload: 1.3,
                critChance: 0.21,
                critMult: 1.9,
                status: 0.32
            },
            thunderdrum: {
                magSize: 51,
                reload: 2.1,
                critChance: 0.21,
                critMult: 1.9,
                status: 0.32
            },
            zip: {
                magSize: 23,
                reload: 0.9,
                critChance: 0.25,
                critMult: 2,
                status: 0.25
            },
            zipfire: {
                magSize: 23,
                reload: 0.9,
                critChance: 0.21,
                critMult: 1.9,
                status: 0.32
            },
            zipneedle: {
                magSize: 23,
                reload: 0.9,
                critChance: 0.32,
                critMult: 2.1,
                status: 0.21
            }
        },
        rattleguts: {
            bashrack: {
                magSize: 67,
                reload: 1.7,
                critChance: 0.26,
                critMult: 2.1,
                status: 0.15
            },
            bellows: {
                magSize: 83,
                reload: 2.1,
                critChance: 0.19,
                critMult: 2,
                status: 0.19
            },
            deepbreath: {
                magSize: 67,
                reload: 1.7,
                critChance: 0.19,
                critMult: 2,
                status: 0.19
            },
            flutterfire: {
                magSize: 45,
                reload: 1.3,
                critChance: 0.11,
                critMult: 1.7,
                status: 0.33
            },
            killstream: {
                magSize: 45,
                reload: 1.3,
                critChance: 0.33,
                critMult: 2.3,
                status: 0.11
            },
            ramflare: {
                magSize: 67,
                reload: 1.7,
                critChance: 0.11,
                critMult: 1.7,
                status: 0.33
            },
            slap: {
                magSize: 45,
                reload: 1.3,
                critChance: 0.19,
                critMult: 2,
                status: 0.19
            },
            slapneedle: {
                magSize: 45,
                reload: 1.3,
                critChance: 0.26,
                critMult: 2.1,
                status: 0.15
            },
            sparkfire: {
                magSize: 67,
                reload: 1.7,
                critChance: 0.15,
                critMult: 1.9,
                status: 0.26
            },
            splat: {
                magSize: 67,
                reload: 1.7,
                critChance: 0.33,
                critMult: 2.3,
                status: 0.11
            },
            stitch: {
                magSize: 83,
                reload: 2.1,
                critChance: 0.26,
                critMult: 2.1,
                status: 0.15
            },
            swiftfire: {
                magSize: 45,
                reload: 1.3,
                critChance: 0.15,
                critMult: 1.9,
                status: 0.26
            },
            thunderdrum: {
                magSize: 83,
                reload: 2.1,
                critChance: 0.15,
                critMult: 1.9,
                status: 0.26
            },
            zip: {
                magSize: 29,
                reload: 0.9,
                critChance: 0.19,
                critMult: 2,
                status: 0.19
            },
            zipfire: {
                magSize: 29,
                reload: 0.9,
                critChance: 0.15,
                critMult: 1.9,
                status: 0.26
            },
            zipneedle: {
                magSize: 29,
                reload: 0.9,
                critChance: 0.26,
                critMult: 2.1,
                status: 0.15
            }
        },
        tombfinger: {
            bashrack: {
                magSize: 23,
                reload: 1.7,
                critChance: 0.31,
                critMult: 2.1,
                status: 0.2
            },
            bellows: {
                magSize: 29,
                reload: 2.1,
                critChance: 0.24,
                critMult: 2,
                status: 0.24
            },
            deepbreath: {
                magSize: 23,
                reload: 1.7,
                critChance: 0.24,
                critMult: 2,
                status: 0.24
            },
            flutterfire: {
                magSize: 15,
                reload: 1.3,
                critChance: 0.16,
                critMult: 1.7,
                status: 0.38
            },
            killstream: {
                magSize: 15,
                reload: 1.3,
                critChance: 0.38,
                critMult: 2.3,
                status: 0.16
            },
            ramflare: {
                magSize: 23,
                reload: 1.7,
                critChance: 0.16,
                critMult: 1.7,
                status: 0.38
            },
            slap: {
                magSize: 15,
                reload: 1.3,
                critChance: 0.24,
                critMult: 2,
                status: 0.24
            },
            slapneedle: {
                magSize: 15,
                reload: 1.3,
                critChance: 0.31,
                critMult: 2.1,
                status: 0.2
            },
            sparkfire: {
                magSize: 23,
                reload: 1.7,
                critChance: 0.2,
                critMult: 1.9,
                status: 0.31
            },
            splat: {
                magSize: 23,
                reload: 1.7,
                critChance: 0.38,
                critMult: 2.3,
                status: 0.16
            },
            stitch: {
                magSize: 29,
                reload: 2.1,
                critChance: 0.31,
                critMult: 2.1,
                status: 0.2
            },
            swiftfire: {
                magSize: 15,
                reload: 1.3,
                critChance: 0.2,
                critMult: 1.9,
                status: 0.31
            },
            thunderdrum: {
                magSize: 29,
                reload: 2.1,
                critChance: 0.2,
                critMult: 1.9,
                status: 0.31
            },
            zip: {
                magSize: 9,
                reload: 0.9,
                critChance: 0.24,
                critMult: 2,
                status: 0.24
            },
            zipfire: {
                magSize: 9,
                reload: 0.9,
                critChance: 0.2,
                critMult: 1.9,
                status: 0.31
            },
            zipneedle: {
                magSize: 9,
                reload: 0.9,
                critChance: 0.31,
                critMult: 2.1,
                status: 0.2
            }
        },
    }
}

export default kitguns;