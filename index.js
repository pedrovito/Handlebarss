const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine' , 'handlebars')

app.get('/', (resquisicao, resposta) =>{
    resposta.render('home')
})

app.listen(3000, () =>{
    console.log("servido rodadndo no servido 3000")
})