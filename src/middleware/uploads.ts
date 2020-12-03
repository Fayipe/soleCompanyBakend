import multer from "multer";
import { mkdirP } from "../utils/helpers";

export const FrontendAssetsUpload = multer({
    storage: multer.diskStorage({
        destination(req, file, cb) {
            mkdirP("public");
            mkdirP("public/photos");
            cb(null, "./public/photos");
        },
        filename(req, file, cb) {
            const fileName = file.fieldname;
            const fieldTime = Date.now();
            const originalName = file.originalname;
            const extension = originalName.slice(originalName.lastIndexOf("."));
            const newFileName = `${fileName}-${fieldTime}${extension}`;
            cb(null, newFileName);
        },
    }),
});
