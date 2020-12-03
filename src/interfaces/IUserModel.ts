import { IBaseInterface } from "../api/baseInterface";

export interface IUserModel extends IBaseInterface {
    full_name: any;
    address: any;
    email: any;
    city: any;
    state: any;
    zip_code: any;
    dob: any;
    photo: any;
    getProduct(): any;
    addProduct(product: any): any;
}
