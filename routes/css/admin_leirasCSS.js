const express = require('express');
const path = require('path');
const router = express.Router();

// admin_leiras.css route
router.get('/admin_leiras.css', function (req, res) {
    res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'css', 'admin_leiras.css'));
});

module.exports = router;