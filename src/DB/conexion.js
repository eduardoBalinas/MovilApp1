const mysql = require('mysql');
const { promisify } = require('util');

const pool = mysql.createPool({

    host: 'localhost',
    user: 'root',
    password: 'superman1',
    database: 'MovilApp'

});

pool.getConnection((err) => {
    if (err) {
        console.log('Fallo la conexion a la base de datos');

    }else{
        console.log('Conexion Establecida');

    }
});

pool.query = promisify(pool.query);

module.exports = pool;