import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"],
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true
    },
    username:{
        type:String,
        required:[true,"username is required"],
        unique:true
    },
    isverified:{
        type:Boolean,
        default:false
    },
    password:{
        type:String,
        required:[true,"password is required"],
    },
    verificationCode:{
      type:String,
      required:false 
    },
    verificationCodeExpiry:{
        type:Date,
        required:false
        
    },
    token:{
        type:String,
        required:false
    },
    age:{
        type:Number,
        min:[18,"age must be greater than 18"],
        max:[70,"age must be less than 100"]
    }

},{timestamps:true})  // created at and updated at

const User = mongoose.model("User",userSchema);  //users

export default User;

//TODO say 