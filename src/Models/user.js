import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    Name:{
        type:String,
        required: true // Obrigatório
    },
    email:{
        type:String,
        unique:true, // que seja unica
        required:true,
        lowercase:true, // caixa baixa
    },
    password:{
        type:String,
        required:true,
        select: false // quando solicitar no banco, nao vim no array de usuarios.
    },
    RegisteredDate:{    // anota a data que o registro foi criado
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model('User', UserSchema)

module.exports = User