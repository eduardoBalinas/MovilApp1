const mysql = require('mysql');
const { promisify } = require('util');

const pool = mysql.createPool({

    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    port: '3306',
    database: 'prueba'

});

pool.getConnection((err) => {
    if (err) throw err;
    console.log('En linea');

});

pool.query = promisify(pool.query);

module.exports = pool;