import React, { Component } from 'react';
import Encabezado_EW from '../component/Encabezado_EW';
import Menu from '../component/Menu';
import Anadir from '../component/Anadir.png';
import {Link} from 'react-router-dom';
import '../component/carga.css';

class Principal extends Component {
    render(){
        return(
          <center>
            <div>
              
              <Encabezado_EW/>
                      
                       
                        
                        <br/>
                      <label align="center" class="Titulo"><strong>Dispositivos</strong></label>
                      <Link to="/"><img src={Anadir} alt="" width="15%" heigth="15%" class="imgM Anadir"></img></Link>
                      <Menu/>
              
               
            </div>
            </center>
        );
       
    }
}
export default Principal;