const express = require('express')
const app = express()
require('dotenv').config()
const db = require("./config/db")
const morgan = require('morgan');





//Importar rutas
const indexRoutes = require('./routes/index');

//Configuraciones
app.set('view engine', 'ejs');

//Middlewares4
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

//Rutas
app.use('/', indexRoutes);


app.listen(process.env.PORT, () => {
  console.log(`iniciado en http://localhost:${process.env.PORT}`)
})
