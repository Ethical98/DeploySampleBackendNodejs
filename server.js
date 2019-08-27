const express=require('express')
const path=require('path')

const app=express()
app.use('/public',express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=> res.send("HELLO FROM THE BACKEND"))

app.listen(3333,()=> console.log("SERVER STARTED AT http://localhost:3333"))