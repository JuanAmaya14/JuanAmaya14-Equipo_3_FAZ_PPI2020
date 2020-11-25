import React, { Component } from 'react';
import '../index.css';
import {Link} from 'react-router-dom';
import Guia from './Guia.png';
import Dispositivos from './Dispositivos.png';
import Configuracion from './Configuracion.png';

class Menu extends Component {
    render(){
        return(
          <div class="span-navbar-bottom">
              
              <nav class="navbar fixed-bottom Menu">
               <ul>
                   <Link to="/M_Guia" class="btn2"><img src={Guia} alt="" width="10%" heigth="10%" class="imgM"></img></Link>
                   <Link to="/Principal" class="nav-brand btn3_A"><img src={Dispositivos} alt="" width="10%" heigth="10%" class="imgM"></img></Link>
                   <Link to="/Configuracion" class="nav-brand btn4"><img src={Configuracion} alt="" width="10%" heigth="10%" class="imgM"></img></Link>
               </ul>
           </nav>
              
              
          </div>
         
            
        );
    }
}
export default Menu;