-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 192.168.255.103
-- Létrehozás ideje: 2024. Ápr 30. 18:19
-- Kiszolgáló verziója: 10.11.4-MariaDB-log
-- PHP verzió: 8.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `s104_db`
--
CREATE DATABASE IF NOT EXISTS `s104_db` DEFAULT CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci;
USE `s104_db`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `book`
--

CREATE TABLE `book` (
  `book_id` int(11) NOT NULL COMMENT 'könyv azonosítója',
  `book_writer_id` int(11) NOT NULL COMMENT 'író azonosítója',
  `book_title` text NOT NULL COMMENT 'könyv cím',
  `book_publisher` varchar(255) DEFAULT NULL COMMENT 'kiadó neve',
  `book_path` text DEFAULT NULL COMMENT 'könyvek elérésiútja',
  `book_pic` text DEFAULT NULL COMMENT 'borító',
  `book_genre` varchar(255) DEFAULT NULL COMMENT 'műfajok',
  `book_sub` text DEFAULT NULL COMMENT 'fülszöveg',
  `rating` decimal(10,1) DEFAULT 0.0 COMMENT 'a könyv értékelésének átlaga'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_hungarian_ci;

--
-- A tábla adatainak kiíratása `book`
--

INSERT INTO `book` (`book_id`, `book_writer_id`, `book_title`, `book_publisher`, `book_path`, `book_pic`, `book_genre`, `book_sub`, `rating`) VALUES
(23, 4, 'Boldogság', 'Könyvmolyképző Kiadó', 'fileNotFound.html', 'no_image.jpg', 'Szerelmes regény, Fantasy-irodalom', 'A MÚLT ÚJRAÍRHATÓ…\r\nDE MILYEN ÁRON?\r\nA vaksötét égbolton szárnysuhogás hallik…\r\nLuce és Daniel ideje, akárcsak a homokórán gyorsan pergő kvarcszemek, vészesen fogy. Ahhoz, hogy meghiúsíthassák Lucifer a múlt eltörlésére irányuló tervét, időben meg kell találniuk az angyalok földre érkezésének pontos helyét.\r\nSötét erők üldözik őket, ám Daniel maga sem tudja, képes-e tovább folytatni… örökre együtt tud-e élni azzal, hogy Luce-t újra meg újra elveszíti. Közösen kellene felvenniük a harcot a rájuk váró epikus küzdelemben, amelynek végén csak élettelen testek és… angyalpor marad, miközben hatalmas áldozatok hozatnak, és szívek törnek darabokra.\r\nLuce ekkor eszmél rá az elkerülhetetlenre: megérti, hogy a sors nem is Danielnek, hanem valaki másnak rendelte! A fejükre hozott átok mindig is csupán Luce-ról szólt… róla és a rég elhagyott szerelméről. És voltaképp csak az számít, hogy most milyen döntést hoz.\r\nKi nyeri vajon végül a Luce-ért folyó csatározást?\r\nA Rapture – Boldogság a FALLEN SOROZAT káprázatos befejezése. A menny nem várhat tovább.\r\n', 3.0),
(24, 4, 'Megbocsátás', 'Könyvmolyképző Kiadó', 'Lauren_Kate_Fallen_Unforgiven_Megbocsátás.pdf', 'megbocsatas.png', 'Szerelmes regény, Fantasy-irodalom', 'A szerelmeddel élni maga a Mennyország.\r\nElszakítva lenni tőle maga a Pokol.\r\nCam vajon hová kerül?\r\n\r\nCam tudja, milyen a megszállottság. Több időt töltött a Pokolban, mint amennyit egy angyalnak szabad volna. Számára a legújabb pokol egy gimnázium, ahol Lilith - az egyetlen lány, akit szeret - az ő bűneiért vezekel.\r\n\r\nCam alkut köt Luciferrel. Tizenöt napja marad, hogy a kiválasztottja újra belé szeressen. Ha sikerül, Lilith visszatérhet a világba, és Cammel élheti le az életét. De ha kudarcot vall..., Camet a Pokolban egy külön a számára fenntartott hely várja.\r\nTikk-takk.\r\n\r\nA népszerű sorozat újabb kötete, egy önmagában is izgalmas ifjúsági regény szerelemmel, földöntúli lényekkel és fordulatos cselekménnyel.\r\n\r\nBontsd ki a szárnyad, és repülj, míg a rosszfiú, a sötét angyal végre feltárja meggyötört szívét az Unforgiven / Megbocsátás című, nagyszerű regényben.\r\n', 3.0),
(25, 3, 'Titkos keresztes háborúk', 'FuMax Kiadó', 'OLIVER_BOWDEN_Titkos_keresztes_haboruk.pdf', 'titkos_keresztes_haboruk.png', 'Szórakoztató irodalom, Fantasy', 'Marco atyja, Niccolo Polo végre elmeséli a történetet, amelyet egész élete során titokban tartott - Altair, a Testvériség egyik legkiválóbb orgyilkosának élettörténetét. Altair kalandos újta során nemcsak a Szentföldet járja be keresztül-kasul, de az Orgyilkosok krédójának valódi értelme is megvilágosodik előtte. Hogy elkötelezettségét bizonyítsa, a rend kilenc halálos ellenségével kell végeznie, beleértve a templomosok nagymesterét, Robert de Sable-t is. Altair életének története most először olvasható a maga teljességében: a történelem menetét megváltoztató küldetése, véget nem érő küzdelme a templomosok összeesküvése ellen, családja tragikus és egyben megrendítő sorsa, és egy régi jó barát végzetes árulása.\r\n', 3.0),
(26, 3, 'Reneszánsz', 'FuMax Kiadó', 'OLIVER_BOWDEN_Reneszansz.pdf', 'reneszansz.png', 'Szórakoztató irodalom, Fantasy', 'Bosszút állok mindazokon, kik elárulták családomat. Nevem: Ezio Auditore Da Firenze. Orgyilkos vagyok. - Egy bosszúra szomjas fiatalember eposzi méretű küldetésre indul, miután Itália uralkodó dinasztiái elárulták őt. Ám ahhoz, hogy visszaállítsa családja becsületét, és véget vessen hazája romlásának, ki kell tanulnia az orgyilkosok mesterségét. Miközben a szabadságért és igazságért harcol, Ezio útját olyan kiváló elmék segítik, mint Leonardo da Vinci és Niccol Machiavelli, akik mint koruk legbölcsebb gondolkodói beavatják a túlélés fortélyaiba. Társai számára Ezio fogja megtestesíteni az erőt, mely elsöpri a régit, és újat hoz a helyébe. Ellenségei szemében pedig fenyegető jelképpé válik, kinek rendeltetése, hogy eltiporja a zsarnokságot, mely Itália népét sanyargatja. Kezdődjék a hatalom, az összeesküvés és a bosszú örök színjátékának reneszánsz krónikája. Hiszen az igazságot vérrel írják. Az Ubisoft nagysikerű videojátéka alapján!\r\n', 4.0),
(33, 5, 'Angyali szövetség', 'Maxim Könyvkiadó Kft.', 'Angyali_szovetseg_WENDY_HIGGINS.pdf', 'angyali_szovetseg.png', 'Szórakoztató irodalom, Fantasy', 'Anna, egy őrangyal és egy démon lánya megfogadta, hogy soha nem követi apja példáját, nem rontja meg az embereket. Naivitás volt ez tőle. Ahogy sok minden más is. A suttogók rákényszerítik, hogy a túlélése érdekében megszegje fogadalmát, akkor is, ha ezzel engednie kell lénye sötét oldalának, és hírhedtté válni iskolatársai között. Élete sivárabbnak tűnik, mint valaha. Ráadásul ott van Kaidan Rowe is, a Bujaság hercegének fia, tölti be minden gondolatát. Mikor aztán váratlanul tudomást szerez egy réges-régi jövendölésről, a világot kezdi járni Kopano, a Harag hercegének fia kíséretében, hogy megszervezze a démonokkal szembeni ellenállást. Hamarosan kiderül ugyanis, hogy az óriások felszabadítása nem mehet vérre menő küzdelem nélkül. A végső győzelemig Annának és Kaidannak félre kell tenniük érzéseiket, és leküzdeniük életük legnagyobb kísértését. Vajon megéri-e életüket kockáztatniuk a szerelemért?\r\nA regény a Sweet Evil trilógia második része. Olvasd el az első részt, az Angyali gonoszt is!\r\n', 4.0),
(34, 5, 'Angyali gonosz', 'Maxim Könyvkiadó Kft.', 'WENDY_HIGGINS_ANGYALI_GONOSZ.pdf', 'angyali_gonosz.png', 'Szórakoztató irodalom, Fantasy', 'A tiltott gyümölcs a legédesebb. Mi lenne, ha élnének olyan kamaszok, akik születésüktől fogva elátkozottak? A bukott angyalok leányai és fiai ezzel a sorssal szembesülnek. A jólelkű Anna Whitt hatodik érzékkel született, színek kavalkádjaként látja mások érzéseit. Jól ismeri lényének ellentmondásait, hiszen megmagyarázhatatlanul vonzza a veszély. Akaratereje nehéz próba elé kerül, amikor tizenhatodik életévét betöltve megismeri a szexi Kaidan Rowe-t. A fiú bevezeti félelmetes közös örökségük titkaiba. Az efféle démonikus srácok azok, akiktől téged is távol tartanak a szüleid. Bárcsak Annát is idejében figyelmeztetné valaki! Vajon mit választ, amikor szembe kell néznie végzetével: a szentek glóriáját vagy ördögszarvakat? A regény a Sweet sorozat nyitókötete.\r\n', 4.0),
(35, 5, 'Angyali győzelem', 'Maxim Könyvkiadó Kft.', 'fileNotFound.html', '20240429_20240313_20240304_20240304_szerelemben.png', 'Szórakoztató irodalom, Fantasy', 'Eljött az idő a leszámolásra. A jóslat hamarosan beteljesedik, és bár egyre több szövetségese akad Annáéknak, de a fenyegetés is nő. A hercegek minden eszközt bevetnek, hogy megállítsák a lázadó óriásokat. Nem kímélve senkit és semmit, főképp nem saját gyermekeiket. És ahogy minden háború, ez is komoly áldozatokkal jár.\r\nA helyzet egyre kiélezettebb, a nyugtalanság és a félelem lassan mindenkit felőröl. Miközben Anna menteni próbálja szeretteit, maga válik a fő célponttá. Minden percről percre változik körülötte, és senkiben sem bízhat. Mikor a Bujaság hercege ellene küldi szerelmét, Kaidan Rowe-t, el kell döntenie, mennyit kockáztat.\r\nAhogy az utolsó óra közeledik, úgy nő a feszültség. Anna egyre nagyobb kockázatot vállal, de ezzel a küldetés sikerét is veszélybe sodorja. Egyedül óriásbarátaira számíthat, de vajon elég lesz-e ez a maroknyi csapat, hogy a végső ütközetben győzelmet arasson?\r\nA sorozat legérzékibb és legpörgősebb kötete újra összegyűjti az óriásokat, hogy kivívják szabadságukat.', 4.5),
(67, 2, 'A herceg', 'Könyvmolyképző Kiadó Kft.', 'Cassandra_Clare_Pokoli szerkezetek_A_herceg.pdf', '1708335333939_herceg.png', 'Szerelmes regény, Fantasy-irodalom', 'A Viktória-korabeli London mágiával átszőtt alvilágában Tessa Gray végre biztonságban érezheti magát az árnyvadászok körében. Ez a biztonság azonban múlandónak bizonyul: a Klávé szakadár tagjai terveket szőnek Charlotte leváltására az Intézet éléről. Ha Charlotte elveszti a pozícióját, Tessa az utcára kerül, és könnyű zsákmánya lesz a titokzatos Magiszternek, aki saját sötét céljai érdekében akarja felhasználni Tessa képességeit.', 4.0),
(68, 2, 'Az angyal', 'Könyvmolyképző Kiadó Kft.', 'WENDYHIGGINSANGYALIGYOZELEM.pdf', '1708335475853_angyal.jpg', 'Szerelmes regény, Fantasy-irodalom', 'A mágia veszélyes - de a szerelem még veszélyesebb.\r\nAmikor a tizenhat éves Tessa Gray Viktória királynő uralkodása idején megérkezik Angliába, valami rettenetes vár rá a londoni Alvilágban, ahol vámpírok, boszorkánymesterek és más természetfeletti lények járják az utcákat a gázlámpák alatt. Teslának nincsenek barátai, és egyetlen pillanatra sem érezheti magát biztonságban, ezért menedéket kér az Árnyvadászoktól, akiknek egyetlen célja, hogy megszabadítsák a világot a démonoktól. Ahogy egyre mélyebben merül a világukba, a lány azt veszi észre, hogy egyszerre varázsolja el két legjobb barát, és nem sokára rá kell döbbennie, hogy a szerelem a legveszélyesebb varázslat mind közül.', 4.0),
(129, 78, 'Caraval', 'Kolibri Gyerekkönyvkiadó', 'StephanieGarberCaraval1Caraval.pdf', '20240430_caraval.png', 'Fantasy-irodalom', 'Egy legendás versengés...\r\nEgy magával ragadó románc...\r\nKét lánytestvér eltéphetetlen köteléke...\r\n\r\nScarlett Dragna eddig még egyetlen napot sem töltött távol attól a kicsi szigettől, ahol ő és a húga, Tella, hatalmaskodó, kegyetlen apjuk keze alatt felnövekedtek. A történet azzal indul, hogy az apa házasságra kényszerítené Scarlettet, ami egyszeriben véget vetne a lány hosszú évek óta tartó álmodozásának a messzi szigeten zajló Caravalról, a földkerekség legvarázslatosabb előadásáról, amelynek közönsége szintén a játék résztvevőjévé válhat.\r\nAzonban épp ebben az évben végül megérkezik a várva várt meghívó, amiről Scarlett annyit álmodozott. Tella elhatározza, hogy elmegy a Caravalra, és egy titokzatos matrózzal elraboltatja Scarlettet is. Csakhogy amint odaérnek, kiderül, hogy Tella eltűnt: az ő elrablója a Caraval ördögien mesteri szervezője, Legend. Scarlett hamarosan megérti, hogy a húga az idei Caraval kulcsfigurája, az egész játék körülötte forog: az lesz a győztes, aki Tellát megtalálja.\r\nScarlett többször is végighallgatja a figyelmeztetést: bármi is történjék a Caraval során, az mind csak a fantasztikusan kidolgozott előadás része, de ő, szegény, még be se lépett, máris bábuként kezd lépkedni a mágia és a szívfájdító szerelem sakktábláján. Hanem akármi is a Caraval, valóság vagy sem, neki mindenképp meg kell találnia a húgát, mielőtt véget érne a játék utolsó, ötödik éjszakája, máskülönben a beinduló veszélyes dominóhatásra Tella örökre eltűnik a világból.\r\nIsten hozott, légy üdvözölve a Caravalban! De légy óvatos, nehogy túl messzire röpítsen a képzeleted!\r\nA Kolibri Kiadó gondozásában már megjelent a Caraval folytatása, a Legendary is!', 0.0),
(132, 81, 'Maradj motivált!', 'Good Life Books', 'fileNotFound.html', '20240430_maradj.png', 'Életmód, egészség', 'Nehezen motiválod magad? Úgy érzed, elakadtál, és képtelen vagy elvégezni a legfontosabb feladataidat? Nem tudod hosszú távon fenntartani a motivációt?\r\n\r\nHa igen, itt az ideje, hogy változtass, és visszaszerezd a motivációd!\r\n\r\nThibaut Meurisse segít neked abban, hogy visszakapd a belső lendületed! A Maradj motivált világos és tömör útmutató, amely megmutatja lényegre törő útmutatásain keresztül, hogyan építsd fel a motivációt és hogyan győzd le a halogatást. Ennek eredményeképpen megszűnik a bűntudat, a motivációd növekedni fog, és sokkal több célodat tudod elérni, mint ahogyan azt eddig gondoltad.\r\n\r\nA következőket fedezheted fel a könyvben:\r\n- azt az egy dolgot, amit most azonnal meg kell tenned, hogy kimássz a gödörből és visszanyerd a motivációdat;\r\n- hogyan tedd rendbe az elméd és a környezeted, hogy visszatérhessen a belső lendületed;\r\n- 25 egyszerű, mégis erőteljes stratégiát, amivel visszanyerheted a motivációdat;\r\n- egy egyszerű módszert, amellyel növelheted az önbecsülésed és gyorsan visszaszerezheted a motiváltságodat;\r\n- egy hatékony keretrendszert a lendület kialakításához és a motiváció hosszú távú fenntartásához, és\r\n- sok más hasznos technikát céljaid eléréséhez.\r\n\r\nA Maradj motivált kötelező olvasmány a motiváció visszaszerzéséhez és a kívánt élet eléréséhez. Ha szereted a könnyen megvalósítható stratégiákat, a praktikus gyakorlatokat és a lényegre törő útmutatásokat, akkor ez a könyv tetszeni fog neked.', 0.0),
(135, 84, 'Bűn és bűnhődés', 'Gabo Könyvkiadó És Keresk.Kft.', 'DosztojevszkijBunesbunhodesFordSzaboE9789633641583EPUB.epub', '20240430_bun.png', 'Lélektani regény', 'Vári Erzsébet új fordítása 2004-ben jelent meg először, munkájában a régebbi, archaizáló nyelv helyett az új, városi stílust használja. Így ír stílusválasztásáról:\r\n\r\n\"Az újabb kutatások azt is bizonyítják, hogy Dosztojevszkij korának szinte minden nyelvi rétegéből merített írás közben (...) gyakran a szleng határát súroló pétervári mindennapi beszédmód elemeit, sőt barátai vagy saját önálló szóhasználatait is beépítette művébe. Ezenközben szándékosan nemegyszer tartózkodott az egyértelmű, lezárt nyelvi megoldásoktól is. (...) A mű többértelműsége és a nyelv és a nyelvfelfogás folyamatos változása miatt van szükség mindig újabb és újabb fordításokra - újraértelmezésekre.\"\r\n\r\nVári Erzsébet', 0.0),
(138, 87, 'Hamlet, dán királyfi', 'Akkord Kiadó Kft.', 'ShakespeareWHamletdankiralyfiFordAranyJ9789633641897EPUB.epub', '20240430_hamlet.png', 'Dráma', 'A Hamlet (1601), talán legismertebb, legtöbbet játszott műve Shakespeare-nek. Középpontjában az élet kínálta, s mindenkiben fölmerülő kérdés áll: \"Lenni vagy - nem lenni?\", és ha lenni - hogyan? Mi az emberi cselekvés végső határa a vélt vagy valós hiba, netán bűn helyrehozatalához? Egyáltalán van-e igazi létezés, s ha van, az mennyire lehet veszélyes a létezőre? Vívódó, töprengő alkotás a dráma, miként a főszereplő maga. Hamlet késleltetett bosszúját hosszas önmarcangoló kérdéselvetések, bizonyságkéresésék előzik meg. Végül igazságot szolgáltat, de ő is belepusztul. Tűrni vagy ellenszegülni? A reneszánsz ember dilemmája örökérvényű! Mert a cselekvés erkölcsileg legvitathatóbb pontja az emberi élet kioltása. Van-e joga valakinek - ha oka van is - ölni? Következmények nélkül semmi sem vállalható, különösen nem a pusztítás. De van-e joga az embernek vélt vagy valós igaza tudatában nem cselekedni, nem vállalni a tett kockázatát? Mennyire tartozunk felelősséggel a külvilág és saját lelkiismeretünk előtt? Hamlet tettével válaszol a kérdésekre, ám az egész dráma nem ad egyértelmű feleletet. Nem is adhat. Remekművek; géniuszok és a természet sajátossága a talányosság... Nem beszélve arról, hogy a mindennapok kisebb-nagyobb döntéseit mindenkinek magának kell meghoznia.', 0.0);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `rating`
--

CREATE TABLE `rating` (
  `ratingID` int(11) NOT NULL COMMENT '	Az értékelés azonosítója',
  `rating` decimal(10,1) NOT NULL COMMENT 'az adott könyv értékelésének átlaga egy adott felhasználótól',
  `userID` int(11) NOT NULL COMMENT '	a felhasználó azonosítója',
  `bookID` int(11) NOT NULL COMMENT '	a könyv azonosítója'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_hungarian_ci;

--
-- A tábla adatainak kiíratása `rating`
--

INSERT INTO `rating` (`ratingID`, `rating`, `userID`, `bookID`) VALUES
(2, 4.0, 12, 23),
(4, 2.0, 13, 23),
(5, 3.0, 12, 24),
(7, 4.0, 12, 25),
(8, 3.0, 12, 34),
(9, 4.0, 12, 33),
(10, 3.0, 12, 26),
(11, 4.0, 12, 68),
(12, 3.0, 12, 67),
(14, 3.0, 13, 24),
(15, 2.0, 13, 25),
(16, 5.0, 13, 34),
(17, 5.0, 13, 35),
(18, 4.0, 13, 33),
(19, 5.0, 13, 26),
(20, 4.0, 13, 68),
(21, 5.0, 13, 67),
(22, 4.0, 12, 35);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `email` varchar(60) NOT NULL,
  `nick_name` varchar(20) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` tinyint(1) NOT NULL,
  `user_image` varchar(255) NOT NULL,
  `birthday` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_hungarian_ci;

--
-- A tábla adatainak kiíratása `user`
--

INSERT INTO `user` (`user_id`, `email`, `nick_name`, `password`, `role`, `user_image`, `birthday`) VALUES
(9, 'horvath.szilvia2005@gmail.com', 'Leila', '$2b$10$WnyJxUqivzMPZrkpK/hSP.IFoJEhoITLM2Z5qVvSZWboBc8rTzROW', 1, '20240429_admin.jpg', '2005-04-10'),
(11, 'user@user.hu', 'User', '$2b$10$23TTt3HMhDqAnPP2qGB0HOfbYMeccyyDuNkuBJqxQVz5JMSc/C1eO', 0, '20240321_20240313_20240308_2024_03_05_2024_03_04_images.png', '2024-03-20'),
(12, 'user@teszt.hu', 'User', '$2b$10$J9/1dXUZDABBQiSfjp6OMe1MbzwBMHjJKIovjXhS0kt6gZ0NCF5ZW', 0, '20240429_minta2.PNG', NULL),
(13, 'user2@gmail.com', 'user2', '$2b$10$w9IMkuXNLfNKKFt8ue5nyO5y/qojUsxOs6Iq59.smZ5FWI8haf88a', 0, '20240405_20240313_20240308_2024_03_05_2024_03_04_images.png', NULL);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `writer`
--

CREATE TABLE `writer` (
  `writer_id` int(11) NOT NULL,
  `writer_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_hungarian_ci;

--
-- A tábla adatainak kiíratása `writer`
--

INSERT INTO `writer` (`writer_id`, `writer_name`) VALUES
(1, 'Lisa Jane Smith'),
(2, 'Cassandra Clare'),
(3, 'Oliver Bowden'),
(4, 'Lauren Kate'),
(5, 'Wendy Higgins'),
(42, 'ttttewrew'),
(43, 'tanár bá'),
(44, 'értelmetlen szerző'),
(45, 'dsf'),
(46, 'én'),
(47, 'teszt'),
(48, 'teszt szerző'),
(49, 'g szerző'),
(50, 't szerző'),
(51, 'edit szerző'),
(52, 'editt szerző'),
(53, 'zsír  szerző'),
(54, 'zsírg g szerző'),
(55, 'test szerző'),
(56, 'zsír test szerző'),
(57, ''),
(58, 'dsfsadf'),
(59, 'asd'),
(60, 'asd2'),
(63, 'teszt elek'),
(66, 'gfd'),
(69, 'Valaki'),
(72, 'grg'),
(75, 'dasdad'),
(78, 'Stephanie Garber'),
(81, 'Thibaut Meurisse'),
(84, 'Fjodor Mihajlovics Dosztojevszkij'),
(87, 'William Shakespeare');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`book_id`),
  ADD KEY `book_writer_id` (`book_writer_id`);

--
-- A tábla indexei `rating`
--
ALTER TABLE `rating`
  ADD PRIMARY KEY (`ratingID`),
  ADD KEY `userID` (`userID`,`bookID`),
  ADD KEY `bookID` (`bookID`);

--
-- A tábla indexei `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- A tábla indexei `writer`
--
ALTER TABLE `writer`
  ADD PRIMARY KEY (`writer_id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `book`
--
ALTER TABLE `book`
  MODIFY `book_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'könyv azonosítója', AUTO_INCREMENT=141;

--
-- AUTO_INCREMENT a táblához `rating`
--
ALTER TABLE `rating`
  MODIFY `ratingID` int(11) NOT NULL AUTO_INCREMENT COMMENT '	Az értékelés azonosítója', AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT a táblához `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT a táblához `writer`
--
ALTER TABLE `writer`
  MODIFY `writer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=90;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `book`
--
ALTER TABLE `book`
  ADD CONSTRAINT `book_ibfk_2` FOREIGN KEY (`book_writer_id`) REFERENCES `writer` (`writer_id`);

--
-- Megkötések a táblához `rating`
--
ALTER TABLE `rating`
  ADD CONSTRAINT `rating_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `user` (`user_id`),
  ADD CONSTRAINT `rating_ibfk_2` FOREIGN KEY (`bookID`) REFERENCES `book` (`book_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
