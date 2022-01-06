const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');
const mongoose = require('mongoose');
/* GET all the movies page */
router.get('/movies', (req, res) => {
    Movie.find()
        .then(dbResponse => {
            res.render('movies', {
                movie: dbResponse,
            })
        })
        .catch((e) => console.error(e));
});

/*Get a single movie details page */
router.get("/movies/:id", (req, res, next) => {
    console.log(req.params)
    const isValidId = mongoose.isValidObjectId(req.params.id);
    const id = req.params.id;
    if (isValidId) {
        Movie.findById(id)
            .then((movie) => {
                console.log(movie);
                res.render("oneMovie", {
                    movie,
                    css: ["movie"]
                })
            })
            .catch(e =>
                console.error(e));
    } else {
        next();
    }
})

module.exports = router;
