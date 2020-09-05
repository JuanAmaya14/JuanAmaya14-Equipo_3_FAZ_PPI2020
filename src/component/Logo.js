import React, { Component } from 'react';
import Logo_1 from './Logo_1.png';

class Logo extends Component {
    render(){
        return(
            <div class="imgP" align="center">
              <center>
                   <img src={Logo_1} alt="" width="150" heigth="150" ></img>
                   <h1>Earthquake Warning</h1>
                </center>
               
            </div>
        );
    }
}
export default Logo;