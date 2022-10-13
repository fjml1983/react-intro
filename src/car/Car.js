import React from 'react';
import './Car.css';

export default function Car(props) {
  //Style from: https://www.w3schools.com/howto/howto_css_cards.asp

  const estiloDivCardContenedor = {
    padding: '0px 16px 16px',
  };

  return (
    <div style={props.style}>
      <div className="estiloDivCard">
        <img
          className="estiloImgCard"
          src={props.imagen}
          alt="Imagen del carro"
        />
        <div style={estiloDivCardContenedor}>
          <h2>{props.nombre}</h2>
          <p>
            <b>Descripción:</b> {props.descripcion}
          </p>
          <em>
            <b>Modelo:</b> {props.modelo}
          </em>
        </div>
      </div>
    </div>
  );
}
