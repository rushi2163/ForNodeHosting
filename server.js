const express= require('express')
const data=require('./SampleData.json')
const app =express()
const cors = require("cors");
app.listen(8000,()=>{console.log("server created");})
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb', extended: true }));

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
app.use(cors())
app.get('/',(req,res)=>{
    console.log("called");
    res.status(200).send({"message":"connected sucessfully"})
})