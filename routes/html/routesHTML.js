const express = require('express');
const router = express.Router();

// ~ Útvonalak: css ~\\
const kezdolapHTMLRoutes = require('./kezdolapHTML');
const leirasHTMLRoutes = require('./leirasHTML');
const loginHTMLRoutes = require('./loginHTML');
const adminleirasRoutes = require('./adminleirasHTML')
const registrationHTMLRoutes = require('./registrationHTML');
const adminkezdolapHTMLRoutes = require('./adminkezdolapHTML');
const editUsersHTMLRoutes = require('./editUsersHTML');

// ~ Akkor tölt be, ha a pdf fájlt nem találja (pdf mappában van) ~ \\
const fileNotFoundHTMLRoutes = require('./fileNotFoundHTML');
router.use('/', fileNotFoundHTMLRoutes);

router.use('/', kezdolapHTMLRoutes);
router.use('/', leirasHTMLRoutes);
router.use('/', loginHTMLRoutes);
router.use('/', adminleirasRoutes);
router.use('/', registrationHTMLRoutes);
router.use('/', adminkezdolapHTMLRoutes);
router.use('/', editUsersHTMLRoutes);


module.exports = router;