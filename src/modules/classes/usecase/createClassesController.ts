import { Request, Response } from "express";
import { createUser } from "../../user/entity/User";

class UserCreateController {



    async handle(req: Request, res: Response): Promise<Response> {
        const { name, email, password } = req.body;

        console.log(name, email, password)


        createUser(name, email, password);


        return res.status(201).send();
    }

}


export { UserCreateController }

