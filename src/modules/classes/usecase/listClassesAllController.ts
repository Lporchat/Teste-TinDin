import { Request, Response } from "express";
import { findAll } from "../entity/Classes";

class ListClassesAllController {



    async handle(req: Request, res: Response): Promise<Response> {

        const { name, description, data_init, data_end } = req.body;


        const allClasses = await findAll(name, description, data_init, data_end);



        return res.status(201).json(allClasses);
    }

}


export { ListClassesAllController }

