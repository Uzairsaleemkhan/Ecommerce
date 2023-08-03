import mongoose from "mongoose";
const Schema = mongoose.Schema


const shippingSchema = new Schema({
    product:{type:mongoose.SchemaTypes.ObjectId,ref:"Product",required:true},
    weight:{type:Number,required:true},
    dimensions:{
        length:{type:Number, required:true},
        width:{type:Number, required:true},
        height:{type:Number,required:true}
    }
    ,cost:{type:Number,required:true}
})

const myModal = mongoose.model("Shipping",shippingSchema,"shipping")


module.exports = myModal