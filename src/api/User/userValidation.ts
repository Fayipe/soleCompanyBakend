import Joi from "joi";
import { IUser } from "./IUser";

export const UserValidationSchema = Joi.object().keys(<IUser>{
    full_name: Joi.string().required(),
    email: Joi.string().email({ minDomainAtoms: 2 }).required(),
    address: Joi.string().required(),
    dob: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    zip_code: Joi.number().required(),
    photo: Joi.string(),
    file: Joi.any(),
});
