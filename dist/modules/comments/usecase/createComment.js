"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCreateController = void 0;
const Classes_1 = require("../../classes/entity/Classes");
const comments_1 = require("../entity/comments");
class CommentCreateController {
    async handle(req, res) {
        const { Id_class, comment } = req.body;
        await (0, comments_1.createComment)(Id_class, comment);
        await (0, Classes_1.updateToLastCommentDate)(Id_class);
        await (0, Classes_1.incrementTotalComments)(Id_class);
        return res.status(201).send();
    }
}
exports.CommentCreateController = CommentCreateController;
