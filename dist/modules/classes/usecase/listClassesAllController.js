"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListClassesAllController = void 0;
const Classes_1 = require("../entity/Classes");
class ListClassesAllController {
    async handle(req, res) {
        const { name, description, data_init, data_end } = req.body;
        const allClasses = await (0, Classes_1.findAll)(name, description, data_init, data_end);
        return res.status(201).json(allClasses);
    }
}
exports.ListClassesAllController = ListClassesAllController;
