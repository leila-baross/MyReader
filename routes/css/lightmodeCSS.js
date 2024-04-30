const express = require('express');
const path = require('path');
const router = express.Router();

// style.css route
router.get('/lightmode.css', function (req, res) {
    res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'css', 'lightmode.css'));
});

module.exports = router;