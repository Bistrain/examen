import React from "react";
import { useState, useEffect } from "react";




const Inicio = () => {
   
    // hooks
    const[nombre, setNombre] = useState([])


    useEffect(() => {
        obtenerDatos()
     },[])


    
    const obtenerDatos = async () => {
       const data = await fetch('https://jsonplaceholder.typicode.com/users')
       const users = await data.json()
       setNombre(users)
    }
    
   
  
    return (
      <div className="componen"> 
        <h1>Usuarios:</h1>
        <ul>
            {
                nombre.map( item => ( 
                    <li key="item.id">{item.name}</li>
                ))
            }
        </ul>
      </div>
    );
  }

  export default Inicio;
  