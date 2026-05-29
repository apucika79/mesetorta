// MESETORTA próbaadatok - adatbázis nélkül, későbbi fejlesztéshez.
//
// Egységes adatmodell kapcsolatai:
// - partnerek: cukrászdák és tortaműhelyek stabil partner_id azonosítóval.
//   A partner a varos_id és korzet_id mezőkön keresztül kapcsolódik a városokhoz és körzetekhez.
// - tortak: minden torta stabil torta_id azonosítót kap. A torta partnerhez kizárólag
//   partner_id alapján kapcsolódik, emellett varos_id, korzet_id és kategoria_id jelöli a helyet és típust.
// - varosok: önálló törzsadatok stabil varos_id azonosítóval; egy városhoz több körzet tartozhat.
// - korzetek: önálló törzsadatok stabil korzet_id azonosítóval; minden körzet pontosan egy varos_id-hez tartozik.
// - kategoriak: tortakategória törzsadatok stabil kategoria_id azonosítóval; a torták kategoria_id alapján hivatkoznak rájuk.
//
// A név alapú megjelenítő mezők (varos, korzet, kategoria, cukraszda) átmenetileg megmaradnak,
// hogy a jelenlegi statikus oldalak és későbbi sablonok megjelenése változatlanul működjön.

const varosok = [
  {
    id: 'varos_001',
    nev: 'Budapest',
    oldal: 'varosok/budapest.html'
  },
  {
    id: 'varos_002',
    nev: 'Debrecen',
    oldal: 'varosok/debrecen.html'
  },
  {
    id: 'varos_003',
    nev: 'Szeged',
    oldal: 'varosok/szeged.html'
  },
  {
    id: 'varos_004',
    nev: 'Pécs',
    oldal: 'varosok/pecs.html'
  },
  {
    id: 'varos_005',
    nev: 'Győr',
    oldal: 'varosok/gyor.html'
  },
  {
    id: 'varos_006',
    nev: 'Miskolc',
    oldal: null
  }
];

const korzetek = [
  {
    id: 'korzet_001',
    varos_id: 'varos_001',
    nev: 'XIII. kerület'
  },
  {
    id: 'korzet_002',
    varos_id: 'varos_001',
    nev: 'XI. kerület'
  },
  {
    id: 'korzet_003',
    varos_id: 'varos_002',
    nev: 'Belváros'
  },
  {
    id: 'korzet_004',
    varos_id: 'varos_002',
    nev: 'Nagyerdő'
  },
  {
    id: 'korzet_005',
    varos_id: 'varos_003',
    nev: 'Újszeged'
  },
  {
    id: 'korzet_006',
    varos_id: 'varos_003',
    nev: 'Belváros'
  },
  {
    id: 'korzet_007',
    varos_id: 'varos_004',
    nev: 'Tettye'
  },
  {
    id: 'korzet_008',
    varos_id: 'varos_004',
    nev: 'Belváros'
  },
  {
    id: 'korzet_009',
    varos_id: 'varos_005',
    nev: 'Nádorváros'
  },
  {
    id: 'korzet_010',
    varos_id: 'varos_005',
    nev: 'Belváros'
  },
  {
    id: 'korzet_011',
    varos_id: 'varos_006',
    nev: 'Avas'
  },
  {
    id: 'korzet_012',
    varos_id: 'varos_006',
    nev: 'Belváros'
  }
];

const kategoriak = [
  {
    id: 'kategoria_001',
    nev: 'Gyümölcsös torta'
  },
  {
    id: 'kategoria_002',
    nev: 'Csokoládétorta'
  },
  {
    id: 'kategoria_003',
    nev: 'Tejszínes torta'
  },
  {
    id: 'kategoria_004',
    nev: 'Sajttorta'
  },
  {
    id: 'kategoria_005',
    nev: 'Klasszikus torta'
  },
  {
    id: 'kategoria_006',
    nev: 'Gyerektorta'
  },
  {
    id: 'kategoria_007',
    nev: 'Esküvői torta'
  },
  {
    id: 'kategoria_008',
    nev: 'Mentes torta'
  },
  {
    id: 'kategoria_009',
    nev: 'Ünnepi torta'
  },
  {
    id: 'kategoria_010',
    nev: 'Formatorta'
  }
];

const partnerek = [
  {
    id: 'partner_001',
    nev: 'MeseHab Cukrászda',
    kep: 'kepek/torta-placeholder.jpg',
    varos_id: 'varos_001',
    korzet_id: 'korzet_001',
    varos: 'Budapest',
    kerulet: 'XIII. kerület',
    korzet: 'XIII. kerület',
    tipus: 'Cukrászda',
    kiemelt: true,
    cim: 'Mese utca 12.',
    leiras: 'Klasszikus és mesés születésnapi torták készítése rövid határidővel.',
    oldal: 'partnerek/mesehab-cukraszda.html'
  },
  {
    id: 'partner_002',
    nev: 'Tündérsüti Műhely',
    kep: 'kepek/torta-placeholder.jpg',
    varos_id: 'varos_002',
    korzet_id: 'korzet_003',
    varos: 'Debrecen',
    kerulet: 'Belváros',
    korzet: 'Belváros',
    tipus: 'Tortaműhely',
    kiemelt: true,
    cim: 'Tündér tér 4.',
    leiras: 'Rendelhető alkalmi torták, mentes sütemények és családi ünnepi desszertek.',
    oldal: 'partnerek/tundersuti-muhely.html'
  },
  {
    id: 'partner_003',
    nev: 'Cukorcsillag Tortaműhely',
    kep: 'kepek/torta-placeholder.jpg',
    varos_id: 'varos_003',
    korzet_id: 'korzet_005',
    varos: 'Szeged',
    kerulet: 'Újszeged',
    korzet: 'Újszeged',
    tipus: 'Tortaműhely',
    kiemelt: true,
    cim: 'Csillag sétány 8.',
    leiras: 'Egyedi díszítésű torták gyerekzsúrokra, céges eseményekre és esküvőkre.',
    oldal: 'partnerek/cukorcsillag-tortamuhely.html'
  },
  {
    id: 'partner_004',
    nev: 'Édes Mesék Cukrászda',
    kep: 'kepek/torta-placeholder.jpg',
    varos_id: 'varos_004',
    korzet_id: 'korzet_007',
    varos: 'Pécs',
    kerulet: 'Tettye',
    korzet: 'Tettye',
    tipus: 'Cukrászda',
    kiemelt: false,
    cim: 'Édes köz 3.',
    leiras: 'Házi ízvilágú torták, szezonális krémek és hagyományos cukrászsütemények.',
    oldal: null
  }
];

const tortak = [
  {
    id: 'torta_001',
    korabbi_id: 'keszleten-001',
    nev: 'Erdei gyümölcsös álomtorta',
    kep: 'kepek/torta-placeholder.jpg',
    ar: '12 900 Ft',
    partner_id: 'partner_001',
    varos_id: 'varos_001',
    korzet_id: 'korzet_001',
    kategoria_id: 'kategoria_001',
    varos: 'Budapest',
    kerulet: 'XIII. kerület',
    korzet: 'XIII. kerület',
    cukraszda: 'MeseHab Cukrászda',
    allapot: 'keszleten',
    hatarido: 'Ma 16:00-ig átvehető',
    atveteli_informacio: 'Ma 16:00-ig',
    kategoria: 'Gyümölcsös torta',
    szeletszam: 12,
    oldal: 'tortak/erdei-gyumolcsos-alomtorta.html'
  },
  {
    id: 'torta_002',
    korabbi_id: 'keszleten-002',
    nev: 'Csokoládés mogyoró torta',
    kep: 'kepek/torta-placeholder.jpg',
    ar: '14 500 Ft',
    partner_id: 'partner_002',
    varos_id: 'varos_002',
    korzet_id: 'korzet_003',
    kategoria_id: 'kategoria_002',
    varos: 'Debrecen',
    kerulet: 'Belváros',
    korzet: 'Belváros',
    cukraszda: 'Tündérsüti Műhely',
    allapot: 'keszleten',
    hatarido: 'Ma 18:00-ig átvehető',
    atveteli_informacio: 'Ma 18:00-ig',
    kategoria: 'Csokoládétorta',
    szeletszam: 16,
    oldal: 'tortak/csokolades-mogyoro-torta.html'
  },
  {
    id: 'torta_003',
    korabbi_id: 'keszleten-003',
    nev: 'Vaníliás eper torta',
    kep: 'kepek/torta-placeholder.jpg',
    ar: '11 800 Ft',
    partner_id: 'partner_003',
    varos_id: 'varos_003',
    korzet_id: 'korzet_005',
    kategoria_id: 'kategoria_003',
    varos: 'Szeged',
    kerulet: 'Újszeged',
    korzet: 'Újszeged',
    cukraszda: 'Cukorcsillag Tortaműhely',
    allapot: 'keszleten',
    hatarido: 'Ma 17:30-ig átvehető',
    atveteli_informacio: 'Ma 17:30-ig',
    kategoria: 'Tejszínes torta',
    szeletszam: 10,
    oldal: null
  },
  {
    id: 'torta_004',
    korabbi_id: 'keszleten-004',
    nev: 'Karamellás sajttorta',
    kep: 'kepek/torta-placeholder.jpg',
    ar: '13 200 Ft',
    partner_id: 'partner_004',
    varos_id: 'varos_004',
    korzet_id: 'korzet_007',
    kategoria_id: 'kategoria_004',
    varos: 'Pécs',
    kerulet: 'Tettye',
    korzet: 'Tettye',
    cukraszda: 'Édes Mesék Cukrászda',
    allapot: 'keszleten',
    hatarido: 'Ma 15:00-ig átvehető',
    atveteli_informacio: 'Ma 15:00-ig',
    kategoria: 'Sajttorta',
    szeletszam: 12,
    oldal: null
  },
  {
    id: 'torta_005',
    korabbi_id: 'keszleten-005',
    nev: 'Dobos torta szeletelt díszítéssel',
    kep: 'kepek/torta-placeholder.jpg',
    ar: '15 900 Ft',
    partner_id: 'partner_001',
    varos_id: 'varos_005',
    korzet_id: 'korzet_009',
    kategoria_id: 'kategoria_005',
    varos: 'Győr',
    kerulet: 'Nádorváros',
    korzet: 'Nádorváros',
    cukraszda: 'MeseHab Cukrászda',
    allapot: 'keszleten',
    hatarido: 'Ma 19:00-ig átvehető',
    atveteli_informacio: 'Ma 19:00-ig',
    kategoria: 'Klasszikus torta',
    szeletszam: 16,
    oldal: null
  },
  {
    id: 'torta_006',
    korabbi_id: 'keszleten-006',
    nev: 'Citromos habkönnyű torta',
    kep: 'kepek/torta-placeholder.jpg',
    ar: '10 900 Ft',
    partner_id: 'partner_002',
    varos_id: 'varos_006',
    korzet_id: 'korzet_011',
    kategoria_id: 'kategoria_001',
    varos: 'Miskolc',
    kerulet: 'Avas',
    korzet: 'Avas',
    cukraszda: 'Tündérsüti Műhely',
    allapot: 'keszleten',
    hatarido: 'Ma 16:30-ig átvehető',
    atveteli_informacio: 'Ma 16:30-ig',
    kategoria: 'Gyümölcsös torta',
    szeletszam: 8,
    oldal: null
  },
  {
    id: 'torta_007',
    korabbi_id: 'rendelheto-001',
    nev: 'Unikornis szülinapi torta',
    kep: 'kepek/torta-placeholder.jpg',
    ar: '18 900 Ft-tól',
    partner_id: 'partner_001',
    varos_id: 'varos_001',
    korzet_id: 'korzet_002',
    kategoria_id: 'kategoria_006',
    varos: 'Budapest',
    kerulet: 'XI. kerület',
    korzet: 'XI. kerület',
    cukraszda: 'MeseHab Cukrászda',
    allapot: 'rendelheto',
    hatarido: 'Rendelési határidő: 3 nap',
    atveteli_informacio: 'Rendelhető 3 nap alatt',
    kategoria: 'Gyerektorta',
    szeletszam: 16,
    oldal: 'tortak/unikornis-szulinapi-torta.html'
  },
  {
    id: 'torta_008',
    korabbi_id: 'rendelheto-002',
    nev: 'Esküvői fehér rózsatorta',
    kep: 'kepek/torta-placeholder.jpg',
    ar: '39 900 Ft-tól',
    partner_id: 'partner_002',
    varos_id: 'varos_002',
    korzet_id: 'korzet_004',
    kategoria_id: 'kategoria_007',
    varos: 'Debrecen',
    kerulet: 'Nagyerdő',
    korzet: 'Nagyerdő',
    cukraszda: 'Tündérsüti Műhely',
    allapot: 'rendelheto',
    hatarido: 'Rendelési határidő: 10 nap',
    atveteli_informacio: 'Rendelhető 10 nap alatt',
    kategoria: 'Esküvői torta',
    szeletszam: 32,
    oldal: null
  },
  {
    id: 'torta_009',
    korabbi_id: 'rendelheto-003',
    nev: 'Gluténmentes csokitorta',
    kep: 'kepek/torta-placeholder.jpg',
    ar: '16 500 Ft-tól',
    partner_id: 'partner_003',
    varos_id: 'varos_003',
    korzet_id: 'korzet_006',
    kategoria_id: 'kategoria_008',
    varos: 'Szeged',
    kerulet: 'Belváros',
    korzet: 'Belváros',
    cukraszda: 'Cukorcsillag Tortaműhely',
    allapot: 'rendelheto',
    hatarido: 'Rendelési határidő: 4 nap',
    atveteli_informacio: 'Rendelhető 4 nap alatt',
    kategoria: 'Mentes torta',
    szeletszam: 12,
    oldal: null
  },
  {
    id: 'torta_010',
    korabbi_id: 'rendelheto-004',
    nev: 'Macaron díszes ünnepi torta',
    kep: 'kepek/torta-placeholder.jpg',
    ar: '21 900 Ft-tól',
    partner_id: 'partner_004',
    varos_id: 'varos_004',
    korzet_id: 'korzet_008',
    kategoria_id: 'kategoria_009',
    varos: 'Pécs',
    kerulet: 'Belváros',
    korzet: 'Belváros',
    cukraszda: 'Édes Mesék Cukrászda',
    allapot: 'rendelheto',
    hatarido: 'Rendelési határidő: 5 nap',
    atveteli_informacio: 'Rendelhető 5 nap alatt',
    kategoria: 'Ünnepi torta',
    szeletszam: 20,
    oldal: null
  },
  {
    id: 'torta_011',
    korabbi_id: 'rendelheto-005',
    nev: 'Marcipános mesefigura torta',
    kep: 'kepek/torta-placeholder.jpg',
    ar: '24 900 Ft-tól',
    partner_id: 'partner_001',
    varos_id: 'varos_005',
    korzet_id: 'korzet_010',
    kategoria_id: 'kategoria_010',
    varos: 'Győr',
    kerulet: 'Belváros',
    korzet: 'Belváros',
    cukraszda: 'MeseHab Cukrászda',
    allapot: 'rendelheto',
    hatarido: 'Rendelési határidő: 6 nap',
    atveteli_informacio: 'Rendelhető 6 nap alatt',
    kategoria: 'Formatorta',
    szeletszam: 18,
    oldal: null
  },
  {
    id: 'torta_012',
    korabbi_id: 'rendelheto-006',
    nev: 'Vegán málnás csokoládétorta',
    kep: 'kepek/torta-placeholder.jpg',
    ar: '17 900 Ft-tól',
    partner_id: 'partner_002',
    varos_id: 'varos_006',
    korzet_id: 'korzet_012',
    kategoria_id: 'kategoria_008',
    varos: 'Miskolc',
    kerulet: 'Belváros',
    korzet: 'Belváros',
    cukraszda: 'Tündérsüti Műhely',
    allapot: 'rendelheto',
    hatarido: 'Rendelési határidő: 4 nap',
    atveteli_informacio: 'Rendelhető 4 nap alatt',
    kategoria: 'Mentes torta',
    szeletszam: 12,
    oldal: null
  }
];

const azonnalAtvehetoTortak = tortak.filter((torta) => torta.allapot === 'keszleten');
const rendelhetoTortak = tortak.filter((torta) => torta.allapot === 'rendelheto');
const cukraszdak = partnerek;

window.MESETORTA_ADATOK = {
  varosok,
  korzetek,
  kategoriak,
  partnerek,
  tortak,
  azonnalAtvehetoTortak,
  rendelhetoTortak,
  cukraszdak
};
