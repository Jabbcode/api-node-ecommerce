const express = require('express')
const cors = require('cors');
const { dbConnection } = require('./db/config');
require('dotenv').config();

dbConnection()

const app = express()

app.use( cors() )

app.use(express.json()) // bodyParser


app.use('/api/products', require('./routes/product'))

app.use('/api/categories', require('./routes/category'))

app.use('/api/users', require('./routes/user'))



app.listen( process.env.PORT , () => {
    console.log(`Servidor corriendo en el puerto ${ process.env.PORT }`)
})