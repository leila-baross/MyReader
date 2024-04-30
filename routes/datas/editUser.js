const express = require('express');
const bcrypt = require('bcrypt');
const connection = require('../../middleware/database.js');
const imageUpload = require('../../middleware/imageUpload.js');
const router = express.Router();

const saltRounds = 10;

// a felhasználó profilképének módosítása
router.put('/editUserImage/:email', imageUpload.single('image'), (req, res) => {
    const email = req.params.email;
    const imageName = req.file ? req.file.filename : null;

    connection.query('UPDATE user SET user_image = COALESCE(?, user_image) WHERE email = ?;', [imageName, email], (err, result) => {
        res.json("Sikeres módosítás!");
    });
});

// a username módosítása
router.put('/editUsername/:email', (req, res) => {
    const email = req.params.email;
    const username = req.body.username;

    connection.query('UPDATE user SET nick_name = ? WHERE email = ?;', [username, email], (err, result) => {
        res.json("Sikeres módosítás!");
    });
});

// a születési dátum módosítása
router.put('/editBirthday/:email', (req, res) => {
    const email = req.params.email;
    const birthday = req.body.birthday;

    connection.query('UPDATE user SET birthday = ? WHERE email = ?;', [birthday, email], (err, result) => {
        res.json("Sikeres módosítás!");
    });
});

// a jelszó módosítása
router.put('/editPassword/:email', (req, res) => {
    const email = req.params.email;
    const password = req.body.password;

    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) throw err;

        connection.query('UPDATE user SET password = ? WHERE email = ?;', [hash, email], (err, result) => {
            res.json("Sikeres módosítás!");
        });
    });
});

module.exports = router;