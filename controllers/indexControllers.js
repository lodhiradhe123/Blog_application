
const { isLoggedIn } = require('../utils/isLoggedIn');


exports.indexpage = (req, res, next) => {
    res.render('index');
}

exports.registeruserpage = (req, res) => {
    res.render('createuser');

}

exports.loginpage = (req, res) => {
    res.render('login');

}

exports.profilepage = isLoggedIn, (req, res) => {
    res.render('profile');

}