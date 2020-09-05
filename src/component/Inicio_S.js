import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Logo from './Logo.js';
class Inicio_S extends Component {
    render(){
        return(
            <div>
             
                   <Link to={Logo}><button>Boton</button></Link>
                
               
            </div>
        );
    }
}
export default Inicio_S;