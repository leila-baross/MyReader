const express = require('express');
const path = require('path');
const router = express.Router();

// frontend.js route \\ 
router.get('/frontend.js', function (req, res) {
    res.sendFile(path.join(__dirname,  '..', '..', 'Frontend', 'js', 'frontend.js'));
});

module.exports = router;