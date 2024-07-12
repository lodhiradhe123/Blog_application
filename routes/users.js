var express = require('express');
var router = express.Router();
const { registerpage, loginpage, logoutpage } = require('../controllers/userControllers');


router.post('/register', registerpage);

router.post('/login', loginpage)

router.get('/logout',logoutpage)

module.exports = router;
