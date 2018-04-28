var User = require('../models/user');

// Display list of all Users.
exports.user_list = function (req, res) {
    res.send('NOT IMPLEMENTED: BookInstance list');
};

// get user GET.
exports.get_user_get = function (req, res, next) {
    console.log("try to find user with email " + req.params.email);
    User.find({ 'email': req.params.email }, function (err, users) {
        if (err) {
            return next(err);
        }
        if (users.length > 0) {
            res.send(JSON.stringify(users));
        }
        else {
            res.send("didn't find user with mail " + req.params.email);
        }
    });
};

// get users GET.
exports.get_users_get = function (req, res, next) {
    User.find(function (err, users) {
        if (err) {
            return next(err);
        }
        console.log("get all users");
        res.send(JSON.stringify(users));
    });
};

// User create form on GET.
exports.user_create_get = function (req, res, next) {
    User.find({ email: req.params.email }), function (err, user) {
        if (err) return next(err);
    }
    var user = new User(req.params);
    console.log("try to create new user: " + JSON.stringify(user));
    user.save(function (err) {
        if (err) {
            return next(err);
        }
        console.log("user saved!");
        res.send(JSON.stringify(req.params));
    });
};

// delete user GET.
exports.delete_user_get = function (req, res, next) {
    console.log("try to delete user with email " + req.params.email);
    User.findOne({ 'email': req.params.email }, function (err, user) {
        if (err) {
            return next(err);
        }
        if (user) {
            if (user.password == req.params.password) {
                user.remove();
                console.log('delete user: ' + JSON.stringify(user));
                res.send("user " + req.params.email + " was deleted");
            }
            else {
                console.log('delete user: wrong password');
                res.send('delete user: wrong password');
            }
        }
        else {
            console.log('didn\'t find user ' + req.params.email);
            res.send('didn\'t find user ' + req.params.email);
        }
    });
};

// Handle User create on POST.
exports.user_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: User create POST');
};

// Display User delete form on GET.
exports.user_delete_get = function (req, res) {
    res.send('NOT IMPLEMENTED: User delete GET');
};

// Handle BookInstance delete on POST.
exports.bookinstance_delete_post = function (req, res) {
    res.send('NOT IMPLEMENTED: BookInstance delete POST');
};

// Display BookInstance update form on GET.
exports.bookinstance_update_get = function (req, res) {
    res.send('NOT IMPLEMENTED: BookInstance update GET');
};

// Handle bookinstance update on POST.
exports.bookinstance_update_post = function (req, res) {
    res.send('NOT IMPLEMENTED: BookInstance update POST');
};