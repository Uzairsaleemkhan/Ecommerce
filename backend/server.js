const express =require("express");
const cookieParser= require("cookie-parser");
const cors =require ("cors")

const app = express()

app.use(cookieParser())
app.use(express.json({limit:"50mb"}))



app.listen(PORT,console.log(`Server is listening on PORT :${PORT}`))