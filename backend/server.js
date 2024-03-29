const express =require("express");
const {PORT}= require("./config/index")
const cookieParser= require("cookie-parser");
const cors =require ("cors")
const errorHandler= require("./middleware/errorHandler")
const dbConnect = require("./database/index.js")
const router = require("./routes/index")
const crypto = require("crypto")
dbConnect()
const app = express()
app.use(cookieParser())
app.use(express.json({limit:"50mb"}))
const jwtSecret  = crypto.randomBytes(32).toString("hex");

console.log("JWT SECRET :" + jwtSecret)
app.use(router)
app.use(errorHandler)
app.listen(PORT,console.log(`Server is listening on PORT :${PORT}`))