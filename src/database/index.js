const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/autenticacao') // forma de conectar ao mongo
mongoose.Promise = global.Promise

module.exports = mongoose