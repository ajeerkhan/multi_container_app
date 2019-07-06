let mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
  email: String
})

const User = mongoose.model('Users', userSchema);

module.exports = User;