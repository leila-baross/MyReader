const express = require('express');
const path = require('path');
const isAdmin = require('../../middleware/isAdmin');
const router = express.Router();

// admin_kezdolap.html route \\
router.get('/admin_kezdolap.html', isAdmin(1), function (req, res) {
    res.sendFile(path.join(__dirname, '..', '..', 'Frontend', 'html', 'admin' ,'admin_kezdolap.html'));
});

module.exports = router;