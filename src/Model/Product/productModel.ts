const mongoose = require('mongoose');
const Schema = mongoose.Schema;



export const MakeupProductSchema = new Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    brand:String,
    price:Number,
    image_link:String,
    category:String,
});

const Product =  mongoose.model('Product', MakeupProductSchema);

export default Product
