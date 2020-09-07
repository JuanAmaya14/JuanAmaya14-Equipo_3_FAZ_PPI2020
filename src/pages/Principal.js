import React, { Component } from 'react';
import Encabezado_EW from '../component/Encabezado_EW';
import Menu from '../component/Menu';

class Principal extends Component {
    render(){
        return(
            <div>
              
                  <Encabezado_EW/>
                  
                      <label align="center" class="Titulo">Dispositivos</label>
                      <Menu/>
               
               
            </div>
        );
    }
}
export default Principal;