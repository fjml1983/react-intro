import React from 'react';
import './style.css';
import Car from './Car.js';

export default function App() {
  return (
    <div>
      <Car
        nombre="Rayo McQueen"
        marca="Corvette C6"
        imagen="https://i.ytimg.com/vi/2gRcvS2ltjE/maxresdefault.jpg"
        descripcion="Auto veloz de la pelicula Cars"
      />
      <Car
        nombre="Mate"
        marca="Chevrolet L170"
        imagen="https://www.venta-de.com.ve/sh-img/latest_grua%2Bmate%2Bcars.jpeg"
        descripcion="Compañero fiel del auto veloz de la pelicula Cars"
      />
    </div>
  );
}
