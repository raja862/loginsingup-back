import mongoose from "mongoose";


const userSchema=mongoose.Schema({
    name: String,
    email: String,
    password: String,
    
    age: Number,
      gender: String,
      dob: String,
      mobile: String,

})


const User=mongoose.model("Userdata", userSchema)

export default User;
