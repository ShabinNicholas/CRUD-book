const express = require('express')
const controller = require('./controller')

const routes = express.Router()

routes.post('/create', controller.addBook)
routes.get('/view', controller.viewAll)
routes.get('/view-single/:id', controller.viewSingle)
routes.delete('/delete/:id', controller.deleteBook)
routes.put('/edit-book/:id',controller.editBook)

module.exports = routes