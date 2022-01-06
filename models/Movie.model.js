const { model, Schema } = require("mongoose");

const movieSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    stars: [string],

})