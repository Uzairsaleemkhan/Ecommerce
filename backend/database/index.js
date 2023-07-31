const mongoose = require("mongoose");
const{MONGODB_CONNECTION_STRING} =require("../config/index")



const dbConnect= async()=>{

    try{
        mongoose.set("strictQuery",false)
        const connect = await mongoose.connect(
            MONGODB_CONNECTION_STRING
        )
        console.log(`Database connected to host : ${connect.connection.host}`)
    }
    catch(error){
        console.log(`Error on ${error}`)
    }
}

module.exports = dbConnect