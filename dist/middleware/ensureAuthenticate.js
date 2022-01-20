"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthenticated = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const User_1 = require("../modules/user/entity/User");
async function ensureAuthenticated(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(400).json({ error: "Missing token" });
    }
    const [, token] = authHeader.split(" ");
    try {
        const { sub: userID } = (0, jsonwebtoken_1.verify)(token, "a43026e61d992c91dc04df34b087fa62");
        const user = await (0, User_1.findById)(userID);
        if (!user) {
            return res.status(401).json({ error: "User Does Not Exist" });
        }
        req.user = { id: userID };
        next();
    }
    catch (_a) {
        return res.status(401).json({ error: "Invalid token" });
    }
}
exports.ensureAuthenticated = ensureAuthenticated;
