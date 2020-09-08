import React, { Component } from 'react';
import Encabezado_EW from '../component/Encabezado_EW';
import Menu from '../component/Menu';


class Que_son extends Component {
    render() {
        return (
            <div>
                <center>
                    <Encabezado_EW />
                    <label align="center" class="Titulo"><strong>¿Que son los terremotos?</strong></label>

                    <label class="label2"><strong></strong></label>
                    <p>Son fenómenos naturales que ocurren sin aviso, no son pronosticarles, es un movimiento violento del terreno ocasionado por la liberación de energía que surge del interior de la tierra.</p>


                    <Menu />
                </center>


            </div>
        );
    }
}
export default Que_son;