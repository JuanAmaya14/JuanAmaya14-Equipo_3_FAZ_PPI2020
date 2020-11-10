const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
  //Credenciales de la Base de Datos
  host: 'bpowfnijnp5kggiic68r-mysql.services.clever-cloud.com',
  user: 'uywfi6ofnydo0hmm',
  password: 'hPchoJB54m3vj8DNO3vK',
  database: 'bpowfnijnp5kggiic68r',
  multipleStatements: true
});


//Función para ver si funciona
mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('Base de Datos conectada!');
  }
});

//Se exporta
module.exports = mysqlConnection;