const primaryWeaponList = [
  {
    name: 'AMPREX',
    img: require('../assets/itemimages/amprex.png')
  },
  {
    name: 'ARCA PLASMOR',
    img: require('../assets/itemimages/arca-plasmor.png')
  },
  {
    name: 'ARGONAK',
    img: require('../assets/itemimages/argonak.png')
  },
  {
    name: 'ARTEMIS BOW',
    img: require('../assets/itemimages/artemis-bow.png')
  },
  {
    name: 'ASTILLA',
    img: require('../assets/itemimages/astilla.png')
  },
  {
    name: 'ATTICA',
    img: require('../assets/itemimages/attica.png')
  },
  {
    name: 'BATTACOR',
    img: require('../assets/itemimages/battacor.png')
  },
  {
    name: 'BAZA',
    img: require('../assets/itemimages/baza.png')
  },
  {
    name: 'BOAR',
    img: require('../assets/itemimages/boar.png')
  },
  {
    name: 'BOAR PRIME',
    img: require('../assets/itemimages/boar-prime.png')
  },
  {
    name: 'BOLTOR',
    img: require('../assets/itemimages/boltor.png')
  },
  {
    name: 'BOLTOR PRIME',
    img: require('../assets/itemimages/boltor-prime.png')
  },
  {
    name: 'BRATON',
    img: require('../assets/itemimages/braton.png')
  },
  {
    name: 'BRATON PRIME',
    img: require('../assets/itemimages/braton-prime.png')
  },
  {
    name: 'BRATON VANDAL',
    img: require('../assets/itemimages/braton-vandal.png')
  },
  {
    name: 'BURSTON',
    img: require('../assets/itemimages/burston.png')
  },
  {
    name: 'BURSTON PRIME',
    img: require('../assets/itemimages/burston-prime.png')
  },
  {
    name: 'BUZLOK',
    img: require('../assets/itemimages/buzlok.png')
  },
  {
    name: 'CERNOS',
    img: require('../assets/itemimages/cernos.png')
  },
  {
    name: 'CERNOS PRIME',
    img: require('../assets/itemimages/cernos-prime.png')
  },
  {
    name: 'CONVECTRIX',
    img: require('../assets/itemimages/convectrix.png')
  },
  {
    name: 'CORINTH',
    img: require('../assets/itemimages/corinth.png')
  },
  {
    name: 'DAIKYU',
    img: require('../assets/itemimages/daikyu.png')
  },
  {
    name: 'DERA',
    img: require('../assets/itemimages/dera.png')
  },
  {
    name: 'DERA VANDAL',
    img: require('../assets/itemimages/dera-vandal.png')
  },
  {
    name: 'DEX SYBARIS',
    img: require('../assets/itemimages/dex-sybaris.png')
  },
  {
    name: 'DRAKGOON',
    img: require('../assets/itemimages/drakgoon.png')
  },
  {
    name: 'DREAD',
    img: require('../assets/itemimages/dread.png')
  },
  {
    name: 'FERROX',
    img: require('../assets/itemimages/ferrox.png')
  },
  {
    name: 'FLUX RIFLE',
    img: require('../assets/itemimages/flux-rifle.png')
  },
  {
    name: 'GLAXION',
    img: require('../assets/itemimages/glaxion.png')
  },
  {
    name: 'GORGON',
    img: require('../assets/itemimages/gorgon.png')
  },
  {
    name: 'GORGON WRAITH',
    img: require('../assets/itemimages/gorgon-wraith.png')
  },
  {
    name: 'GRAKATA',
    img: require('../assets/itemimages/grakata.png')
  },
  {
    name: 'GRINLOK',
    img: require('../assets/itemimages/grinlok.png')
  },
  {
    name: 'HARPAK',
    img: require('../assets/itemimages/harpak.png')
  },
  {
    name: 'HEK',
    img: require('../assets/itemimages/hek.png')
  },
  {
    name: 'HEMA',
    img: require('../assets/itemimages/hema.png')
  },
  {
    name: 'HIND',
    img: require('../assets/itemimages/hind.png')
  },
  {
    name: 'IGNIS',
    img: require('../assets/itemimages/ignis.png')
  },
  {
    name: 'IGNIS WRAITH',
    img: require('../assets/itemimages/ignis-wraith.png')
  },
  {
    name: 'JAVLOK',
    img: require('../assets/itemimages/javlok.png')
  },
  {
    name: 'KARAK',
    img: require('../assets/itemimages/karak.png')
  },
  {
    name: 'KARAK WRAITH',
    img: require('../assets/itemimages/karak-wraith.png')
  },
  {
    name: 'KOHM',
    img: require('../assets/itemimages/kohm.png')
  },
  {
    name: 'LANKA',
    img: require('../assets/itemimages/lanka.png')
  },
  {
    name: 'LATRON',
    img: require('../assets/itemimages/latron.png')
  },
  {
    name: 'LATRON PRIME',
    img: require('../assets/itemimages/latron-prime.png')
  },
  {
    name: 'LATRON WRAITH',
    img: require('../assets/itemimages/latron-wraith.png')
  },
  {
    name: 'LENZ',
    img: require('../assets/itemimages/lenz.png')
  },
  {
    name: 'MITER',
    img: require('../assets/itemimages/miter.png')
  },
  {
    name: 'MK1-BRATON',
    img: require('../assets/itemimages/mk1-braton.png')
  },
  {
    name: 'MK1-PARIS',
    img: require('../assets/itemimages/mk1-paris.png')
  },
  {
    name: 'MK1-STRUN',
    img: require('../assets/itemimages/mk1-strun.png')
  },
  {
    name: 'MUTALIST CERNOS',
    img: require('../assets/itemimages/mutalist-cernos.png')
  },
  {
    name: 'MUTALIST QUANTA',
    img: require('../assets/itemimages/mutalist-quanta.png')
  },
  {
    name: 'NAGANTAKA',
    img: require('../assets/itemimages/nagantaka.png')
  },
  {
    name: 'OGRIS',
    img: require('../assets/itemimages/ogris.png')
  },
  {
    name: 'OPTICOR',
    img: require('../assets/itemimages/opticor.png')
  },
  {
    name: 'PANTHERA',
    img: require('../assets/itemimages/panthera.png')
  },
  {
    name: 'PARACYST',
    img: require('../assets/itemimages/paracyst.png')
  },
  {
    name: 'PARIS',
    img: require('../assets/itemimages/paris.png')
  },
  {
    name: 'PARIS PRIME',
    img: require('../assets/itemimages/paris-prime.png')
  },
  {
    name: 'PENTA',
    img: require('../assets/itemimages/penta.png')
  },
  {
    name: 'PHAGE',
    img: require('../assets/itemimages/phage.png')
  },
  {
    name: 'PHANTASMA',
    img: require('../assets/itemimages/phantasma.png')
  },
  {
    name: 'PRISMA GORGON',
    img: require('../assets/itemimages/prisma-gorgon.png')
  },
  {
    name: 'PRISMA GRAKATA',
    img: require('../assets/itemimages/prisma-grakata.png')
  },
  {
    name: 'PRISMA TETRA',
    img: require('../assets/itemimages/prisma-tetra.png')
  },
  {
    name: 'QUANTA',
    img: require('../assets/itemimages/quanta.png')
  },
  {
    name: 'QUANTA VANDAL',
    img: require('../assets/itemimages/quanta-vandal.png')
  },
  {
    name: 'QUARTAKK',
    img: require('../assets/itemimages/quartakk.png')
  },
  {
    name: 'RAKTA CERNOS',
    img: require('../assets/itemimages/rakta-cernos.png')
  },
  {
    name: 'RUBICO',
    img: require('../assets/itemimages/rubico.png')
  },
  {
    name: 'RUBICO PRIME',
    img: require('../assets/itemimages/rubico-prime.png')
  },
  {
    name: 'SANCTI TIGRIS',
    img: require('../assets/itemimages/sancti-tigris.png')
  },
  {
    name: 'SCOURGE',
    img: require('../assets/itemimages/scourge.png')
  },
  {
    name: 'SECURA PENTA',
    img: require('../assets/itemimages/secura-penta.png')
  },
  {
    name: 'SIMULOR',
    img: require('../assets/itemimages/simulor.png')
  },
  {
    name: 'SNIPETRON',
    img: require('../assets/itemimages/snipetron.png')
  },
  {
    name: 'SNIPETRON VANDAL',
    img: require('../assets/itemimages/snipetron-vandal.png')
  },
  {
    name: 'SOBEK',
    img: require('../assets/itemimages/sobek.png')
  },
  {
    name: 'SOMA',
    img: require('../assets/itemimages/soma.png')
  },
  {
    name: 'SOMA PRIME',
    img: require('../assets/itemimages/soma-prime.png')
  },
  {
    name: 'STRADAVAR',
    img: require('../assets/itemimages/stradavar.png')
  },
  {
    name: 'STRUN',
    img: require('../assets/itemimages/strun.png')
  },
  {
    name: 'STRUN WRAITH',
    img: require('../assets/itemimages/strun-wraith.png')
  },
  {
    name: 'SUPRA',
    img: require('../assets/itemimages/supra.png')
  },
  {
    name: 'SUPRA VANDAL',
    img: require('../assets/itemimages/supra-vandal.png')
  },
  {
    name: 'SYBARIS',
    img: require('../assets/itemimages/sybaris.png')
  },
  {
    name: 'SYBARIS PRIME',
    img: require('../assets/itemimages/sybaris-prime.png')
  },
  {
    name: 'SYNAPSE',
    img: require('../assets/itemimages/synapse.png')
  },
  {
    name: 'SYNOID SIMULOR',
    img: require('../assets/itemimages/synoid-simulor.png')
  },
  {
    name: 'TELOS BOLTOR',
    img: require('../assets/itemimages/telos-boltor.png')
  },
  {
    name: 'TENORA',
    img: require('../assets/itemimages/tenora.png')
  },
  {
    name: 'TETRA',
    img: require('../assets/itemimages/tetra.png')
  },
  {
    name: 'TIBERON',
    img: require('../assets/itemimages/tiberon.png')
  },
  {
    name: 'TIBERON PRIME',
    img: require('../assets/itemimages/tiberon-prime.png')
  },
  {
    name: 'TIGRIS',
    img: require('../assets/itemimages/tigris.png')
  },
  {
    name: 'TIGRIS PRIME',
    img: require('../assets/itemimages/tigris-prime.png')
  },
  {
    name: 'TONKOR',
    img: require('../assets/itemimages/tonkor.png')
  },
  {
    name: 'TORID',
    img: require('../assets/itemimages/torid.png')
  },
  {
    name: 'VAYKOR HEK',
    img: require('../assets/itemimages/vaykor-hek.png')
  },
  {
    name: 'VECTIS',
    img: require('../assets/itemimages/vectis.png')
  },
  {
    name: 'VECTIS PRIME',
    img: require('../assets/itemimages/vectis-prime.png')
  },
  {
    name: 'VELDT',
    img: require('../assets/itemimages/veldt.png')
  },
  {
    name: 'VULKAR',
    img: require('../assets/itemimages/vulkar.png')
  },
  {
    name: 'VULKAR WRAITH',
    img: require('../assets/itemimages/vulkar-wraith.png')
  },
  {
    name: 'ZARR',
    img: require('../assets/itemimages/zarr.png')
  },
  {
    name: 'ZENITH',
    img: require('../assets/itemimages/zenith.png')
  },
  {
    name: 'ZHUGE',
    img: require('../assets/itemimages/zhuge.png')
  }
]

export default primaryWeaponList;