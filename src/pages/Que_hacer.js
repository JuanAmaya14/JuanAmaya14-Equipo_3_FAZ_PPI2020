import React, { Component } from 'react';
import Encabezado_EW from '../component/Encabezado_EW';
import Menu from '../component/Menu';


class Que_hacer extends Component {
    render() {
        return (
            <div>
                <center>
                    <Encabezado_EW />
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