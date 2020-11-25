
//Se conecta con el archivo db
const mysqlConnection = require('../db/db');

let instance=null;

//Metodo GET, trae todos los datos de la tabla Dispositivos

class Usuario {
    static getServiceInstance(){
        return instance ? instance : new Usuario();
    }
    async getUsuarios(){
        try {
            const response = await new Promise((resolve,reject)=>{
                
                mysqlConnection.query('SELECT * FROM Usuario', (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results); 
                    
            })
        });
        return response;
    } catch (err){
        console.log(err);
    }}

    async NuevoUsuario(Nombre,Correo,Clave){
        try {
            const Cod_U = await new Promise((resolve,reject)=>{
               
                mysqlConnection.query('INSERT INTO Usuario(Nombre,Correo,Clave) VALUES(?,?,?)', [Nombre,Correo,Clave],(err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results.Cod_U); 
                    
            })
             });
            return{
                Cod_U:Cod_U,
                Nombre:Nombre,
                Correo:Correo,
                Clave:Clave
            };
        
      } catch (err){
        console.log(err);
      }
    }

    async ActualizarUsuario(Cod_U,Nombre,Clave,Correo){
        console.log("Cod "+Cod_U+ " Nombre "+Nombre);
        try{
            Cod_U=parseInt(Cod_U,11);
            const response = await new Promise((resolve,reject)=>{
                
                mysqlConnection.query('UPDATE Usuario SET Nombre = ?,Correo = ?,Clave = ? WHERE Cod_U = ?', [Cod_U,Nombre,Clave,Correo],(err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.affectedRows);
                    //res.json(rows[0]);
            })
          });
          return response === 1 ? true : false;
        
        } catch (error){
        console.log(error);
        
      }
    }
    
}

//Se exporta, siempre debe de ir ésta línea
module.exports = Usuario;