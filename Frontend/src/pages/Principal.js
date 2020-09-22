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
                         <label align="center"><h2><strong>Dispositivos</strong></h2></label>
                       </center> 

                     
                      <Link to="/Anadir"><img src={Anadir} alt="" width="15%" heigth="15%" class="imgM Anadir"></img></Link>
                      

                        <center>
                      <Menu/>
              </center>
               
            </div>
            
        );
       
    }
}
export default Principal;