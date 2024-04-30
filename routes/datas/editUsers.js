const express = require('express');
const bcrypt = require('bcrypt');
const connection = require('../../middleware/database.js');
const upload = require('../../middleware/upload.js');
const router = express.Router();

router.get('/getUsers', (req,res) => {
    connection.query('SELECT user_id, email, nick_name, role, birthday FROM user', (err,result) => {
        res.json(result);
    });
});

router.post('/searchingUser', (req,res) => {
    const { searching, searchingType } = req.body;
    //console.log(searching, searchingType); 
    const query = `SELECT user_id, email, nick_name, role FROM user WHERE ${searchingType} LIKE ?`;
    connection.query(query, [`%${searching}%`], (err, result) => {
        res.json(result);
    });
});

router.put('/editRole/:id', (req, res) => {
    const id =req.params.id;
    const editRole= req.body.editRole;

    connection.query('UPDATE user SET role = ? WHERE user_id = ?', [editRole, id], (err, result) => {
        res.json("Sikeres módosítás!");
    })
})

module.exports = router;