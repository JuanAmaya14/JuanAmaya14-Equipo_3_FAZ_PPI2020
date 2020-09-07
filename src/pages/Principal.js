import React, { Component } from 'react';
import Encabezado_EW from '../component/Encabezado_EW';
import Menu from '../component/Menu';
import Anadir from '../component/Anadir.png';
import {Link} from 'react-router-dom';

class Principal extends Component {
    render(){
        return(
            <div>
              <center>
              <Encabezado_EW/>
                        <br/>
                      <label align="center" class="Titulo"><strong>Dispositivos</strong></label>
                      <Link to="/"><img src={Anadir} alt="" width="15%" heigth="15%" class="imgM Anadir"></img></Link>
                      <Menu/>
              </center>
               
            </div>
        );
    }
}
export default Principal;