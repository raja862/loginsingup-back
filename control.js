
import User from "./shema.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()
const pass=process.env.JWT_SECRET
export const createUser=async(req,res)=>{

    try{
        const {name,email,password,confirmPassword}=req.body
        if(password !== confirmPassword){
            return res.status(400).json({ message: "Passwords don't match" });
        }
        const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User with this email already exists' });
      }
        const hasPassword= await bcrypt.hash(password,10);
const newUser= new User({name,email, password:hasPassword})
await newUser.save()
res.status(201).json({message:"user created" , data:newUser})

    }
    
    catch(error){
        res.status(500).json({error:"error in user"})
console.log(error)
    }
}



export const getUser=async(req,res)=>{

    try{
const {email,password}=req.body
const user=await User.findOne({email})
if(!user){
    return res.status(401).json({message:"user not found"})

}
const passwordMatch=await bcrypt.compare(password, user.password)
if(!passwordMatch){
    return res.status(401).json({message:"password not correct"})
}

const token=jwt.sign({_id:user._id},pass,{expiresIn:'4m'})
user.token=token
await user.save()

res.status(200).json({message:"login succesfully", data:token})
    }
    catch(error){
res.status(500).json({message:"login faild"})
    }
}




export const getOne=async(req,res)=>{
  try{
const empId= req.params.id
const resp= await User.findById(empId)
res.status(200).json(resp)
  }
  catch(error){
res.status(500).json(error)
  }
}

export const updateOne=async(req,res)=>{
  try{
const empId=req.params.id
    const {age,gender,dob,mobile}=req.body

const result= await User.updateOne({_id:empId},{age,gender,dob,mobile})
if(result.matchedCount===0){
  return res.status(400).json({message:"this no id matched"})
}
const updated= await User.findById(empId)
res.status(200).json({message:"updated", data:updated})
  }

  catch(error){
res.status(500).json({message:"error not updated user"})
  }
}






