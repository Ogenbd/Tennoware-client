import abilities from './abilities';

const warframeStats = [
    {
        name: 'ASH',
        polarities: ['madurai', 'madurai'],
        aura: 'madurai',
        exilus: undefined,
        armor: 65,
        energy: 150,
        baseEnergy: 100,
        health: 450,
        baseHealth: 150,
        shields: 300,
        baseShields: 100,
        speed: 1.15,
        abilities: abilities.ash
    },
    {
        name: 'ASH PRIME',
        polarities: ['naramon', 'madurai', 'madurai'],
        aura: 'madurai',
        exilus: undefined,
        armor: 150,
        energy: 150,
        baseEnergy: 100,
        health: 450,
        baseHealth: 150,
        shields: 375,
        baseShields: 125,
        speed: 1.2,
        abilities: abilities.ash
    },
    {
        name: 'ATLAS',
        polarities: ['naramon', 'vazarin', 'madurai'],
        aura: 'madurai',
        exilus: undefined,
        armor: 450,
        energy: 225,
        baseEnergy: 150,
        health: 300,
        baseHealth: 100,
        shields: 300,
        baseShields: 100,
        speed: 0.9,
        abilities: abilities.atlas
    },
    {
        name: 'BANSHEE',
        polarities: ['madurai', 'madurai'],
        aura: 'madurai',
        exilus: undefined,
        armor: 15,
        energy: 225,
        baseEnergy: 150,
        health: 300,
        baseHealth: 100,
        shields: 300,
        baseShields: 100,
        speed: 1.1,
        abilities: abilities.banshee
    },
    {
        name: 'BANSHEE PRIME',
        polarities: ['naramon', 'madurai', 'madurai'],
        aura: 'madurai',
        exilus: undefined,
        armor: 65,
        energy: 262,
        baseEnergy: 175,
        health: 300,
        baseHealth: 100,
        shields: 300,
        baseShields: 100,
        speed: 1.15,
        abilities: abilities.banshee
    },
    {
        name: 'BARUUK',
        polarities: ['vazarin', 'vazarin'],
        aura: 'naramon',
        exilus: 'naramon',
        armor: 150,
        energy: 300,
        baseEnergy: 200,
        health: 225,
        baseHealth: 75,
        shields: 300,
        baseShields: 100,
        speed: 1.2,
        abilities: abilities.baruuk
    },
    {
        name: 'CHROMA',
        polarities: ['naramon', 'madurai'],
        aura: 'madurai',
        exilus: undefined,
        armor: 350,
        energy: 225,
        baseEnergy: 150,
        health: 300,
        baseHealth: 100,
        shields: 300,
        baseShields: 100,
        speed: 1,
        abilities: abilities.chroma
    },
    {
        name: 'CHROMA PRIME',
        polarities: ['naramon', 'vazarin', 'madurai', 'naramon'],
        aura: 'madurai',
        exilus: undefined,
        armor: 425,
        energy: 300,
        baseEnergy: 200,
        health: 300,
        baseHealth: 100,
        shields: 300,
        baseShields: 100,
        speed: 1,
        abilities: abilities.chroma
    },
    {
        name: 'EMBER',
        polarities: ['naramon', 'naramon'],
        aura: 'madurai',
        exilus: undefined,
        armor: 100,
        energy: 225,
        baseEnergy: 150,
        health: 300,
        baseHealth: 100,
        shields: 300,
        baseShields: 100,
        speed: 1.1,
        abilities: abilities.ember
    },
    {
        name: 'EMBER PRIME',
        polarities: ['madurai', 'vazarin'],
        aura: 'madurai',
        exilus: undefined,
        armor: 125,
        energy: 225,
        baseEnergy: 150,
        health: 300,
        baseHealth: 100,
        shields: 375,
        baseShields: 125,
        speed: 1.1,
        abilities: abilities.ember
    },
    {
        name: 'EQUINOX',
        polarities: ['vazarin', 'madurai'],
        aura: 'naramon',
        exilus: undefined,
        armor: 100,
        energy: 225,
        baseEnergy: 150,
        health: 300,
        baseHealth: 100,
        shields: 300,
        baseShields: 100,
        speed: 1.15,
        abilities: abilities.equinox
    },
    {
        name: 'EQUINOX PRIME',
        polarities: ['vazarin', 'vazarin', 'madurai', 'madurai'],
        aura: 'naramon',
        exilus: undefined,
        armor: 120,
        energy: 248,
        baseEnergy: 165,
        health: 375,
        baseHealth: 125,
        shields: 300,
        baseShields: 100,
        speed: 1.15,
        abilities: abilities.equinox
    },
    {
        name: 'EXCALIBUR',
        polarities: ['vazarin', 'madurai'],
        aura: undefined,
        exilus: undefined,
        armor: 225,
        energy: 150,
        baseEnergy: 100,
        health: 300,
        baseHealth: 100,
        shields: 300,
        baseShields: 100,
        speed: 1,
        abilities: abilities.excalibur
    },
    {
        name: 'EXCALIBUR PRIME',
        polarities: ['vazarin', 'madurai', 'madurai'],
        aura: 'madurai',
        exilus: undefined,
        armor: 300,
        energy: 225,
        baseEnergy: 150,
        health: 300,
        baseHealth: 100,
        shields: 300,
        baseShields: 100,
        speed: 1,
        abilities: abilities.excalibur
    },
    {
        name: 'EXCALIBUR UMBRA',
        polarities: ['madurai', 'umbra', 'umbra', 'umbra'],
        aura: 'madurai',
        exilus: undefined,
        armor: 300,
        energy: 225,
        baseEnergy: 150,
        health: 300,
        baseHealth: 100,
        shields: 300,
        baseShields: 100,
        speed: 1,
        abilities: abilities.excalibur
    },
    {
        name: 'FROST',
        polarities: ['naramon', 'vazarin'],
        aura: 'vazarin',
        exilus: undefined,
        armor: 300,
        energy: 150,
        baseEnergy: 100,
        health: 300,
        baseHealth: 100,
        shields: 450,
        baseShields: 150,
        speed: 0.95,
        abilities: abilities.frost
    },
    {
        name: 'FROST PRIME',
        polarities: ['naramon', 'vazarin', 'vazarin'],
        aura: 'vazarin',
        exilus: undefined,
        armor: 300,
        energy: 150,
        baseEnergy: 100,
        health: 300,
        baseHealth: 100,
        shields: 525,
        baseShields: 175,
        speed: 0.95,
        abilities: abilities.frost
    },
    {
        name: 'GARA',
        polarities: ['madurai', 'madurai'],
        aura: 'vazarin',
        exilus: undefined,
        armor: 125,
        energy: 225,
        baseEnergy: 150,
        health: 300,
        baseHealth: 100,
        shields: 300,
        baseShields: 100,
        speed: 1.15,
        abilities: abilities.gara
    },
    {
        name: 'GARUDA',
        polarities: ['naramon', 'vazarin'],
        aura: 'madurai',
        exilus: undefined,
        armor: 300,
        energy: 270,
        baseEnergy: 120,
        health: 300,
        baseHealth: 100,
        shields: 300,
        baseShields: 120,
        speed: 1,
        abilities: abilities.garuda
    },
    {
        name: 'HARROW',
        polarities: ['vazarin', 'naramon'],
        aura: 'naramon',
        exilus: undefined,
        armor: 150,
        energy: 150,
        baseEnergy: 100,
        health: 300,
        baseHealth: 100,
        shields: 450,
        baseShields: 150,
        speed: 1,
        abilities: abilities.harrow
    },
    {
        name: 'HILDRYN',
        polarities: ['vazarin', 'vazarin'],
        aura: 'naramon',
        exilus: 'vazarin',
        armor: 300,
        baseEnergy: 0,
        health: 225,
        baseHealth: 75,
        shields: 1350,
        baseShields: 450,
        speed: 1,
        abilities: abilities.hildryn
    },
    {
        name: 'HYDROID',
        polarities: ['madurai', 'naramon'],
        aura: 'naramon',
        exilus: undefined,
        armor: 200,
        energy: 188,
        baseEnergy: 125,
        health: 300,
        baseHealth: 100,
        shields: 375,
        baseShields: 125,
        speed: 1.05,
        abilities: abilities.hydroid
    },
    {
        name: 'HYDROID PRIME',
        polarities: ['madurai', 'vazarin', 'naramon', 'naramon'],
        aura: 'naramon',
        exilus: undefined,
        armor: 250,
        energy: 225,
        baseEnergy: 150,
        health: 300,
        baseHealth: 100,
        shields: 525,
        baseShields: 175,
        speed: 1.05,
        abilities: abilities.hydroid
    },
    {
        name: 'INAROS',
        polarities: ['vazarin', 'vazarin'],
        aura: 'naramon',
        exilus: 'naramon',
        armor: 200,
        energy: 150,
        baseEnergy: 100,
        health: 2200,
        baseHealth: 550,
        shields: 0,
        baseShields: 0,
        speed: 1,
        abilities: abilities.inaros
    },
    {
        name: 'IVARA',
        polarities: ['vazarin', 'naramon'],
        aura: 'naramon',
        exilus: undefined,
        armor: 65,
        energy: 262,
        baseEnergy: 175,
        health: 225,
        baseHealth: 75,
        shields: 300,
        baseShields: 100,
        speed: 1.15,
        abilities: abilities.ivara
    },
    {
        name: 'KHORA',
        polarities: ['madurai', 'naramon'],
        aura: 'vazarin',
        exilus: 'naramon',
        armor: 275,
        energy: 188,
        baseEnergy: 125,
        health: 375,
        baseHealth: 125,
        shields: 300,
        baseShields: 100,
        speed: 1.05,
        abilities: abilities.khora
    },
    {
        name: 'LIMBO',
        polarities: ['madurai', 'madurai'],
        aura: 'naramon',
        exilus: undefined,
        armor: 65,
        energy: 225,
        baseEnergy: 150,
        health: 300,
        baseHealth: 100,
        shields: 225,
        baseShields: 75,
        speed: 1.15,
        abilities: abilities.limbo
    },
    {
        name: 'LIMBO PRIME',
        polarities: ['madurai', 'madurai', 'naramon', 'vazarin'],
        aura: 'naramon',
        exilus: undefined,
        armor: 85,
        energy: 262,
        baseEnergy: 175,
        health: 300,
        baseHealth: 100,
        shields: 300,
        baseShields: 100,
        speed: 1.15,
        abilities: abilities.limbo
    },
    {
        name: 'LOKI',
        polarities: ['vazarin', 'madurai'],
        aura: 'naramon',
        exilus: undefined,
        armor: 65,
        energy: 225,
        baseEnergy: 150,
        health: 225,
        baseHealth: 75,
        shields: 225,
        baseShields: 75,
        speed: 1.25,
        abilities: abilities.loki
    },
    {
        name: 'LOKI PRIME',
        polarities: ['vazarin', 'vazarin', 'madurai', 'naramon'],
        aura: 'naramon',
        exilus: undefined,
        armor: 65,
        energy: 262,
        baseEnergy: 175,
        health: 225,
        baseHealth: 75,
        shields: 225,
        baseShields: 75,
        speed: 1.25,
        abilities: abilities.loki
    },
    {
        name: 'MAG',
        polarities: ['naramon', 'naramon'],
        aura: 'madurai',
        exilus: undefined,
        armor: 65,
        energy: 188,
        baseEnergy: 125,
        health: 225,
        baseHealth: 75,
        shields: 450,
        baseShields: 150,
        speed: 1,
        abilities: abilities.mag
    },
    {
        name: 'MAG PRIME',
        polarities: ['naramon', 'naramon', 'madurai'],
        aura: 'madurai',
        exilus: undefined,
        armor: 65,
        energy: 252,
        baseEnergy: 175,
        health: 300,
        baseHealth: 100,
        shields: 450,
        baseShields: 150,
        speed: 1,
        abilities: abilities.mag
    },
    {
        name: 'MESA',
        polarities: ['naramon', 'naramon'],
        aura: 'madurai',
        exilus: undefined,
        armor: 65,
        energy: 150,
        baseEnergy: 100,
        health: 375,
        baseHealth: 125,
        shields: 225,
        baseShields: 75,
        speed: 1.1,
        abilities: abilities.mesa
    },
    {
        name: 'MESA PRIME',
        polarities: ['naramon', 'vazarin', 'naramon', 'madurai'],
        aura: 'madurai',
        exilus: undefined,
        armor: 85,
        energy: 188,
        baseEnergy: 125,
        health: 405,
        baseHealth: 135,
        shields: 225,
        baseShields: 75,
        speed: 1.1,
        abilities: abilities.mesa
    },
    {
        name: 'MIRAGE',
        polarities: ['vazarin', 'madurai'],
        aura: 'naramon',
        exilus: undefined,
        armor: 65,
        energy: 225,
        baseEnergy: 150,
        health: 240,
        baseHealth: 80,
        shields: 240,
        baseShields: 80,
        speed: 1.2,
        abilities: abilities.mirage
    },
    {
        name: 'MIRAGE PRIME',
        polarities: ['vazarin', 'vazarin', 'naramon', 'madurai'],
        aura: 'naramon',
        exilus: undefined,
        armor: 150,
        energy: 225,
        baseEnergy: 150,
        health: 240,
        baseHealth: 80,
        shields: 330,
        baseShields: 110,
        speed: 1.2,
        abilities: abilities.mirage
    },
    {
        name: 'NEKROS',
        polarities: ['vazarin', 'madurai'],
        aura: undefined,
        exilus: undefined,
        armor: 65,
        energy: 150,
        baseEnergy: 100,
        health: 300,
        baseHealth: 100,
        shields: 270,
        baseShields: 90,
        speed: 1.1,
        abilities: abilities.nekros
    },
    {
        name: 'NEKROS PRIME',
        polarities: ['madurai', 'vazarin', 'naramon'],
        aura: undefined,
        exilus: undefined,
        armor: 65,
        energy: 188,
        baseEnergy: 125,
        health: 300,
        baseHealth: 100,
        shields: 450,
        baseShields: 150,
        speed: 1.1,
        abilities: abilities.nekros
    },
    {
        name: 'NEZHA',
        polarities: ['vazarin', 'madurai'],
        aura: 'naramon',
        exilus: undefined,
        armor: 175,
        energy: 225,
        baseEnergy: 150,
        health: 375,
        baseHealth: 125,
        shields: 150,
        baseShields: 50,
        speed: 1.15,
        abilities: abilities.nezha
    },
    {
        name: 'NIDUS',
        polarities: ['madurai', 'vazarin'],
        aura: 'madurai',
        exilus: undefined,
        armor: 300,
        energy: 150,
        baseEnergy: 100,
        health: 450,
        baseHealth: 150,
        shields: 0,
        baseShields: 0,
        speed: 1,
        abilities: abilities.nidus
    },
    {
        name: 'NOVA',
        polarities: ['madurai', 'madurai'],
        aura: 'naramon',
        exilus: undefined,
        armor: 65,
        energy: 225,
        baseEnergy: 150,
        health: 300,
        baseHealth: 100,
        shields: 225,
        baseShields: 75,
        speed: 1.2,
        abilities: abilities.nova
    },
    {
        name: 'NOVA PRIME',
        polarities: ['madurai', 'madurai', 'madurai'],
        aura: 'naramon',
        exilus: undefined,
        armor: 65,
        energy: 262,
        baseEnergy: 175,
        health: 300,
        baseHealth: 100,
        shields: 300,
        baseShields: 100,
        speed: 1.2,
        abilities: abilities.nova
    },
    {
        name: 'NYX',
        polarities: ['madurai', 'naramon'],
        aura: 'naramon',
        exilus: undefined,
        armor: 15,
        energy: 225,
        baseEnergy: 150,
        health: 300,
        baseHealth: 100,
        shields: 300,
        baseShields: 100,
        speed: 1.1,
        abilities: abilities.nyx
    },
    {
        name: 'NYX PRIME',
        polarities: ['madurai', 'naramon', 'vazarin'],
        aura: 'naramon',
        exilus: undefined,
        armor: 50,
        energy: 225,
        baseEnergy: 150,
        health: 300,
        baseHealth: 100,
        shields: 375,
        baseShields: 125,
        speed: 1.12,
        abilities: abilities.nyx
    },
    {
        name: 'OBERON',
        polarities: ['madurai', 'madurai'],
        aura: 'madurai',
        exilus: undefined,
        armor: 150,
        energy: 225,
        baseEnergy: 150,
        health: 375,
        baseHealth: 125,
        shields: 300,
        baseShields: 100,
        speed: 1,
        abilities: abilities.oberon
    },
    {
        name: 'OBERON PRIME',
        polarities: ['naramon', 'naramon', 'madurai', 'madurai'],
        aura: 'madurai',
        exilus: undefined,
        armor: 225,
        energy: 262,
        baseEnergy: 175,
        health: 375,
        baseHealth: 125,
        shields: 300,
        baseShields: 100,
        speed: 1,
        abilities: abilities.oberon
    },
    {
        name: 'OCTAVIA',
        polarities: ['naramon', 'naramon'],
        aura: 'naramon',
        exilus: undefined,
        armor: 125,
        energy: 225,
        baseEnergy: 150,
        health: 300,
        baseHealth: 100,
        shields: 225,
        baseShields: 75,
        speed: 1.05,
        abilities: abilities.octavia
    },
    {
        name: 'REVENANT',
        polarities: ['madurai', 'vazarin'],
        aura: 'naramon',
        exilus: undefined,
        armor: 105,
        energy: 188,
        baseEnergy: 125,
        health: 300,
        baseHealth: 100,
        shields: 675,
        baseShields: 225,
        speed: 1,
        abilities: abilities.revenant
    },
    {
        name: 'RHINO',
        polarities: ['vazarin', 'vazarin'],
        aura: 'madurai',
        exilus: undefined,
        armor: 190,
        energy: 150,
        baseEnergy: 100,
        health: 300,
        baseHealth: 100,
        shields: 450,
        baseShields: 150,
        speed: 0.95,
        abilities: abilities.rhino
    },
    {
        name: 'RHINO PRIME',
        polarities: ['vazarin', 'vazarin', 'naramon'],
        aura: 'madurai',
        exilus: undefined,
        armor: 275,
        energy: 150,
        baseEnergy: 100,
        health: 300,
        baseHealth: 100,
        shields: 450,
        baseShields: 150,
        speed: 1,
        abilities: abilities.rhino
    },
    {
        name: 'SARYN',
        polarities: ['naramon', 'vazarin'],
        aura: 'vazarin',
        exilus: undefined,
        armor: 225,
        energy: 225,
        baseEnergy: 150,
        health: 375,
        baseHealth: 125,
        shields: 300,
        baseShields: 100,
        speed: 0.95,
        abilities: abilities.saryn
    },
    {
        name: 'SARYN PRIME',
        polarities: ['naramon', 'vazarin', 'madurai'],
        aura: 'vazarin',
        exilus: undefined,
        armor: 300,
        energy: 300,
        baseEnergy: 200,
        health: 375,
        baseHealth: 125,
        shields: 300,
        baseShields: 100,
        speed: 1,
        abilities: abilities.saryn
    },
    {
        name: 'TITANIA',
        polarities: ['madurai', 'vazarin'],
        aura: 'madurai',
        exilus: undefined,
        armor: 65,
        energy: 225,
        baseEnergy: 150,
        health: 300,
        baseHealth: 100,
        shields: 300,
        baseShields: 100,
        speed: 1,
        abilities: abilities.titania
    },
    {
        name: 'TRINITY',
        polarities: ['vazarin', 'vazarin'],
        aura: 'vazarin',
        exilus: undefined,
        armor: 15,
        energy: 225,
        baseEnergy: 150,
        health: 300,
        baseHealth: 100,
        shields: 300,
        baseShields: 100,
        speed: 1,
        abilities: abilities.trinity
    },
    {
        name: 'TRINITY PRIME',
        polarities: ['vazarin', 'vazarin', 'madurai', 'naramon'],
        aura: 'vazarin',
        exilus: undefined,
        armor: 15,
        energy: 225,
        baseEnergy: 150,
        health: 300,
        baseHealth: 100,
        shields: 450,
        baseShields: 150,
        speed: 1.1,
        abilities: abilities.trinity
    },
    {
        name: 'VALKYR',
        polarities: ['madurai', 'madurai'],
        aura: 'madurai',
        exilus: undefined,
        armor: 600,
        energy: 150,
        baseEnergy: 100,
        health: 300,
        baseHealth: 100,
        shields: 150,
        baseShields: 50,
        speed: 1.1,
        abilities: abilities.valkyr
    },
    {
        name: 'VALKYR PRIME',
        polarities: ['madurai', 'madurai', 'madurai'],
        aura: 'madurai',
        exilus: undefined,
        armor: 700,
        energy: 225,
        baseEnergy: 150,
        health: 300,
        baseHealth: 100,
        shields: 150,
        baseShields: 50,
        speed: 1.1,
        abilities: abilities.valkyr
    },
    {
        name: 'VAUBAN',
        polarities: ['naramon', 'madurai'],
        aura: 'naramon',
        exilus: undefined,
        armor: 50,
        energy: 225,
        baseEnergy: 150,
        health: 300,
        baseHealth: 100,
        shields: 225,
        baseShields: 75,
        speed: 1,
        abilities: abilities.vauban
    },
    {
        name: 'VAUBAN PRIME',
        polarities: ['naramon', 'madurai', 'vazarin'],
        aura: 'naramon',
        exilus: undefined,
        armor: 100,
        energy: 225,
        baseEnergy: 150,
        health: 300,
        baseHealth: 100,
        shields: 300,
        baseShields: 100,
        speed: 1,
        abilities: abilities.vauban
    },
    {
        name: 'VOLT',
        polarities: ['naramon', 'madurai'],
        aura: 'madurai',
        exilus: undefined,
        armor: 15,
        energy: 150,
        baseEnergy: 100,
        health: 300,
        baseHealth: 100,
        shields: 450,
        baseShields: 150,
        speed: 1,
        abilities: abilities.volt
    },
    {
        name: 'VOLT PRIME',
        polarities: ['naramon', 'madurai', 'madurai'],
        aura: 'madurai',
        exilus: undefined,
        armor: 100,
        energy: 300,
        baseEnergy: 200,
        health: 300,
        baseHealth: 100,
        shields: 450,
        baseShields: 150,
        speed: 1,
        abilities: abilities.volt
    },
    {
        name: 'WUKONG',
        polarities: ['naramon', 'vazarin'],
        aura: 'madurai',
        exilus: undefined,
        armor: 225,
        energy: 150,
        baseEnergy: 100,
        health: 300,
        baseHealth: 100,
        shields: 375,
        baseShields: 125,
        speed: 0.95,
        abilities: abilities.wukong
    },
    {
        name: 'ZEPHYR',
        polarities: ['madurai', 'naramon'],
        aura: 'vazarin',
        exilus: undefined,
        armor: 15,
        energy: 150,
        baseEnergy: 100,
        health: 450,
        baseHealth: 150,
        shields: 450,
        baseShields: 150,
        speed: 1.15,
        abilities: abilities.zephyr
    },
    {
        name: 'ZEPHYR PRIME',
        polarities: ['madurai', 'madurai', 'vazarin', 'naramon'],
        aura: 'vazarin',
        exilus: undefined,
        armor: 75,
        energy: 225,
        baseEnergy: 150,
        health: 450,
        baseHealth: 150,
        shields: 450,
        baseShields: 150,
        speed: 1.2,
        abilities: abilities.zephyr
    },
    // {
    //     name: '',
    //     polarities: [],
    //     aura: '',
    //     exilus: undefined,
    //     armor: ,
    //     energy: ,
    //     baseEnergy: ,
    //     health: ,
    //     baseHealth: ,
    //     shields: ,
    //     baseShields: ,
    //     speed: ,
    //     abilities: abilities.
    // },
]


export default warframeStats;