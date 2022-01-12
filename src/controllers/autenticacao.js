const express = require('express')
const User = require('../Models/user')

const router = express.Router()

router.post('/registro', async(req,res) =>{
    const { email } = req.body

    try {
        if(await User.findOne({ email }))
            return res.status(400).send({ erro: "Email ja cadastrado !" })

        const user = await User.create(req.body)  //User objeto do mongoose -- pegando todos os paramentros que usuario esta enviando pelo req.body
    
        user.password = undefined       //quando retonar json, não mostra a senha

        return res.send({ user })
    } catch (err) {
        return res.status(400).send({ error: "Falha no Registro !" })
    }
})

module.exports = app => app.use('/auten', router)