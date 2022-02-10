const express = require('express')
const bodyParser = require('body-parser')


const app = express()
const port = 3000

app.use(bodyParser.json())  //entender quando enviar uma req em json
app.use(bodyParser.urlencoded({ extended: false }))  // quando enviar parametros em url

require('./controllers/autenticacao')(app) //o app objeto definido uma vez
require('./controllers/projetos')(app) 

app.listen(port, () => {
    console.log(`⚡️ Api está rodado na porta: http://localhost:${port}`)
  })