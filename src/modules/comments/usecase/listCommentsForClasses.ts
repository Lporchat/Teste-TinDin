import { Request, Response } from "express";
import { find3CommentsForClasses, findAllCommentsForClasses } from "../entity/comments";


class CommentListForClassesController {



    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;


        const comments = await findAllCommentsForClasses(id);

        console.log(comments);

        return res.status(201).json(comments);
    }

}


export { CommentListForClassesController }

