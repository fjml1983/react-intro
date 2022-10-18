import React, { useState, useEffect } from 'react';
import './style.css';
import Car from './car/Car.js';

export default function App() {
  //Esta es una variable que representaría al arreglo de objetos JSON que se podrían recuperar desde una API Rest.
  const personajesDesdeAPI = [
    {
      nombre: 'Rayo McQueen',
      modelo: 'Chevrolet Corvette C6 de NASCAR',
      imagen: 'https://i.ytimg.com/vi/2gRcvS2ltjE/maxresdefault.jpg',
      descripcion: 'El auto mas veloz de la serie de peliculas de Cars.',
      sonido: 'KuChao',
      anio: '2006',
    },
    {
      nombre: 'Mate',
      modelo: 'International L-170',
      imagen:
        'https://www.venta-de.com.ve/sh-img/latest_grua%2Bmate%2Bcars.jpeg',
      descripcion: 'El Compañero fiel del auto veloz de la pelicula Cars.',
      sonido: 'BEEP BEEP Mate Chocolate',
      anio: '1960',
    },
  ];

  //variable de estado que nos permitirá almacenar a los personajes a pintar (renderizar).
  const [personajes, setPersonajes] = useState([]);

  //Un useEffect con dependencia de arreglo vacío [], siempre se dispara una vez al iniciar el componente.
  useEffect(() => {
    //TODO: Aquí iria la petición a la API utilizando FETCH y se asignaría la respuesta de la API a la variable personajesDesdeAPI, algo como esto:
    // personajesDesdeAPI = fetch("http://personajesdecars.com/all")
    
    //Se actualiza la variable de estado 'personajes' con los datos recuperados.
    setPersonajes(personajesDesdeAPI);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {
        //dibujar por cada personaje en la lista de personajes un componente Car.
        personajes.map((personaje) => (
          <Car
            nombre={personaje.nombre}
            modelo={personaje.modelo}
            imagen={personaje.imagen}
            descripcion={personaje.descripcion}
            sonido={personaje.sonido}
            anio={personaje.anio}
          />
        ))
      }
    </div>
  );
}
