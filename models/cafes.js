const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cafeSchema = new Schema({
    cafeName:String,
    photoURL:String
}, {timestamps:true})

const Cafe = mongoose.model('cafes', cafeSchema)

module.exports = Cafe