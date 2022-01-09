import  mongoose  from "mongoose";

await Mongoose.connect('mongodb://localhost/Api_Rest', { userMongoClient: true }) // forma de conectar ao mongo
Mongoose.Promise = global.Promise

module.exports = mongoose