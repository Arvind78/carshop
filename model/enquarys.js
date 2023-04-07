const mongoose = require("mongoose");
const enquaryModel = mongoose.Schema({
    username:{type:String},
    email:{type:String},
    carname:{type:String},
    phone:{type:Number},
    model:{type:String},
    color:{type:String},
    discription:{type:String}
},{timestamp:true})

module.exports = mongoose.model("enquary",enquaryModel)