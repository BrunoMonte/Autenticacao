const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/autenticação')// forma de conectar ao mongo
catch(error => handlerError(error))
try {
    await mongoose.connect('mongodb://localhost:27017/autenticação')
} catch (error) {
   handlerError(error) 
}

mongoose.Promise = global.Promise

module.exports = mongoose