const mongoose = require('../database')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    name:{
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

    UserSchema.pre('save', async function(next){            //antes de salvar usuario, ".pre"function do mongoose para acontecer alguma coisa antes de salvar.
        const hash = await bcrypt.hash(this.password, 10)       //this informa o campo que queira crypt, o 10 para ter um hash mais forte
        this.password = hash

        next()
    })

const User = mongoose.model('User', UserSchema)

module.exports = User