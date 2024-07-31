const validate  = (schema) => async (req , res , next ) =>{
  
   try {
 const parseBody = await schema.parseAsync(req.body)
 req.body = parseBody ;
 next()
    
   } catch (err) {
   // res.status(400).json({msg:error})
   const status = 422
   const message = "Fill the field properly"
   const extraDetails = err.errors[0].message
   const error ={
    status, 
    message,
    extraDetails
   }
   console.log(error)
   next(error)
   }
}

module.exports = validate ;