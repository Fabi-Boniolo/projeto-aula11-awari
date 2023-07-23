const express = require('express')
const rotaCurso = require('./rotas/curso')

const app = express()

app.use('/cursos',rotaCurso)

const port = 3000

app.listen(port, () => {
    console.log(`Escutando a porta: ${port}`)
})