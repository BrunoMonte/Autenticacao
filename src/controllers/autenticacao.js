const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../Models/user')

const authConfig = require('../config/auth.json')

const router = express.Router()

function gerandoToken(params = {}){
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400 
    } )
}

router.post('/registro', async(req,res) =>{
    const { email } = req.body

    try {
        if(await User.findOne({ email }))
            return res.status(400).send({ erro: "Email contém cadastrado !" })

        const user = await User.create(req.body)  //User objeto do mongoose -- pegando todos os paramentros que usuario esta enviando pelo req.body
    
        user.password = undefined       //quando retonar json, não mostra a senha

        return res.send({ 
            user,
            token: gerandoToken({ id: user.id }) 
        })
    }catch (err) {
        return res.status(400).send({ error: "Falha no Registro !" })
    }
})

router.post('/autenticacao', async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email }).select('+password')

    if(!user)
        return res.status(400).send({ error: "Usuario não encontrado" })
    
    if(!await bcrypt.compare(password, user.password))
    return res.status(400).send({ error: 'Senha inválida' })
    
    user.password = undefined

    const token = jwt.sign({ id: user.id }, authConfig.secret, {
        expiresIn: 86400 // Por padrão expiração em 1 dia
    } )

    res.send({ 
        user, 
        token: gerandoToken({ id: user.id }) })
})

module.exports = app => app.use('/auten', router)