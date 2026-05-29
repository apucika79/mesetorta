// MESETORTA alap keresés és szűrés próbaadatokkal.

(function () {
  const NINCS_TALALAT_UZENET = 'Nincs találat a megadott feltételekkel.';
  const PARTNER_JELENTKEZES_LINK = 'partner-jelentkezes.html';
  const URES_TORTA_UZENET = 'Jelenleg még nincs feltöltött torta ezen a területen.';
  const URES_AZONNAL_ATVEHETO_UZENET = 'Jelenleg nincs azonnal átvehető torta ezen a területen.';
  const URES_RENDELHETO_UZENET = 'Jelenleg nincs rendelhető torta ezen a területen.';
  const URES_PARTNER_UZENET = 'Jelenleg még nincs regisztrált cukrászda vagy tortakészítő ezen a területen.';

  const adatForras = window.MESETORTA_ADATOK || {
    tortak: [],
    partnerek: [],
    varosok: [],
    korzetek: []
  };

  function keresIdAlapjan(lista, id) {
    return (lista || []).find(function (elem) {
      return elem.id === id;
    }) || null;
  }

  function getTortaById(id) {
    return keresIdAlapjan(adatForras.tortak, id);
  }

  function getPartnerById(id) {
    return keresIdAlapjan(adatForras.partnerek, id);
  }

  function getVarosById(id) {
    return keresIdAlapjan(adatForras.varosok, id);
  }

  function getKorzetById(id) {
    return keresIdAlapjan(adatForras.korzetek, id);
  }

  window.getTortaById = getTortaById;
  window.getPartnerById = getPartnerById;
  window.getVarosById = getVarosById;
  window.getKorzetById = getKorzetById;

  function normalizal(ertek) {
    return String(ertek || '')
      .toLocaleLowerCase('hu-HU')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/ű/g, 'u')
      .replace(/ő/g, 'o')
      .replace(/[^a-z0-9]+/g, ' ')
      .trim();
  }

  function slug(ertek) {
    return normalizal(ertek).replace(/\s+/g, '-');
  }

  function biztonsagosSzoveg(ertek) {
    return String(ertek || '').replace(/[&<>'"]/g, function (karakter) {
      return {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[karakter];
    });
  }

  function szamErtek(ertek) {
    const talalat = String(ertek || '').replace(/\s/g, '').match(/\d+/);
    return talalat ? Number(talalat[0]) : 0;
  }

  function napErtek(torta) {
    const szoveg = `${torta.hatarido || ''} ${torta.atveteli_informacio || ''}`;
    const talalat = szoveg.match(/(\d+)\s*nap/);
    return talalat ? Number(talalat[1]) : 0;
  }

  function mezokEgyeznek(szuro, mezok) {
    const keresett = normalizal(szuro);
    if (!keresett) {
      return true;
    }

    const keresettReszek = keresett.split(/\s+/).filter(Boolean);
    const haystack = normalizal(mezok.join(' '));
    return keresettReszek.every(function (resz) {
      return haystack.includes(resz);
    });
  }

  function kategoriaEgyezik(torta, kategoria) {
    if (!kategoria) {
      return true;
    }

    const valasztott = normalizal(kategoria);
    const kategoriaNevek = [torta.kategoria, torta.kategoria_id, slug(torta.kategoria)];
    return kategoriaNevek.some(function (ertek) {
      return normalizal(ertek) === valasztott || slug(ertek) === kategoria;
    });
  }

  function tipusEgyezik(partner, tipus) {
    if (!tipus) {
      return true;
    }

    return slug(partner.tipus) === slug(tipus);
  }

  function szeletszamEgyezik(torta, szeletszam) {
    if (!szeletszam) {
      return true;
    }

    const szelet = Number(torta.szeletszam || 0);
    if (szeletszam === '8-10') {
      return szelet >= 8 && szelet <= 10;
    }
    if (szeletszam === '20-plusz') {
      return szelet >= 20;
    }
    return szelet === Number(szeletszam);
  }

  function arEgyezik(torta, maximum) {
    if (!maximum) {
      return true;
    }

    return szamErtek(torta.ar) <= Number(maximum);
  }

  function elkeszitesiIdoEgyezik(torta, ido) {
    if (!ido) {
      return true;
    }

    const napok = napErtek(torta);
    if (ido === '3-nap') {
      return napok > 0 && napok <= 3;
    }
    if (ido === '1-het') {
      return napok > 0 && napok <= 7;
    }
    if (ido === '2-het') {
      return napok > 0 && napok <= 14;
    }
    return true;
  }

  function tortakSzurese(beallitasok) {
    return adatForras.tortak.filter(function (torta) {
      const allapotOk = !beallitasok.allapot || torta.allapot === beallitasok.allapot;
      const helyOk = mezokEgyeznek(beallitasok.hely, [
        torta.varos,
        torta.kerulet,
        torta.korzet,
        torta.varos_id,
        torta.korzet_id
      ]);

      return allapotOk &&
        helyOk &&
        kategoriaEgyezik(torta, beallitasok.kategoria) &&
        arEgyezik(torta, beallitasok.arMaximum) &&
        szeletszamEgyezik(torta, beallitasok.szeletszam) &&
        elkeszitesiIdoEgyezik(torta, beallitasok.elkeszitesiIdo);
    });
  }

  function partnerekSzurese(beallitasok) {
    return adatForras.partnerek.filter(function (partner) {
      const helyOk = mezokEgyeznek(beallitasok.hely, [
        partner.varos,
        partner.kerulet,
        partner.korzet,
        partner.varos_id,
        partner.korzet_id
      ]);
      const kiemeltOk = !beallitasok.kiemelt ||
        (beallitasok.kiemelt === 'igen' && partner.kiemelt) ||
        (beallitasok.kiemelt === 'nem' && !partner.kiemelt);

      return helyOk && tipusEgyezik(partner, beallitasok.tipus) && kiemeltOk;
    });
  }

  function tortaAllapotFelirat(allapot) {
    return allapot === 'rendelheto' ? 'Rendelhető' : 'Készleten';
  }

  function tortaCimkeSor(torta) {
    const allapotOsztaly = torta.allapot === 'rendelheto' ? 'rendelheto' : 'keszleten';
    const kiemeltHtml = torta.kiemelt ? '<span class="cimke cimke-kiemelt">Kiemelt</span>' : '';

    return `
          <div class="cimke-sor" aria-label="Torta státusz és elérhetőség">
            <span class="cimke cimke-${allapotOsztaly}">${tortaAllapotFelirat(torta.allapot)}</span>
            ${kiemeltHtml}
            <span class="cimke cimke-varos">${biztonsagosSzoveg(torta.varos)}</span>
            <span class="cimke cimke-korzet">${biztonsagosSzoveg(torta.korzet || torta.kerulet)}</span>
            <span class="cimke cimke-hatarido">${biztonsagosSzoveg(torta.atveteli_informacio || torta.hatarido)}</span>
          </div>`;
  }

  function tortaKartya(torta) {
    const cim = biztonsagosSzoveg(torta.nev);
    const cimHtml = torta.oldal
      ? `<a href="${biztonsagosSzoveg(torta.oldal)}">${cim}</a>`
      : cim;
    const allapotOsztaly = torta.allapot === 'rendelheto' ? 'rendelheto' : 'keszleten';

    return `
      <article class="torta-kartya">
        <img class="torta-kartya-kep" src="${biztonsagosSzoveg(torta.kep)}" alt="${cim}">
        <div class="torta-kartya-tartalom">
          <h3 class="torta-kartya-cim">${cimHtml}</h3>
          <p class="torta-kartya-ar">${biztonsagosSzoveg(torta.ar)}</p>
          <p class="torta-kartya-cukraszda">${biztonsagosSzoveg(torta.cukraszda)}</p>${tortaCimkeSor(torta)}
          <dl class="torta-kartya-adatok">
            <div class="torta-adat-sor torta-adat-sor--allapot torta-adat-sor--${allapotOsztaly}"><dt>Állapot</dt><dd>${biztonsagosSzoveg(torta.allapot)}</dd></div>
            <div class="torta-adat-sor"><dt>Város</dt><dd>${biztonsagosSzoveg(torta.varos)}</dd></div>
            <div class="torta-adat-sor"><dt>Körzet / kerület</dt><dd>${biztonsagosSzoveg(torta.korzet || torta.kerulet)}</dd></div>
            <div class="torta-adat-sor"><dt>Átvétel</dt><dd>${biztonsagosSzoveg(torta.atveteli_informacio || torta.hatarido)}</dd></div>
            <div class="torta-adat-sor"><dt>Kategória</dt><dd>${biztonsagosSzoveg(torta.kategoria)}</dd></div>
            <div class="torta-adat-sor"><dt>Szeletszám</dt><dd>${biztonsagosSzoveg(torta.szeletszam)} szelet</dd></div>
          </dl>
        </div>
      </article>`;
  }

  function partnerKartya(partner) {
    const cim = biztonsagosSzoveg(partner.nev);
    const cimHtml = partner.oldal
      ? `<a href="${biztonsagosSzoveg(partner.oldal)}">${cim}</a>`
      : cim;
    const kiemeltHtml = partner.kiemelt ? '<span class="cimke cimke-kiemelt">Kiemelt partner</span>' : '';

    return `
      <article class="cukraszda-kartya">
        <img class="cukraszda-kartya-kep" src="${biztonsagosSzoveg(partner.kep)}" alt="${cim}">
        <div class="cukraszda-kartya-tartalom">
          <h3 class="cukraszda-kartya-cim">${cimHtml}</h3>
          <div class="cimke-sor" aria-label="Partner típus és hely">
            <span class="cimke cimke-rendelheto">${biztonsagosSzoveg(partner.tipus)}</span>
            <span class="cimke cimke-varos">${biztonsagosSzoveg(partner.varos)}</span>
            <span class="cimke cimke-korzet">${biztonsagosSzoveg(partner.korzet || partner.kerulet)}</span>
            ${kiemeltHtml}
          </div>
          <dl class="cukraszda-kartya-adatok">
            <div class="cukraszda-adat-sor"><dt>Város</dt><dd>${biztonsagosSzoveg(partner.varos)}</dd></div>
            <div class="cukraszda-adat-sor"><dt>Körzet / kerület</dt><dd>${biztonsagosSzoveg(partner.korzet || partner.kerulet)}</dd></div>
            <div class="cukraszda-adat-sor"><dt>Típus</dt><dd>${biztonsagosSzoveg(partner.tipus)}</dd></div>
          </dl>
          <p class="cukraszda-kartya-cimadat">${biztonsagosSzoveg(partner.cim)}</p>
          <p class="cukraszda-kartya-leiras">${biztonsagosSzoveg(partner.leiras)}</p>
        </div>
      </article>`;
  }

  function uresAllapotBlokk(cim, szoveg, partnerLink) {
    return `
      <div class="ures-allapot" role="status">
        <h3 class="ures-allapot-cim">${biztonsagosSzoveg(cim)}</h3>
        <p class="ures-allapot-szoveg">${biztonsagosSzoveg(szoveg)}</p>
        <a class="ures-allapot-gomb" href="${biztonsagosSzoveg(partnerLink || PARTNER_JELENTKEZES_LINK)}">Partnerként megjelenek</a>
      </div>`;
  }

  function uresListaKartya(beallitasok) {
    const cim = beallitasok && beallitasok.cim ? beallitasok.cim : 'Nincs megjeleníthető elem';
    const szoveg = beallitasok && beallitasok.szoveg ? beallitasok.szoveg : URES_TORTA_UZENET;
    const partnerLink = beallitasok && beallitasok.partnerLink ? beallitasok.partnerLink : PARTNER_JELENTKEZES_LINK;
    return uresAllapotBlokk(cim, szoveg, partnerLink);
  }

  function listaKirajzolasa(kontener, elemek, kartyaKeszito, uresBeallitasok) {
    if (!kontener) {
      return;
    }

    kontener.innerHTML = elemek.length ? elemek.map(kartyaKeszito).join('') : uresListaKartya(uresBeallitasok);
  }

  function selectErtek(id) {
    const elem = document.getElementById(id);
    return elem ? elem.value : '';
  }

  function inputErtek(id) {
    const elem = document.getElementById(id);
    return elem ? elem.value.trim() : '';
  }

  function fooldaliKeresoInditasa() {
    const urlap = document.querySelector('.kereso-helye');
    const maLista = document.querySelector('#ma-atveheto-tortak .torta-lista-helye');
    const rendelhetoLista = document.querySelector('#rendelheto-tortak .torta-lista-helye');
    if (!urlap || !maLista || !rendelhetoLista) {
      return;
    }

    let voltKereses = false;

    function frissit() {
      const hely = inputErtek('varos');
      const kategoria = selectErtek('kategoria');
      const elerhetoseg = selectErtek('elerhetoseg');
      const maTortak = elerhetoseg === 'rendelheto'
        ? []
        : tortakSzurese({ hely: hely, kategoria: kategoria, allapot: 'keszleten' });
      const rendelhetoListaElemei = elerhetoseg === 'azonnal-atveheto'
        ? []
        : tortakSzurese({ hely: hely, kategoria: kategoria, allapot: 'rendelheto' });

      const nincsTalalatBeallitas = { cim: 'Nincs találat', szoveg: NINCS_TALALAT_UZENET };
      listaKirajzolasa(maLista, maTortak, tortaKartya, voltKereses ? nincsTalalatBeallitas : {
        cim: 'Nincs azonnal átvehető torta',
        szoveg: URES_AZONNAL_ATVEHETO_UZENET
      });
      listaKirajzolasa(rendelhetoLista, rendelhetoListaElemei, tortaKartya, voltKereses ? nincsTalalatBeallitas : {
        cim: 'Nincs rendelhető torta',
        szoveg: URES_RENDELHETO_UZENET
      });
    }

    urlap.addEventListener('submit', function (esemeny) {
      esemeny.preventDefault();
      voltKereses = true;
      frissit();
    });

    frissit();
  }

  function maAtvehetoOldalInditasa() {
    const urlap = document.querySelector('.ma-atveheto-tortak-oldal .szuro-urlap');
    const lista = document.querySelector('.ma-atveheto-tortak-oldal .torta-lista');
    if (!urlap || !lista) {
      return;
    }

    let voltKereses = false;

    function frissit() {
      const eredmeny = tortakSzurese({
        allapot: 'keszleten',
        hely: inputErtek('ma-varos'),
        kategoria: selectErtek('ma-kategoria'),
        arMaximum: selectErtek('ma-ar-maximum'),
        szeletszam: selectErtek('ma-szeletszam')
      });
      listaKirajzolasa(lista, eredmeny, tortaKartya, voltKereses ? {
        cim: 'Nincs találat',
        szoveg: NINCS_TALALAT_UZENET
      } : {
        cim: 'Nincs azonnal átvehető torta',
        szoveg: URES_AZONNAL_ATVEHETO_UZENET
      });
    }

    urlap.addEventListener('submit', function (esemeny) {
      esemeny.preventDefault();
      voltKereses = true;
      frissit();
    });

    frissit();
  }

  function rendelhetoOldalInditasa() {
    const urlap = document.querySelector('.rendelheto-tortak-oldal .szuro-urlap');
    const lista = document.querySelector('.rendelheto-tortak-oldal .torta-lista');
    if (!urlap || !lista) {
      return;
    }

    let voltKereses = false;

    function frissit() {
      const eredmeny = tortakSzurese({
        allapot: 'rendelheto',
        hely: inputErtek('rendelheto-varos'),
        kategoria: selectErtek('rendelheto-kategoria'),
        elkeszitesiIdo: selectErtek('rendelheto-elkeszitesi-ido'),
        arMaximum: selectErtek('rendelheto-ar-maximum')
      });
      listaKirajzolasa(lista, eredmeny, tortaKartya, voltKereses ? {
        cim: 'Nincs találat',
        szoveg: NINCS_TALALAT_UZENET
      } : {
        cim: 'Nincs rendelhető torta',
        szoveg: URES_RENDELHETO_UZENET
      });
    }

    urlap.addEventListener('submit', function (esemeny) {
      esemeny.preventDefault();
      voltKereses = true;
      frissit();
    });

    frissit();
  }

  function cukraszdakOldalInditasa() {
    const urlap = document.querySelector('.cukraszdak-oldal .szuro-urlap');
    const lista = document.querySelector('.cukraszdak-oldal .cukraszda-lista');
    if (!urlap || !lista) {
      return;
    }

    let voltKereses = false;

    function frissit() {
      const eredmeny = partnerekSzurese({
        hely: inputErtek('cukraszda-varos'),
        tipus: selectErtek('partner-tipus'),
        kiemelt: selectErtek('kiemelt-partner')
      });
      listaKirajzolasa(lista, eredmeny, partnerKartya, voltKereses ? {
        cim: 'Nincs találat',
        szoveg: NINCS_TALALAT_UZENET
      } : {
        cim: 'Nincs regisztrált partner',
        szoveg: URES_PARTNER_UZENET
      });
    }

    urlap.addEventListener('submit', function (esemeny) {
      esemeny.preventDefault();
      voltKereses = true;
      frissit();
    });

    frissit();
  }

  document.addEventListener('DOMContentLoaded', function () {
    fooldaliKeresoInditasa();
    maAtvehetoOldalInditasa();
    rendelhetoOldalInditasa();
    cukraszdakOldalInditasa();
  });
}());
