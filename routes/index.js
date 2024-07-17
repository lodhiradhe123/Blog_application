var express = require('express');
var router = express.Router();
const { isLoggedIn } = require("../utils/isLoggedIn")
const userSchema = require('../models/userschema');
const { indexpage, registeruserpage, loginpage, profilepage, createpostpage, explorePage, deleteuserpage, resetPasswordpage, updateprofilepage } = require('../controllers/indexControllers');

/* GET home page. */
router.get('/', indexpage);

router.get('/createuser', registeruserpage)

router.get('/login', loginpage)

router.get('/profile', isLoggedIn, profilepage)

router.get('/createpost', isLoggedIn, createpostpage)

router.get('/exploreBlog/:id', explorePage)

router.get('/updateprofile/:id', isLoggedIn, updateprofilepage)

router.get('/deleteuser/:id', deleteuserpage)

router.get('/resetPassword', isLoggedIn, resetPasswordpage);

router.get('/forgotEmail', (req,res,next)=>{
    res.render('forgotEmail');
})



module.exports = router;
