
import bcryptjs from "bcryptjs"
import User from "../models/user-model.js";



export const signup = async (req,res)=>{
const { username, email, password } = req.body;
const hashedpassword = bcryptjs.hashSync(password,10);
const newUser = new User({username,email,password:hashedpassword})

try{
    await newUser.save();
    res.status(201).json("user created successfully")
}catch(e){
    res.status(500).json(e.message);
}
}

