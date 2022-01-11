const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/noderest', { userMongoClient: true }) // forma de conectar ao mongo
mongoose.Promise = global.Promise

module.exports = mongoose