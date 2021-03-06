import abilities from './archwingabilities';

const archwingStats = [
    {
        name: 'AMESHA',
        polarities: ['naramon', 'vazarin', 'madurai'],
        armor: 200,
        energy: 360,
        baseEnergy: 200,
        health: 1200,
        baseHealth: 400,
        shields: 600,
        baseShields: 200,
        speed: 1.1,
        abilities: abilities.amesha
    },
    {
        name: 'ELYTRON',
        polarities: ['madurai', 'madurai'],
        armor: 150,
        energy: 225,
        baseEnergy: 125,
        health: 1350,
        baseHealth: 450,
        shields: 1350,
        baseShields: 450,
        speed: 0.9,
        abilities: abilities.elytron
    },
    {
        name: 'ITZAL',
        polarities: ['madurai', 'vazarin', 'naramon'],
        armor: 50,
        energy: 360,
        baseEnergy: 200,
        health: 600,
        baseHealth: 200,
        shields: 600,
        baseShields: 200,
        speed: 1.2,
        abilities: abilities.itzal
    },
    {
        name: 'ODONATA',
        polarities: ['madurai', 'vazarin', 'naramon'],
        armor: 100,
        energy: 180,
        baseEnergy: 100,
        health: 900,
        baseHealth: 300,
        shields: 900,
        baseShields: 300,
        speed: 1,
        abilities: abilities.odonata
    },
    {
        name: 'ODONATA PRIME',
        polarities: ['madurai', 'vazarin', 'naramon', 'naramon'],
        armor: 150,
        energy: 180,
        baseEnergy: 100,
        health: 1200,
        baseHealth: 400,
        shields: 1200,
        baseShields: 400,
        speed: 1.05,
        abilities: abilities.odonata
    },
]

export default archwingStats;