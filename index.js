const express= require('express');
const dbConnetion =require('./connection/dbconnection');
const dotenv =require('dotenv')
const routes = require('./router/routes')
const cors = require("cors")
const app = express();
app.use(cors())
app.use(express.json())
app.use('/',routes)
dotenv.config()


app.listen(process.env.Port,(res,err)=>{
    if(err) throw err;
    console.log(`server is runing ${process.env.Port}!`)
     dbConnetion()
})
















