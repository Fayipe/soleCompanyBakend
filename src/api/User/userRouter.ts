import express from "express";
// import { validation } from "../../middleware";
import { FrontendAssetsUpload } from "../../middleware/uploads";
import { controllerHandler } from "../../shared/controllerHandler";
import { UserController } from "./userController";
// import { UserValidationSchema } from "./userValidation";

const router = express.Router();
const call = controllerHandler;
const User = new UserController();


router.post("/signup", [FrontendAssetsUpload.single("file")],
    call(User.createUser, (req, res, next) => [req.body, req.file]));
router.get("/", call(User.index, (req, res, next) => []));

export const UserRouter = router;
