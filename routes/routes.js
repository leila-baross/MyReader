const express = require('express');
const router = express.Router();

// ---------------------------------------------------------------------------------------------------- \\

// ~ Útak: HTML ~ \\
const htmlRoutes = require('./html/routesHTML');
router.use('/', htmlRoutes);

// ---------------------------------------------------------------------------------------------------- \\

// ~ Útak: BOOTSTRAP ~ \\
const bootstrapRoutes = require('./bootstrap/bootstrap');
router.use('/', bootstrapRoutes);

// ---------------------------------------------------------------------------------------------------- \\

// ~ Útak: CSS ~ \\
const cssRoutes = require('./css/routesCSS');
router.use('/', cssRoutes);

// ---------------------------------------------------------------------------------------------------- \\

//const jsRoutes = require('./js/routesJS');
//router.use('/', jsRoutes);

// ~ Útvonalak: JS elérések ~ \\

// ~ Sötét - Világos mód ~ \\
const darkmodeJSRoutes = require('./js/darkmode');
router.use('/', darkmodeJSRoutes);

// ~ Frontend ~ \\
const frontendJSRoutes = require('./js/frontend');
router.use('/', frontendJSRoutes);

// ~ Bejelentkezés ~ \\
const loginJSRoutes = require('./js/login');
router.use('/', loginJSRoutes);

// ~ Regisztráció ~ \\
const registrationJSRoutes = require('./js/registration');
router.use('/', registrationJSRoutes);

// ~ Kijelentkezés ~ \\
const logoutJSRoutes = require('./js/logout');
router.use('/', logoutJSRoutes);

// ~ Offcanvas profil szerkesztés ~ \\
const editUserJSRoutes = require('./js/editUser');
router.use('/', editUserJSRoutes);

// ~ egy felhasználó adatainak lekérdezése ~ \\
const getUserJSRoutes = require('./js/getUser');
router.use('/', getUserJSRoutes);

// ~ vizsgálja, hogy a profil létezik-e, van-e hozzáférése ~ \\
const getUSerEmailJSRoutes = require('./js/getUserEmail');
router.use('/', getUSerEmailJSRoutes);

// ~ Offcanvas módosítása (Felhasznlónév, jelszó, születésnap) ~ \\
const profileJSRoutes = require('./js/profile');
router.use('/', profileJSRoutes);

// ~ Admin oldali --> Felhasználók közötti keresés szempontok szerint ~ \\
const editUsersJSRoutes = require('./js/editUsers');
router.use('/', editUsersJSRoutes);

// ~  User könyv lekérdezés ~ \\
const userJSRoutes = require('./js/user.js');
router.use('/', userJSRoutes);

// ~  User könyv keresés ~ \\
const keresesKonyvekJSRoutes = require('./js/keresesKonyvekJS.js');
router.use('/', keresesKonyvekJSRoutes);

// ~  Könyv leírások ~ \\
const leirasokJSRoutes = require('./js/leirasokJS.js');
router.use('/', leirasokJSRoutes);

// ~  Könyv leírások keresése ~ \\
const leirasKereseseJSRoutes = require('./js/leirasKereseseJS.js');
router.use('/', leirasKereseseJSRoutes);

// ~  Admin könyv lekérdezés ~ \\
const adminJSRoutes = require('./js/adminJS.js');
router.use('/', adminJSRoutes);

// ~  Admin könyv törlése ~ \\
const konyvTorlesJSRoutes = require('./js/konyvTorlesJS.js');
router.use('/', konyvTorlesJSRoutes);

// ~  Admin könyv szerkesztése ~ \\
const konyvSzerkesztesJSRoutes = require('./js/konyvSzerkesztesJS.js');
router.use('/', konyvSzerkesztesJSRoutes);

// ~  Admin könyv felvétele ~ \\
const ujKonyvJSRoutes = require('./js/ujKonyvJS.js');
router.use('/', ujKonyvJSRoutes);

// ---------------------------------------------------------------------------------------------------- \\

// ~ Útak: DATAS ~ \\

// ~ SQL lekérdezések ~ \\
const lekerdezesekDataRoutes = require('./datas/lekerdezesek');
router.use('/', lekerdezesekDataRoutes);

// ~ Bejelentkezés ~ \\
const loginRoutes = require('./datas/login');
router.use('/', loginRoutes);

// ~ Kijelentkezés ~ \\
const logoutDataRoutes = require('./datas/logout');
router.use('/', logoutDataRoutes);

// ~ Regisztráció ~ \\
const registrationDataRoutes = require('./datas/registration');
router.use('/', registrationDataRoutes);

// ~ Offcanvas profil szerkesztés ~ \\
const editUserDataRoutes = require('./datas/editUser');
router.use('/', editUserDataRoutes);

// ~ egy felhasználó adatainak lekérdezése ~ \\
const getUserDataRoutes = require('./datas/getUser');
router.use('/', getUserDataRoutes);

// ~ vizsgálja, hogy a profil létezik-e, van-e hozzáférése ~ \\
const getUserEmailDataRoutes = require('./datas/getUserEmail'); 
router.use('/', getUserEmailDataRoutes);

// ~  oldal látogatók lekérdezése (szerepkör szerkesztése, profil törlése) ~ \\
const editAllUserRoutes = require('./datas/editAllUser.js');
router.use('/', editAllUserRoutes);

// ---------------------------------------------------------------------------------------------------- \\

module.exports = router;