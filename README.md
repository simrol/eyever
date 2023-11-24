# eyever
Eyever egy szerverállapot megfigyelő,mely garantálja a valós időben a pontos megjelenítést.

Az eyever telepítése replitre:

1.Nyiss egy új projektet
2.Importáld a projektet a következő címen:https://github.com/simrol/eyever.git
3.Ha az importálás elkészűlt,add meg az indítást: node index.js
4. Ha nem működne valami akkor gyere a hivatalos eyever szerverre! https://discord.com/invite/k7ypbtYj9F

Hibaelhárítások:

Amennyiben a projekt nem telepíti magától a node modulokat,azokat egy paranccsal tudod telepíteni.
npm install <--- az összes modul amit a projekt használ,telepíti
Ha a projekt hibaként az express modult írja,hogy nincs telepítve,akkor írd be ezt: npm install express

Ez a verzió még béta,de ha sikerűl befejeznem akkor kiteszem az egészet :D

Demo:https://eyever.rolandsimon1.repl.co/dashboard

Útvonalak melyről az adatokat olvassuk le:

/system <--- Erről az útvonalról a rendszer alapvető adatait olvassuk le,mint pl a ram és a processzor használata,vagy hány MB szabadmemória áll rendelkezésre.
/disk <--- Erről az útvonalról pedig a tárhely avagy particiók adatait olvassuk le.


Funkciók:

Az eyever képes az összes egységes szerver és rendszer információkat beolvasni és lekérni,azt egységesen.
De miket is képes beolvasni?
-Processzor használat
-Memória,vagy is ram használat
-Memória szabad egységét
-És az összes létező partició információt(Lesznek még további információk,csak a dizájn miatt nem igazán tudtam elhelyezni a változókat.)
