// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here
const MovieModel = require("../models/movie.model")

// GET '/movies/create' route 
router.get('/movies/create', (req, res, next)=>{
    console.log('I meant to say "HELLO" ')
    res.render('movies/new-movie.hbs')    
});

router.post('/movies/create', (req, res, next) => {
    const {title, genre, plot, cast} = req.body;
    console.log("Works")
    MovieModel.create ({title, genre, plot, cast})
    .then((data) => {
      
    res.redirect("/movies")
        //console.log("Works")
    })
    .catch((err) => {
        console.log("Err")
    });

});

// Iteration 5

router.get('/movies', (req, res, next)=>{
    MovieModel.find()
    .then((rebeca) => {
        console.log(rebeca)
        res.render('movies/movies.hbs', {rebeca})
    })
    .catch((err) => {
        console.log("not happening");
    });
  
});
module.exports = router;