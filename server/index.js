import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
const { connection: Connection } = mongoose;
import cors from 'cors';
import postRoutes from './routes/posts.js';


import { error } from 'console';


const app=express();

app.use('/posts', postRoutes);


app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors());

const CONNECTION_URL="mongodb+srv://bhural:bhural123@cluster0.1ce7yg7.mongodb.net/";
const PORT=process.env.PORT ||5000
mongoose.connect(CONNECTION_URL)
.then(()=>app.listen(PORT,()=>console.log('server is Running on port:', PORT)))
.catch((error)=>console.log(error.message))
