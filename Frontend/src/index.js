import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter , Route, Switch} from 'react-router-dom';
import Inicio from './pages/Inicio';
import Registro from './pages/Registro';
import Principal from './pages/Principal';
import M_Guia from './pages/M_Guia';
import Que_son from './pages/Que_son';
import Que_hacer from './pages/Que_hacer';
import Configuracion from './pages/Configuracion.js';
import Anadir from './pages/Anadir.js';
import Estado_Disp from './pages/Estado_Disp';

ReactDOM.render(
<React.StrictMode>

  <BrowserRouter>
     <Switch>
      
       <Route exact path="/" component={Inicio}/>
       <Route exact path="/Registro" component={Registro}/>
       <Route exact path="/Principal" component={Principal}/>
       <Route exact path="/M_Guia" component={M_Guia}/>
       <Route exact path="/Que_son" component={Que_son}/>
       <Route exact path="/Que_hacer" component={Que_hacer}/>
       <Route exact path="/Configuracion" component={Configuracion}/>
       <Route exact path="/Anadir" component={Anadir}/>
       <Route exact path="/Estado_Dispositivo" component={Estado_Disp}/>



     </Switch>
      
  </BrowserRouter>
</React.StrictMode>,
    
  
  document.getElementById('root')
);



