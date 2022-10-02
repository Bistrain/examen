import React from "react";



const Ventana = () => {
 

    return (
      <div className="ventana"> 

        <h1>Fotos: </h1>
        <img
          className="imagen-ventana"
          src={require('../imagenes/fondo4.jpg')}
          alt='primer imagen'
        />
      </div>
    );
  }

  export default Ventana;