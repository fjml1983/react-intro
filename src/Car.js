import React from 'react';
import './style.css';

export default function Car(props) {
  const estiloDivCard = {
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    borderRadius: '5px',
  };

  const estiloImgCard = {
    width: '100%',
    borderRadius: '5px 5px 0 0',
  };

  const estiloDivCardContenedor = {
    padding: '0px 16px 16px',
  };

  return (
    <div style={estiloDivCard}>
      <img style={estiloImgCard} src={props.imagen} alt="Imagen del carro" />
      <div style={estiloDivCardContenedor}>
        <h2>{props.nombre}</h2>
        <p>
          <b>Descripción:</b> {props.descripcion}
        </p>
        <em>
          <b>Marca:</b> {props.marca}
        </em>
      </div>
    </div>
  );
}
