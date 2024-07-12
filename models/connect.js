const mongoose = require('mongoose');

exports.mondodb=()=>{
    try {
        mongoose.connect(process.env.MONGO_URL);
    console.log("connected to database");
    } catch (error) {
        console.log(error.message);
    }

}