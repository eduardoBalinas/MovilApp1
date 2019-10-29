const express = require('express');
const router = express.Router();
const usuario = require('../schema/usuario');

//Se crea el post para registrar a un usuario nuevo hace falta crear el jsonWebToken para que sea redirigido a la aplicacion
router.post('/addUser' , (req, res) => {

    const body = req.body;

    let usuario = {

        Nombre: body.Nombre,
        Apellido: body.Apellido,
        Correo: body.Correo,
        Dir: body.Dir,
        Tel: body.Tel,
        Nombre_Usuario: body.Nombre_Usuario,
        Contrasena: body.Contrasena
    };

//Asi se inserta un dato en mongo?

    usuario.save(usuario , (err) => {
        if(err){
            console.log('Fallo la insercion de datos');

        }else{
            console.log('Se inserto correctamente el usuario');

        }
    })

});

//Este es el pos



module.exports = router;