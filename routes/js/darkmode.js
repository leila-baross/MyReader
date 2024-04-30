const express = require('express');
const path = require('path');
const router = express.Router();

// darkmode.js route \\ 
router.get('/darkmode.js', function (req, res) {
    res.sendFile(path.join(__dirname,  '..', '..', 'Frontend', 'js', 'darkmode.js'));
});

module.exports = router;