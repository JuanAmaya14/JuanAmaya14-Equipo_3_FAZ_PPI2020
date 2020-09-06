import React, { Component } from 'react';
import Logo_1 from './Logo_2.png';

class Logo extends Component {
    render(){
        return(
            <div class="imgP" align="center">
              <center>
                   <img src={Logo_1} alt="" width="140" heigth="140" ></img>
                   
                </center>
               
            </div>
        );
    }
}
export default Logo;