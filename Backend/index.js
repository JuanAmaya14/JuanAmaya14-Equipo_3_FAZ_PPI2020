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

//Middlewares
app.use(morgan('dev'));//Usamos el servidor, monitorea las peticiones
app.use(express.json());//Maneja las peticiones en form      ato json

//Rutas
app.use('/api/', require('./Routes/Usuario'));
app.use('/api/', require('./Routes/Dispositivo'));
app.use('/api/', require('./Routes/Registro'));



app.use(express.urlencoded({ extended: false }));
app.use(cors());

//Ruta para activar puerto
app.set("port", 4001);
app.listen(app.get("port"), () => {
  console.log('Servidor corriendo en la puerto 4001');
});//Escucha las peticiones

