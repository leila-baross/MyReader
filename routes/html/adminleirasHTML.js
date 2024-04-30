const express = require('express');
const path = require('path');
const router = express.Router();

// admin_leiras.html route \\ MÉG FEJLESZTÉS ALATT
router.get('/admin_leiras.html', function (req, res) {
    res.sendFile(path.join(__dirname, '..', '..', 'Frontend', 'html', 'admin' ,'admin_leiras.html'));
});

module.exports = router;