const mongoose = require('mongoose');

const plm = require('passport-local-mongoose');


const userSchema = mongoose.Schema({
    fullname: String,
    username: String,
    email: String,
    password: String,
    
    profileImage: {
        type: String,
        default: "https://imgs.search.brave.com/KJm5w-cbELGkNcYvZ6RLPOkg9y9vZK_xGQGWeDH31N8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I2L1BlbmNpbF9k/cmF3aW5nX29mX2Ff/Z2lybF9pbl9lY3N0/YXN5LmpwZw"
    }
    ,
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post'
    }]
})
userSchema.plugin(plm);

module.exports = mongoose.model('user', userSchema);