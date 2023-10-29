const mongoose = require("mongoose")
const SignUpSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})
//Jai SHREERAM
module.exports=mongoose.model('SignUp',SignUpSchema);