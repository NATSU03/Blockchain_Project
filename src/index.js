const express = require ("express")
const mongoose = require ("mongoose")
const bodyParser = require("body-parser")
const route = require ("./route")

const app = express()

app.use (bodyParser.json())

app.use(bodyParser.urlencoded({extended : true}))

mongoose.connect ("mongodb+srv://vishwasw75:9595335675@firstcluster.jde07cq.mongodb.net/Blockchain",{useNewUrlParser:true})
.then (()=> console.log(("Mongoose is connected"))).catch (err=> console.log(err.message))

app.use ("/",route)

app.listen(process.env.PORT||3000, function(){console.log("express is running on port "+ (process.env.PORT||3000))})