
import express from 'express'
import mongoose from "mongoose";
import cookieParser from 'cookie-parser'; 
import 'dotenv/config';
import cors from 'cors'; //npm install cors

const app = express()
const port = 5173;
app.use(cors()); //open to the whole world. Highly dangerous!!!

app.use(express.json());
app.use(express.static('client/build'));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//DB
const dbUrl = process.env.DB_URL;
const database = 'fs-mar24';

//connection
mongoose.connect(`${dbUrl}/${database}`).then(()=>{
    console.info("DB connected")
}).catch((err)=>{
    console.error(err)
});

//routes
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
