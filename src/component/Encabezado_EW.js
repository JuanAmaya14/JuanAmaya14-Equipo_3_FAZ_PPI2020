import React, { Component } from 'react';
import Logo from './Logo_1.png';

class Encabezado_EW extends Component {
    render(){
        return(
            <div class="Header">
             
              <img src={Logo} alt="" width="20%" heigth="20%" class="img3 inline"></img>
              <label class="inline-block label3" align="center"><strong>Earthquake Warning</strong></label>
            
            </div>
            
        );
    }
}
export default Encabezado_EW;