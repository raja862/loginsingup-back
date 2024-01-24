import { createUser, getOne, getUser,updateOne} from "./control.js";
import express from "express"

 const router = express.Router()


router.post("/signup" , createUser)
router.post ("/login" , getUser)
 router.get("/all", getAll)
router.get("/one/:id", getOne)
router.put("/update/:id",updateOne)
 export default router;
