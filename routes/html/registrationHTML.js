const express = require('express');
const path = require('path');
const router = express.Router();

// registration.html route \\ 
router.get('/registration.html', function (req, res) {
    res.sendFile(path.join(__dirname, '..', '..', 'Frontend', 'html', 'registration.html'));
});

module.exports = router;