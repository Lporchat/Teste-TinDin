"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutClassesAllController = void 0;
const Classes_1 = require("../entity/Classes");
class PutClassesAllController {
    async handle(req, res) {
        const { id } = req.params;
        const { name, description, video } = req.body;
        (0, Classes_1.PutClass)(id, name, description, video);
        return res.status(201).send();
    }
}
exports.PutClassesAllController = PutClassesAllController;
