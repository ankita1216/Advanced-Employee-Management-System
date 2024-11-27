

const express=require("express")
const connectDB=require('./db.js')
const itemModel=require('./models/item.js')
const cors=require("cors")
const app=express()
app.use(express.json)
app.use(cors)

app.get('/',async(req,res)=>{
    const response=await itemModel.find()
    return res.json({items:express.response})
})

connectDB()

app.listen(3000,()=>{
    console.log("App is running");
})