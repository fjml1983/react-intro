import React from 'react';
import './Car.css';

export default function Car(props) {
  //Style from: https://www.w3schools.com/howto/howto_css_cards.asp

  const estiloDivCardContenedor = {
    padding: '0px 16px 16px',
  };

  const hacerBeep = (sonido) => {
    alert(sonido);
    /*if (props.modelo.includes('C6')) {
      alert('Ku-Chaw');
    } else if (props.modelo.includes('170')) {
      alert('BEEP BEEP Mate Tom-mate');
    }*/
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
          <br/>
          { props.anio < 1970 &&
            <img
              src="https://www.atotoclassicclub.com/images/logo_a.png"
              width = "50"
              alt="Insignia Clásico"
            />
          }
          <br />
          <br />
          <button onClick={() => hacerBeep(props.sonido)}>
            Hacer beep-beep
          </button>
        </div>
      </div>
    </div>
  );
}
