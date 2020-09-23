import React, { Component } from 'react';
import Encabezado_EW from '../component/Encabezado_EW';
import Menu from '../component/Menu';
import Anadir from '../component/Anadir.png';
import {Link} from 'react-router-dom';

class Registro_T extends Component {
    render(){
        return(
          
            <div>
              <center>
              <Encabezado_EW/>
              </center>   
             
                        
                        <br/>
                         <label align="center"><h2><strong>Registro de terremotos</strong></h2></label>
                        

                     
<table>



</table>                      

                        <center>
                      <Menu/>
              </center>
               
            </div>
            
        );
       
    }
}
export default Registro_T;