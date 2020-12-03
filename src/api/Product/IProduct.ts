import { IBaseInterface } from "../baseInterface";

export interface IProduct extends IBaseInterface {
    // type any is used to prevent error on validation level
    product_name: any;
    slug: any;
    product_price: any;
    product_currency: any;
}
