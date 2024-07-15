const mongoose = require('mongoose');

const plm = require('passport-local-mongoose');


const userSchema = mongoose.Schema({
    fullname: String,
    username: String,
    email: String,
    password: String,
    image: {
        type: String,
        default: "https://imgs.search.brave.com/ZlMA1xyb5O_WINlJ1KTJPjXirJamlkRY4vG4wWqequQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvY29vbC1wcm9m/aWxlLXBpY3R1cmUt/ODdoNDZnY29iamw1/ZTR4dS5qcGc"
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post'
    }]
})
userSchema.plugin(plm);

module.exports = mongoose.model('user', userSchema);