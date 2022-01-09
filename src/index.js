import express from 'express';
import bodyParser from 'body-parser';


const app = express()
const port = 3000

app.use(bodyParser.json())  //entender quando enviar uma req em json
app.use(bodyParser.urlencoded({ extended : false}))  // quando enviar parametros em url

app.get('/', (req, res) => {
    res.send('Chegou !!')
})

app.listen(port, () => {
    console.log(`Api está rodado na porta: http://localhost:${port}`)
  })