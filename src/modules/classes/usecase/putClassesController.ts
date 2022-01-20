import { Request, Response } from "express";
import { PutClass } from "../entity/Classes";

class PutClassesAllController {



    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { name, description, video } = req.body;


        PutClass(id, name, description, video)


        return res.status(201).send();
    }

}


export { PutClassesAllController }

