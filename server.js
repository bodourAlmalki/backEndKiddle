import express from 'express';
import dotenv from 'dotenv';
import db from './config/db.js';
import userRoute from './routes/userRoutes.js';
import quizRoute from './routes/quizRoutes.js';
import courseRoute from './routes/courseRoutes.js';

import bodyParser from 'body-parser';
import errorHandler from './middleware/error.middleware.js';
import cors from 'cors';
const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
};

dotenv.config();

const port = process.env.PORT || 5000;

await db();

const app = new express();
app.use(cors(corsOptions));

app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//Routes
app.get('/', (req, res) => {
  res.send('hello world');
});

app.use('/user', userRoute);
app.use('/course', courseRoute);
app.use('/quiz', quizRoute);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`API IS RUNNING ON PORT: ${port}`);
});
