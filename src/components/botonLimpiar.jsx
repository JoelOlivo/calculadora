import React from 'react';
import '../stylesheets/botonLimpiar.css'

const BotonLimpiar = (props) => (
  <div className='boton-limpiar'>
    {props.children}
  </div>
);

export default BotonLimpiar;