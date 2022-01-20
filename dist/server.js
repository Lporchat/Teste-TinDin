"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = require("./routes");
require("../src/database");
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use(routes_1.router);
app.listen(3000, () => console.log('Server is Running 💕'));
