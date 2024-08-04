import express from 'express';
import dotenv from 'dotenv';
import connectDatabase from './database.js';
import userRouter from './routes/user.routes.js';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use('/api/user', userRouter);

app.listen(port, async () => {
    await connectDatabase();
    console.log(`Server is running at port : ${port}`);
})