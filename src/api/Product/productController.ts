import { BaseController } from "../baseController";
import { ProductService } from "./productService";
import { IProduct } from "./IProduct";

/**
 * Product controller
 *
 * @export
 * @class ProductController
 */
export class ProductController extends BaseController {
    private _productService = new ProductService();

    /**
     * createProduct
     */
    public createProduct = async (user: any, data: IProduct) => {
        const product = await this._productService.createProduct(user, data);
        return this.sendResponse(product);
    }
}
