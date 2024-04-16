import React from 'react';
import '../stylesheets/botonLimpiar.css'

const BotonLimpiar = (props) => (
  <div className='boton-limpiar' onClick={props.manejarClear}>
    {props.children}
  </div>
);

export default BotonLimpiar;