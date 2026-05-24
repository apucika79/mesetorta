const tortak = [
  {
    nev: "Unikornis Csillámtorta",
    ar: "18 900 Ft",
    szeletek: [8, 12, 16],
    alkalom: "gyerek",
    tema: "unikornis",
    kinezet: "pasztell",
    kep: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=900&q=80",
  },
  {
    nev: "Arany Elegancia",
    ar: "24 900 Ft",
    szeletek: [12, 16],
    alkalom: "eskuvo",
    tema: "minimal",
    kinezet: "arany",
    kep: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
  },
  {
    nev: "Hercegnő Kertje",
    ar: "21 500 Ft",
    szeletek: [8, 12],
    alkalom: "szulinap",
    tema: "hercegno",
    kinezet: "vidam",
    kep: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80",
  },
  {
    nev: "Sport Bajnok",
    ar: "20 900 Ft",
    szeletek: [8, 12, 16],
    alkalom: "ceges",
    tema: "sport",
    kinezet: "elegans",
    kep: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=900&q=80",
  },
  {
    nev: "Modern Pasztell",
    ar: "19 900 Ft",
    szeletek: [12, 16],
    alkalom: "szulinap",
    tema: "minimal",
    kinezet: "pasztell",
    kep: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=900&q=80",
  },
];

const tortaRacs = document.getElementById("tortaRacs");
const alkalomSzuro = document.getElementById("alkalomSzuro");
const temaSzuro = document.getElementById("temaSzuro");
const kinezetSzuro = document.getElementById("kinezetSzuro");
const mobilGomb = document.getElementById("mobilGomb");
const menu = document.getElementById("menu");

function megfelelSzuronek(ertek, szuroErtek) {
  return szuroErtek === "osszes" || ertek === szuroErtek;
}

function kartyatGeneral(torta) {
  return `
    <article class="torta-kartya">
      <img src="${torta.kep}" alt="${torta.nev}" loading="lazy" />
      <div class="torta-torzs">
        <h3>${torta.nev}</h3>
        <p><strong>Ár:</strong> ${torta.ar}</p>
        <p><strong>Méretek:</strong> ${torta.szeletek.join(", ")} szeletes</p>
        <div class="cimke-sor">
          <span>${torta.alkalom}</span>
          <span>${torta.tema}</span>
          <span>${torta.kinezet}</span>
        </div>
      </div>
    </article>
  `;
}

function tortakatFrissit() {
  const szurt = tortak.filter((torta) => {
    return (
      megfelelSzuronek(torta.alkalom, alkalomSzuro.value) &&
      megfelelSzuronek(torta.tema, temaSzuro.value) &&
      megfelelSzuronek(torta.kinezet, kinezetSzuro.value)
    );
  });

  tortaRacs.innerHTML =
    szurt.length > 0
      ? szurt.map(kartyatGeneral).join("")
      : `<p>Nincs találat ehhez a szűréshez. Próbálj másik kombinációt!</p>`;
}

[alkalomSzuro, temaSzuro, kinezetSzuro].forEach((elem) => {
  elem.addEventListener("change", tortakatFrissit);
});

mobilGomb.addEventListener("click", () => {
  menu.classList.toggle("nyitott");
});

tortakatFrissit();
