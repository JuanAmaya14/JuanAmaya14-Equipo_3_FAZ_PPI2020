import React from 'react';

import './App.css';
import { BrowserRouter , Route} from 'react-router-dom';
import Inicio_S from './component/Inicio_S';

function App() {
  return (
   <BrowserRouter>
      <Route path="/index" component={Inicio_S}/>
   </BrowserRouter>
  );
}

export default App;
