const express = require('express');
const path = require('path');
const router = express.Router();

// leiras.html route \\ MÉG FEJLESZTÉS ALATT
router.get('/leiras.html', function (req, res) {
    res.sendFile(path.join(__dirname, '..', '..', 'Frontend', 'html', 'user' ,'leiras.html'));
});

module.exports = router;