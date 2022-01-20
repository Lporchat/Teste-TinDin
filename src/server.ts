import dotenv from "dotenv"
import express from 'express';
import morgan from 'morgan';
import { router } from './routes';
import '../src/database'


const app = express();

dotenv.config()

app.use(morgan("dev"));
app.use(express.json());

app.use(router);




app.listen(3000, () => console.log('Server is Running 💕'))