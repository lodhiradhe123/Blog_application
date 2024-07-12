


exports.indexpage = (req, res, next) => {
    res.render('index');
}

exports.registeruserpage = (req, res) => {
    res.render('createuser');

}

exports.loginpage = (req, res) => {
    res.render('login');

}

exports.profilepage = (req, res) => {
    res.render('profile');

}