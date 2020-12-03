import Sequelize, { Model } from "sequelize";
import { DB } from "../../shared/database";
import { logger } from "../../utils/logger";
import withCursor from "sequelize-cursor-pagination";

export class UserModel extends Model { }
UserModel.init(
    {
        full_name: {
            type: Sequelize.STRING(100),
        },
        address: {
            type: Sequelize.STRING(100),
        },
        email: {
            type: Sequelize.STRING(50),
            unique: {
                name: "email",
                msg: "An account already exists with this email address.",
            },
            validate: {
                isEmail: { msg: "Please check this is a valid email" },
                notEmpty: { msg: "email can't be empty" },
            },
        },
        dob: {
            type: Sequelize.STRING(20),
        },
        city: {
            type: Sequelize.STRING(50),
        },
        state: {
            type: Sequelize.STRING(50),
        },
        zip_code: {
            type: Sequelize.INTEGER,
        },
        photo: {
            type: Sequelize.STRING(100),
        },
    }, {
    sequelize: DB,
    modelName: "users",
},
);

const options: any = { alter: true };

const paginationOptions: any = {
    methodName: "paginate",
    primaryKeyField: "id",
};
// force: true will drop the table if it already exists
UserModel.sync(options).then(() => {
    logger.info("Users table migrated");
    // Table created
});
withCursor(paginationOptions)(<any>UserModel);
