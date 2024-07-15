
const User = require('../models/userschema');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const uploadFile = require('./imageuploader');
passport.use(new LocalStrategy(User.authenticate()));

exports.registerpage = async function (req, res, next) {
  try {
    const { fullname, username, email, password } = req.body;
    const newUser = await User.register({
      fullname,
      username,
      email
    }, password);

    res.send("registered successfully");

    // User.register(newUser, req.body.password, function(err, user){
    //   if(err){
    //     res.send(err);
    //   }
    //   passport.authenticate('local')(req, res, function(){
    //     res.redirect('/login');
    //   });
    // } )
  } catch (error) {
    console.log(error);
  }
}


exports.loginpage = passport.authenticate('local', {
  successRedirect: "/profile",
  failureRedirect: "/login",
}), function (req, res, next) { }


exports.logoutpage = (req, res, next) => {
  req.logOut(() => {
    res.redirect('/')
  })
}

exports.updatepage = async (req, res, next) => {
  try {
    
    uploadFile(req, res)


  } catch (error) {
    console.log(error);

  }
}
