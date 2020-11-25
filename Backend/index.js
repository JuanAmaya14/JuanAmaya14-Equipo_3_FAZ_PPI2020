//Septiembre 25
//Octubre 23 Repaso 
//npm init --yes
//npm i nodemon -D
//npm i express morgan 
//express es para levantar el servidor
//morgan permite ver las peticiones
//nodemon permite ver cambios
const express = require('express');//se llama a express
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const app = express();
const router = express.Router();
const mysqlConnection = require('./db/db');

//Middlewares
app.use(morgan('dev'));//Usamos el servidor, monitorea las peticiones
app.use(express.json());//Maneja las peticiones en form      ato json

//Rutas
const dbUsuario= require('./Routes/Usuario');
const dbDispositivos= require('./Routes/Dispositivo');
const dbRegistros= require('./Routes/Registro');
const { response } = require('express');

app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/Dispositivos',(req,res)=>{
  const db=dbDispositivos.getServiceInstance();
  const resultado=db.getDispositivos();
  resultado
  .then(data=>res.json({data:data}))
  .catch(err=>console.log(err));
});

app.post('/nuevo-Dispositivo',(req,res)=>{
  const {IP}=req.body;
  const {Estado}=req.body;
  const {Alarma}=req.body;
  const{Notificacion}=req.body;
  const {Nombre}=req.body;
  const {Cod_U}=req.body;
  const db=dbDispositivos.getServiceInstance();
  const resultado=db.NuevoDispositivo(Estado,Alarma,Notificacion,Nombre,Cod_U,IP);
  resultado
  .then(data=>res.json({data:data}))
  .catch(err=>console.log(err));
});

app.put('/actualizar-Dispositivo/:Cod_Dispositivo', (req, res) => {
  const { Estado, Notificacion, Alarma, Nombre, Cod_U } = req.body;
  const { Cod_Dispositivo } = req.params;
  mysqlConnection.query(`UPDATE Dispositivos SET Estado = ?,Notificacion = ?,
  Alarma = ?,Nombre = ? WHERE Cod_Dispositivo = ?`, [Estado, Notificacion, Alarma, Nombre, Cod_U, Cod_Dispositivo], (err, rows, fields) => {
      if (!err) {
        res.json({ status: 'Dispositivo actualizado' });
      } else {
        console.log(err);
      }
    });
});

app.get('/Dispositivos/:Cod_U',(req,res)=>{
  const {Cod_U}=req.params;
  const db=dbDispositivos.getServiceInstance();
  const resultado=db.BuscarporCod_U(Cod_U);
  resultado
  .then(data=>res.json({data:data}))
  .catch(err=>console.log(err));
})

app.get('/Usuarios',(req,res)=>{
  const db=dbUsuario.getServiceInstance();
  const resultado=db.getUsuarios();
  resultado
  .then(data=>res.json({data:data}))
  .catch(err=>console.log(err));
});

app.post('/nuevo-Usuario',(req,res)=>{
  const {Nombre,Clave,Correo}=req.body;
  const db=dbUsuario.getServiceInstance();
  const resultado=db.NuevoUsuario(Nombre,Correo,Clave);
  resultado
  .then(data=>res.json({data:data}))
  .catch(err=>console.log(err));
});

app.put('/actualizar-Usuario/:Cod_U', (req, res) => {
  const { Nombre, Correo, Clave } = req.body;
  const { Cod_U } = req.params;
  mysqlConnection.query(`UPDATE Usuario SET Nombre = ?,Correo = ?,
  Clave = ? WHERE Cod_U = ?`, [Nombre, Correo, Clave, Cod_U], (err, rows, fields) => {
      if (!err) {
        res.json({ status: 'Usuario actualizado' });
      } else {
        console.log(err);
      }
    });
});


app.get('/Registros',(req,res)=>{
  const db=dbRegistros.getServiceInstance();
  const resultado=db.getRegistros();
  resultado
  .then(data => res.json({data:data}))
  .catch(err => console.log(err));
});

app.post('/nuevo-Registro',(req,res)=>{
  const {Fecha,Hora,Duracion,Cod_Dispositivo}=req.body;
  const db=dbRegistros.getServiceInstance();
  const resultado=db.NuevoRegistro(Fecha,Hora,Duracion,Cod_Dispositivo);
  resultado
  .then(data => res.json({data:data}))
  .catch(err => console.log(err));
});

app.delete('/eliminar-Registro/:Cod_Registro',(req,res)=>{
  const { Cod_Registro }=req.params;
  const db = dbRegistros.getServiceInstance();
  const resultado = db.EliminarRegistro(Cod_Registro);
  resultado
  .then(data => res.json({success:data}))
  .catch(err => console.log(err));
})

app.get('/Registro/:Cod_Dispositivo',(req,res)=>{
  const { Cod_Dispositivo }=req.params;
  const db=dbRegistros.getServiceInstance();
  const resultado=db.BuscarporCod_Dispositivo(Cod_Dispositivo);
  resultado
  .then(data=>res.json({data:data}))
  .catch(err=>console.log(err));
})

//Ruta para activar puerto
app.set("port", 4001);
app.listen(app.get("port"), () => {
  console.log('Servidor corriendo en la puerto 4001');
});//Escucha las peticiones

