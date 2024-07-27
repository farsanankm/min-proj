import express from 'express'
import { connection } from 'mongoose';
import dotenv from 'dotenv';
import router from './Route/Route';


dotenv.config();

const app = express();
app.user('/',router)

const PORT=8000;


app.listen(PORT,()=> console.log('server is running successfully.....${PORT}'));

const USERNAME =process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

connection(USERNAME,PASSWORD);


