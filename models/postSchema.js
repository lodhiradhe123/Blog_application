const mongoose = require('mongoose');



const userSchema = mongoose.Schema({
    title:String,
    image:String,
    description:String,
    user:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
    likes:[{type:mongoose.Schema.Types.ObjectId,ref:"user"}]

},{timestamps:true})

module.exports = mongoose.model('post', userSchema);