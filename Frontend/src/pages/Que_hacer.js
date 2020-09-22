import React, { Component } from 'react';
import Encabezado_EW from '../component/Encabezado_EW';
import Menu_1 from '../component/Menu_1';
import { Link } from 'react-router-dom';
import Atras from '../component/Atras.png';
import '../index.css';
import O_Peligosos from '../component/O_Peligosos.png';
import debajo_mesa from '../component/debajo_mesa.png';



class Que_hacer extends Component {
    render() {
        return (
            <div>
                <center>
                    <Encabezado_EW />
                </center>

                <div class="Atras">
                    <Link to="/M_Guia"><img src={Atras} alt="" width="15%" heigth="15%"></img></Link>
                </div>

                <div>
                <center>
                <label align="center"><h2><strong> ¿Que hacer en caso de un terremoto?</strong></h2></label>

                    <br></br>
                    </center>
                   
                    <div class="text_borde">
                    <center>
                    <br></br>
                    <h4>Pero antes hay que preparar lo siguiente: </h4>
                    <br></br>
                   </center>
                   </div>
 
                <div class="text_borde">
                    <li>Tienes que determinar que objetos representan un peligro, por ejemplo cuadros, espejos, lámparas, macetas colgantes,ventiladores colgantes etc. y reubíquelos o asegúrelos de manera que no puedan caerle encima de ocurrir un sismo.</li>
                    <br></br>
                    <li>Practique con su familia simulacros de terremoto con anticipacion.</li>

                    <br></br>
                    <li>Conozca dónde y cómo cerrar el paso de la electricidad, el gas y el agua</li>

                    <br></br>

                    <li>Mantenga una reserva de alimentos no perecibles y agua potable para al menos 3 días.</li>
                    <br></br>
                    <li>mantenga un kit de emergencias</li>

                    <br></br>
                    <br></br>
                    <center><h4>Durante el terremoto</h4></center>
                    <br></br>
                    <li>En lo posible manténgase tranquilo  </li>
                    <br></br>
                    <li>Manténgase alejado de ventanas, vidrios, espejos, puertas exteriores o paredes y de todo lo que pueda caerle como lámparas y muebles.</li>
                    <center><img src={O_Peligosos} alt="" width="60%" heigth="60%"></img></center>
                    <br></br>
                    <li>posisionate debajo de un lugar seguro, como un escritorio o una mesa resistente. Una vez allí agárrese con ambas manos de una pata.</li>
                    <center><img src={debajo_mesa} alt="" width="60%" heigth="60%"></img></center>

                    <br></br>
                    <center><b>Si usted está en…</b></center>
                    <br></br>
                    <li><b>La calle:</b> aléjese los postes y los cables eléctricos.</li>
                    <br></br>
                    <li><b>Un edificio: </b>Métase debajo de una mesa o escritorio, alejado de ventanas y paredes exteriores. Permanezca allí hasta que haya pasado el movimiento. NO use los ascensores.</li>
                    <br></br>
                    <li><b>El interior de un lugar concurrido como un restaurante o un cine:</b> Quédese donde esté. No corra hacia las puertas. Aléjese de las repisas que contengan objetos que puedan caerle.</li>
                    <br></br>
                    <li><b>Un carro en movimiento:</b> Pare tan rápido como sea posible y quédese dentro del vehículo hasta que pase el temblor. Evite detenerse cerca o debajo de edificios, árboles, puentes o cables eléctricos. </li>
                <br></br>
                <i>  <b>Fuentes: </b>https://www.igepn.edu.ec/que-hacer-ante/un-sismo</i>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                </div>
                </div>

                <div>
                    <center>
                        <Menu_1/>
                    </center>
                </div>

            </div>
        );
    }
}

export default Que_hacer;