"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListClasseIDController = void 0;
const comments_1 = require("../../comments/entity/comments");
const Classes_1 = require("../entity/Classes");
class ListClasseIDController {
    async handle(req, res) {
        const { id } = req.params;
        const classe = await (0, Classes_1.findById)(id);
        const commnents = await (0, comments_1.find3CommentsForClasses)(id);
        return res.status(201).json({ class_name: classe["name"], last_comments: commnents });
    }
}
exports.ListClasseIDController = ListClasseIDController;
