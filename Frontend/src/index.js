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



     </Switch>
      
  </BrowserRouter>
</React.StrictMode>,
    
  
  document.getElementById('root')
);



