const express = require('express');
const path = require('path');
const router = express.Router();

// registration.js route \\ 
router.get('/registration.js', function (req, res) {
    res.sendFile(path.join(__dirname, '..', '..', 'Frontend', 'js', 'registration.js'));
});

module.exports = router;