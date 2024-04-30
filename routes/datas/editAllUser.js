const express = require('express');
const connection = require('../../middleware/database.js');
const router = express.Router();

router.get('/getAllUser', (req,res) => {
    console.log('valami');
    connection.query('SELECT user_id, email, nick_name, role, birthday FROM user', (err,result) => {
        if (err) {
            console.log(err);
        }
        console.log(result);
        res.json(result);
    });
});


router.post('/searchingUser', (req,res) => {
    const { searching, searchingType } = req.body;
    console.log(searching, searchingType); 
    const query = `SELECT user_id, email, nick_name, role FROM user WHERE ${searchingType} LIKE ?`;
    connection.query(query, [`%${searching}%`], (err, result) => {
        res.json(result);
        console.log(result);
    });
});


router.put('/editRole/:id', (req, res) => {
    const id =req.params.id;
    const editRole= req.body.editRole;
    console.log(id, editRole);

    connection.query('UPDATE user SET role = ? WHERE user_id = ?', [editRole, id], (err, result) => {
        if (err) {
            console.log(err);
        }
        res.json({ success: true });
    });
});

// felhasználó törlése
router.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;

    connection.query('DELETE FROM user WHERE user_id = ?', [id], (err, result) => {
        res.json({ success: true });
    });
});


module.exports = router;