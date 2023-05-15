import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/router.js';
import express from 'express';
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const app = express();

app.use(cors());
app.use(router);

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'Main',
  })
  .then(() => {
    console.log('Connected to the Database.');
  })
  .catch((err) => console.error(err));

export default app;