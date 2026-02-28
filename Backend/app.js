import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import productRouter from './Routes/productRoute.js';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", productRouter);

const PORT = process.env.PORT || 4001;
mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    
});
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log("Error connecting to MongoDB:", err);
})



