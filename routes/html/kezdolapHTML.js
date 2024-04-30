const express = require('express');
const path = require('path');
const isUser = require('../../middleware/isUser');
const router = express.Router();

// kezdolap.html route \\
router.get('/kezdolap.html', isUser(0), function (req, res) {
    res.sendFile(path.join(__dirname, '..', '..', 'Frontend', 'html', 'user' ,'kezdolap.html'));
});

module.exports = router;