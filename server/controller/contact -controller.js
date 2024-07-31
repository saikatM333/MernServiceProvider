const Contact  = require("../model/contact-model")

const contactFrom = async (req , res  ) =>{
    try {
        const {username , email , message}= req.body ;
        console.log(req.body)
        await Contact.create({username , email , message })
      
       res.status(200).json({message : "message is succefully  send "})
    } catch (error) {
       
        return res.status(500).json(error)
    }
}

module.exports  = contactFrom
