const express = require('express');
const path = require('path');
const router = express.Router();

// sweetalert.css route
router.get('/sweetalert.css', function (req, res) {
    res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'css', 'sweetalert.css'));
});

module.exports = router;