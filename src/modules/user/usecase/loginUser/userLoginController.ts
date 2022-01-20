import { Request, Response } from "express";
import { loginUser } from "../../entity/User";
import { sign } from "jsonwebtoken"

class UserLoginController {


    async handle(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body;

        const user = await loginUser(email, password)


        if (!user) {
            return res.status(201).json({ message: "Usuario não castrado" });
        }

        const token = sign({}, "a43026e61d992c91dc04df34b087fa62", {
            subject: user.id,
            expiresIn: "1d"
        });


        return res.status(201).json({ token: token });
    }

}


export { UserLoginController }