import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import genToken from "../config/token.js"
export const signUp= async(req,res)=>{
    try{
        const {name , email , password}=req.body

        let existUser = await User.findOne({email})
        if(existUser){
            return res.status(400).json({message:"User already exist"})
        }

        const hashPassword = await bcrypt.hash(password,10)
        let user=await User.create({name,email,password:hashPassword})

        let token = await genToken(user._id)

        res.cookie("token",token,{
            httpOnly:true,
            secure:process.env.NODE_ENVIRONMENT,
            sameSite:"strict",
            maxAge:7 * 24 * 60 * 60 * 1000
        })
        return res.status(201).json(user)

    }catch(error){
        return res.status(500).json({message:"internal server error"})
    }
} 

export const logIn = async(req,res)=>{
    try{
        let {email , password}= req.body
        let user= await User.findOne({email})

        if(!email || !password){
            return res.status(400).json({message:"send all details"})
        }
        if(!user){
            return res.status(400).json({message:"User not exist"})
        }
        let isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).json({message:"incorrect Password"})
        }

        let token = await genToken(user._id)
        res.cookie("token",token,{
            httpOnly:true,
            secure:process.env.NODE_ENVIRONMENT,
            sameSite:"strict",
            maxAge: 7*24*60*60*1000
        })

    }catch(error){
        return res.status(500).json({message:`login error ${error}`})
    }
    
}