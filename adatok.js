// Mesetorta próbaadatok - adatbázis nélkül, későbbi fejlesztéshez.

const azonnalAtvehetoTortak = [
  {
    id: 'keszleten-001',
    nev: 'Erdei gyümölcsös álomtorta',
    kep: 'kepek/torta-placeholder.jpg',
    ar: '12 900 Ft',
    varos: 'Budapest',
    kerulet: 'XIII. kerület',
    cukraszda: 'MeseHab Cukrászda',
    allapot: 'keszleten',
    hatarido: 'Ma 16:00-ig átvehető',
    kategoria: 'Gyümölcsös torta',
    szeletszam: 12
  },
  {
    id: 'keszleten-002',
    nev: 'Csokoládés mogyoró torta',
    kep: 'kepek/torta-placeholder.jpg',
    ar: '14 500 Ft',
    varos: 'Debrecen',
    kerulet: 'Belváros',
    cukraszda: 'Tündérsüti Műhely',
    allapot: 'keszleten',
    hatarido: 'Ma 18:00-ig átvehető',
    kategoria: 'Csokoládétorta',
    szeletszam: 16
  },
  {
    id: 'keszleten-003',
    nev: 'Vaníliás eper torta',
    kep: 'kepek/torta-placeholder.jpg',
    ar: '11 800 Ft',
    varos: 'Szeged',
    kerulet: 'Újszeged',
    cukraszda: 'Cukorcsillag Tortaműhely',
    allapot: 'keszleten',
    hatarido: 'Ma 17:30-ig átvehető',
    kategoria: 'Tejszínes torta',
    szeletszam: 10
  },
  {
    id: 'keszleten-004',
    nev: 'Karamellás sajttorta',
    kep: 'kepek/torta-placeholder.jpg',
    ar: '13 200 Ft',
    varos: 'Pécs',
    kerulet: 'Tettye',
    cukraszda: 'Édes Mesék Cukrászda',
    allapot: 'keszleten',
    hatarido: 'Ma 15:00-ig átvehető',
    kategoria: 'Sajttorta',
    szeletszam: 12
  },
  {
    id: 'keszleten-005',
    nev: 'Dobos torta szeletelt díszítéssel',
    kep: 'kepek/torta-placeholder.jpg',
    ar: '15 900 Ft',
    varos: 'Győr',
    kerulet: 'Nádorváros',
    cukraszda: 'MeseHab Cukrászda',
    allapot: 'keszleten',
    hatarido: 'Ma 19:00-ig átvehető',
    kategoria: 'Klasszikus torta',
    szeletszam: 16
  },
  {
    id: 'keszleten-006',
    nev: 'Citromos habkönnyű torta',
    kep: 'kepek/torta-placeholder.jpg',
    ar: '10 900 Ft',
    varos: 'Miskolc',
    kerulet: 'Avas',
    cukraszda: 'Tündérsüti Műhely',
    allapot: 'keszleten',
    hatarido: 'Ma 16:30-ig átvehető',
    kategoria: 'Gyümölcsös torta',
    szeletszam: 8
  }
];

const rendelhetoTortak = [
  {
    id: 'rendelheto-001',
    nev: 'Unikornis szülinapi torta',
    kep: 'kepek/torta-placeholder.jpg',
    ar: '18 900 Ft-tól',
    varos: 'Budapest',
    kerulet: 'XI. kerület',
    cukraszda: 'MeseHab Cukrászda',
    allapot: 'rendelheto',
    hatarido: 'Rendelési határidő: 3 nap',
    kategoria: 'Gyerektorta',
    szeletszam: 16
  },
  {
    id: 'rendelheto-002',
    nev: 'Esküvői fehér rózsatorta',
    kep: 'kepek/torta-placeholder.jpg',
    ar: '39 900 Ft-tól',
    varos: 'Debrecen',
    kerulet: 'Nagyerdő',
    cukraszda: 'Tündérsüti Műhely',
    allapot: 'rendelheto',
    hatarido: 'Rendelési határidő: 10 nap',
    kategoria: 'Esküvői torta',
    szeletszam: 32
  },
  {
    id: 'rendelheto-003',
    nev: 'Gluténmentes csokitorta',
    kep: 'kepek/torta-placeholder.jpg',
    ar: '16 500 Ft-tól',
    varos: 'Szeged',
    kerulet: 'Belváros',
    cukraszda: 'Cukorcsillag Tortaműhely',
    allapot: 'rendelheto',
    hatarido: 'Rendelési határidő: 4 nap',
    kategoria: 'Mentes torta',
    szeletszam: 12
  },
  {
    id: 'rendelheto-004',
    nev: 'Macaron díszes ünnepi torta',
    kep: 'kepek/torta-placeholder.jpg',
    ar: '21 900 Ft-tól',
    varos: 'Pécs',
    kerulet: 'Belváros',
    cukraszda: 'Édes Mesék Cukrászda',
    allapot: 'rendelheto',
    hatarido: 'Rendelési határidő: 5 nap',
    kategoria: 'Ünnepi torta',
    szeletszam: 20
  },
  {
    id: 'rendelheto-005',
    nev: 'Marcipános mesefigura torta',
    kep: 'kepek/torta-placeholder.jpg',
    ar: '24 900 Ft-tól',
    varos: 'Győr',
    kerulet: 'Belváros',
    cukraszda: 'MeseHab Cukrászda',
    allapot: 'rendelheto',
    hatarido: 'Rendelési határidő: 6 nap',
    kategoria: 'Formatorta',
    szeletszam: 18
  },
  {
    id: 'rendelheto-006',
    nev: 'Vegán málnás csokoládétorta',
    kep: 'kepek/torta-placeholder.jpg',
    ar: '17 900 Ft-tól',
    varos: 'Miskolc',
    kerulet: 'Belváros',
    cukraszda: 'Tündérsüti Műhely',
    allapot: 'rendelheto',
    hatarido: 'Rendelési határidő: 4 nap',
    kategoria: 'Mentes torta',
    szeletszam: 12
  }
];

const cukraszdak = [
  {
    id: 'cukraszda-001',
    nev: 'MeseHab Cukrászda',
    kep: 'kepek/torta-placeholder.jpg',
    varos: 'Budapest',
    kerulet: 'XIII. kerület',
    cim: 'Mese utca 12.',
    leiras: 'Klasszikus és mesés születésnapi torták készítése rövid határidővel.'
  },
  {
    id: 'cukraszda-002',
    nev: 'Tündérsüti Műhely',
    kep: 'kepek/torta-placeholder.jpg',
    varos: 'Debrecen',
    kerulet: 'Belváros',
    cim: 'Tündér tér 4.',
    leiras: 'Rendelhető alkalmi torták, mentes sütemények és családi ünnepi desszertek.'
  },
  {
    id: 'cukraszda-003',
    nev: 'Cukorcsillag Tortaműhely',
    kep: 'kepek/torta-placeholder.jpg',
    varos: 'Szeged',
    kerulet: 'Újszeged',
    cim: 'Csillag sétány 8.',
    leiras: 'Egyedi díszítésű torták gyerekzsúrokra, céges eseményekre és esküvőkre.'
  },
  {
    id: 'cukraszda-004',
    nev: 'Édes Mesék Cukrászda',
    kep: 'kepek/torta-placeholder.jpg',
    varos: 'Pécs',
    kerulet: 'Tettye',
    cim: 'Édes köz 3.',
    leiras: 'Házi ízvilágú torták, szezonális krémek és hagyományos cukrászsütemények.'
  }
];
