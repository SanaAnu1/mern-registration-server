require('dotenv').config()
const express=require('express')
const cors=require('cors')
require('./DB/connection.js')
const router=require('./Routes/router.js')


const rServer=express()
rServer.use(cors())
rServer.use(express.json())


rServer.use(router)


const PORT=3000
rServer.listen(PORT,()=>{
    console.log(`rServer started at : ${PORT}`);
})

rServer.get('/',(req,res)=>{
    res.send("rServer Started")
})