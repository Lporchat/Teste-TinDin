"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentListForClassesController = void 0;
const comments_1 = require("../entity/comments");
class CommentListForClassesController {
    async handle(req, res) {
        const { id } = req.params;
        const comments = await (0, comments_1.findAllCommentsForClasses)(id);
        console.log(comments);
        return res.status(201).json(comments);
    }
}
exports.CommentListForClassesController = CommentListForClassesController;
