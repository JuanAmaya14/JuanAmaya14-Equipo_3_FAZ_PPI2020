import React, { Component } from 'react';
import Encabezado_EW from '../component/Encabezado_EW';
import Menu from '../component/Menu';
import { Link } from 'react-router-dom';

class M_Guia extends Component {
    render() {
        return (
            <center>
            <div>
                
                
                    <Encabezado_EW />
                    <label class="label2"><strong></strong></label>
                    <label align="center" class="Titulo"><strong>Guia</strong></label>
                    </div>
                    <label class="label2"><strong></strong></label>
                    <div>
                    <Link to="/Que_son"><button type="submit" class="btn btn-primary boton1 button">¿Que son los terremotos?</button></Link>
                    <Link to="/Que_hacer"><button type="submit" class="btn btn-primary boton1 button">¿Que hacer en caso de un terremoto?</button></Link>
                    <Link to="/Noticias"><button type="submit" class="btn btn-primary boton1 button">Noticias</button></Link>

                    <Menu />
                
            </div>

            </center>
        );
    }
}
export default M_Guia;