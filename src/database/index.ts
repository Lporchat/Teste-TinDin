import { connect } from "mongoose";
import dotenv from "dotenv"
dotenv.config()

connect(process.env.MONGODB!, () => console.log('banco de dados iniciado'));
