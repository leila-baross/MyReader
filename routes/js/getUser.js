const express = require('express');
const path = require('path');
const router = express.Router();

// getUser.js route \\ 
router.get('/getUsers.js', function (req, res) {
    res.sendFile(path.join(__dirname,  '..', '..', 'Frontend', 'js', 'admin', 'editUsers.js'));
});

module.exports = router;