import React, { Component } from 'react';
import Encabezado_EW from '../component/Encabezado_EW';
import Menu from '../component/Menu';
import Anadir from '../component/Anadir.png';
import {Link} from 'react-router-dom';
import '../index.css';

class Principal_Dis extends Component {
    render(){
        return(
          
            <div>
              <center>
              <Encabezado_EW/>
                      
             
                        
                        <br/>
                         <label align="center"><h2><strong>Dispositivos</strong></h2></label>
                       </center> 

                     
                      <Link to="/Anadir"><img src={Anadir} alt="" width="15%" heigth="15%" class="imgM Anadir"></img></Link>
                      <br></br>
                      <br></br>
                      <br></br>
                      <div class="text_borde">
                      <Link to="/Estado_Disp">Dispositivo 1</Link>
</div>
                        <center>
                      <Menu/>
              </center>
               
            </div>
            
        );
       
    }
}
export default Principal_Dis;