import React, { Component } from 'react';
import Encabezado_EW from '../component/Encabezado_EW';
import Menu_1 from '../component/Menu_1';
import { Link } from 'react-router-dom';
import '../index.css';


class M_Guia extends Component {
    render() {
        return (
            <div>
                <div>
                    <center>

                        <Encabezado_EW />
                        <label class="label2"><strong></strong></label>
                        <label align="center"><h2><strong>Guia</strong></h2></label>

                    </center>

                </div>
                <br></br>
                <br></br>
                <br></br>
            

                <div>

                    <center>
                        <Link to="/Que_son"><button type="submit" class="btn btn-primary boton1 button">¿Que son los terremotos?</button></Link>
                        <br></br>
                        <br></br>
                        <Link to="/Que_hacer"><button type="submit" class="btn btn-primary boton1 button">¿Que hacer en caso de un terremoto?</button></Link>
                        <br></br>
                        <br></br>     
                         <Link to="/Noticias"><button type="submit" class="btn btn-primary boton1 button">Noticias</button></Link>
                    </center>
                </div>

                <center>
                    <div><Menu_1/></div>
                </center>

            </div>


        );
    }
}
export default M_Guia;