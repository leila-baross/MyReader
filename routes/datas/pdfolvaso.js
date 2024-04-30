const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

// pdfKonyvek route \\ MÉG FEJLESZTÉS ALATT
router.get('/pdfKonyvek', function (req, res) {
    const { cim } = req.body;
    //console.log(cim);
    res.sendFile(path.join(__dirname, '..', '..', 'path', `${cim}.pdf`));
});

module.exports = router;