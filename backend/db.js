const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/BookBasicCRUD')
const db = mongoose.connection
db.on('error', (error) => {
    console.log("Connection error ", error);
})
db.once('open', () => {
    console.log("Database connected");
})