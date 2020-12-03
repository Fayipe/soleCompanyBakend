import express from "express";
import { controllerHandler } from "../../shared/controllerHandler";
import { ProductController } from "./productController";
import { ProductValidationSchema } from "./productValidation";
import { validation } from "../../middleware/validation";

const router = express.Router();
const call = controllerHandler;
const Product = new ProductController();

router.post("/:store_id", [validation(ProductValidationSchema)],
    call(Product.createProduct, (req, _res, _next) => [req.body, req.params.store_id]));
export const ProductRouter = router;
