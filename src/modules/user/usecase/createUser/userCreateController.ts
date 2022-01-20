import { Request, Response } from "express";
import { createClasses } from "../../../classes/entity/Classes";

class ClassesCreateController {


    async handle(req: Request, res: Response): Promise<Response> {
        const { name, description, video, data_init, data_end } = req.body;

        console.log(name, description, video, data_init, data_end)


        await createClasses(name, description, video, data_init, data_end);


        return res.status(201).send();
    }

}


export { ClassesCreateController }