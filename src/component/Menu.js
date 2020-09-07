import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Menu extends Component {
    render(){
        return(
          <div class="span-navbar-bottom Menu fixed-bottom">
              
              <nav class="navbar fixed-bottom">
               <ul>
                   <Link to="/" class="nav-brand"><button class="btn inline">Guía</button></Link>
                   <Link to="/" class="nav-brand"><button class="btn inline">Dispostivos</button></Link>
                   <Link to="/" class="nav-brand"><button class="btn inline">Ajustes</button></Link>
               </ul>
           </nav>
              
              
          </div>
         
            
        );
    }
}
export default Menu;