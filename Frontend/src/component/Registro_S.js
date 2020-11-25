import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const addBtn = document.querySelector('#add-btn');

addBtn.onclick=function(){
    const NombreInput=document.querySelector('#nombre-input');
    const ClaveInput=document.querySelector('#clave-input');
    const CorreoInput=document.querySelector('#correo-input');
    const Nombre=NombreInput.value;
    const Clave=ClaveInput.value;
    const Correo=CorreoInput.value;
    NombreInput.value="";
    ClaveInput.value="";
    CorreoInput.value="";

    fetch('http://localhost:4001/nuevo-Usuario',{
        headers:{
            'Content-type':'application/json'
        },
        method: 'POST',
        body: JSON.stringify({Nombre:Nombre,Clave:Clave,Correo:Correo})
    })
    .then(res=>res.json());
    
}

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