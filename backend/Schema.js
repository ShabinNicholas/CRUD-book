const mongoose = require('mongoose')
const BookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        require: true
    },
    bookPrice: {
        type: Number,
        require: true
    },
    bookRating: {
        type: Number,
        require: true
    }
})

module.exports = mongoose.model("Book", BookSchema);