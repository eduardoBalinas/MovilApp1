const mongoose = require('mongoose');
const Schema = mongoose.Schema();

//Creamos al objeto usuario que se asignara
const usuarioSchema = new Schema({

    Nombre: {
        type: String,
        require: true
    },

    Apellido: {
        type: String,
        require: true
    },

    Correo: {
        type: String,
        require: true
    },

    Dir: {
        type: String,
        require: true
    },

    Tel: {
        type: String,
        require: true
    },

    Nombre_Usuario: {
        type: String,
        require: true
    },

    Contrasena: {
        type: String,
        require: true
    }

})

module.exports = mongoose.model('usuario' , usuarioSchema);