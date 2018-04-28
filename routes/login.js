var express = require('express');
var router = express.Router();
var user_controller = require('../controllers/userController');

router.get('/', function (req, res, next) {
  res.send('login service');
});

//GET request for user 
router.get('/get_user/:email', user_controller.get_user_get);

//GET request for user creation
router.get('/create_user/:user_name/:email/:password', user_controller.user_create_get);

//POST request for user creation
router.post('/create_user', user_controller.user_create_post);

//GET request for users 
router.get('/get_users', user_controller.get_users_get);

//GET request for delete user 
router.get('/delete_user/:email/:password', user_controller.delete_user_get);

module.exports = router;
