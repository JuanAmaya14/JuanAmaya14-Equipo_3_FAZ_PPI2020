import React, { Component } from 'react';
import Logo from '../component/Logo.js';
import {Link} from 'react-router-dom';
import Registro_S from '../component/Registro_S';

class Inicio extends Component {
    render(){
        return(
            <div>
              <center>
                    <Logo />
                   <label class="label2"><strong>Earthquake Warning</strong></label>
                   <Registro_S />
                 
                </center>
               
            </div>
        );
    }
}
export default Inicio;
