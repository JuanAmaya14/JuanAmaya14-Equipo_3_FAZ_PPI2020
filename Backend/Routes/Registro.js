//Archivo de Métodos

const express = require('express');
const router = express.Router();

//Se conecta con el archivo db
const mysqlConnection = require('../db/db');

//Metodo GET

router.get('/Registro', (req, res) => {

    mysqlConnection.query('SELECT * FROM Registro ', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });

  //Método POST
  router.post('/Registro', (req, res) => {

    const { Cod_Registros, Fecha, Hora, Duracion, Cod_Dispositivo } = req.body;
  
    let Registro = [Cod_Registros, Fecha, Hora, Duracion, Cod_Dispositivo];
  
    let nuevoRegistro = `INSERT INTO Registro(Cod_Registros,Fecha,Hora,Duracion,Cod_Dispositivo) VALUES(?,?,?,?,?)`;
    mysqlConnection.query(nuevoRegistro, Registro, (err, results, fields) => {
      if (err) {
        return console.error(err.message);
      }
      res.json({ message: `El proceso fue exitoso`, })
    });
  });

  //DELETE
router.delete('/Registro/:Cod_Registros', (req, res) => {
    const { Cod_Registros } = req.params;
    mysqlConnection.query('DELETE FROM Registro WHERE Cod_Registros = ?',
      [Cod_Registros], (err, rows, fields) => {
        if (!err) {
          res.json({ status: 'Registro eliminado!' });
        } else {
          console.log(err);
        }
      });
  });

  //Metodo GET, por id

  router.get('/Registro/:Cod_Dispositivo', (req, res) => {
    const { Cod_Dispositivo } = req.params;//Se introduce un parámetro, el que se quiera buscar
    //Se pone la sentencia SQL
    mysqlConnection.query('SELECT * FROM Registro WHERE Cod_Dispositivo = ?', [Cod_Dispositivo], (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    });
  });

  //Se exporta, siempre debe de ir ésta línea
module.exports = router;
