const express = require('express');
const path = require('path');
const router = express.Router();

// profile.js route \\ 
router.get('/profile.js', function (req, res) {
    res.sendFile(path.join(__dirname, '..', '..', 'Frontend', 'js', 'profile', 'profile.js'));
});

module.exports = router;