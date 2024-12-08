import express from 'express';
import mongoose from "mongoose";
import cookieParser from 'cookie-parser'; 
import 'dotenv/config';
import cors from 'cors'; //npm install cors

const app = express()
const port = 3006;
const dbPassword=process.env.DBPASSWORD as string;

app.use(express.json());
app.use(express.static('client/build'));
app.use(cookieParser());


//DB
const DBurl = process.env.DBURL;
const database = "beauty"

console.log(DBurl, database);

//connection
mongoose.connect(`${DBurl}/${database}`).then(()=>{
    console.info("DB connected")
}).catch((err)=>{
    console.error(err)
});

//routes
import clientsRoutes from './routes/client/clientRoutes'
app.use("/api/clients", clientsRoutes);
import productRoutes from './routes/product/productRoutes';
app.use('/api/products', productRoutes);
import cartRoutes from './routes/cart/cartRoutes';
app.use('/api/products', cartRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

