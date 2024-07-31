const User = require ("../model/user-model")
const bcrypt = require("bcryptjs")

const home  = async (req , res ) =>{
    try{
        res.status(200).send("welcome to home router+ controller")
    }
    catch(error){
        console.log(error)
    }
}


const register  = async (req , res ) =>{

    try{
        console.log(req.body)
        
        const {username , email , phone , password } = req.body
        const userExist  = await User.findOne ({email})

       if (userExist){
            return res.status(400).json({msg : "email already exist "})
        }
        // hashcode 
        const saltRound  = 10 ;
        const hash_password = await bcrypt.hash(password , saltRound)

        await User.create({username , email , phone , password : hash_password})



        const userCreated = await User.create({username , email , phone , password })

        
        res.status(200).json({message: req.body , token:await userCreated.generateToken()})
    }
    catch(error){
        console.log(error)
    }
}

// user login logic 

const login = async (req ,res  )=>{

try {
    console.log(req.body)
    const {email , password} = req.body 

    const userExist =await  User.findOne ({email})

    if (!userExist){
        return res.status(500).json({message : "invalid credential "})
    }

    const user = await bcrypt.compare (password , userExist.password)

    if (user){
        res.status(200).json({message: req.body , token:await userExist.generateToken()})
    }
    else {
        res.status(401).json({message: "invalid credential"})
    }
} catch (error) {
    console.log(error)
    
}

}


const user = async (req , res ) =>{
    try {
        const userData = req.user  
        console.log(userData)
        return res.status(200).json({userData})
          
    } catch (error) {
        console.log (`error form the user route  ${error}`)
        
    }
}
module.exports = {home , register  ,login ,user }