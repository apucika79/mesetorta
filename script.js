const tortak = [
  {
    nev: "Unikornis Csillámtorta",
    ar: "18 900 Ft-tól",
    szeletek: [8, 12, 16],
    alkalom: "gyerek",
    tema: "unikornis",
    kep: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=900&q=80",
  },
  {
    nev: "Hercegnő Kertje",
    ar: "19 500 Ft-tól",
    szeletek: [8, 12, 16],
    alkalom: "szulinap",
    tema: "hercegno",
    kep: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80",
  },
  {
    nev: "Arany Elegancia",
    ar: "24 900 Ft-tól",
    szeletek: [12, 16],
    alkalom: "evfordulo",
    tema: "minimal",
    kep: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
  },
  {
    nev: "Sport Bajnok",
    ar: "20 900 Ft-tól",
    szeletek: [8, 12, 16],
    alkalom: "egyeb",
    tema: "sport",
    kep: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=900&q=80",
  },
  {
    nev: "Pasztell Álomtorta",
    ar: "19 900 Ft-tól",
    szeletek: [12, 16],
    alkalom: "nevnap",
    tema: "minimal",
    kep: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=900&q=80",
  },
  {
    nev: "Keresztelő Galamb",
    ar: "22 400 Ft-tól",
    szeletek: [12, 16],
    alkalom: "keresztelo",
    tema: "minimal",
    kep: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80",
  },
  {
    nev: "Romantikus Rózsakert",
    ar: "26 500 Ft-tól",
    szeletek: [12, 16],
    alkalom: "eskuvo",
    tema: "minimal",
    kep: "https://images.unsplash.com/photo-1525258946800-98cfd641d0de?auto=format&fit=crop&w=900&q=80",
  },
  {
    nev: "Bajnoki Meccsnap",
    ar: "21 300 Ft-tól",
    szeletek: [8, 12, 16],
    alkalom: "szulinap",
    tema: "sport",
    kep: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?auto=format&fit=crop&w=900&q=80",
  },
  {
    nev: "Céges Logótorta",
    ar: "23 900 Ft-tól",
    szeletek: [12, 16],
    alkalom: "ceges",
    tema: "minimal",
    kep: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80",
  },
  {
    nev: "Babaváró Felhőcske",
    ar: "20 500 Ft-tól",
    szeletek: [8, 12, 16],
    alkalom: "babaavato",
    tema: "hercegno",
    kep: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=900&q=80",
  },
  {
    nev: "Unikornis Szivárvány",
    ar: "21 900 Ft-tól",
    szeletek: [8, 12, 16],
    alkalom: "gyerek",
    tema: "unikornis",
    kep: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=900&q=80",
  },
  {
    nev: "Hercegnő Koronatorta",
    ar: "22 200 Ft-tól",
    szeletek: [8, 12, 16],
    alkalom: "nevnap",
    tema: "hercegno",
    kep: "https://images.unsplash.com/photo-1562440499-64c9a111f713?auto=format&fit=crop&w=900&q=80",
  },
  {
    nev: "Esküvői Fehér Álom",
    ar: "28 900 Ft-tól",
    szeletek: [16],
    alkalom: "eskuvo",
    tema: "minimal",
    kep: "https://images.unsplash.com/photo-1519654793192-5f2e2e45a1f7?auto=format&fit=crop&w=900&q=80",
  },
  {
    nev: "Céges Díjátadó",
    ar: "25 700 Ft-tól",
    szeletek: [12, 16],
    alkalom: "ceges",
    tema: "sport",
    kep: "https://images.unsplash.com/photo-1559628233-100c798642d4?auto=format&fit=crop&w=900&q=80",
  },
  {
    nev: "Baba Csillagfény",
    ar: "21 100 Ft-tól",
    szeletek: [8, 12, 16],
    alkalom: "babaavato",
    tema: "unikornis",
    kep: "https://images.unsplash.com/photo-1519915028121-7d3463d5b1e3?auto=format&fit=crop&w=900&q=80",
  },
];

const tortaRacs = document.getElementById("tortaRacs");
const alkalomSzuro = document.getElementById("alkalomSzuro");
const temaSzuro = document.getElementById("temaSzuro");
const mobilGomb = document.getElementById("mobilGomb");
const menu = document.getElementById("menu");
const gorditBalra = document.getElementById("gorditBalra");
const gorditJobbra = document.getElementById("gorditJobbra");
const autoGorgetesGomb = document.getElementById("autoGorgetesGomb");

const autoGorgetesAllapot = {
  fut: true,
  irany: 1,
  sebesseg: 0.25,
  utolsoIdo: null,
};

function autoGorgetesLeptetes(ido) {
  if (autoGorgetesAllapot.utolsoIdo === null) {
    autoGorgetesAllapot.utolsoIdo = ido;
  }

  const eltelt = ido - autoGorgetesAllapot.utolsoIdo;
  autoGorgetesAllapot.utolsoIdo = ido;

  if (autoGorgetesAllapot.fut) {
    const maxGorgetes = tortaRacs.scrollWidth - tortaRacs.clientWidth;

    if (maxGorgetes > 0) {
      const kovetkezo =
        tortaRacs.scrollLeft + autoGorgetesAllapot.irany * autoGorgetesAllapot.sebesseg * eltelt;

      if (kovetkezo <= 0) {
        tortaRacs.scrollLeft = 0;
        autoGorgetesAllapot.irany = 1;
      } else if (kovetkezo >= maxGorgetes) {
        tortaRacs.scrollLeft = maxGorgetes;
        autoGorgetesAllapot.irany = -1;
      } else {
        tortaRacs.scrollLeft = kovetkezo;
      }
    }
  }

  requestAnimationFrame(autoGorgetesLeptetes);
}

function autoGorgetesMegallitasa() {
  autoGorgetesAllapot.fut = false;
  autoGorgetesGomb.textContent = "▶ Automatikus görgetés folytatása";
  autoGorgetesGomb.setAttribute("aria-pressed", "false");
}

function autoGorgetesInditasa() {
  autoGorgetesAllapot.fut = true;
  autoGorgetesGomb.textContent = "⏸ Automatikus görgetés";
  autoGorgetesGomb.setAttribute("aria-pressed", "true");
}

function autoGorgetesValtasa() {
  if (autoGorgetesAllapot.fut) {
    autoGorgetesMegallitasa();
  } else {
    autoGorgetesInditasa();
  }
}

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
  autoGorgetesAllapot.irany = 1;
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
gorditBalra.addEventListener("click", autoGorgetesMegallitasa);
gorditJobbra.addEventListener("click", autoGorgetesMegallitasa);
autoGorgetesGomb.addEventListener("click", autoGorgetesValtasa);
tortaRacs.addEventListener("scroll", nyilakFrissitese, { passive: true });

tortakatFrissit();
requestAnimationFrame(autoGorgetesLeptetes);

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
