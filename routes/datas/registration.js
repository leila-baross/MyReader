const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const connection = require('../../middleware/database');

const saltRounds = 10;

// felhasználó regisztrációja
router.post('/registration.html', function(req, res) {

    const bodyParser = require('body-parser');
    router.use(bodyParser.urlencoded({ extended: true }));
    router.use(bodyParser.json());
    
    
    const { email, nickName, password } = req.body;
    console.log(email, nickName, password);

    connection.query('SELECT * FROM user WHERE user.email = ?', [email], (err, result) => {
        if (err) {
            console.log(err);
            return res.json("Hiba a regisztráció során!");
        }

        if (result.length > 0) {
            return res.status(400).json("A felhasználónév már foglalt!");
        }

        bcrypt.hash(password, saltRounds, (err, hash) => {
            if (err) throw err;

            connection.query('INSERT INTO user (user_id, email, nick_name, password, role) VALUES (NULL, ?, ?, ?, 0)', [email, nickName, hash], (err, result) => {
                if (err) {
                    console.log(err);
                    res.json("Hiba a regisztráció során!");
                }
                else{res.json("Sikeres regisztráció!");}
            });
        });
    });
});

module.exports = router;