# Adatmodell

## Áttekintés

A Mesetorta.hu rendszer adatmodellje a partnerek, torták, városok, kategóriák, kiemelések és jelentkezések nyilvántartására épül.


## Demó mintaadatok

Az `adatok.js` jelenlegi tartalma kizárólag Mesetorta.hu demó célú, kitalált mintaadat. A benne szereplő partnerek, torták, elérhetőségek és megjelenített adatok nem valódi vállalkozásokhoz tartoznak, nem értelmezhetők éles partneradatként, és csak az országos tortakereső működési logikájának bemutatására szolgálnak. A demó továbbra sem használ adatbázist vagy API-t.

## Induló tortakategóriák

* Születésnapi torta
* Gyerektorta
* Esküvői torta
* Ballagási torta
* Keresztelő torta
* Céges torta
* Egyedi torta
* Mentes torta
* Cukormentes torta
* Gluténmentes torta
* Vegán torta
* Sajttorta
* Formatorta
* Fotótorta
* Mini torta

## Entitások

### partnerek

A `partnerek` entitás a rendszerben megjelenő cukrászdákat, tortakészítőket vagy egyéb szolgáltató partnereket írja le.

| Mező neve | Típus | Rövid leírás |
| --- | --- | --- |
| id | egész szám | Egyedi partnerazonosító. |
| nev | szöveg | A partner megjelenített neve. |
| slug | szöveg | Keresőbarát, URL-ben használható egyedi azonosító. |
| tipus | szöveg | A partner típusa, például cukrászda, egyéni tortakészítő vagy üzlet. |
| varos_id | egész szám | Hivatkozás arra a városra, ahol a partner működik. |
| korzet_id | egész szám | Hivatkozás arra a körzetre, ahol a partner működik. |
| cim | szöveg | A partner pontos címe vagy átvételi helye. |
| telefon | szöveg | Kapcsolattartási telefonszám. |
| email | szöveg | Kapcsolattartási e-mail-cím. |
| weboldal | szöveg | A partner saját weboldalának címe. |
| facebook | szöveg | A partner Facebook-oldalának címe. |
| instagram | szöveg | A partner Instagram-profiljának címe. |
| bemutatkozas | hosszú szöveg | Rövid bemutatkozó leírás a partnerről és szolgáltatásairól. |
| logo_url | szöveg | A partner logójának elérési útja vagy URL-je. |
| logo_alt | szöveg | A partner logójának rövid alternatív szövege vagy képaláírása. |
| boritokep_url | szöveg | A partner profiljához tartozó borítókép elérési útja vagy URL-je. |
| boritokep_alt | szöveg | A partner borítóképének rövid alternatív szövege vagy képaláírása. |
| statusz | szöveg | A partner adminisztratív állapota, például új, aktív, függőben vagy inaktív. |
| csomag_tipus | szöveg | A partner előfizetési vagy megjelenési csomagjának típusa. |

### tortak

A `tortak` entitás a partnerek által kínált tortákat és azok megjelenítési adatait tartalmazza.

A rendszer két fő tortatípust kezel:

1. **Azonnal átvehető torta**: olyan torta, amely készleten van, és a megadott átvételi időablakban a vásárló számára rövid határidővel elérhető.
2. **Rendelhető torta**: olyan torta, amely nincs feltétlenül készleten, de a partner vállalja az elkészítését rendelés alapján, a megadott kapacitási és határidőfeltételek szerint.

| Mező neve | Típus | Rövid leírás |
| --- | --- | --- |
| id | egész szám | Egyedi tortaazonosító. |
| partner_id | egész szám | Hivatkozás arra a partnerre, aki a tortát kínálja. |
| nev | szöveg | A torta megjelenített neve. |
| slug | szöveg | Keresőbarát, URL-ben használható egyedi tortaazonosító. |
| leiras | hosszú szöveg | A torta részletes leírása, összetevői vagy ajánlott alkalmai. |
| kep_url | szöveg | A tortához tartozó kép elérési útja vagy URL-je. |
| kep_alt | szöveg | A tortához tartozó kép rövid alternatív szövege vagy képaláírása. |
| ar | tizedes szám | A torta ára vagy induló ára. |
| meret | szöveg | A torta mérete, például átmérő, forma vagy súly alapján. |
| szeletszam | egész szám | A tortából várható szeletek száma. |
| iz | szöveg | A torta fő íze vagy ízkombinációja. |
| kategoria_id | egész szám | Hivatkozás arra a kategóriára, amelybe a torta tartozik. |
| varos_id | egész szám | Hivatkozás arra a városra, ahol a torta átvehető vagy rendelhető. |
| korzet_id | egész szám | Hivatkozás arra a körzetre, ahol a torta átvehető vagy rendelhető. |
| statusz | szöveg | A torta kezelési állapota: `keszleten`, `rendelheto`, `lejart`, `rejtett` vagy `eladva`. |
| keszlet_lejar | dátum és idő | Az az időpont, ameddig az azonnal átvehető torta készleten elérhetőként kezelhető. |
| eladva | logikai érték | Jelzi, hogy az adott készleten lévő torta elkelt-e. |
| rejtett | logikai érték | Jelzi, hogy a torta admin döntés alapján ne jelenjen meg a felhasználói felületen. |
| allapot | szöveg | A torta adminisztratív vagy készítési állapota, például elérhető, rendelhető vagy szünetel. |
| keszlet_db | egész szám | Az aktuálisan elérhető darabszám, ha készletről értékesített tortáról van szó. |
| keszleten_van | logikai érték | Jelzi, hogy a torta jelenleg készleten elérhető-e. |
| azonnal_atveheto | logikai érték | Jelzi, hogy a torta külön rendelési folyamat nélkül, azonnali vagy rövid határidejű átvételre alkalmas-e. |
| atveheto_tol | dátum és idő | Az a legkorábbi időpont, amikortól a készleten lévő torta átvehető. |
| atveheto_ig | dátum és idő | Az a legkésőbbi időpont, ameddig a készleten lévő torta átvehető. |
| surgos_rendeles_vallalasa | logikai érték | Jelzi, hogy a partner vállal-e sürgős rendelést erre a tortára. |
| max_napi_kapacitas | egész szám | Az adott tortából egy nap alatt vállalható legnagyobb rendelési mennyiség. |
| rendelesi_hatarido_megjegyzes | hosszú szöveg | Szabad szöveges megjegyzés a rendelési határidőről, például minimum elkészítési idő vagy egyedi egyeztetési feltétel. |
| kiemelt_keszleten | logikai érték | Jelzi, hogy a készleten lévő torta kiemelten jelenjen-e meg a találati listában. |
| kiemelt_rendelheto | logikai érték | Jelzi, hogy a rendelhető torta kiemelten jelenjen-e meg a találati listában. |
| elkeszitesi_ido | szöveg | A torta elkészítéséhez szükséges becsült idő. |
| atveteli_cim | szöveg | A torta átvételi címe, ha eltér a partner címétől. |
| aktiv | logikai érték | Jelzi, hogy a torta megjelenik-e a felhasználók számára. |

A `statusz` mező tervezett tortaértékei:

* `keszleten`: azonnal vagy rövid határidővel átvehető, készleten lévő torta.
* `rendelheto`: előrendeléssel elkészíthető torta.
* `lejart`: olyan készleten lévő torta, amelynek elérhetőségi ideje lejárt.
* `rejtett`: admin által elrejtett torta, amely nem jelenik meg a látogatóknak.
* `eladva`: elkelt torta, amelyből jelenleg nincs elérhető készlet.


### varosok

A `varosok` entitás a szolgáltatási területek és települések alapadatait tartalmazza. A rendszer országos területi működésre készül, ezért a városokhoz városon belüli körzetek is kapcsolhatók. Budapest esetében ezek a kerületek, nagyobb városoknál pedig városrészek vagy működési körzetek lehetnek.

| Mező neve | Típus | Rövid leírás |
| --- | --- | --- |
| id | egész szám | Egyedi városazonosító. |
| nev | szöveg | A város vagy település neve. |
| slug | szöveg | Keresőbarát, URL-ben használható városazonosító. |
| megye | szöveg | A városhoz tartozó megye neve. |
| tipus | szöveg | A település típusa, például város, község vagy régió. |
| kep_url | szöveg | A városhoz tartozó kép elérési útja vagy URL-je. |
| kep_alt | szöveg | A városhoz tartozó kép rövid alternatív szövege vagy képaláírása. |
| legkozelebbi_varos_id | egész szám | Hivatkozás egy közeli nagyobb városra vagy szolgáltatási központra. |

### korzetek

A `korzetek` entitás a városon belüli területi egységeket írja le. Célja, hogy a későbbi keresés és megjelenítés város + körzet bontásban is működhessen, adatbázis vagy működő keresési funkció bevezetése nélkül.

| Mező neve | Típus | Rövid leírás |
| --- | --- | --- |
| id | egész szám | Egyedi körzetazonosító. |
| varos_id | egész szám | Hivatkozás arra a városra, amelyhez a körzet tartozik. |
| nev | szöveg | A körzet, kerület vagy városrész megjelenített neve. |
| slug | szöveg | Keresőbarát, URL-ben használható körzetazonosító. |
| tipus | szöveg | A körzet típusa: `kerulet`, `varosresz` vagy `korzet`. |
| aktiv | logikai érték | Jelzi, hogy a körzet használható-e a felületen és a későbbi keresésben. |

A `tipus` mező megengedett értékei:

* `kerulet`
* `varosresz`
* `korzet`

### kategoriak

A `kategoriak` entitás a torták tematikus vagy terméktípus szerinti csoportosítását biztosítja.

| Mező neve | Típus | Rövid leírás |
| --- | --- | --- |
| id | egész szám | Egyedi kategóriaazonosító. |
| nev | szöveg | A kategória megjelenített neve. |
| slug | szöveg | Keresőbarát, URL-ben használható kategóriaazonosító. |

### kiemelesek

A `kiemelesek` entitás a fizetett vagy szerkesztőségi kiemelések adatait kezeli partnerekhez, tortákhoz vagy városokhoz kapcsolva.

| Mező neve | Típus | Rövid leírás |
| --- | --- | --- |
| id | egész szám | Egyedi kiemelésazonosító. |
| kiemeles_tipus | szöveg | A kiemelés típusa: torta kiemelés, készleten lévő torta kiemelés, partner kiemelés vagy területi kiemelés. |
| partner_id | egész szám | Hivatkozás a kiemelt vagy érintett partnerre, ha a kiemelés partnerhez kapcsolódik. |
| torta_id | egész szám | Hivatkozás a kiemelt tortára, ha a kiemelés tortához kapcsolódik. |
| varos_id | egész szám | Hivatkozás a városra, ahol vagy amelyhez kapcsolódva a kiemelés megjelenik. |
| korzet_id | egész szám | Hivatkozás a körzetre vagy kerületre, ha a kiemelés területhez kapcsolódik. |
| kezdete | dátum és idő | A kiemelés kezdő időpontja. |
| vege | dátum és idő | A kiemelés záró időpontja. |
| aktiv | logikai érték | Jelzi, hogy a kiemelés jelenleg aktív-e. |
| statusz | szöveg | A kiemelés admin állapota: `aktiv`, `lejart` vagy `szuneteltetett`. |
| megjegyzes | hosszabb szöveg | Belső admin megjegyzés a kiemeléshez. |

A `statusz` mező tervezett kiemelésértékei:

* `aktiv`
* `lejart`
* `szuneteltetett`

### jelentkezesek

A `jelentkezesek` entitás a leendő partnerek vagy érdeklődők kapcsolatfelvételi és jelentkezési adatait tartalmazza.

| Mező neve | Típus | Rövid leírás |
| --- | --- | --- |
| id | egész szám | Egyedi jelentkezésazonosító. |
| nev | szöveg | A jelentkező kapcsolattartó neve. |
| email | szöveg | A jelentkező e-mail-címe. |
| telefon | szöveg | A jelentkező telefonszáma. |
| cegnev | szöveg | A jelentkező vállalkozásának vagy márkájának neve. |
| varos | szöveg | A jelentkező városa vagy szolgáltatási területe. |
| partner_tipus | szöveg | A jelentkező partner típusa, például cukrászda, tortaműhely, otthoni tortakészítő, cukrászüzem vagy egyéb. |
| kiszolgalt_teruletek | hosszú szöveg | Azok a városok, körzetek vagy kerületek, ahol a partner dolgozik vagy kiszolgálást vállal. |
| szolgaltatasok | lista | A partner által jelzett szolgáltatások, például azonnal átvehető, rendelhető, egyedi, esküvői, mentes vagy céges torták. |
| megjelenesi_igeny | lista | A partner által jelzett megjelenési igények, például ingyenes alap megjelenés, kiemelt partner, területi kiemelés vagy készleten lévő torták kiemelése. |
| logo_url | szöveg | A partner logójának későbbi fájl- vagy URL-hivatkozása. |
| boritokep_url | szöveg | A partner borítóképének későbbi fájl- vagy URL-hivatkozása. |
| bemutatkozo_kep_url | szöveg | A partner bemutatkozó képének későbbi fájl- vagy URL-hivatkozása. |
| hozzajarulas | logikai érték | Jelzi, hogy a jelentkező hozzájárult-e a jelentkezés miatti kapcsolatfelvételhez. |
| uzenet | hosszú szöveg | A jelentkező által küldött szabad szöveges üzenet. |
| statusz | szöveg | A jelentkezés feldolgozási állapota: `uj`, `atnezes_alatt`, `jovahagyva` vagy `elutasitva`. |

A `statusz` mező tervezett értékei:

* `uj`: frissen beérkezett jelentkezés, amelyet az admin még nem dolgozott fel.
* `atnezes_alatt`: az admin már megnyitotta vagy ellenőrzi a jelentkezés adatait.
* `jovahagyva`: az admin elfogadta a jelentkezést, és később partner adatlap készülhet belőle.
* `elutasitva`: az admin elutasította a jelentkezést, ezért abból nem készül partner adatlap.

## Részletező oldalak adatkapcsolati előkészítése

A statikus torta részletező oldalak `data-torta-id`, a statikus partner profil oldalak pedig `data-partner-id` attribútumot kapnak. Ezek az azonosítók az `adatok.js` megfelelő `tortak` és `partnerek` rekordjainak `id` mezőire mutatnak.

A későbbi fejlesztés során a részletező oldalak tartalma ezekkel az azonosítókkal tölthető fel az `adatok.js` tömbjeiből vagy egy későbbi adatbázisból. Ez jelenleg csak adatkapcsolati előkészítés: nem jelent API-t, adatbázist vagy dinamikus útvonalkezelést.

## Kapcsolatok

| Kapcsolat | Leírás |
| --- | --- |
| partnerek.varos_id → varosok.id | Egy partner egy elsődleges városhoz kapcsolódik. |
| tortak.partner_id → partnerek.id | Egy torta egy partnerhez tartozik. |
| tortak.kategoria_id → kategoriak.id | Egy torta egy kategóriába sorolható. |
| varosok.legkozelebbi_varos_id → varosok.id | Egy város opcionálisan kapcsolódhat egy közeli városhoz. |
| korzetek.varos_id → varosok.id | Egy körzet, kerület vagy városrész egy városhoz kapcsolódik. |
| kiemelesek.partner_id → partnerek.id | Egy kiemelés opcionálisan partnerhez kapcsolódhat. |
| kiemelesek.torta_id → tortak.id | Egy kiemelés opcionálisan tortához kapcsolódhat. |
| kiemelesek.varos_id → varosok.id | Egy kiemelés opcionálisan városhoz kapcsolódhat. |

## Mezők

Az azonosító mezők egyedi rekordazonosításra szolgálnak. A `slug` mezők URL-ekben és keresőbarát útvonalakban használhatók. A kapcsolati mezők az entitások közötti összefüggéseket jelölik.

## Adattípusok

| Típus | Jelentés |
| --- | --- |
| egész szám | Egész érték, jellemzően azonosítóhoz, darabszámhoz vagy szeletszámhoz. |
| tizedes szám | Pénzügyi vagy mérhető numerikus érték, például ár. |
| szöveg | Rövidebb karakterlánc, például név, URL, státusz vagy cím. |
| hosszú szöveg | Több mondatos leírás vagy üzenet. |
| dátum és idő | Időponthoz kötött kezdő vagy záró adat. |
| logikai érték | Igen/nem jellegű állapot, például aktív vagy inaktív. |
| lista | Több válasz vagy választási opció együttes tárolására szolgáló felsorolás. |

## Validációk

| Terület | Javasolt szabály |
| --- | --- |
| Kötelező azonosítók | Minden entitásnál az `id` mező legyen egyedi és kitöltött. |
| Slug mezők | A `slug` mezők legyenek egyediek az adott entitáson belül, kisbetűsek és URL-barát formátumúak. |
| Kapcsolati mezők | A hivatkozott rekordoknak létezniük kell, például a `partner_id`, `varos_id` és `kategoria_id` mezők esetében. |
| Körzettípusok | A `korzetek.tipus` mező csak `kerulet`, `varosresz` vagy `korzet` értéket vehet fel. |
| Kapcsolattartási adatok | Az e-mail-címek és URL-ek formátuma legyen ellenőrizhető. |
| Árak és mennyiségek | Az `ar`, `szeletszam` és `keszlet_db` értékek nem lehetnek negatívak. |
| Aktív állapotok | Az `aktiv` mezők csak igaz vagy hamis értéket vehetnek fel. |
| Kiemelések időtartama | A `vege` időpont nem lehet korábbi, mint a `kezdete` időpont. |

## Megjegyzések

A dokumentum adatmodell-tervként szolgál. Nem tartalmaz technikai implementációt, adatbázis-sémát vagy futtatható kódot.

## Találati lista rendezési logika

A tortakereső találati listájában a torták megjelenítési sorrendje a készlet- és kiemelési állapot alapján a következő:

1. kiemelt készleten lévő torták
2. sima készleten lévő torták
3. kiemelt rendelhető torták
4. sima rendelhető torták

## Tortakategóriák

Induló kategóriák:

* Születésnapi torta
* Gyerektorta
* Esküvői torta
* Ballagási torta
* Keresztelő torta
* Céges torta
* Egyedi torta
* Formatorta
* Fotótorta
* Sajttorta
* Mini torta
* Cukormentes torta
* Gluténmentes torta
* Vegán torta
* Mentes torta

## Keresési szűrők

A rendszer induláskor az alábbi keresési szűrőket támogassa:

* Város: a felhasználó egy adott település tortakínálatára szűkítheti a találatokat.
* Budapest kerület: budapesti keresés esetén a találatok egy konkrét kerületre korlátozhatók.
* Kategória: a torták a kiválasztott tortakategória alapján jeleníthetők meg.
* Készleten / Rendelhető: különválaszthatók az azonnal elérhető és az előrendeléssel kérhető torták.
* Ár: a találatok ár vagy ársáv alapján szűkíthetők.
* Szeletszám: a felhasználó a kívánt adagméretnek megfelelő tortákat keresheti.
* Kiemelt partner: csak azok a találatok jelennek meg, amelyek kiemelt partnerhez tartoznak.
* Kiemelt torta: csak a kiemeltként megjelölt torták jelennek meg a találati listában.

## Adatellenőrzési szabályok

Ez a fejezet a Mesetorta.hu későbbi adatellenőrzési szabályait rögzíti. A szabályok dokumentációs célúak: jelenleg nem jelentenek működő validációt, adatbázis-sémát, API-t vagy JavaScript ellenőrzést.

### Partner kötelező mezői

Partner rögzítésekor az alábbi adatok legyenek kötelezőek:

* partner neve,
* partner típusa,
* város,
* körzet / kerület, ha releváns,
* telefonszám vagy e-mail,
* státusz.

### Torta kötelező mezői

Torta rögzítésekor az alábbi adatok legyenek kötelezőek:

* torta neve,
* partner,
* állapot,
* város,
* körzet / kerület, ha releváns,
* ár,
* kategória,
* kép vagy placeholder kép,
* aktív / rejtett állapot.

### Készleten lévő torták kötelező mezői

Készleten lévő tortánál az általános tortaadatokon felül az alábbi mezők legyenek kötelezőek:

* készlet darabszám,
* átvételi információ,
* készlet lejárati ideje.

### Rendelhető torták kötelező mezői

Rendelhető tortánál az általános tortaadatokon felül az alábbi mezők legyenek kötelezőek:

* rendelési határidő,
* elkészítési idő,
* rendelési megjegyzés, ha szükséges.

### Város kötelező mezői

Város rögzítésekor az alábbi adatok legyenek kötelezőek:

* város neve,
* slug,
* megye,
* típus.

### Körzet kötelező mezői

Körzet, kerület vagy városrész rögzítésekor az alábbi adatok legyenek kötelezőek:

* város azonosító,
* körzet neve,
* slug,
* típus.

### Jelentkezés kötelező mezői

Partneri jelentkezésnél az alábbi adatok legyenek kötelezőek:

* név / cégnév,
* kapcsolattartó neve,
* telefonszám vagy e-mail,
* város,
* partner típusa,
* hozzájárulás.

### Kiemelés kötelező mezői

Kiemelés rögzítésekor az alábbi adatok legyenek kötelezőek:

* kiemelés típusa,
* kezdő dátum,
* záró dátum,
* státusz,
* legalább egy cél az alábbiak közül:
  * partner,
  * torta,
  * város,
  * körzet.

### Hibás adat példák

A későbbi ellenőrzéseknek többek között az alábbi hibás adatokat kell megakadályozniuk:

* torta ár nélkül,
* készleten torta lejárati idő nélkül,
* partner elérhetőség nélkül,
* város slug nélkül,
* kiemelés záró dátum nélkül,
* jelentkezés hozzájárulás nélkül.
