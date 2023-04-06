const mongoose = require("mongoose");
const carModel = mongoose.Schema({
    carname:{type:String},
    model:{type:String},
    image:{type:String},
    color:{type:String},
    discription:{type:String}
},{timestamp:true})

module.exports = mongoose.model("car",carModel)