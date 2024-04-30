const express = require('express');
const path = require('path');
const router = express.Router();

// style.css route
router.get('/login.css', function (req, res) {
    res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'css', 'login.css'));
});

module.exports = router;