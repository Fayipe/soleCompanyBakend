import { IBaseInterface } from "../baseInterface";

export interface IUser extends IBaseInterface {
    // type any is used to prevent error on validation level
    full_name: any;
    address: any;
    email: any;
    city: any;
    state: any;
    zip_code: any;
    dob: any;
    photo: any;
    file: any;
}
