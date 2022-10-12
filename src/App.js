import React from 'react';
import './style.css';
import Car from './Car.js';

export default function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Car
        nombre="Rayo McQueen"
        modelo="Chevrolet Corvette C6 de NASCAR"
        imagen="https://i.ytimg.com/vi/2gRcvS2ltjE/maxresdefault.jpg"
        descripcion="Auto veloz de la pelicula Cars"
        style={{ margin: '6px' }}
      />
      <Car
        nombre="Mate"
        modelo="International L-170"
        imagen="https://www.venta-de.com.ve/sh-img/latest_grua%2Bmate%2Bcars.jpeg"
        descripcion="Compañero fiel del auto veloz de la pelicula Cars"
        style={{ margin: '6px' }}
      />
    </div>
  );
}
