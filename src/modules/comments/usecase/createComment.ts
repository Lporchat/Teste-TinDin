import { Request, Response } from "express";
import { incrementTotalComments, updateToLastCommentDate } from "../../classes/entity/Classes";
import { createComment } from "../entity/comments";

class CommentCreateController {



    async handle(req: Request, res: Response): Promise<Response> {
        const { Id_class, comment } = req.body;

        await createComment(Id_class, comment)
        await updateToLastCommentDate(Id_class);
        await incrementTotalComments(Id_class)
        


        return res.status(201).send();
    }

}


export { CommentCreateController }

