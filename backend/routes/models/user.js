const mongoose = require("mongoose")

const Schema = mongoose.Schema


  const userSchema=  new Schema({
        name:{required:true,type:String},
        username:{required:true,type:String},
        password:{required:true,type:String},
        email:{type:String,required:true},
        address:{type:String,required:true},
        phoneNumber:{type:String,required:true}
    },{
        timestamps:true
    })

mongoose.model("User",userSchema,"users")

