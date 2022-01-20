"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLoginController = void 0;
const User_1 = require("../../entity/User");
const jsonwebtoken_1 = require("jsonwebtoken");
class UserLoginController {
    async handle(req, res) {
        const { email, password } = req.body;
        const user = await (0, User_1.loginUser)(email, password);
        if (!user) {
            return res.status(201).json({ message: "Usuario não castrado" });
        }
        const token = (0, jsonwebtoken_1.sign)({}, "a43026e61d992c91dc04df34b087fa62", {
            subject: user.id,
            expiresIn: "1d"
        });
        return res.status(201).json({ token: token });
    }
}
exports.UserLoginController = UserLoginController;
