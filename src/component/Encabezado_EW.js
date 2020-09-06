import React, { Component } from 'react';
import Logo from './Logo_1.png';

class Encabezado_EW extends Component {
    render(){
        return(
            <div class="Header">
             
              <img src={Logo} alt="" width="20%" heigth="20%" class="img3"></img>
              
               
                <h2 class="inline">Earthquake Warning</h2>
               
            </div>
        );
    }
}
export default Encabezado_EW;