import { UserModel } from ".";
import { AppError } from "../../utils/app-error";

export class UserService {
    public createUser = async (data: any) => {
        const saved = await UserModel.create(data);
        if (saved) {
            return saved;
        }
        throw new AppError("Could not create user.");
    }

}
