const {Schema, model} = require('mongoose') // here youare importing the whole package
//const { Schema } = require('mongoose') // here zou are onlz importing the Schema Class from mongoose

let movieSchema = new Schema({
    title: String,
    genre: String,
    plot: String
})

const MovieModel = model('movies', movieSchema);

module.exports = MovieModel;