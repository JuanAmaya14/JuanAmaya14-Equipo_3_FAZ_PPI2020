import React, { Component } from 'react';
import Encabezado_EW from '../component/Encabezado_EW';
import Menu from '../component/Menu';
import Anadir from '../component/Anadir.png';
import {Link} from 'react-router-dom';

class Noticias extends Component {
    render(){
        return(
          
            <div>
              <center>
              <Encabezado_EW/>
                        
                        <br/>
                         <label align="center"><h2><strong>Noticias</strong></h2></label>
                         <iframe width="80%" height="350px" src="https://www.elcolombiano.com/cronologia/noticias/meta/terremotos"></iframe>
                       </center> 

                        <center>
                      <Menu/>
              </center>
               
            </div>
            
        );
       
    }
}
export default Noticias;