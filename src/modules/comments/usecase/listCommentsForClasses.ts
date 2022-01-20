import { Request, Response } from "express";
import { find3CommentsForClasses, findAllCommentsForClasses } from "../entity/comments";


class CommentListForClassesController {



    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { page } = req.body;



        const comments = await findAllCommentsForClasses(id, page);

        console.log(comments);

        return res.status(201).json(comments);
    }

}


export { CommentListForClassesController }

