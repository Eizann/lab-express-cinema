const { model, Schema } = require("mongoose");

const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]
});

const Movie = model("Movies", movieSchema);

module.exports = Movie;