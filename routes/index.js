var express = require('express');
var router = express.Router();
const {isLoggedIn} = require("../utils/isLoggedIn")
const userSchema = require('../models/userschema');
const { indexpage, registeruserpage, loginpage, profilepage, createpostpage, explorePage } = require('../controllers/indexControllers');

/* GET home page. */
router.get('/',indexpage);

router.get('/createuser',registeruserpage)

router.get('/login',loginpage)

router.get('/profile',isLoggedIn,profilepage)

router.get('/createpost',isLoggedIn,createpostpage)

router.get('/exploreBlog/:id',explorePage)

module.exports = router;
