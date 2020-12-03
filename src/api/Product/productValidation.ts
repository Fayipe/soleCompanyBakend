import Joi from "joi";
import { IProduct } from "./IProduct";

export const ProductValidationSchema = Joi.object().keys(<IProduct> {
    product_name: Joi.string().trim().required(),
    slug: Joi.string(),
    product_price: Joi.number().required(),
    product_currency: Joi.number().required(),
});
