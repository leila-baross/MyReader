const express = require('express');
const path = require('path');
const router = express.Router();
const isAdmin = require('../../middleware/isAdmin');
const isUser = require('../../middleware/isUser');

// login.html route \\ 
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '..', '..', 'Frontend','html', 'login.html'));
});

module.exports = router;