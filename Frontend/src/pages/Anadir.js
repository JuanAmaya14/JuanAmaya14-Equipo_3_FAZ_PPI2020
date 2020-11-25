import React, { Component } from 'react';
import Encabezado_EW from '../component/Encabezado_EW';
import Menu from '../component/Menu';
import { Link } from 'react-router-dom';
import '../index.css';
import Atras from '../component/Atras.png';

class Anadir extends Component {
  render() {
    return (

      <div>
        <center>

          <Encabezado_EW />
        </center>


        <div class="Atras">
          <Link to="/Principal"><img src={Atras} alt="" width="15%" heigth="15%"></img></Link>
        </div>

        <br />
        <center>
        <label align="center"><h2><strong>Registrar dispositivo</strong></h2></label>
        </center>

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <center>
          <div class="form-group formularios">
            <label for="ejemplo"><strong>IP: </strong></label>
            <input type="text" class="form-control"></input>
          </div>

          <br></br>
          <br></br>
          <Link to="/Principal_Dis"><button type="submit" class="btn btn-primary boton1 button">Registrar</button></Link>
        </center>
        <center>
          <Menu/>
        </center>
      </div>
    );
  }
}
export default Anadir;