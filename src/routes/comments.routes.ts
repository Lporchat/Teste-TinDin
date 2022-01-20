import { Router } from "express"
import { ensureAuthenticated } from "../middleware/ensureAuthenticate";
import { CommentCreateController } from "../modules/comments/usecase/createComment";
import { CommentDeleteController } from "../modules/comments/usecase/deleteComment";
import { CommentListForClassesController } from "../modules/comments/usecase/listCommentsForClasses";


const commentCreateController = new CommentCreateController()
const commentListForClassesController = new CommentListForClassesController()
const commentDeleteController = new CommentDeleteController()



const commentRoutes = Router()


commentRoutes.post('/', ensureAuthenticated, commentCreateController.handle);

commentRoutes.get('/:id', ensureAuthenticated, commentListForClassesController.handle);

commentRoutes.delete('/:id', ensureAuthenticated, commentDeleteController.handle);





export { commentRoutes }