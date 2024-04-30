const express = require('express');
const path = require('path');
const router = express.Router();

// ujKonyv.js route \\ 
router.get('/ujKonyv.js', function (req, res) {
    res.sendFile(path.join(__dirname,  '..', '..', 'Frontend', 'js', 'admin', 'ujKonyv.js'));
});

module.exports = router;