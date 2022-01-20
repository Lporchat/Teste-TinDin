import { model, Schema, Model, Document } from 'mongoose';

interface IComments extends Document {
    Id_class: string;
    comment: string;
    date_created: Date;
}

const CommentsSchema: Schema = new Schema({
    Id_class: { type: String, required: true },
    comment: { type: String, required: true },
    date_created: { type: Date, required: true },
});

const Comments: Model<IComments> = model('Comments', CommentsSchema);


async function createComment(Id_class: string, comment: string,) {
    const comments: IComments = await Comments.create({
        Id_class: Id_class,
        comment: comment,
        date_created: Date.now(),
    });
    await comments.save();

}

async function findAllCommentsForClasses(id_class: string, page: number = 0): Promise<any> {

    const page_min = page * 50;
    const page_max = page_min + 50;

    const comments = await Comments.find({ Id_class: id_class }).skip(page_min).limit(page_max);
    return comments
}

async function find3CommentsForClasses(id_class: string): Promise<any> {
    const comments = await Comments.find({ Id_class: id_class }).sort({ date_created: "desc" }).limit(3);
    return comments
}

async function findlastcommentForClasses(id_class: string): Promise<any> {
    const comments = await Comments.findOne().sort({ date_created: "desc" }).limit(1);
    return comments
}

async function deleteCommentsForClasses(id: string): Promise<any> {
    const comments = await Comments.findOneAndDelete({ _id: id });
    return comments
}




export { Comments, IComments, createComment, findAllCommentsForClasses, deleteCommentsForClasses, find3CommentsForClasses, findlastcommentForClasses };

