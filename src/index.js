const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const pool = require('./DB/conexion');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extends: false}));
// parse application/json
app.use(bodyParser.json());
//Manda el tipo de peticion que se hace de la pagina
app.use(morgan('dev'));
//conexion a la base de datos

//Es el puerto en el que esta corriendo la aplicacion
app.listen(3000 , ( ) => {
    console.log('Funciona');
});