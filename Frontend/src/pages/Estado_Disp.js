import React, { Component } from 'react';
import Encabezado_EW from '../component/Encabezado_EW';
import Menu_dis_a from '../component/Menu_dis_a';
import { Link } from 'react-router-dom';
import Atras from '../component/Atras.png';
import '../index.css';

class Estado_Disp extends Component {
  render() {
    return (

      <div>

        <Encabezado_EW />

        <br />
        <div class="Atras">
          <Link to="/Principal_Dis"><img src={Atras} alt="" width="15%" heigth="15%"></img></Link>
        </div>
        <center>
          <label align="center block"><h2><strong>Dispositivo 1</strong></h2></label>
          </center>
          <label align="right" class="label4">Estado: </label>
          <br />
          <div class="block">
          <center>
            <span className="inline-block textEst">Notificación</span>
            <label className="switchBtn">
              <input type="checkbox" />
              <div className="slide round"></div>
            </label>
          </center>
          </div>
          <div class="block">
<center>
            <span className="inline-block textEst">Alarma</span>
            <label className="switchBtn">
              <input type="checkbox" />
              <div className="slide round"></div>
            </label>
            </center>
          </div>
          <center>
          <Link to="/Registro_T"><button type="submit" class="btn btn-primary boton1 button">Registro de Terremotos</button></Link>
</center>
          <Menu_dis_a />
      
      </div>

    );
  }
}
export default Estado_Disp;