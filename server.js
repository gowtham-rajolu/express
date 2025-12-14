const express=require("express")
const app=express()
app.get('/',(req,res)=>{
    console.log('default route')
    res.send("default route")
})
app.listen(3000)