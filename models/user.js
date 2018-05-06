var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
    {
        user_name: {
            type: String,
            required: [true, "must specify user name"],
            maxlength: [10, "user name is too long"],
            minlength: [3, "user name is too short"]
        },
        email: {
            type: String,
            required: [true, "must specify email"],
            maxlength: [100, "email is too long"],
            minlength: [3, "email is too short"],
            unique: true
        },
        password: {
            type: String,
            required: [true, "must specify password"],
            maxlength: [100, "password is too long"],
            minlength: [3, "password is too short"]
        },
    }
);

//Export model
module.exports = mongoose.model('User', UserSchema);