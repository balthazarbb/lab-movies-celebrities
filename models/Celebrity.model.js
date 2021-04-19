const mongoose = require('mongoose') // here youare importing the whole package
// const { Schema } = require('mongoose') // here zou are onlz importing the Schema Class from mongoose

let CelebritySchema = new mongoose.Schema({
    name: String,
    occupation: String,
    catchPhrase: String
})

let CelebrityModel = mongoose.model('celebrities', CelebritySchema);

module.exports = CelebrityModel