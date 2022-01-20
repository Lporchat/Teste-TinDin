import { Request, Response } from "express";
import { find3CommentsForClasses } from "../../comments/entity/comments";
import { findById } from "../entity/Classes";

class ListClasseIDController {



    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const classe = await findById(id)
        const commnents = await find3CommentsForClasses(id)


        return res.status(201).json({ class_name: classe["name"], last_comments: commnents });
    }

}


export { ListClasseIDController }

