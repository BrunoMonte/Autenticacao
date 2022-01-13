const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/autenticacao', { userMongoClient: true }) // forma de conectar ao mongo
mongoose.Promise = global.Promise

module.exports = mongoose