const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/autenticação')// forma de conectar ao mongo
mongoose.Promise = global.Promise

module.exports = mongoose