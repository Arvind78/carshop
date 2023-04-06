const mongoose = require("mongoose");
const dealerModel = mongoose.Schema({
    userName:{type:String},
    email:{type:String},
    password:{type:String}
},{timestamp:true})

module.exports = mongoose.model("dealer",dealerModel)