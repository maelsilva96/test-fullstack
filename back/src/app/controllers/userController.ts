import {UserBusiness} from "../business/userBusiness";

class UserController {
    private static userBusiness: UserBusiness;

    public constructor(userBusiness: UserBusiness) {
        if (UserController.userBusiness == null) {
            UserController.userBusiness = userBusiness;
        }
    }
}

export default (new UserController(new UserBusiness()));
