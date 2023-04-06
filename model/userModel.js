const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
},{timestamp:true})
module.exports = mongoose.model('userInfo', userSchema)

