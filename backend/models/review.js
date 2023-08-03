const mongoose = require("mongoose")
const Schema = mongoose.Schema


const reviewSchema= new Schema({

product:{type:mongoose.SchemaTypes.ObjectId,required:true,ref:"Product"},
user:{type:mongoose.SchemaTypes.ObjectId,required:true, ref:"User"},
rating:{type:Number,required:true},
comment:{type:String, required:true}
})

module.exports= mongoose.model("Review",reviewSchema,"reviews")