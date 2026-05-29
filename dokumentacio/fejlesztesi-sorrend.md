# Fejlesztési sorrend

Ez a dokumentum a Mesétorta első MVP-verziójának fejlesztési sorrendjét rögzíti. A cél az, hogy a munka átlátható, ellenőrizhető lépésekben haladjon, és minden fejlesztési pontnál egyértelmű legyen a cél, az elkészítendő feladatok köre és a kész állapot feltétele.

## 1. Dokumentáció lezárása

**Cél:**
A projekt indulásához szükséges alapdokumentumok véglegesítése, hogy a fejlesztés közben ne kelljen alapvető üzleti vagy működési kérdéseket újranyitni.

**Mit kell elkészíteni:**

* a projekt céljának és MVP-határainak pontosítása,
* az oldaltípusok és fő funkciók végleges listája,
* a tartalmi és technikai döntések összefoglalása,
* a fejlesztési sorrend rögzítése,
* a későbbi funkciók elkülönítése az első verziótól.

**Mi számít kész állapotnak:**
A dokumentáció alapján egyértelműen eldönthető, hogy az első verzióba mi tartozik bele, milyen oldalak készülnek el, és mely funkciók maradnak későbbre.

## 2. Régi oldal archiválása

**Cél:**
A meglévő egyszerű oldal megőrzése úgy, hogy az új fejlesztés tiszta alapról indulhasson, de a korábbi tartalom és működés később is visszakereshető legyen.

**Mit kell elkészíteni:**

* a jelenlegi oldal fájljainak elkülönítése archivált állapotba,
* a régi működéshez tartozó fájlok és tartalmak azonosítása,
* annak dokumentálása, hogy az archívum csak referencia, nem aktív fejlesztési alap,
* az új projektstruktúra előkészítése a régi fájloktól függetlenül.

**Mi számít kész állapotnak:**
A régi oldal tartalma biztonságosan megmarad, de az új fejlesztés már nem erre épül közvetlenül, és egyértelmű, hol található az archív változat.

## 3. Új projektstruktúra létrehozása

**Cél:**
Olyan átlátható fájl- és mappastruktúra kialakítása, amely támogatja a későbbi komponenseket, oldalakat, adatfájlokat és stílusokat.

**Mit kell elkészíteni:**

* az új oldalak, komponensek és adatok helyének megtervezése,
* a közös elemek és oldal-specifikus elemek szétválasztása,
* a statikus adatok leendő helyének kijelölése,
* a dokumentáció és forrásfájlok logikus elkülönítése.

**Mi számít kész állapotnak:**
A projektben világosan látszik, hova kerülnek az oldalak, a közös komponensek, a design rendszer elemei és a próbaadatok.

## 4. Alap design rendszer kialakítása

**Cél:**
Egységes vizuális alap létrehozása, amely minden későbbi oldal és komponens megjelenését meghatározza.

**Mit kell elkészíteni:**

* az alap színek, betűtípusok és térközök meghatározása,
* gombok, címek, linkek és kártyák alapstílusainak rögzítése,
* reszponzív töréspontok alapelveinek megadása,
* az arculathoz illő hangulat és vizuális irány következetes használata.

**Mi számít kész állapotnak:**
A további oldalak úgy készíthetők el, hogy nem kell minden alkalommal újra dönteni az alapvető színekről, tipográfiáról, térközökről és komponensstílusokról.

## 5. Főoldal statikus váz

**Cél:**
A Mesétorta kezdőoldalának felépítése statikus tartalommal, amely bemutatja a szolgáltatás lényegét és a fő navigációs irányokat.

**Mit kell elkészíteni:**

* nyitó szekció fő üzenettel,
* kiemelt keresési vagy böngészési irányok,
* rövid bemutatkozó blokk,
* fő kategóriákra és listákra mutató belépési pontok,
* partner jelentkezésre vezető kiemelés.

**Mi számít kész állapotnak:**
A főoldal statikus állapotban végigjárható, érthetően kommunikálja a Mesétorta célját, és elvezet a legfontosabb aloldalak felé.

## 6. Torta kártya komponens

**Cél:**
Egységes torta megjelenítő elem létrehozása, amely több listaoldalon is újrahasználható.

**Mit kell elkészíteni:**

* tortanév, képhely, rövid leírás és ár megjelenítése,
* készleten vagy rendelhető állapot jelölése,
* cukrászda vagy partner nevének megjelenítése,
* város vagy átvételi hely feltüntetése,
* részletek gomb vagy link kialakítása.

**Mi számít kész állapotnak:**
A torta kártya egységesen használható a készleten, rendelhető és összes torta listaoldalakon, és minden fontos alapinformációt tartalmaz.

## 7. Készleten torták listaoldal

**Cél:**
Olyan listaoldal létrehozása, ahol a látogatók a rövid határidővel elérhető, készleten lévő tortákat tudják böngészni.

**Mit kell elkészíteni:**

* készleten torták oldalcím és bevezető szöveg,
* torta kártyák listanézete,
* alap szűrési vagy rendezési hely kijelölése,
* üres állapot megtervezése arra az esetre, ha nincs készleten torta,
* navigáció vissza a főbb oldalakra.

**Mi számít kész állapotnak:**
Az oldal statikusan megjeleníti a készleten lévő torták listáját, a felhasználó érti, mit lát, és egyértelmű, hogyan lehet egy torta részletei felé továbblépni.

## 8. Rendelhető torták listaoldal

**Cél:**
A rendelésre készülő torták külön listázása, hogy a látogatók lássák, milyen torták kérhetők előrendeléssel.

**Mit kell elkészíteni:**

* rendelhető torták oldalcím és magyarázó bevezető,
* torta kártyák rendelhető állapot szerinti megjelenítése,
* rendelési időre vagy előrendelési feltételekre vonatkozó információ helye,
* partnerhez vagy részletekhez vezető linkek,
* üres állapot megfogalmazása.

**Mi számít kész állapotnak:**
A látogató külön oldalon tudja böngészni az előrendelhető tortákat, és megérti, hogy ezek nem azonnal készleten lévő termékek.

## 9. Összes torta listaoldal

**Cél:**
Egy összesített tortaoldal kialakítása, ahol a készleten lévő és rendelhető torták egy helyen böngészhetők.

**Mit kell elkészíteni:**

* összes torta oldal címe és leírása,
* minden torta egységes kártyás listázása,
* készleten és rendelhető állapot vizuális megkülönböztetése,
* hely előkészítése későbbi szűrőknek,
* átlátható navigáció a kapcsolódó listaoldalakra.

**Mi számít kész állapotnak:**
Az oldal egyben mutatja a tortakínálatot, és a felhasználó azonnal meg tudja különböztetni a készleten lévő és rendelhető tortákat.

## 10. Cukrászdák listaoldal

**Cél:**
A Mesétortán szereplő cukrászdák és partnerek áttekinthető listázása.

**Mit kell elkészíteni:**

* cukrászdák listaoldal címe és bevezetője,
* partnerkártyák vagy egyszerű listanézet,
* cukrászda neve, városa és rövid bemutatkozása,
* partner adatlapra vezető link,
* üres vagy induló állapot kezelése kevés partner esetén.

**Mi számít kész állapotnak:**
A látogató át tudja tekinteni a partner cukrászdákat, és bármelyik partner adatlapjára tovább tud lépni.

## 11. Partner adatlap

**Cél:**
Egy adott cukrászda részletes bemutatása, a hozzá tartozó alapadatokkal és tortakínálattal.

**Mit kell elkészíteni:**

* partner neve, városa és bemutatkozó szövege,
* elérhetőségi vagy kapcsolatfelvételi információk helye,
* partnerhez tartozó torták listája,
* nyitvatartás vagy átvételi információk helye,
* visszalépési lehetőség a cukrászdák listájára.

**Mi számít kész állapotnak:**
A partner adatlap önállóan értelmezhető, bemutatja az adott cukrászdát, és megjeleníti a hozzá kapcsolódó tortákat vagy azok helyét.

## 12. Városoldal

**Cél:**
Város szerinti böngészési lehetőség biztosítása, hogy a látogatók helyi cukrászdákat és tortákat találjanak.

**Mit kell elkészíteni:**

* városoldal címe és rövid bevezetője,
* adott városhoz tartozó partnerek listája,
* adott városhoz kapcsolódó torták megjelenítése,
* városoldal üres állapotának megfogalmazása,
* linkek a partner adatlapokra és tortalistákra.

**Mi számít kész állapotnak:**
A felhasználó egy város alapján meg tudja nézni, milyen cukrászdák és torták érhetők el az adott helyen.

## 13. Partner jelentkezési oldal

**Cél:**
Olyan statikus oldal létrehozása, amely bemutatja a cukrászdáknak, hogyan és miért érdemes csatlakozniuk a Mesétortához.

**Mit kell elkészíteni:**

* partner jelentkezési oldal fő üzenete,
* előnyök és működési modell rövid bemutatása,
* jelentkezési feltételek vagy elvárások helye,
* kapcsolatfelvételi vagy érdeklődési űrlap helye,
* visszamutató linkek a főoldalra és cukrászdák oldalára.

**Mi számít kész állapotnak:**
A cukrászdák számára világos, mit kínál a Mesétorta, hogyan tudnak érdeklődni, és milyen információkra lesz szükség a csatlakozáshoz.

## 14. Admin alapfelület

**Cél:**
Egy belső, kezdetleges adminisztrációs felület vázának létrehozása a későbbi tartalomkezelés előkészítésére.

**Mit kell elkészíteni:**

* admin nyitóoldal vagy irányítópult váz,
* torták, partnerek és városok kezelésének belépési pontjai,
* statikus táblázat- vagy listahelyek,
* üres állapotok és alap műveleti gombok helye,
* jelölés arra, hogy az admin felület első körben csak alapváz.

**Mi számít kész állapotnak:**
Az admin alapfelület statikusan megmutatja, milyen tartalomtípusokat kell később kezelni, de még nem feltételez teljes jogosultságkezelést vagy működő háttérrendszert.

## 15. Próbaadatok bekötése

**Cél:**
A statikus oldalak feltöltése egységes próbaadatokkal, hogy a listák, kártyák és adatlapok valószerű tartalommal tesztelhetők legyenek.

**Mit kell elkészíteni:**

* próba tortaadatok,
* próba partneradatok,
* próba városadatok,
* kapcsolatok a torták, partnerek és városok között,
* hiányos vagy üres adatok kezelésének ellenőrzése.

**Mi számít kész állapotnak:**
Az oldalak nem üres sablonként jelennek meg, hanem következetes próbaadatokkal, amelyek alapján ellenőrizhető a megjelenés és a navigáció.

## 16. Mobilnézet javítása

**Cél:**
Az első verzió használhatóvá tétele mobiltelefonon és kisebb kijelzőkön.

**Mit kell elkészíteni:**

* főoldal mobil elrendezésének ellenőrzése,
* listaoldalak és kártyák mobilnézetének finomítása,
* navigáció használhatóságának javítása,
* szövegek, gombok és térközök ellenőrzése kis képernyőn,
* túlcsordulások és nehezen kattintható elemek javítása.

**Mi számít kész állapotnak:**
A fontos oldalak mobilon is olvashatók, navigálhatók és használhatók, vízszintes görgetés vagy széteső elrendezés nélkül.

## 17. Tesztelés

**Cél:**
Az MVP áttekintése és ellenőrzése kiadás előtt, különös tekintettel a navigációra, tartalomra, reszponzív megjelenésre és alap hibákra.

**Mit kell elkészíteni:**

* fő felhasználói útvonalak végigkattintása,
* oldalak közötti linkek ellenőrzése,
* próbaadatok megjelenésének ellenőrzése,
* mobil és asztali nézet gyors vizsgálata,
* ismert hibák és hiányosságok listázása.

**Mi számít kész állapotnak:**
Az első verzió fő oldalai végigjárhatók, a kritikus hibák javítva vannak, és a fennmaradó hiányosságokról ismert, hogy nem blokkolják az MVP kiadását.

## 18. GitHub főágba olvasztás

**Cél:**
A lezárt MVP-fejlesztés rendezett beolvasztása a GitHub főágába.

**Mit kell elkészíteni:**

* végső változások áttekintése,
* tesztek és ellenőrzések eredményének összegzése,
* commitok és pull request állapotának ellenőrzése,
* merge előtti konfliktusok kezelése,
* beolvasztás után a főág állapotának ellenőrzése.

**Mi számít kész állapotnak:**
Az MVP változásai a főágban vannak, a főág friss állapota ellenőrzött, és a további fejlesztés már erre az alapra építhető.

## Első MVP határai

Az első MVP célja a Mesétorta alapvető böngészési, bemutatkozási és partnermegjelenítési működésének kialakítása. A verzió tudatosan nem tartalmaz minden későbbi üzleti és közösségi funkciót.

Az első verzióban nincs:

* online fizetés,
* partner saját belépés,
* értékelés,
* kommentelés,
* receptoldal,
* magazin,
* automata számlázás.

Ezek a funkciók későbbi fejlesztési körökben kerülhetnek elő, miután az alap oldalstruktúra, a torta- és partnermegjelenítés, valamint az adminisztrációs irányok stabilan működnek.
