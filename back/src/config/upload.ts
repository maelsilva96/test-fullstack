import * as multer from "multer";

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "tmp/uploads/");
    },
    filename: function(req, file, cb) {
        cb(null, `${(new Date()).toISOString()}-${file.originalname}`);
    }
});

const uploads = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        let allowedMimes = [
            "image/jpeg",
            "image/jpg",
            "image/png",
            "image/gif"
        ];

        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(null, false);
        }
    }
});

export default uploads ;
