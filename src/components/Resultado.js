import React from "react";
import styled from "@emotion/styled";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import PropTypes from "prop-types";

const Mensaje = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const MensajeCot = styled.p`
  color: #00838f;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

const ContenedorResultado = styled.div`
  padding: 0.5rem;
  background-color: rgb(127, 224, 237);
  text-align: center;
  border: 1px solid #26c6da;
  margin-top: 1rem;
  position: relative;
`;

const Resultado = ({ cotizacion }) => {
  return cotizacion === 0 ? (
    <Mensaje>Elige una marca, año y plan de seguro</Mensaje>
  ) : (
    <ContenedorResultado>
      <TransitionGroup component="p" className="resultado">
        <CSSTransition
          classNames="resultado"
          key={cotizacion}
          timeout={{ enter: 500, exit: 500 }}>
          <MensajeCot>El total es: $ {cotizacion} </MensajeCot>
        </CSSTransition>
      </TransitionGroup>
    </ContenedorResultado>
  );
};

Resultado.propTypes = {
  cotizacion: PropTypes.number.isRequired,
};

export default Resultado;
