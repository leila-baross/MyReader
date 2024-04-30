const express = require('express');
const path = require('path');
const router = express.Router();

// login.js route \\ 
router.get('/login.js', function (req, res) {
    res.sendFile(path.join(__dirname, '..', '..', 'Frontend', 'js', 'login.js'));
});

module.exports = router;