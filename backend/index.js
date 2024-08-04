import express from 'express';
import dotenv from 'dotenv';
import connectDatabase from './database.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import userRouter from './routes/user.routes.js';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

app.use('/api/user', userRouter);

app.listen(port, async () => {
    await connectDatabase();
    console.log(`Server is running at port : ${port}`);
})