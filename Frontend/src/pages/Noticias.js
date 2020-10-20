import React, { Component } from 'react';
import Encabezado_EW from '../component/Encabezado_EW';
import Menu_1 from '../component/Menu_1';
import {Link} from 'react-router-dom';
import '../index.css';
import Atras from '../component/Atras.png';


class Noticias extends Component {
    render(){
        return(
          
            <div>
        
              <center>
              <Encabezado_EW/>
              </center>

              <div class="Atras">
                    <Link to="/M_Guia"><img src={Atras} alt="" width="15%" heigth="15%" positio></img></Link>
                    </div>

                    <center>
                       
                         <label align="center"><h2><strong>Noticias</strong></h2></label>
                         <iframe width="80%" height="350px" src="https://www.elcolombiano.com/cronologia/noticias/meta/terremotos"></iframe>
                       </center> 

                        <center>
                      <Menu_1/>
              </center>
               
            </div>
            
        );
       
    }
}
export default Noticias;