"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findById = exports.loginUser = exports.createUser = exports.User = void 0;
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});
const User = (0, mongoose_1.model)('User', UserSchema);
exports.User = User;
async function createUser(name, email, password) {
    const users = await User.create({
        email: email,
        name: name,
        password: password
    });
    await users.save();
}
exports.createUser = createUser;
async function loginUser(email, password) {
    const user = await User.findOne({ email: email, password: password });
    return user;
}
exports.loginUser = loginUser;
async function findById(id) {
    const user = await User.findOne({ _id: id });
    return user;
}
exports.findById = findById;
