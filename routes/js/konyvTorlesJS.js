const express = require('express');
const path = require('path');
const router = express.Router();

// konyvTorles.js route \\ 
router.get('/konyvTorles.js', function (req, res) {
    res.sendFile(path.join(__dirname,  '..', '..', 'Frontend', 'js', 'admin', 'konyvTorles.js'));
});

module.exports = router;