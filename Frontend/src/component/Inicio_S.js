import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Inicio_S extends Component {
    render(){
        return(
            
            <form>
                <div class="form-group formularios">
                    <label for="ejemplo">Usuario</label><br></br>
                    <input type="text" class="form-control"></input>
                </div>
                <div>
                     <label>Contraseña</label><br></br>
                     <input type="password" class="form-control"></input>
                </div>
                
                <Link to="/Principal"><button type="submit" class="btn btn-primary boton1 button">Iniciar Sesión</button></Link>
            </form>
        );
    }
}
export default Inicio_S;