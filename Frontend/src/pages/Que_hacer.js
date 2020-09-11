import React, { Component } from 'react';
import Encabezado_EW from '../component/Encabezado_EW';
import Menu from '../component/Menu';
import { Link } from 'react-router-dom';
import Atras from '../component/Atras.png';
import '../index.css';

class Que_hacer extends Component {
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
                    <label align="center" class="Titulo"><strong>¿Que hacer en caso de un terremoto?</strong></label>
                    <label class="label2"><strong></strong></label>
                    <p>...</p>

                  
                    <Menu />
                
</center>

            </div>
        );
    }
}

export default Que_hacer;