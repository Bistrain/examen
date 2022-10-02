import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


import Inicio from './components/Inicio';
import Ventana from './components/Ventana';
import PageNotFound from './components/PageNotFound';





function App() {
 
  //  cargar(){

  //   <Ventana />

  //  }


  return (
    <Router>


      <div className="contenedor">
        <h1>Nombres</h1>
        
        <Routes>
          <Route path='/' element={<Inicio/>} />
          <Route path='/ventana' element={<Ventana/>} />
          <Route path='/pagenotfound' element={<PageNotFound/>} />          
        </Routes>
          
     
    

        <button className='btn' type="button" onClick={ ()=> {this.cargar()}}>Ir a la sigueiente pagina</button>
      

      </div>
    </Router>
  );
}


export default App;
