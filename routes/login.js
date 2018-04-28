var express = require('express');
var router = express.Router();
var user_controller = require('../controllers/userController');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('login service');
});


//GET request for user creation
router.get('/get_user/:email', user_controller.get_user_get);

//GET request for user creation
router.get('/create_user/:user_name/:email/:password', user_controller.user_create_get);

//GET request for users 
router.get('/get_users', user_controller.get_users_get);

//GET request for delete user 
router.get('/delete_user/:email/:password', user_controller.delete_user_get);

module.exports = router;
