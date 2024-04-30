const mysql = require('mysql');

// adatbázishoz kapcsolódás \\
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'myreader'
});

connection.connect((err) => {
    if(err){
        console.log(`Hiba az adatbázis kapcsolodásakor: ${err}`);
        return;
    }
    console.log("Sikeres kapcsolódás az adatbázishoz!");
});

module.exports = connection;  // exportáljuk a kapcsolt objektum