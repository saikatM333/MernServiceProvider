const express = require("express")
const router  = express.Router()

const authcontroller= require("../controller/auth-controller")
const authmiddleware= require("../middleware/auth-middleware")
//router.get("/" , (req , res )=>{
 //res.status(200).send("welcom to router")
//})
const {signSchema,loginSchema} = require("../validator/auth-validator")
const validate  = require("../middleware/validate-middleware")

router.route("/").get(authcontroller.home)
router.route("/register").post(validate(signSchema) , authcontroller.register)
router.route("/login").post(validate(loginSchema),authcontroller.login)
router.route("/user").get(authmiddleware , authcontroller.user )
module.exports = router