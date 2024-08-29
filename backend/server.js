import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import connectDB from './connecttoDB/connectDB.js'
import authRoutes from './routes/authRoutes.js'

dotenv.config('../.env');
const app = express();

const option = {
    origin:"http://localhost:3000",
    credentials:true
};

app.use(cookieParser());
app.use(express.json());
app.use(cors(option));

//auth
app.use('/api/auth',authRoutes);

const Port = process.env.PORT || 3000;

app.listen(Port,()=>{
    connectDB();
    console.log("connected")
})