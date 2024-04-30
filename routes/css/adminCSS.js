const express = require('express');
const path = require('path');
const router = express.Router();

// admin.css route
router.get('/admin.css', function (req, res) {
    res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'css', 'admin.css'));
});

module.exports = router;