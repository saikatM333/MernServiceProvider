const { z }  = require("zod")

const loginSchema = z.object({

  email: z .string({required_error: "email is reqiured"})
    .trim()
    .email({massage:"invalid email address"}),

    password: z .string({required_error: "password  is reqiured"})
    .trim()
    .min(6 , {message:"password must be at least 6 chahr"}),
    
  
})

const signupSchema= z.object({
    username: z .string({required_error: "name is reqiured"})
    .trim()
    .min(3 , {message:"name must be at least 3 chahr"}),

  email: z .string({required_error: "email is reqiured"})
    .trim()
    .email({massage:"invalid email address"}),
    
    phone: z .string({required_error: "phone is reqiured"})
    .trim()
    .min(10 , {message:"name must be at least 3 chahr"}),
    
   password: z .string({required_error: "password  is reqiured"})
    .trim()
    .min(6 , {message:"password must be at least 6 chahr"}),
    
    
})

module.exports = {signupSchema ,loginSchema}