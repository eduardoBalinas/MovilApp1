const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extends: false}));
// parse application/json
app.use(bodyParser.json());
//Manda el tipo de peticion que se hace de la pagina
app.use(morgan('dev'));

//Conexion a las peticiones

app.use(require('./Routes/routes'));

//conexion a la base de datos
/*
mongoose.connect('mongodb://localhost:27017/MovilApp', {useNewUrlParser: true , useUnifiedTopology: true} , (err) => {
    if(err) {
        console.log('Fallo la conexion');

    }else{
        console.log('Conexion Establecida');

    }
});
*/

//Es el puerto en el que esta corriendo la aplicacion
app.listen(3000 , ( ) => {
    console.log('Funciona');
});