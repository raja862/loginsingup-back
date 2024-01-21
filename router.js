import { createUser, getUser,userprofile } from "./control.js";
import express from "express"


 const router = express.Router()


router.post("/signup" , createUser)
router.post ("/login" , getUser)
 router.get("/profile",userprofile )

 export default router;