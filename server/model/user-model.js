const mongoose = require("mongoose")
const jwt  = require("jsonwebtoken")
const userScheme = new mongoose.Schema(
{
    username: {
        type : String ,
        required : true ,
    },
    email: {
        type : String,
        required : true ,
    },
    phone : {
        type : String ,
        required : true ,
    },
    password: {
        type : String ,
        required : true ,
    },
   
    isAdmin:{
        type:Boolean,
        default : false ,

    }
}

)

// json we token 
const sekretkey = "saikatMondal"
userScheme.methods.generateToken = async function (){

try {
    return jwt.sign({
        userId : this._id.toString(),
        email: this.email,
        isAdmin : this.isAdmin

    },
    sekretkey)
} catch (error) {
    console.log(error)
}

}
const User = new mongoose.model("User" , userScheme)

module.exports = User ;
