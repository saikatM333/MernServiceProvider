const Service  = require("../model/service-model")

const services = async (req , res ) =>{
    try {
         const response = await Service.find()
         if (!response){
            res.status(404).json({msg : "No service found "})
         return }
         res.status(200).json({msg : response})
    } catch (error) {
       // console.log(`sevices : ${error}`)
       console.log("hello")
    }
}

module.exports = services ;
