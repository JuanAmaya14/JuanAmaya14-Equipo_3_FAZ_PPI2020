
//Se conecta con el archivo db
const mysqlConnection = require('../db/db');

let instance=null;

//Metodo GET, trae todos los datos de la tabla Dispositivos

class Dispositivos {
    static getServiceInstance(){
        return instance ? instance : new Dispositivos();
    }
    async getDispositivos(){
        try {
            const response = await new Promise((resolve,reject)=>{
                
                mysqlConnection.query('SELECT * FROM Dispositivos ', (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results); 
                    
            })
        });
        return response;
    } catch (err){
        console.log(err);
    }}

    async NuevoDispositivo(Estado,Alarma,Notificacion,Nombre,Cod_U,IP){
        try {
            const id = await new Promise((resolve,reject)=>{
               
                mysqlConnection.query('INSERT INTO Dispositivos(Estado,Notificacion,Alarma,Nombre,Cod_U,IP) VALUES(?,?,?,?,?,?)', [Estado,Alarma,Notificacion,Nombre,Cod_U,IP],(err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results.id); 
                    
            })
             });
            return{
                Cod_Dispositivos:id,
                Estado:Estado,
                Notificacion:Notificacion,
                Alarma:Alarma,
                Nombre:Nombre,
                Cod_U:Cod_U,
                IP:IP
            };
        
      } catch (err){
        console.log(err);
      }
    }

    async ActualizarDispositivo(Cod_Dispositivos,Alarma,Notificacion,Nombre){
        console.log("Cod "+Cod_Dispositivos+ " Alarma "+Alarma+" Notificacion "+Notificacion+" Nombre "+Nombre);
        try{
            
            const response = await new Promise((resolve,reject)=>{
                
                mysqlConnection.query('UPDATE Dispositivos SET Estado = ?,Notificacion = ?, Alarma = ?,Nombre = ? WHERE Cod_Dispositivos = ?', [Cod_Dispositivos,Alarma,Notificacion,Nombre],(err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.affectedRows); 
                    
            })
        });
        return response === 1 ? true : false;
        
    } catch (error){
        console.log(error);
        return false;
    }
    }

    async BuscarporCod_U(Cod_U){
        try{
            const response = await new Promise((resolve,reject)=>{
                
                mysqlConnection.query('SELECT * FROM Dispositivos WHERE Cod_U = ?', [Cod_U],(err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results); 
                    
            })
           });
           return response;
        
        } catch (err){
        console.log(err);
        return false;
       }
    }
    
}

//Se exporta, siempre debe de ir ésta línea
module.exports = Dispositivos;