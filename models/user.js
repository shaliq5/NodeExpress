var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passpotLocalMongoose = require('passport-local-mongoose');


var User = new Schema({
    admin: {
        type: Boolean,
        default: false
    }
});

User.plugin(passpotLocalMongoose);


module.exports = mongoose.model('User', User);