import { ProductModel } from "./productModel";
import { AppError } from "../../utils/app-error";
import slugify from "slugify";
import crypto from "crypto";
export class ProductService {
    /**
     * Create new product content
     * @param {Object} user the current user
     * @param {Object} data
     * @param {string} data.title the product title
     * @param {string} data.content the product content
     *
     * @returns {[Promise<any> | null]} saved product data
     */
    public createProduct = async (user: any, data: any) => {
        data.slug = await this.createSlug(data.product_name);
        const saved = await ProductModel.create(data);
        if (saved && user.addProduct(saved)) {
            return saved;
        }
        throw new AppError("Could not create product.");
    }


    private createSlug = (str: string) => {
        let newString = slugify(str, {
            remove: /[*+~.()'"!?:@#${}<>,]/g,
            lower: true,
        });
        const random = crypto.randomBytes(6).toString("hex");
        newString = `${newString}-${random}`;

        return newString;
    }

}
