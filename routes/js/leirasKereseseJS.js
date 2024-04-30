const express = require('express');
const path = require('path');
const router = express.Router();

// leirasKeresese.js route \\ 
router.get('/leirasKeresese.js', function (req, res) {
    res.sendFile(path.join(__dirname,  '..', '..', 'Frontend', 'js', 'leirasKeresese.js'));
});

module.exports = router;