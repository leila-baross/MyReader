const express = require('express');
const path = require('path');
const router = express.Router();

// fileNotFound.html route \\ 
router.get('/fileNotFound.html', function (req, res) {
    res.sendFile(path.join(__dirname, '..', '..', 'Frontend', 'html', 'user', 'fileNotFound.html'));
});

module.exports = router;