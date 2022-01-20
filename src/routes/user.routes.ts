import { Router } from "express"
import { ensureAuthenticated } from "../middleware/ensureAuthenticate";
import { UserCreateController } from "../modules/classes/usecase/createClassesController";


import { UserLoginController } from "../modules/user/usecase/loginUser/userLoginController";


const userCreateController = new UserCreateController()
const userLoginController = new UserLoginController()


const userRoutes = Router()


userRoutes.post('/create', ensureAuthenticated, userCreateController.handle);

userRoutes.get('/login', userLoginController.handle);



export { userRoutes }