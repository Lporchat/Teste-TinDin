import { Router } from "express"
import { ensureAuthenticated } from "../middleware/ensureAuthenticate";
import { ListClasseIDController } from "../modules/classes/usecase/listClasseIdController";
import { ListClassesAllController } from "../modules/classes/usecase/listClassesAllController";
import { PutClassesAllController } from "../modules/classes/usecase/putClassesController";
import { ClassesCreateController } from "../modules/user/usecase/createUser/userCreateController";


const createClassController = new ClassesCreateController()
const listClassesAllController = new ListClassesAllController()
const listClasseIDController = new ListClasseIDController()
const putClassesAllController = new PutClassesAllController()

const classesRoutes = Router()


classesRoutes.post('/', ensureAuthenticated, createClassController.handle);

classesRoutes.get('/', ensureAuthenticated, listClassesAllController.handle);
classesRoutes.get('/:id', ensureAuthenticated, listClasseIDController.handle);
classesRoutes.put('/:id', ensureAuthenticated, putClassesAllController.handle);



export { classesRoutes }