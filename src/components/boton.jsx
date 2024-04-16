import React from "react";
import '../stylesheets/boton.css'; 

const esOperador = valor => {
  return isNaN(valor) && (valor !== '.') && (valor !== '=');
}

function Boton(props) {
  return (
    // <div className={`contenedor-boton ${(isNaN(props.children) ? 'operador' : 'numero')}`}>
    <div 
      className={`contenedor-boton ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()} 
      onClick={() => props.manejarClick(props.children)}>
        {props.children}
    </div>
  );

}

export default Boton;