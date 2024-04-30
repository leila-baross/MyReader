const express = require('express');
const path = require('path');
const router = express.Router();

// editUser.js route \\ 
router.get('/editUser.js', function (req, res) {
    res.sendFile(path.join(__dirname,  '..', '..', 'Frontend', 'js', 'editUser.js'));
});

module.exports = router;