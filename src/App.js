import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";


import Inicio from './components/Inicio';
import Ventana from './components/Ventana';
import PageNotFound from './components/PageNotFound';





function App() {

  return (

  <Router>

    <div className="contenedor">
      <h1>Nombres</h1>
{/*       
      <Switch>
        <Route path="/about" component={Inicio} />
        <Route path="/about" component={Ventana} />
        <Route path="/about" component={PageNotFound} />
      </Switch> */}
      
        
      <Inicio/>
      <Ventana/>

        <button className='btn' type="button" >Ir a la sigueiente pagina</button>
    
    </div>
  </Router>


  );
}


export default App;
