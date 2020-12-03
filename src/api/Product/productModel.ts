import { Model } from "sequelize";
import Sequelize from "sequelize";
import { UserModel } from "../User/userModel";
import { logger } from "../../utils/logger";
import { DB } from "../../shared/database";
import withCursor from "sequelize-cursor-pagination";

export class ProductModel extends Model { }
ProductModel.init(
    {
        product_name: {
            type: Sequelize.TEXT,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Please provide product name",
                },
            },
        },
        slug: {
            type: Sequelize.STRING(120),
            allowNull: false,
            validate: {
                notNull: {
                    msg: "This product needs a slug",
                },
            },
        },
        product_price: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
        },
        product_currency: {
            type: Sequelize.STRING(10),
        },
    },
    {
        sequelize: DB,
        modelName: "products",
        indexes: [{ unique: true, fields: ["slug"] }],
    },
);

UserModel.hasMany(ProductModel);
ProductModel.belongsTo(UserModel);
const option: any = {
    alter: true,
};
const paginationOptions: any = {
    methodName: "paginate",
    primaryKeyField: "id",
};
// force: true will drop the table if it already exists
ProductModel.sync(option).then(() => {
    logger.info("Product table migrated");
    // Table created
});

withCursor(paginationOptions)(<any>ProductModel);
