const express = require('express');
const path = require('path');
const router = express.Router();

// getUserEmail.js route \\ 
router.get('/getUserEmail.js', function (req, res) {
    res.sendFile(path.join(__dirname,  '..', '..', 'Frontend', 'js', 'getUserEmail.js'));
});

module.exports = router;