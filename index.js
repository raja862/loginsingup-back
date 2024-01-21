import express from "express"
import dotenv from "dotenv"
import mongoBD from "./mongoo.js"
import router from "./router.js"
import cors from "cors"
dotenv.config()

mongoBD()

// const port= process.env.PORT
const app=express()
app.use(express.json());
app.use(cors())
app.use(router)

// app.get("/",(req,res)=>{
//     res.send("HI HELLO")
// })

   
app.listen(3001,()=>{

    console.log("port running 3001")
})