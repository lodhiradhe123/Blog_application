const User = require('../models/userschema');
const passport = require('passport');
const LocalStrategy = require('passport-local');
passport.use(new LocalStrategy(User.authenticate()));

 exports.isLoggedIn = (req,res,next)=>{
    if(req.isAuthenticated()){
        next();
    }
    res.redirect('/login')
}

// module.exports = isLoggedIn;