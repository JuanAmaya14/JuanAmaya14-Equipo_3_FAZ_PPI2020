
//Se conecta con el archivo db
const mysqlConnection = require('../db/db');

let instance=null;

//Metodo GET, trae todos los datos de la tabla Dispositivos

class Registro {
    static getServiceInstance(){
        return instance ? instance : new Registro();
    }
    async getRegistros(){
        try {
            const response = await new Promise((resolve,reject)=>{
                
                mysqlConnection.query('SELECT * FROM Registro', (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results); 
                    
            })
        });
        return response;
    } catch (err){
        console.log(err);
    }}

    async NuevoRegistro(Fecha,Hora,Duracion,Cod_Dispositivo){
        try {
            const id = await new Promise((resolve, reject) =>{
                
                mysqlConnection.query('INSERT INTO Registro(Fecha,Hora,Duracion,Cod_Dispositivo) VALUES(?,?,?,?)', [Fecha,Hora,Duracion,Cod_Dispositivo],(err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.id);  
                })
            });
            return {
                Cod_Registro : id,
                Fecha:Fecha,
                Hora:Hora, 
                Duracion:Duracion,
                Cod_Dispositivo:Cod_Dispositivo
            };
        
        } catch (error){
        console.log(error);
        }
    }

    async EliminarRegistro(Cod_Registro){
        try{
            Cod_Registro=parseInt(Cod_Registro,10);
            const response = await new Promise((resolve,reject)=>{
                
                mysqlConnection.query('DELETE FROM Registro WHERE Cod_Registro = ?', [Cod_Registro],(err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.affectedRows); 
            })
        });
        return response === 1 ? true : false;
        } catch(error) {
            console.log(error);
            return false;
        }
    }
    async BuscarporCod_Dispositivo(Cod_Dispositivo){
        try{
            const response = await new Promise((resolve,reject)=>{
                
                mysqlConnection.query('SELECT * FROM Registro WHERE Cod_Dispositivo = ?', [Cod_Dispositivo],(err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);  
            })
           });
           return response;
        } catch (error){
        console.log(error);
       }
    }
}

//Se exporta, siempre debe de ir ésta línea
module.exports = Registro;