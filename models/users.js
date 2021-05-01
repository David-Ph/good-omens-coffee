const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

let userSchema = new Schema({
    email: String,
    password: String
})

userSchema.plugin(passportLocalMongoose, {
    usernameField: 'email'
  });

let User = mongoose.model('User', userSchema);

module.exports = {User};
