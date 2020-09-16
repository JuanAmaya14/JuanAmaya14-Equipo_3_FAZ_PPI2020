import React, { Component } from 'react';
import Encabezado_EW from '../component/Encabezado_EW';
import '../component/carga.css';


class carga extends Component {
    render() {
        return (
            <center>
                <div>
                    <Encabezado_EW />
                </div>
                <div class="loader-container">
    <div class="loader"></div>
    <div class="loader2"></div>
</div>

            </center>

        );     
        }

}

export default carga;