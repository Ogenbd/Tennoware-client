const abilities = {
    ash: [
        {
            name: 'Shuriken',
            img: require('../assets/warframes/shuriken.png'),
            details: {
                strength: [
                    {
                        name: 'Damage',
                        base: 500
                    }
                ],
                efficiency: [
                    {
                        name: 'Energy',
                        base: 25
                    }
                ],
                none: [
                    {
                        name: 'Shurikens',
                        base: 2
                    }
                ]
            },
        },
        {
            name: 'Smoke Screen',
            img: require('../assets/warframes/smokescreen.png'),
            details: {
                duration: [
                    {
                        name: 'Invisibility Duration',
                        base: 8
                    }
                ],
                range: [
                    {
                        name: 'Stagger Range',
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
        },
        {
            name: 'Teleport',
            img: require('../assets/warframes/teleport.png'),
            details: {
                range: [
                    {
                        name: 'Range',
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
        },
        {
            name: 'Blade Storm',
            img: require('../assets/warframes/bladestorm.png'),
            details: {
                strength: [
                    {
                        name: 'Damage',
                        base: 2000
                    }
                ],
                range: [
                    {
                        name: 'Range',
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
        },
    ]
}

const warframes = [
    {
        name: 'ASH',
        img: require('../assets/warframes/ash.png'),
        mastery: 0,
        polarities: ['madurai', 'madurai'],
        aura: 'madurai',
        exilus: '',
        health: 450,
        shield: 300,
        armor: 65,
        energy: 150,
        speed: 1.15,
        abilities: abilities.ash
    }
]


export default warframes;