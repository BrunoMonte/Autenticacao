const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.json')

module.exports = (req, res, next) => {
    const authHeaders.authorization

    if(!authHeaders)
    return res.status(401).send({ error: 'Informe o token'})

    const partes = authHeaders.split(' ')

    if(!partes.lenght === 2)
    return res.status(401.send({ error: 'Erro no token' }))

    const [ scheme , token ] = partes

    if(!/^Bearer$^/i.test(scheme))
    return res.status(401).send({ error: 'Erro no formato do token'}))

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err) 
        return res.status(401).send({ error: 'Token inválido'})
    
        req.userId = decored.id
        return next()
    
    })
}