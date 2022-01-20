import { NextFunction, request, Request, Response } from "express";
import { verify } from "jsonwebtoken"
import { findById } from "../modules/user/entity/User";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {


    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(400).json({ error: "Missing token" });
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub: userID } = verify(token, "a43026e61d992c91dc04df34b087fa62") as IPayload



        const user = await findById(userID)

        if (!user) {
            return res.status(401).json({ error: "User Does Not Exist" });

        }

        req.user = { id: userID }
        next();
    } catch {
        return res.status(401).json({ error: "Invalid token" });
    }
}