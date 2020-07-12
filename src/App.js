import React, {Fragment, useState} from 'react';
import './App.css';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Mensaje from './componentes/Mensaje';
import Resultado from './componentes/Resultado';
import Spinner from './componentes/Spinner';

function App() {

   // definir el state
   const [cantidad, guardarCantidad] = new useState(0);
   const [plazo, guardarPlazo] = new useState('');
   const [total, guardarTotal] = new useState(0);
   const [cragando, guardarCargando] = new useState(false);

   
   let componente;
   if(cragando){
     componente = <Spinner/>
   }else if(total === 0){
    componente = <Mensaje/>
   }else{
    componente = <Resultado
            total = {total}
            plazo = {plazo}
            cantidad={cantidad}
    
    />
   }

  return (
    <Fragment>

      < Header
        titulo= "Cotizador de prestamos"
        descripcion= "Utiliza el formulario y obten una cotización"
      />

      <div className= "container">
      <Formulario
        cantidad= {cantidad}
        guardarCantidad = {guardarCantidad}
        plazo= {plazo}
        guardarPlazo = {guardarPlazo}
        total = {total}
        guardarTotal = {guardarTotal}
        guardarCargando = {guardarCargando}

      />

      <div className= "mensajes">
      {componente}
       </div>

     
      </div>
     

    </Fragment>
        
      
    
  );
}

export default App;
