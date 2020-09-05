import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Encabezado_EW from'./component/Encabezado_EW';
import Logo from'./component/Logo';
import Inicio_S from'./component/Inicio_S';

ReactDOM.render(
  <React.StrictMode>
    
    <Logo />
    <Inicio_S />

  </React.StrictMode>,
  document.getElementById('root')
);



