import React, { Component } from 'react';
import Encabezado_EW from '../component/Encabezado_EW';
import Menu from '../component/Menu';
import { Link } from 'react-router-dom';
import Atras from '../component/Atras.png';
import '../index.css';

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


                    
                </div>


                <center>
                    <Menu />
                </center>

            </div>

        );

    }
}
export default Registro_T;