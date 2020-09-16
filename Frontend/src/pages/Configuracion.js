import React, { Component } from 'react';
import Encabezado_EW from '../component/Encabezado_EW';
import Menu from '../component/Menu';
import Perfil from '../component/Perfil.png';
import {Link} from 'react-router-dom';
import ConfSiguiente from '../component/ConfSiguiente.png';

class Principal extends Component {
    render(){
        return(
          <center>
            <div>
              
              <Encabezado_EW/>

                        <br/>
                      <label align="center" class="Titulo block"><strong>Configuración</strong></label>
                      <div class="Perfil" align="left">
                          <img src={Perfil} alt="" width="25%" heigth="25%" class="inline img3"></img>
                          <label class="inline-block label4">Usuario</label>
                      </div>
                      <div class="inline-block">
                      <Link to="/" class="block"> <label align="left" class="inline-block buttonConf">Notificación</label>
                        <img src={ConfSiguiente} alt="" width="5%" heigth="5%" class="inline-block img4"></img></Link>
                      </div>
                        <br/>
                        <br/>
                      <div class="inline-block">
                      <Link to="/" class="block"> <label align="left" class="inline-block buttonConf">Alarma</label>
                        <img src={ConfSiguiente} alt="" width="5%" heigth="5%" class="inline-block img4"></img></Link>
                      </div>
                     
                      <Menu/>
            </div>
            </center>
        );
    }
}
export default Principal;