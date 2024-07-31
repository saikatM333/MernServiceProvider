const jwt = require("jsonwebtoken")
const User = require("../model/user-model")

const authmiddleware = async (req , res , next )=>{
    const token = req.header("Authorization")


    if (!token){
        return res.status(401).json(({message : "unauth token not found "}))
    }

    const jwtToken = token.replace("Bearer" , "").trim()
   

    try {
           const isverified = jwt.verify(jwtToken , "saikatMondal")
           const userData = await User.findOne({email : isverified.email}).select ({password: 0 , })

           console.log(userData)

           req.user = userData
           req.token = token
           req.userID = userData._id 
           next()
    } catch (error) {
        
    }


   
}

module.exports = authmiddleware