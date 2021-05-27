var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passpotLocalMongoose = require('passport-local-mongoose');


var User = new Schema({
    firstname: {
        type: String,
        default: ''
    },
    lastname: {
        type: String,
        default: ''
    },
    admin: {
        type: Boolean,
        default: false
    }
});

User.plugin(passpotLocalMongoose);


module.exports = mongoose.model('User', User);