import React, { Component } from 'react';
import Encabezado_EW from '../component/Encabezado_EW';


class carga extends Component {
    render() {
        return (
            <center>
                <div>
                    <Encabezado_EW />
                </div>
                



<div id="contenedor_carga">
<div id="carga"></div>
</div>


           </center>

        );
      
        window.onload = function(){
            var contenedor = document. getElementById('contenedor_carga');
      
      contenedor.style.visibility = 'hidden';
      contenedor.style.opacity = '0';
        }

    }

}

export default carga;