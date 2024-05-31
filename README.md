# eyever
Eyever egy szerverállapot megfigyelő,mely garantálja a valós időben a pontos megjelenítést.

Az eyever telepítése replitre:

1.Nyiss egy új projektet<br>
2.Importáld a projektet a következő címen:https://github.com/simrol/eyever.git<br>
3.Ha az importálás elkészűlt,add meg az indítást: node index.js<br>
4. Ha nem működne valami akkor gyere a hivatalos eyever szerverre! https://discord.gg/nwPWMx74qb<br>
<br>
Hibaelhárítások:<br>
<br>
Amennyiben a projekt nem telepíti magától a node modulokat,azokat egy paranccsal tudod telepíteni.<br>
npm install <--- az összes modul amit a projekt használ,telepíti<br>
Ha a projekt hibaként az express modult írja,hogy nincs telepítve,akkor írd be ezt: npm install express<br>
<br>
Ez a verzió még béta,de ha sikerűl befejeznem akkor kiteszem az egészet :D<br>
<br>
Demo:https://replit.com/@RolandSimon1/eyever<br>
<br>
Útvonalak melyről az adatokat olvassuk le:<br>
<br>
/system <--- Erről az útvonalról a rendszer alapvető adatait olvassuk le,mint pl a ram és a processzor használata,vagy hány MB szabadmemória áll rendelkezésre.<br>
/disk <--- Erről az útvonalról pedig a tárhely avagy particiók adatait olvassuk le.<br>
<br><br>

Funkciók:<br>

Az eyever képes az összes egységes szerver és rendszer információkat beolvasni és lekérni,azt egységesen.<br>
De miket is képes beolvasni?<br>
-Processzor használat<br>
-Memória,vagy is ram használat<br>
-Memória szabad egységét<br>
-És az összes létező partició információt
<br>(Lesznek még további információk,csak a dizájn miatt nem igazán tudtam elhelyezni a változókat.)<br>
t
