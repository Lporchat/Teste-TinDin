"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.incrementTotalComments = exports.updateToLastCommentDate = exports.PutClass = exports.findAll = exports.findById = exports.createClasses = exports.Classes = void 0;
const mongoose_1 = require("mongoose");
const ClassesSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String },
    video: { type: String, required: true },
    data_init: { type: Date, required: true },
    data_end: { type: Date },
    date_created: { type: Date, required: true },
    date_updated: { type: Date },
    total_comments: { type: Number, required: true },
    last_comment: { type: Date },
});
const Classes = (0, mongoose_1.model)('Classes', ClassesSchema);
exports.Classes = Classes;
async function createClasses(name, description, video, data_init, data_end) {
    const classes = await Classes.create({
        name: name,
        description: description,
        video: video,
        data_init: data_init,
        data_end: data_end,
        date_created: Date.now(),
        date_updated: Date.now(),
        total_comments: 0
    });
    await classes.save();
}
exports.createClasses = createClasses;
async function findById(id) {
    const classe = await Classes.findOne({ _id: id });
    return classe;
}
exports.findById = findById;
async function findAll(name, description, data_init, data_end, page = 0) {
    const page_min = page * 50;
    const page_max = page_min + 50;
    if (name) {
        const classe = await Classes.find({ name: name }).skip(page_min).limit(page_max);
        return classe;
    }
    if (description) {
        const classe = await Classes.find({ description: description }).skip(page_min).limit(page_max);
        return classe;
    }
    if (data_init) {
        var dateinit = data_init.split("-");
        const newdata_init = new Date(+dateinit[0], +dateinit[1] - 1, +dateinit[2]);
        const classe = await Classes.find({ data_init: newdata_init }).skip(page_min).limit(page_max);
        return classe;
    }
    if (data_end) {
        var dateend = data_end.split("-");
        const newdata_end = new Date(+dateend[0], +dateend[1] - 1, +dateend[2]);
        const classe = await Classes.find({ data_end: data_end }).skip(page_min).limit(page_max);
        return classe;
    }
    const classe = await Classes.find();
    return classe;
}
exports.findAll = findAll;
async function PutClass(id, name, description, video) {
    await Classes.findByIdAndUpdate({ _id: id }, { name: name, description: description, video: video, date_updated: Date.now() });
}
exports.PutClass = PutClass;
async function updateToLastCommentDate(id) {
    await Classes.findByIdAndUpdate({ _id: id }, { last_comment: Date.now() });
}
exports.updateToLastCommentDate = updateToLastCommentDate;
async function incrementTotalComments(id) {
    const classe = await findById(id);
    await Classes.findByIdAndUpdate({ _id: id }, { total_comments: classe["total_comments"] + 1 });
}
exports.incrementTotalComments = incrementTotalComments;
