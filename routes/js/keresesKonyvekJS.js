const express = require('express');
const path = require('path');
const router = express.Router();

// keresesKonyvek.js route \\ 
router.get('/keresesKonyvek.js', function (req, res) {
    res.sendFile(path.join(__dirname,  '..', '..', 'Frontend', 'js', 'keresesKonyvek.js'));
});

module.exports = router;