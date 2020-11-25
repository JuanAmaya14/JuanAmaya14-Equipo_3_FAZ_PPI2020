import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Inicio_S extends Component {
    render(){
        return(
            
            <form>
                <div class="form-group formularios">
                    <label for="ejemplo">Nombre de Usuario</label><br></br>
                    <input type="text" class="form-control" id="nombre-input"></input>
                </div>
                <div>
                     <label>Contraseña</label><br></br>
                     <input type="password" class="form-control"id="clave-input"></input>
                </div>
                <div>
                     <label>Correo</label><br></br>
                     <input type="email" class="form-control"id="correo-input"></input>
                </div>
                
                <Link to="/"><button type="submit" class="btn btn-primary boton1 button"id="add-btn">Registrarse</button></Link>
            </form>
        );
    }
}
export default Inicio_S;