const express = require ("express");
const cors  = require("cors")
const app  = express()

const errorMiddleWare = require('./middleware/error-middleware')
const connectDb = require("./utils/db")
const router  = require("./router/rote")
const contactrouter  = require("./router/contact-router");
const servicerouter  = require("./router/service-router");

//const corsOptions = {
 //   origin:"http://localhost:5173",
 //   methods:"GET , PUT , POST , DELETE",
 //   credentials:true,
//}
app.use(cors())

app.use(express.json())
app.use("/api/auth" , router)
app.use("/api/form" , contactrouter)
app.use("/api/data" ,servicerouter )

app.use (errorMiddleWare)

const PORT = 5000
connectDb().then(()=>{app.listen(PORT , ()=>{
    console.log (`app is runninng on ${PORT}`)
})

})

