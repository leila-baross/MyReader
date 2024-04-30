const express = require('express');
const path = require('path');
const router = express.Router();

// editUsers.html route \\ MÉG FEJLESZTÉS ALATT
router.get('/editUsers.html', function (req, res) {
    res.sendFile(path.join(__dirname, '..', '..', 'Frontend', 'html', 'admin' ,'editUsers.html'));
});

module.exports = router;