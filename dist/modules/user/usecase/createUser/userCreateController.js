"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassesCreateController = void 0;
const Classes_1 = require("../../../classes/entity/Classes");
class ClassesCreateController {
    async handle(req, res) {
        const { name, description, video, data_init, data_end } = req.body;
        console.log(name, description, video, data_init, data_end);
        await (0, Classes_1.createClasses)(name, description, video, data_init, data_end);
        return res.status(201).send();
    }
}
exports.ClassesCreateController = ClassesCreateController;
