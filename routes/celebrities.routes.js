// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here
const CelebrityModel = require("../models/Celebrity.model")

// GET '/celebrities/create' route 
router.get('/celebrities/create', (req, res, next)=>{
    console.log('I meant to saz "HELLO" ')
    res.render('celebrities/new-celebrity.hbs')    
});

router.post('/celebrities/create', (req, res, next) => {
    const {name, occupation, catchPhrase} = req.body;
    console.log("Works")
    CelebrityModel.create ({name, occupation, catchPhrase})
    .then((data) => {
      
    res.redirect("/celebrities")
        //console.log("Works")
    })
    .catch((err) => {
        console.log("Err")
    });

});

//Iteration 4

router.get('/celebrities', (req, res, next)=>{
    CelebrityModel.find()
    .then((julie) => {
        console.log(julie)
        res.render('celebrities/celebrities.hbs', {julie})
    })
    .catch((err) => {
        console.log("not happening");
    });
  
});




module.exports = router;