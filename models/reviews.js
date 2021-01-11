const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema({
    userName:String,
    stars:String,
    title:String,
    photo:String,
    blurb:String,
    cafeName:String,
}, {timestamps:true})

const Review = mongoose.model('reviews', reviewSchema)

module.exports = Review