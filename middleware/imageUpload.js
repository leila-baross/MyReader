const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'images/');
    },
    filename: function (req, file, cb) {
        const date = new Date();
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const originalname = file.originalname;
        const filename = `${year}${month}${day}_${originalname}`;
        cb(null, filename);
    }
});

const imageUpload = multer({ storage: storage });

module.exports = imageUpload;