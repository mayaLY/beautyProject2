import express from 'express';
import mongoose from "mongoose";
import cookieParser from 'cookie-parser'; 
import 'dotenv/config';
import cors from 'cors'; //npm install cors

const app = express()
const port = 3006;
const dbPassword=process.env.DBPASSWORD as string;
app.use(cors()); //open to the whole world. Highly dangerous!!!

app.use(express.json());
app.use(express.static('client/build'));
app.use(cookieParser());


//DB
const DBurl = (`mongodb+srv://${dbPassword}@cluster0.emeus.mongodb.net/beauty-project`)
const database = "beauty"

console.log(DBurl, database);

//connection
mongoose.connect(`${DBurl}/${database}`).then(()=>{
    console.info("DB connected")
}).catch((err)=>{
    console.error(err)
});

//routes
import productRoutes from './routes/Product/ProductRoutes';
app.use('/api/products', productRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

