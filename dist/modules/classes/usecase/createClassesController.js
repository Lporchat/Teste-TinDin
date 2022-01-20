"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateController = void 0;
const User_1 = require("../../user/entity/User");
class UserCreateController {
    async handle(req, res) {
        const { name, email, password } = req.body;
        console.log(name, email, password);
        (0, User_1.createUser)(name, email, password);
        return res.status(201).send();
    }
}
exports.UserCreateController = UserCreateController;
