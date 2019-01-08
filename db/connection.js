require('dotenv').config();

const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/newsLink").then(() => {
    console.log("MONGODB is now connected")
})
// mongoose.connect(process.env.MONGODB_URI).then(() => {
//     console.log('Connected to MongoDB')
// }) 


module.exports = mongoose;