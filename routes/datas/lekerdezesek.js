const express = require('express');
const connection = require('../../middleware/database');
const imageUpload = require('../../middleware/imageUpload');
const uploadPDF = require('../../middleware/uploadPDF');
const router = express.Router();

// könyv lekérdezése route
router.get('/book', function (req, res) {
    connection.query('SELECT * FROM book INNER JOIN writer ON book.book_writer_id=writer.writer_id', (err, results) => {
        //console.log(results);
        res.json(results);
        // console.log(results);
    });
});

// Könyv leírások \\
router.get('/leirasok', function (req, res) {
    connection.query('SELECT * FROM book INNER JOIN writer ON book.book_writer_id=writer.writer_id', (err, results) => {
        //console.log(results);
        res.json(results);
    });
});

// egy konkrét könyv lekérdezése id alapján route
router.get('/books/:id', function (req, res) {
    const id = req.params.id;

    connection.query('SELECT * FROM book JOIN writer ON book.book_writer_id= writer.writer_id WHERE book.book_id=?', [id], (err, results) => {
        console.log(results);
        res.json(results);
    });
});

// új könyv hozzáadása
router.post('/book', imageUpload.single('image'), function (req, res) {
    const { title, writerID, bookGenre, bookSub, bookPublisher } = req.body;
    const imageName = req.file ? req.file.filename : 'no_image.jpg';

    // A könyv feltöltése az adatbázisba
    connection.query('INSERT INTO book(book_id, book_writer_id, book_title, book_publisher, book_path, book_pic, book_genre, book_sub) VALUES(NULL, ?, ?, ?, "", ?, ?, ?)',
     [writerID, title, bookPublisher, imageName, bookGenre, bookSub], (err, result) => {
        if (err) {
            console.log(err);
        }
        connection.query('SELECT book_id FROM book ORDER BY book_id DESC LIMIT 1;', (err, result2) => {
            if (err) {
                console.log(err);
            }

            res.json(result2);
        })
    });
});

// új könyv hozzáadásához a pdf beszúrása
router.post('/bookPDF/:id', uploadPDF.single('bookPath'), function (req, res) {
    const pdfName = req.file ? req.file.filename : 'fileNotFound.html';
    const id = req.params.id;
    console.log(id);
    console.log(pdfName);

    connection.query('UPDATE book SET book_path = COALESCE(?, book_path) WHERE book_id = ?;', [pdfName, id], (err, result) => {
        if (err) {
            console.log(err);
        }

        res.json({ success: true });
    })
});

// új író hozzáadása ha még nincs
router.post('/newWriter', function (req, res) {
    const writer = req.body.writer;

    newWriterAdd(writer, res);
});

// új író hozzáadása függvény
function newWriterAdd(writer, res) {
    connection.query('SELECT writer_id FROM writer WHERE writer_name = ?', [writer], (err, result) => {
        if (result.length === 0) {
            connection.query('INSERT INTO writer (writer_id, writer_name) VALUES (NULL, ?)', [writer], (err2, result2) => {
                // Ha sikeres az INSERT, akkor hívd meg a writerSelect függvényt
                writerSelect(writer, res);
            });
        } else {
            // Ha már létezik az író, akkor is hívd meg a writerSelect függvényt
            writerSelect(writer, res);
        }
    });
}

// writer_id lekérdezése
function writerSelect(writer, res) {
    console.log(writer);
    connection.query('SELECT writer_id FROM writer WHERE writer_name = ?', [writer], (err, result) => {
        console.log(result);
        res.json(result);
    });
}

// könyv törlése route
router.delete('/book/:id', function (req, res) {
    //console.log(req.params);
    const id = req.params.id;

    connection.query('DELETE FROM book WHERE book_id=?', [id], (err, result) => {
        res.json("Sikeres törlés!");
    });
});

// könyv szerkesztése route
router.put('/book/:id', imageUpload.single('image'), function (req, res) {
    const bookID = req.params.id;
    const image = req.file ? req.file.filename : 'no_image.jpg';
    const { title, writerID, bookGenre, bookSub, bookPublisher } = req.body;
    console.log(title, writerID, bookGenre, bookSub, bookPublisher);
    console.log(image);

    connection.query('UPDATE book SET book_writer_id=?, book_title=?, book_publisher=?, book_path="", book_pic = COALESCE(?, book_pic), book_genre=?, book_sub=? WHERE book_id = ?;',
        [writerID, title, bookPublisher, image, bookGenre, bookSub, bookID],
        (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log('idáig ok');
            res.json({ success: true })
        }
    );
});

// könyv szerkesztésének pdf útvonala route
router.post('/editBookPDF/:id', uploadPDF.single('bookPath'), function (req, res) {
    const pdfName = req.file ? req.file.filename : 'fileNotFound.html';
    const id = req.params.id;
    console.log(id);
    console.log(pdfName);

    connection.query('UPDATE book SET book_path = COALESCE(?, book_path) WHERE book_id = ?;', [pdfName, id], (err, result) => {
        if (err) {
            console.log(err);
        }

        res.json({ success: true });
    })
});

// könyvek közti keresés
router.post('/searching', function (req, res) {
    const searching = req.body.searching;

    connection.query('SELECT * FROM book JOIN writer ON book.book_writer_id = writer.writer_id WHERE book_title LIKE CONCAT("%", ?, "%") OR book_sub LIKE CONCAT("%", ?, "%")', [searching, searching], (err, result) => {
        res.json(result);
    });
});

// egy adott könyv értékelésének rögzítése egy adott felhasználótól
router.put('/rating/:bookID/:userID', async function (req, res) {
    const bookID = req.params.bookID;
    const userID = req.params.userID;
    let rating = req.body.rating;

    console.log(bookID, userID, rating);

    connection.query('SELECT * FROM rating WHERE bookID = ? AND userID = ?', [bookID, userID], async (err, result) => {
        if (result.length === 0) {
            // Nincs még értékelés az adott könyvhöz az adott felhasználótól
            connection.query('INSERT INTO rating (ratingID, rating, userID, bookID) VALUES (NULL, ?, ?, ?)', [rating, userID, bookID], (err, result) => {
                updateAvgRating(bookID, res);
                console.log(err);
            });
        } else {
            // Már van értékelés az adott könyvhöz az adott felhasználótól, ezért frissíteni kell
            connection.query('UPDATE rating SET rating = ? WHERE bookID = ? AND userID = ?', [rating, bookID, userID], (err, result) => {
                updateAvgRating(bookID, res);
                console.log(err);
            });
        }
    });
});

// az adott könyv összértékelésének átlagának beszúrása
function updateAvgRating(bookID, res) {
    connection.query('UPDATE book SET rating = (SELECT AVG(rating) FROM rating WHERE bookID = ?) WHERE book_id = ?', [bookID, bookID], (err, result) => {
        if (err) {
            console.error('Hiba az értékelés és átlag frissítésekor:', err);
            res.status(500).json('Hiba az értékelés és átlag frissítésekor');
        } else {
            res.json('Sikeres értékelés és átlag frissítés!');
        }
    });
}


module.exports = router;