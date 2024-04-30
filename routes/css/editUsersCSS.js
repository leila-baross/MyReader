const express = require('express');
const path = require('path');
const router = express.Router();

// editUsers.css route
router.get('/editUsers.css', function (req, res) {
    res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'css', 'editUsers.css'));
});

module.exports = router;