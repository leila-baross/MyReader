const multer = require('multer');
const path = require('path');

// Multer konfiguráció
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'pdf/'); // Feltöltött fájlok mentése a 'uploads/pdf' mappába
    },
    filename: function (req, file, cb) {
        const originalname = file.originalname;
        const filename = originalname.replace(/[^a-zA-Z0-9.-]/g, ''); // Csak az engedélyezett karaktereket hagyja meg
        cb(null, filename);
    }
});

// Multer middleware létrehozása
const uploadPDF = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 }
});

module.exports = uploadPDF;