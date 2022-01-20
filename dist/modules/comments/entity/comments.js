"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findlastcommentForClasses = exports.find3CommentsForClasses = exports.deleteCommentsForClasses = exports.findAllCommentsForClasses = exports.createComment = exports.Comments = void 0;
const mongoose_1 = require("mongoose");
const CommentsSchema = new mongoose_1.Schema({
    Id_class: { type: String, required: true },
    comment: { type: String, required: true },
    date_created: { type: Date, required: true },
});
const Comments = (0, mongoose_1.model)('Comments', CommentsSchema);
exports.Comments = Comments;
async function createComment(Id_class, comment) {
    const comments = await Comments.create({
        Id_class: Id_class,
        comment: comment,
        date_created: Date.now(),
    });
    await comments.save();
}
exports.createComment = createComment;
async function findAllCommentsForClasses(id_class, page = 0) {
    const page_min = page * 50;
    const page_max = page_min + 50;
    const comments = await Comments.find({ Id_class: id_class }).skip(page_min).limit(page_max);
    return comments;
}
exports.findAllCommentsForClasses = findAllCommentsForClasses;
async function find3CommentsForClasses(id_class) {
    const comments = await Comments.find({ Id_class: id_class }).sort({ date_created: "desc" }).limit(3);
    return comments;
}
exports.find3CommentsForClasses = find3CommentsForClasses;
async function findlastcommentForClasses(id_class) {
    const comments = await Comments.findOne().sort({ date_created: "desc" }).limit(1);
    return comments;
}
exports.findlastcommentForClasses = findlastcommentForClasses;
async function deleteCommentsForClasses(id) {
    const comments = await Comments.findOneAndDelete({ _id: id });
    return comments;
}
exports.deleteCommentsForClasses = deleteCommentsForClasses;
