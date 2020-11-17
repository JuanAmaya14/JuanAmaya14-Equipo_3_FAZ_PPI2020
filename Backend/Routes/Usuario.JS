//Archivo de Métodos

const express = require('express');
const router = express.Router();

//Se conecta con el archivo db
const mysqlConnection = require('../db/db');

//Metodo GET, trae todos los datos de la tabla actores
router.get('/Usuario', (req, res) => {

    mysqlConnection.query('SELECT * FROM Usuario ', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});


//Método POST
router.post('/Usuario', (req, res) => {

    const { Nombre, Correo, Clave } = req.body;

    let Usuario = [Nombre, Correo, Clave];

    let nuevoUsuario = `INSERT INTO Usuario(Nombre,Correo,Clave) VALUES(?,?,?)`;
    mysqlConnection.query(nuevoUsuario, Usuario, (err, results, fields) => {
        if (err) {
            return console.error(err.message);
        }
        res.json({ message: `El proceso de usuario fue exitoso`, })
    });
});

//Método PUT
router.put('/Usuario/:Cod_U', (req, res) => {
    const { Nombre, Correo, Clave } = req.body;
    const { Cod_U } = req.params;
    mysqlConnection.query(`UPDATE Usuario SET Nombre = ?,Correo = ?,
    Clave = ? WHERE Cod_U = ?`,
        [Nombre, Correo, Clave, Cod_U], (err, rows, fields) => {
            if (!err) {
                res.json({ status: 'Usuario actualizado' });
            } else {
                console.log(err);
            }
        });
});

//Se exporta, siempre debe de ir ésta línea
module.exports = router;