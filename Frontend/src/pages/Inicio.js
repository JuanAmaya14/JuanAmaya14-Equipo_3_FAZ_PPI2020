import React, { Component } from 'react';
import Logo from '../component/Logo.js';
import {Link} from 'react-router-dom';
import Inicio_S from '../component/Inicio_S';

class Inicio extends Component {
    render(){
        return(
            <div>
              <center>
                    <Logo />
<br></br>
                    <br></br>
                   <label class="label2"><strong>Earthquake Warning</strong></label>
                   <Inicio_S />
                   <Link to="/Registro"><button type="submit" class="btn btn-primary boton1 button">Registrarse</button></Link>
                </center>
               
            </div>
        );
    }
}
export default Inicio;