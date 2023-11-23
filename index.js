const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app.get('/', (resquisicao, resposta) =>{
    resposta.send("Ola Mundo")
})

app.listen(3000, () =>{
    console.log("servido rodadndo no servido 3000")
})