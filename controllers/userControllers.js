
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

    res.redirect('/login');

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
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    if (req.files) {
      const result = await uploadFile(req, res)
      user.profileImage = result.url;
    }
    // user.image.fileId = result.fileId;
    await user.save();

    res.redirect('/profile')
    // console.log(result);


  } catch (error) {
    console.log(error);

  }
}
