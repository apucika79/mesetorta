# Adatmodell

## Áttekintés

A Mesétorta rendszer adatmodellje a partnerek, torták, városok, kategóriák, kiemelések és jelentkezések nyilvántartására épül.

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
| cim | szöveg | A partner pontos címe vagy átvételi helye. |
| telefon | szöveg | Kapcsolattartási telefonszám. |
| email | szöveg | Kapcsolattartási e-mail-cím. |
| weboldal | szöveg | A partner saját weboldalának címe. |
| facebook | szöveg | A partner Facebook-oldalának címe. |
| instagram | szöveg | A partner Instagram-profiljának címe. |
| bemutatkozas | hosszú szöveg | Rövid bemutatkozó leírás a partnerről és szolgáltatásairól. |
| logo_url | szöveg | A partner logójának elérési útja vagy URL-je. |
| boritokep_url | szöveg | A partner profiljához tartozó borítókép elérési útja vagy URL-je. |
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
| ar | tizedes szám | A torta ára vagy induló ára. |
| meret | szöveg | A torta mérete, például átmérő, forma vagy súly alapján. |
| szeletszam | egész szám | A tortából várható szeletek száma. |
| iz | szöveg | A torta fő íze vagy ízkombinációja. |
| kategoria_id | egész szám | Hivatkozás arra a kategóriára, amelybe a torta tartozik. |
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

### varosok

A `varosok` entitás a szolgáltatási területek és települések alapadatait tartalmazza.

| Mező neve | Típus | Rövid leírás |
| --- | --- | --- |
| id | egész szám | Egyedi városazonosító. |
| nev | szöveg | A város vagy település neve. |
| slug | szöveg | Keresőbarát, URL-ben használható városazonosító. |
| megye | szöveg | A városhoz tartozó megye neve. |
| tipus | szöveg | A település típusa, például város, község, kerület vagy régió. |
| legkozelebbi_varos_id | egész szám | Hivatkozás egy közeli nagyobb városra vagy szolgáltatási központra. |

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
| tipus | szöveg | A kiemelés típusa, például főoldali, városi, kategóriaoldali vagy partnerkiemelés. |
| partner_id | egész szám | Hivatkozás a kiemelt partnerre, ha a kiemelés partnerhez kapcsolódik. |
| torta_id | egész szám | Hivatkozás a kiemelt tortára, ha a kiemelés tortához kapcsolódik. |
| varos_id | egész szám | Hivatkozás a városra, ahol vagy amelyhez kapcsolódva a kiemelés megjelenik. |
| kezdete | dátum és idő | A kiemelés kezdő időpontja. |
| vege | dátum és idő | A kiemelés záró időpontja. |
| aktiv | logikai érték | Jelzi, hogy a kiemelés jelenleg aktív-e. |

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
| uzenet | hosszú szöveg | A jelentkező által küldött szabad szöveges üzenet. |
| statusz | szöveg | A jelentkezés feldolgozási állapota, például új, kapcsolatfelvétel alatt, elfogadva vagy elutasítva. |

## Kapcsolatok

| Kapcsolat | Leírás |
| --- | --- |
| partnerek.varos_id → varosok.id | Egy partner egy elsődleges városhoz kapcsolódik. |
| tortak.partner_id → partnerek.id | Egy torta egy partnerhez tartozik. |
| tortak.kategoria_id → kategoriak.id | Egy torta egy kategóriába sorolható. |
| varosok.legkozelebbi_varos_id → varosok.id | Egy város opcionálisan kapcsolódhat egy közeli városhoz. |
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

## Validációk

| Terület | Javasolt szabály |
| --- | --- |
| Kötelező azonosítók | Minden entitásnál az `id` mező legyen egyedi és kitöltött. |
| Slug mezők | A `slug` mezők legyenek egyediek az adott entitáson belül, kisbetűsek és URL-barát formátumúak. |
| Kapcsolati mezők | A hivatkozott rekordoknak létezniük kell, például a `partner_id`, `varos_id` és `kategoria_id` mezők esetében. |
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
