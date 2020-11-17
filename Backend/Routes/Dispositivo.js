//Archivo de Métodos

const express = require('express');
const router = express.Router();

//Se conecta con el archivo db
const mysqlConnection = require('../db/db');

//Metodo GET, trae todos los datos de la tabla actores

router.get('/Dispositivo', (req, res) => {

    mysqlConnection.query('SELECT * FROM Dispositivos ', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});


//post
router.post('/Dispositivo', (req, res) => {

    const { Estado, Notificacion, Alarma, Nombre, Cod_U } = req.body;

    let Dispositivo = [Estado, Notificacion, Alarma, Nombre, Cod_U];

    let nuevoDispositivo = `INSERT INTO Dispositivos(Estado,Notificacion,Alarma,Nombre,Cod_U)
     VALUES(?,?,?,?,?)`;
    mysqlConnection.query(nuevoDispositivo, Dispositivo, (err, results, fields) => {
        if (err) {
            return console.error(err.message);
        }
        res.json({ message: `El proceso fue exitoso`, })
    });
});

//put
router.put('/Dispositivo/:Cod_Dispositivos', (req, res) => {
    const { Estado, Notificacion, Alarma, Nombre, Cod_U } = req.body;
    const { Cod_Dispositivos } = req.params;
    mysqlConnection.query(`UPDATE Dispositivos SET Estado = ?,Notificacion = ?,
    Alarma = ?,Nombre = ?,Cod_U = ? WHERE Cod_Dispositivos = ?`,
        [Estado, Notificacion, Alarma, Nombre, Cod_U, Cod_Dispositivos], (err, rows, fields) => {
            if (!err) {
                res.json({ status: 'Dispositivo actualizado' });
            } else {
                console.log(err);
            }
        });
});

//Metodo GET, por id, en la ruta :id se pone el id que se quiere buscar, no se pone el :id en la ruta
router.get('/Dispositivo/:Cod_U', (req, res) => {
    const { Cod_U } = req.params;//Se introduce un parámetro, el que se quiera buscar
    //Se pone la sentencia SQL
    mysqlConnection.query('SELECT * FROM Dispositivos WHERE Cod_U = ?', [Cod_U], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

//Se exporta, siempre debe de ir ésta línea
module.exports = router;