import { Request, Response } from "express";
import { findAll } from "../entity/Classes";

class ListClassesAllController {



    async handle(req: Request, res: Response): Promise<Response> {

        const { name, description, data_init, data_end, page } = req.body;


        const allClasses = await findAll(name, description, data_init, data_end, page);



        return res.status(201).json(allClasses);
    }

}


export { ListClassesAllController }

