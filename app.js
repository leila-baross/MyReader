const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const backendRoutes = require('./routes/routes');

const bookPath = path.join(__dirname, 'pdf');
const frontendPath = path.join(__dirname, '..', 'Frontend');
const imagePath = path.join(__dirname, 'images');
const adminJSRoutes = path.join(__dirname, 'Frontend', 'js', 'admin', 'admin.js');

const port = 5500;
const host = 'localhost';

// json parse-hoz (hogy a req.body-ban érkező adatokat fel tudjuk dolgozni) \\
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cookie parse
app.use(cookieParser());

// ~ Routes ~ \\
app.use('/', backendRoutes);

// admin.js route \\ 
app.use('admin.js', express.static(adminJSRoutes));

// ~ frontend útvonal ~ \\
app.use('/frontend', express.static(frontendPath));

// statikus fájlok kiszolgálása az 'images' mappából
app.use('/images', express.static(imagePath));

// statikus fájlok kiszolgálása az 'path' mappából
app.use('/pdf', express.static(bookPath));


app.listen(port, host, () => {
    console.log(`IP: http://${host}:${port}`);
});
