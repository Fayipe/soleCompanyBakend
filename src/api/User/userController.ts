import { IUser } from ".";
import { BaseController } from "../baseController";
import { UserService } from "./userService";

/**
 * User controller
 *
 * @export
 * @class UserController
 */
export class UserController extends BaseController {
    private _userService = new UserService();

    public index = () => {
        return this.sendResponse("hello!");
    }
    public createUser = async (user: IUser, photo: any) => {
        if (photo) {
            user.photo = photo.location;
        }
        const userData = await this._userService.createUser(user);
        return this.sendResponse(
            userData,
            "User registration successful",
        );
    }
}
