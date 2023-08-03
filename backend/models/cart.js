const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const cartSchema = new Schema({
    product:{type:mongoose.SchemaTypes.ObjectId,required:true,ref:"Product"},
    user:{type:mongoose.SchemaTypes.ObjectId,required:true,ref:"User"},
    count:{type:Number,required:true,default:1}
})


module.exports = mongoose.model("Cart",cartSchema,"carts");