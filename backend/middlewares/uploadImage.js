const multer = require("multer");
const path = require('path');

// Uploading images using multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, `${__dirname}/../public/assets`);
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, `${Date.now()}${path.extname(file.originalname)}`)
    }
});

const upload = multer({storage: storage});

module.exports = upload