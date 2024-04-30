const express = require('express');
const path = require('path');
const router = express.Router();

// konyvSzerkesztes.js route \\ 
router.get('/konyvSzerkesztes.js', function (req, res) {
    res.sendFile(path.join(__dirname,  '..', '..', 'Frontend', 'js', 'admin', 'konyvSzerkesztes.js'));
});

module.exports = router;