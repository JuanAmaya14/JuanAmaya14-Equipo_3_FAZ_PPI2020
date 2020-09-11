import React, { Component } from 'react';
import Encabezado_EW from '../component/Encabezado_EW';
import Menu from '../component/Menu';
import Crater from '../component/Crater.png';
import Derrumbe from '../component/Derrumbe.png';
import Atras from '../component/Atras.png';
import '../index.css';
import { Link } from 'react-router-dom';




class Que_son extends Component {
    render() {
        return (
            <div>
                <center>
                    <Encabezado_EW />
                    </center>


                    <div class="Atras">
                    <Link to="/M_Guia"><img src={Atras} alt="" width="15%" heigth="15%" positio></img></Link>
                    </div>

                    <center>
                    <label align="center" class="Titulo"><strong>¿Que son los terremotos?</strong></label>

                    <br></br>
                    <p>Son fenómenos naturales que ocurren sin aviso, no son pronosticarles, es un movimiento violento del terreno ocasionado por la liberación de energía que surge del interior de la tierra.</p>
                  
                   <br></br>
                    
                    <img src={Crater} alt="" width="60%" heigth="60%"></img>
                    <img src={Derrumbe} alt="" width="40%" heigth="40%"></img>


                    <Menu />
               

                    </center>
            </div>
        );
    }
}
export default Que_son;