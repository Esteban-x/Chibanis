const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    role: String,
    isVulnerable: Boolean,
    password: String,
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel