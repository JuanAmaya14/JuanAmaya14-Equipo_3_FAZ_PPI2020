import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter , Route, Switch} from 'react-router-dom';
import Inicio from './pages/Inicio';
import Registro from './pages/Registro';
import Principal from './pages/Principal';

ReactDOM.render(
<React.StrictMode>

  <BrowserRouter>
     <Switch>
      
       <Route exact path="/" component={Inicio}/>
       <Route exact path="/Registro" component={Registro}/>
       <Route exact path="/Principal" component={Principal}/>

     </Switch>
      
  </BrowserRouter>
</React.StrictMode>,
    
  
  document.getElementById('root')
);



