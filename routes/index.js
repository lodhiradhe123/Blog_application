var express = require('express');
var router = express.Router();

const {isLoggedIn} = require("../utils/isLoggedIn")


const { indexpage, registeruserpage, loginpage, profilepage } = require('../controllers/indexControllers');

/* GET home page. */
router.get('/',indexpage);

router.get('/createuser',registeruserpage)

router.get('/login',loginpage)

router.get('/profile',isLoggedIn, profilepage)

module.exports = router;
