import React, { Component } from 'react';
import Encabezado_EW from '../component/Encabezado_EW';
import Menu_2 from '../component/Menu_2';
import {Link} from 'react-router-dom';

class Estado_Disp extends Component {
    render(){
        return(
          <center>
            <div>
              
              <Encabezado_EW/>

                        <br/>
                        <label align="center block"><h2><strong>Dispositivo 1</strong></h2></label>
                        <label align="left" className="label4">Estado: </label>
                        <br/>
                      <div class="block">
                       
                            <span className="inline-block textEst">Notificación</span>  
                            <label className="switchBtn">
                            <input type="checkbox"/>
                            <div className="slide round"></div>
                            </label>      
                      </div>
                      <div class="block">
                       
                            <span className="inline-block textEst">Alarma</span>  
                            <label className="switchBtn">
                            <input type="checkbox"/>
                            <div className="slide round"></div>
                            </label>      
                      </div>
                      <Link to="/Registro_T"><button type="submit" class="btn btn-primary boton1 button">Registro de Terremotos</button></Link>
                        
                     
                      <Menu_2/>
            </div>
            </center>
        );
    }
}
export default Estado_Disp;