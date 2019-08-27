const express=require('express')
const path=require('path')

const SERVER_PORT = process.env.PORT || 3333

const app=express()
app.use('/public',express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=> res.send("HELLO FROM THE BACKEND"))

app.listen(SERVER_PORT,()=> console.log("SERVER STARTED AT http://localhost:3333"))