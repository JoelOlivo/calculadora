import './App.css';
import freeCodeCampLogo from './img/freecodecamp-logo.png'; 
import Boton from './components/boton';
import Pantalla from './components/pantalla';
import BotonLimpiar from './components/botonLimpiar';
import { useState } from 'react';
import { evaluate } from 'mathjs'; 

function App() {

  const [input, setInput] = useState(''); 

  const agregarInput = valor => {
    if (valor === '+' || valor === '-' || valor === '*' || valor === '/') {
      if (input.includes('+') || input.includes('-') || input.includes('*') || input.includes('/')) {
        alert('Ya agregaste un operador'); 
      } else {
        setInput(input + valor);  
      }
    } else {
      setInput(input + valor);
    }
  }

  const calcularResultado = () => {
    if (!input) {
      alert('agrega algo');
      setInput('');
    } else {
      setInput(evaluate(input));
    }
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img src={freeCodeCampLogo} className='freecodecamp-logo' alt="freecodecamp-logo"/>  
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>

        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonLimpiar manejarClear = {() => setInput('')}>
            Limpiar
          </BotonLimpiar>
        </div>
      </div>

    </div>
  );
}

export default App;
