import mongoose from "mongoose";



const mongoBD=async()=>{

    try{
const connect=await mongoose.connect("mongodb+srv://TECHSUP:TECHSUP@cluste12.hyf14iy.mongodb.net/")
console.log("DB connected ")
return connect
    }
    catch(error){
console.log(error)
    }
}
export default mongoBD