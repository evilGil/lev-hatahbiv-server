var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
    {
        user_name: { type: String, required: true, max: 100 },
        email: { type: String, required: true, max: 100, unique: true },
        password: { type: String, required: true, max: 100 },
    }
);

//Export model
module.exports = mongoose.model('User', UserSchema);