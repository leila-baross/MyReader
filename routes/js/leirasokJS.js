const express = require('express');
const path = require('path');
const router = express.Router();

// leirasok.js route \\ 
router.get('/leirasok.js', function (req, res) {
    res.sendFile(path.join(__dirname,  '..', '..', 'Frontend', 'js', 'leirasok.js'));
});

module.exports = router;