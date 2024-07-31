const mongoose = require("mongoose")

const URI = "mongodb://127.0.0.1:27017/database" 

const connectDb = async ()=>{
    try {
        await mongoose.connect(URI , {
            useNewUrlParser: true,
            useUnifiedTopology: true,})
        console.log("connection succesfuly done ")

    }
    catch {
     
        console.log("database connection failed ")
        process.exit(0);
    }
} 
module.exports = connectDb

