import { model, Schema, Model, Document } from 'mongoose';

interface IUser extends Document {
    name: string;
    email: string;
    password: string;
}

const UserSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});

const User: Model<IUser> = model('User', UserSchema);


async function createUser(name: string, email: string, password: string) {
    const users: IUser = await User.create({
        email: email,
        name: name,
        password: password
    });
    await users.save();

}


async function loginUser(email: string, password: string): Promise<any> {
    const user = await User.findOne({ email: email, password: password });

    return user
}

async function findById(id: string): Promise<any> {
    const user = await User.findOne({ _id: id });

    return user
}



export { User, IUser, createUser, loginUser, findById };

