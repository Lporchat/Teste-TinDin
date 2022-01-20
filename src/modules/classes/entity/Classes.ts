import { model, Schema, Model, Document } from 'mongoose';

interface IClasses extends Document {
    name: string;
    description?: string;
    video: string;
    data_init: Date;
    data_end?: Date;
    date_created: Date;
    date_updated?: Date;
    total_comments: number;
    last_comment?: Date;
}

const ClassesSchema: Schema = new Schema({
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

const Classes: Model<IClasses> = model('Classes', ClassesSchema);


async function createClasses(name: string, description: string, video: string, data_init: Date, data_end: Date) {
    const classes: IClasses = await Classes.create({
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

async function findById(id: string): Promise<any> {
    const classe = await Classes.findOne({ _id: id });

    return classe
}

async function findAll(name?: string, description?: string, data_init?: string, data_end?: string, page: number = 0): Promise<any> {

        const page_min = page * 50;
        const page_max = page_min + 50;


    if (name) {
        const classe = await Classes.find({ name: name }).skip(page_min).limit(page_max);
        return classe
    }
    if (description) {
        const classe = await Classes.find({ description: description }).skip(page_min).limit(page_max);
        return classe
    }
    if (data_init) {
        var dateinit = data_init.split("-");
        const newdata_init = new Date(+dateinit[0], +dateinit[1] - 1, +dateinit[2])

        const classe = await Classes.find({ data_init: newdata_init }).skip(page_min).limit(page_max);
        return classe
    }
    if (data_end) {
        var dateend = data_end.split("-");
        const newdata_end = new Date(+dateend[0], +dateend[1] - 1, +dateend[2])

        const classe = await Classes.find({ data_end: data_end }).skip(page_min).limit(page_max);
        return classe
    }

    const classe = await Classes.find();
    return classe
}

async function PutClass(id: string, name: string, description: string, video: string) {
    await Classes.findByIdAndUpdate({ _id: id }, { name: name, description: description, video: video, date_updated: Date.now() });
}

async function updateToLastCommentDate(id: string) {
    await Classes.findByIdAndUpdate({ _id: id }, { last_comment: Date.now() });

}

async function incrementTotalComments(id: string) {
    const classe = await findById(id);

    await Classes.findByIdAndUpdate({ _id: id }, { total_comments: classe["total_comments"] + 1 });
}





export { Classes, IClasses, createClasses, findById, findAll, PutClass, updateToLastCommentDate, incrementTotalComments };

