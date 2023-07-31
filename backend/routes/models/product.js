const mongoose = require("mongoose")
const Schema = mongoose.Schema;




const productSchema= new Schema({

    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:String,required:true},
    category:{type:String,required:true},
    brand:{type:String},
    modelNumber:{type:String},
    dimensions:{
        length:{type:Number},
        width:{type:Number},
        height:{type:Number}
    },
    weight:{type:Number},
    material:{type:String},
    color:[{type:String}],
    upholsteryType:{type:String},
    style:{type:String},
    frameMaterial:{type:String},
    cusionFilling:{type:String},
    seatingCapacity:{type:Number},
    assemblyRequired:{type:Boolean,default:false},
    imageURL:{type:String},
    stockQuantity:{type:Number,default:0},
    isFeatured:{type:Boolean,default:false},
    additionalImages:[{type:String}]
},
{timestamps:true})


module.exports = mongoose.model("Product",productSchema,"products")