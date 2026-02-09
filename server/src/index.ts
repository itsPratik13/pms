import express from "express"

const app=express();

app.get("/",(req,res)=>{
    console.log("Working")
})

const port=process.env.PORT||8000;

app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})
