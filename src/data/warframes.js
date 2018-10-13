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

const abilities = {
    ash: [
        {
            name: 'Shuriken',
            img: require('../assets/warframes/shuriken.png'),
            
        },
    ]
}

export default warframes;