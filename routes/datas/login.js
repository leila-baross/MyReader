const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const connection = require('../../middleware/database');

// login route
router.post('/login', function(req, res) {
    const { email, password } = req.body;

    connection.query('SELECT * FROM user WHERE user.email = ?', [email], (err, result) => {
        if (err) {
            return req.status(500).json("Hiba történt a bejelentkezés során!");
        }

        if (result.length === 0 || !bcrypt.compareSync(password, result[0].password)) {
            return res.status(401).json("Hibás jelszó vagy felhasználónév!");
        }

        const user = {
            email: result[0].email,
            nickName: result[0].nick_name,
            role: result[0].role
        }

        res.cookie('userData', JSON.stringify(user), { httpOnly: true, maxAge: 1000 * 60 *60 * 12 });
        
        if(user.role === 1) {
            return res.json({ success: true, user, redirect: '/admin_kezdolap.html' });
        }
        else if(user.role === 0) {
            return res.json({ success: true, user, redirect: '/kezdolap.html' });
        }
    });
});

module.exports = router;