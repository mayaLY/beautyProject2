import express from 'express';
import mongoose from "mongoose";
import cookieParser from 'cookie-parser'; 
import 'dotenv/config';
import cors from 'cors'; //npm install cors

const app = express()
const port = 3001;
app.use(cors()); //open to the whole world. Highly dangerous!!!

app.use(express.json());
app.use(express.static('client/build'));
app.use(cookieParser());


//DB
const dbUrl = "mongodb+srv://mayalevy20:e0ok6g2sVajOLOhu@cluster0.emeus.mongodb.net"
const database = "beauty"

console.log(dbUrl, database);

//connection
mongoose.connect(`${dbUrl}/${database}`).then(()=>{
    console.info("DB connected")
}).catch((err)=>{
    console.error(err)
});

//routes
import productRoutes from './routes/product/productRoutes';
app.use('/api/products', productRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

