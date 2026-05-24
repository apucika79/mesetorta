const tortak = [
  {
    nev: "Unikornis Csillámtorta",
    ar: "18 900 Ft",
    szeletek: [8, 12, 16],
    alkalom: "gyerek",
    tema: "unikornis",
    kep: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=900&q=80",
  },
  {
    nev: "Arany Elegancia",
    ar: "24 900 Ft",
    szeletek: [12, 16],
    alkalom: "evfordulo",
    tema: "minimal",
    kep: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
  },
  {
    nev: "Hercegnő Kertje",
    ar: "21 500 Ft",
    szeletek: [8, 12],
    alkalom: "szulinap",
    tema: "hercegno",
    kep: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80",
  },
  {
    nev: "Sport Bajnok",
    ar: "20 900 Ft",
    szeletek: [8, 12, 16],
    alkalom: "egyeb",
    tema: "sport",
    kep: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=900&q=80",
  },
  {
    nev: "Modern Pasztell",
    ar: "19 900 Ft",
    szeletek: [12, 16],
    alkalom: "szulinap",
    tema: "minimal",
    kep: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=900&q=80",
  },
];

const tortaRacs = document.getElementById("tortaRacs");
const alkalomSzuro = document.getElementById("alkalomSzuro");
const temaSzuro = document.getElementById("temaSzuro");
const mobilGomb = document.getElementById("mobilGomb");
const menu = document.getElementById("menu");
const gorditBalra = document.getElementById("gorditBalra");
const gorditJobbra = document.getElementById("gorditJobbra");

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
        </div>
      </div>
    </article>
  `;
}

function tortakatFrissit() {
  const szurt = tortak.filter((torta) => {
    return (
      megfelelSzuronek(torta.alkalom, alkalomSzuro.value) &&
      megfelelSzuronek(torta.tema, temaSzuro.value)
    );
  });

  tortaRacs.innerHTML =
    szurt.length > 0
      ? szurt.map(kartyatGeneral).join("")
      : `<p>Nincs találat ehhez a szűréshez. Próbálj másik kombinációt!</p>`;

  tortaRacs.scrollLeft = 0;
  nyilakFrissitese();
}

function nyilakFrissitese() {
  const vanGorgetes = tortaRacs.scrollWidth > tortaRacs.clientWidth + 5;
  const balSzelen = tortaRacs.scrollLeft <= 5;
  const jobbSzelen = tortaRacs.scrollLeft + tortaRacs.clientWidth >= tortaRacs.scrollWidth - 5;

  gorditBalra.classList.toggle("rejtett", !vanGorgetes || balSzelen);
  gorditJobbra.classList.toggle("rejtett", !vanGorgetes || jobbSzelen);
}

function gorgetesIranyba(irany) {
  const kartya = tortaRacs.querySelector(".torta-kartya");
  const lepes = kartya ? kartya.getBoundingClientRect().width + 16 : 280;
  tortaRacs.scrollBy({ left: lepes * irany, behavior: "smooth" });
}

[alkalomSzuro, temaSzuro].forEach((elem) => {
  elem.addEventListener("change", tortakatFrissit);
});

mobilGomb.addEventListener("click", () => {
  menu.classList.toggle("nyitott");
});

gorditBalra.addEventListener("click", () => gorgetesIranyba(-1));
gorditJobbra.addEventListener("click", () => gorgetesIranyba(1));
tortaRacs.addEventListener("scroll", nyilakFrissitese, { passive: true });

tortakatFrissit();


menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("nyitott");
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 820) {
    menu.classList.remove("nyitott");
  }

  nyilakFrissitese();
});
