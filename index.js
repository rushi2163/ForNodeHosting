const express= require('express')
const data=require('./SampleData.json')

require("dotenv").config();
const app =express()
const cors = require("cors");
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb', extended: true }));
const PORT=process.env.PORT
app.use( bodyParser.json());
// app.get('/user',(req,res)=>{
//     res.send(data)
// })
// app.get('/api/user/:id',(req,res)=>{
//     let ID=Number (req.params.id)
//     user=data.find((user)=>user.id===ID)
//     console.log(req.headers)
//     res.setHeader('X-header','custom header')
//     res.json(user)
// })
var corsOptions = {
    origin: "*"
  }
app.use(cors(corsOptions))
app.use(express.static('revision'))
app.get('/user',(req,res)=>{
    console.log("called");
    res.send({"message":"connected sucessfully"})
})
app.listen(PORT,()=>{console.log("server created");})
