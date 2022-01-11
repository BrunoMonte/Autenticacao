const express = require('express')


const User = require('../Models/user')

const router = express.Router()

router.post('/registro', async(req,res) =>{
    try {
        const user = await User.create(req.body)  //User objeto do mongoose -- pegando todos os paramentros que usuario esta enviando pelo req.body
    
        return res.send({ user })
    } catch (error) {
        return res.status(400).send({ error: "Falha no Registro !" })
    }
})

module.exports = app => app.use('/auten', router)