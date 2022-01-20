import { Request, Response } from "express";
import { deleteCommentsForClasses } from "../entity/comments";

class CommentDeleteController {



    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        console.log(id)
        await deleteCommentsForClasses(id)

        return res.status(201).send();
    }

}


export { CommentDeleteController }

