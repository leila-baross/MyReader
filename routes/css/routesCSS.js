const express = require('express');
const router = express.Router();

// ~ Útvonalak: css ~\\
const lightmodeCSSRoutes = require('./lightmodeCSS');
const loginCSSRoutes = require('./loginCSS');
const adminCSSRoutes = require('./adminCSS');
const regCSSRoutes = require('./regCSS');
const adminLeirasCSSRoutes = require('./admin_leirasCSS');
const editUsersCSSRoutes = require('./editUsersCSS');
const sweetalertCSSRoutes = require('./sweetalertCSS');

router.use('/', lightmodeCSSRoutes);
router.use('/', loginCSSRoutes);
router.use('/', adminCSSRoutes);
router.use('/', regCSSRoutes);
router.use('/', adminLeirasCSSRoutes);
router.use('/', editUsersCSSRoutes);
router.use('/', sweetalertCSSRoutes);

module.exports = router;