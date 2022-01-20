"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentDeleteController = void 0;
const comments_1 = require("../entity/comments");
class CommentDeleteController {
    async handle(req, res) {
        const { id } = req.params;
        console.log(id);
        await (0, comments_1.deleteCommentsForClasses)(id);
        return res.status(201).send();
    }
}
exports.CommentDeleteController = CommentDeleteController;
