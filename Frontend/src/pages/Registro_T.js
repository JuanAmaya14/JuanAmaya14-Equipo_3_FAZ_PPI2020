import React, { Component } from 'react';
import Encabezado_EW from '../component/Encabezado_EW';
import Menu from '../component/Menu';
import { Link } from 'react-router-dom';
import Atras from '../component/Atras.png';
import '../index.css';

/*document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:4001/api/Dispositivos')
    .then(response => response.json())
    .then(data => loadHTMLTable(data['data']));
    
});

function loadHTMLTable(data) {
    const table = document.querySelector('table tbody');
  
    if (data.length === 0) {
        table.innerHTML = "<tr><td class='no-data' colspan='5'>No hay datos</td></tr>";
        return;
    }
  
    let tableHtml = "";
  
    data.forEach(function ({Fecha, Hora, Duracion}) {
        tableHtml += "<tr>";
        tableHtml += `<td>${Fecha}</td>`;
        tableHtml += `<td>${Hora}</td>`;
        tableHtml += `<td>${Duracion}</td>`;
      
    });
  
    table.innerHTML = tableHtml;
}*/

class Registro_T extends Component {
    render() {
        return (

            <div>
                <center>
                    <Encabezado_EW />
                </center>


                <br />

                <div class="Atras">
                    <Link to="/Estado_Disp"><img src={Atras} alt="" width="15%" heigth="15%"></img></Link>
                </div>
                <label align="center"><h2><strong>Registro de terremotos</strong></h2></label>

<br/>
                <div >
                   
                        <ul class="tabla_R">
                            <li class="li"><b>Dia/Mes/Año</b></li>
                            <li class="li"><b>Hora</b></li>
                            <li class="li"><b>Duracion</b></li>
                        </ul>
                        <tbody></tbody>

               
                    
                </div>


                <center>
                    <Menu />
                </center>

            </div>

        );

    }
}
export default Registro_T;