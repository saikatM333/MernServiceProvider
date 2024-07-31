const express = require("express")
const router  = express.Router()
const contactFrom = require("../controller/contact -controller")

router.route("/contact").post(contactFrom)

module.exports = router 