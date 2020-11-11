//Archivo de Métodos

const express = require('express');
const router = express.Router();

//Se conecta con el archivo db
const mysqlConnection  = require('../db/db');

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

router.get('/Dispositivo', (req, res) => {
     
  mysqlConnection.query('SELECT * FROM Dispositivos ', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
});

router.get('/Registro', (req, res) => {
     
  mysqlConnection.query('SELECT * FROM Registro ', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
});

//Método POST, añade un nuevo usuario
router.post('/Usuario',(req,res)=>{

const {Nombre,Correo,Clave} = req.body;

let Usuario = [Nombre,Correo,Clave];

let nuevoUsuario = `INSERT INTO Usuario(Nombre,Correo,Clave) VALUES(?,?,?)`;
mysqlConnection.query(nuevoUsuario, Usuario, (err, results, fields) => {
  if (err) {
    return console.error(err.message);
  }
  res.json({ message:`El proceso de usuario fue exitoso`, })
  });
});

router.post('/Dispositivo',(req,res)=>{

  const {Estado,Notificacion,Alarma,Nombre,Cod_U} = req.body;
  
  let Dispositivo = [Estado,Notificacion,Alarma,Nombre,Cod_U];
  
  let nuevoDispositivo = `INSERT INTO Dispositivos(Estado,Notificacion,Alarma,Nombre,Cod_U)
   VALUES(?,?,?,?,?)`;
  mysqlConnection.query(nuevoDispositivo, Dispositivo, (err, results, fields) => {
    if (err) {
      return console.error(err.message);
    }
    res.json({ message:`El proceso fue exitoso`, })
    });
  });

  router.post('/Registro',(req,res)=>{

    const {Cod_Registros,Fecha,Hora,Duracion,Cod_Dispositivo} = req.body;
    
    let Registro = [Cod_Registros,Fecha,Hora,Duracion,Cod_Dispositivo];
    
    let nuevoRegistro = `INSERT INTO Registro(Cod_Registros,Fecha,Hora,Duracion,Cod_Dispositivo) VALUES(?,?,?,?,?)`;
    mysqlConnection.query(nuevoRegistro, Registro, (err, results, fields) => {
      if (err) {
        return console.error(err.message);
      }
      res.json({ message:`El proceso fue exitoso`, })
      });
    });

//Método PUT
router.put('/Usuario/:Cod_U', (req, res) => {
  const {Nombre,Correo,Clave} = req.body;
  const { Cod_U } = req.params;
  mysqlConnection.query(`UPDATE Usuario SET Nombre = ?,Correo = ?,
  Clave = ? WHERE Cod_U = ?`, 
  [Nombre,Correo,Clave, Cod_U], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Usuario actualizado'});
    } else {
      console.log(err);
    }
  });
});

router.put('/Dispositivo/:Cod_Dispositivos', (req, res) => {
  const {Estado,Notificacion,Alarma,Nombre,Cod_U} = req.body;
  const { Cod_Dispositivos } = req.params;
  mysqlConnection.query(`UPDATE Dispositivos SET Estado = ?,Notificacion = ?,
  Alarma = ?,Nombre = ?,Cod_U = ? WHERE Cod_Dispositivos = ?`, 
  [Estado,Notificacion,Alarma,Nombre,Cod_U,Cod_Dispositivos], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Dispositivo actualizado'});
    } else {
      console.log(err);
    }
  });
});


//DELETE
router.delete('/Registro/:Cod_Registros', (req, res) => {
  const { Cod_Registros } = req.params;
  mysqlConnection.query('DELETE FROM Registro WHERE Cod_Registros = ?',
   [Cod_Registros], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Registro eliminado!'});
    } else {
      console.log(err);
    }
  });
});

//Metodo GET, por id, en la ruta :id se pone el id que se quiere buscar, no se pone el :id en la ruta
router.get('/Dispositivo/:Cod_U', (req, res) => {
  const {Cod_U}=req.params;//Se introduce un parámetro, el que se quiera buscar
    //Se pone la sentencia SQL
    mysqlConnection.query('SELECT * FROM Dispositivos WHERE Cod_U = ?',[Cod_U], (err, rows, fields) => {
        if (!err) {
          res.json(rows[0]);
        } else {
          console.log(err);
        }
      });
  });

  router.get('/Registro/:Cod_Dispositivo', (req, res) => {
    const {Cod_Dispositivo}=req.params;//Se introduce un parámetro, el que se quiera buscar
      //Se pone la sentencia SQL
      mysqlConnection.query('SELECT * FROM Registro WHERE Cod_Dispositivo = ?',[Cod_Dispositivo], (err, rows, fields) => {
          if (!err) {
            res.json(rows[0]);
          } else {
            console.log(err);
          }
        });
    });

//Se exporta, siempre debe de ir ésta línea
module.exports = router;