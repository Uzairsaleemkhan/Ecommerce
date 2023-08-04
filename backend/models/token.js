const mongoose = require("mongoose");

const {Schema} = mongoose;


const refreshTokenSchema = new Schema ({
    token:{type:String, required:true},
    user:{type:mongoose.SchemaTypes.ObjectId,required:true}
})


module.exports = mongoose.model("Refreshtoken",refreshTokenSchema,"tokens")